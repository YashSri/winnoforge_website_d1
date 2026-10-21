import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CourseCatalogSection from "@/components/programs/CourseCatalogSection";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "FORGE Courses & Brochures | 1 Year, 6 Months, 3 Months & 45 Days Curricula",
  description:
    "Explore and download verified course brochures across 1 Year, 6 Months, 3 Months, and 45-Day fast-track bootcamps in Generative AI, Full Stack Development, Data Science, Cloud Computing, and more.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative overflow-x-hidden pb-16 pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-120 bg-[radial-gradient(circle_at_20%_20%,rgba(22,131,232,0.18),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(16,42,67,0.12),transparent_42%)]" />

        {/* Hero Banner for Courses */}
        <section className="px-6 py-12 md:py-16 text-center max-w-4xl mx-auto">
          <span className="inline-block rounded-full bg-[#1683E8]/10 px-4 py-1.5 font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-[#1683E8]">
            ACCREDITED CURRICULA &amp; BROCHURES
          </span>
          <h1 className="mt-5 font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] tracking-tight leading-[1.05]">
            Course Catalog &amp; <span className="text-[#1683E8]">Syllabi.</span>
          </h1>
          <p className="mt-4 font-jakarta text-base sm:text-lg text-[#5F6672] leading-relaxed max-w-2xl mx-auto">
            Choose your learning commitment from <strong>1-Year deep mastery</strong>,{" "}
            <strong>6-Month career tracks</strong>, <strong>3-Month core sprints</strong>, to{" "}
            <strong>45-Day intensive bootcamps</strong>. Download official syllabi below.
          </p>
        </section>

        {/* The Course Catalog Section with All 26 PDFs and Duration Tabs */}
        <CourseCatalogSection />

        {/* Canonical FAQ Accordion */}
        <div className="mt-12">
          <FaqAccordion />
        </div>
      </main>
      <Footer />
    </div>
  );
}
