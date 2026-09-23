"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Calendar, Compass, Building2, X } from "lucide-react";
import ScrollReveal from "@/components/winnoforge-main1/components1/citadel/ScrollReveal";

interface Story {
  id: string;
  num: string;
  title: string;
  category: string;
  summary: string;
  contributor: string;
  date: string;
  image: string;
  icon: typeof BookOpen;
  fullStory?: string;
  tags: string[];
}

const stories: Story[] = [
  {
    id: "story-1",
    num: "01",
    title: "From First Cohort to First Startup",
    category: "Founder Reflection",
    summary: "One builder's path from a FORGE bootcamp to a funded startup.",
    contributor: "Builder Community",
    date: "May 2026",
    image: "/webp/5.webp",
    icon: Compass,
    tags: ["Ventures", "Bootcamp", "Funded"],
    fullStory:
      "Joining the initial cohort changed how I viewed technical execution. Instead of building toy projects for resume bullet points, we were forced to validate real market assumptions every week. By week 8, we had paying customers and our first angel backing.",
  },
  {
    id: "story-2",
    num: "02",
    title: "What a Semester at the Citadel Taught Me",
    category: "Learner Project Journey",
    summary: "A builder reflects on their first sprint cycle and what changed along the way.",
    contributor: "Builder Community",
    date: "Mar 2026",
    image: "/webp/6.webp",
    icon: BookOpen,
    tags: ["Citadel", "Sprint Cycle", "Engineering"],
    fullStory:
      "The Citadel is not just desks and fast Wi-Fi — it's an operating system for deep focus. Spending an entire semester shipping production-grade code alongside multidisciplinary teammates gave me three times the confidence of traditional coursework.",
  },
  {
    id: "story-3",
    num: "03",
    title: "Bringing FORGE to Our Campus",
    category: "Campus Activity",
    summary: "How one partner institution set up its first FORGE campus chapter.",
    contributor: "Partner Institution",
    date: "Feb 2026",
    image: "/webp/activation-builders.webp",
    icon: Building2,
    tags: ["Campus Chapter", "Institutional", "Activation"],
    fullStory:
      "Setting up a dedicated FORGE ecosystem hub on campus energized our student body. Faculty and industry mentors now collaborate in structured sprint reviews, creating an environment where engineering talent translates directly into industry-ready builders.",
  },
];

