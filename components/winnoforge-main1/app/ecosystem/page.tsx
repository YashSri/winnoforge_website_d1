import EcosystemEngineSection from "@/components1/ecosystem/EcosystemEngineSection";
import EcosystemHeroSection from "@/components1/ecosystem/EcosystemHeroSection";
import EcosystemHowWorksSection from "@/components1/ecosystem/EcosystemHowWorksSection";
import EcosystemPillarsSection from "@/components1/ecosystem/EcosystemPillarsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <EcosystemHeroSection />
        <EcosystemPillarsSection />
        <EcosystemHowWorksSection />
        <EcosystemEngineSection />
      </main>

      <Footer />
    </div>
  );
}
