import { type ReactNode, useEffect, useMemo, useState } from "react";
import {
  ArrowDown, ArrowLeft, ArrowUp, ArrowUpDown, BookOpen, CheckCircle2, ChevronDown, ChevronRight, ChevronUp, Clock,
  Inbox, KeyRound, Loader2, LogOut, MessageSquare, RotateCw, Search, Users, XCircle,
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  type ChatData, type DashboardError, type GroupData, loadChat, loadGroup, loadStudent, type Member, type MissReason,
  type MissedRow, type StudentData,
} from "@/lib/progress-api";

const CODE_KEY = "progress.code"; // sessionStorage only: never in the URL

const errorText: Record<DashboardError, string> = {
  not_found: "That code didn't match a group. Check it and try again.",
  blocked: "Too many attempts. Try again in 5 minutes.",
  network: "Couldn't reach the server. Try again.",
};

type Tab = "vocabulary" | "missed" | "correct" | "chats";

const languageNames = (() => {
  try {
    return new Intl.DisplayNames(["en"], { type: "language" });
  } catch {
    return null;
  }
})();

function languageName(code: string | undefined): string {
  if (!code || code === "und") return "—";
  try {
    return languageNames?.of(code) ?? code;
  } catch {
    return code;
  }
}

const day = (iso: string) => new Date(iso).toLocaleDateString();
const time = (iso: string | null | undefined) => (iso ? new Date(iso).getTime() : null);
const plural = (n: number, one: string, many: string) => `${n.toLocaleString()} ${n === 1 ? one : many}`;

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  return ((parts[0][0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] ?? "" : "")).toUpperCase();
}

// A stable soft colour per name, so the same member keeps the same avatar.
const avatarColors = [
  "bg-sky-100 text-sky-800", "bg-violet-100 text-violet-800", "bg-emerald-100 text-emerald-800",
  "bg-amber-100 text-amber-800", "bg-rose-100 text-rose-800", "bg-teal-100 text-teal-800",
];
function avatarColor(seed: string): string {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return avatarColors[h % avatarColors.length];
}

/* ------------------------------------------------------------------ */
/* Shared building blocks                                              */
/* ------------------------------------------------------------------ */

function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-xl border border-slate-200 bg-white shadow-sm", className)}>{children}</div>;
}

function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-semibold",
        size === "sm" && "h-7 w-7 text-[11px]",
        size === "md" && "h-8 w-8 text-xs",
        size === "lg" && "h-11 w-11 text-sm",
        avatarColor(name),
      )}
    >
      {initials(name)}
    </span>
  );
}

function Pill({ tone, children, title }: { tone: "slate" | "amber" | "blue" | "violet" | "rose"; children: ReactNode; title?: string }) {
  const tones = {
    rose: "border-rose-200 bg-rose-50 text-rose-800",
    slate: "border-slate-200 bg-slate-50 text-slate-700",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
    blue: "border-sky-200 bg-sky-50 text-sky-800",
    violet: "border-violet-200 bg-violet-50 text-violet-800",
  } as const;
  return (
    <Badge variant="outline" title={title} className={cn("whitespace-nowrap px-2 py-0 text-[11px] font-medium leading-5", tones[tone])}>
      {children}
    </Badge>
  );
}

function BackLink({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="mb-3 inline-flex items-center gap-1 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden />
      {children}
    </button>
  );
}

function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
      <div>{children}</div>
    </div>
  );
}

function EmptyState({ icon: Icon = Inbox, children }: { icon?: typeof Inbox; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-4 py-12 text-center text-sm text-slate-500">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
        <Icon className="h-5 w-5 text-slate-400" aria-hidden />
      </span>
      <p>{children}</p>
    </div>
  );
}

const loadErrorText: Record<DashboardError, string> = {
  not_found: "This student's data isn't available any more — they may have left the group or removed the chat.",
  blocked: "Too many attempts. Try again in 5 minutes.",
  network: "Couldn't reach the server.",
};

