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
  // A sent message with no `reworded` types and sends in the native language
  // (no Reword step); with `reworded` it types, Rewords, then sends in Japanese.
  | { kind: "sent"; native: string; reworded?: string }
  | { kind: "recv"; text: string };

const SCRIPT: Step[] = [
  { kind: "sent", native: "Learn a language" },
  { kind: "sent", native: "Communicate with clients" },
  { kind: "sent", native: "Chat with international friends" },
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
  floating: boolean; // received bubbles hold still until they finish typing
  startAt?: number; // performance.now() when the bubble began floating
};

// Measured, in design px: how far up a bubble rises and how far it swings out
// to clear the centered hero copy on its way to fading by the headline.
type FloatGeo = { yb: number; yhead: number; clearX: number };
const DEFAULT_GEO: FloatGeo = { yb: 100, yhead: 620, clearX: 260 };

// Build an arc-length lookup table for the float curve (design px, right side).
// A bubble walks this at a constant rate, so the motion never accelerates or
// jerks. The cubic Bézier bows out to the side (clearing the tagline) and keeps
// widening up to the headline, matching the intended path.
type LutPoint = { s: number; x: number; y: number };
function buildLut(geo: FloatGeo): LutPoint[] {
  const cx = geo.clearX;
  // Dash out to the side channel first (p1 is nearly full-width but only a
  // little up), so the bubble clears the parked row's horizontal span while
  // still low, THEN rises straight up the margin past the tagline/headline —
  // the "curve to the side to clear the width, then go up" path.
  const p0 = [0, 0];
  const p1 = [cx * 1.02, -geo.yb];
  const p2 = [cx * 1.12, -geo.yhead * 0.5];
  const p3 = [cx * 1.06, -geo.yhead];
  const bez = (t: number): [number, number] => {
    const u = 1 - t;
    return [
      u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
      u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1],
    ];
  };
  const N = 72;
  const pts: LutPoint[] = [];
  let prev = bez(0);
  let cum = 0;
  pts.push({ s: 0, x: prev[0], y: prev[1] });
  for (let i = 1; i <= N; i++) {
    const p = bez(i / N);
    cum += Math.hypot(p[0] - prev[0], p[1] - prev[1]);
    pts.push({ s: cum, x: p[0], y: p[1] });
    prev = p;
  }
  for (const pt of pts) pt.s = cum ? pt.s / cum : 0;
  return pts;
}
// Position at a given arc-length fraction (0–1) of the curve, mirrored by side.
function posAt(lut: LutPoint[], progress: number, dir: number): { x: number; y: number } {
  const p = progress <= 0 ? 0 : progress >= 1 ? 1 : progress;
  let i = 0;
  while (i < lut.length - 2 && lut[i + 1].s < p) i++;
  const a = lut[i];
  const b = lut[i + 1] ?? a;
  const f = b.s > a.s ? (p - a.s) / (b.s - a.s) : 0;
  return { x: (a.x + (b.x - a.x) * f) * dir, y: a.y + (b.y - a.y) * f };
}
// Gentle fade: stays readable past the tagline, gone by the headline.
function opacityAt(p: number): number {
  if (p >= 1) return 0;
  return Math.max(0, 1 - Math.pow(p, 1.5));
}

// Surface geometry (design pixels). No device frame — just the floating
// bubbles, input bar and keyboard. The short bubble area sits the keyboard
// closer to the tagline; bubbles float out beyond it (overflow visible).
const DESIGN_W = 402;
const SURFACE_H = 500;

const SIDE_PAD = 12; // sent/received sit 12px in from the edge
const BASE_BOTTOM = 4; // a new bubble starts just above the input bar
const FLOAT_MS = 11000; // time for a bubble to travel from the field to the headline

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
  /** The centered tagline the floating bubbles must route around. */
  taglineRef?: React.RefObject<HTMLElement | null>;
  /** The headline — bubbles fully fade in line with it. */
  titleRef?: React.RefObject<HTMLElement | null>;
  /** The landed row of parked bubbles — floating messages must clear it too. */
  landedRowRef?: React.RefObject<HTMLElement | null>;
  /**
   * The first three messages don't float away — they rise up and park in a
   * permanent row below the tagline. This hands each one off (by stable id) to
   * the parent, which renders the landed row.
   */
  onLandMessage?: (id: number, text: string) => void;
}

