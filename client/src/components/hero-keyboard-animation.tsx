import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Plus,
  ArrowUp,
  Mic,
} from "lucide-react";

/**
 * HeroKeyboardAnimation
 *
 * The hero visual for the Adalithic site: a live recreation of the Arcatext
 * keyboard + toolbar inside an iPhone Messages screen. Instead of a static
 * screenshot, it auto-plays the core loop — type a message in your native
 * language, tap Reword to translate it in place, then tap send and watch the
 * translated message drop into the conversation as a bubble. It runs a short
 * two-message exchange (with a reply) on a continuous loop.
 *
 * The phone chrome, keyboard, toolbar colors and layout are reused from the
 * interactive keyboard prototype in the product-design portfolio
 * (ArcatextKeyboard.tsx), pared down to just the visual + the send loop.
 * Colors come from the iOS asset catalog / StandardToolbar.swift.
 */

// ── Colors (light appearance, from the asset catalog) ────────────────────────
const C = {
  toolbarBar: "#D0D3DA",
  toolButtonBg: "#E6E6EB",
  toolIcon: "#0040DD",
  rewordBg: "#0040DD",
  rewordPressed: "#002B96",
  checkBg: "#B1C6E0",
  checkText: "#0040DD",
  regularKey: "#FFFFFF",
  actionKey: "#B1C6E0",
  keyText: "#000000",
  send: "#0A7AFF",
  sendPressed: "#0862CC",
  smsGreen: "#34C759",
  recvGray: "#E9E9EB",
};

// A demo back-and-forth conversation. Each sent message is typed in the user's
// native language, then Reworded (translated) in place before being sent; the
// received messages arrive as replies. Kept short and natural so the whole
// exchange plays out on a loop inside the hero.
type Step =
  | { kind: "sent"; native: string; reworded: string; typeMs?: number }
  | { kind: "recv"; text: string };

const SCRIPT: Step[] = [
  { kind: "sent", native: "Hi! Are you free this weekend?", reworded: "やあ！今週末は空いてる？" },
  { kind: "recv", text: "うん、空いてるよ！何かする？" },
  { kind: "sent", native: "Let's get dinner.", reworded: "夕食を食べに行こう。" },
  { kind: "recv", text: "いいね！何時がいい？" },
  { kind: "sent", native: "How about 7pm?", reworded: "7時はどう？" },
  { kind: "recv", text: "完璧！じゃあ後でね。" },
];

type Msg = { id: number; side: "sent" | "recv"; text: string };

// Phone geometry (design pixels), matching the prototype.
const DESIGN_W = 402;
const SCREEN_H = 874;
const BEZEL = 12;
const OUTER_W = DESIGN_W + BEZEL * 2;
const OUTER_H = SCREEN_H + BEZEL * 2;

function EllipsisCircle() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <circle cx="12.5" cy="12.5" r="11" stroke={C.toolIcon} strokeWidth="1.6" />
      <circle cx="7" cy="12.5" r="1.55" fill={C.toolIcon} />
      <circle cx="12.5" cy="12.5" r="1.55" fill={C.toolIcon} />
      <circle cx="18" cy="12.5" r="1.55" fill={C.toolIcon} />
    </svg>
  );
}

