import { useTranslation } from "react-i18next";
import { ChevronsUpDown } from "lucide-react";
import PanelSurface, { K } from "@/components/panel-surface";

/**
 * A still frame of the Arcatext reword options panel, open over a conversation.
 *
 * Rebuilt from Keyboard/Features/RewordOptions/RewordOptionsView.swift: the
 * recipient gender pair, the group chat toggle row, and the reword script row
 * with its title / subtitle / chevron.
 *
 * The language shown is Hindi, chosen because it is one of the languages that
 * actually surfaces all three sections — `shouldShowRecipientGenderSection` and
 * `shouldShowGroupChatSection` read `hasRecipientGender` / `hasGroupChat` off
 * the language, and `shouldShowAlphabetSection` needs `alphabetOptions`. (The
 * old screenshot showed these next to Japanese, which is `hasRecipientGender:
 * false` and so would not show the gender section at all.) Its scripts —
 * देवनागरी and Romanized — are the section copy's "native script or
 * romanization" exactly.
 *
 * The copy-script section is left out: `shouldShowCopyAlphabetSection` also
 * requires the send-a-copy setting and a copy language that has scripts of its
 * own, which is not the common case.
 */

/** Selection styling shared by the gender and group-chat option buttons. */
function OptionButton({
  label,
  selected,
}: {
  label: string;
  selected: boolean;
}) {
  return (
    <div
      className="grid flex-1 place-items-center rounded-[10px] text-[16px] font-medium"
      style={{
        height: 46,
        background: selected ? K.selectedBg : K.cardBg,
        border: `2.5px solid ${selected ? K.accent : "transparent"}`,
        color: selected ? K.accent : K.xMark,
      }}
    >
      {label}
    </div>
  );
}

/** iOS switch. Green when on, as the system control is. */
function Toggle({ on = false }: { on?: boolean }) {
  return (
    <div
      className={`flex items-center rounded-full p-0.5 ${on ? "justify-end" : ""}`}
      style={{ width: 51, height: 31, background: on ? "#34C759" : "#E9E9EB" }}
    >
      <div
        className="rounded-full bg-white"
        style={{
          width: 27,
          height: 27,
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
}

export default function RewordOptionsDemo() {
  const { t } = useTranslation();
  const demo = `features.items.recipient.demo`;

  return (
    <PanelSurface
      label={t("features.items.recipient.alt")}
      title={t("appUi.rewordOptions")}
      sent={t(`${demo}.sent`)}
      recv={t(`${demo}.recv`)}
      field={t(`${demo}.reword`)}
    >
      <div className="flex flex-col gap-4 px-3">
        {/* Who are you texting? — the recipient gender pair. */}
        <div className="flex flex-col gap-2">
          <span
            className="px-1 text-[12px] uppercase"
            style={{ color: K.detail }}
          >
            {t("appUi.whoAreYouTexting")}
          </span>
          <div className="flex gap-2">
            <OptionButton label={t("appUi.genderMale")} selected={false} />
            <OptionButton label={t("appUi.genderFemale")} selected />
          </div>
        </div>

        {/* Group chat — off, so the gender choice above still applies:
            isRecipientGenderSelected requires !isGroupChatEnabled, and turning
            this on would supersede it (and reveal All Male / All Female / Both
            in its place). */}
        <div
          className="flex items-center rounded-[10px] px-3"
          style={{ height: 46, background: K.cardBg }}
        >
          <span className="text-[16px]" style={{ color: K.xMark }}>
            {t("appUi.groupChat")}
          </span>
          <div className="flex-1" />
          <Toggle />
        </div>

        {/* Reword script — the native script, with the romanized alternative a
            tap away behind the chevron. */}
        <div className="flex flex-col gap-2">
          <span
            className="px-1 text-[12px] uppercase"
            style={{ color: K.detail }}
          >
            {t("appUi.rewordScript")}
          </span>
          <div
            className="flex items-center rounded-[13px] px-3"
            style={{ height: 48, background: K.cardBg }}
          >
            <span
              dir="auto"
              className="text-[16px] font-medium"
              style={{ color: K.xMark }}
            >
              {t(`${demo}.scriptTitle`)}
            </span>
            <div className="flex-1" />
            <span className="pr-2 text-[15px]" style={{ color: K.detail }}>
              {t(`${demo}.scriptSubtitle`)}
            </span>
            <ChevronsUpDown size={13} color={K.detail} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </PanelSurface>
  );
}
