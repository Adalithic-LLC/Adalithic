import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Plus, ArrowUp, Mic } from "lucide-react";

/**
 * HeroKeyboardAnimation
 *
 * The hero visual for the Adalithic site: a live recreation of the Arcatext
 * keyboard + toolbar, floating over the page background (no device frame).
 * It auto-plays the core loop — type a message, tap Reword to translate it in
 * place, then send it. Sent and received messages stack just above the input
 * bar; each new message pushes the older ones straight up, and they fade out
 * completely as they rise, before ever reaching the three parked bubbles that
 * snapped into the row below the tagline.
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
// received messages type themselves out as replies. The very first "message" is
// the subheader itself — it is typed, sent, and flown up into place by the hero
// (see onSubheaderSend), so the conversation here opens with the reply to it.
type Step =
  // A sent message with no `reworded` types and sends in the native language
  // (no Reword step); with `reworded` it types, Rewords, then sends in Japanese.
  | { kind: "sent"; native: string; reworded?: string }
  | { kind: "recv"; text: string };

const SCRIPT: Step[] = [
  { kind: "recv", text: "それ、すごくいいね！" },
  {
    kind: "sent",
    native: "Yeah, I personally want to learn a language. That's why I'm translating to Japanese.",
    reworded: "うん、個人的に言語を学びたいんだ。だから日本語に翻訳してるんだよ。",
  },
  { kind: "recv", text: "私も日本語を勉強してるんだ。一緒にチャットして練習しよう！" },
  { kind: "sent", native: "Sure! When did you start learning?", reworded: "いいね！いつから勉強し始めたの？" },
  { kind: "recv", text: "1年くらい前からだよ。だからまだ慣れてないんだ。" },
  { kind: "sent", native: "Same here, maybe a bit longer.", reworded: "私も同じくらい、たぶんもう少し長いかな。" },
  { kind: "recv", text: "完璧、たぶん似たようなレベルだね。" },
  { kind: "sent", native: "I think so, and I really love texting to practice.", reworded: "そうだね、それにメッセージで練習するのが大好きなんだ。" },
  { kind: "recv", text: "どうして？" },
  {
    kind: "sent",
    native: "Texting gives me time to read and think, even say each message out loud.",
    reworded: "メッセージだと読んで考える時間があるし、一つ一つ声に出して言えるんだ。",
  },
  { kind: "recv", text: "うん、なるほどね。このキーボードを使うのは初めてなんだ。" },
  { kind: "sent", native: "You'll love it. It's a game-changer!", reworded: "絶対気に入るよ。まさに革命的だから！" },
  { kind: "recv", text: "ところで、日本に住んでるの？" },
  { kind: "sent", native: "No, I'm in the United States. And you?", reworded: "ううん、アメリカにいるよ。君は？" },
  { kind: "recv", text: "私は日本に住んでるよ！言語に浸りたくてね。" },
  { kind: "sent", native: "Oh wow! Living in Japan must be incredible.", reworded: "わあ！日本に住むなんて最高だろうね。" },
  { kind: "recv", text: "本当に楽しいよ。食べ物も最高。" },
  { kind: "sent", native: "Have you explored the country?", reworded: "国内はいろいろ回った？" },
  { kind: "recv", text: "うん、あちこち行ったよ。" },
  { kind: "sent", native: "Like where? Tokyo?", reworded: "例えばどこ？東京とか？" },
  { kind: "recv", text: "うん、でももっといろんな所に行ったよ。" },
  { kind: "sent", native: "What was your favorite?", reworded: "一番のお気に入りはどこだった？" },
  { kind: "recv", text: "やっぱり日光国立公園かな。" },
  { kind: "sent", native: "I've seen photos of Nikko. What a beautiful place.", reworded: "日光の写真を見たことあるよ。なんて美しい場所なんだ。" },
];

type Bubble = {
  id: number;
  side: "sent" | "recv";
  text: string;
  shown: number; // characters revealed (received types out; sent shows all)
};

// Per-bubble stack placement, computed from measured heights: how far up the
// bubble is pushed (design px). Opacity is applied separately by a rAF that
// reads each bubble's live position, so the fade always matches where it is.
type Placement = { y: number };

// Surface geometry (design pixels). No device frame — just the message stack,
// input bar and keyboard. Messages stack just above the input bar and are
// pushed straight up by newer messages, fading out before the parked row.
const DESIGN_W = 402;
const SURFACE_H = 600; // taller surface gives the message stack room to scroll up and fade

const SIDE_PAD = 12; // sent/received sit 12px in from the edge
const BASE_BOTTOM = 4; // a new bubble starts just above the input bar
const STACK_GAP = 8; // vertical gap between stacked messages (design px)
const FIELD_GAP = 24; // gap between the input field's top and the lowest bubble
const BASE_OFFSET_DEFAULT = 408; // fallback until the keyboard panel is measured
const FADE_CAP_DEFAULT = 200; // fallback fade-out height until measured (design px)
const NEWEST_CLEAR = 60; // px reserved at the base so the newest message stays fully opaque

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

interface HeroKeyboardAnimationProps {
  /** Held until the intro's logo "clicks" into the field; then typing begins. */
  active?: boolean;
  /** Lights up the input field while the logo is landing in it. */
  focused?: boolean;
  /** Ref to the input field so the intro can fly the logo into it. */
  inputRef?: React.Ref<HTMLDivElement>;
  /** The subheader/tagline — rising messages fade out just below it. */
  taglineRef?: React.RefObject<HTMLElement | null>;
  /** The headline (unused now the stack fades below the subheader). */
  titleRef?: React.RefObject<HTMLElement | null>;
  /** The subheader text the intro types and sends before the conversation. */
  subheaderText?: string;
  /**
   * Fires once the intro has typed and "sent" the subheader message — the hero
   * then flies the bubble up into place as the real subheader.
   */
  onSubheaderSend?: () => void;
}

