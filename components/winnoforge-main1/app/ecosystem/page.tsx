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
import LeadershipMilestonesSection from "@/components1/ecosystem/LeadershipMilestonesSection";
import GovernmentInnovation from "@/components1/ecosystem/GovernmentInnovation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FaqAccordion from "@/components/shared/FaqAccordion";
import CardGrid from "@/components/shared/CardGrid";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import FinalCta from "@/components/home/FinalCta";

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

const innovationScaleCards = [
  {
    icon: Compass,
    title: "Shared Knowledge",
    description: "Practices, learnings, and insights move across campuses.",
  },
  {
    icon: Network,
    title: "Cross-Campus Collaboration",
    description: "Teams from different institutions can work on shared problems.",
  },
  {
    icon: FlaskConical,
    title: "Distributed Experimentation",
    description:
      "Multiple teams can explore different pathways to a problem.",
  },
  {
    icon: Shield,
    title: "Common Standards",
    description: "A shared framework helps preserve quality and consistency.",
  },
  {
    icon: Sparkles,
    title: "Convergence",
    description:
      "Summits, demo days, and showcases bring the network together.",
  },
];

const howEcosystemWorksSteps = [
  {
    title: "Discover",
    description:
      "Encounter FORGE through a course, seminar, workshop, or campus chapter.",
  },
  {
    title: "Learn",
    description: "Gain foundational knowledge in a domain or problem area.",
  },
  {
    title: "Practise",
    description: "Work through tools, exercises, and guided tasks.",
  },
  {
    title: "Build",
    description: "Collaborate with peers on real projects.",
  },
  {
    title: "Receive Feedback",
    description: "Interact with mentors to improve the work.",
  },
  {
    title: "Iterate",
    description: "Use feedback and evidence to refine the output.",
  },
  {
    title: "Demonstrate",
    description: "Show progress through documented, reviewable outputs.",
  },
  {
    title: "Progress",
    description:
      "Move toward advanced learning, internships, Citadel, or hiring opportunities.",
  },
];

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="relative overflow-x-hidden pb-16 pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[linear-gradient(180deg,rgba(247,251,255,1),rgba(255,255,255,0)),radial-gradient(circle_at_top_left,rgba(77,150,255,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(120,178,255,0.14),transparent_32%)]" />

        {/* Hero */}
        <EcosystemHeroSection />

        {/* Who We Are */}
        <CardGrid
          eyebrow="Who We Are"
          heading="Winnovation FORGE: Building What Comes Next"
          description="Winnovation FORGE is built around a simple belief: education becomes more valuable when knowledge is applied, tested, reviewed, and transformed into something real."
          cards={whoWeAreCards}
          columns={3}
        />
        <LeadershipMilestonesSection />

        {/* FORGE Philosophy */}
        <CardGrid
          eyebrow="Our Philosophy"
          heading="Capability Is Built, Not Declared"
          description="We believe education should produce more than knowledge — it should develop the ability to act on knowledge."
          cards={philosophyCards}
          columns={3}
        />
        <div className="mx-auto w-full max-w-3xl px-6 pb-16 text-center md:px-12">
          <p className="font-clash text-2xl font-semibold text-foreground md:text-3xl">
            &ldquo;Forging Minds. Building Innovation. Creating the Future.&rdquo;
          </p>
        </div>

        {/* The People of the Ecosystem */}
        <CardGrid
          eyebrow="Who Participates"
          heading="An Ecosystem Is Built by People"
          description="FORGE connects different groups that contribute to learning, execution, innovation, and opportunity. Each group has a different role, but the system works because the roles interact."
          cards={stakeholderCards}
          columns={4}
        />

        {/* How the Ecosystem Works */}
        <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              How the Ecosystem Works
            </span>
            <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
              From Learning to Execution to Opportunity
            </h2>
          </div>
          <div className="mt-14">
            <ProcessTimeline steps={howEcosystemWorksSteps} />
          </div>
        </section>

        {/* Winnovation Backbone */}
        <EcosystemHowWorksSection />

        {/* Government and Public-Purpose Innovation */}
        <GovernmentInnovation />

        {/* Innovation at Scale */}
        <CardGrid
          eyebrow="How Innovation Scales"
          heading="Build Locally. Learn Collectively. Scale Responsibly."
          description="The FORGE ecosystem is designed to support local execution while enabling shared learning across institutions."
          cards={innovationScaleCards}
          columns={3}
        />

        {/* FAQ */}
        <section className="mx-auto w-full max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10">
            <FaqAccordion items={ecosystemFaqs} />
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
