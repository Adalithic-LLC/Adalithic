import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Loader2, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

// Arcatext promo code redemption.
//
// This page exists because App Review guideline 3.1.1 does not permit unlocking
// paid functionality from inside the app ("Apps may not use their own
// mechanisms to unlock content or functionality, such as license keys"). The
// promo fields were removed from Arcatext; redemption happens here instead, and
// the app simply reflects whatever tier the server reports on its next sync.
//
// The app is deliberately NOT linked to this page. Outside the United States
// storefront, guideline 3.1.1(a) still forbids "buttons, external links, or
// other calls to action" pointing at non-IAP mechanisms, and Arcatext ships
// globally. Codes are distributed with this URL by email/campaign instead.
//
// Three steps, because identity has to be proven before anything is granted:
//   email → 6-digit OTP → promo code
// The OTP step is what creates the account for a first-time user
// (shouldCreateUser: true), so "redeem before you have an account" and "redeem
// after" are the same code path.

// Arcatext's App Store listing (Apple ID 6760385360). The download button is
// conditional on this being non-empty, so clearing it hides the button rather
// than shipping a dead link.
const ARCATEXT_APP_STORE_URL = "https://apps.apple.com/app/id6760385360";

// Arcatext is an iPhone keyboard, so the App Store link only *installs* anything
// on iOS. On a desktop browser it opens a web listing the visitor cannot install
// from — a "Download" button that cannot download. Redemption itself is very
// often done on a desktop (the code arrives by email), so this is the common
// case, not the edge case: show the button on iOS and a plain instruction
// everywhere else.
//
// iPadOS 13+ reports itself as "Macintosh", so a bare userAgent test misses
// iPads; the touch-point check is what separates them from real Macs. Guarded
// for the no-navigator case and defaults to FALSE — showing the instruction to
// an iPhone user is a mild annoyance, showing a dead button is a broken flow.
function isIOSDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  if (/iPhone|iPod|iPad/i.test(ua)) return true;
  return /Macintosh/i.test(ua) && (navigator.maxTouchPoints ?? 0) > 1;
}

type Step = "email" | "otp" | "code" | "done";

interface RedeemResult {
  monthlyTokens: number | null;
  expiresAt: string | null;
}

