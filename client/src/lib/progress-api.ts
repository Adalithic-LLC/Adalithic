// Calls the group-dashboard edge function. The dashboard code is the real
// credential. URL and anon key come from the build environment like
// lib/supabase.ts (public values, but this repo is public and keys in git
// history are painful to rotate).
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ?? "";
const FUNCTION_URL = `${SUPABASE_URL ?? ""}/functions/v1/group-dashboard`;

export type DashboardError = "not_found" | "blocked" | "network";

export interface Member { userId: string; name: string; isCreator: boolean; lastActive: string | null; sharedChats: number }
export interface GroupData { name: string; members: Member[] }
// Optional fields are absent while an older group-dashboard is deployed.
export interface MissedRow {
  word: string; // the dictionary form (base); the word itself when pending
  forms?: string[]; // the Reworded spellings seen (verb forms together)
  misses: number;
  lastMissedAt: string;
  originalWord: string; // what the student typed for it at the latest miss; "" when nothing
  originalMessage: string; // the whole typed message at the latest miss
  language?: string; // ISO code of the Reworded text; "" when pending
  common?: boolean; // function word: hidden unless "Show common words"
  pending?: boolean; // not AI-analysed yet: matched by spelling
}
export interface StudentData {
  vocabulary: { word: string; typed: number; sent: number }[];
  missed: MissedRow[];
  nowCorrect: { word: string; misses: number; correctSince: number; firstCorrectAt: string; pending?: boolean }[];
  pendingMessages?: number; // Reworded messages still waiting for the AI analysis
  // Every chat sent to the group, newest first; lastAt is null for a chat with no messages yet.
  // messages / lastAt stop at the student's last Send (sentThrough).
  chats: { conversationId: string; partnerName: string; messages: number; lastAt: string | null; sentThrough?: string }[];
  truncated: boolean; // the word analysis covers only the 5,000 most recent sent messages
}
// A hidden partner message carries NO id, time or body (it never leaves the database).
export type ChatMessage =
  | { id: string; at: string; fromStudent: true; hidden: false; body: string; original: string | null }
  | { id: string; at: string; fromStudent: false; hidden: false; body: string; original: null }
  | { fromStudent: false; hidden: true };
export interface ChatData {
  partnerName: string;
  partnerShared: boolean;
  sentThrough?: string; // the snapshot: messages up to the student's last Send
  truncated: boolean; // only the 2,000 most recent messages: show "Older messages not shown."
  messages: ChatMessage[]; // oldest first
}

async function post<T>(code: string, request: Record<string, string>): Promise<T> {
  let res: Response;
  try {
    res = await fetch(FUNCTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: ANON_KEY, Authorization: `Bearer ${ANON_KEY}` },
      body: JSON.stringify({ code, request }),
    });
  } catch {
    throw "network" as DashboardError;
  }
  if (res.status === 404) throw "not_found" as DashboardError;
  if (res.status === 429) throw "blocked" as DashboardError;
  if (!res.ok) throw "network" as DashboardError;
  return res.json() as Promise<T>;
}

export const loadGroup = (code: string) => post<GroupData>(code, { type: "group" });
export const loadStudent = (code: string, userId: string) => post<StudentData>(code, { type: "student", userId });
export const loadChat = (code: string, userId: string, conversationId: string) =>
  post<ChatData>(code, { type: "chat", userId, conversationId });
