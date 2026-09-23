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

        <FaqAccordion />



      </main>
      <Footer />
    </div>
  );
}