export default function Redeem() {
  const { t, i18n } = useTranslation();

  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [result, setResult] = useState<RedeemResult | null>(null);
  // Stable for the life of the page; the platform cannot change mid-visit.
  const [isIOS] = useState(isIOSDevice);

  const emailTrimmed = email.trim();
  const codeTrimmed = code.trim();

  // Step 1 — send the OTP. shouldCreateUser is true, so a first-time visitor's
  // account is created here. If they abandon before entering a code, the bare
  // account is swept by delete_incomplete_signups after its grace window (and
  // their pretrial_grant_history row is cleared, so a later real signup is not
  // penalised) — nothing to clean up by hand.
  async function sendCode(isResend = false) {
    if (!emailTrimmed) return;
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email: emailTrimmed,
        options: { shouldCreateUser: true },
      });
      if (otpError) {
        setError(otpError.message || t("redeem.errors.sendFailed"));
        return;
      }
      setStep("otp");
      if (isResend) setNotice(t("redeem.otp.resent"));
    } catch {
      setError(t("redeem.errors.network"));
    } finally {
      setBusy(false);
    }
  }

  // Step 2 — verify. On success the client holds a real user session, which
  // functions.invoke attaches to the redemption call as a bearer token. The
  // Edge Function resolves the user from that token and ignores anything in the
  // request body, so this step is what authorises the grant.
  async function verifyCode() {
    if (otp.length < 6) return;
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const { error: verifyError } = await supabase.auth.verifyOtp({
        email: emailTrimmed,
        token: otp.trim(),
        type: "email",
      });
      if (verifyError) {
        setError(t("redeem.errors.badOtp"));
        return;
      }
      setStep("code");
    } catch {
      setError(t("redeem.errors.network"));
    } finally {
      setBusy(false);
    }
  }

  // Step 3 — redeem.
  //
  // Two failure shapes, and conflating them is the bug worth avoiding: a
  // genuine rejection (unknown / expired / max uses / already redeemed) comes
  // back as HTTP 200 with success:false and its own reason, while a transport
  // or server failure throws. Reporting the latter as "invalid code" makes
  // people abandon a perfectly good code on a flaky connection.
  async function redeem() {
    if (!codeTrimmed) return;
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke(
        "activate-promo-code",
        { body: { code: codeTrimmed } },
      );

      if (fnError) {
        // supabase-js surfaces a non-2xx as an error with the Response tucked
        // into `context`. Read the body before falling back to a generic
        // message: the function answers 400/500 with a real { error } string,
        // and discarding it reports a live-but-unhappy server as unreachable —
        // which is what "Not signed in" from a stale deployment looked like.
        const ctx = (fnError as { context?: Response }).context;
        const status = ctx?.status;

        if (status === 401) {
          setStep("email");
          setOtp("");
          setError(t("redeem.errors.sessionExpired"));
          return;
        }

        let body: { error?: string } | null = null;
        try {
          body = ctx ? await ctx.clone().json() : null;
        } catch {
          /* not JSON — fall through to the generic message */
        }
        setError(body?.error || t("redeem.errors.network"));
        return;
      }

      if (data?.success) {
        setResult({
          monthlyTokens: data.monthlyTokens ?? null,
          expiresAt: data.expiresAt ?? null,
        });
        setStep("done");
        return;
      }

      setError(data?.error || t("redeem.errors.invalidCode"));
    } catch {
      setError(t("redeem.errors.network"));
    } finally {
      setBusy(false);
    }
  }

  function formatExpiry(iso: string | null): string | null {
    if (!iso) return null;
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleDateString(i18n.language, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <section className="flex-1 pt-24 pb-16">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-secondary mb-2">
            {t("redeem.title")}
          </h1>
          <p className="text-gray-600 mb-8">{t("redeem.subtitle")}</p>

          <Card>
            <CardContent className="pt-6">
              {!isSupabaseConfigured && (
                <p className="text-sm text-red-600 mb-4">
                  {t("redeem.errors.notConfigured")}
                </p>
              )}

              {step === "email" && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void sendCode();
                  }}
                  className="space-y-4"
                >
                  <label className="block text-sm font-medium text-secondary">
                    {t("redeem.email.label")}
                  </label>
                  <Input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoFocus
                    required
                    placeholder={t("redeem.email.placeholder")}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(null);
                    }}
                  />
                  <p className="text-sm text-gray-500">
                    {t("redeem.email.hint")}
                  </p>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={busy || !emailTrimmed || !isSupabaseConfigured}
                  >
                    {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : t("redeem.email.cta")}
                  </Button>
                </form>
              )}

              {step === "otp" && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void verifyCode();
                  }}
                  className="space-y-4"
                >
                  <label className="block text-sm font-medium text-secondary">
                    {t("redeem.otp.label")}
                  </label>
                  <p className="text-sm text-gray-600">
                    {t("redeem.otp.sentTo", { email: emailTrimmed })}
                  </p>
                  <Input
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    autoFocus
                    required
                    maxLength={6}
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => {
                      setOtp(e.target.value.replace(/\D/g, "").slice(0, 6));
                      setError(null);
                    }}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={busy || otp.length < 6}
                  >
                    {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : t("redeem.otp.cta")}
                  </Button>
                  <div className="flex justify-between text-sm">
                    <button
                      type="button"
                      className="text-primary hover:underline"
                      disabled={busy}
                      onClick={() => {
                        setStep("email");
                        setOtp("");
                        setError(null);
                        setNotice(null);
                      }}
                    >
                      {t("redeem.otp.changeEmail")}
                    </button>
                    <button
                      type="button"
                      className="text-primary hover:underline"
                      disabled={busy}
                      onClick={() => void sendCode(true)}
                    >
                      {t("redeem.otp.resend")}
                    </button>
                  </div>
                </form>
              )}

              {step === "code" && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void redeem();
                  }}
                  className="space-y-4"
                >
                  <label className="block text-sm font-medium text-secondary">
                    {t("redeem.code.label")}
                  </label>
                  <Input
                    autoFocus
                    required
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    placeholder={t("redeem.code.placeholder")}
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                      setError(null);
                    }}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={busy || !codeTrimmed}
                  >
                    {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : t("redeem.code.cta")}
                  </Button>
                </form>
              )}

              {step === "done" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="h-6 w-6" />
                    <span className="text-lg font-semibold">
                      {t("redeem.done.title")}
                    </span>
                  </div>

                  {result?.monthlyTokens != null && (
                    <p className="text-secondary">
                      {/* No `count` here on purpose: passing it makes i18next
                          look for plural variants (tokens_one / tokens_other)
                          in all 40 locales, which none of them define. The
                          number is already formatted for the locale. */}
                      {t("redeem.done.tokens", {
                        tokens: result.monthlyTokens.toLocaleString(i18n.language),
                      })}
                    </p>
                  )}
                  {formatExpiry(result?.expiresAt ?? null) && (
                    <p className="text-secondary">
                      {t("redeem.done.expires", {
                        date: formatExpiry(result?.expiresAt ?? null),
                      })}
                    </p>
                  )}

                  {/* The single most support-saving line on this page: a code
                      redeemed here lands on THIS email's account, and signing
                      into the app with a different address silently strands it. */}
                  <div className="rounded-md bg-gray-50 border border-gray-200 p-4">
                    <p className="text-sm text-secondary font-medium mb-1">
                      {t("redeem.done.nextTitle")}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t("redeem.done.nextBody", { email: emailTrimmed })}
                    </p>
                  </div>

                  {ARCATEXT_APP_STORE_URL &&
                    (isIOS ? (
                      <Button asChild className="w-full">
                        <a
                          href={ARCATEXT_APP_STORE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("redeem.done.download")}
                        </a>
                      </Button>
                    ) : (
                      <p className="text-sm text-gray-600">
                        {t("redeem.done.mobileOnly")}
                      </p>
                    ))}
                </div>
              )}

              {notice && <p className="text-sm text-green-700 mt-4">{notice}</p>}
              {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
