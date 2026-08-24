import { useTranslation } from "react-i18next";
import PanelSurface, {
  OptionRow,
  SectionLabel,
  K,
} from "@/components/panel-surface";

/**
 * A still frame of the Arcatext check view scrolled to the SYNONYMS card.
 *
 * Rebuilt from CheckView.swift: the section sits in its own white card, with
 * one selectable row per synonym built from the same
 * `CheckCardSelectionButtonStyle` as the reword / original rows — a 2pt accent
 * stroke and filled radio on the chosen one, a 1pt card stroke on the rest.
 *
 * The alternatives are in the language being written, not the user's own: the
 * row's copy is about picking the language up as you chat, and the app
 * generates synonyms for the reworded text.
 */

export default function SynonymsDemo() {
  const { t } = useTranslation();
  const demo = `features.items.synonyms.demo`;
  const options = t(`${demo}.options`, { returnObjects: true }) as string[];

  return (
    <PanelSurface
      label={t("features.items.synonyms.alt")}
      title={t("appUi.checkTitle")}
      sent={t(`${demo}.sent`)}
      recv={t(`${demo}.recv`)}
      field={Array.isArray(options) ? options[0] : ""}
    >
      {/* Scrolled down: the card above is cut off at the top edge. */}
      <div
        className="mx-3 h-5 rounded-b-[12px]"
        style={{ background: K.cardBg }}
      />

      <div
        className="mx-3 mt-4 flex flex-col gap-2.5 rounded-[12px] py-3"
        style={{ background: K.cardBg }}
      >
        <SectionLabel>{t("appUi.synonyms")}</SectionLabel>
        <div className="flex flex-col gap-3">
          {Array.isArray(options) &&
            options.map((o, i) => (
              <OptionRow key={i} text={o} selected={i === 0} />
            ))}
        </div>
      </div>
    </PanelSurface>
  );
}
