import CorporateHeroSection from "@/components1/corporate/CorporateHeroSection";
import ForgeCitadelSection from "@/components1/corporate/ForgeCitadelSection";
import ForgeEngineSection from "@/components1/corporate/ForgeEngineSection";
import IndustryOutcomesSection from "@/components1/corporate/IndustryOutcomesSection";
import InstitutionalGapSection from "@/components1/corporate/InstitutionalGapSection";
import InstitutionalModelSection from "@/components1/corporate/InstitutionalModelSection";
import PartnerWithForgeSection from "@/components1/corporate/PartnerWithForgeSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <CorporateHeroSection />
        <InstitutionalGapSection />
        <InstitutionalModelSection />
        <ForgeEngineSection />
        <ForgeCitadelSection />
        <IndustryOutcomesSection />
        <PartnerWithForgeSection />
      </main>

      <Footer />
    </div>
  );
}
