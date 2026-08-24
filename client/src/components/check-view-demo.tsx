import { useTranslation } from "react-i18next";
import PanelSurface, { K } from "@/components/panel-surface";

/**
 * A still frame of the Arcatext check view scrolled down to the "Detected in
 * your message" card.
 *
 * Rebuilt from CheckView.swift: the section label with its Experimental tag,
 * the homograph word tabs and horizontally scrolling meaning cards, and the
 * gender section in its pre-tap empty state (CheckView.detectionButton, shown
 * while `genderRequested` is false).
 */

/** Meaning cards are a fixed 144pt wide and scroll horizontally. */
const CARD_W = 144;

type Meaning = { title: string; description: string };

export default function CheckViewDemo() {
  const { t } = useTranslation();
  const demo = `features.items.homographs.demo`;
  const meanings = t(`${demo}.meanings`, { returnObjects: true }) as Meaning[];

  return (
    <PanelSurface
      label={t("features.items.homographs.alt")}
      title={t("appUi.checkTitle")}
      sent={t(`${demo}.sent`)}
      recv={t(`${demo}.recv`)}
      field={t(`${demo}.reword`)}
    >
      {/* Scrolled down: the card above ("Current reword") is cut off at the top
          edge, putting the detection card in view. */}
      <div
        className="mx-3 h-5 rounded-b-[12px]"
        style={{ background: K.cardBg }}
      />

      <div className="mt-4 flex flex-col gap-2.5">
        <div className="flex items-center gap-2 px-3">
          <span
            className="text-[12px] uppercase"
            style={{ color: K.placeholder }}
          >
            {t("appUi.detectedInMessage")}
          </span>
          <div className="flex-1" />
          <span
            className="rounded-[8px] px-1.5 py-1 text-[14px] font-medium"
            style={{ background: K.experimental, color: "#000" }}
          >
            {t("appUi.experimental")}
          </span>
        </div>

        <div
          className="mx-3 flex flex-col gap-4 rounded-[12px] py-3"
          style={{ background: K.cardBg }}
        >
          {/* Homographs — populated. */}
          <div className="flex flex-col gap-3">
            {/* Word tabs: the detected word, underlined while selected. */}
            <div className="flex px-3">
              <div className="flex flex-col">
                <span
                  className="px-3 py-1.5 text-[16px] font-medium"
                  style={{ color: K.accent }}
                >
                  {t(`${demo}.word`)}
                </span>
                <div style={{ height: 2, background: K.accent }} />
              </div>
            </div>

            {/* Meaning cards. The first is the selected one. */}
            <div className="flex items-start gap-2 px-3 py-0.5">
              {Array.isArray(meanings) &&
                meanings.map((m, i) => {
                  const selected = i === 0;
                  return (
                    <div
                      key={i}
                      className="flex shrink-0 flex-col gap-1 rounded-[10px] p-3"
                      style={{
                        width: CARD_W,
                        background: selected ? K.selectedBg : K.cardBg,
                        border: `${selected ? 2 : 1}px solid ${
                          selected ? K.accent : K.cardStroke
                        }`,
                        color: selected ? K.accent : K.xMark,
                      }}
                    >
                      <span className="truncate text-[16px] font-semibold">
                        {m.title}
                      </span>
                      <span className="text-[16px] font-medium leading-normal">
                        {m.description}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Gendered words — empty state: subtext, then the trigger. */}
          <div className="flex flex-col gap-3 px-3">
            <span
              className="text-[16px] leading-relaxed"
              style={{ color: K.placeholder }}
            >
              {t("appUi.genderSubtext")}
            </span>
            <div
              className="grid place-items-center rounded-[12px] text-[16px] font-medium"
              style={{ height: 38, background: K.selectedBg, color: K.accent }}
            >
              {t("appUi.checkGenderedWords")}
            </div>
          </div>
        </div>
      </div>
    </PanelSurface>
  );
}
