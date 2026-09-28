import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Copy, FilePlus, Loader2, Plus, Send, Sparkles, Trash2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

// Professor Chats authoring page (/ProfessorChats).
//
// A chat is authored by typing straight into the bubbles: the left bubble is
// the bot's message in the target language (with its translation in the same
// bubble, expandable), and the card on the right holds the three reply
// options the learner picks from. Each length (short / medium / long) is its
// own version with its own rounds, matching zt_chats' family + length model.
//
// "Send to Arcatext App" publishes straight into zt_chats / zt_nodes /
// zt_replies through the admin_publish_professor_chat RPC (Arcatext repo,
// supabase/migrations/zt_professor_chat_publish.sql), so the chat appears in
// the app on its next catalog load — no app release. This is a static site
// with no service-role key, so the RPC re-checks the admin identity
// server-side; signing in here is what makes that check pass. Republishing
// the same chat (same `family`) replaces its rounds in place.
//
// "Upload vocab" reads a word list (.txt / .csv: one per line or comma
// separated) and "Generate" asks the professor-chat-generate edge function
// (admin only) to write the current length's rounds around those words. The
// model picks the topic and title; both land in the editable fields.
//
// Drafts are kept in localStorage so a refresh doesn't lose work.

type Length = "short" | "medium" | "long";
const LENGTHS: Length[] = ["short", "medium", "long"];
const LENGTH_LABEL: Record<Length, string> = { short: "Short", medium: "Medium", long: "Long" };

interface Line {
  text: string;
  meaning: string;
}

interface Round {
  id: string;
  bot: Line;
  replies: [Line, Line, Line];
}

interface Draft {
  // zt_chats.family: links the Short/Medium/Long rows and makes a republish
  // update this chat rather than create a new one.
  family: string;
  title: string;
  // zt_chats.topic_title: the app's section heading. Blank = "Professor Chats".
  topic?: string;
  vocab?: string[];
  targetLanguage: string;
  meaningLanguage: string;
  versions: Record<Length, Round[]>;
}

const STORAGE_KEY = "professor-chats-draft";

const uid = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

const emptyLine = (): Line => ({ text: "", meaning: "" });
const emptyRound = (): Round => ({
  id: uid(),
  bot: emptyLine(),
  replies: [emptyLine(), emptyLine(), emptyLine()],
});

const newFamily = () => `prof_${uid().replace(/[^a-z0-9]/gi, "").slice(0, 12).toLowerCase()}`;

// Language CODES, matching the live rows ("es", "en"): the app buckets chats
// by these values and fetches the catalog by meaning_language.
const emptyDraft = (): Draft => ({
  family: newFamily(),
  title: "",
  targetLanguage: "es",
  meaningLanguage: "en",
  versions: { short: [emptyRound()], medium: [], long: [] },
});

function loadDraft(): Draft {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const d = JSON.parse(raw) as Draft;
      return d.family ? d : { ...d, family: newFamily() };
    }
  } catch {
    /* fall through to an empty draft */
  }
  return emptyDraft();
}

// A textarea that grows with its content, styled by the caller to look like a
// bubble. Typing into it is typing into the bubble.
function BubbleText({
  value,
  onChange,
  placeholder,
  className,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  className?: string;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = `${el.scrollHeight}px`;
  }, [value]);
  return (
    <textarea
      ref={ref}
      rows={1}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`block w-full resize-none overflow-hidden bg-transparent outline-none ${className ?? ""}`}
    />
  );
}