function PasteGlyph() {
  return (
    <svg width="16.8" height="21" viewBox="0 0 16 20" fill="none">
      <path
        d="M-0.000488281 16.2114V3.82666C-0.000488281 3.06299 0.204264 2.4847 0.61377 2.0918C1.02327 1.69336 1.58219 1.47201 2.29053 1.42773C3.25895 1.36686 4.18864 1.28109 5.07959 1.17041C5.97607 1.05973 6.83659 0.932454 7.66113 0.788574C8.49121 0.63916 9.28809 0.475911 10.0518 0.298828C10.8818 0.0996094 11.5265 0.193685 11.9858 0.581055C12.4451 0.962891 12.6748 1.58822 12.6748 2.45703V14.5845C12.6748 15.3205 12.5475 15.8794 12.293 16.2612C12.0384 16.6486 11.6012 16.9336 10.9814 17.1162C9.97982 17.3929 9.01139 17.617 8.07617 17.7886C7.14095 17.9657 6.2168 18.104 5.30371 18.2036C4.39616 18.3032 3.47754 18.3779 2.54785 18.4277C1.73991 18.4775 1.11182 18.306 0.663574 17.9131C0.220866 17.5257 -0.000488281 16.9585 -0.000488281 16.2114ZM3.25342 5.79395C4.43766 5.71647 5.5223 5.59749 6.50732 5.43701C7.49788 5.27653 8.47461 5.08838 9.4375 4.87256C9.64779 4.82829 9.78337 4.75635 9.84424 4.65674C9.91064 4.55713 9.94385 4.44368 9.94385 4.31641C9.94385 4.17806 9.89128 4.06185 9.78613 3.96777C9.68099 3.86816 9.53158 3.83773 9.33789 3.87646C8.41927 4.08122 7.47021 4.26383 6.49072 4.42432C5.51676 4.5848 4.4349 4.70378 3.24512 4.78125C3.06803 4.79232 2.93799 4.84766 2.85498 4.94727C2.77751 5.04688 2.73877 5.16585 2.73877 5.3042C2.73877 5.44255 2.78581 5.56152 2.87988 5.66113C2.97396 5.76074 3.09847 5.80501 3.25342 5.79395ZM3.25342 8.4917C4.43766 8.40869 5.5223 8.28695 6.50732 8.12646C7.49788 7.96598 8.47461 7.77783 9.4375 7.56201C9.64779 7.51774 9.78337 7.4458 9.84424 7.34619C9.91064 7.24658 9.94385 7.1359 9.94385 7.01416C9.94385 6.87028 9.89128 6.74854 9.78613 6.64893C9.68099 6.54932 9.53158 6.52165 9.33789 6.56592C8.41927 6.7762 7.47021 6.96159 6.49072 7.12207C5.51676 7.27702 4.4349 7.39323 3.24512 7.4707C3.06803 7.48177 2.93799 7.53711 2.85498 7.63672C2.77751 7.73633 2.73877 7.85254 2.73877 7.98535C2.73877 8.13477 2.78581 8.25928 2.87988 8.35889C2.97396 8.45296 3.09847 8.49723 3.25342 8.4917ZM3.25342 11.1812C4.43766 11.0981 5.5223 10.9764 6.50732 10.8159C7.49788 10.6554 8.47461 10.4673 9.4375 10.2515C9.64779 10.2072 9.78337 10.1353 9.84424 10.0356C9.91064 9.93604 9.94385 9.82536 9.94385 9.70361C9.94385 9.56527 9.89128 9.44629 9.78613 9.34668C9.68099 9.24154 9.53158 9.2111 9.33789 9.25537C8.41927 9.46012 7.47021 9.64274 6.49072 9.80322C5.51676 9.95817 4.4349 10.0771 3.24512 10.1602C3.06803 10.1768 2.93799 10.2349 2.85498 10.3345C2.77751 10.4341 2.73877 10.5503 2.73877 10.6831C2.73877 10.827 2.78581 10.9487 2.87988 11.0483C2.97396 11.1424 3.09847 11.1867 3.25342 11.1812ZM3.25342 13.8623C3.94515 13.818 4.53727 13.7655 5.02979 13.7046C5.5223 13.6382 5.99268 13.569 6.44092 13.4971C6.59033 13.4694 6.70378 13.4058 6.78125 13.3062C6.85872 13.201 6.89746 13.0903 6.89746 12.9741C6.89746 12.8358 6.84489 12.7168 6.73975 12.6172C6.6346 12.512 6.47965 12.4761 6.2749 12.5093C5.882 12.5757 5.44759 12.6393 4.97168 12.7002C4.5013 12.7555 3.92578 12.8026 3.24512 12.8413C3.06803 12.8579 2.93799 12.916 2.85498 13.0156C2.77751 13.1097 2.73877 13.2259 2.73877 13.3643C2.73877 13.5081 2.78581 13.6299 2.87988 13.7295C2.97396 13.8236 3.09847 13.8678 3.25342 13.8623ZM6.85596 19.1914C7.56429 19.0807 8.28923 18.9451 9.03076 18.7847C9.7723 18.6297 10.5332 18.4471 11.3135 18.2368C11.8724 18.0763 12.34 17.8439 12.7163 17.5396C13.0981 17.2407 13.3859 16.8506 13.5796 16.3691C13.7733 15.8877 13.8701 15.2928 13.8701 14.5845V2.49854C13.8701 2.36019 13.8646 2.22461 13.8535 2.0918C13.8424 1.95345 13.8286 1.8068 13.812 1.65186C14.3599 1.7902 14.7721 2.07243 15.0488 2.49854C15.3311 2.91911 15.4722 3.48079 15.4722 4.18359V16.4771C15.4722 17.3791 15.248 18.057 14.7998 18.5107C14.3571 18.9645 13.6903 19.1914 12.7993 19.1914H6.85596Z"
        fill={C.toolIcon}
      />
    </svg>
  );
}

