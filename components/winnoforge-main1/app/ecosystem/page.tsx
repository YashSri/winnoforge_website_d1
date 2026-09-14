import EcosystemEngineSection from "@/components1/ecosystem/EcosystemEngineSection";
import EcosystemHeroSection from "@/components1/ecosystem/EcosystemHeroSection";
import EcosystemHowWorksSection from "@/components1/ecosystem/EcosystemHowWorksSection";
import EcosystemPillarsSection from "@/components1/ecosystem/EcosystemPillarsSection";
import LeadershipMilestonesSection from "@/components1/ecosystem/LeadershipMilestonesSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FaqAccordion from "@/components/shared/FaqAccordion";
import VoicesCarousel from "@/components/shared/VoicesCarousel";

const ecosystemFaqs = [
  {
    question: "What is Winnovation?",
    answer:
      "Winnovation is the organization behind FORGE — it partners with institutions, industry, and mentors to build a student-led innovation ecosystem on campuses.",
  },
  {
    question: "What is FORGE?",
    answer:
      "FORGE is the execution system that turns campus talent into builders — moving students from ideas to shipped prototypes through structured sprints and mentorship.",
  },
  {
    question: "How do I join as a student?",
    answer:
      "If your institution already partners with FORGE, you can join through your campus chapter. Otherwise, use the Partner With Us page to bring FORGE to your campus.",
  },
  {
    question: "Do I need prior experience to get involved?",
    answer:
      "No. FORGE is built to take builders from wherever they're starting — the structure and mentorship are what close the experience gap.",
  },
  {
    question: "How can my company get involved?",
    answer:
      "Industry partners bring problem statements, mentor builders, and evaluate outcomes. Reach out through the Partner With Us page to start a conversation.",
  },
];

const mentorVoices = [
  {
    quote: "Mentoring FORGE builders is the closest thing to running a real product team with students.",
    name: "Priya Suresh",
    designation: "Senior Product Manager",
    org: "Mentor Network",
  },
  {
    quote: "The structure FORGE gives students is what most bootcamps miss — real accountability.",
    name: "Karthik Iyer",
    designation: "Engineering Lead",
    org: "Mentor Network",
  },
  {
    quote: "I've watched builders go from hesitant to shipping in a single cycle.",
    name: "Ananya Bose",
    designation: "Founder",
    org: "Mentor Network",
  },
];

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="relative overflow-x-hidden pb-16 pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[linear-gradient(180deg,rgba(247,251,255,1),rgba(255,255,255,0)),radial-gradient(circle_at_top_left,rgba(77,150,255,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(120,178,255,0.14),transparent_32%)]" />
        <EcosystemHeroSection />
        <LeadershipMilestonesSection />
        <EcosystemHowWorksSection />
        <EcosystemEngineSection />
        <EcosystemPillarsSection />
        <VoicesCarousel title="Mentor Voices" voices={mentorVoices} />
        <section className="mx-auto w-full max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10">
            <FaqAccordion items={ecosystemFaqs} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
