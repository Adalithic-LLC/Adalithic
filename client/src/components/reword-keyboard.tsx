import { useTranslation } from "react-i18next";
import {
  Bubble,
  DESIGN_H,
  DESIGN_W,
  InputBar,
  KeyboardPanel,
  ScaledSurface,
  SURFACE_MAX_H,
} from "@/components/keyboard-surface";

// The still frame that illustrates Reword in the features section: the same
// keyboard surface the hero animates, frozen on the moment a drafted message is
// sitting in the field with Reword waiting in the toolbar. Deliberately static —
// no float, no caret, no timeline — so it reads as a product shot alongside the
// other visuals. Drawn as DOM, so its copy localizes with the page.
//
// Drawn on the hero's 402x600 frame at the hero's own size. That frame is tall
// because the thread sits above the keyboard, so the conversation is here too:
// a chat already running in Japanese, with the next reply typed in the user's
// own language and waiting on Reword.

export default function RewordKeyboard() {
  const { t } = useTranslation();
  const demo = `features.items.reword.demo`;

  return (
    <ScaledSurface
      label={t("features.items.reword.alt")}
      maxHeight={SURFACE_MAX_H}
      maxScale={1}
    >
      <div
        className="flex flex-col"
        style={{ width: DESIGN_W, height: DESIGN_H }}
      >
        <div className="flex min-h-0 flex-1 flex-col justify-end gap-1.5 overflow-hidden px-3 pb-1">
          <Bubble side="recv">{t(`${demo}.recv1`)}</Bubble>
          <Bubble side="sent">{t(`${demo}.sent1`)}</Bubble>
          <Bubble side="recv">{t(`${demo}.recv2`)}</Bubble>
        </div>
        <InputBar text={t(`${demo}.draft`)} focused caret={false} />
        <KeyboardPanel />
      </div>
    </ScaledSurface>
  );
}
