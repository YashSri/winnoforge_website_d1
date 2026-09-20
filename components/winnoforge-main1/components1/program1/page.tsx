import { pageMetadata } from "@/lib/page-metadata";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProgramDiscovery from "@/components/programs/ProgramDiscovery";
import InstitutionalPrograms from "@/components/programs/InstitutionalPrograms";
import ProgramCategories from "@/components/programs/ProgramCategories";
import LearningFormats from "@/components/programs/LearningFormats";
import FaqAccordion from "@/components/shared/FaqAccordion";

export const metadata = pageMetadata({
  title: "FORGE Programs | Learning, Innovation, and Capability-Building Pathways",
  description:
    "Explore FORGE programs for learners, institutions, founders, educators, and industry partners — connecting structured learning with practical projects, mentorship, innovation, and progression.",
  path: "/programs",
});

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
    question: "How do I choose the right program?",
    answer:
      "Explore the pathways above based on your stage, or reach out through Collaborate for personalized guidance.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative overflow-x-hidden pb-16 pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-120 bg-[radial-gradient(circle_at_18%_20%,rgba(77,150,255,0.22),transparent_42%),radial-gradient(circle_at_85%_12%,rgba(77,150,255,0.14),transparent_40%)]" />

        <ProgramDiscovery />

        <ProgramCategories />

        <LearningFormats />

        <InstitutionalPrograms />

        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
              Frequently Asked <span className="text-[#1683EA]">Questions</span>
            </h2>
          </div>
          <FaqAccordion items={programsFaqs} layout="row" columns={7} />
        </section>



      </main>
      <Footer />
    </div>
  );
}

