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

/**
 * A still frame of a thread where each sent message carries a copy in the
 * user's own language.
 *
 * The copy is not a second message: RewordService composes one string,
 * `"{reword}\n\nCopy text:\n{copy}"`, and that is what gets sent — so the copy
 * arrives inside the same bubble, under the separator's header.
 */

/**
 * RewordService.copySeparator. Hardcoded in the app rather than localized, so
 * it reads "Copy text:" whatever language the keyboard is set to — kept out of
 * i18n here for the same reason.
 */
const COPY_LABEL = "Copy text:";

export default function CopyThreadDemo() {
  const { t } = useTranslation();
  const demo = `features.items.copy.demo`;

  return (
    <ScaledSurface
      label={t("features.items.copy.alt")}
      maxHeight={SURFACE_MAX_H}
      maxScale={1}
    >
      <div
        className="flex flex-col"
        style={{ width: DESIGN_W, height: DESIGN_H }}
      >
        <div className="flex min-h-0 flex-1 flex-col justify-end gap-1.5 overflow-hidden px-3 pb-1">
          <Bubble side="recv">{t(`${demo}.recv`)}</Bubble>
          <Bubble side="sent">
            <span className="whitespace-pre-line">
              {`${t(`${demo}.reword`)}\n\n${COPY_LABEL}\n${t(`${demo}.copy`)}`}
            </span>
          </Bubble>
        </div>

        <InputBar caret={false} />
        <KeyboardPanel />
      </div>
    </ScaledSurface>
  );
}
