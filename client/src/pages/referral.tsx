import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Loader2, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { ARCATEXT_APP_STORE_URL } from "@/lib/app-store";

// Arcatext referral program.
//
// DELIBERATELY NOT THE PROMO PAGE, even though the two look alike. A promo code
// grants free access (it sets subscription_tier = 'promo'); a referral code
// grants NOTHING on its own. The referred user still subscribes and pays
// through In-App Purchase exactly as normal — the code only records who sent
// them, and adds extra tokens on top of their tier allotment once they are
// actually paying.
//
// That distinction is what keeps this page on the right side of App Review
// guideline 3.1.1: nothing here unlocks paid functionality outside IAP. The
// copy below has to keep saying so plainly, because a visitor who arrives
// expecting a discount and instead finds a subscription wall will feel misled
// — and because a page that hedged about it would be the one that attracts
// scrutiny.
//
// Like /redeem, the app does not link here: guideline 3.1.1(a) forbids calls
// to action pointing at non-IAP mechanisms outside the US storefront, and
// Arcatext ships globally. The influencer distributes this URL herself.
//
// Three steps, because identity must be proven before attribution is written:
//   email → 6-digit OTP → referral code
// The OTP step creates the account for a first-time visitor
// (shouldCreateUser: true), so "join before you have an account" and "join
// after" are the same code path.
//
// Unlike /redeem there is no Edge Function in the middle. activate-promo-code
// needs one because it runs with the service role; claim_referral_code is a
// SECURITY DEFINER RPC that resolves the caller from auth.uid(), so the
// browser can call it directly with the public anon key and still not be able
// to attach a code to anyone else's account.

function isIOSDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  if (/iPhone|iPod|iPad/i.test(ua)) return true;
  return /Macintosh/i.test(ua) && (navigator.maxTouchPoints ?? 0) > 1;
}

// A referral link is shared as /referral?code=HANNAH. Read once, at mount.
//
// This depends on detect-locale preserving the query string when it rewrites
// an unprefixed path to the visitor's locale — it rebuilt the URL from
// pathname alone until this page needed otherwise.
function codeFromQuery(): string {
  if (typeof window === "undefined") return "";
  try {
    return new URLSearchParams(window.location.search).get("code")?.trim() ?? "";
  } catch {
    return "";
  }
}

type Step = "email" | "otp" | "code" | "done";

interface ClaimResult {
  code: string | null;
  bonusTokens: number | null;
  bonusMonths: number | null;
  // False when the user is not yet a paying subscriber: the claim is recorded,
  // but the perk and the influencer's commission window both start at their
  // first subscription payment.
  activeNow: boolean;
  // What was ACTUALLY credited to their balance just now. Reported separately
  // from activeNow because the two can disagree: a code whose bonus is zero,
  // or a first period whose usage offset swallowed it, leaves this at 0 and
  // the page must not claim tokens arrived when none did.
  tokensCredited: number;
}

