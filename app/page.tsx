import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import SplashScreen from "@/components/SplashScreen";
import IntroWinnovation from "@/components/home/IntroWinnovation";
import IntroForge from "@/components/home/IntroForge";
import OfferingsGrid from "@/components/home/OfferingsGrid";
import WhySection from "@/components/home/WhySection";
import VoicesCarousel from "@/components/shared/VoicesCarousel";

const homeVoices = [
  {
    quote: "FORGE gave me a real problem to solve, not another assignment to submit.",
    name: "Aarav Mehta",
    designation: "Builder, Batch 3",
    org: "FORGE Citadel",
  },
  {
    quote: "Bringing FORGE onto campus changed how our students think about their final year.",
    name: "Dr. Nandini Rao",
    designation: "Dean of Innovation",
    org: "Partner Institution",
  },
  {
    quote: "The builders we've hired out of FORGE ship faster than most junior engineers.",
    name: "Rohan Kapoor",
    designation: "Engineering Manager",
    org: "Industry Partner",
  },
];

export default function Home() {
  return (
    <SplashScreen>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <Hero />
        <IntroWinnovation />
        <IntroForge />
        <Philosophy />
        <OfferingsGrid />
        <WhySection />
        <VoicesCarousel title="Voices Behind FORGE" voices={homeVoices} />
        <HowItWorks />
        <Footer />
      </main>
    </SplashScreen>
  );
}
