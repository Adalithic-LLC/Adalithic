import { useCallback, useState } from "react";
import { Loader2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

// Referral profit-share ledger (admin only).
//
// WHY THIS IS A CLIENT-SIDE PAGE WITH NO SERVER: adalithic.com is a static
// GitHub Pages site. The deploy workflow runs `vite build` and publishes
// dist/public — there is no runtime, so there is nowhere to keep a service-role
// key. Every privileged read therefore goes through a SECURITY DEFINER RPC that
// re-checks the admin identity server-side (is_referral_admin()), and the
// referral tables themselves have RLS enabled with zero policies so the anon
// and authenticated roles can read nothing directly.
//
// In other words: this page being public is not a leak. Anyone can load the
// bundle and see the table markup; without the admin account's JWT every RPC
// it calls raises 'Not authorized'. Hiding the route would be decoration, not
// security, so it is not hidden — it is simply unlinked.
//
// The shared supabase client uses persistSession: false, so a refresh signs you
// out. That is the right default for a public site and a mild annoyance here;
// signing in again takes one OTP.

interface SummaryRow {
  code: string;
  influencer_name: string | null;
  is_active: boolean;
  bonus_tokens: number;
  bonus_months: number;
  // Optional PER-USER cap. null = no cap, which is what a campaign-wide deal
  // wants: one shared window for everyone, ended by revenue_share_ends_at.
  revenue_share_months: number | null;
  revenue_share_percent: number;
  revenue_share_ends_at: string | null;
  total_users: number;
  active_users: number;
  paying_users: number;
  gross_usd: number;
  attributed_usd: number;
  commission_usd: number;
  paid_out_usd: number;
  outstanding_usd: number;
}

interface DetailRow {
  user_id: string;
  email: string | null;
  claimed_at: string;
  referral_start_at: string | null;
  subscription_tier: string | null;
  claim_active: boolean;
  bonus_active: boolean;
  bonus_ends_at: string | null;
  payments: number;
  gross_usd: number;
  attributed_usd: number;
  commission_usd: number;
}

const usd = (n: number | null | undefined) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    Number(n ?? 0),
  );

const num = (n: number | null | undefined) =>
  new Intl.NumberFormat("en-US").format(Number(n ?? 0));

const date = (iso: string | null) =>
  iso ? new Date(iso).toLocaleDateString("en-US", { dateStyle: "medium" }) : "—";