function Key({
  label,
  num,
  bg = C.regularKey,
  grow = 1,
  fontSize = 22,
  children,
}: {
  label?: string;
  num?: string;
  bg?: string;
  grow?: number;
  fontSize?: number;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="relative flex select-none items-center justify-center rounded-[4.6px]"
      style={{
        backgroundColor: bg,
        color: C.keyText,
        height: 42,
        flexGrow: grow,
        flexBasis: 0,
        boxShadow: "0 1px 0 rgba(0,0,0,0.3)",
        fontSize,
        fontWeight: 400,
      }}
    >
      {num && (
        <span className="absolute right-[5px] top-[3px]" style={{ fontSize: 9, color: "rgba(0,0,0,0.4)" }}>
          {num}
        </span>
      )}
      {children ?? label}
    </div>
  );
}

export default function HeroKeyboardAnimation() {
  const reduceMotion = useReducedMotion();

  // ── visual state driven by the timeline ──
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [rewordLoading, setRewordLoading] = useState(false);
  const [pressed, setPressed] = useState<"reword" | "send" | null>(null);

  // Responsive scale so the phone fits the hero at every breakpoint.
  const [scale, setScale] = useState(0.6);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setScale(w < 480 ? 0.46 : w < 640 ? 0.52 : w < 1024 ? 0.58 : 0.64);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const bubbleId = useRef(1);

  // Build the looping timeline. Rebuilt only when reduced-motion changes.
  useEffect(() => {
    // Reduced motion: skip the animation and show the completed conversation.
    if (reduceMotion) {
      setText("");
      let id = 1;
      setMessages(
        SCRIPT.map((s) => ({
          id: id++,
          side: s.kind === "sent" ? "sent" : "recv",
          text: s.kind === "sent" ? s.reworded : s.text,
        })),
      );
      return;
    }

    const beats: { fn: () => void; ms: number }[] = [];
    const b = (fn: () => void, ms: number) => beats.push({ fn, ms });
    const append = (side: "sent" | "recv", text: string) =>
      setMessages((prev) => [...prev, { id: bubbleId.current++, side, text }]);

    // Start each loop from an empty thread.
    b(() => {
      setRewordLoading(false);
      setPressed(null);
      setText("");
      setMessages([]);
    }, 900);

    SCRIPT.forEach((step, idx) => {
      if (step.kind === "recv") {
        // A reply arrives after a natural beat.
        b(() => append("recv", step.text), idx === 0 ? 900 : 1400);
        return;
      }

      // Sent message: type in the native language …
      b(() => setText(""), 500);
      const typeMs = step.typeMs ?? 46;
      for (let i = 1; i <= step.native.length; i++) {
        const s = step.native.slice(0, i);
        b(() => setText(s), typeMs);
      }
      b(() => {}, 600);
      // … tap Reword to translate it in place …
      b(() => {
        setPressed("reword");
        setRewordLoading(true);
      }, 340);
      b(() => setPressed(null), 1150);
      b(() => {
        setRewordLoading(false);
        setText(step.reworded);
      }, 900);
      // … then tap send and drop it into the conversation.
      b(() => setPressed("send"), 340);
      b(() => {
        setPressed(null);
        append("sent", step.reworded);
        setText("");
      }, 700);
    });

    // Hold on the finished conversation, then loop.
    b(() => {}, 2800);

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const beat = beats[i];
      beat.fn();
      i = (i + 1) % beats.length;
      timer = setTimeout(tick, beat.ms);
    };
    tick();
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  // ── derived ──
  const hasText = text.length > 0;
  const showChat = messages.length > 0;

  // ── keyboard rows ──
  const lower = text === "";
  const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const row3 = ["z", "x", "c", "v", "b", "n", "m"];
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  return (
    <div
      className="animate-float"
      style={{ width: OUTER_W * scale, height: OUTER_H * scale }}
      role="img"
      aria-label="The Arcatext keyboard typing a message, translating it with one tap, and sending it in a chat app."
    >
      <div
        className="relative bg-black"
        style={{
          width: OUTER_W,
          height: OUTER_H,
          padding: BEZEL,
          borderRadius: 56,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          boxShadow: "0 30px 60px -20px rgba(20,10,40,0.5)",
        }}
      >
        <div
          className="relative flex flex-col overflow-hidden bg-white"
          style={{ width: DESIGN_W, height: SCREEN_H, borderRadius: 44 }}
        >
          {/* Status bar */}
          <div className="relative flex h-11 items-center justify-between px-7 pt-1 text-black">
            <span className="text-[15px] font-semibold">12:11</span>
            <div className="absolute left-1/2 top-2 h-7 w-[100px] -translate-x-1/2 rounded-full bg-black" />
            <div className="flex items-center gap-1.5">
              <div className="flex items-end gap-[2px]">
                {[6, 9, 12, 15].map((h, i) => (
                  <span key={i} className="w-[3px] rounded-[1px] bg-black" style={{ height: h }} />
                ))}
              </div>
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none">
                <path
                  d="M8.5 2.2c2.5 0 4.8 1 6.5 2.6l-1.3 1.4A7.7 7.7 0 008.5 4.1 7.7 7.7 0 003.3 6.2L2 4.8A9.5 9.5 0 018.5 2.2zm0 3.6c1.5 0 2.9.6 3.9 1.6l-1.4 1.4a3.5 3.5 0 00-5 0L4.6 7.4A5.5 5.5 0 018.5 5.8zm0 3.5c.7 0 1.3.3 1.8.8L8.5 12 6.7 10.1c.5-.5 1.1-.8 1.8-.8z"
                  fill="black"
                />
              </svg>
              <div className="ml-[1px] flex h-[13px] w-[24px] items-center rounded-[3px] border border-black/40 p-[1.5px]">
                <div className="h-full w-full rounded-[1px] bg-black" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="flex flex-col items-center border-b border-black/5 px-4 pb-3 pt-1">
            <div className="flex w-full items-center justify-between">
              <ChevronLeft className="h-7 w-7" style={{ color: C.send }} strokeWidth={2.4} />
              <div className="w-7" />
            </div>
            <div className="-mt-5 flex flex-col items-center gap-1">
              <div
                className="grid h-12 w-12 place-items-center rounded-full text-sm font-semibold text-white"
                style={{ background: "linear-gradient(160deg,#8e9bd6,#6f7fc4)" }}
              >
                JA
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[15px] font-semibold text-black">+1 (888) 555-1212</span>
                <ChevronRight className="h-4 w-4 text-black/50" strokeWidth={2.4} />
              </div>
            </div>
          </div>

          {/* Conversation */}
          <div className="flex flex-1 flex-col justify-end gap-1.5 overflow-hidden px-3 pb-2">
            {showChat && (
              <>
                <div className="text-center text-[13px] font-medium text-black/40">iMessage</div>
                <div className="mb-1 flex items-center justify-center gap-1 text-[12px] text-black/40">
                  <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                    <rect x="0.6" y="4.6" width="7.8" height="6" rx="1.6" fill="currentColor" />
                    <path d="M2 4.5V3a2.5 2.5 0 015 0v1.5" stroke="currentColor" strokeWidth="1.1" fill="none" />
                  </svg>
                  Encrypted
                </div>
                <div className="mb-1 text-center text-[12px] text-black/45">
                  Today <span className="font-medium">12:12 AM</span>
                </div>
              </>
            )}
            {/* Conversation — sent (green, right) and received (gray, left)
                bubbles in chronological order. */}
            {messages.map((m, i) =>
              m.side === "sent" ? (
                <div key={m.id} className="flex flex-col items-end">
                  <div
                    className="hero-kb-bubble max-w-[78%] rounded-[20px] px-3.5 py-2 text-[17px] text-white"
                    style={{ background: C.smsGreen }}
                  >
                    {m.text}
                  </div>
                  {i === messages.length - 1 && (
                    <span className="mr-1 mt-0.5 text-[11px] text-black/45">Delivered</span>
                  )}
                </div>
              ) : (
                <div key={m.id} className="flex justify-start">
                  <div
                    className="hero-kb-bubble max-w-[78%] rounded-[20px] px-3.5 py-2 text-[17px] text-black"
                    style={{ background: C.recvGray }}
                  >
                    {m.text}
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 px-3 pb-2 pt-1">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e6e8ec]">
              <Plus className="h-5 w-5 text-[#6b7280]" strokeWidth={2.6} />
            </div>
            <div className="flex h-9 flex-1 items-center rounded-full border border-black/15 pl-4 pr-2">
              {hasText ? (
                <span className="text-[15px] text-black">{text}</span>
              ) : (
                <span className="text-[15px]" style={{ color: "#9aa0a6" }}>
                  iMessage
                </span>
              )}
              <span className="ml-[1px] inline-block h-4 w-[2px] animate-pulse" style={{ background: C.send }} />
              <div className="flex-1" />
              {!hasText && <Mic className="h-5 w-5 shrink-0" style={{ color: "#9aa0a6" }} strokeWidth={2} />}
            </div>
            {hasText && (
              <div
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform"
                style={{
                  backgroundColor: pressed === "send" ? C.sendPressed : C.send,
                  transform: pressed === "send" ? "scale(0.86)" : "scale(1)",
                }}
              >
                <ArrowUp className="h-5 w-5 text-white" strokeWidth={2.8} />
              </div>
            )}
          </div>

          {/* Keyboard */}
          <div style={{ backgroundColor: C.toolbarBar }} className="px-[5px] pb-1 pt-2">
            {/* Toolbar */}
            <div className="mb-2 flex items-center" style={{ height: 50, gap: 8 }}>
              <div className="relative ml-2 mr-[3px]">
                <div
                  className="grid place-items-center rounded-[12px]"
                  style={{ width: 57, height: 50, backgroundColor: C.toolButtonBg }}
                >
                  <EllipsisCircle />
                </div>
              </div>
              <div className="relative mr-[3px]">
                <div
                  className="grid place-items-center rounded-[12px]"
                  style={{ width: 57, height: 50, backgroundColor: C.toolButtonBg }}
                >
                  <PasteGlyph />
                </div>
              </div>
              <div className="relative">
                <div
                  className="grid place-items-center rounded-[12px]"
                  style={{ width: 68, height: 50, backgroundColor: C.checkBg }}
                >
                  <span className="text-[16px] font-medium" style={{ color: C.checkText }}>
                    Check
                  </span>
                </div>
              </div>
              <div className="flex-1" />
              <div
                className="relative mr-2 flex items-stretch overflow-hidden rounded-[12px] transition-transform"
                style={{
                  height: 50,
                  backgroundColor: pressed === "reword" ? C.rewordPressed : C.rewordBg,
                  transform: pressed === "reword" ? "scale(0.96)" : "scale(1)",
                }}
              >
                <div className="relative flex items-center px-3">
                  {rewordLoading ? (
                    <span className="block h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  ) : (
                    <span className="text-[16px] font-medium text-white">Reword</span>
                  )}
                </div>
                <div className="self-center" style={{ width: 1, height: 20, backgroundColor: "rgba(255,255,255,0.5)" }} />
                <div className="relative grid place-items-center" style={{ width: 40 }}>
                  <ChevronDown className="h-4 w-4 text-white" strokeWidth={2.4} />
                </div>
              </div>
            </div>

            {/* Rows */}
            <div className="mb-[8px] flex gap-[5px]">
              {row1.map((l, i) => (
                <Key key={l} label={lower ? l : l.toUpperCase()} num={nums[i]} />
              ))}
            </div>
            <div className="mb-[8px] flex gap-[5px] px-[18px]">
              {row2.map((l) => (
                <Key key={l} label={lower ? l : l.toUpperCase()} />
              ))}
            </div>
            <div className="mb-[8px] flex gap-[5px]">
              <Key bg={C.actionKey} grow={1.5}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4l7 7h-4v6H9v-6H5l7-7z" fill="rgba(0,0,0,0.82)" />
                </svg>
              </Key>
              {row3.map((l) => (
                <Key key={l} label={lower ? l : l.toUpperCase()} />
              ))}
              <Key bg={C.actionKey} grow={1.5}>
                <svg width="22" height="20" viewBox="0 0 26 22" fill="none">
                  <path
                    d="M8.2 3h13a2 2 0 012 2v12a2 2 0 01-2 2h-13a2 2 0 01-1.5-.7L1 11l5.7-7.3A2 2 0 018.2 3z"
                    stroke="rgba(0,0,0,0.82)"
                    strokeWidth="1.6"
                    fill="none"
                  />
                  <path d="M11 8l6 6M17 8l-6 6" stroke="rgba(0,0,0,0.82)" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </Key>
            </div>
            <div className="mb-2 flex gap-[5px]">
              <Key bg={C.actionKey} grow={1.6} fontSize={15}>
                123
              </Key>
              <Key bg={C.actionKey} grow={1.2} fontSize={17}>
                文
              </Key>
              <Key grow={5} fontSize={15}>
                <span className="text-black/85">space</span>
              </Key>
              <Key bg={C.actionKey} grow={1.6} fontSize={18}>
                ↵
              </Key>
            </div>
          </div>

          {/* Bottom utility strip */}
          <div style={{ backgroundColor: C.toolbarBar }} className="flex items-center justify-between px-5 pb-2 pt-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9.2" stroke="rgba(0,0,0,0.82)" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="4" ry="9.2" stroke="rgba(0,0,0,0.82)" strokeWidth="1.5" />
              <path d="M3 12h18M4.5 7.5h15M4.5 16.5h15" stroke="rgba(0,0,0,0.82)" strokeWidth="1.5" />
            </svg>
            <Mic className="h-6 w-6" style={{ color: "rgba(0,0,0,0.82)" }} strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