export default function HeroKeyboardAnimation({
  active = true,
  focused = false,
  inputRef,
  taglineRef,
  titleRef,
  subheaderText = "",
  onSubheaderSend,
}: HeroKeyboardAnimationProps) {
  const reduceMotion = useReducedMotion();

  // ── visual state driven by the timeline ──
  // The subheader starts already typed in the field (it is "sent" on logo-click
  // rather than typed out).
  const [text, setText] = useState(subheaderText);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [rewordLoading, setRewordLoading] = useState(false);
  const [pressed, setPressed] = useState<"reword" | "send" | null>(null);

  const bubbleId = useRef(1);
  const bubbleAreaRef = useRef<HTMLDivElement>(null);
  const keyboardPanelRef = useRef<HTMLDivElement>(null);
  // The input field element, tracked here (and mirrored to the forwarded
  // inputRef) so the stack can measure the field's top and keep a fixed gap
  // above it, pushing up as the field grows.
  const fieldElRef = useRef<HTMLDivElement | null>(null);
  const setFieldRef = useCallback(
    (el: HTMLDivElement | null) => {
      fieldElRef.current = el;
      if (typeof inputRef === "function") inputRef(el);
      else if (inputRef && "current" in inputRef)
        (inputRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    },
    [inputRef],
  );
  // The message-stack layer is pinned this many design px above the surface
  // bottom — the keyboard panel plus a min-height input bar — so the messages
  // stay put even when the input field grows to wrap a long message.
  const [baseOffset, setBaseOffset] = useState(BASE_OFFSET_DEFAULT);
  // Height (design px) at which a rising message is fully faded out — the
  // clearance below the parked row, so the stack never reaches it (used to prune
  // messages that have scrolled off the top).
  const [fadeCap, setFadeCap] = useState(FADE_CAP_DEFAULT);
  // Per-bubble stack placement (push distance), keyed by id.
  const [placement, setPlacement] = useState<Map<number, Placement>>(new Map());

  // Bubble DOM nodes, so the stack can measure each message's height and the
  // rAF can read each bubble's live screen position for the fade.
  const elMap = useRef<Map<number, HTMLDivElement>>(new Map());
  // Screen-space fade band (px): opacity is 0 at/above `clearLine` (just below
  // the parked row) and 1 at/below clearLine + `band`.
  const clearLineRef = useRef(0);
  const bandRef = useRef(400);
  // Keep the subheader-send callback in a ref so the timeline effect (rebuilt
  // only on reduced-motion / active changes) always calls the latest one.
  const onSubheaderRef = useRef(onSubheaderSend);
  onSubheaderRef.current = onSubheaderSend;

  // Lay the stack out: newest message sits at the base, each older one pushed up
  // by the heights below it. Runs after every change so a new (or growing)
  // message pushes the others straight up. Fully-scrolled-off messages are
  // pruned; opacity is handled by the rAF below.
  useLayoutEffect(() => {
    if (reduceMotion) return;
    const next = new Map<number, Placement>();
    let cum = 0; // design px the current bubble's bottom sits above the base
    const gone: number[] = [];
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const bub = bubbles[i];
      const el = elMap.current.get(bub.id);
      const h = el ? el.offsetHeight : 40;
      next.set(bub.id, { y: cum });
      if (cum > fadeCap) gone.push(bub.id); // wholly above the cap → drop it
      cum += h + STACK_GAP;
    }
    setPlacement(next);
    if (gone.length) setBubbles((prev) => prev.filter((b) => !gone.includes(b.id)));
  }, [bubbles, fadeCap, reduceMotion]);

  // Fade each message by its LIVE screen position (framer animates the push;
  // this reads where the bubble actually is each frame and sets its opacity), so
  // the fade always matches the position even mid-push — a message is fully
  // transparent by the time it reaches the parked row.
  useEffect(() => {
    if (reduceMotion) return;
    let raf = 0;
    const tick = () => {
      const clearLine = clearLineRef.current;
      const band = bandRef.current || 1;
      elMap.current.forEach((el) => {
        const inner = el.firstElementChild as HTMLElement | null;
        if (!inner) return;
        const top = el.getBoundingClientRect().top;
        let o = (top - clearLine) / band;
        o = o < 0 ? 0 : o > 1 ? 1 : o;
        inner.style.opacity = String(o);
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion]);

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

  // Keep the stack a fixed FIELD_GAP above the input field's top, measured from
  // the field itself so the gap stays exact as the field grows or shrinks. Run
  // synchronously (before paint) on every text change so the whole stack pushes
  // up in lockstep with the growing field rather than lagging behind it.
  const syncBaseOffset = useCallback(() => {
    const kb = keyboardPanelRef.current;
    const f = fieldElRef.current;
    if (!kb || !f || !scale) return;
    // How far the field's top sits above the keyboard panel's top (design px).
    const fieldAboveKb = (kb.getBoundingClientRect().top - f.getBoundingClientRect().top) / scale;
    setBaseOffset(kb.offsetHeight + fieldAboveKb + FIELD_GAP - BASE_BOTTOM);
  }, [scale]);
  useLayoutEffect(() => {
    syncBaseOffset();
  }, [text, syncBaseOffset]);

  // Measure the fade budget: fade messages out just below the subheader so a
  // rising message is gone before it reaches it.
  useEffect(() => {
    const measure = () => {
      syncBaseOffset();
      const area = bubbleAreaRef.current?.getBoundingClientRect();
      if (!area || !scale) return;
      const baseY = area.bottom; // messages stack up from here

      const tag = taglineRef?.current?.getBoundingClientRect();
      if (tag) {
        const clearLine = tag.bottom + 24; // opacity reaches 0 a little below the subheader
        clearLineRef.current = clearLine;
        // Reserve a little space at the base so the newest message stays fully
        // opaque, then fade across the rest of the gap up to the clear line.
        bandRef.current = Math.max(40, baseY - clearLine - NEWEST_CLEAR * scale);
        setFadeCap(Math.max(70, (baseY - clearLine) / scale));
      }
    };
    measure();
    const raf = requestAnimationFrame(measure);
    // Re-measure after the hero's entrance animation has settled and after the
    // subheader has flown into place.
    const timers = [400, 1000, 1800, 3000].map((ms) => setTimeout(measure, ms));
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", measure);
    };
  }, [scale, taglineRef, titleRef, syncBaseOffset]);

  // Build the continuously looping timeline. Rebuilt only when reduced-motion
  // changes.
  useEffect(() => {
    // Reduced motion: skip the animation and show the last few messages
    // statically (the hero reveals the subheader directly).
    if (reduceMotion) {
      setText("");
      let id = 1;
      const last = SCRIPT.slice(-4).map((s) => ({
        id: id++,
        side: (s.kind === "sent" ? "sent" : "recv") as "sent" | "recv",
        text: s.kind === "sent" ? s.reworded ?? s.native : s.text,
        shown: (s.kind === "sent" ? s.reworded ?? s.native : s.text).length,
      }));
      setBubbles(last);
      return;
    }

    // Wait for the intro to hand off (the logo "clicks" the field) before the
    // first message starts typing.
    if (!active) return;

    // A sent bubble appears at the base of the stack, pushing older messages up.
    const spawnSent = (msg: string) => {
      const id = bubbleId.current++;
      setBubbles((prev) => [...prev, { id, side: "sent", text: msg, shown: msg.length }]);
    };

    // A received bubble appears at the base and types itself out; the next
    // message will push it (and everything above it) up.
    const spawnRecv = () => {
      const id = bubbleId.current++;
      setBubbles((prev) => [...prev, { id, side: "recv", text: "", shown: 0 }]);
      return id;
    };
    // While a received message types, it is always the newest (bottom) bubble.
    const setRecvText = (full: string, n: number) =>
      setBubbles((prev) => {
        const a = prev.slice();
        const i = a.length - 1;
        if (i >= 0 && a[i].side === "recv") a[i] = { ...a[i], text: full, shown: n };
        return a;
      });

    const beats: { fn: () => void; ms: number }[] = [];
    const b = (fn: () => void, ms: number) => beats.push({ fn, ms });

    b(() => {}, 150); // brief settle after the logo clicks the field

    // Subheader intro (once): the subheader is already sitting in the field — on
    // the logo's "click" we press send, then hand off to the hero, which lets
    // the bubble sit for 0.5s and flies it up into place as the real subheader.
    // The conversation loop resumes AFTER this, so it plays only once.
    if (subheaderText) {
      b(() => setText(subheaderText), 40); // ensure the pre-filled text is shown
      b(() => setPressed("send"), 240); // press send on logo-click
      b(() => {
        setPressed(null);
        setText("");
        onSubheaderRef.current?.();
      }, 1600); // hold while the bubble sits and flies up into place
    }

    // The beat index the loop restarts at: the subheader intro plays once, then
    // the conversation loops from here.
    const loopStart = beats.length;

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
        if (reworded) {
          // 2) tap Reword; loading lasts 0.5s; 3) show the translation; 4) send.
          b(() => {
            setPressed("reword");
            setRewordLoading(true);
          }, 500);
          b(() => {
            setRewordLoading(false);
            setPressed(null);
            setText(reworded);
          }, 900);
          b(() => setPressed("send"), 340);
          b(() => {
            setPressed(null);
            spawnSent(reworded);
            setText("");
          }, 1000);
        } else {
          // No Reword — send exactly what was typed (English for now).
          b(() => {}, 450);
          b(() => setPressed("send"), 340);
          b(() => {
            setPressed(null);
            spawnSent(native);
            setText("");
          }, 1000);
        }
      } else {
        // received: appears 1s after the send (the previous beat's 1000ms),
        // types itself out over ~1s, then rests until the next message pushes
        // it (and everything above it) up the stack.
        const full = step.text;
        const per = perChar(full.length);
        b(() => spawnRecv(), per);
        for (let i = 1; i <= full.length; i++) {
          b(() => setRecvText(full, i), per);
        }
        b(() => {}, 1100); // rest before the next message pushes it up
      }
    });

    b(() => {}, 1200); // loop lull

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const run = () => {
      const beat = beats[i];
      beat.fn();
      i += 1;
      // Loop back to the start of the conversation; the subheader intro plays
      // only once.
      if (i >= beats.length) i = loopStart;
      timer = setTimeout(run, beat.ms);
    };
    run();
    return () => clearTimeout(timer);
  }, [reduceMotion, active, subheaderText]);

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
        className="relative text-left"
        style={{
          width: DESIGN_W,
          height: SURFACE_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {/* Transparent stage — no card. Floating bubbles, the input bar and the
            keyboard, over the hero background. */}
        <div className="relative h-full w-full">
          {/* Bubble layer: each message floats up, curves out around the hero
              copy, and fades in line with the headline. Pinned to a stable
              bottom (keyboard panel + a min-height input bar) so it never shifts
              when the input field grows to wrap a long message. Overflow visible
              so bubbles float clear of the keyboard. */}
          <div
            ref={bubbleAreaRef}
            className="pointer-events-none absolute inset-x-0 top-0"
            style={{ bottom: baseOffset, overflow: "visible" }}
          >
            {reduceMotion
              ? // Static, bottom-aligned stack for reduced motion.
                bubbles.length > 0 && (
                  <div className="absolute inset-x-3 bottom-1 flex flex-col gap-3">
                    {bubbles.map((bub) => (
                      <div key={bub.id} className={`flex ${bub.side === "sent" ? "justify-end" : "justify-start"}`}>
                        <div
                          className="max-w-[74%] rounded-[20px] px-3.5 py-2 text-[17px]"
                          style={
                            bub.side === "sent"
                              ? { background: C.sentBubble, color: "#fff" }
                              : { background: C.recvGray, color: "#000" }
                          }
                        >
                          {bub.text}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              : bubbles.map((bub) => {
                  const isSent = bub.side === "sent";
                  // Don't show a received bubble until its first character types.
                  if (!isSent && bub.shown === 0) return null;
                  const p = placement.get(bub.id);
                  const style: React.CSSProperties = {
                    bottom: BASE_BOTTOM,
                    maxWidth: DESIGN_W * 0.72,
                  };
                  if (isSent) style.right = SIDE_PAD;
                  else style.left = SIDE_PAD;
                  const showCaret = !isSent && bub.shown < bub.text.length;
                  return (
                    <motion.div
                      key={bub.id}
                      ref={(el) => {
                        if (el) elMap.current.set(bub.id, el as HTMLDivElement);
                        else elMap.current.delete(bub.id);
                      }}
                      className="absolute"
                      style={style}
                      initial={{ y: 0 }}
                      animate={{ y: p ? -p.y : 0 }}
                      transition={{ type: "tween", duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                    >
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
                    </motion.div>
                  );
                })}
          </div>

          {/* Controls (input bar + keyboard) anchored to the surface bottom.
              The input field grows UPWARD as it wraps, so it never displaces the
              bubble layer pinned above it. */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col">
          {/* Input bar. The field wraps long text and grows in height (bottom
              aligned) and the send button is always visible. */}
          <div className="flex items-end gap-2 px-3 pb-2 pt-1">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e6e8ec]">
              <Plus className="h-5 w-5 text-[#6b7280]" strokeWidth={2.6} />
            </div>
            <div
              ref={setFieldRef}
              className="flex min-h-9 min-w-0 flex-1 items-center rounded-[18px] border py-1.5 pl-4 pr-3 transition-colors"
              style={{
                borderColor: focused ? C.send : "rgba(0,0,0,0.15)",
                background: focused ? "rgba(10,122,255,0.06)" : "transparent",
              }}
            >
              {hasText ? (
                <span className="min-w-0 flex-1 whitespace-pre-wrap break-words text-[15px] leading-snug text-black">
                  {text}
                  <span className="ml-[1px] inline-block h-[15px] w-[2px] translate-y-[2px] animate-pulse align-baseline" style={{ background: C.send }} />
                </span>
              ) : (
                <span className="min-w-0 flex-1 text-[15px]" style={{ color: "#9aa0a6" }}>
                  Type something
                  <span className="ml-[1px] inline-block h-[15px] w-[2px] translate-y-[2px] animate-pulse" style={{ background: C.send }} />
                </span>
              )}
            </div>
            <div
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform"
              style={{
                backgroundColor: pressed === "send" ? C.sendPressed : C.send,
                transform: pressed === "send" ? "scale(0.86)" : "scale(1)",
              }}
            >
              <ArrowUp className="h-5 w-5 text-white" strokeWidth={2.8} />
            </div>
          </div>

          {/* Floating keyboard panel (rounded + shadow so it reads as its own
              element now that there is no surrounding card) */}
          <div
            ref={keyboardPanelRef}
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
    </div>
  );
}