export default function HeroKeyboardAnimation({
  active = true,
  focused = false,
  inputRef,
  taglineRef,
  titleRef,
  landedRowRef,
  onLandMessage,
}: HeroKeyboardAnimationProps) {
  const reduceMotion = useReducedMotion();

  // ── visual state driven by the timeline ──
  const [text, setText] = useState("");
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [rewordLoading, setRewordLoading] = useState(false);
  const [pressed, setPressed] = useState<"reword" | "send" | null>(null);

  const bubbleId = useRef(1);
  const bubbleAreaRef = useRef<HTMLDivElement>(null);
  const [geo, setGeo] = useState<FloatGeo>(DEFAULT_GEO);

  // Mirror of `bubbles` and the bubble DOM nodes for the rAF driver, plus the
  // arc-length curve to walk. Kept in refs so the loop always sees latest state.
  const bubblesRef = useRef<Bubble[]>([]);
  bubblesRef.current = bubbles;
  const elMap = useRef<Map<number, HTMLDivElement>>(new Map());
  // Keep the land callback in a ref so the timeline effect (rebuilt only on
  // reduced-motion / active changes) always calls the latest one.
  const onLandRef = useRef(onLandMessage);
  onLandRef.current = onLandMessage;
  const lutRef = useRef<LutPoint[]>(buildLut(DEFAULT_GEO));
  useEffect(() => {
    lutRef.current = buildLut(geo);
  }, [geo]);

  // Drive every floating bubble along its curve at a constant rate (rAF), then
  // remove it when it reaches the headline. Direct DOM writes avoid re-rendering
  // 60x/second.
  useEffect(() => {
    if (reduceMotion) return;
    let raf = 0;
    const tick = () => {
      const now = performance.now();
      let done: number[] | null = null;
      for (const b of bubblesRef.current) {
        if (!b.floating || b.startAt == null) continue;
        const progress = (now - b.startAt) / FLOAT_MS;
        const el = elMap.current.get(b.id);
        if (el) {
          const { x, y } = posAt(lutRef.current, progress, b.side === "sent" ? 1 : -1);
          el.style.transform = `translate(${x}px, ${y}px)`;
          el.style.opacity = String(opacityAt(progress));
        }
        if (progress >= 1) (done ??= []).push(b.id);
      }
      if (done) setBubbles((prev) => prev.filter((b) => !done!.includes(b.id)));
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

  // Measure the route the bubbles take: rise far enough to fade in line with
  // the headline, and swing out far enough to clear the centered tagline.
  useEffect(() => {
    const measure = () => {
      const area = bubbleAreaRef.current?.getBoundingClientRect();
      const tag = taglineRef?.current?.getBoundingClientRect();
      const head = titleRef?.current?.getBoundingClientRect();
      if (!area || !tag || !head || !scale) return;
      const baseY = area.bottom; // bubbles start near here
      const yTagBottom = (baseY - tag.bottom) / scale;
      const yTagTop = (baseY - tag.top) / scale;
      const yHead = (baseY - (head.top + head.height * 0.55)) / scale;

      // The parked "landed" row sits between the keyboard and the tagline, so a
      // floating message reaches it BEFORE the tagline and must already be swung
      // clear by then. Measure the actual parked bubbles (the row container is
      // full-width; its children are not) to find the band to clear.
      let yLandBottom = yTagBottom * 0.5; // sensible default before any land
      let landLeft = tag.left;
      const landEl = landedRowRef?.current;
      if (landEl) {
        const kids = Array.from(landEl.children).map((c) => c.getBoundingClientRect());
        if (kids.length) {
          const bottom = Math.max(...kids.map((k) => k.bottom));
          landLeft = Math.min(...kids.map((k) => k.left));
          yLandBottom = (baseY - bottom) / scale;
        }
      }

      // Move out far enough that the widest bubble clears the tagline AND the
      // parked row's left edge, plus a margin.
      const clearScreen = Math.max(
        area.width * 0.5,
        area.left + area.width * 0.92 - Math.min(tag.left, landLeft) + 112,
      );
      setGeo({
        // Finish the sideways dash low — below (parked-row bottom minus a tall
        // bubble's height) — so even a multi-line message is out in the side
        // channel before it rises into the row's band.
        yb: Math.max(24, Math.min(yTagBottom * 0.42, yLandBottom - 118)),
        yhead: Math.max(yTagTop + 80, yHead),
        clearX: clearScreen / scale,
      });
    };
    measure();
    const raf = requestAnimationFrame(measure);
    // Re-measure after the hero's entrance animation has settled and whenever
    // the parked row grows (a new message lands and re-centers it).
    const timers = [400, 1000, 1800].map((ms) => setTimeout(measure, ms));
    window.addEventListener("resize", measure);
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro && landedRowRef?.current) ro.observe(landedRowRef.current);
    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", measure);
      ro?.disconnect();
    };
  }, [scale, taglineRef, titleRef, landedRowRef]);

  // Build the continuously looping timeline. Rebuilt only when reduced-motion
  // changes.
  useEffect(() => {
    // Reduced motion: skip the animation, park the first three in the landed
    // row and show the last few messages statically.
    if (reduceMotion) {
      setText("");
      SCRIPT.slice(0, 3).forEach((s, idx) => {
        if (s.kind === "sent") onLandRef.current?.(idx + 1, s.native);
      });
      let id = 1;
      const last = SCRIPT.slice(-4).map((s) => ({
        id: id++,
        side: (s.kind === "sent" ? "sent" : "recv") as "sent" | "recv",
        text: s.kind === "sent" ? s.reworded ?? s.native : s.text,
        shown: (s.kind === "sent" ? s.reworded ?? s.native : s.text).length,
        floating: false,
      }));
      setBubbles(last);
      return;
    }

    // Wait for the intro to hand off (the logo "clicks" the field) before the
    // first message starts typing.
    if (!active) return;

    // A sent bubble appears and immediately starts floating up and away. The
    // rAF driver walks it along the curve and removes it at the headline.
    const spawnSent = (msg: string) => {
      const id = bubbleId.current++;
      setBubbles((prev) => [
        ...prev,
        { id, side: "sent", text: msg, shown: msg.length, floating: true, startAt: performance.now() },
      ]);
    };

    // A received bubble appears in place and types itself out; it only starts
    // drifting once typing finishes (startRecvFloat).
    const spawnRecv = () => {
      const id = bubbleId.current++;
      setBubbles((prev) => [...prev, { id, side: "recv", text: "", shown: 0, floating: false }]);
      return id;
    };
    const setRecvText = (full: string, n: number) =>
      setBubbles((prev) => {
        const a = prev.slice();
        for (let i = a.length - 1; i >= 0; i--) {
          if (a[i].side === "recv" && !a[i].floating) {
            a[i] = { ...a[i], text: full, shown: n };
            break;
          }
        }
        return a;
      });
    const startRecvFloat = () =>
      setBubbles((prev) => {
        const a = prev.slice();
        for (let i = a.length - 1; i >= 0; i--) {
          if (a[i].side === "recv" && !a[i].floating) {
            a[i] = { ...a[i], floating: true, startAt: performance.now() };
            break;
          }
        }
        return a;
      });

    const beats: { fn: () => void; ms: number }[] = [];
    const b = (fn: () => void, ms: number) => beats.push({ fn, ms });

    b(() => {}, 600); // loop-seam lull

    // The beat index the loop restarts at: the first three messages type once
    // and land permanently in the row below the tagline, so the loop resumes at
    // message four and never re-types the first three.
    let loopStart = 0;

    SCRIPT.forEach((step, idx) => {
      // First three messages land in the row instead of floating away; the loop
      // begins just after them.
      if (idx === 3) loopStart = beats.length;
      const landing = idx < 3;
      if (step.kind === "sent") {
        const { native, reworded } = step;
        b(() => setText(""), 40);
        // 1) type the message in the input over ~1s
        const per = perChar(native.length);
        for (let i = 1; i <= native.length; i++) {
          const s = native.slice(0, i);
          b(() => setText(s), per);
        }
        if (landing) {
          // First three: type in English, tap send, then hand the bubble off to
          // the parent, which rises it up and parks it in the landed row.
          b(() => {}, 450);
          b(() => setPressed("send"), 340);
          b(() => {
            setPressed(null);
            onLandRef.current?.(idx + 1, native);
            setText("");
          }, 1000);
        } else if (reworded) {
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
        // then types itself out over ~1s, then starts drifting like a sent one.
        const full = step.text;
        const per = perChar(full.length);
        b(() => spawnRecv(), per);
        for (let i = 1; i <= full.length; i++) {
          b(() => setRecvText(full, i), per);
        }
        b(() => startRecvFloat(), 320); // begin the float, then settle
      }
    });

    b(() => {}, 1200); // loop lull

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const run = () => {
      const beat = beats[i];
      beat.fn();
      i += 1;
      // Loop back to message four, leaving the first three parked in the row.
      if (i >= beats.length) i = loopStart;
      timer = setTimeout(run, beat.ms);
    };
    run();
    return () => clearTimeout(timer);
  }, [reduceMotion, active]);

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
        <div className="relative flex h-full w-full flex-col">
          {/* Bubble stage: each message floats up, curves out around the hero
              copy, and fades in line with the headline. Overflow visible so they
              float clear of the keyboard. */}
          <div ref={bubbleAreaRef} className="relative flex-1" style={{ overflow: "visible" }}>
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
                  const floating = isSent || bub.floating;
                  // Position + fade are written imperatively by the rAF driver,
                  // so keep transform/opacity OUT of the JSX style.
                  const style: React.CSSProperties = {
                    bottom: BASE_BOTTOM,
                    maxWidth: DESIGN_W * 0.62,
                  };
                  if (isSent) style.right = SIDE_PAD;
                  else style.left = SIDE_PAD;
                  const showCaret = !isSent && bub.shown < bub.text.length;
                  return (
                    <div
                      key={bub.id}
                      ref={(el) => {
                        if (el) elMap.current.set(bub.id, el);
                        else elMap.current.delete(bub.id);
                      }}
                      className={`absolute ${floating ? "hero-float" : ""}`}
                      style={style}
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
                    </div>
                  );
                })}
          </div>

          {/* Input bar. The field wraps long text and grows in height (bottom
              aligned) and the send button is always visible. */}
          <div className="flex items-end gap-2 px-3 pb-2 pt-1">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e6e8ec]">
              <Plus className="h-5 w-5 text-[#6b7280]" strokeWidth={2.6} />
            </div>
            <div
              ref={inputRef}
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
                  iMessage
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
