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
  profit_share_months: number;
  profit_share_percent: number;
  total_users: number;
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

  const loadSummary = useCallback(async () => {
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
        return;
      }
      setRows((data as SummaryRow[]) ?? []);
      setStep("ready");
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
  // alone", so a single changed number never blanks the rest of the row.
  async function saveSetting(
    row: SummaryRow,
    field:
      | "p_bonus_tokens"
      | "p_bonus_months"
      | "p_profit_share_months"
      | "p_profit_share_percent"
      | "p_is_active",
    value: number | boolean,
  ) {
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const { data, error: rpcError } = await supabase.rpc("admin_upsert_referral_code", {
        p_code: row.code,
        [field]: value,
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
      await loadSummary();
      if (selected?.code === row.code) {
        const refreshed = { ...row };
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

        <Card>
          <CardContent className="pt-6 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Influencer</TableHead>
                  <TableHead className="text-right">Users</TableHead>
                  <TableHead className="text-right">Paying</TableHead>
                  <TableHead className="text-right">Gross</TableHead>
                  {/* Gross is every dollar those users have ever paid. In-window
                      is the part that falls inside profit_share_months, with an
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
                    <TableCell colSpan={10} className="text-center text-gray-500">
                      No referral codes yet.
                    </TableCell>
                  </TableRow>
                )}
                {visible.map((r) => (
                  <TableRow key={r.code} className={r.is_active ? "" : "opacity-50"}>
                    <TableCell className="font-mono font-medium">{r.code}</TableCell>
                    <TableCell>{r.influencer_name ?? "—"}</TableCell>
                    <TableCell className="text-right">{num(r.total_users)}</TableCell>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <NumberSetting
                  label="Profit-share months"
                  help="How many months of each user's payments earn commission. Changing this recalculates every figure above."
                  value={selected.profit_share_months}
                  onSave={(v) => void saveSetting(selected, "p_profit_share_months", v)}
                  disabled={busy}
                />
                <NumberSetting
                  label="Commission %"
                  value={selected.profit_share_percent}
                  onSave={(v) => void saveSetting(selected, "p_profit_share_percent", v)}
                  disabled={busy}
                />
                <NumberSetting
                  label="Bonus tokens / month"
                  help="Extra tokens the referred user gets on top of their plan."
                  value={selected.bonus_tokens}
                  onSave={(v) => void saveSetting(selected, "p_bonus_tokens", v)}
                  disabled={busy}
                />
                <NumberSetting
                  label="Bonus months"
                  help="How long the user keeps the perk. Independent of the profit-share window."
                  value={selected.bonus_months}
                  onSave={(v) => void saveSetting(selected, "p_bonus_months", v)}
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
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {detail === null && (
                      <TableRow>
                        <TableCell colSpan={9} className="text-center text-gray-500">
                          Loading…
                        </TableCell>
                      </TableRow>
                    )}
                    {detail?.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={9} className="text-center text-gray-500">
                          Nobody has used this code yet.
                        </TableCell>
                      </TableRow>
                    )}
                    {detail?.map((d) => (
                      <TableRow key={d.user_id}>
                        <TableCell className="text-sm">{d.email ?? d.user_id}</TableCell>
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

function NumberSetting({
  label,
  help,
  value,
  onSave,
  disabled,
}: {
  label: string;
  help?: string;
  value: number;
  onSave: (v: number) => void;
  disabled?: boolean;
}) {
  const [draft, setDraft] = useState(String(value));
  const dirty = draft !== String(value);
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">{label}</label>
      <div className="flex gap-2">
        <Input
          inputMode="decimal"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          className="bg-white"
        />
        <Button
          size="sm"
          disabled={disabled || !dirty || draft.trim() === "" || Number.isNaN(Number(draft))}
          onClick={() => onSave(Number(draft))}
        >
          Save
        </Button>
      </div>
      {help && <p className="text-xs text-gray-500">{help}</p>}
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
            profit-share window after paying would make this page disagree with
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
