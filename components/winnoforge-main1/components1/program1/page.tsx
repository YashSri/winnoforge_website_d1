import {
  Award,
  Briefcase,
  Compass,
  PenTool,
  Rocket,
  Wrench,
} from "lucide-react";
import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PartnerButton from "@/components/modal/PartnerButton";
import ProgramDiscovery from "@/components/programs/ProgramDiscovery";
import InstitutionalPrograms from "@/components/programs/InstitutionalPrograms";
import CardGrid from "@/components/shared/CardGrid";
import FaqAccordion from "@/components/shared/FaqAccordion";

export const metadata = pageMetadata({
  title: "FORGE Programs | Learning, Innovation, and Capability-Building Pathways",
  description:
    "Explore FORGE programs for learners, institutions, founders, educators, and industry partners — connecting structured learning with practical projects, mentorship, innovation, and progression.",
  path: "/programs",
});

const coreCategoryCards = [
  {
    icon: Compass,
    title: "Foundation Programs",
    description:
      "Build the fundamentals required to explore technology, innovation, and structured problem-solving.",
  },
  {
    icon: Wrench,
    title: "Technical Skill Programs",
    description:
      "Develop practical, industry-relevant technical capabilities through guided learning and hands-on work.",
  },
  {
    icon: PenTool,
    title: "Innovation and Project Programs",
    description:
      "Turn problems and ideas into prototypes, experiments, and demonstrable solutions.",
  },
  {
    icon: Rocket,
    title: "Founder and Venture Programs",
    description:
      "Support aspiring founders as they move from early ideas toward validated products, ventures, or initiatives.",
  },
  {
    icon: Award,
    title: "Certification and Capability Programs",
    description:
      "Build structured capability through learning, assessment, practical work, and evidence of completion.",
  },
  {
    icon: Briefcase,
    title: "Industry and Corporate Programs",
    description:
      "Connect learners, institutions, and organisations through applied challenges, mentorship, and innovation collaboration.",
  },
];

const programsFaqs = [
  {
    question: "Who can participate in FORGE programs?",
    answer:
      "Eligibility depends on the specific program — check each program's details or reach out through our Collaborate page.",
  },
  {
    question: "Are programs available through partner campuses?",
    answer:
      "Some programs are delivered through partner campuses. This is confirmed on a program-by-program basis.",
  },
  {
    question: "Are programs online or offline?",
    answer:
      "Delivery format varies by program — including campus-based, cohort-based, and hybrid formats.",
  },
  {
    question: "Do participants receive certificates?",
    answer:
      "Recognition varies by program. Where a certification pathway applies, it is tied to verified practical output and project milestones.",
  },
  {
    question: "Are projects included?",
    answer:
      "Yes. Most FORGE pathways are built around practical execution, real prototypes, and structured sprints.",
  },
  {
    question: "Can institutions collaborate with FORGE?",
    answer:
      "Yes — use the Collaborate page to discuss partnership opportunities.",
  },
  {
    question: "Can mentors or industry experts participate?",
    answer:
      "Yes — industry practitioners participate through problem statements, sprint reviews, and demo-day evaluation. Reach out via Collaborate.",
  },
  {
    question: "How do I choose the right program?",
    answer:
      "Explore the pathways above based on your stage, or reach out through Collaborate for personalized guidance.",
  },
  {
    question: "Are placements or jobs guaranteed?",
    answer:
      "No. FORGE programs are designed to support capability-building, exposure, and career readiness — not guaranteed placement or employment.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative overflow-x-hidden pb-16 pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-120 bg-[radial-gradient(circle_at_18%_20%,rgba(77,150,255,0.22),transparent_42%),radial-gradient(circle_at_85%_12%,rgba(77,150,255,0.14),transparent_40%)]" />

        <ProgramDiscovery />

        <CardGrid
          eyebrow="Program Categories"
          heading="Built Around Real Stages of Growth"
          cards={coreCategoryCards}
          columns={3}
        />

        <InstitutionalPrograms />

        <section className="mx-auto w-full max-w-3xl px-6 py-16 md:px-12 md:py-24">
          <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10">
            <FaqAccordion items={programsFaqs} />
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center md:px-12 md:py-24">
          <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Your Next Capability-Building Journey Starts Here
          </h2>
          <p className="max-w-xl font-jakarta text-base text-foreground/70">
            Whether you are beginning to learn, building your first project, exploring
            entrepreneurship, strengthening an institution, or looking for meaningful industry
            collaboration, there is a pathway to explore.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/collaborate"
              className="rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
            >
              Talk to the FORGE Team
            </Link>
            <PartnerButton className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]">
              Partner With FORGE
            </PartnerButton>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
