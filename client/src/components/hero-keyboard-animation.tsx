import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronDown, Plus, ArrowUp, Mic } from "lucide-react";

/**
 * HeroKeyboardAnimation
 *
 * The hero visual for the Adalithic site: a live recreation of the Arcatext
 * keyboard + toolbar, floating over the page background (no device frame).
 * It auto-plays the core loop — type a message, tap Reword to translate it in
 * place, then send it — and every sent/received bubble drifts up and away as
 * newer messages arrive, so the conversation continuously bubbles upward.
 *
 * The keyboard/toolbar colors and layout are reused from the interactive
 * keyboard prototype in the product-design portfolio (ArcatextKeyboard.tsx).
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
  sentBubble: "#0A7AFF", // sent bubbles use the same blue as the send button
  recvGray: "#E9E9EB",
};

// A demo back-and-forth conversation. Each sent message is typed in the user's
// native language, then Reworded (translated) in place before being sent; the
// received messages type themselves out as replies.
type Step =
  | { kind: "sent"; native: string; reworded: string }
  | { kind: "recv"; text: string };

const SCRIPT: Step[] = [
  { kind: "sent", native: "Hi! Are you free this weekend?", reworded: "やあ！今週末は空いてる？" },
  { kind: "recv", text: "うん、空いてるよ！何かする？" },
  { kind: "sent", native: "Let's get dinner.", reworded: "夕食を食べに行こう。" },
  { kind: "recv", text: "いいね！何時がいい？" },
  { kind: "sent", native: "How about 7pm?", reworded: "7時はどう？" },
  { kind: "recv", text: "完璧！どこで会う？" },
  { kind: "sent", native: "The station, by the café.", reworded: "駅で、カフェのそばで。" },
  { kind: "recv", text: "了解！楽しみにしてるね。" },
];

type Bubble = {
  id: number;
  side: "sent" | "recv";
  text: string;
  shown: number; // characters revealed (received types out; sent shows all)
  age: number; // number of messages that have arrived after this one
  entered: boolean; // false for one frame so a sent bubble can slide up in
};

// Surface geometry (design pixels). No device frame — just the floating
// bubbles, input bar and keyboard.
const DESIGN_W = 402;
const SURFACE_H = 560;

// Bubble motion. Each new message ages the older ones by one step; a bubble is
// fully faded (and removed) once 3 messages exist after it (age 3).
const RISE = 53; // upward travel per age step — ~41px bubble + 12px gap
const SIDE_PAD = 12; // sent/received sit 12px in from the edge
const BASE_BOTTOM = 4; // newest bubble sits just above the input bar
const ENTER_OFFSET = 30; // a just-sent bubble slides up this far into place
const TRANSITION_MS = 780; // one staged float step / the slide-in
// Per-bubble horizontal drift (px per age step), cycled by id so each bubble
// takes a similar-but-different path. Sent drift right, received drift left.
const DRIFTX = [15, 24, 10, 20, 28, 13];

const TYPE_MS = 1000; // total typing duration (both input and received bubbles)
const perChar = (len: number) => Math.max(18, Math.round(TYPE_MS / Math.max(1, len)));

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
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [rewordLoading, setRewordLoading] = useState(false);
  const [pressed, setPressed] = useState<"reword" | "send" | null>(null);

  const bubbleId = useRef(1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Responsive scale so the floating keyboard fits the hero at every
  // breakpoint, clamped so it never overflows the viewport width.
  const [scale, setScale] = useState(0.9);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      // ~1.5x the original size (matches the "150% zoom" that looked right).
      const base = w < 480 ? 0.69 : w < 640 ? 0.78 : w < 1024 ? 0.87 : 0.96;
      const fit = (w - 32) / DESIGN_W;
      setScale(Math.min(base, fit));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // Build the continuously looping timeline. Rebuilt only when reduced-motion
  // changes.
  useEffect(() => {
    // Reduced motion: skip the animation, show the last few messages statically.
    if (reduceMotion) {
      setText("");
      let id = 1;
      const last = SCRIPT.slice(-4).map((s) => ({
        id: id++,
        side: (s.kind === "sent" ? "sent" : "recv") as "sent" | "recv",
        text: s.kind === "sent" ? s.reworded : s.text,
        shown: (s.kind === "sent" ? s.reworded : s.text).length,
        age: 0,
        entered: true,
      }));
      setBubbles(last);
      return;
    }

    // Age every existing bubble by one and drop the ones that have fully faded
    // (an age-3 bubble is at opacity 0; it lingers one extra step then leaves).
    const ageAll = (prev: Bubble[]) =>
      prev.map((b) => ({ ...b, age: b.age + 1 })).filter((b) => b.age <= 3);

    // A sent bubble drops in below its resting spot, then slides up into place.
    const spawnSent = (msg: string) => {
      const id = bubbleId.current++;
      setBubbles((prev) => [
        ...ageAll(prev),
        { id, side: "sent", text: msg, shown: msg.length, age: 0, entered: false },
      ]);
      const t = setTimeout(
        () => setBubbles((prev) => prev.map((b) => (b.id === id ? { ...b, entered: true } : b))),
        50,
      );
      timers.current.push(t);
    };

    // A received bubble appears in place and types itself out.
    const spawnRecv = () => {
      const id = bubbleId.current++;
      setBubbles((prev) => [...ageAll(prev), { id, side: "recv", text: "", shown: 0, age: 0, entered: true }]);
      return id;
    };
    const setRecvText = (full: string, n: number) =>
      setBubbles((prev) => {
        const a = prev.slice();
        for (let i = a.length - 1; i >= 0; i--) {
          if (a[i].side === "recv" && a[i].age === 0) {
            a[i] = { ...a[i], text: full, shown: n };
            break;
          }
        }
        return a;
      });

    const beats: { fn: () => void; ms: number }[] = [];
    const b = (fn: () => void, ms: number) => beats.push({ fn, ms });

    b(() => {}, 600); // loop-seam lull

    SCRIPT.forEach((step) => {
      if (step.kind === "sent") {
        const { native, reworded } = step;
        b(() => setText(""), 40);
        // 1) type the message in the input over ~1s
        const per = perChar(native.length);
        for (let i = 1; i <= native.length; i++) {
          const s = native.slice(0, i);
          b(() => setText(s), per);
        }
        // 2) tap Reword immediately; 3) loading state lasts 0.5s
        b(() => {
          setPressed("reword");
          setRewordLoading(true);
        }, 500);
        // 4) show the translation in the field (timing unchanged) …
        b(() => {
          setRewordLoading(false);
          setPressed(null);
          setText(reworded);
        }, 900);
        // … tap send (timing unchanged) …
        b(() => setPressed("send"), 340);
        // … send it: the bubble slides up. Then wait 1s before the reply.
        b(() => {
          setPressed(null);
          spawnSent(reworded);
          setText("");
        }, 1000);
      } else {
        // received: appears 1s after the send (the previous beat's 1000ms),
        // then types itself out over ~1s, then joins the float.
        const full = step.text;
        const per = perChar(full.length);
        b(() => spawnRecv(), per);
        for (let i = 1; i <= full.length; i++) {
          b(() => setRecvText(full, i), per);
        }
        b(() => {}, 320); // brief settle before the next message
      }
    });

    b(() => {}, 1200); // loop lull

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const run = () => {
      const beat = beats[i];
      beat.fn();
      i = (i + 1) % beats.length;
      timer = setTimeout(run, beat.ms);
    };
    run();
    return () => {
      clearTimeout(timer);
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [reduceMotion]);

  // ── derived ──
  const hasText = text.length > 0;

  // ── keyboard rows ──
  const lower = text === "";
  const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const row3 = ["z", "x", "c", "v", "b", "n", "m"];
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  return (
    <div
      className="animate-float"
      style={{ width: DESIGN_W * scale, height: SURFACE_H * scale }}
      role="img"
      aria-label="The Arcatext keyboard typing a message, translating it with one tap, and sending it as a chat bubble that floats away."
    >
      <div
        className="relative"
        style={{
          width: DESIGN_W,
          height: SURFACE_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {/* Transparent stage — no card. Floating bubbles, the input bar and the
            keyboard, over the hero background. */}
        <div className="relative flex h-full w-full flex-col">
          {/* Bubble stage: each message drifts up/out and fades as newer ones
              arrive. Overflow visible so bubbles can float clear as they fade. */}
          <div className="relative flex-1" style={{ overflow: "visible" }}>
            {bubbles.map((bub) => {
              const isSent = bub.side === "sent";
              const driftX = DRIFTX[bub.id % DRIFTX.length] * bub.age * (isSent ? 1 : -1);
              const enterY = bub.entered ? 0 : ENTER_OFFSET;
              const ty = -(bub.age * RISE) + enterY;
              const op = bub.entered ? Math.max(0, 1 - bub.age / 3) : 0;
              const style: React.CSSProperties = {
                bottom: BASE_BOTTOM,
                maxWidth: DESIGN_W * 0.74,
                transform: `translate(${driftX}px, ${ty}px)`,
                opacity: op,
                transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.22,0.61,0.36,1), opacity ${TRANSITION_MS}ms ease-out`,
                willChange: "transform, opacity",
              };
              if (isSent) style.right = SIDE_PAD;
              else style.left = SIDE_PAD;
              const showCaret = !isSent && bub.shown < bub.text.length;
              return (
                <div key={bub.id} className="absolute" style={style}>
                  <div
                    className="rounded-[20px] px-3.5 py-2 text-[17px]"
                    style={isSent ? { background: C.sentBubble, color: "#fff" } : { background: C.recvGray, color: "#000" }}
                  >
                    {isSent ? bub.text : bub.text.slice(0, bub.shown)}
                    {showCaret && (
                      <span
                        className="ml-[1px] inline-block h-[18px] w-[2px] animate-pulse align-middle"
                        style={{ background: "rgba(0,0,0,0.55)" }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
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

          {/* Floating keyboard panel (rounded + shadow so it reads as its own
              element now that there is no surrounding card) */}
          <div
            className="overflow-hidden"
            style={{ borderRadius: 22, boxShadow: "0 18px 44px -16px rgba(20,10,40,0.4)" }}
          >
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
                  {/* Fixed-width label so the button doesn't resize while loading */}
                  <div className="relative flex items-center justify-center" style={{ width: 90 }}>
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
    </div>
  );
}
