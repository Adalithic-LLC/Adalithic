import { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronRight, MoreHorizontal, X } from "lucide-react";
import {
  Bubble,
  DESIGN_H,
  DESIGN_W,
  InputBar,
  ScaledSurface,
  SURFACE_MAX_H,
} from "@/components/keyboard-surface";
import { K, PANEL_H } from "@/components/panel-surface";

/**
 * A still frame of the keyboard's Study Guide: the top page the toolbar's leaf
 * button opens, sorted by "Frequently missed" and filtered to Spanish.
 *
 * Rebuilt from Keyboard/Features/StudyGuide/Views/ as the keyboard ships it —
 * no Personalized/Explore tabs (StudyGuideRelease.showsExplore is off), no
 * insight cards:
 *   - StudyGuideView.header: "Study", the ⋯ menu and × in 38pt corner buttons
 *     at 16pt radius.
 *   - StudyGuideFilterBar: one row of 46pt controls — the total in a white
 *     12pt card, then the sort, type and language chips. A chip off its
 *     default is light blue with an accent outline. The row is wider than the
 *     phone, so it is drawn scrolled to its end, the way a user would leave it
 *     after picking a language.
 *   - StudyItemRow: the entry, its translations, the Reword it was missed in;
 *     on the right the chevron, the part of speech and the ×count.
 *
 * The Spanish entries and the messages they came from are the same on every
 * locale — they are the language being studied. Their translations follow the
 * page language (`features.items.study.demo.translations`), and the chrome uses
 * the app's own strings (`appUi.study*`, from Localizable.xcstrings).
 */

const C = {
  ...K,
  chipBg: "#FFFFFF", // secondarySystemGroupedBackground
  chipSelected: "#D9EBFF", // StudyGuideFilterBar.selectedFill (light)
  warningBg: "#FFD980", // TranslationWarningBgColor
  warningStroke: "#FFB200", // TranslationWarningStrokeColor
};

const TOTAL = 48;

type Pos = "verb" | "phrase" | "adverb" | "noun";

/** Sorted by misses, as the "Frequently missed" sort orders them. `more` is
 *  the "+N" StudyItemRow appends past the first three translations. */
const ROWS: { entry: string; pos: Pos; misses: number; sentence: string; more?: number }[] = [
  { entry: "quedamos", pos: "verb", misses: 7, sentence: "¿Quedamos este fin de semana?" },
  { entry: "me viene bien", pos: "phrase", misses: 5, sentence: "El sábado me viene bien." },
  { entry: "todavía", pos: "adverb", misses: 4, sentence: "Todavía no he terminado el trabajo." },
  { entry: "ganas", pos: "noun", misses: 4, sentence: "¡Tengo muchas ganas de verte!", more: 1 },
  { entry: "aprovechar", pos: "verb", misses: 3, sentence: "Hay que aprovechar el buen tiempo." },
  { entry: "enseguida", pos: "adverb", misses: 2, sentence: "Enseguida te escribo." },
];

const THREAD = {
  sent: "¿Quedamos este fin de semana?",
  recv: "¡Sí! El sábado me viene bien.",
};

/** The 38pt corner buttons on MenuXButtonColor. */
function CornerButton({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="grid shrink-0 place-items-center rounded-[16px]"
      style={{ width: 38, height: 38, background: C.xButton }}
    >
      {children}
    </div>
  );
}

/** StudyGuideFilterBar.chip: Medium 14, chevron, capsule. */
function Chip({ label, selected }: { label: string; selected: boolean }) {
  return (
    <span
      className="flex h-[46px] shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-3 text-[14px] font-medium"
      style={{
        background: selected ? C.chipSelected : C.chipBg,
        color: selected ? C.accent : C.xMark,
        boxShadow: selected ? `inset 0 0 0 2px ${C.accent}` : undefined,
      }}
    >
      {label}
      <ChevronDown className="h-3 w-3" strokeWidth={2.8} />
    </span>
  );
}

