import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { introBus } from "@/lib/intro-bus";

// Brand blue (#0040DD) — matches the Arcatext app icon.
const BRAND = "#0040DD";

// Proportions taken from the SwiftUI splash (3x design): total height 150 =
// column 120 + 2 * beam-height 15; column width 21; beam width 36; total
// width 21 + 2*36 = 93. Everything below is expressed as a ratio of the total
// height, so the glyph can be driven by ANY CSS length — px, or an em value
// that scales the glyph with whatever text it sits beside.
const R = {
  columnW: 21 / 150,
  columnH: 120 / 150,
  beamW: 36 / 150,
  beamH: 15 / 150,
  totalW: 93 / 150,
  // Gap between the glyph and the label once the slot has opened (8px at the
  // nav's 20px glyph, and proportional everywhere else).
  gap: 8 / 20,
};

// The glyph is centred this far above the text baseline so it lines up with
// the visual middle of the label (roughly the text's x-height centre). In em,
// so it tracks whatever font size the label is set in.
const VERTICAL_OFFSET = "0.34em";

// Build choreography, in ms after the "building" cue. Shared by every instance,
// so any two glyphs on a page assemble in lockstep.
const T_COLUMN = 350;
const T_BEAM_WIDTH = 750;
const T_BEAM_SHIFT = 950;

interface ArcatextIBeamProps {
  /**
   * Total height of the I-beam as a CSS length — "20px" in the nav, or an em
   * value to scale with the surrounding text.
   */
  size?: string;
}

/**
 * The Arcatext I-beam rendered as five rectangles (one column + four corner
 * beams) — the same construction as the app's splash screen — which assembles
 * itself on the homepage intro's cue.
 *
 * The reserving element is a **zero-height** inline spacer whose width grows
 * from 0 → the glyph's width when cued. Because it has no height it never
 * affects the line box, so the label beside it keeps the exact same baseline
 * (and y-position) it would have on its own. The glyph itself is positioned
 * **absolutely** (out of flow) inside that spacer, so its height also can't
 * nudge the text.
 *
 * Every instance listens to the same `introBus` phase and runs the same
 * timings, so multiple glyphs on a page build as one motion rather than as
 * animations that happen to look alike. On any page without an intro (or
 * under reduced-motion) it renders fully-formed with no animation.
 */
export default function ArcatextIBeam({ size = "20px" }: ArcatextIBeamProps) {
  const reduceMotion = useReducedMotion();

  // A CSS length equal to `ratio` of the glyph's total height.
  const at = (ratio: number) => `calc(${size} * ${ratio})`;

  // Each stage of the build is "this rect is at 0" vs "this rect is at full",
  // held as a ratio so it composes into the calc() lengths above.
  const [slotOpen, setSlotOpen] = useState(false);
  const [columnH, setColumnH] = useState(0);
  const [beamW, setBeamW] = useState(0);
  const [beamShift, setBeamShift] = useState(0);
  const [instant, setInstant] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const clearTimers = () => {
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
    };

    const build = (now: boolean) => {
      clearTimers();
      if (now || reduceMotion) {
        setInstant(true);
        setSlotOpen(true);
        setColumnH(R.columnH);
        setBeamW(R.beamW);
        setBeamShift(R.beamH);
        return;
      }
      // 1) Open the slot — the label shifts over to make room for the glyph.
      setSlotOpen(true);
      // 2) Once there's room, construct the I-beam into it.
      timers.current.push(window.setTimeout(() => setColumnH(R.columnH), T_COLUMN));
      timers.current.push(window.setTimeout(() => setBeamW(R.beamW), T_BEAM_WIDTH));
      timers.current.push(window.setTimeout(() => setBeamShift(R.beamH), T_BEAM_SHIFT));
    };

    const unsub = introBus.subscribe((phase) => {
      if (phase === "building") build(false);
    });

    if (introBus.phase === "building") {
      build(true);
    } else if (introBus.phase === "idle") {
      // No Hero has armed an intro yet. If none does shortly, this page has no
      // intro (e.g. a legal page) — show the glyph fully-formed.
      const idle = window.setTimeout(() => {
        if (introBus.phase === "idle") build(true);
      }, 250);
      timers.current.push(idle);
    }
    // phase === "armed": wait for the "building" signal above.

    return () => {
      unsub();
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  // Inner edge of each beam stays flush to the column while it grows outward,
  // so the horizontal offset tracks the *current* beam width. The vertical
  // offset uses the column's FULL height, so the beams sit at the finished
  // glyph's corners rather than riding the column as it grows.
  const beamX = (R.columnW + beamW) / 2;
  const beamY = (R.columnH - R.beamH) / 2;

  const tSlot = instant ? "none" : "width 0.4s ease";
  const tColumn = instant ? "none" : "height 0.4s ease-in-out";
  const tBeam = instant ? "none" : "width 0.2s ease-in-out, transform 0.2s ease-in-out";

  // One corner beam. `sx`/`sy` are the signs that place it in its quadrant.
  const beam = (sx: number, sy: number) => (
    <span
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        backgroundColor: BRAND,
        width: at(beamW),
        height: at(R.beamH),
        transform: `translate(-50%, -50%) translate(${at(sx * beamX)}, ${at(
          sy * (beamY + beamShift),
        )})`,
        transition: tBeam,
      }}
    />
  );

  return (
    // Zero-height inline spacer: reserves the horizontal width (animated) but
    // contributes nothing vertically, so the label's baseline is untouched.
    <span
      aria-hidden
      style={{
        display: "inline-block",
        position: "relative",
        verticalAlign: "baseline",
        height: 0,
        width: slotOpen ? at(R.totalW + R.gap) : 0,
        transition: tSlot,
      }}
    >
      {/* Glyph stage: absolutely positioned (out of flow) and vertically
          centred on the label, so its height never nudges the text.
          `insetInlineStart` rather than `left`: the spacer is wider than the
          glyph by GAP, and the glyph has to sit at the edge AWAY from the
          label so that the gap lands between the two. On an RTL page the
          spacer flips to the label's left, so a physical `left: 0` would park
          the glyph right against the text and leave the gap on the outside. */}
      <span
        style={{
          position: "absolute",
          insetInlineStart: 0,
          top: 0,
          width: at(R.totalW),
          height: size,
          transform: `translateY(calc(-50% - ${VERTICAL_OFFSET}))`,
        }}
      >
        {/* Vertical column */}
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            backgroundColor: BRAND,
            width: at(R.columnW),
            height: at(columnH),
            transform: "translate(-50%, -50%)",
            transition: tColumn,
          }}
        />
        {beam(-1, -1)}
        {beam(1, -1)}
        {beam(-1, 1)}
        {beam(1, 1)}
      </span>
    </span>
  );
}
