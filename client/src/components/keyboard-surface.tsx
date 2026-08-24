// Shared, presentational recreation of the Arcatext keyboard — the toolbar,
// key rows and input bar, with no timeline of its own. The hero drives it from
// its animation loop (HeroKeyboardAnimation); the Reword feature section
// renders the same chrome as a still frame (RewordKeyboard). Keeping one copy
// means the keyboard on the features page can never drift from the hero's.
import { ChevronDown, Plus, ArrowUp, Mic } from "lucide-react";
// Keyboard glyphs, from the design assets (accurate to the Arcatext app).
import menuUrl from "@/assets/keyboard/menu.svg";
import pasteUrl from "@/assets/keyboard/paste.svg";
import shiftUrl from "@/assets/keyboard/shift.svg";
import backspaceUrl from "@/assets/keyboard/backspace.svg";
import checkUrl from "@/assets/keyboard/check.svg";

// ── Colors (light appearance, from the asset catalog) ────────────────────────
export const C = {
  toolbarBar: "#D0D3DA",
  toolButtonBg: "#E6E6EB",
  toolIcon: "#0040DD",
  rewordBg: "#0040DD",
  rewordPressed: "#002B96",
  checkBg: "#B1C6E0",
  checkText: "#0040DD",
  regularKey: "#FFFFFF",
  actionKey: "#B1C6E0",
  keyText: "#000000",
  send: "#0A7AFF",
  sendPressed: "#0862CC",
  sentBubble: "#0A7AFF", // sent bubbles use the same blue as the send button
  recvGray: "#E9E9EB",
};

/** Design width of the keyboard surface, in layout pixels before scaling. */
export const DESIGN_W = 402;

export function Key({
  label,
  num,
  bg = C.regularKey,
  grow = 1,
  fontSize = 22,
  children,
}: {
  label?: string;
  num?: string;
  bg?: string;
  grow?: number;
  fontSize?: number;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="relative flex select-none items-center justify-center rounded-[4.6px]"
      style={{
        backgroundColor: bg,
        color: C.keyText,
        height: 42,
        flexGrow: grow,
        flexBasis: 0,
        boxShadow: "0 1px 0 rgba(0,0,0,0.3)",
        fontSize,
        fontWeight: 400,
      }}
    >
      {num && (
        <span className="absolute right-[5px] top-[3px]" style={{ fontSize: 9, color: "rgba(0,0,0,0.4)" }}>
          {num}
        </span>
      )}
      {children ?? label}
    </div>
  );
}

const ROW1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const ROW2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const ROW3 = ["z", "x", "c", "v", "b", "n", "m"];
const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

/**
 * The floating keyboard panel: toolbar (menu / paste / check / Reword), the
 * four key rows and the bottom utility strip. Purely presentational — every
 * bit of state it can show is passed in.
 */
