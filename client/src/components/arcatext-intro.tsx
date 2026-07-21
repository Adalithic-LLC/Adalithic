import { useEffect, type RefObject } from "react";
import { useReducedMotion } from "framer-motion";

// The Arcatext app icon (blue I-beam text cursor). It ships as an opaque PNG
// with a white background, so we composite it with `mix-blend-mode: multiply`
// — over the light hero/nav surfaces the white drops out and only the blue
// glyph shows.
const APP_ICON = "/AppIcon.png";

// The glyph occupies ~60% of the square canvas vertically. To make the visible
// I-beam match a target line-height, the image box must be scaled up by 1/0.6.
const GLYPH_RATIO = 0.6;

interface ArcatextIntroProps {
  /** The hero <h1> ("Meet Arcatext.") the icon scans across. */
  titleRef: RefObject<HTMLElement>;
  /** The typewriter "text field" the icon shrinks down to and clicks. */
  fieldRef: RefObject<HTMLElement>;
  /** Fires when the icon lands in the field — cue the highlight. */
  onLand: () => void;
  /** Fires on click-release — the icon vanishes and typing should begin. */
  onRelease: () => void;
}

type IconStyle = {
  left: number;
  top: number;
  size: number;
  opacity: number;
  brightness: number;
  scale: number;
  transition: string;
};

/**
 * The page-load flourish: the app icon scans across the "Meet Arcatext"
 * headline at headline size, glides down while shrinking to the typewriter
 * line, "clicks" into it (darken + squish + release), then disappears so the
 * typing animation can take over.
 *
 * Rendered as a single fixed-position <img> driven imperatively so we control
 * each leg's easing/duration independently.
 */
