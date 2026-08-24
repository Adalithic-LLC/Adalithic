import { useTranslation } from "react-i18next";
import { ChevronDown, Settings, Trash2, X } from "lucide-react";
import {
  Bubble,
  DESIGN_H,
  DESIGN_W,
  InputBar,
  ScaledSurface,
  SURFACE_MAX_H,
} from "@/components/keyboard-surface";

/**
 * A still frame of the Arcatext paste view, open over a conversation.
 *
 * Rebuilt from the app source (Keyboard/Features/Paste/Views/PasteView.swift,
 * PasteItemView.swift, PasteListView.swift) rather than traced from a
 * screenshot, so the chrome matches what ships: the gear / title / dismiss
 * header, the two-tab picker (Original · Sentences — the Words tab is
 * suppressed in PasteTab.visibleCases), an expanded item showing the
 * translation above the original behind a blue rule, and the language / clear /
 * Paste toolbar.
 *
 * Drawn as DOM, not exported as an image, so every string localizes with the
 * rest of the page.
 */

// ── Colors, from Arcatext/Assets.xcassets (light appearance) ─────────────────
const P = {
  bg: "#F2F2F7", // PasteBgColor
  pickerBg: "#F6F6F9", // PastePickerBgColor
  pickerSelected: "#FFFFFF", // PastePickerSelectedColor
  separator: "#D1D3D9", // PasteSeperatorColor
  button: "#E6E6EB", // PasteButtonColor
  label: "#000000", // PasteLableColor
  accent: "#0040DD", // ToolbarIconColor / ToolbarItemColor / AccentColor
};

// ── Geometry, from the app ───────────────────────────────────────────────────
// ToolbarHelpers.viewHeight(): portrait, longDim 874 (the 402pt-wide device the
// hero is drawn to) → 874 * 0.505. This is the paste view's real height.
const PASTE_H = Math.round(874 * 0.505);
const TOP_BAR_H = 88; // PasteView.baseTopBarHeight
const HEADER_ROW_H = 44;
const PICKER_H = 38;
const TOOLBAR_H = 50;

export default function PasteViewDemo() {
  const { t } = useTranslation();
  const demo = `features.items.receive.demo`;

  return (
    <ScaledSurface
      label={t("features.items.receive.alt")}
      maxHeight={SURFACE_MAX_H}
      maxScale={1}
    >
      <div
        className="flex flex-col"
        style={{ width: DESIGN_W, height: DESIGN_H }}
      >
        {/* The host messaging app behind the keyboard. With the paste view open
            at its real height only a sliver of the thread is left visible —
            which is exactly what you see on a phone. */}
        <div className="flex min-h-0 flex-1 flex-col justify-end gap-1.5 overflow-hidden px-3">
          <Bubble side="sent">{t(`${demo}.sent`)}</Bubble>
          <Bubble side="recv">{t(`${demo}.received`)}</Bubble>
        </div>

        <InputBar caret={false} />

        {/* Paste view — replaces the keyboard, at its own height. */}
        <div
          className="flex flex-col overflow-hidden"
          style={{
            height: PASTE_H,
            background: P.bg,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            boxShadow: "0 18px 44px -16px rgba(20,10,40,0.4)",
          }}
        >
          {/* Top bar: gear · title · dismiss, then the tab picker. */}
          <div
            className="flex flex-col justify-end px-1"
            style={{ height: TOP_BAR_H }}
          >
            <div className="flex items-center" style={{ height: HEADER_ROW_H }}>
              <div className="grid h-[38px] w-[38px] place-items-center">
                <Settings size={19} color={P.accent} strokeWidth={2} />
              </div>
              <div className="flex-1" />
              <span
                className="text-[16px] font-semibold"
                style={{ color: P.label }}
              >
                {t("appUi.pasteTitle")}
              </span>
              <div className="flex-1" />
              <div
                className="grid h-[38px] w-[38px] place-items-center rounded-[16px]"
                style={{ background: P.button }}
              >
                <X size={16} color={P.label} strokeWidth={2.6} />
              </div>
            </div>
            {/* Segmented picker. PasteTab.visibleCases is [translate, breakdown];
                the Words tab is hidden, so there are two segments. */}
            <div
              className="mb-[6px] flex items-center rounded-[6px] p-[2px]"
              style={{ height: PICKER_H, background: P.pickerBg }}
            >
              <div
                className="flex h-full flex-1 items-center justify-center rounded-[5px] text-[14px] font-medium"
                style={{
                  background: P.pickerSelected,
                  color: P.label,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                }}
              >
                {t("appUi.tabOriginal")}
              </div>
              <div
                className="flex h-full flex-1 items-center justify-center text-[14px] font-medium"
                style={{ color: P.label }}
              >
                {t("appUi.tabSentences")}
              </div>
            </div>
          </div>

          {/* Item list. One expanded item: the translation, then the original
              behind the blue rule. */}
          <div className="min-h-0 flex-1">
            <div className="flex items-start px-3">
              <div className="min-w-0 flex-1">
                <p
                  className="text-[16px] leading-snug"
                  style={{ color: P.label, minHeight: 37 }}
                >
                  {t(`${demo}.translation`)}
                </p>
                {/* Expanded: original text behind a 2pt accent rule. */}
                <div className="flex gap-2 pb-2 pt-3">
                  <div
                    className="shrink-0 self-stretch rounded-[12px]"
                    style={{ width: 2, background: P.accent }}
                  />
                  <p
                    className="py-[2px] text-[16px] leading-snug"
                    style={{ color: P.label }}
                  >
                    {t(`${demo}.received`)}
                  </p>
                </div>
              </div>
              {/* Expand/collapse chevron, rotated because the item is expanded. */}
              <div className="grid h-[37px] w-[37px] shrink-0 place-items-center">
                <ChevronDown
                  size={16}
                  color={P.label}
                  strokeWidth={2.4}
                  className="rotate-180"
                />
              </div>
            </div>
          </div>

          {/* Bottom toolbar: language · clear · Paste. */}
          <div style={{ height: 1, background: P.separator }} />
          <div
            className="flex items-center gap-3 px-2 py-[6px]"
            style={{ height: TOOLBAR_H }}
          >
            <span
              className="rounded-[12px] px-3 py-2 text-[16px] font-medium"
              style={{ color: P.accent }}
            >
              {t("appUi.language")}
            </span>
            <div className="flex-1" />
            <div className="rounded-[12px] px-5 py-2">
              <Trash2 size={17} color={P.accent} strokeWidth={2} />
            </div>
            <div
              className="rounded-[12px] px-5 py-2 text-[16px] font-medium text-white"
              style={{ background: P.accent }}
            >
              {t("appUi.paste")}
            </div>
          </div>
        </div>
      </div>
    </ScaledSurface>
  );
}
