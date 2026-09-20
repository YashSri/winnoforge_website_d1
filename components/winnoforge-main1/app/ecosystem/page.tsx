import { pageMetadata } from "@/lib/page-metadata";
import {
  Building2,
  Compass,
  Eye,
  Flag,
  FlaskConical,
  GraduationCap,
  Landmark,
  Lightbulb,
  Network,
  RefreshCw,
  Rocket,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import EcosystemHeroSection from "@/components1/ecosystem/EcosystemHeroSection";
import EcosystemHowWorksSection from "@/components1/ecosystem/EcosystemHowWorksSection";
import WhoWeAreEngineSection from "@/components1/ecosystem/WhoWeAreEngineSection";
import LeadershipMilestonesSection from "@/components1/ecosystem/LeadershipMilestonesSection";
import PhilosophyRailSection from "@/components1/ecosystem/PhilosophyRailSection";
import WhoParticipatesFlipSection from "@/components1/ecosystem/WhoParticipatesFlipSection";
import GovernmentInnovation from "@/components1/ecosystem/GovernmentInnovation";
import HowInnovationScalesSection from "@/components1/ecosystem/HowInnovationScalesSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FaqAccordion, { FAQSection } from "@/components/shared/FaqAccordion";

export const metadata = pageMetadata({
  title: "About & Ecosystem | Winnovation FORGE",
  description:
    "Discover Winnovation FORGE, an industry-aligned learning and innovation ecosystem connecting students, institutions, mentors, industry, practical execution, and innovation infrastructure.",
  path: "/ecosystem",
});

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
      "If your institution already partners with FORGE, you can join through your campus chapter. Otherwise, use the Collaborate page to bring FORGE to your campus.",
  },
  {
    question: "Do I need prior experience to get involved?",
    answer:
      "No. FORGE is built to take builders from wherever they're starting — the structure and mentorship are what close the experience gap.",
  },
  {
    question: "How can my company get involved?",
    answer:
      "Industry partners bring problem statements, mentor builders, and evaluate outcomes. Reach out through the Collaborate page to start a conversation.",
  },
  {
    question: "How does progression work?",
    answer:
      "Progression is evidence-driven. As builders demonstrate capability across sprints and projects, they advance to higher-responsibility challenges and industry opportunities.",
  },
];

const whoWeAreCards = [
  {
    icon: Building2,
    title: "Industry Alignment",
    description:
      "Learning is connected to tools, workflows, problems, and expectations that exist beyond the classroom.",
  },
  {
    icon: Wrench,
    title: "Applied Learning",
    description:
      "Students are encouraged to practise, build, document, present, receive feedback, and improve.",
  },
  {
    icon: TrendingUp,
    title: "Capability Development",
    description:
      "The goal is not only course completion. The goal is the development of demonstrated ability.",
  },
];

const philosophyCards = [
  {
    icon: Compass,
    title: "Knowledge",
    description: "Understand concepts, systems, tools, and principles.",
  },
  {
    icon: Flag,
    title: "Ownership",
    description: "Take responsibility for a problem, task, project, or outcome.",
  },
  {
    icon: RefreshCw,
    title: "Iteration",
    description: "Use feedback and evidence to improve the work.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Build with peers, mentors, institutions, and industry.",
  },
  {
    icon: Eye,
    title: "Demonstration",
    description:
      "Show what has been built through documented and reviewable outputs.",
  },
  {
    icon: TrendingUp,
    title: "Progression",
    description:
      "Move from one level of capability to the next through evidence and experience.",
  },
];

const stakeholderCards = [
  {
    icon: Users,
    title: "Students and Builders",
    description:
      "Participate in learning, projects, workshops, hackathons, community activity, and execution pathways.",
  },
  {
    icon: Landmark,
    title: "Institutions",
    description:
      "Colleges and universities provide the campus context in which learning, innovation, and industry collaboration can become embedded.",
  },
  {
    icon: GraduationCap,
    title: "Faculty",
    description:
      "Support academic alignment, student development, institutional coordination, and collaboration around projects.",
  },
  {
    icon: Lightbulb,
    title: "Mentors and Experts",
    description:
      "Contribute practical experience through seminars, workshops, reviews, mentorship, and evaluation.",
  },
  {
    icon: Building2,
    title: "Industry Partners",
    description:
      "Contribute through problem statements, talent engagement, innovation experimentation, mentorship, and hiring.",
  },
  {
    icon: Rocket,
    title: "Founders and Entrepreneurs",
    description:
      "Participate in problem discovery, validation, prototyping, incubation, and venture development.",
  },
  {
    icon: Shield,
    title: "Government and Public Institutions",
    description:
      "May contribute real problem statements, policy conversations, and public-purpose innovation opportunities where formal relationships exist.",
  },
  {
    icon: Network,
    title: "FORGE Core and Campus Teams",
    description:
      "Support standards, coordination, execution systems, and the operation of the ecosystem.",
  },
];



export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="relative overflow-x-clip pb-16 pt-[84px] sm:pt-[92px] md:pt-[104px]">
        {/* The FORGE Ecosystem Hero (FIRST section at the top of the Ecosystem tab) */}
        <EcosystemHeroSection />

        {/* Winnovation Backbone */}
        <EcosystemHowWorksSection />

        {/* Who We Are: The Engine Behind The Ecosystem (Thread Security-style Scroll Stack) */}
        <WhoWeAreEngineSection />

        {/* Our Story / Leadership Split */}
        <LeadershipMilestonesSection />

        {/* FORGE Philosophy: Interactive Horizontal Card Rail */}
        <PhilosophyRailSection />



        {/* Who Participates: 8 Participant Cards with 3D Flip & Horizontal Row */}
        <WhoParticipatesFlipSection />



        {/* Government and Public-Purpose Innovation */}
        <GovernmentInnovation />

        {/* How Innovation Scales (Stationary Card Stage with Continuous Scroll Interpolation) */}
        <HowInnovationScalesSection />

        {/* Frequently Asked Questions (3D Flip Cards in Single Line Row + Bottom CTA) */}
        <FAQSection
          id="faq-section"
          eyebrow="COMMON QUESTIONS"
          heading="Frequently Asked"
          headingAccent="Questions"
          description="Everything you need to know about the FORGE ecosystem and how to participate."
          items={ecosystemFaqs}
          showContactCta={true}
          ctaText="Contact Us"
          ctaLink="/collaborate"
          layout="row"
        />

        {/* Bottom Editorial Bar (Matches Home Page) */}
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D9DEE7] pt-8 text-[#7A8492]">
            <div className="flex items-center gap-2 font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-[#1683E8]">
              <span>PEOPLE</span>
              <span>•</span>
              <span>IDEAS</span>
              <span>•</span>
              <span>OPPORTUNITIES</span>
            </div>
            <div className="hidden sm:block h-[1px] flex-1 max-w-md bg-[#D9DEE7]" />
            <span className="font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-[#5F6672]">
              BUILT FOR WHAT’S NEXT.
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