function BotBubble({
  line,
  onChange,
  targetLanguage,
  meaningLanguage,
}: {
  line: Line;
  onChange: (l: Line) => void;
  targetLanguage: string;
  meaningLanguage: string;
}) {
  const [open, setOpen] = useState(Boolean(line.meaning));
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] min-w-[60%] rounded-2xl rounded-bl-md bg-neutral-200 px-4 py-2.5 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50">
        <BubbleText
          value={line.text}
          onChange={(text) => onChange({ ...line, text })}
          placeholder={`Bot message in ${targetLanguage || "target language"}…`}
          className="text-[15px] placeholder:text-neutral-500"
        />
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="mt-1.5 flex items-center gap-1 text-xs font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
        >
          {open ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          Translation
        </button>
        {open && (
          <div className="mt-1.5 border-t border-neutral-300 pt-1.5 dark:border-neutral-600">
            <BubbleText
              value={line.meaning}
              onChange={(meaning) => onChange({ ...line, meaning })}
              placeholder={`${meaningLanguage || "Translation"}…`}
              className="text-sm italic text-neutral-700 placeholder:text-neutral-500 dark:text-neutral-300"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function ReplyBubble({
  line,
  index,
  onChange,
  meaningLanguage,
}: {
  line: Line;
  index: number;
  onChange: (l: Line) => void;
  meaningLanguage: string;
}) {
  const [open, setOpen] = useState(Boolean(line.meaning));
  return (
    <div className="rounded-2xl rounded-br-md bg-blue-500 px-4 py-2.5 text-white">
      <BubbleText
        value={line.text}
        onChange={(text) => onChange({ ...line, text })}
        placeholder={`Reply option ${index + 1}…`}
        className="text-[15px] placeholder:text-blue-100"
      />
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="mt-1 flex items-center gap-1 text-[11px] font-medium text-blue-100 hover:text-white"
      >
        {open ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        Translation
      </button>
      {open && (
        <div className="mt-1 border-t border-blue-300/60 pt-1">
          <BubbleText
            value={line.meaning}
            onChange={(meaning) => onChange({ ...line, meaning })}
            placeholder={`${meaningLanguage || "Translation"}…`}
            className="text-sm italic text-blue-50 placeholder:text-blue-200"
          />
        </div>
      )}
    </div>
  );
}

export default function ProfessorChats() {
  const [draft, setDraft] = useState<Draft>(loadDraft);
  const [length, setLength] = useState<Length>("short");
  const { toast } = useToast();

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    } catch {
      /* private mode: the draft just won't survive a refresh */
    }
  }, [draft]);

  const rounds = draft.versions[length];

  const setRounds = (next: Round[]) =>
    setDraft((d) => ({ ...d, versions: { ...d.versions, [length]: next } }));

  const updateRound = (i: number, r: Round) =>
    setRounds(rounds.map((x, j) => (j === i ? r : x)));

  const copyFrom = (from: Length) =>
    setRounds(
      draft.versions[from].map((r) => ({
        ...r,
        id: uid(),
        bot: { ...r.bot },
        replies: r.replies.map((x) => ({ ...x })) as Round["replies"],
      })),
    );

  const [signedIn, setSignedIn] = useState(false);
  const [authStep, setAuthStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [busy, setBusy] = useState(false);
  const [generating, setGenerating] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const vocab = draft.vocab ?? [];

  async function uploadVocab(file: File) {
    const text = await file.text();
    const words = Array.from(
      new Set(
        text
          .split(/[\n\r,;\t]+/)
          .map((w) => w.trim())
          .filter(Boolean),
      ),
    );
    setDraft((d) => ({ ...d, vocab: words }));
    toast({ title: `${words.length} vocab word${words.length === 1 ? "" : "s"} loaded` });
  }

  async function generate() {
    if (vocab.length === 0) {
      fileRef.current?.click();
      return;
    }
    if (!signedIn) {
      toast({ title: "Sign in first", description: "Use the admin email above to get a code." });
      return;
    }
    if (rounds.length > 0 && rounds.some((r) => r.bot.text || r.replies.some((x) => x.text))) {
      if (!window.confirm(`Replace the ${LENGTH_LABEL[length]} rounds with a generated chat?`)) return;
    }
    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("professor-chat-generate", {
        body: {
          vocab,
          length,
          target_language: draft.targetLanguage.trim().toLowerCase(),
          meaning_language: draft.meaningLanguage.trim().toLowerCase(),
        },
      });
      if (error || !data?.rounds) {
        let msg = error?.message ?? "No chat came back";
        try {
          const body = await (error as { context?: Response })?.context?.json();
          if (body?.error) msg = body.error;
        } catch {
          /* keep the generic message */
        }
        toast({ title: "Generation failed", description: msg, variant: "destructive" });
        return;
      }
      const generated: Round[] = (data.rounds as Array<{
        bot_text: string;
        bot_meaning: string;
        replies: Line[];
      }>).map((r) => ({
        id: uid(),
        bot: { text: r.bot_text ?? "", meaning: r.bot_meaning ?? "" },
        replies: [0, 1, 2].map((k) => ({
          text: r.replies?.[k]?.text ?? "",
          meaning: r.replies?.[k]?.meaning ?? "",
        })) as Round["replies"],
      }));
      setDraft((d) => ({
        ...d,
        title: d.title.trim() ? d.title : data.title ?? "",
        topic: data.topic || d.topic,
        versions: { ...d.versions, [length]: generated },
      }));
      toast({ title: `Generated ${generated.length} rounds`, description: data.topic ? `Topic: ${data.topic}` : undefined });
    } finally {
      setGenerating(false);
    }
  }

  async function sendCode() {
    if (!email.trim()) return;
    setBusy(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: { shouldCreateUser: false },
      });
      if (error) {
        toast({ title: "Could not send the code", description: error.message, variant: "destructive" });
        return;
      }
      setAuthStep("otp");
    } finally {
      setBusy(false);
    }
  }

  async function verify() {
    if (otp.trim().length < 6) return;
    setBusy(true);
    try {
      const { error } = await supabase.auth.verifyOtp({ email: email.trim(), token: otp.trim(), type: "email" });
      if (error) {
        toast({ title: "That code didn't match", variant: "destructive" });
        return;
      }
      setSignedIn(true);
    } finally {
      setBusy(false);
    }
  }

  async function send() {
    const versions = LENGTHS.filter((l) => draft.versions[l].length > 0);
    // No content rules: blanks are sent as-is. Only a chat with no rounds at
    // all can't be sent — the app has nothing to open.
    if (versions.length === 0) {
      toast({ title: "Nothing to send", description: "Add a round first.", variant: "destructive" });
      return;
    }
    if (!isSupabaseConfigured) {
      toast({ title: "Supabase isn't configured on this build", variant: "destructive" });
      return;
    }
    if (!signedIn) {
      toast({ title: "Sign in first", description: "Use the admin email above to get a code." });
      return;
    }
    const payload = {
      family: draft.family,
      title: draft.title.trim(),
      topic: (draft.topic ?? "").trim(),
      target_language: draft.targetLanguage.trim().toLowerCase(),
      meaning_language: draft.meaningLanguage.trim().toLowerCase(),
      versions: versions.map((l) => ({
        length: l,
        rounds: draft.versions[l].map((r) => ({
          bot_text: r.bot.text.trim(),
          bot_meaning: r.bot.meaning.trim(),
          replies: r.replies.map((x) => ({ text: x.text.trim(), meaning: x.meaning.trim() })),
        })),
      })),
    };
    setBusy(true);
    try {
      const { error } = await supabase.rpc("admin_publish_professor_chat", { p_chat: payload });
      if (error) {
        toast({
          title: "Not sent",
          description: /not authorized/i.test(error.message ?? "")
            ? "That account is not the Arcatext admin."
            : error.message,
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Sent to Arcatext",
        description: `${versions.map((l) => LENGTH_LABEL[l]).join(", ")} live in the app under Professor Chats.`,
      });
    } finally {
      setBusy(false);
    }
  }

  function newChat() {
    if (!window.confirm("Start a new chat? The current one stays in the app if you sent it.")) return;
    setDraft(emptyDraft());
    setLength("short");
  }

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/90">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-4 py-3">
          <h1 className="text-lg font-semibold">Professor Chats</h1>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={newChat} className="gap-2">
              <FilePlus className="h-4 w-4" /> New chat
            </Button>
            <Button onClick={send} disabled={busy} className="gap-2">
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              Send to Arcatext App
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl space-y-4 px-4 py-5">
        {!signedIn && (
          <div className="flex flex-wrap items-center gap-2 rounded-xl bg-white p-3 shadow-sm dark:bg-neutral-900">
            <span className="text-sm text-neutral-500">Sign in to send:</span>
            {authStep === "email" ? (
              <>
                <Input
                  type="email"
                  className="h-9 flex-1 min-w-[180px]"
                  placeholder="Admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendCode()}
                />
                <Button size="sm" onClick={sendCode} disabled={busy || !email.trim()}>
                  Email me a code
                </Button>
              </>
            ) : (
              <>
                <Input
                  inputMode="numeric"
                  className="h-9 flex-1 min-w-[140px]"
                  placeholder="Code from email"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && verify()}
                />
                <Button size="sm" onClick={verify} disabled={busy || otp.trim().length < 6}>
                  Sign in
                </Button>
              </>
            )}
          </div>
        )}
        <div className="grid gap-3 rounded-xl bg-white p-4 shadow-sm dark:bg-neutral-900 sm:grid-cols-3">
          <label className="text-xs font-medium text-neutral-500 sm:col-span-3">
            Chat title
            <Input
              className="mt-1"
              value={draft.title}
              placeholder="e.g. Ordering coffee"
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
            />
          </label>
          <label className="text-xs font-medium text-neutral-500 sm:col-span-3">
            Topic (auto-chosen when you generate)
            <Input
              className="mt-1"
              value={draft.topic ?? ""}
              placeholder="Professor Chats"
              onChange={(e) => setDraft({ ...draft, topic: e.target.value })}
            />
          </label>
          <label className="text-xs font-medium text-neutral-500">
            Target language code
            <Input
              className="mt-1"
              value={draft.targetLanguage}
              onChange={(e) => setDraft({ ...draft, targetLanguage: e.target.value })}
            />
          </label>
          <label className="text-xs font-medium text-neutral-500">
            Translation language code
            <Input
              className="mt-1"
              value={draft.meaningLanguage}
              onChange={(e) => setDraft({ ...draft, meaningLanguage: e.target.value })}
            />
          </label>
        </div>

        <div className="space-y-2 rounded-xl bg-white p-4 shadow-sm dark:bg-neutral-900">
          <input
            ref={fileRef}
            type="file"
            accept=".txt,.csv,.tsv,text/plain,text/csv"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) uploadVocab(f);
              e.target.value = "";
            }}
          />
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2" onClick={() => fileRef.current?.click()}>
              <Upload className="h-4 w-4" /> Upload vocab
            </Button>
            <Button size="sm" className="gap-2" onClick={generate} disabled={generating || vocab.length === 0}>
              {generating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              {generating ? "Generating…" : `Generate ${LENGTH_LABEL[length]} chat`}
            </Button>
            {vocab.length > 0 && (
              <button
                type="button"
                className="ml-auto flex items-center gap-1 text-xs text-neutral-500 hover:text-red-500"
                onClick={() => setDraft({ ...draft, vocab: [] })}
              >
                <X className="h-3 w-3" /> Clear vocab
              </button>
            )}
          </div>
          {vocab.length > 0 ? (
            <div className="flex max-h-28 flex-wrap gap-1.5 overflow-y-auto">
              {vocab.map((w) => (
                <span key={w} className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs dark:bg-neutral-800">
                  {w}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-neutral-500">
              Upload a .txt or .csv word list (one per line or comma-separated). Generate writes the selected
              length's rounds using those words and picks a topic.
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex rounded-lg bg-neutral-200 p-1 dark:bg-neutral-800">
            {LENGTHS.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLength(l)}
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition ${
                  length === l
                    ? "bg-white shadow-sm dark:bg-neutral-700"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                }`}
              >
                {LENGTH_LABEL[l]}
                <span className="ml-1.5 text-xs text-neutral-500">{draft.versions[l].length}</span>
              </button>
            ))}
          </div>
          <div className="flex gap-1">
            {LENGTHS.filter((l) => l !== length && draft.versions[l].length > 0).map((l) => (
              <Button key={l} variant="ghost" size="sm" className="gap-1" onClick={() => copyFrom(l)}>
                <Copy className="h-3.5 w-3.5" /> Copy {LENGTH_LABEL[l]}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-5 rounded-2xl bg-white p-4 shadow-sm dark:bg-neutral-900">
          {rounds.length === 0 && (
            <p className="py-8 text-center text-sm text-neutral-500">
              No {LENGTH_LABEL[length]} version yet. Add a round or copy another length.
            </p>
          )}
          {rounds.map((r, i) => (
            <div key={r.id} className="group space-y-3">
              <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wide text-neutral-400">
                <span>Round {i + 1}</span>
                <button
                  type="button"
                  aria-label={`Delete round ${i + 1}`}
                  onClick={() => setRounds(rounds.filter((_, j) => j !== i))}
                  className="opacity-0 transition hover:text-red-500 group-hover:opacity-100 focus:opacity-100"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
              <BotBubble
                line={r.bot}
                onChange={(bot) => updateRound(i, { ...r, bot })}
                targetLanguage={draft.targetLanguage}
                meaningLanguage={draft.meaningLanguage}
              />
              <div className="flex justify-end">
                <div className="w-[80%] space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-2.5 dark:border-neutral-700 dark:bg-neutral-800/60">
                  <div className="px-1 text-[11px] font-medium text-neutral-500">Reply options</div>
                  {r.replies.map((x, k) => (
                    <ReplyBubble
                      key={k}
                      index={k}
                      line={x}
                      meaningLanguage={draft.meaningLanguage}
                      onChange={(line) =>
                        updateRound(i, {
                          ...r,
                          replies: r.replies.map((y, m) => (m === k ? line : y)) as Round["replies"],
                        })
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full gap-2" onClick={() => setRounds([...rounds, emptyRound()])}>
            <Plus className="h-4 w-4" /> Add round
          </Button>
        </div>
      </main>
    </div>
  );
}
