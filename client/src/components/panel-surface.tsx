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
 * Shared chrome for the still frames that show one of Arcatext's full-height
 * panels — check view, reword options — open over a conversation.
 *
 * The panels differ only in their title and their content; the thread, the
 * message field, the header bar and the panel frame are the same in each
 * (CheckView.swift and RewordOptionsView.swift build the same header: a
 * centred title flanked by a 38pt leading pad and the dismiss button).
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
  detail: "#808080", // MenuDetailColor
  accent: "#0040DD", // ToolbarIconColor / CheckButtonTextColor / CheckPrimaryColor
  cardStroke: "#E6E6EB", // MenuCardStrokeColor
  xButton: "#E6E6EB", // MenuXButtonColor
  xMark: "#000000", // ToolbarXMarkColor / MenuLabelColor
  experimental: "#FFB200", // Color(red: 1.0, green: 0.698, blue: 0.0)
};

// ── Geometry, from the app ───────────────────────────────────────────────────
// ToolbarHelpers.viewHeight() — every full-height panel gets the same value.
export const PANEL_H = Math.round(874 * 0.505);
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
export function OptionRow({
  text,
  selected,
}: {
  text: string;
  selected: boolean;
}) {
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

export default function PanelSurface({
  label,
  title,
  sent,
  recv,
  field,
  children,
}: {
  /** Announced to assistive tech in place of the drawing. */
  label: string;
  /** The panel's header title. */
  title: string;
  sent: string;
  recv: string;
  /** The message sitting in the field while the panel is open. */
  field: string;
  /** The panel's scroll content — whichever sections are in view. */
  children: React.ReactNode;
}) {
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
            height: PANEL_H,
            background: K.bg,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            boxShadow: "0 18px 44px -16px rgba(20,10,40,0.4)",
          }}
        >
          {/* Header: the app pads the title 38pt on the leading side to balance
              the 38pt dismiss button, so the title sits centred in the bar. */}
          <div className="flex items-center px-1 pb-4 pt-1">
            <span
              className="flex-1 pl-[38px] text-center text-[16px] font-semibold"
              style={{ color: K.xMark }}
            >
              {title}
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
