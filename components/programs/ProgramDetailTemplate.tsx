"use client";

import { CheckCircle2, Clock, Laptop } from "lucide-react";
import type { Program } from "@/lib/programs-data";
import { useModal } from "@/components/modal/ModalContext";
import FaqAccordion from "@/components/shared/FaqAccordion";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-clash text-2xl font-semibold text-foreground md:text-3xl">{children}</h2>
  );
}

export default function ProgramDetailTemplate({ program }: { program: Program }) {
  const { open } = useModal();

  return (
    <div className="mx-auto w-full max-w-4xl px-6 md:px-12">
      {/* Hero */}
      <section className="py-16 text-center md:py-24">
        <span className="rounded-full bg-primary/10 px-4 py-1.5 font-jakarta text-xs font-semibold uppercase tracking-wide text-primary">
          {program.category}
        </span>
        <h1 className="mt-6 font-varela text-4xl font-bold text-foreground md:text-6xl">
          {program.name}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-jakarta text-lg text-foreground/70">
          {program.shortDescription}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1.5 font-jakarta text-xs font-semibold text-primary">
            {program.domain}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-black/5 px-3 py-1.5 font-jakarta text-xs font-medium text-foreground/70">
            <Clock className="h-3 w-3" />
            {program.duration}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-black/5 px-3 py-1.5 font-jakarta text-xs font-medium text-foreground/70">
            <Laptop className="h-3 w-3" />
            {program.deliveryMode}
          </span>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() =>
              open("download", { programSlug: program.slug, programName: program.name })
            }
            className="rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
          >
            Download Brochure
          </button>
          <button
            type="button"
            onClick={() => open("partner")}
            className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
          >
            Enquire Now
          </button>
          <button
            type="button"
            onClick={() => open("join")}
            className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
          >
            Register Interest
          </button>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <SectionHeading>Overview</SectionHeading>
        <p className="mt-4 font-jakarta leading-relaxed text-foreground/70">{program.overview}</p>
      </section>

      {/* Why this program */}
      <section className="py-10">
        <SectionHeading>Why This Program</SectionHeading>
        <ul className="mt-4 flex flex-col gap-3">
          {program.whyThisProgram.map((point, i) => (
            <li key={i} className="flex items-start gap-3 font-jakarta text-foreground/70">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Curriculum */}
      <section className="py-10">
        <SectionHeading>Curriculum</SectionHeading>
        <div className="mt-4 flex flex-col gap-4">
          {program.curriculum.map((mod, i) => (
            <div
              key={mod.module}
              className="rounded-2xl border border-black/10 bg-white p-6"
            >
              <h3 className="font-jakarta font-semibold text-foreground">
                {i + 1}. {mod.module}
              </h3>
              <ul className="mt-3 flex flex-col gap-1.5">
                {mod.topics.map((topic) => (
                  <li key={topic} className="font-jakarta text-sm text-foreground/60">
                    &bull; {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-10">
        <SectionHeading>Outcomes</SectionHeading>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {program.outcomes.map((outcome, i) => (
            <li key={i} className="flex items-start gap-3 font-jakarta text-foreground/70">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              {outcome}
            </li>
          ))}
        </ul>
      </section>

      {/* Eligibility */}
      <section className="py-10">
        <SectionHeading>Eligibility</SectionHeading>
        <ul className="mt-4 flex flex-col gap-2">
          {program.eligibility.map((item, i) => (
            <li key={i} className="font-jakarta text-foreground/70">
              &bull; {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="py-10">
        <SectionHeading>Projects</SectionHeading>
        <ul className="mt-4 flex flex-col gap-2">
          {program.projects.map((item, i) => (
            <li key={i} className="font-jakarta text-foreground/70">
              &bull; {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Certification details */}
      <section className="py-10">
        <SectionHeading>Certification</SectionHeading>
        <p className="mt-4 font-jakarta leading-relaxed text-foreground/70">
          {program.certificationDetails}
        </p>
      </section>

      {/* Trainer info */}
      <section className="py-10">
        <SectionHeading>Trainer</SectionHeading>
        <div className="mt-4 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)]">
          <h3 className="font-clash text-xl font-semibold text-foreground">
            {program.trainerName}
          </h3>
          <p className="font-jakarta text-sm text-foreground/60">{program.trainerDesignation}</p>
          <p className="mt-4 font-jakarta leading-relaxed text-foreground/70">
            {program.trainerBio}
          </p>
          <p className="mt-6 font-clash text-lg font-medium leading-snug text-foreground">
            &ldquo;{program.trainerQuote}&rdquo;
          </p>
        </div>
      </section>

      {/* Industry relevance */}
      <section className="py-10">
        <SectionHeading>Industry Relevance</SectionHeading>
        <p className="mt-4 font-jakarta leading-relaxed text-foreground/70">
          {program.industryRelevance}
        </p>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <SectionHeading>FAQs</SectionHeading>
        <div className="mt-4">
          <FaqAccordion items={program.faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="flex flex-col items-center gap-4 py-16 text-center md:py-24">
        <h2 className="font-clash text-2xl font-semibold text-foreground md:text-3xl">
          Ready to start {program.name}?
        </h2>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() =>
              open("download", { programSlug: program.slug, programName: program.name })
            }
            className="rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
          >
            Download Brochure
          </button>
          <button
            type="button"
            onClick={() => open("join")}
            className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
          >
            Register Interest
          </button>
        </div>
      </section>
    </div>
  );
}
