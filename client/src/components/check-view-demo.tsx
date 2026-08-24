import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import {
  Bubble,
  DESIGN_H,
  DESIGN_W,
  InputBar,
  ScaledSurface,
  SURFACE_MAX_H,
} from "@/components/keyboard-surface";

/**
 * A still frame of the Arcatext check view, open over a conversation and
 * scrolled to the "Detected in your message" card.
 *
 * Rebuilt from the app source (Keyboard/Features/Check/Views/CheckView.swift) —
 * the Check header, the section label with its Experimental tag, the homograph
 * word tabs and horizontally scrolling meaning cards, and the gender section in
 * its pre-tap empty state (CheckView.detectionButton, shown while
 * `genderRequested` is false).
 *
 * Drawn as DOM, not exported as an image, so every string localizes with the
 * rest of the page.
 */

// ── Colors, from Arcatext/Assets.xcassets (light appearance) ─────────────────
const K = {
  bg: "#F2F2F7", // PasteBgColor — CheckView's own background
  cardBg: "#FFFFFF", // CheckCardBgColor
  selectedBg: "#D9EBFF", // CheckSelectedBgColor
  placeholder: "#8E8E93", // CheckPlaceholderColor
  accent: "#0040DD", // ToolbarIconColor / CheckButtonTextColor / CheckPrimaryColor
  cardStroke: "#E6E6EB", // MenuCardStrokeColor
  xButton: "#E6E6EB", // MenuXButtonColor
  xMark: "#000000", // ToolbarXMarkColor
  experimental: "#FFB200", // Color(red: 1.0, green: 0.698, blue: 0.0)
};

// ── Geometry, from the app ───────────────────────────────────────────────────
// ToolbarHelpers.viewHeight() — the same height the paste view gets.
const CHECK_H = Math.round(874 * 0.505);
const HEADER_BTN = 38;
/** Meaning cards are a fixed 144pt wide and scroll horizontally. */
const CARD_W = 144;

type Meaning = { title: string; description: string };

export default function CheckViewDemo() {
  const { t } = useTranslation();
  const demo = `features.items.homographs.demo`;
  const meanings = t(`${demo}.meanings`, { returnObjects: true }) as Meaning[];

  return (
    <ScaledSurface
      label={t("features.items.homographs.alt")}
      maxHeight={SURFACE_MAX_H}
      maxScale={1}
    >
      <div
        className="flex flex-col"
        style={{ width: DESIGN_W, height: DESIGN_H }}
      >
        {/* The host messaging app behind the keyboard. */}
        <div className="flex min-h-0 flex-1 flex-col justify-end gap-1.5 overflow-hidden px-3">
          <Bubble side="sent">{t(`${demo}.sent`)}</Bubble>
          <Bubble side="recv">{t(`${demo}.recv`)}</Bubble>
        </div>

        {/* The reworded message, sitting in the field while it is checked. */}
        <InputBar text={t(`${demo}.reword`)} focused caret={false} />

        {/* Check view — replaces the keyboard, at its own height. */}
        <div
          className="flex flex-col overflow-hidden"
          style={{
            height: CHECK_H,
            background: K.bg,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            boxShadow: "0 18px 44px -16px rgba(20,10,40,0.4)",
          }}
        >
          {/* Header: centered title, dismiss on the right. */}
          <div className="flex items-center px-1 pb-4 pt-1">
            <span
              className="flex-1 pl-[38px] text-[16px] font-semibold"
              style={{ color: K.xMark }}
            >
              {t("appUi.checkTitle")}
            </span>
            <div
              className="grid place-items-center rounded-[12px]"
              style={{
                width: HEADER_BTN,
                height: HEADER_BTN,
                background: K.xButton,
              }}
            >
              <X size={16} color={K.xMark} strokeWidth={2.6} />
            </div>
          </div>

          {/* Scrolled down: the card above ("Current reword") is cut off at the
              top edge, putting the detection card in view. */}
          <div className="min-h-0 flex-1 overflow-hidden">
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
                    style={{
                      height: 38,
                      background: K.selectedBg,
                      color: K.accent,
                    }}
                  >
                    {t("appUi.checkGenderedWords")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScaledSurface>
  );
}
