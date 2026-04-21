import Citadel from "@/components/Citadel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import PartnershipCards from "@/components/PartnershipCards";

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="overflow-x-hidden pb-16 pt-28 md:pt-32">
        <Hero />
        <HowItWorks />
        <Citadel />
        <PartnershipCards />
      </main>

      <Footer />
    </div>
  );
}
