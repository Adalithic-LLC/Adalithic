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
 * Shared chrome for the still frames that show the Arcatext check view open
 * over a conversation, rebuilt from Keyboard/Features/Check/Views/CheckView.swift.
 *
 * Two feature rows use it: the reverse translation ("reword intent check") at
 * the top of the scroll, and the homograph detection card further down. They
 * differ only in which sections are in view, so everything around that — the
 * thread, the message field, the Check header and the panel itself — lives here
 * once.
 *
 * Drawn as DOM, not exported as an image, so every string localizes with the
 * rest of the page.
 */

// ── Colors, from Arcatext/Assets.xcassets (light appearance) ─────────────────
export const K = {
  bg: "#F2F2F7", // PasteBgColor — CheckView's own background
  cardBg: "#FFFFFF", // CheckCardBgColor
  selectedBg: "#D9EBFF", // CheckSelectedBgColor
  placeholder: "#8E8E93", // CheckPlaceholderColor
  accent: "#0040DD", // ToolbarIconColor / CheckButtonTextColor / CheckPrimaryColor
  cardStroke: "#E6E6EB", // MenuCardStrokeColor
  xButton: "#E6E6EB", // MenuXButtonColor
  xMark: "#000000", // ToolbarXMarkColor / MenuLabelColor
  experimental: "#FFB200", // Color(red: 1.0, green: 0.698, blue: 0.0)
};

// ── Geometry, from the app ───────────────────────────────────────────────────
// ToolbarHelpers.viewHeight() — the same height the paste view gets.
export const CHECK_H = Math.round(874 * 0.505);
const HEADER_BTN = 38;

/** A section label: 12pt regular, uppercase, in the placeholder grey. */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="px-3 text-[12px] uppercase"
      style={{ color: K.placeholder }}
    >
      {children}
    </span>
  );
}

export default function CheckViewSurface({
  label,
  sent,
  recv,
  field,
  children,
}: {
  /** Announced to assistive tech in place of the drawing. */
  label: string;
  sent: string;
  recv: string;
  /** The message sitting in the field while it is checked. */
  field: string;
  /** The check view's scroll content — whichever sections are in view. */
  children: React.ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <ScaledSurface label={label} maxHeight={SURFACE_MAX_H} maxScale={1}>
      <div
        className="flex flex-col"
        style={{ width: DESIGN_W, height: DESIGN_H }}
      >
        {/* The host messaging app behind the keyboard. */}
        <div className="flex min-h-0 flex-1 flex-col justify-end gap-1.5 overflow-hidden px-3">
          <Bubble side="sent">{sent}</Bubble>
          <Bubble side="recv">{recv}</Bubble>
        </div>

        <InputBar text={field} focused caret={false} />

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
          {/* Header: title (inset 38pt, as in the app), dismiss on the right. */}
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

          <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
        </div>
      </div>
    </ScaledSurface>
  );
}
