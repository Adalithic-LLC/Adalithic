import { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { DESIGN_W, InputBar, KeyboardPanel } from "@/components/keyboard-surface";

// The still frame that illustrates Reword in the features section: the same
// keyboard surface the hero animates, frozen on the moment a drafted message is
// sitting in the field with Reword waiting in the toolbar. Deliberately static —
// no float, no caret, no timeline — so it reads as a product shot alongside the
// screenshots in the neighbouring rows.

/** The drafted message shown in the field. Kept in English (it is the "before"
 *  side of Reword) rather than translated per locale. */
const DRAFT = "Are you free to meet up this weekend?";

/** Caps the keyboard at roughly the height of the screenshots in the other
 *  rows, so the feature list keeps an even rhythm. */
const MAX_SCALE = 1.3;

export default function RewordKeyboard() {
  const { t } = useTranslation();
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Fit the keyboard to the column it lands in — roomy at lg (two columns of a
  // 7xl grid), narrower on a phone — rather than to the window, which says
  // nothing about the space actually available here.
  const [scale, setScale] = useState(1);
  // `transform: scale()` leaves the layout box unscaled, so measure the natural
  // height too and give the wrapper the scaled size; otherwise the row reserves
  // full-size space for a scaled keyboard.
  const [naturalH, setNaturalH] = useState(0);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    const measure = () => {
      const avail = wrap.getBoundingClientRect().width;
      if (avail > 0) setScale(Math.min(MAX_SCALE, avail / DESIGN_W));
      setNaturalH(inner.getBoundingClientRect().height);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    ro.observe(inner);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="flex w-full justify-center">
      <div
        style={{ width: DESIGN_W * scale, height: naturalH * scale }}
        role="img"
        aria-label={t("features.items.reword.alt")}
      >
        <div
          ref={innerRef}
          className="text-left"
          style={{
            width: DESIGN_W,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <InputBar text={DRAFT} focused caret={false} />
          <KeyboardPanel />
        </div>
      </div>
    </div>
  );
}