export function KeyboardPanel({
  panelRef,
  uppercase = false,
  rewordPressed = false,
  rewordLoading = false,
}: {
  /** Lets the hero measure the panel to anchor its message stack. */
  panelRef?: React.Ref<HTMLDivElement>;
  /** Shift state — the hero shows caps only while the field is empty. */
  uppercase?: boolean;
  rewordPressed?: boolean;
  rewordLoading?: boolean;
}) {
  const cap = (l: string) => (uppercase ? l.toUpperCase() : l);

  return (
    <div
      ref={panelRef}
      className="overflow-hidden"
      style={{ borderRadius: 22, boxShadow: "0 18px 44px -16px rgba(20,10,40,0.4)" }}
    >
      <div style={{ backgroundColor: C.toolbarBar }} className="px-[5px] pb-1 pt-2">
        {/* Toolbar */}
        <div className="mb-2 flex items-center" style={{ height: 50, gap: 8 }}>
          <div className="relative ml-2 mr-[3px]">
            <div
              className="grid place-items-center rounded-[12px]"
              style={{ width: 57, height: 50, backgroundColor: C.toolButtonBg }}
            >
              <img src={menuUrl} alt="" style={{ width: 21, height: 21 }} />
            </div>
          </div>
          <div className="relative mr-[3px]">
            <div
              className="grid place-items-center rounded-[12px]"
              style={{ width: 57, height: 50, backgroundColor: C.toolButtonBg }}
            >
              <img src={pasteUrl} alt="" style={{ width: 16, height: 20 }} />
            </div>
          </div>
          {/* Check — now a magnifying-glass icon (was a text label). Sized
              and colored like the menu/paste buttons since it no longer
              holds text. */}
          <div className="relative">
            <div
              className="grid place-items-center rounded-[12px]"
              style={{ width: 57, height: 50, backgroundColor: C.toolButtonBg }}
            >
              <img src={checkUrl} alt="" style={{ width: 20, height: 20 }} />
            </div>
          </div>
          <div className="flex-1" />
          <div
            className="relative mr-2 flex items-stretch overflow-hidden rounded-[12px] transition-transform"
            style={{
              height: 50,
              backgroundColor: rewordPressed ? C.rewordPressed : C.rewordBg,
              transform: rewordPressed ? "scale(0.96)" : "scale(1)",
            }}
          >
            {/* Fixed-width label so the button doesn't resize while loading */}
            <div className="relative flex items-center justify-center" style={{ width: 90 }}>
              {rewordLoading ? (
                <span className="block h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              ) : (
                <span className="text-[16px] font-medium text-white">Reword</span>
              )}
            </div>
            <div className="self-center" style={{ width: 1, height: 20, backgroundColor: "rgba(255,255,255,0.5)" }} />
            <div className="relative grid place-items-center" style={{ width: 40 }}>
              <ChevronDown className="h-4 w-4 text-white" strokeWidth={2.4} />
            </div>
          </div>
        </div>

        {/* Rows */}
        <div className="mb-[8px] flex gap-[5px]">
          {ROW1.map((l, i) => (
            <Key key={l} label={cap(l)} num={NUMS[i]} />
          ))}
        </div>
        <div className="mb-[8px] flex gap-[5px] px-[18px]">
          {ROW2.map((l) => (
            <Key key={l} label={cap(l)} />
          ))}
        </div>
        <div className="mb-[8px] flex gap-[5px]">
          <Key bg={C.actionKey} grow={1.5}>
            <img src={shiftUrl} alt="shift" style={{ width: 19, height: 17 }} />
          </Key>
          {ROW3.map((l) => (
            <Key key={l} label={cap(l)} />
          ))}
          <Key bg={C.actionKey} grow={1.5}>
            <img src={backspaceUrl} alt="backspace" style={{ width: 23, height: 17 }} />
          </Key>
        </div>
        {/* Bottom row: 123, wide space, return — 123 and return are equal
            width (no locale key here; the locale switcher is the globe in
            the utility strip below). */}
        <div className="mb-2 flex gap-[5px]">
          <Key bg={C.actionKey} grow={2} fontSize={15}>
            123
          </Key>
          <Key grow={4.5} fontSize={15}>
            <span className="text-black/85">space</span>
          </Key>
          <Key bg={C.actionKey} grow={2}>
            {/* Return arrow (↵). */}
            <svg width="24" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 7v4a2 2 0 0 1-2 2H7"
                stroke="rgba(0,0,0,0.82)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 9l-4 4 4 4"
                stroke="rgba(0,0,0,0.82)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Key>
        </div>
      </div>

      {/* Bottom utility strip */}
      <div style={{ backgroundColor: C.toolbarBar }} className="flex items-center justify-between px-5 pb-2 pt-1">
        {/* iOS system keyboard switcher (unchanged globe). */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9.2" stroke="rgba(0,0,0,0.82)" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="4" ry="9.2" stroke="rgba(0,0,0,0.82)" strokeWidth="1.5" />
          <path d="M3 12h18M4.5 7.5h15M4.5 16.5h15" stroke="rgba(0,0,0,0.82)" strokeWidth="1.5" />
        </svg>
        <Mic className="h-6 w-6" style={{ color: "rgba(0,0,0,0.82)" }} strokeWidth={2} />
      </div>
    </div>
  );
}

/**
 * The message field above the keyboard: attachment button, the field itself
 * (which wraps and grows upward), and the send button. `caret` is off for the
 * still frame in the features section, which must not animate.
 */
export function InputBar({
  fieldRef,
  text = "",
  placeholder = "Type something",
  focused = false,
  sendPressed = false,
  caret = true,
}: {
  fieldRef?: React.Ref<HTMLDivElement>;
  text?: string;
  placeholder?: string;
  focused?: boolean;
  sendPressed?: boolean;
  caret?: boolean;
}) {
  const hasText = text.length > 0;

  return (
    <div className="flex items-end gap-2 px-3 pb-2 pt-1">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e6e8ec]">
        <Plus className="h-5 w-5 text-[#6b7280]" strokeWidth={2.6} />
      </div>
      <div
        ref={fieldRef}
        className="flex min-h-9 min-w-0 flex-1 items-center rounded-[18px] border py-1.5 pl-4 pr-3 transition-colors"
        style={{
          borderColor: focused ? C.send : "rgba(0,0,0,0.15)",
          background: focused ? "rgba(10,122,255,0.06)" : "transparent",
        }}
      >
        {hasText ? (
          <span className="min-w-0 flex-1 whitespace-pre-wrap break-words text-[15px] leading-snug text-black">
            {text}
            {caret && (
              <span
                className="ml-[1px] inline-block h-[15px] w-[2px] translate-y-[2px] animate-pulse align-baseline"
                style={{ background: C.send }}
              />
            )}
          </span>
        ) : (
          <span className="min-w-0 flex-1 text-[15px]" style={{ color: "#9aa0a6" }}>
            {placeholder}
            {caret && (
              <span
                className="ml-[1px] inline-block h-[15px] w-[2px] translate-y-[2px] animate-pulse"
                style={{ background: C.send }}
              />
            )}
          </span>
        )}
      </div>
      <div
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform"
        style={{
          backgroundColor: sendPressed ? C.sendPressed : C.send,
          transform: sendPressed ? "scale(0.86)" : "scale(1)",
        }}
      >
        <ArrowUp className="h-5 w-5 text-white" strokeWidth={2.8} />
      </div>
    </div>
  );
}
