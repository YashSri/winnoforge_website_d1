"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  FileText,
  GraduationCap,
  Share2,
  TrendingUp,
  Users,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CommunityParticipationLoop() {
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleBgRef = useRef<HTMLDivElement>(null);
  const arcBgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            eyebrowRef.current,
            ".loop-heading-line",
            ".loop-subheading",
            ...cardRefs.current.filter(Boolean),
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

      // 2. Heading reveals line-by-line
      tl.fromTo(
        ".loop-heading-line",
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
        ".loop-subheading",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      // 4. Sequential card entrance
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        tl.fromTo(
          card,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          0.15 + index * 0.07
        );
      });

      // Micro parallax on background accents
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

      if (arcBgRef.current) {
        gsap.to(arcBgRef.current, {
          y: 18,
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
      aria-label="Community Participation Loop"
      className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-28"
    >
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BACKGROUND EDITORIAL ACCENTS & MARKS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* Top-Left Blue Square */}
      <div
        className="pointer-events-none absolute top-10 left-6 sm:left-10 lg:left-14 w-2.5 h-2.5 bg-[#004DE6] -z-10"
        aria-hidden="true"
      />

      {/* Center-Left Editorial Marker: FROM CAMPUS TO IMPACT. */}
      <div
        className="hidden 2xl:flex flex-col items-center gap-4 pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 -z-10 select-none text-center"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.26em] text-slate-400 font-medium uppercase leading-[1.8] block">
          FROM
          <br />
          CAMPUS
          <br />
          TO
          <br />
          IMPACT.
        </span>
        <div className="w-2.5 h-2.5 bg-[#004DE6] mt-1" />
      </div>

      {/* Bottom-Left Editorial Stamp: FORGE A COMMUNITY FOR WHAT'S NEXT */}
      <div
        className="hidden 2xl:block pointer-events-none absolute bottom-8 left-6 -z-10 select-none"
        aria-hidden="true"
      >
        <span className="font-clash text-xs font-bold tracking-[0.16em] text-slate-400 uppercase block">
          FORGE
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em] text-slate-400 font-medium uppercase block mt-0.5">
          A COMMUNITY
          <br />
          FOR WHAT&apos;S NEXT.
        </span>
      </div>

      {/* Top-Right Editorial Marker: PEOPLE IDEAS PROGRESS BELONG HERE */}
      <div
        className="hidden 2xl:block pointer-events-none absolute top-10 right-8 text-right -z-10 select-none"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.24em] text-slate-400 font-medium uppercase block leading-[1.8]">
          PEOPLE
          <br />
          IDEAS
          <br />
          PROGRESS
          <br />
          BELONG HERE.
        </span>
      </div>

      {/* Bottom-Right Editorial Stamp: 07 SAME PEOPLE BIGGER POSSIBILITIES */}
      <div
        className="hidden 2xl:flex flex-col items-end gap-3 pointer-events-none absolute bottom-8 right-8 text-right -z-10 select-none"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] font-bold text-slate-400 block">
          07
        </span>
        <div className="w-8 h-[1px] bg-slate-300" />
        <span className="font-mono text-[9px] tracking-[0.22em] text-slate-400 font-medium uppercase leading-[1.7] block">
          SAME
          <br />
          PEOPLE.
          <br />
          BIGGER
          <br />
          POSSIBILITIES.
        </span>
        <div className="w-2.5 h-2.5 bg-[#004DE6]" />
      </div>

      {/* Background Subtle Curved Arcs */}
      <div
        ref={circleBgRef}
        className="pointer-events-none absolute -right-28 top-1/3 w-[560px] h-[560px] rounded-full border border-[#004DE6]/[0.05] -z-10"
        aria-hidden="true"
      />
      <div
        ref={arcBgRef}
        className="pointer-events-none absolute -left-36 bottom-10 w-[500px] h-[500px] rounded-full border border-[#004DE6]/[0.04] -z-10"
        aria-hidden="true"
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MAIN CONTAINER & ASYMMETRIC EDITORIAL MOSAIC
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-10">
        
        {/* ──────────────────────────────────────────
            ROW 1: Heading Block + Card 01 [Discover] + Card 02 [Participate Feature]
            ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Header & Subtitle Block (Cols 1–5) */}
          <div className="lg:col-span-5 flex flex-col justify-between py-1 pr-2">
            <div>
              {/* Eyebrow */}
              <div
                ref={eyebrowRef}
                className="flex items-center gap-3 mb-5"
                style={{ opacity: 0 }}
              >
                <span className="w-8 h-[1.5px] bg-[#004DE6]" aria-hidden="true" />
                <span className="font-jakarta text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#004DE6]">
                  COMMUNITY PARTICIPATION LOOP
                </span>
              </div>

              {/* Dominant 3-Line Heading */}
              <h2 className="font-clash text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-bold tracking-tight text-[#0A0D14] leading-[1.05] mb-6">
                <span className="block overflow-hidden pb-1">
                  <span className="loop-heading-line block" style={{ opacity: 0 }}>
                    Participate.
                  </span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="loop-heading-line block" style={{ opacity: 0 }}>
                    Contribute.
                  </span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="loop-heading-line block text-[#004DE6]" style={{ opacity: 0 }}>
                    Grow Together.
                  </span>
                </span>
              </h2>

              {/* Subtitle */}
              <p
                className="loop-subheading font-jakarta text-base sm:text-lg text-slate-500 leading-relaxed max-w-sm"
                style={{ opacity: 0 }}
              >
                A simple loop with a lasting impact. Join, learn, build, and help shape what&apos;s next with the FORGE community.
              </p>
            </div>
          </div>

          {/* CARD 01: Discover (Cols 6–8) */}
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            style={{ opacity: 0 }}
            className="lg:col-span-3 group relative flex flex-col justify-between bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 min-h-[250px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_20px_42px_rgba(15,23,42,0.08)] hover:border-slate-300"
          >
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-bold tracking-wider text-slate-700">
                    01
                  </span>
                  <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                  <BookOpen className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-clash text-xl font-bold text-[#0A0D14] tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-[2px]">
                Discover
              </h3>
              <p className="font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                Find a program, event, discussion, project, or community activity.
              </p>
            </div>

            <div className="pt-6 flex items-center justify-between gap-3">
              <span className="font-mono text-[9px] tracking-[0.2em] font-semibold text-slate-400 uppercase">
                LEARN AND EXPLORE
              </span>
              <button
                type="button"
                aria-label="Discover community activities"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
              >
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* CARD 02: Participate (LARGE FEATURE CARD - Cols 9–12) */}
          <div
            ref={(el) => { cardRefs.current[1] = el; }}
            style={{ opacity: 0 }}
            className="lg:col-span-4 group relative flex flex-col sm:flex-row bg-[#0B1528] rounded-[22px] border border-white/10 shadow-[0_12px_36px_rgba(11,21,40,0.25)] overflow-hidden min-h-[250px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,77,230,0.18)] hover:border-blue-400/30"
          >
            {/* Left Content Area */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
              <div>
                <div>
                  <span className="font-mono text-xs font-bold tracking-wider text-white/90">
                    02
                  </span>
                  <div className="w-4 h-[2px] bg-[#60A5FA] mt-1" aria-hidden="true" />
                </div>

                <h3 className="font-clash text-xl sm:text-2xl font-bold text-white tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-[2px]">
                  Participate
                </h3>
                <p className="font-jakarta text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-[200px]">
                  Join a session, challenge, workshop, or conversation.
                </p>
              </div>

              <div className="pt-6 flex items-center justify-between gap-3">
                <span className="font-mono text-[9px] tracking-[0.2em] font-semibold text-white/40 uppercase">
                  BE A PART OF THE COMMUNITY.
                </span>
                <button
                  type="button"
                  aria-label="Participate in FORGE"
                  className="w-8 h-8 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white transition-all duration-300 group-hover:border-white/50 group-hover:bg-white/10"
                >
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Photo Block with Icon Badge */}
            <div className="relative w-full sm:w-[48%] min-h-[170px] sm:min-h-full overflow-hidden bg-slate-900">
              <Image
                src="/community/loop/participate_photo.jpg"
                alt="Community members participating together in a FORGE session"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
              />
              {/* Users Icon Badge */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[2px]">
                <Users className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>

        {/* ──────────────────────────────────────────
            ROW 2: Connect (03) + Contribute (04) + Build (05) + Image Card
            ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch mt-5 lg:mt-6">
          
          {/* CARD 03: Connect (Cols 1–3) */}
          <div
            ref={(el) => { cardRefs.current[2] = el; }}
            style={{ opacity: 0 }}
            className="lg:col-span-3 group relative flex flex-col justify-between bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 min-h-[250px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_20px_42px_rgba(15,23,42,0.08)] hover:border-slate-300"
          >
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-bold tracking-wider text-slate-700">
                    03
                  </span>
                  <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                  <Share2 className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-clash text-xl font-bold text-[#0A0D14] tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-[2px]">
                Connect
              </h3>
              <p className="font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                Meet peers, mentors, educators, founders, or industry contributors.
              </p>
            </div>

            <div className="pt-6 flex items-center justify-between gap-3">
              <span className="font-mono text-[9px] tracking-[0.2em] font-semibold text-slate-400 uppercase">
                BUILD MEANINGFUL CONNECTIONS.
              </span>
              <button
                type="button"
                aria-label="Connect with the community"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
              >
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* CARD 04: Contribute (FORGE BLUE FEATURE CARD - Cols 4–6) */}
          <div
            ref={(el) => { cardRefs.current[3] = el; }}
            style={{ opacity: 0 }}
            className="lg:col-span-3 group relative flex flex-col justify-between bg-[#004DE6] rounded-[22px] border border-blue-400/30 shadow-[0_8px_32px_rgba(0,77,230,0.28)] p-6 sm:p-7 min-h-[250px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,77,230,0.4)] hover:border-white/40"
          >
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-bold tracking-wider text-white">
                    04
                  </span>
                  <div className="w-4 h-[2px] bg-white/70 mt-1" aria-hidden="true" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-clash text-xl font-bold text-white tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-[2px]">
                Contribute
              </h3>
              <p className="font-jakarta text-xs sm:text-[13px] text-white/85 leading-relaxed">
                Share knowledge, ask questions, review work, or support a project.
              </p>
            </div>

            <div className="pt-6 flex items-center justify-between gap-3">
              <span className="font-mono text-[9px] tracking-[0.2em] font-semibold text-white/75 uppercase">
                HELP OTHERS GROW.
              </span>
              <button
                type="button"
                aria-label="Contribute to the community"
                className="w-8 h-8 rounded-full border border-white/30 bg-transparent flex items-center justify-center text-white transition-all duration-300 group-hover:border-white group-hover:bg-white/10"
              >
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* CARD 05: Build (Cols 7–9) */}
          <div
            ref={(el) => { cardRefs.current[4] = el; }}
            style={{ opacity: 0 }}
            className="lg:col-span-3 group relative flex flex-col justify-between bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 min-h-[250px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_20px_42px_rgba(15,23,42,0.08)] hover:border-slate-300"
          >
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-bold tracking-wider text-slate-700">
                    05
                  </span>
                  <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                  <FileText className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-clash text-xl font-bold text-[#0A0D14] tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-[2px]">
                Build
              </h3>
              <p className="font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                Work with others on an idea, prototype, project, or initiative.
              </p>
            </div>

            <div className="pt-6 flex items-center justify-between gap-3">
              <span className="font-mono text-[9px] tracking-[0.2em] font-semibold text-slate-400 uppercase">
                TURN IDEAS INTO IMPACT.
              </span>
              <button
                type="button"
                aria-label="Build projects at FORGE"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
              >
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* EDITORIAL IMAGE CARD: GOOD PEOPLE BETTER IDEAS (Cols 10–12) */}
          <div
            ref={(el) => { cardRefs.current[5] = el; }}
            style={{ opacity: 0 }}
            className="lg:col-span-3 group relative rounded-[22px] overflow-hidden min-h-[250px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] bg-slate-100"
          >
            <Image
              src="/community/loop/good_people_ideas.jpg"
              alt="FORGE space with sign: Good People Better Ideas"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
            />
          </div>

        </div>

        {/* ──────────────────────────────────────────
            ROW 3: Share (06 - Wide Navy Card) + Continue (07 - White Card)
            ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch mt-5 lg:mt-6">
          
          {/* CARD 06: Share (WIDE DEEP NAVY FEATURE CARD - Cols 1–8) */}
          <div
            ref={(el) => { cardRefs.current[6] = el; }}
            style={{ opacity: 0 }}
            className="lg:col-span-8 group relative flex flex-col sm:flex-row bg-[#0B1528] rounded-[22px] border border-white/10 shadow-[0_12px_36px_rgba(11,21,40,0.25)] overflow-hidden min-h-[235px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,77,230,0.18)] hover:border-blue-400/30"
          >
            {/* Left Content Area */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
              <div>
                <div>
                  <span className="font-mono text-xs font-bold tracking-wider text-white/90">
                    06
                  </span>
                  <div className="w-4 h-[2px] bg-[#60A5FA] mt-1" aria-hidden="true" />
                </div>

                <h3 className="font-clash text-xl sm:text-2xl font-bold text-white tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-[2px]">
                  Share
                </h3>
                <p className="font-jakarta text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-sm">
                  Present progress, publish approved learnings, or participate in a showcase.
                </p>
              </div>

              <div className="pt-6 flex items-center justify-between gap-3">
                <span className="font-mono text-[9px] tracking-[0.2em] font-semibold text-white/40 uppercase">
                  SHARE WHAT YOU BUILD.
                </span>
                <button
                  type="button"
                  aria-label="Share learnings and progress"
                  className="w-8 h-8 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white transition-all duration-300 group-hover:border-white/50 group-hover:bg-white/10"
                >
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Photo Area */}
            <div className="relative w-full sm:w-[48%] min-h-[170px] sm:min-h-full overflow-hidden bg-slate-900">
              <Image
                src="/community/loop/share_room.jpg"
                alt="Community showcase and discussion room at FORGE"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
              />
            </div>
          </div>

          {/* CARD 07: Continue (Cols 9–12) */}
          <div
            ref={(el) => { cardRefs.current[7] = el; }}
            style={{ opacity: 0 }}
            className="lg:col-span-4 group relative flex flex-col justify-between bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 min-h-[235px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_20px_42px_rgba(15,23,42,0.08)] hover:border-slate-300"
          >
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-bold tracking-wider text-slate-700">
                    07
                  </span>
                  <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-clash text-xl font-bold text-[#0A0D14] tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-[2px]">
                Continue
              </h3>
              <p className="font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                Explore the next activity, pathway, or opportunity within the ecosystem.
              </p>
            </div>

            <div className="pt-6 flex items-center justify-between gap-3">
              <span className="font-mono text-[9px] tracking-[0.2em] font-semibold text-slate-400 uppercase">
                WHAT&apos;S NEXT.
              </span>
              <button
                type="button"
                aria-label="Continue ecosystem opportunities"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
              >
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
