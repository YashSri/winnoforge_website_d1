import EcosystemHeroSection from "@/components1/ecosystem/EcosystemHeroSection";
import EcosystemHowWorksSection from "@/components1/ecosystem/EcosystemHowWorksSection";
import EcosystemPillarsSection from "@/components1/ecosystem/EcosystemPillarsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="relative overflow-x-hidden pb-16 pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[linear-gradient(180deg,rgba(247,251,255,1),rgba(255,255,255,0)),radial-gradient(circle_at_top_left,rgba(77,150,255,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(120,178,255,0.14),transparent_32%)]" />
        <EcosystemHeroSection />
        <EcosystemPillarsSection />
        <EcosystemHowWorksSection />
      </main>

      <Footer />
    </div>
  );
}
