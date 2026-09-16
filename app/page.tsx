import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import BuiltThroughForge from "@/components/home/BuiltThroughForge";
import CitadelPreview from "@/components/home/CitadelPreview";
import CommunityHighlights from "@/components/home/CommunityHighlights";
import ExpertsSpeakers from "@/components/home/ExpertsSpeakers";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import FinalCta from "@/components/home/FinalCta";
import IntroForge from "@/components/home/IntroForge";
import IntroWinnovation from "@/components/home/IntroWinnovation";
import OfferingsGrid from "@/components/home/OfferingsGrid";
import ProblemResponse from "@/components/home/ProblemResponse";
import WhySection from "@/components/home/WhySection";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import SplashScreen from "@/components/SplashScreen";
import Stats from "@/components/Stats";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import VoicesCarousel from "@/components/shared/VoicesCarousel";

const learningJourneySteps = [
  {
    title: "Discover",
    description: "Understand a domain or problem worth solving.",
  },
  {
    title: "Learn",
    description: "Build foundational knowledge through structured content.",
  },
  {
    title: "Practise",
    description: "Work through tools, exercises, and guided tasks.",
  },
  {
    title: "Build",
    description: "Create projects and prototypes from what you've learned.",
  },
  { title: "Review", description: "Receive feedback from mentors and peers." },
  {
    title: "Showcase",
    description: "Present outcomes and demonstrate capability.",
  },
  {
    title: "Progress",
    description:
      "Move toward advanced learning, careers, or innovation opportunities.",
  },
];

const voicesFromForge = [
  {
    quote:
      "FORGE gave me a real problem to solve, not another assignment to submit.",
    name: "Aarav Mehta",
    designation: "Builder, Batch 3",
    org: "FORGE Citadel",
  },
  {
    quote:
      "Bringing FORGE onto campus changed how our students think about their final year.",
    name: "Dr. Nandini Rao",
    designation: "Dean of Innovation",
    org: "Partner Institution",
  },
  {
    quote:
      "The builders we've hired out of FORGE ship faster than most junior engineers.",
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
        <Stats />
        <IntroWinnovation />
        <IntroForge />
        <ProblemResponse />
        <Philosophy />
        <OfferingsGrid />
        <FeaturedPrograms />
        <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
          <h2 className="text-center font-clash text-3xl font-semibold text-foreground md:text-4xl">
            From Curiosity to Capability
          </h2>
          <div className="mt-14">
            <ProcessTimeline steps={learningJourneySteps} />
          </div>
        </section>
        <ExpertsSpeakers />
        <BuiltThroughForge />
        <WhySection />
        <CitadelPreview />
        <CommunityHighlights />
        <VoicesCarousel title="Voices From FORGE" voices={voicesFromForge} />
        <HowItWorks />
        <FinalCta />
        <Footer />
      </main>
    </SplashScreen>
  );
}