export default function AdminReferrals() {
  const [step, setStep] = useState<"email" | "otp" | "ready">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [rows, setRows] = useState<SummaryRow[]>([]);
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState<SummaryRow | null>(null);
  const [detail, setDetail] = useState<DetailRow[] | null>(null);

  // Returns the freshly loaded rows as well as setting them. Callers need the
  // new data synchronously: setRows schedules a re-render, it does not update
  // `rows` in the current closure, so re-selecting from `rows` right after
  // would pick up the pre-save values.
  const loadSummary = useCallback(async (): Promise<SummaryRow[] | null> => {
    setBusy(true);
    setError(null);
    try {
      const { data, error: rpcError } = await supabase.rpc("admin_referral_summary");
      if (rpcError) {
        // The RPC raises 'Not authorized' for anyone but the admin account, so
        // a non-admin who signs in here gets told plainly rather than shown an
        // empty table they might mistake for "no referrals yet".
        setError(
          /not authorized/i.test(rpcError.message ?? "")
            ? "That account is not the referral admin."
            : rpcError.message || "Could not load the ledger.",
        );
        return null;
      }
      const fresh = (data as SummaryRow[]) ?? [];
      setRows(fresh);
      setStep("ready");
      return fresh;
    } finally {
      setBusy(false);
    }
  }, []);

  async function sendCode() {
    if (!email.trim()) return;
    setBusy(true);
    setError(null);
    try {
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        // No account is ever created from this page — the admin already exists,
        // and a typo should fail rather than silently mint a new user.
        options: { shouldCreateUser: false },
      });
      if (otpError) {
        setError(otpError.message || "Could not send the code.");
        return;
      }
      setStep("otp");
    } finally {
      setBusy(false);
    }
  }

  async function verify() {
    if (otp.length < 6) return;
    setBusy(true);
    setError(null);
    try {
      const { error: verifyError } = await supabase.auth.verifyOtp({
        email: email.trim(),
        token: otp.trim(),
        type: "email",
      });
      if (verifyError) {
        setError("That code didn't match.");
        return;
      }
      await loadSummary();
    } finally {
      setBusy(false);
    }
  }

  async function openDetail(row: SummaryRow) {
    setSelected(row);
    setDetail(null);
    setError(null);
    const { data, error: rpcError } = await supabase.rpc("admin_referral_code_detail", {
      p_code: row.code,
    });
    if (rpcError) {
      setError(rpcError.message || "Could not load that code.");
      return;
    }
    setDetail((data as DetailRow[]) ?? []);
  }

  // Settings are sent field-by-field: the RPC treats a NULL argument as "leave
  // alone", so a single changed field never blanks the rest of the row. That
  // convention cannot express "set this back to nothing", which is why the RPC
  // has explicit p_clear_* flags and why this takes an arbitrary arg object
  // rather than one field name and value.
  async function saveSetting(row: SummaryRow, args: Record<string, unknown>) {
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const { data, error: rpcError } = await supabase.rpc("admin_upsert_referral_code", {
        p_code: row.code,
        ...args,
      });
      if (rpcError) {
        setError(rpcError.message || "Could not save.");
        return;
      }
      if (!data?.success) {
        setError(data?.message || "Could not save.");
        return;
      }
      setNotice("Saved. Figures below are recalculated from the new settings.");
      const fresh = await loadSummary();
      if (selected?.code === row.code) {
        // `{ ...row }` here was a copy of the row as it looked BEFORE the save,
        // so the settings panel kept showing the old numbers while the table
        // above it showed the new ones — change the window from 12 to 6 and the
        // panel still read 12.
        const refreshed = fresh?.find((r) => r.code === row.code);
        if (refreshed) {
          setSelected(refreshed);
          await openDetail(refreshed);
        }
      }
    } finally {
      setBusy(false);
    }
  }

  async function createCode(fields: {
    code: string;
    influencer_name: string;
    bonus_tokens: number;
    bonus_months: number;
    revenue_share_ends_at: string | null;
    revenue_share_percent: number;
  }) {
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const { data, error: rpcError } = await supabase.rpc("admin_upsert_referral_code", {
        p_code: fields.code,
        p_influencer_name: fields.influencer_name || null,
        p_bonus_tokens: fields.bonus_tokens,
        p_bonus_months: fields.bonus_months,
        // New codes get NO per-user cap: a campaign-wide deal is the common
        // shape, and a cap would silently truncate it if the cutoff were later
        // extended. Add one afterwards if a deal actually needs it.
        p_clear_revenue_share_months: true,
        p_revenue_share_percent: fields.revenue_share_percent,
        p_revenue_share_ends_at: fields.revenue_share_ends_at,
      });
      if (rpcError) {
        setError(rpcError.message || "Could not create the code.");
        return false;
      }
      if (!data?.success) {
        setError(data?.message || "Could not create the code.");
        return false;
      }
      // The RPC upserts on lower(code), so re-submitting an existing code
      // edits it rather than failing. Say which happened — silently editing a
      // live campaign because of a typo would be worse than an error.
      setNotice(
        data.created
          ? `Created ${fields.code}. Share it as adalithic.com/referral?code=${encodeURIComponent(fields.code)}`
          : `${fields.code} already existed and was updated.`,
      );
      await loadSummary();
      return true;
    } finally {
      setBusy(false);
    }
  }

  // Detach a user from a code, or put them back. The RPC is keyed by email
  // because that is what an admin has to hand when someone writes in; a user
  // whose account was deleted has no email and cannot be detached, which is
  // why the button is disabled for them.
  async function setClaimActive(row: DetailRow, active: boolean) {
    if (!row.email) return;
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const { data, error: rpcError } = await supabase.rpc(
        "admin_set_referral_claim_active",
        { p_user_email: row.email, p_active: active },
      );
      if (rpcError) {
        setError(rpcError.message || "Could not change that claim.");
        return;
      }
      if (!data?.success) {
        setError(data?.message || "Could not change that claim.");
        return;
      }
      setNotice(
        active
          ? `${row.email} is attached to this code again.`
          : `${row.email} is detached. Their perk stops and no further payments are attributed; rows already recorded stay.`,
      );
      const fresh = await loadSummary();
      const refreshed = selected ? fresh?.find((r) => r.code === selected.code) : undefined;
      if (refreshed) {
        setSelected(refreshed);
        await openDetail(refreshed);
      }
    } finally {
      setBusy(false);
    }
  }

  async function recordPayout(row: SummaryRow, amount: number, note: string) {
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const { data, error: rpcError } = await supabase.rpc(
        "admin_record_referral_payout",
        { p_code: row.code, p_amount_usd: amount, p_note: note || null },
      );
      if (rpcError) {
        setError(rpcError.message || "Could not record the payout.");
        return;
      }
      if (!data?.success) {
        setError(data?.message || "Could not record the payout.");
        return;
      }
      setNotice(`Recorded ${usd(amount)} paid to ${row.code}.`);
      await loadSummary();
    } finally {
      setBusy(false);
    }
  }

  const visible = rows.filter((r) => {
    const q = filter.trim().toLowerCase();
    if (!q) return true;
    return (
      r.code.toLowerCase().includes(q) ||
      (r.influencer_name ?? "").toLowerCase().includes(q)
    );
  });

  if (step !== "ready") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="w-full max-w-sm">
          <CardContent className="pt-6 space-y-4">
            <h1 className="text-xl font-bold">Referral ledger</h1>
            {!isSupabaseConfigured && (
              <p className="text-sm text-red-600">This page isn't configured.</p>
            )}
            {step === "email" ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void sendCode();
                }}
                className="space-y-3"
              >
                <Input
                  type="email"
                  autoFocus
                  required
                  placeholder="admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" className="w-full" disabled={busy}>
                  {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send code"}
                </Button>
              </form>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void verify();
                }}
                className="space-y-3"
              >
                <Input
                  inputMode="numeric"
                  autoFocus
                  required
                  maxLength={6}
                  placeholder="6-digit code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                />
                <Button type="submit" className="w-full" disabled={busy || otp.length < 6}>
                  {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Verify"}
                </Button>
              </form>
            )}
            {error && <p className="text-sm text-red-600">{error}</p>}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Referral ledger</h1>
          <Button variant="outline" onClick={() => void loadSummary()} disabled={busy}>
            <RefreshCw className="h-4 w-4 mr-2" /> Refresh
          </Button>
        </div>

        <Input
          placeholder="Filter by code or influencer…"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm bg-white"
        />

        {error && <p className="text-sm text-red-600">{error}</p>}
        {notice && <p className="text-sm text-green-700">{notice}</p>}

        <NewCodeForm disabled={busy} onCreate={createCode} />

        <Card>
          <CardContent className="pt-6 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Influencer</TableHead>
                  <TableHead className="text-right">Users</TableHead>
                  {/* Detached claims still count in Users so the number
                      reconciles with the drill-down list; Active excludes them. */}
                  <TableHead className="text-right">Active</TableHead>
                  <TableHead className="text-right">Paying</TableHead>
                  <TableHead className="text-right">Gross</TableHead>
                  {/* Gross is every dollar those users have ever paid. In-window
                      is the part that falls inside revenue_share_months, with an
                      annual payment pro-rated. They differ, and conflating them
                      is how an influencer gets overpaid. */}
                  <TableHead className="text-right">In window</TableHead>
                  <TableHead className="text-right">Commission</TableHead>
                  <TableHead className="text-right">Paid</TableHead>
                  <TableHead className="text-right">Owed</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {visible.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={11} className="text-center text-gray-500">
                      No referral codes yet.
                    </TableCell>
                  </TableRow>
                )}
                {visible.map((r) => (
                  <TableRow key={r.code} className={r.is_active ? "" : "opacity-50"}>
                    <TableCell className="font-mono font-medium">{r.code}</TableCell>
                    <TableCell>{r.influencer_name ?? "—"}</TableCell>
                    <TableCell className="text-right">{num(r.total_users)}</TableCell>
                    <TableCell className="text-right">{num(r.active_users)}</TableCell>
                    <TableCell className="text-right">{num(r.paying_users)}</TableCell>
                    <TableCell className="text-right">{usd(r.gross_usd)}</TableCell>
                    <TableCell className="text-right">{usd(r.attributed_usd)}</TableCell>
                    <TableCell className="text-right font-medium">
                      {usd(r.commission_usd)}
                    </TableCell>
                    <TableCell className="text-right">{usd(r.paid_out_usd)}</TableCell>
                    <TableCell className="text-right font-semibold">
                      {usd(r.outstanding_usd)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="ghost" onClick={() => void openDetail(r)}>
                        Open
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {selected && (
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold font-mono">{selected.code}</h2>
                <Button variant="ghost" size="sm" onClick={() => setSelected(null)}>
                  Close
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <CodeActiveToggle
                  code={selected}
                  disabled={busy}
                  onToggle={(active) => void saveSetting(selected, { p_is_active: active })}
                />
                <CutoffSetting
                  key={`cutoff-${selected.revenue_share_ends_at ?? "none"}`}
                  value={selected.revenue_share_ends_at}
                  disabled={busy}
                  onSave={(iso) =>
                    void saveSetting(
                      selected,
                      iso === null
                        ? { p_clear_revenue_share_ends_at: true }
                        : { p_revenue_share_ends_at: iso },
                    )
                  }
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <NumberSetting
                  key={`revenue_share_months-${selected.revenue_share_months}`}
                  label="Per-user month cap (optional)"
                  help="Caps how many months of ONE subscriber's payments earn commission, counted from their own first payment. Leave blank for a campaign-wide deal — the cutoff date above should be the only thing that ends the money."
                  value={selected.revenue_share_months}
                  onSave={(v) =>
                    void saveSetting(selected, 
                      v === null
                        ? { p_clear_revenue_share_months: true }
                        : { p_revenue_share_months: v },
                    )
                  }
                  disabled={busy}
                />
                <NumberSetting
                  key={`revenue_share_percent-${selected.revenue_share_percent}`}
                  label="Commission %"
                  value={selected.revenue_share_percent}
                  onSave={(v) => void saveSetting(selected, { p_revenue_share_percent: v })}
                  disabled={busy}
                />
                <NumberSetting
                  key={`bonus_tokens-${selected.bonus_tokens}`}
                  label="Bonus tokens / month"
                  help="Extra tokens the referred user gets on top of their plan."
                  value={selected.bonus_tokens}
                  onSave={(v) => void saveSetting(selected, { p_bonus_tokens: v })}
                  disabled={busy}
                />
                <NumberSetting
                  key={`bonus_months-${selected.bonus_months}`}
                  label="Bonus months"
                  help="How long the user keeps the perk. Independent of the revenue-share window."
                  value={selected.bonus_months}
                  onSave={(v) => void saveSetting(selected, { p_bonus_months: v })}
                  disabled={busy}
                />
              </div>

              <PayoutForm
                owed={selected.outstanding_usd}
                disabled={busy}
                onRecord={(amount, note) => void recordPayout(selected, amount, note)}
              />

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Started</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Perk</TableHead>
                      <TableHead className="text-right">Payments</TableHead>
                      <TableHead className="text-right">Gross</TableHead>
                      <TableHead className="text-right">In window</TableHead>
                      <TableHead className="text-right">Commission</TableHead>
                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {detail === null && (
                      <TableRow>
                        <TableCell colSpan={10} className="text-center text-gray-500">
                          Loading…
                        </TableCell>
                      </TableRow>
                    )}
                    {detail?.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={10} className="text-center text-gray-500">
                          Nobody has used this code yet.
                        </TableCell>
                      </TableRow>
                    )}
                    {detail?.map((d) => (
                      <TableRow key={d.user_id} className={d.claim_active ? "" : "opacity-50"}>
                        <TableCell className="text-sm">
                          {d.email ?? d.user_id}
                          {!d.claim_active && (
                            <span className="ml-2 text-xs text-gray-500">(detached)</span>
                          )}
                        </TableCell>
                        <TableCell className="text-sm">{date(d.claimed_at)}</TableCell>
                        {/* Blank until their first payment under the referral —
                            both the perk and the commission window start there. */}
                        <TableCell className="text-sm">{date(d.referral_start_at)}</TableCell>
                        <TableCell className="text-sm">{d.subscription_tier ?? "—"}</TableCell>
                        <TableCell className="text-sm">
                          {d.bonus_active ? `until ${date(d.bonus_ends_at)}` : "—"}
                        </TableCell>
                        <TableCell className="text-right">{num(d.payments)}</TableCell>
                        <TableCell className="text-right">{usd(d.gross_usd)}</TableCell>
                        <TableCell className="text-right">{usd(d.attributed_usd)}</TableCell>
                        <TableCell className="text-right font-medium">
                          {usd(d.commission_usd)}
                        </TableCell>
                        <TableCell className="text-right">
                          {/* Detaching stops the perk and stops further revenue
                              rows. Rows already recorded stay, because they
                              describe money that really moved. */}
                          <Button
                            size="sm"
                            variant="ghost"
                            disabled={busy || !d.email}
                            onClick={() => void setClaimActive(d, !d.claim_active)}
                          >
                            {d.claim_active ? "Detach" : "Re-attach"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

function NewCodeForm({
  disabled,
  onCreate,
}: {
  disabled?: boolean;
  onCreate: (f: {
    code: string;
    influencer_name: string;
    bonus_tokens: number;
    bonus_months: number;
    revenue_share_ends_at: string | null;
    revenue_share_percent: number;
  }) => Promise<boolean>;
}) {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [bonusTokens, setBonusTokens] = useState("1000000");
  const [bonusMonths, setBonusMonths] = useState("12");
  const [endsAt, setEndsAt] = useState("");
  const [percent, setPercent] = useState("20");

  const nums = [bonusTokens, bonusMonths, percent].map(Number);
  const valid = code.trim() !== "" && nums.every((n) => !Number.isNaN(n) && n >= 0);

  if (!open) {
    return (
      <Button variant="outline" onClick={() => setOpen(true)}>
        New referral code
      </Button>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <p className="font-medium">New referral code</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Field label="Code" hint="Case-insensitive. What the influencer shares.">
            <Input value={code} onChange={(e) => setCode(e.target.value)} className="bg-white font-mono" autoFocus />
          </Field>
          <Field label="Influencer">
            <Input value={name} onChange={(e) => setName(e.target.value)} className="bg-white" />
          </Field>
          <Field label="Bonus tokens / month" hint="On top of the plan allowance.">
            <Input inputMode="numeric" value={bonusTokens} onChange={(e) => setBonusTokens(e.target.value)} className="bg-white" />
          </Field>
          <Field label="Bonus months" hint="How long the user keeps the perk.">
            <Input inputMode="numeric" value={bonusMonths} onChange={(e) => setBonusMonths(e.target.value)} className="bg-white" />
          </Field>
          <Field label="Revenue share ends" hint="Payments in this month are the last that earn commission — the same window for every user of this code. Blank means no cutoff.">
            <Input type="date" value={endsAt} onChange={(e) => setEndsAt(e.target.value)} className="bg-white" />
          </Field>
          <Field label="Commission %">
            <Input inputMode="decimal" value={percent} onChange={(e) => setPercent(e.target.value)} className="bg-white" />
          </Field>
        </div>
        <div className="flex gap-2">
          <Button
            disabled={disabled || !valid}
            onClick={async () => {
              const ok = await onCreate({
                code: code.trim(),
                influencer_name: name.trim(),
                bonus_tokens: Number(bonusTokens),
                bonus_months: Number(bonusMonths),
                revenue_share_ends_at: endsAt === "" ? null : `${endsAt}T23:59:59Z`,
                revenue_share_percent: Number(percent),
              });
              if (ok) {
                setOpen(false);
                setCode("");
                setName("");
              }
            }}
          >
            Create
          </Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">{label}</label>
      {children}
      {hint && <p className="text-xs text-gray-500">{hint}</p>}
    </div>
  );
}

// `value` may be null, and an empty box saves null rather than being rejected.
// That is what makes "no per-user cap" expressible: without it there would be
// no way to remove a cap once set, which is the trap a campaign-wide deal falls
// into when the cutoff is later extended.
function NumberSetting({
  label,
  help,
  value,
  onSave,
  disabled,
}: {
  label: string;
  help?: string;
  value: number | null;
  onSave: (v: number | null) => void;
  disabled?: boolean;
}) {
  const asText = value === null || value === undefined ? "" : String(value);
  const [draft, setDraft] = useState(asText);
  const trimmed = draft.trim();
  const dirty = draft !== asText;
  const parses = trimmed === "" || !Number.isNaN(Number(trimmed));
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">{label}</label>
      <div className="flex gap-2">
        <Input
          inputMode="decimal"
          placeholder="none"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          className="bg-white"
        />
        <Button
          size="sm"
          disabled={disabled || !dirty || !parses}
          onClick={() => onSave(trimmed === "" ? null : Number(trimmed))}
        >
          Save
        </Button>
      </div>
      {help && <p className="text-xs text-gray-500">{help}</p>}
    </div>
  );
}

// The campaign-wide cutoff: the date after which no payment earns commission,
// for every user of this code alike. This is the knob a fixed-term deal wants;
// the per-user cap beside it is for a differently shaped arrangement.
function CutoffSetting({
  value,
  onSave,
  disabled,
}: {
  value: string | null;
  onSave: (iso: string | null) => void;
  disabled?: boolean;
}) {
  const asDate = value ? new Date(value).toISOString().slice(0, 10) : "";
  const [draft, setDraft] = useState(asDate);
  const dirty = draft !== asDate;
  return (
    <div className="flex items-end gap-2">
      <div className="space-y-1">
        <label className="block text-sm font-medium">Revenue share ends</label>
        <Input
          type="date"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          className="bg-white"
          disabled={disabled}
        />
      </div>
      <Button
        size="sm"
        disabled={disabled || !dirty}
        // End of the chosen day. Only the calendar month is used in the
        // calculation, so the time is for human readability, not arithmetic.
        onClick={() => onSave(draft === "" ? null : `${draft}T23:59:59Z`)}
      >
        Save
      </Button>
      {value && (
        <p className="text-xs text-gray-500 pb-2">
          Payments in {new Date(value).toLocaleDateString("en-US", { month: "long", year: "numeric" })} are the last that earn.
        </p>
      )}
      {!value && <p className="text-xs text-gray-500 pb-2">No cutoff — commission continues indefinitely.</p>}
    </div>
  );
}

// is_active on a code means "open to NEW claims" and nothing else. Closing it
// deliberately does NOT strip the perk from users who already claimed it, nor
// stop their payments earning commission — that would punish paying customers
// for a commercial decision. Set bonus tokens to 0 to end a perk outright.
function CodeActiveToggle({
  code,
  onToggle,
  disabled,
}: {
  code: SummaryRow;
  onToggle: (active: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-sm font-medium ${code.is_active ? "text-green-700" : "text-gray-500"}`}
      >
        {code.is_active ? "Open to new claims" : "Closed to new claims"}
      </span>
      <Button
        size="sm"
        variant="outline"
        disabled={disabled}
        onClick={() => onToggle(!code.is_active)}
      >
        {code.is_active ? "Close" : "Re-open"}
      </Button>
    </div>
  );
}

function PayoutForm({
  owed,
  disabled,
  onRecord,
}: {
  owed: number;
  disabled?: boolean;
  onRecord: (amount: number, note: string) => void;
}) {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const parsed = Number(amount);
  const valid = amount.trim() !== "" && !Number.isNaN(parsed) && parsed > 0;

  return (
    <div className="border rounded-md p-4 bg-gray-50 space-y-3">
      <div>
        <p className="font-medium">Record a payout</p>
        {/* Recorded separately from the computed commission on purpose: the
            settings above are editable, so "owed" is a live calculation.
            Without a record of what actually went out, lowering the
            revenue-share window after paying would make this page disagree with
            the bank and there would be no way to tell which was right. */}
        <p className="text-xs text-gray-500">
          Currently owed: {usd(owed)}. Recording a payout subtracts it from the owed
          column; it does not change any commission figure.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          inputMode="decimal"
          placeholder="Amount (USD)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-white sm:max-w-[10rem]"
        />
        <Input
          placeholder="Note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="bg-white"
        />
        <Button
          disabled={disabled || !valid}
          onClick={() => {
            onRecord(parsed, note);
            setAmount("");
            setNote("");
          }}
        >
          Record
        </Button>
      </div>
    </div>
  );
}
