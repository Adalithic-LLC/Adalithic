import { useTranslation } from "react-i18next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { PrivacyPolicyContent } from "@/components/privacy-policy-content";

export default function Privacy() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-secondary mb-8">{t("legalPages.privacyTitle")}</h1>
          <PrivacyPolicyContent />
        </div>
      </section>
      <Footer />
    </div>
  );
}
