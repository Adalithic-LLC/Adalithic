import { useTranslation } from "react-i18next";
import {
  InputBar,
  KeyboardPanel,
  ScaledSurface,
} from "@/components/keyboard-surface";

// The still frame that illustrates Reword in the features section: the same
// keyboard surface the hero animates, frozen on the moment a drafted message is
// sitting in the field with Reword waiting in the toolbar. Deliberately static —
// no float, no caret, no timeline — so it reads as a product shot alongside the
// other visuals. Drawn as DOM, so its copy localizes with the page.

/** The drafted message shown in the field. Kept in English (it is the "before"
 *  side of Reword) rather than translated per locale. */
const DRAFT = "Are you free to meet up this weekend?";

export default function RewordKeyboard() {
  const { t } = useTranslation();

  return (
    <ScaledSurface label={t("features.items.reword.alt")}>
      <InputBar text={DRAFT} focused caret={false} />
      <KeyboardPanel />
    </ScaledSurface>
  );
}