export default function ArcatextIntro({
  titleRef,
  fieldRef,
  onLand,
  onRelease,
}: ArcatextIntroProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Respect reduced-motion: skip the flourish, start typing immediately.
    if (reduceMotion) {
      onRelease();
      return;
    }

    const iconEl = document.getElementById("arcatext-fly-icon") as HTMLImageElement | null;
    if (!iconEl) {
      onRelease();
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((res) => timers.push(window.setTimeout(res, ms)));
    // Two rAFs guarantee the browser paints the pre-transition state first.
    const nextFrame = () =>
      new Promise<void>((res) =>
        requestAnimationFrame(() => requestAnimationFrame(() => res()))
      );

    const apply = (s: IconStyle) => {
      iconEl.style.left = `${s.left}px`;
      iconEl.style.top = `${s.top}px`;
      iconEl.style.height = `${s.size}px`;
      iconEl.style.width = `${s.size}px`;
      iconEl.style.opacity = `${s.opacity}`;
      iconEl.style.filter = `brightness(${s.brightness})`;
      iconEl.style.transform = `translate(-50%, -50%) scale(${s.scale})`;
      iconEl.style.transition = s.transition;
    };

    const lineHeightOf = (el: HTMLElement) => {
      const cs = getComputedStyle(el);
      let lh = parseFloat(cs.lineHeight);
      if (!isFinite(lh)) lh = parseFloat(cs.fontSize) * 1.15;
      return lh;
    };

    const run = async () => {
      const title = titleRef.current;
      const field = fieldRef.current;
      if (!title || !field) {
        onRelease();
        return;
      }

      // Let the hero's entrance animation settle before measuring.
      await wait(500);
      if (cancelled) return;

      const titleLh = lineHeightOf(title);
      const titleSize = titleLh / GLYPH_RATIO;

      // Measure the actual rendered text ("Meet Arcatext.") rather than the
      // full-width centered <h1> box, so the scan starts on the "M" and ends
      // on the period.
      const textRectOf = (el: HTMLElement): DOMRect => {
        const range = document.createRange();
        range.selectNodeContents(el);
        const r = range.getBoundingClientRect();
        range.detach();
        return r;
      };

      const startPoint = () => {
        const tr = textRectOf(title);
        return {
          x: tr.left - 16, // 16px left of the "M"
          y: tr.top + tr.height / 2,
          right: tr.right + 16, // 16px right of the "." — where the curve begins
        };
      };

      // 1) Appear at the beginning of the headline, faded out.
      const s0 = startPoint();
      apply({
        left: s0.x,
        top: s0.y,
        size: titleSize,
        opacity: 0,
        brightness: 1,
        scale: 1,
        transition: "none",
      });
      await nextFrame();
      if (cancelled) return;

      // 2) Fade in.
      iconEl.style.transition = "opacity 0.25s ease";
      iconEl.style.opacity = "1";
      await wait(240);
      if (cancelled) return;

      // 3) One continuous move: scan across "Meet Arcatext" to its end, then —
      //    without stopping — sweep along a curve down into the typewriter
      //    field, shrinking as it goes.
      const s = startPoint();
      const fr = field.getBoundingClientRect();
      const bigSize = titleSize;
      const smallSize = lineHeightOf(field) / GLYPH_RATIO;
      const p0 = { x: s.x, y: s.y };
      const p1 = { x: s.right, y: s.y }; // end of the headline text
      const p2 = { x: fr.left + fr.width / 2, y: fr.top + fr.height / 2 }; // field centre

      // Cubic Bézier for the curved tail. c1 keeps the tangent horizontal at
      // the headline's end (so the scan flows into the curve with no corner);
      // c2 pulls it down toward the field.
      const scanLen = p1.x - p0.x;
      const c1 = { x: p1.x + Math.min(scanLen * 0.18, 90), y: p1.y };
      const c2 = { x: p2.x, y: p1.y + (p2.y - p1.y) * 0.55 };
      const bez = (v: number) => {
        const m = 1 - v;
        return {
          x: m * m * m * p1.x + 3 * m * m * v * c1.x + 3 * m * v * v * c2.x + v * v * v * p2.x,
          y: m * m * m * p1.y + 3 * m * m * v * c1.y + 3 * m * v * v * c2.y + v * v * v * p2.y,
        };
      };

      // Split overall progress between the straight scan and the curve by their
      // arc lengths, so the pace stays even across the join.
      let curveLen = 0;
      let prev = p1;
      for (let k = 1; k <= 24; k++) {
        const pt = bez(k / 24);
        curveLen += Math.hypot(pt.x - prev.x, pt.y - prev.y);
        prev = pt;
      }
      // Give the curve extra time relative to its length so the icon visibly
      // slows as it rounds the sharp bend, then settles into the field —
      // without ever coming to a stop.
      const CURVE_SLOWDOWN = 2.4;
      const denom = Math.abs(scanLen) + curveLen * CURVE_SLOWDOWN;
      const f1 = denom ? Math.abs(scanLen) / denom : 1;
      const easeInOutSine = (x: number) => -(Math.cos(Math.PI * x) - 1) / 2;
      const smoothstep = (x: number) => x * x * (3 - 2 * x);
      const DURATION = 2600;

      iconEl.style.transition = "none";
      await new Promise<void>((resolve) => {
        let startTs = -1;
        const step = (ts: number) => {
          if (cancelled) {
            resolve();
            return;
          }
          if (startTs < 0) startTs = ts;
          const t = Math.min(1, (ts - startTs) / DURATION);
          const p = easeInOutSine(t);
          let x: number;
          let y: number;
          let size: number;
          if (p <= f1) {
            const u = f1 === 0 ? 1 : p / f1;
            // Ease the scan out as it nears the end so it decelerates smoothly
            // into the bend rather than braking hard at the corner.
            const ue = 1 - Math.pow(1 - u, 1.6);
            x = p0.x + (p1.x - p0.x) * ue;
            y = p0.y;
            size = bigSize;
          } else {
            const v = (p - f1) / (1 - f1);
            const pt = bez(v);
            x = pt.x;
            y = pt.y;
            size = bigSize + (smallSize - bigSize) * smoothstep(v);
          }
          iconEl.style.left = `${x}px`;
          iconEl.style.top = `${y}px`;
          iconEl.style.height = `${size}px`;
          iconEl.style.width = `${size}px`;
          if (t >= 1) {
            resolve();
            return;
          }
          requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
      if (cancelled) return;

      // 5) Landed — trigger the field highlight.
      onLand();
      await wait(200);
      if (cancelled) return;

      // 6) Click down: squish. (No brightness/darken — the icon is an opaque
      //    white-background PNG composited with multiply, so darkening it would
      //    turn the white box grey and paint a visible dark square.)
      iconEl.style.transition = "transform 0.12s ease-in";
      iconEl.style.transform = "translate(-50%, -50%) scale(0.78)";
      await wait(150);
      if (cancelled) return;

      // 7) Release: back to normal scale.
      iconEl.style.transition = "transform 0.16s ease-out";
      iconEl.style.transform = "translate(-50%, -50%) scale(1)";
      await wait(180);
      if (cancelled) return;

      // 8) Vanish, and let the typing begin.
      iconEl.style.transition = "opacity 0.22s ease, transform 0.22s ease";
      iconEl.style.opacity = "0";
      iconEl.style.transform = "translate(-50%, -50%) scale(0.9)";
      onRelease();
    };

    run();

    return () => {
      cancelled = true;
      timers.forEach((t) => clearTimeout(t));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <img
      id="arcatext-fly-icon"
      src={APP_ICON}
      alt=""
      aria-hidden
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: 0,
        width: 0,
        opacity: 0,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "multiply",
        pointerEvents: "none",
        zIndex: 60,
        willChange: "left, top, height, width, transform, opacity, filter",
      }}
    />
  );
}