function ErrorState({ error, onRetry }: { error: DashboardError; onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-4 py-12 text-center" role="alert">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
        <XCircle className="h-5 w-5 text-red-600" aria-hidden />
      </span>
      <p className="max-w-md text-sm text-slate-700">{loadErrorText[error]}</p>
      <Button variant="outline" size="sm" onClick={onRetry} className="gap-1.5">
        <RotateCw className="h-4 w-4" aria-hidden />
        Try again
      </Button>
    </div>
  );
}

// Loads once per key change and again on retry(); a failure is kept as an
// error instead of leaving the view on "Loading…".
function useLoad<T>(load: () => Promise<T>, deps: unknown[], onNotFound?: () => void) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<DashboardError | null>(null);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let live = true;
    setData(null); setError(null);
    load().then((d) => { if (live) setData(d); }).catch((e: unknown) => {
      if (!live) return;
      const err: DashboardError = e === "not_found" || e === "blocked" ? e : "network";
      setError(err);
      if (err === "not_found") onNotFound?.();
    });
    return () => { live = false; };
  }, [...deps, attempt]);
  return { data, error, retry: () => setAttempt((n) => n + 1) };
}

function LoadingState() {
  return (
    <div className="flex items-center justify-center gap-2 py-16 text-sm text-slate-500" role="status">
      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
      Loading…
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Data grid: sticky header, click-to-sort, compact rows, h-scroll      */
/* ------------------------------------------------------------------ */

type SortValue = string | number | null;

interface Column<T> {
  key: string;
  header: string;
  cell: (row: T) => ReactNode;
  sortValue?: (row: T) => SortValue; // omitted: not sortable
  align?: "left" | "right";
  className?: string; // width / wrapping hints
}

interface DataGridProps<T> {
  columns: Column<T>[];
  rows: T[];
  rowKey: (row: T, index: number) => string;
  initialSort?: { key: string; dir: "asc" | "desc" };
  onRowClick?: (row: T) => void;
  rowLabel?: (row: T) => string; // accessible name for clickable rows
  empty: ReactNode;
}

function compare(a: SortValue, b: SortValue): number {
  // Missing values always sort last, whichever the direction.
  if (a === null && b === null) return 0;
  if (a === null) return 1;
  if (b === null) return -1;
  if (typeof a === "number" && typeof b === "number") return a - b;
  return String(a).localeCompare(String(b), undefined, { sensitivity: "base", numeric: true });
}

function DataGrid<T>({ columns, rows, rowKey, initialSort, onRowClick, rowLabel, empty }: DataGridProps<T>) {
  const [sort, setSort] = useState<{ key: string; dir: "asc" | "desc" } | null>(initialSort ?? null);

  const sorted = useMemo(() => {
    const col = sort && columns.find((c) => c.key === sort.key);
    let out = rows;
    if (sort && col?.sortValue) {
      const get = col.sortValue;
      const sign = sort.dir === "asc" ? 1 : -1;
      out = [...rows].sort((a, b) => {
        const va = get(a), vb = get(b);
        if (va === null || vb === null) return compare(va, vb); // nulls last in both directions
        return sign * compare(va, vb);
      });
    }
    return out;
  }, [rows, sort, columns]);

  const toggleSort = (key: string) =>
    setSort((s) => (s?.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" }));

  if (rows.length === 0) return <>{empty}</>;

  return (
    <div className="max-h-[70vh] overflow-auto">
      <table className="w-full border-separate border-spacing-0 text-sm">
        <thead>
          <tr>
            {columns.map((c) => {
              const active = sort?.key === c.key;
              const Icon = !active ? ArrowUpDown : sort.dir === "asc" ? ArrowUp : ArrowDown;
              return (
                <th
                  key={c.key}
                  scope="col"
                  aria-sort={active ? (sort.dir === "asc" ? "ascending" : "descending") : undefined}
                  className={cn(
                    "sticky top-0 z-10 whitespace-nowrap border-b border-r border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 last:border-r-0",
                    c.align === "right" ? "text-right" : "text-left",
                    c.className,
                  )}
                >
                  {c.sortValue ? (
                    <button
                      type="button"
                      onClick={() => toggleSort(c.key)}
                      className={cn(
                        "group inline-flex items-center gap-1 rounded hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        c.align === "right" && "flex-row-reverse",
                        active && "text-slate-900",
                      )}
                    >
                      {c.header}
                      <Icon className={cn("h-3.5 w-3.5", active ? "text-primary" : "text-slate-300 group-hover:text-slate-500")} aria-hidden />
                    </button>
                  ) : c.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr
              key={rowKey(row, i)}
              className={cn(
                "group/row align-top even:bg-slate-50/50 hover:bg-sky-50/60",
                onRowClick && "cursor-pointer focus-visible:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
              )}
              {...(onRowClick && {
                tabIndex: 0,
                role: "button",
                "aria-label": rowLabel?.(row),
                onClick: () => onRowClick(row),
                onKeyDown: (e: React.KeyboardEvent) => {
                  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onRowClick(row); }
                },
              })}
            >
              {columns.map((c) => (
                <td
                  key={c.key}
                  className={cn(
                    "border-b border-r border-slate-100 px-3 py-1.5 text-slate-700 last:border-r-0 group-last/row:border-b-0",
                    c.align === "right" && "text-right tabular-nums",
                    c.className,
                  )}
                >
                  {c.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Toolbar({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 px-3 py-2.5">{children}</div>
  );
}

function SearchBox({ value, onChange, placeholder = "Search" }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div className="relative w-full sm:w-64">
      <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
      <Input
        type="search"
        aria-label={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 border-slate-200 bg-white pl-8 text-sm focus-visible:ring-primary"
      />
    </div>
  );
}

function Count({ shown, total, noun }: { shown: number; total: number; noun: [string, string] }) {
  return (
    <span className="ml-auto text-xs text-slate-500 tabular-nums">
      {shown === total ? plural(total, noun[0], noun[1]) : `${shown.toLocaleString()} of ${plural(total, noun[0], noun[1])}`}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Progress() {
  const [code, setCode] = useState(() => sessionStorage.getItem(CODE_KEY) ?? "");
  const [input, setInput] = useState("");
  const [group, setGroup] = useState<GroupData | null>(null);
  const [error, setError] = useState<DashboardError | null>(null);
  const [student, setStudent] = useState<Member | null>(null);

  useEffect(() => {
    if (!code) return;
    loadGroup(code).then((g) => { setGroup(g); setError(null); }).catch((e: DashboardError) => {
      setError(e); setGroup(null);
      if (e === "not_found") { sessionStorage.removeItem(CODE_KEY); setCode(""); }
    });
  }, [code]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const c = input.trim();
    if (!c) return;
    sessionStorage.setItem(CODE_KEY, c);
    setCode(c);
  };

  const close = () => { sessionStorage.removeItem(CODE_KEY); setCode(""); setGroup(null); };

  // A student or chat load came back not_found. The function answers 404 for
  // a dead code too, so re-check the code: if it was reset, go back to the
  // code form with the same message the gate shows; otherwise refresh the
  // member list (the student may have left) and let the view show its error.
  const recheckCode = () => {
    loadGroup(code).then(setGroup).catch((e: DashboardError) => {
      if (e !== "not_found") return;
      sessionStorage.removeItem(CODE_KEY);
      setStudent(null); setGroup(null); setCode(""); setError("not_found");
    });
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navigation />
      <section className="pb-16 pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {!group ? (
            <Panel className="mx-auto mt-8 max-w-sm p-6">
              <form onSubmit={submit}>
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50">
                  <KeyRound className="h-5 w-5 text-primary" aria-hidden />
                </span>
                <h1 className="mb-1 text-xl font-semibold text-slate-900">Study group progress</h1>
                <p className="mb-5 text-sm text-slate-500">Enter the dashboard code from your study group.</p>
                <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="code">Dashboard code</label>
                <Input id="code" value={input} onChange={(e) => setInput(e.target.value)} autoComplete="off"
                  aria-invalid={!!error} aria-describedby={error ? "code-error" : undefined}
                  className="font-mono uppercase tracking-widest focus-visible:ring-primary" />
                {error && (
                  <p id="code-error" className="mt-2 flex items-center gap-1.5 text-sm text-red-700">
                    <XCircle className="h-4 w-4 shrink-0" aria-hidden />{errorText[error]}
                  </p>
                )}
                <Button className="mt-4 w-full" type="submit">Open</Button>
              </form>
            </Panel>
          ) : student ? (
            <StudentView code={code} member={student} onBack={() => setStudent(null)} onNotFound={recheckCode} />
          ) : (
            <GroupView group={group} onOpen={setStudent} onClose={close} />
          )}
          <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-slate-500">
            Students choose what they share and can leave at any time; their data disappears from this page when they do.
            Each chat shows what the student sent, up to the moment they sent it.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function GroupView({ group, onOpen, onClose }: { group: GroupData; onOpen: (m: Member) => void; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  // Everyone, the creator included: a creator can send their own chats to
  // the group, and hiding them hid that data.
  const rows = group.members.filter((m) => m.name.toLowerCase().includes(q));
  const columns: Column<Member>[] = [
    {
      key: "name", header: "Member", sortValue: (m) => m.name.toLowerCase(), className: "min-w-[14rem]",
      cell: (m) => (
        <span className="flex items-center gap-2.5 py-0.5">
          <Avatar name={m.name} />
          <span className="font-medium text-slate-900">{m.name}</span>
          {m.isCreator && <Pill tone="violet">Creator</Pill>}
          <ChevronRight className="ml-auto h-4 w-4 text-slate-300 group-hover/row:text-slate-500" aria-hidden />
        </span>
      ),
    },
    {
      key: "chats", header: "Shared chats", align: "right", sortValue: (m) => m.sharedChats, className: "w-36",
      cell: (m) => <span className="leading-8">{m.sharedChats.toLocaleString()}</span>,
    },
    {
      key: "active", header: "Last active", align: "right", sortValue: (m) => time(m.lastActive), className: "w-36 whitespace-nowrap",
      cell: (m) => <span className="leading-8">{m.lastActive ? day(m.lastActive) : <span className="text-slate-400">—</span>}</span>,
    },
  ];
  return (
    <div className="space-y-4">
      <Panel className="flex flex-wrap items-center gap-4 px-5 py-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50">
          <Users className="h-5 w-5 text-primary" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-xl font-semibold text-slate-900">{group.name}</h1>
          <p className="text-sm text-slate-500">{plural(group.members.length, "member", "members")}</p>
        </div>
        <Button variant="outline" size="sm" onClick={onClose} className="gap-1.5">
          <LogOut className="h-4 w-4" aria-hidden />
          Close dashboard
        </Button>
      </Panel>
      <Panel className="overflow-hidden">
        <Toolbar>
          <SearchBox value={query} onChange={setQuery} placeholder="Search members" />
          <Count shown={rows.length} total={group.members.length} noun={["member", "members"]} />
        </Toolbar>
        <DataGrid
          columns={columns}
          rows={rows}
          rowKey={(m) => m.userId}
          onRowClick={onOpen}
          rowLabel={(m) => `Open ${m.name}`}
          empty={<EmptyState icon={Users}>{q ? "No members match your search." : "No members yet."}</EmptyState>}
        />
      </Panel>
    </div>
  );
}

function StudentView({ code, member, onBack, onNotFound }: {
  code: string; member: Member; onBack: () => void; onNotFound: () => void;
}) {
  const [tab, setTab] = useState<Tab>("vocabulary");
  const [chat, setChat] = useState<string | null>(null);
  const { data, error, retry } = useLoad(() => loadStudent(code, member.userId), [code, member.userId], onNotFound);

  if (chat) {
    return <ChatView code={code} member={member} conversationId={chat} onBack={() => setChat(null)} onNotFound={onNotFound} />;
  }
  const tabs: [Tab, string, typeof Inbox][] = [
    ["vocabulary", "All Words Used", BookOpen], ["missed", "Missed words", XCircle],
    ["correct", "Now correct", CheckCircle2], ["chats", "Chats", MessageSquare],
  ];
  return (
    <div className="space-y-4">
      <div>
        <BackLink onClick={onBack}>All members</BackLink>
        <Panel className="flex flex-wrap items-center gap-4 px-5 py-4">
          <Avatar name={member.name} size="lg" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h1 className="truncate text-xl font-semibold text-slate-900">{member.name}</h1>
              {member.isCreator && <Pill tone="violet">Creator</Pill>}
            </div>
            <p className="text-sm text-slate-500">
              {plural(member.sharedChats, "chat sent", "chats sent")}
              {member.lastActive ? ` · active ${day(member.lastActive)}` : ""}
            </p>
          </div>
        </Panel>
      </div>

      <Tabs value={tab} onValueChange={(v) => setTab(v as Tab)}>
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <TabsList className="h-auto rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
            {tabs.map(([t, label, Icon]) => (
              <TabsTrigger key={t} value={t}
                className="gap-1.5 rounded-md px-3 py-1.5 text-slate-600 focus-visible:ring-primary data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900 data-[state=active]:shadow-none">
                <Icon className="h-4 w-4" aria-hidden />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>

      {data?.truncated && <Notice>Statistics cover the most recent 5,000 messages.</Notice>}

      <Panel className="overflow-hidden">
        {error ? <ErrorState error={error} onRetry={retry} /> : !data ? <LoadingState /> : tab === "vocabulary" ? (
          <Vocabulary rows={data.vocabulary} />
        ) : tab === "missed" ? (
          <MissedWords rows={data.missed} pendingMessages={data.pendingMessages ?? 0} />
        ) : tab === "correct" ? (
          <NowCorrect rows={data.nowCorrect} />
        ) : (
          <Chats rows={data.chats} onOpen={setChat} />
        )}
      </Panel>
    </div>
  );
}

type VocabRow = StudentData["vocabulary"][number];
function Vocabulary({ rows }: { rows: VocabRow[] }) {
  const [query, setQuery] = useState("");
  const shown = rows.filter((v) => v.word.includes(query.toLowerCase()));
  const columns: Column<VocabRow>[] = [
    { key: "word", header: "Word typed", sortValue: (v) => v.word, cell: (v) => <span className="font-medium text-slate-900">{v.word}</span> },
    { key: "typed", header: "Instances", align: "right", sortValue: (v) => v.typed, className: "w-32", cell: (v) => v.typed.toLocaleString() },
    { key: "sent", header: "Reworded", align: "right", sortValue: (v) => v.sent, className: "w-32", cell: (v) => v.sent.toLocaleString() },
  ];
  return (
    <>
      <Toolbar>
        <SearchBox value={query} onChange={setQuery} placeholder="Search words" />
        <Count shown={shown.length} total={rows.length} noun={["word", "words"]} />
      </Toolbar>
      <DataGrid columns={columns} rows={shown} rowKey={(v) => v.word}
        empty={<EmptyState icon={BookOpen}>{rows.length ? "No words match your search." : "No words used yet."}</EmptyState>} />
    </>
  );
}

/**
 * The times-missed count at or above which a word counts as "commonly missed"
 * for THIS student: the top 20% of their missed words by times missed, and
 * never fewer than 2 misses. Recomputed from their data on every load, so it
 * moves as they send more chats.
 */
function commonlyMissedThreshold(rows: MissedRow[]): number {
  if (rows.length === 0) return Infinity;
  const counts = rows.map((r) => r.misses).sort((a, b) => b - a);
  const index = Math.max(0, Math.ceil(counts.length * 0.2) - 1);
  return Math.max(2, counts[index]);
}

const reasons: Record<MissReason, { label: string; tone: "slate" | "amber" | "blue" | "violet" | "rose"; title: string }> = {
  translation: { label: "Translation", tone: "blue", title: "Typed in another language" },
  spelling: { label: "Spelling", tone: "amber", title: "Misspelled (accents included)" },
  grammar: { label: "Grammar", tone: "violet", title: "Right word, wrong form: conjugation, agreement, gender, number or tense" },
  wrong_word: { label: "Wrong in context", tone: "rose", title: "A real word, but the wrong one here" },
  added: { label: "Added", tone: "slate", title: "Not typed: Reword added it" },
};
const reasonLabel = (r: MissedRow) => (r.reason ? reasons[r.reason]?.label ?? null : null);
/**
 * The word(s) as Reword actually sent them ("estás"), not the dictionary
 * form the row is grouped under ("estar"). A row groups every form of one
 * word, so several sent forms are listed together.
 */
const rewordedTo = (r: MissedRow) => (r.forms?.length ? r.forms.join(", ") : r.word);

const missedRowKey = (r: { pending?: boolean; misused?: boolean; word: string }) =>
  `${r.pending ? "p" : r.misused ? "w" : "a"}:${r.word}`;

function MissedWords({ rows, pendingMessages }: { rows: MissedRow[]; pendingMessages: number }) {
  const [onlyCommonlyMissed, setOnlyCommonlyMissed] = useState(false);
  const [query, setQuery] = useState("");
  const threshold = commonlyMissedThreshold(rows);
  const isCommonlyMissed = (r: MissedRow) => r.misses >= threshold;
  const commonlyMissedCount = rows.filter(isCommonlyMissed).length;
  const visible = onlyCommonlyMissed ? rows.filter(isCommonlyMissed) : rows;
  const q = query.trim().toLowerCase();
  const shown = q
    ? visible.filter((r) => [
      r.word, ...(r.forms ?? []), r.originalWord, r.originalMessage, languageName(r.language), reasonLabel(r), r.correction,
    ].some((s) => s?.toLowerCase().includes(q)))
    : visible;
  const columns: Column<MissedRow>[] = [
    {
      key: "word", header: "Reworded To", sortValue: rewordedTo, className: "min-w-[10rem]",
      cell: (r) => {
        return (
          <div className="space-y-0.5">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-medium text-slate-900">{rewordedTo(r)}</span>
              {isCommonlyMissed(r) && (
                <Pill tone="rose" title={`Missed ${threshold}+ times: among this student's most missed words`}>
                  Commonly missed
                </Pill>
              )}
              {r.pending && <Pill tone="amber">analysis pending</Pill>}
            </div>
            {r.misused && r.correction && (
              <div className="text-xs text-slate-500" title="Replaced in the sent message with">→ {r.correction}</div>
            )}
          </div>
        );
      },
    },
    {
      key: "reason", header: "Reason", sortValue: (r) => reasonLabel(r), className: "whitespace-nowrap",
      cell: (r) => {
        const reason = r.reason ? reasons[r.reason] : undefined;
        return reason
          ? <Pill tone={reason.tone} title={reason.title}>{reason.label}</Pill>
          : <span className="text-slate-400">—</span>;
      },
    },
    {
      key: "original", header: "Original Word", sortValue: (r) => r.originalWord || null, className: "min-w-[8rem]",
      cell: (r) => r.originalWord || <span className="text-slate-400">—</span>,
    },
    {
      key: "message", header: "Original Message", sortValue: (r) => r.originalMessage || null, className: "min-w-[16rem] max-w-md",
      cell: (r) => r.originalMessage
        ? <span className="line-clamp-3 text-slate-600" title={r.originalMessage}>{r.originalMessage}</span>
        : <span className="text-slate-400">—</span>,
    },
    {
      key: "language", header: "Language", sortValue: (r) => (r.language && r.language !== "und" ? languageName(r.language) : null),
      className: "whitespace-nowrap",
      cell: (r) => r.language && r.language !== "und"
        ? <Pill tone="blue">{languageName(r.language)}</Pill>
        : <span className="text-slate-400">—</span>,
    },
    { key: "misses", header: "Times missed", align: "right", sortValue: (r) => r.misses, className: "w-28 whitespace-nowrap", cell: (r) => r.misses.toLocaleString() },
    { key: "last", header: "Last missed", align: "right", sortValue: (r) => time(r.lastMissedAt), className: "w-28 whitespace-nowrap", cell: (r) => day(r.lastMissedAt) },
  ];
  return (
    <>
      {pendingMessages > 0 && (
        <div className="border-b border-slate-200 bg-amber-50/60 px-3 py-2 text-sm text-amber-900">
          {pendingMessages} {pendingMessages === 1 ? "message is" : "messages are"} not analyzed yet. Their words are
          matched by spelling for now and marked "analysis pending".
        </div>
      )}
      <Toolbar>
        <SearchBox value={query} onChange={setQuery} placeholder="Search missed words" />
        <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-700">
          <Switch checked={onlyCommonlyMissed} onCheckedChange={setOnlyCommonlyMissed} className="focus-visible:ring-primary" />
          Commonly missed only ({commonlyMissedCount})
        </label>
        <Count shown={shown.length} total={visible.length} noun={["word", "words"]} />
      </Toolbar>
      <DataGrid columns={columns} rows={shown} rowKey={missedRowKey}        empty={
          <EmptyState icon={XCircle}>
            {rows.length > 0 && visible.length === 0
              ? "No commonly missed words yet — a word needs at least 2 misses to count."
              : q ? "No missed words match your search." : "No missed words yet."}
          </EmptyState>
        } />
    </>
  );
}

type CorrectRow = StudentData["nowCorrect"][number];
function NowCorrect({ rows }: { rows: CorrectRow[] }) {
  const [query, setQuery] = useState("");
  const shown = rows.filter((r) => r.word.toLowerCase().includes(query.trim().toLowerCase()));
  const columns: Column<CorrectRow>[] = [
    {
      key: "word", header: "Word", sortValue: (r) => r.word,
      cell: (r) => (
        <span className="flex flex-wrap items-center gap-1.5">
          <span className="font-medium text-slate-900">{r.word}</span>
          {r.pending && <Pill tone="amber">analysis pending</Pill>}
          {r.misused && <Pill tone="rose" title="Was used in the wrong context; now used correctly">Wrong in context</Pill>}
        </span>
      ),
    },
    { key: "misses", header: "Past misses", align: "right", sortValue: (r) => r.misses, className: "w-32 whitespace-nowrap", cell: (r) => r.misses.toLocaleString() },
    { key: "since", header: "Correct since", align: "right", sortValue: (r) => r.correctSince, className: "w-32 whitespace-nowrap", cell: (r) => r.correctSince.toLocaleString() },
    { key: "first", header: "First correct", align: "right", sortValue: (r) => time(r.firstCorrectAt), className: "w-32 whitespace-nowrap", cell: (r) => day(r.firstCorrectAt) },
  ];
  return (
    <>
      <Toolbar>
        <SearchBox value={query} onChange={setQuery} placeholder="Search words" />
        <Count shown={shown.length} total={rows.length} noun={["word", "words"]} />
      </Toolbar>
      <DataGrid columns={columns} rows={shown} rowKey={missedRowKey}
        empty={<EmptyState icon={CheckCircle2}>{rows.length ? "No words match your search." : "No words corrected yet."}</EmptyState>} />
    </>
  );
}

type ChatRow = StudentData["chats"][number];
function Chats({ rows, onOpen }: { rows: ChatRow[]; onOpen: (conversationId: string) => void }) {
  const [query, setQuery] = useState("");
  const shown = rows.filter((c) => c.partnerName.toLowerCase().includes(query.trim().toLowerCase()));
  const columns: Column<ChatRow>[] = [
    {
      key: "partner", header: "Chat with", sortValue: (c) => c.partnerName.toLowerCase(), className: "min-w-[14rem]",
      cell: (c) => (
        <span className="flex items-center gap-2.5 py-0.5">
          <Avatar name={c.partnerName} size="sm" />
          <span className="font-medium text-slate-900">{c.partnerName}</span>
          <ChevronRight className="ml-auto h-4 w-4 text-slate-300 group-hover/row:text-slate-500" aria-hidden />
        </span>
      ),
    },
    { key: "messages", header: "Messages", align: "right", sortValue: (c) => c.messages, className: "w-28", cell: (c) => <span className="leading-7">{c.messages.toLocaleString()}</span> },
    {
      key: "last", header: "Last message", align: "right", sortValue: (c) => time(c.lastAt), className: "w-32 whitespace-nowrap",
      cell: (c) => <span className="leading-7">{c.lastAt ? day(c.lastAt) : <span className="text-slate-400">—</span>}</span>,
    },
    {
      key: "sent", header: "Sent to group", align: "right", sortValue: (c) => time(c.sentThrough), className: "w-32 whitespace-nowrap",
      cell: (c) => <span className="leading-7">{c.sentThrough ? day(c.sentThrough) : <span className="text-slate-400">—</span>}</span>,
    },
  ];
  return (
    <>
      <Toolbar>
        <SearchBox value={query} onChange={setQuery} placeholder="Search chats" />
        <Count shown={shown.length} total={rows.length} noun={["chat", "chats"]} />
      </Toolbar>
      {/* Server order is newest first; keep it until a header is clicked. */}
      <DataGrid columns={columns} rows={shown} rowKey={(c) => c.conversationId} onRowClick={(c) => onOpen(c.conversationId)}
        rowLabel={(c) => `Open chat with ${c.partnerName}`}
        empty={<EmptyState icon={MessageSquare}>{rows.length ? "No chats match your search." : "No chats sent to the group yet."}</EmptyState>} />
    </>
  );
}

function ChatView({ code, member, conversationId, onBack, onNotFound }: {
  code: string; member: Member; conversationId: string; onBack: () => void; onNotFound: () => void;
}) {
  const [open, setOpen] = useState<Set<string>>(new Set());
  const { data, error, retry } = useLoad<ChatData>(
    () => loadChat(code, member.userId, conversationId), [code, member.userId, conversationId], onNotFound);
  const toggle = (id: string) => setOpen((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  return (
    <div className="space-y-4">
      <div>
        <BackLink onClick={onBack}>{member.name}</BackLink>
        <Panel className="flex flex-wrap items-center gap-4 px-5 py-4">
          <span className="flex -space-x-2">
            <span className="rounded-full ring-2 ring-white"><Avatar name={member.name} /></span>
            <span className="rounded-full ring-2 ring-white"><Avatar name={data?.partnerName ?? "…"} /></span>
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-xl font-semibold text-slate-900">{member.name} and {data?.partnerName ?? "…"}</h1>
            {data?.sentThrough && (
              <p className="text-sm text-slate-500">Sent to the group {new Date(data.sentThrough).toLocaleString()}: messages up to then.</p>
            )}
          </div>
        </Panel>
      </div>
      {data?.truncated && <Notice>Older messages not shown.</Notice>}
      <Panel className="p-4 sm:p-6">
        {error ? <ErrorState error={error} onRetry={retry} /> : !data ? <LoadingState /> : data.messages.length === 0 ? (
          <EmptyState icon={MessageSquare}>No messages in this chat yet.</EmptyState>
        ) : (
          <div className="mx-auto flex max-w-2xl flex-col gap-2">
            {data.messages.map((m, i) => m.hidden ? (
              // Hidden rows have no id: key by position.
              <div key={`hidden-${i}`} className="max-w-[75%] self-start rounded-2xl rounded-bl-md border border-dashed border-slate-200 bg-slate-50 px-3 py-2 text-sm italic text-slate-500">
                Message from your chat partner
              </div>
            ) : m.fromStudent ? (
              m.original ? (
                <button key={m.id} type="button" onClick={() => toggle(m.id)} aria-expanded={open.has(m.id)}
                  className="max-w-[75%] self-end rounded-2xl rounded-br-md bg-sky-700 px-3 py-2 text-left text-sm text-white shadow-sm hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2">
                  <div>{m.body}</div>
                  {open.has(m.id) && (
                    <div className="mt-2 border-t border-white/30 pt-2">
                      <div className="text-[11px] font-semibold tracking-wide text-white/80">ORIGINAL</div>{m.original}
                    </div>
                  )}
                  <div className="mt-1 inline-flex items-center gap-0.5 text-xs text-white/85">
                    {open.has(m.id) ? <>Hide original <ChevronUp className="h-3 w-3" aria-hidden /></> : <>Original <ChevronDown className="h-3 w-3" aria-hidden /></>}
                  </div>
                </button>
              ) : (
                <div key={m.id} className="max-w-[75%] self-end rounded-2xl rounded-br-md bg-sky-700 px-3 py-2 text-sm text-white shadow-sm">
                  {m.body}
                </div>
              )
            ) : (
              <div key={m.id} className="max-w-[75%] self-start rounded-2xl rounded-bl-md bg-slate-100 px-3 py-2 text-sm text-slate-800">{m.body}</div>
            ))}
          </div>
        )}
      </Panel>
    </div>
  );
}