export default function StudyGuideDemo() {
  const { t, i18n } = useTranslation();
  const base = "features.items.study";
  const translations = t(`${base}.demo.translations`, {
    returnObjects: true,
  }) as string[];
  const count = new Intl.NumberFormat(i18n.language).format(TOTAL);

  // Scroll the filter row to its trailing edge so the selected language is in
  // view, as it is once the user has picked it.
  const rowRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);
  useLayoutEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    // Negative moves the row's content left. In a right-to-left page the row
    // runs the other way, so its trailing end is reached by moving right.
    const measure = () => {
      const rtl = getComputedStyle(row).direction === "rtl";
      // offsetWidth is the chips' layout width, which the transform below
      // does not change (scrollWidth would, and re-measuring would drift).
      const content = row.firstElementChild as HTMLElement | null;
      const over = (content?.offsetWidth ?? 0) - row.clientWidth;
      setScroll(Math.max(0, over) * (rtl ? -1 : 1));
    };
    measure();
    // A web font can land after first layout and widen the chips.
    document.fonts?.ready.then(measure);
  }, [i18n.language]);

  return (
    <ScaledSurface label={t(`${base}.alt`)} maxHeight={SURFACE_MAX_H} maxScale={1}>
      <div className="flex flex-col" style={{ width: DESIGN_W, height: DESIGN_H }}>
        {/* The host messaging app behind the keyboard. */}
        <div className="flex min-h-0 flex-1 flex-col justify-end gap-1.5 overflow-hidden px-3">
          <Bubble side="sent">{THREAD.sent}</Bubble>
          <Bubble side="recv">{THREAD.recv}</Bubble>
        </div>

        <InputBar placeholder={t("appUi.typePlaceholder")} focused caret={false} />

        {/* The Study page — replaces the toolbar and keys, at their height. */}
        <div
          className="flex flex-col overflow-hidden"
          style={{
            height: PANEL_H,
            background: C.bg,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            boxShadow: "0 18px 44px -16px rgba(20,10,40,0.4)",
          }}
        >
          {/* Header: ⋯ (12pt in from the 4pt bar padding), title, ×. */}
          <div className="relative flex h-11 shrink-0 items-center px-1">
            <div className="pl-3">
              <CornerButton>
                <MoreHorizontal size={18} color={C.xMark} strokeWidth={2.6} />
              </CornerButton>
            </div>
            <span
              className="absolute left-1/2 -translate-x-1/2 text-[16px] font-semibold"
              style={{ color: C.xMark }}
            >
              {t("appUi.studyTitle")}
            </span>
            <span className="flex-1" />
            <CornerButton>
              <X size={16} color={C.xMark} strokeWidth={2.6} />
            </CornerButton>
          </div>

          {/* Filter bar: 8pt above and below, 16pt page inset inside the scroll. */}
          <div ref={rowRef} className="flex shrink-0 overflow-hidden py-2">
            <div
              className="flex w-max shrink-0 gap-2 px-4"
              style={{ transform: `translateX(${-scroll}px)` }}
            >
              <span
                className="flex h-[46px] shrink-0 items-center whitespace-nowrap rounded-[12px] px-3 text-[14px] font-medium tabular-nums"
                style={{ background: C.chipBg, color: C.xMark }}
              >
                {t("appUi.studyTotal", { n: count })}
              </span>
              <Chip label={t("appUi.studySortFrequent")} selected />
              <Chip label={t("appUi.studyAllTypes")} selected={false} />
              <Chip label={t("appUi.studyLanguage")} selected />
            </div>
          </div>

          {/* The list, cut off by the bottom of the page. */}
          <div className="min-h-0 flex-1 overflow-hidden">
            {ROWS.map((r, i) => (
              <div
                key={r.entry}
                className="mx-4 mb-2.5 flex items-start gap-3 rounded-[12px] px-3.5 py-3"
                style={{ background: C.cardBg, boxShadow: `inset 0 0 0 1px ${C.cardStroke}` }}
              >
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span dir="auto" className="truncate text-[16px] font-semibold" style={{ color: C.xMark }}>
                    {r.entry}
                  </span>
                  {Array.isArray(translations) && translations[i] && (
                    <span dir="auto" className="line-clamp-2 text-[14px] font-medium" style={{ color: C.xMark }}>
                      {translations[i]}
                      {r.more ? <span style={{ color: C.detail }}>{`  +${r.more}`}</span> : null}
                    </span>
                  )}
                  <span dir="auto" className="line-clamp-2 text-[14px]" style={{ color: C.detail }}>
                    {r.sentence}
                  </span>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <ChevronRight className="h-[15px] w-[15px]" style={{ color: C.detail }} strokeWidth={2} />
                  <span
                    className="whitespace-nowrap rounded-[8px] px-2 py-[3px] text-[14px] font-medium leading-tight"
                    style={{ background: C.bg, color: C.xMark, boxShadow: `inset 0 0 0 1px ${C.cardStroke}` }}
                  >
                    {t(`appUi.studyPos.${r.pos}`)}
                  </span>
                  <span
                    className="rounded-full px-2.5 py-[3px] text-[13px] font-semibold leading-tight tabular-nums"
                    style={{ background: C.warningBg, color: C.xMark, boxShadow: `inset 0 0 0 1.5px ${C.warningStroke}` }}
                  >
                    {`×${r.misses}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScaledSurface>
  );
}
