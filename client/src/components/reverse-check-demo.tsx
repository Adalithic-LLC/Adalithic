import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import PanelSurface, { K, SectionLabel } from "@/components/panel-surface";

/**
 * A still frame of the Arcatext check view scrolled to the top, where the
 * reword intent check shows the sent message translated back into the user's
 * own language.
 *
 * Rebuilt from CheckView.swift: the REWORD INTENT CHECK card (reverse
 * translation, then the check-language selector), its subtext, and the CURRENT
 * REWORD / ORIGINAL MESSAGE radio rows below — `CheckCardSelectionButtonStyle`
 * gives the selected row a 2pt accent stroke, the other a 1pt card stroke.
 */

/** Radio dot: 20pt ring, filled 12pt core when that option is selected. */
function Radio({ selected }: { selected: boolean }) {
  return (
    <div
      className="grid shrink-0 place-items-center pt-px"
      style={{ width: 20, height: 20 }}
    >
      <div
        className="grid place-items-center rounded-full"
        style={{
          width: 20,
          height: 20,
          border: `${selected ? 2 : 1.5}px solid ${selected ? K.accent : K.placeholder}`,
        }}
      >
        {selected && (
          <div
            className="rounded-full"
            style={{ width: 12, height: 12, background: K.accent }}
          />
        )}
      </div>
    </div>
  );
}

/** One selectable message row: the text, with its radio on the right. */
function OptionRow({ text, selected }: { text: string; selected: boolean }) {
  return (
    <div
      className="mx-3 flex items-start gap-2 rounded-[12px] p-3"
      style={{
        background: K.cardBg,
        border: `${selected ? 2 : 1}px solid ${selected ? K.accent : K.cardStroke}`,
      }}
    >
      <p
        className="min-w-0 flex-1 text-[16px] leading-relaxed"
        style={{ color: K.xMark }}
      >
        {text}
      </p>
      <Radio selected={selected} />
    </div>
  );
}

export default function ReverseCheckDemo() {
  const { t } = useTranslation();
  const demo = `features.items.reverse.demo`;

  return (
    <PanelSurface
      label={t("features.items.reverse.alt")}
      title={t("appUi.checkTitle")}
      sent={t(`${demo}.sent`)}
      recv={t(`${demo}.recv`)}
      field={t(`${demo}.reword`)}
    >
      <div className="flex flex-col pt-3">
        {/* Reword intent check — the reverse translation. */}
        <div className="flex flex-col gap-2.5">
          <SectionLabel>{t("appUi.rewordIntentCheck")}</SectionLabel>

          <div
            className="mx-3 flex flex-col rounded-[12px]"
            style={{
              background: K.cardBg,
              border: `1px solid ${K.cardStroke}`,
            }}
          >
            <p
              className="px-3 pb-1 pt-4 text-[16px] leading-relaxed"
              style={{ color: K.xMark }}
            >
              {t(`${demo}.reverse`)}
            </p>
            {/* Check-language selector. Sits 8pt out from the card's own
                padding in the app, so it lines up with the text above. */}
            <div className="px-3 py-2">
              <span
                className="-ml-2 inline-flex items-center gap-1 rounded-[12px] p-2 text-[16px] font-medium"
                style={{ color: K.accent }}
              >
                {t("appUi.language")}
                <ChevronRight size={12} strokeWidth={2.5} />
              </span>
            </div>
          </div>

          <span
            className="px-3 pb-3 text-[14px]"
            style={{ color: K.placeholder }}
          >
            {t("appUi.rewordIntentSubtext")}
          </span>
        </div>

        {/* The message the reverse translation was taken from, and the source
            it was reworded from. */}
        <div
          className="mx-3 flex flex-col gap-4 rounded-[12px] py-3"
          style={{ background: K.cardBg }}
        >
          <div className="flex flex-col gap-2.5">
            <SectionLabel>{t("appUi.currentReword")}</SectionLabel>
            <OptionRow text={t(`${demo}.reword`)} selected />
          </div>
          <div className="flex flex-col gap-2.5">
            <SectionLabel>{t("appUi.originalMessage")}</SectionLabel>
            <OptionRow text={t(`${demo}.original`)} selected={false} />
          </div>
        </div>
      </div>
    </PanelSurface>
  );
}
