import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  type ChatData, type DashboardError, type GroupData, loadChat, loadGroup, loadStudent, type Member, type StudentData,
} from "@/lib/progress-api";

const CODE_KEY = "progress.code"; // sessionStorage only: never in the URL

const errorText: Record<DashboardError, string> = {
  not_found: "That code didn't match a group. Check it and try again.",
  blocked: "Too many attempts. Try again in 5 minutes.",
  network: "Couldn't reach the server. Try again.",
};

type Tab = "vocabulary" | "missed" | "correct" | "chats";

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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {!group ? (
            <form onSubmit={submit} className="max-w-sm">
              <h1 className="text-3xl font-bold text-secondary mb-6">Study group progress</h1>
              <label className="block text-sm font-medium mb-2" htmlFor="code">Dashboard code</label>
              <input id="code" value={input} onChange={(e) => setInput(e.target.value)} autoComplete="off"
                className="w-full border rounded-lg px-3 py-2 font-mono uppercase tracking-widest" />
              {error && <p className="text-red-600 text-sm mt-2">{errorText[error]}</p>}
              <button className="mt-4 bg-primary text-white rounded-lg px-4 py-2" type="submit">Open</button>
            </form>
          ) : student ? (
            <StudentView code={code} member={student} onBack={() => setStudent(null)} />
          ) : (
            <div>
              <div className="flex items-baseline justify-between mb-6">
                <h1 className="text-3xl font-bold text-secondary">{group.name}</h1>
                <button className="text-sm underline" onClick={() => { sessionStorage.removeItem(CODE_KEY); setCode(""); setGroup(null); }}>
                  Close dashboard
                </button>
              </div>
              <p className="text-gray-600 mb-4">
                {group.members.length} {group.members.length === 1 ? "member" : "members"}
              </p>
              <ul className="divide-y border rounded-lg">
                {/* Everyone, the creator included: a creator can share their own
                    chats with the group, and hiding them hid that data. */}
                {group.members.map((m) => (
                  <li key={m.userId}>
                    <button className="w-full text-left px-4 py-3 hover:bg-gray-50 flex justify-between" onClick={() => setStudent(m)}>
                      <span className="font-medium">
                        {m.name}
                        {m.isCreator && <span className="ml-2 text-xs text-gray-500 font-normal">Creator</span>}
                      </span>
                      <span className="text-sm text-gray-500">
                        {m.sharedChats} {m.sharedChats === 1 ? "shared chat" : "shared chats"}
                        {m.lastActive ? ` · active ${new Date(m.lastActive).toLocaleDateString()}` : ""}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-12">
            Students choose what they share and can leave at any time; their data disappears from this page when they do.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function StudentView({ code, member, onBack }: { code: string; member: Member; onBack: () => void }) {
  const [data, setData] = useState<StudentData | null>(null);
  const [tab, setTab] = useState<Tab>("vocabulary");
  const [chat, setChat] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  useEffect(() => { loadStudent(code, member.userId).then(setData).catch(() => setData(null)); }, [code, member.userId]);

  if (chat) return <ChatView code={code} member={member} conversationId={chat} onBack={() => setChat(null)} />;
  const tabs: [Tab, string][] = [["vocabulary", "All Words Used"], ["missed", "Missed words"], ["correct", "Now correct"], ["chats", "Chats"]];
  return (
    <div>
      <button className="text-sm underline mb-4" onClick={onBack}>← All members</button>
      <h1 className="text-3xl font-bold text-secondary mb-4">{member.name}</h1>
      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map(([t, label]) => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-3 py-1.5 rounded-full text-sm ${tab === t ? "bg-primary text-white" : "bg-gray-100"}`}>{label}</button>
        ))}
      </div>
      {data?.truncated && <p className="text-sm text-gray-500 mb-4">Statistics cover the most recent 5,000 messages.</p>}
      {!data ? <p className="text-gray-500">Loading…</p> : tab === "vocabulary" ? (
        <div>
          <input placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} className="border rounded-lg px-3 py-2 mb-3" />
          <table className="w-full text-sm">
            <thead><tr className="text-left text-gray-500"><th className="py-1">Word typed</th><th>Instances</th><th>Reworded</th></tr></thead>
            <tbody>
              {data.vocabulary.filter((v) => v.word.includes(query.toLowerCase())).map((v) => (
                <tr key={v.word} className="border-t"><td className="py-1">{v.word}</td><td>{v.typed}</td><td>{v.sent}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : tab === "missed" ? (
        <table className="w-full text-sm">
          <thead><tr className="text-left text-gray-500"><th className="py-1">Word</th><th>Times missed</th><th>Last missed</th></tr></thead>
          <tbody>
            {data.missed.map((r) => (
              <tr key={r.word} className="border-t"><td className="py-1">{r.word}</td><td>{r.misses}</td><td>{new Date(r.lastMissedAt).toLocaleDateString()}</td></tr>
            ))}
          </tbody>
        </table>
      ) : tab === "correct" ? (
        <table className="w-full text-sm">
          <thead><tr className="text-left text-gray-500"><th className="py-1">Word</th><th>Past misses</th><th>Correct since</th><th>First correct</th></tr></thead>
          <tbody>
            {data.nowCorrect.map((r) => (
              <tr key={r.word} className="border-t"><td className="py-1">{r.word}</td><td>{r.misses}</td><td>{r.correctSince}</td><td>{new Date(r.firstCorrectAt).toLocaleDateString()}</td></tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ul className="divide-y border rounded-lg">
          {data.chats.map((c) => (
            <li key={c.conversationId}>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-50 flex justify-between" onClick={() => setChat(c.conversationId)}>
                <span>Chat with {c.partnerName}</span>
                <span className="text-sm text-gray-500">{c.messages} messages{c.lastAt ? ` · ${new Date(c.lastAt).toLocaleDateString()}` : ""}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ChatView({ code, member, conversationId, onBack }: { code: string; member: Member; conversationId: string; onBack: () => void }) {
  const [data, setData] = useState<ChatData | null>(null);
  const [open, setOpen] = useState<Set<string>>(new Set());
  useEffect(() => { loadChat(code, member.userId, conversationId).then(setData).catch(() => setData(null)); }, [code, member.userId, conversationId]);
  const toggle = (id: string) => setOpen((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  return (
    <div>
      <button className="text-sm underline mb-4" onClick={onBack}>← {member.name}</button>
      <h1 className="text-2xl font-bold text-secondary mb-6">{member.name} and {data?.partnerName ?? "…"}</h1>
      {data?.truncated && <p className="text-sm text-gray-500 mb-4">Older messages not shown.</p>}
      <div className="flex flex-col gap-2 max-w-2xl">
        {data?.messages.map((m, i) => m.hidden ? (
          // Hidden rows have no id: key by position.
          <div key={`hidden-${i}`} className="self-start max-w-[75%] rounded-2xl px-3 py-2 bg-gray-100 text-gray-400 italic">
            Message from your chat partner
          </div>
        ) : m.fromStudent ? (
          <button key={m.id} onClick={() => m.original && toggle(m.id)}
            className="self-end max-w-[75%] text-left bg-primary text-white rounded-2xl px-3 py-2">
            <div>{m.body}</div>
            {m.original && open.has(m.id) && (
              <div className="mt-2 pt-2 border-t border-white/30 text-sm"><div className="text-xs opacity-80">ORIGINAL</div>{m.original}</div>
            )}
            {m.original && <div className="text-xs opacity-80 mt-1">{open.has(m.id) ? "Hide original ▴" : "Original ▾"}</div>}
          </button>
        ) : (
          <div key={m.id} className="self-start max-w-[75%] rounded-2xl px-3 py-2 bg-gray-100">{m.body}</div>
        ))}
      </div>
    </div>
  );
}