export default function StoriesSection() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const nextStory = () => {
    setActiveStoryIdx((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setActiveStoryIdx((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fafcff] py-16 md:py-24 border-b border-black/[0.06]">
      {/* Editorial Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Slow subtle ambient circles */}
        <div className="absolute -left-36 top-1/4 h-[450px] w-[450px] rounded-full bg-primary/[0.025] blur-3xl" />
        <div className="absolute -right-36 top-1/3 h-[450px] w-[450px] rounded-full bg-primary/[0.025] blur-3xl" />

        {/* Subtle decorative geometry */}
        <div className="absolute left-8 top-16 h-3 w-3 rounded-sm bg-primary/25" />
        <div className="absolute right-12 top-24 h-2 w-2 rounded-full bg-primary/30" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          {/* Left: Eyebrow and Heading */}
          <div>
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-xs">&rarr;</span>
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-jakarta text-xs font-bold uppercase tracking-[0.28em] text-primary">
                  STORIES FROM THE ECOSYSTEM
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-clash text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.08]">
                Real People.
                <br />
                <span className="text-primary">Real Journeys.</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Center / Right: Description & Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
            {/* Supporting Description */}
            <ScrollReveal delay={180} className="flex items-center gap-4">
              <div className="hidden sm:block h-14 w-[2px] bg-primary/40 shrink-0" />
              <p className="max-w-xs font-jakarta text-sm leading-relaxed text-foreground/70">
                Stories, experiences, and perspectives from across the FORGE
                ecosystem — builders, learners, educators, partners, and more.
              </p>
            </ScrollReveal>

            {/* Actions: View All & Carousel Nav */}
            <ScrollReveal delay={260} className="flex items-center gap-4 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => setSelectedStory(stories[0])}
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-5 py-2.5 font-jakarta text-xs font-semibold tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_4px_16px_rgba(0,82,255,0.25)]"
              >
                <span>View all stories</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevStory}
                  aria-label="Previous story"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-foreground/70 shadow-sm transition-all duration-300 hover:border-black/25 hover:text-foreground hover:shadow"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={nextStory}
                  aria-label="Next story"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-[0_4px_14px_rgba(0,82,255,0.28)] transition-all duration-300 hover:bg-primary/90 hover:scale-105"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Story Showcase Grid */}
        <div className="relative">
          {/* Far-Left Handwritten Editorial Accent (Desktop 2XL) */}
          <div className="pointer-events-none absolute -left-12 top-20 hidden 2xl:flex flex-col items-center gap-3">
            <div className="font-serif italic text-sm text-foreground/45 -rotate-12 select-none leading-snug text-center">
              People
              <br />
              Ideas
              <br />
              Progress
            </div>
            <div className="h-8 w-px bg-primary/30 mt-2" />
            <div className="h-2.5 w-2.5 rounded-sm bg-primary/80" />
          </div>

          {/* Far-Right Vertical Story Index Indicator (Desktop 2XL) */}
          <div className="pointer-events-none absolute -right-8 top-12 hidden 2xl:flex flex-col items-center gap-3 text-[11px] font-jakarta font-semibold text-foreground/35">
            <div className="flex items-center gap-1.5">
              <span className="h-3.5 w-[2px] bg-primary" />
              <span className="text-primary font-bold">01</span>
            </div>
            <span>02</span>
            <span>03</span>
          </div>

          {/* 3 Story Cards Container */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-7 items-stretch">
            {stories.map((story, index) => {
              const Icon = story.icon;
              // First story is slightly wider (~1.15x width)
              const colSpan =
                index === 0
                  ? "lg:col-span-5"
                  : index === 1
                  ? "lg:col-span-4"
                  : "lg:col-span-3";

              const delay = 300 + index * 120;

              return (
                <div key={story.id} className={`${colSpan} flex flex-col`}>
                  <ScrollReveal delay={delay} className="h-full">
                    <article
                      onClick={() => setSelectedStory(story)}
                      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-black/[0.06] bg-white p-3 pb-7 shadow-[0_8px_30px_rgba(20,50,90,0.04)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(20,50,90,0.1)] cursor-pointer"
                    >
                      {/* Image Frame */}
                      <div className="relative aspect-[16/10.5] w-full overflow-hidden rounded-[22px] bg-[#0f172a]">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
                        />

                        {/* Subtle Overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 opacity-70 transition-opacity duration-500 group-hover:opacity-85" />

                        {/* Story Index Top-Left */}
                        <div className="relative z-10 p-4 flex items-center gap-2">
                          <span className="font-varela text-xs font-bold tracking-widest text-white/90">
                            {story.num}
                          </span>
                          {index === 0 && <div className="h-px w-6 bg-white/40" />}
                        </div>

                        {/* Top-Right Circular Arrow Button */}
                        <div className="absolute right-3.5 top-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>

                        {/* Floating Category Pill */}
                        <div className="absolute bottom-3 left-3.5 z-10">
                          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-white/95 px-3 py-1 font-jakarta text-xs font-semibold text-primary shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-0.5">
                            <Icon className="h-3 w-3 text-primary" />
                            <span>{story.category}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="flex flex-col flex-grow px-3 pt-5">
                        <h3 className="font-clash text-lg sm:text-xl font-bold tracking-tight text-foreground leading-snug transition-colors duration-300 group-hover:text-primary">
                          {story.title}
                        </h3>

                        <p className="mt-2.5 font-jakarta text-xs sm:text-sm leading-relaxed text-foreground/70 line-clamp-3">
                          {story.summary}
                        </p>

                        {/* Meta Information */}
                        <div className="mt-auto pt-5 border-t border-black/[0.05] flex items-center justify-between text-xs font-jakarta text-foreground/50">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-primary/70" />
                            <span>
                              {story.contributor} &bull; {story.date}
                            </span>
                          </div>

                          <span className="font-semibold text-primary text-[11px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-0.5">
                            Read &rarr;
                          </span>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <ScrollReveal delay={650}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10 pt-6 text-center sm:text-left">
            <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.24em] text-foreground/45">
              &mdash; FROM CAMPUS. TO IMPACT.
            </span>
            <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.24em] text-foreground/45">
              A COMMUNITY FOR WHAT&apos;S NEXT. &mdash;
            </span>
          </div>
        </ScrollReveal>
      </div>

      {/* ──────────────────────────────────────────────────────────
          STORY DETAIL MODAL (Reader Experience)
      ────────────────────────────────────────────────────────── */}
      {selectedStory && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedStory(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md px-4 py-8 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-black/10"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedStory(null)}
              aria-label="Close story"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-foreground/70 transition-all hover:bg-black/10 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Story Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black/10">
              <Image
                src={selectedStory.image}
                alt={selectedStory.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Category & Tags */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-jakarta text-xs font-semibold text-primary">
                {selectedStory.category}
              </span>
              {selectedStory.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-black/5 px-2.5 py-0.5 font-jakarta text-[11px] text-foreground/60"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="mt-3 font-clash text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              {selectedStory.title}
            </h3>

            {/* Meta */}
            <p className="mt-1 font-jakarta text-xs text-foreground/50">
              {selectedStory.contributor} &bull; {selectedStory.date}
            </p>

            {/* Full Story Content */}
            <div className="mt-5 space-y-4 font-jakarta text-sm sm:text-base leading-relaxed text-foreground/80 border-t border-black/10 pt-4">
              <p>{selectedStory.summary}</p>
              <p className="bg-[#f4f8fd] p-4 rounded-xl border border-primary/15 text-foreground/85 italic">
                &ldquo;{selectedStory.fullStory}&rdquo;
              </p>
            </div>

            {/* Modal Bottom Action */}
            <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
              <span className="font-jakarta text-xs text-foreground/50 uppercase tracking-wider">
                FORGE Visual Archive &bull; Story {selectedStory.num}
              </span>
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="rounded-full bg-primary px-5 py-2 font-jakarta text-xs font-semibold text-white transition hover:bg-primary/90"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
