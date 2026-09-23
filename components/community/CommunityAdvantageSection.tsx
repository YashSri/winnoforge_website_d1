"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calendar,
  FlaskConical,
  Globe,
  GraduationCap,
  Hammer,
  Layers,
  Lightbulb,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CommunityAdvantageSection() {
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleBgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            eyebrowRef.current,
            ".advantage-heading-line",
            ".advantage-subtext",
            ...rowRefs.current.filter(Boolean),
          ],
          { opacity: 1, y: 0, transform: "none" }
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // 1. Eyebrow upward reveal
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );

      // 2. Heading reveals line-by-line (Learn. Build. Belong.)
      tl.fromTo(
        ".advantage-heading-line",
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // 3. Subtitle fade
      tl.fromTo(
        ".advantage-subtext",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      // 4. Sequential capability rows entrance
      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        tl.fromTo(
          row,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
          0.15 + index * 0.1
        );
      });

      // Micro parallax on background arc
      if (circleBgRef.current) {
        gsap.to(circleBgRef.current, {
          y: -24,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      aria-label="Community Advantage"
      className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-28"
    >
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BACKGROUND EDITORIAL ACCENTS & MARKS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* Top-Right Editorial Marker: SAME PEOPLE. BIGGER POSSIBILITIES. */}
      <div
        className="hidden 2xl:block pointer-events-none absolute top-10 right-10 text-right -z-10 select-none"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.24em] text-slate-400 font-medium uppercase block leading-tight">
          SAME PEOPLE.
          <br />
          BIGGER
          <br />
          POSSIBILITIES.
        </span>
      </div>

      {/* Right Edge Metadata Labels (Aligned with Rows) */}
      <div
        className="hidden 2xl:flex flex-col gap-28 pointer-events-none absolute top-[280px] right-10 text-left -z-10 select-none"
        aria-hidden="true"
      >
        <div>
          <span className="font-mono text-[10px] font-bold text-slate-400 block">01</span>
          <div className="w-4 h-[1px] bg-slate-300 my-1" />
          <span className="font-mono text-[8px] tracking-[0.22em] text-slate-400 font-medium uppercase leading-[1.6] block">
            SKILLS
            <br />
            IDEAS
            <br />
            EXECUTION
          </span>
        </div>
        <div>
          <span className="font-mono text-[10px] font-bold text-slate-400 block">02</span>
          <div className="w-4 h-[1px] bg-slate-300 my-1" />
          <span className="font-mono text-[8px] tracking-[0.22em] text-slate-400 font-medium uppercase leading-[1.6] block">
            BUILD
            <br />
            COLLABORATE
            <br />
            SOLVE
          </span>
        </div>
        <div>
          <span className="font-mono text-[10px] font-bold text-slate-400 block">03</span>
          <div className="w-4 h-[1px] bg-slate-300 my-1" />
          <span className="font-mono text-[8px] tracking-[0.22em] text-slate-400 font-medium uppercase leading-[1.6] block">
            EXPOSURE
            <br />
            GUIDANCE
            <br />
            OPPORTUNITIES
          </span>
        </div>
      </div>

      {/* Bottom-Right Editorial Stamp: A STRONGER TOMORROW, TOGETHER. */}
      <div
        className="hidden 2xl:block pointer-events-none absolute bottom-8 right-10 text-right -z-10 select-none"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.24em] text-slate-400 font-medium uppercase block leading-tight">
          A STRONGER
          <br />
          TOMORROW,
          <br />
          TOGETHER.
        </span>
      </div>

      {/* Background Subtle Curved Arc */}
      <div
        ref={circleBgRef}
        className="pointer-events-none absolute -left-28 bottom-1/4 w-[560px] h-[560px] rounded-full border border-[#004DE6]/[0.05] -z-10"
        aria-hidden="true"
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MAIN CONTAINER & ASYMMETRIC SWISS COMPOSITION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ──────────────────────────────────────────
              LEFT COLUMN: Editorial Anchor + Row 2 Photo + Footnote
              ────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch">
            
            {/* Top Headline Block */}
            <div className="pt-2 pb-6">
              {/* Eyebrow */}
              <div
                ref={eyebrowRef}
                className="flex items-center gap-3 mb-6"
                style={{ opacity: 0 }}
              >
                <span className="w-8 h-[1.5px] bg-[#004DE6]" aria-hidden="true" />
                <span className="font-jakarta text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#004DE6]">
                  COMMUNITY ADVANTAGE
                </span>
              </div>

              {/* Dominant 3-Line Heading: Learn. Build. Belong. */}
              <h2 className="font-clash text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-bold tracking-tight text-[#0A0D14] leading-[1.04] mb-6">
                <span className="block overflow-hidden pb-1">
                  <span className="advantage-heading-line block" style={{ opacity: 0 }}>
                    Learn.
                  </span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="advantage-heading-line block" style={{ opacity: 0 }}>
                    Build.
                  </span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="advantage-heading-line block text-[#004DE6]" style={{ opacity: 0 }}>
                    Belong.
                  </span>
                </span>
              </h2>

              {/* Subtitle */}
              <p
                className="advantage-subtext font-jakarta text-base sm:text-lg text-slate-500 leading-relaxed max-w-sm mb-7"
                style={{ opacity: 0 }}
              >
                A complete ecosystem to learn, create, collaborate, and grow — from campus to career.
              </p>

              {/* Interactive CTA: Circle Arrow + BE A PART OF WHAT'S NEXT. */}
              <div className="advantage-subtext flex items-center gap-3.5" style={{ opacity: 0 }}>
                <button
                  type="button"
                  aria-label="Be a part of what's next"
                  className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 transition-colors duration-300 hover:border-[#004DE6] hover:text-[#004DE6] shadow-sm"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 hover:translate-x-1" />
                </button>
                <span className="font-mono text-[10px] tracking-[0.2em] font-semibold text-slate-400 uppercase">
                  BE A PART
                  <br />
                  OF WHAT&apos;S NEXT.
                </span>
              </div>
            </div>

            {/* Row 2 Photo: "GOOD IDEAS BETTER PEOPLE" (Interlocked with Row 2) */}
            <div className="my-4 hidden lg:block">
              <div className="group relative rounded-[22px] overflow-hidden min-h-[220px] h-[230px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] bg-slate-100">
                <Image
                  src="/community/advantage/good_ideas_better_people.png"
                  alt="Collaborators gathered under wall text: Good Ideas Better People"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />
              </div>
            </div>

            {/* Bottom-Left Swiss Editorial Stamp */}
            <div className="hidden lg:block pt-8 pb-2">
              <span className="font-mono text-[9px] tracking-[0.24em] text-slate-400 font-medium uppercase block leading-[1.8]">
                IDEAS
                <br />
                PEOPLE
                <br />
                PROGRESS
                <br />
                BELONG HERE.
              </span>
            </div>

          </div>

          {/* ──────────────────────────────────────────
              RIGHT COLUMN: Three Stacked Capability Rows
              ────────────────────────────────────────── */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* ── ROW 01: LEARNING & DEVELOPMENT ── */}
            <div
              ref={(el) => { rowRefs.current[0] = el; }}
              style={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch"
            >
              {/* White Card Container (~68% width on desktop) */}
              <div className="md:col-span-8 group relative bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_42px_rgba(15,23,42,0.08)] hover:border-slate-300">
                {/* Header: Number, Label, Circular Arrow */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-wider text-[#004DE6]">
                        01
                      </span>
                      <div className="w-5 h-[2px] bg-[#004DE6] mt-0.5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.2em] font-semibold text-slate-500 uppercase">
                      LEARNING & DEVELOPMENT
                    </span>
                  </div>
                  <button
                    type="button"
                    aria-label="Learn more about Learning & Development"
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* 3 Capability Items */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6">
                  {/* Item 1 */}
                  <div>
                    <div className="w-9 h-9 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center mb-3 transition-transform duration-300 group-hover:-translate-y-0.5">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <h3 className="font-clash text-sm sm:text-[15px] font-bold text-[#0A0D14] tracking-tight leading-snug mb-1.5">
                      Exclusive Access to Events
                    </h3>
                    <p className="font-jakarta text-xs text-slate-500 leading-relaxed">
                      Be part of workshops, hackathons, and sessions designed to push ideas into execution.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div>
                    <div className="w-9 h-9 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center mb-3 transition-transform duration-300 group-hover:-translate-y-0.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <h3 className="font-clash text-sm sm:text-[15px] font-bold text-[#0A0D14] tracking-tight leading-snug mb-1.5">
                      Continuous Learning Cycles
                    </h3>
                    <p className="font-jakarta text-xs text-slate-500 leading-relaxed">
                      Learn, apply, and iterate through structured cycles that ensure consistent growth and real skill development.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div>
                    <div className="w-9 h-9 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center mb-3 transition-transform duration-300 group-hover:-translate-y-0.5">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <h3 className="font-clash text-sm sm:text-[15px] font-bold text-[#0A0D14] tracking-tight leading-snug mb-1.5">
                      Idea to Execution
                    </h3>
                    <p className="font-jakarta text-xs text-slate-500 leading-relaxed">
                      Transform your ideas into real-world outcomes by building, testing, and refining solutions step by step.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full-Color Image Panel: Notebook (~32% width on desktop) */}
              <div className="md:col-span-4 group relative rounded-[22px] overflow-hidden min-h-[180px] sm:min-h-full border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] bg-slate-900">
                <Image
                  src="/community/advantage/learn_create_build_belong.png"
                  alt="Notebook with text: Learn Create Build Belong"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />
              </div>
            </div>

            {/* ── ROW 02: PRACTICAL EXPERIENCE (Vibrant FORGE Blue Feature Card) ── */}
            <div
              ref={(el) => { rowRefs.current[1] = el; }}
              style={{ opacity: 0 }}
              className="flex flex-col"
            >
              {/* Mobile image preview for Row 2 (visible only on small screens) */}
              <div className="block lg:hidden group relative rounded-[22px] overflow-hidden h-[180px] mb-4 border border-black/[0.06] bg-slate-100">
                <Image
                  src="/community/advantage/good_ideas_better_people.png"
                  alt="Collaborators gathered under wall text: Good Ideas Better People"
                  fill
                  sizes="100vw"
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />
              </div>

              {/* Blue Feature Card */}
              <div className="group relative bg-[#004DE6] rounded-[22px] border border-blue-400/30 shadow-[0_12px_36px_rgba(0,77,230,0.25)] p-6 sm:p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(0,77,230,0.4)] hover:border-white/40">
                {/* Header: Number, Label, Circular Arrow */}
                <div className="flex items-center justify-between pb-6 border-b border-white/15">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-wider text-white">
                        02
                      </span>
                      <div className="w-5 h-[2px] bg-white/70 mt-0.5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.2em] font-semibold text-white/90 uppercase">
                      PRACTICAL EXPERIENCE
                    </span>
                  </div>
                  <button
                    type="button"
                    aria-label="Learn more about Practical Experience"
                    className="w-8 h-8 rounded-full border border-white/30 bg-transparent flex items-center justify-center text-white transition-all duration-300 group-hover:border-white group-hover:bg-white/10"
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* 3 Capability Items */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6">
                  {/* Item 1 */}
                  <div>
                    <div className="w-9 h-9 rounded-full bg-white/15 text-white flex items-center justify-center mb-3 transition-transform duration-300 group-hover:-translate-y-0.5">
                      <FlaskConical className="w-4 h-4" />
                    </div>
                    <h3 className="font-clash text-sm sm:text-[15px] font-bold text-white tracking-tight leading-snug mb-1.5">
                      Research & Development
                    </h3>
                    <p className="font-jakarta text-xs text-white/85 leading-relaxed">
                      Work on emerging ideas, explore new technologies, and contribute to real innovation projects.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div>
                    <div className="w-9 h-9 rounded-full bg-white/15 text-white flex items-center justify-center mb-3 transition-transform duration-300 group-hover:-translate-y-0.5">
                      <Globe className="w-4 h-4" />
                    </div>
                    <h3 className="font-clash text-sm sm:text-[15px] font-bold text-white tracking-tight leading-snug mb-1.5">
                      Real-world Collaboration
                    </h3>
                    <p className="font-jakarta text-xs text-white/85 leading-relaxed">
                      Work alongside peers, mentors, and industry experts to solve real problems and build meaningful solutions together.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div>
                    <div className="w-9 h-9 rounded-full bg-white/15 text-white flex items-center justify-center mb-3 transition-transform duration-300 group-hover:-translate-y-0.5">
                      <Hammer className="w-4 h-4" />
                    </div>
                    <h3 className="font-clash text-sm sm:text-[15px] font-bold text-white tracking-tight leading-snug mb-1.5">
                      Builder-first Environment
                    </h3>
                    <p className="font-jakarta text-xs text-white/85 leading-relaxed">
                      Focus on creating, experimenting, and shipping ideas quickly in a hands-on, maker-driven ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── ROW 03: CAREER & INDUSTRY ── */}
            <div
              ref={(el) => { rowRefs.current[2] = el; }}
              style={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch"
            >
              {/* White Card Container (~68% width on desktop) */}
              <div className="md:col-span-8 group relative bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_42px_rgba(15,23,42,0.08)] hover:border-slate-300">
                {/* Header: Number, Label, Circular Arrow */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-wider text-[#004DE6]">
                        03
                      </span>
                      <div className="w-5 h-[2px] bg-[#004DE6] mt-0.5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.2em] font-semibold text-slate-500 uppercase">
                      CAREER & INDUSTRY
                    </span>
                  </div>
                  <button
                    type="button"
                    aria-label="Learn more about Career & Industry"
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* 3 Capability Items */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6">
                  {/* Item 1 */}
                  <div>
                    <div className="w-9 h-9 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center mb-3 transition-transform duration-300 group-hover:-translate-y-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h3 className="font-clash text-sm sm:text-[15px] font-bold text-[#0A0D14] tracking-tight leading-snug mb-1.5">
                      Institutional Collaborations
                    </h3>
                    <p className="font-jakarta text-xs text-slate-500 leading-relaxed">
                      FORGE partners with leading institutions through MoUs to build structured innovation ecosystems.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div>
                    <div className="w-9 h-9 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center mb-3 transition-transform duration-300 group-hover:-translate-y-0.5">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3 className="font-clash text-sm sm:text-[15px] font-bold text-[#0A0D14] tracking-tight leading-snug mb-1.5">
                      Industry Exposure
                    </h3>
                    <p className="font-jakarta text-xs text-slate-500 leading-relaxed">
                      Gain insights into real industry practices through interactions, mentorship, and hands-on experiences with professionals.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div>
                    <div className="w-9 h-9 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center mb-3 transition-transform duration-300 group-hover:-translate-y-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h3 className="font-clash text-sm sm:text-[15px] font-bold text-[#0A0D14] tracking-tight leading-snug mb-1.5">
                      Career Pathways
                    </h3>
                    <p className="font-jakarta text-xs text-slate-500 leading-relaxed">
                      Explore structured opportunities, guidance, and support to navigate your career and unlock future possibilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full-Color Image Panel: Campus Stairs (~32% width on desktop) */}
              <div className="md:col-span-4 group relative rounded-[22px] overflow-hidden min-h-[180px] sm:min-h-full border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] bg-slate-900">
                <Image
                  src="/community/advantage/same_people_stairs.png"
                  alt="Students climbing stairs with wall text: Same People. Bigger Possibilities."
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