export default function Referral() {
  const { t, i18n } = useTranslation();

  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [code, setCode] = useState(codeFromQuery);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [result, setResult] = useState<ClaimResult | null>(null);
  const [isIOS] = useState(isIOSDevice);

  const emailTrimmed = email.trim();
  const codeTrimmed = code.trim();

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
        setError(otpError.message || t("referral.errors.sendFailed"));
        return;
      }
      setStep("otp");
      if (isResend) setNotice(t("referral.otp.resent"));
    } catch {
      setError(t("referral.errors.network"));
    } finally {
      setBusy(false);
    }
  }

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
        setError(t("referral.errors.badOtp"));
        return;
      }
      setStep("code");
    } catch {
      setError(t("referral.errors.network"));
    } finally {
      setBusy(false);
    }
  }

  // Same two failure shapes /redeem is careful about, and conflating them is
  // the same bug: a genuine rejection (unknown code, already joined) comes back
  // as a successful call carrying success:false, while a transport or auth
  // failure surfaces as an error. Reporting the latter as "invalid code" makes
  // people abandon a perfectly good code on a flaky connection.
  async function claim() {
    if (!codeTrimmed) return;
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const { data, error: rpcError } = await supabase.rpc("claim_referral_code", {
        p_code: codeTrimmed,
      });

      if (rpcError) {
        // The RPC is granted to `authenticated` only, so an expired session
        // reads as a permissions failure rather than a network one.
        const message = rpcError.message ?? "";
        if (/jwt|permission|denied/i.test(message)) {
          setStep("email");
          setOtp("");
          setError(t("referral.errors.sessionExpired"));
          return;
        }
        setError(t("referral.errors.network"));
        return;
      }

      if (data?.success) {
        setResult({
          code: data.data?.code ?? codeTrimmed,
          bonusTokens: data.data?.bonus_tokens ?? null,
          bonusMonths: data.data?.bonus_months ?? null,
          activeNow: Boolean(data.data?.active_now),
          tokensCredited: Number(data.data?.tokens_credited ?? 0),
        });
        setStep("done");
        return;
      }

      setError(data?.message || t("referral.errors.invalidCode"));
    } catch {
      setError(t("referral.errors.network"));
    } finally {
      setBusy(false);
    }
  }

  function formatTokens(n: number | null): string {
    if (n === null) return "";
    return new Intl.NumberFormat(i18n.language).format(n);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <section className="flex-1 pt-24 pb-16">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-secondary mb-2">
            {t("referral.title")}
          </h1>
          <p className="text-gray-600 mb-8">{t("referral.subtitle")}</p>

          <Card>
            <CardContent className="pt-6">
              {!isSupabaseConfigured && (
                <p className="text-sm text-red-600 mb-4">
                  {t("referral.errors.notConfigured")}
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
                    {t("referral.email.label")}
                  </label>
                  <Input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoFocus
                    required
                    placeholder={t("referral.email.placeholder")}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(null);
                    }}
                  />
                  <p className="text-sm text-gray-500">{t("referral.email.hint")}</p>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={busy || !emailTrimmed || !isSupabaseConfigured}
                  >
                    {busy ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      t("referral.email.cta")
                    )}
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
                    {t("referral.otp.label")}
                  </label>
                  <p className="text-sm text-gray-500">
                    {t("referral.otp.sentTo", { email: emailTrimmed })}
                  </p>
                  <Input
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    autoFocus
                    required
                    maxLength={6}
                    value={otp}
                    onChange={(e) => {
                      setOtp(e.target.value.replace(/\D/g, ""));
                      setError(null);
                    }}
                  />
                  <Button type="submit" className="w-full" disabled={busy || otp.length < 6}>
                    {busy ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      t("referral.otp.cta")
                    )}
                  </Button>
                  <div className="flex justify-between text-sm">
                    <button
                      type="button"
                      className="text-primary underline"
                      onClick={() => void sendCode(true)}
                      disabled={busy}
                    >
                      {t("referral.otp.resend")}
                    </button>
                    <button
                      type="button"
                      className="text-gray-500 underline"
                      onClick={() => {
                        setStep("email");
                        setOtp("");
                        setError(null);
                      }}
                    >
                      {t("referral.otp.changeEmail")}
                    </button>
                  </div>
                </form>
              )}

              {step === "code" && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void claim();
                  }}
                  className="space-y-4"
                >
                  <label className="block text-sm font-medium text-secondary">
                    {t("referral.code.label")}
                  </label>
                  <Input
                    autoFocus
                    required
                    autoCapitalize="characters"
                    placeholder={t("referral.code.placeholder")}
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                      setError(null);
                    }}
                  />
                  <p className="text-sm text-gray-500">{t("referral.code.hint")}</p>
                  <Button type="submit" className="w-full" disabled={busy || !codeTrimmed}>
                    {busy ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      t("referral.code.cta")
                    )}
                  </Button>
                </form>
              )}

              {step === "done" && result && (
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                    <div>
                      <p className="font-semibold text-secondary">
                        {t("referral.done.title", { code: result.code })}
                      </p>
                      {result.bonusTokens !== null && (
                        <p className="text-sm text-gray-600 mt-1">
                          {t("referral.done.bonus", {
                            tokens: formatTokens(result.bonusTokens),
                            months: result.bonusMonths ?? 0,
                          })}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* The honest version of "when does this start". A claimant who
                      is not yet subscribed has recorded attribution and nothing
                      else; saying otherwise would set up a support ticket. */}
                  <p className="text-sm text-gray-600">
                    {result.activeNow
                      ? result.tokensCredited > 0
                        ? t("referral.done.credited", {
                            tokens: formatTokens(result.tokensCredited),
                          })
                        : t("referral.done.activeNow")
                      : t("referral.done.startsOnSubscribe")}
                  </p>

                  <div className="pt-2 border-t">
                    <p className="font-medium text-secondary mb-2">
                      {t("referral.done.nextTitle")}
                    </p>
                    <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                      <li>{t("referral.done.step1")}</li>
                      <li>{t("referral.done.step2", { email: emailTrimmed })}</li>
                      <li>{t("referral.done.step3")}</li>
                    </ol>
                    {isIOS ? (
                      <Button asChild className="w-full mt-4">
                        <a href={ARCATEXT_APP_STORE_URL}>{t("referral.done.download")}</a>
                      </Button>
                    ) : (
                      <p className="text-sm text-gray-500 mt-4">
                        {t("referral.done.mobileOnly")}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
              {notice && <p className="text-sm text-green-700 mt-4">{notice}</p>}
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
