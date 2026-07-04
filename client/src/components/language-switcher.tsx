import { Globe } from "lucide-react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LOCALES, LOCALE_LABELS, localePath, useLocale } from "@/lib/locale";

// Language picker: switches locale while staying on the current page by
// rewriting the path prefix (e.g. /es/privacy -> /fr/privacy).
export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const { locale, basePath } = useLocale();
  const [, navigate] = useLocation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-gray-700 hover:bg-gray-100"
          aria-label={t("nav.language")}
          data-testid="language-switcher"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{LOCALE_LABELS[locale]}</span>
        </Button>
      </DropdownMenuTrigger>
      {/* Cap the list to ~10 rows and scroll the rest (there are 30+ locales). */}
      <DropdownMenuContent align="end" className="max-h-[22rem] overflow-y-auto">
        {LOCALES.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => {
              navigate(localePath(basePath, l));
              window.scrollTo({ top: 0 });
            }}
            className={l === locale ? "font-semibold text-primary" : ""}
            data-testid={`language-option-${l}`}
          >
            {LOCALE_LABELS[l]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
