"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Database,
  FileText,
  GraduationCap,
  Lock,
  Megaphone,
  MessageSquare,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Guideline {
  num: string;
  title: string;
  description: string;
  icon: typeof Users;
  isSpecial?: boolean;
}

const guidelines: Guideline[] = [
  {
    num: "01",
    title: "Respect the Room",
    description: "Bring curiosity, respect, and openness to every conversation.",
    icon: Users,
  },
  {
    num: "02",
    title: "Stay Curious",
    description: "Ask questions. Challenge ideas. Keep learning.",
    icon: GraduationCap,
  },
  {
    num: "03",
    title: "Make Feedback Useful",
    description: "Be honest, specific, and constructive. Help the work move forward.",
    icon: MessageSquare,
  },
  {
    num: "04",
    title: "Own Your Work",
    description: "Stand behind your ideas, contributions, and commitments.",
    icon: FileText,
  },
  {
    num: "05",
    title: "Protect What Matters",
    description: "Respect privacy, confidentiality, and the trust of the community.",
    icon: Lock,
  },
  {
    num: "06",
    title: "Keep It Safe",
    description: "No harassment, discrimination, intimidation, or behaviour that makes others feel unwelcome.",
    icon: ShieldCheck,
  },
  {
    num: "07",
    title: "Give Credit",
    description: "Acknowledge the people, ideas, and sources that helped shape the work.",
    icon: Database,
  },
  {
    num: "08",
    title: "Share Responsibly",
    description: "Use community spaces, resources, and knowledge with care.",
    icon: Megaphone,
    isSpecial: true,
  },
];

export default function CommunityGuidelines() {
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
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
            ".guideline-heading-line",
            ".guideline-subtext",
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

      // 2. Heading reveals line-by-line (Build Better. Think Bigger. Grow Together.)
      tl.fromTo(
        ".guideline-heading-line",
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
        ".guideline-subtext",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      // 4. Sequential guideline cards entrance
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        tl.fromTo(
          card,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
          0.12 + index * 0.05
        );
      });

      // Micro parallax on background arc
      if (circleBgRef.current) {
        gsap.to(circleBgRef.current, {
          y: -20,
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
      aria-label="The FORGE Code"
      className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-28"
    >
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BACKGROUND EDITORIAL ACCENTS & MARKS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* Top-Right Editorial Marker: A STRONGER TOMORROW, TOGETHER. */}
      <div
        className="hidden 2xl:block pointer-events-none absolute top-10 right-10 text-right -z-10 select-none"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.24em] text-slate-400 font-medium uppercase block leading-tight">
          A STRONGER
          <br />
          TOMORROW,
          <br />
          TOGETHER.
        </span>
        <div className="w-8 h-[1px] bg-slate-300 ml-auto mt-2" />
      </div>

      {/* Background Subtle Curved Arc */}
      <div
        ref={circleBgRef}
        className="pointer-events-none absolute -right-28 top-1/4 w-[540px] h-[540px] rounded-full border border-[#004DE6]/[0.05] -z-10"
        aria-hidden="true"
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MAIN CONTAINER & ASYMMETRIC SWISS MOSAIC
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ──────────────────────────────────────────
              LEFT COLUMN: Editorial Manifesto & Banner
              ────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch">
            
            {/* Top Typography Block */}
            <div className="pt-2 pb-6">
              {/* Eyebrow */}
              <div
                ref={eyebrowRef}
                className="flex items-center gap-3 mb-6"
                style={{ opacity: 0 }}
              >
                <span className="w-8 h-[1.5px] bg-[#004DE6]" aria-hidden="true" />
                <span className="font-jakarta text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#004DE6]">
                  THE FORGE CODE
                </span>
              </div>

              {/* Dominant 3-Line Heading: Build Better. Think Bigger. Grow Together. */}
              <h2 className="font-clash text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold tracking-tight text-[#0A0D14] leading-[1.04] mb-6">
                <span className="block overflow-hidden pb-1">
                  <span className="guideline-heading-line block" style={{ opacity: 0 }}>
                    Build Better.
                  </span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="guideline-heading-line block" style={{ opacity: 0 }}>
                    Think Bigger.
                  </span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="guideline-heading-line block text-[#004DE6]" style={{ opacity: 0 }}>
                    Grow Together.
                  </span>
                </span>
              </h2>

              {/* Supporting Paragraph */}
              <p
                className="guideline-subtext font-jakarta text-base sm:text-lg text-slate-500 leading-relaxed max-w-sm mb-7"
                style={{ opacity: 0 }}
              >
                A strong community is built on how we learn, how we collaborate, and how we treat the people building alongside us.
              </p>

              {/* Interactive CTA: Circle Arrow + BETTER PEOPLE. BOLDER IDEAS. */}
              <div className="guideline-subtext flex items-center gap-3.5" style={{ opacity: 0 }}>
                <button
                  type="button"
                  aria-label="Better people bolder ideas"
                  className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 transition-colors duration-300 hover:border-[#004DE6] hover:text-[#004DE6] shadow-sm"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 hover:translate-x-1" />
                </button>
                <span className="font-mono text-[10px] tracking-[0.2em] font-semibold text-slate-400 uppercase">
                  BETTER PEOPLE.
                  <br />
                  BOLDER IDEAS.
                </span>
              </div>
            </div>

            {/* Bottom Campus Landscape Banner Card */}
            <div className="my-6 hidden lg:block">
              <div className="group relative rounded-[22px] overflow-hidden h-[180px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] bg-slate-900">
                <Image
                  src="/community/guidelines/campus_building_banner.png"
                  alt="FORGE Campus Building with trees and sky"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />
                {/* Left Deep Navy Badge Overlay */}
                <div className="absolute inset-y-0 left-0 w-[42%] bg-[#0B1528]/95 p-5 flex flex-col justify-between backdrop-blur-xs">
                  <span className="font-mono text-[9px] tracking-[0.22em] text-[#60A5FA] uppercase font-semibold">
                    FORGE ECOSYSTEM
                  </span>
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white font-bold leading-relaxed uppercase block">
                      SAME
                      <br />
                      PEOPLE.
                      <br />
                      BIGGER
                      <br />
                      POSSIBILITIES.
                    </span>
                    <div className="w-6 h-[1.5px] bg-[#004DE6] mt-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="hidden lg:block pt-4 pb-2">
              <span className="font-clash text-xs font-bold tracking-[0.18em] text-[#0A0D14] uppercase block">
                BUILD WITH PEOPLE.
              </span>
              <span className="font-clash text-xs font-bold tracking-[0.18em] text-[#004DE6] uppercase block mt-1">
                BUILD WITH PURPOSE.
              </span>
            </div>

          </div>

          {/* ──────────────────────────────────────────
              RIGHT COLUMN: Asymmetric Guidelines Mosaic
              ────────────────────────────────────────── */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            
            {/* ── ROW 1: Card 01 + Card 02 + Vertical Steps Feature + Atrium Pillar ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
              
              {/* CARD 01: Respect the Room (Cols 1–3) */}
              <div
                ref={(el) => { cardRefs.current[0] = el; }}
                style={{ opacity: 0 }}
                className="lg:col-span-4 group relative bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:bg-[#F7FAFF] hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-wider text-[#004DE6] transition-transform duration-300 group-hover:translate-x-1">
                        01
                      </span>
                      <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-clash text-lg font-bold text-[#0A0D14] tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
                    Respect the Room
                  </h3>
                  <p className="font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                    Bring curiosity, respect, and openness to every conversation.
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between gap-3">
                  <div className="h-[1px] bg-slate-200 w-[30%] group-hover:w-[65%] transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <button
                    type="button"
                    aria-label="Respect the Room"
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* CARD 02: Stay Curious (Cols 4–6) */}
              <div
                ref={(el) => { cardRefs.current[1] = el; }}
                style={{ opacity: 0 }}
                className="lg:col-span-4 group relative bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:bg-[#F7FAFF] hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-wider text-[#004DE6] transition-transform duration-300 group-hover:translate-x-1">
                        02
                      </span>
                      <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-clash text-lg font-bold text-[#0A0D14] tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
                    Stay Curious
                  </h3>
                  <p className="font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                    Ask questions. Challenge ideas. Keep learning.
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between gap-3">
                  <div className="h-[1px] bg-slate-200 w-[30%] group-hover:w-[65%] transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <button
                    type="button"
                    aria-label="Stay Curious"
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* VERTICAL ATRIUM PILLAR PHOTO (Cols 7–12, spanning right) */}
              <div
                ref={(el) => { cardRefs.current[2] = el; }}
                style={{ opacity: 0 }}
                className="lg:col-span-4 group relative rounded-[22px] overflow-hidden min-h-[220px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] bg-slate-100"
              >
                <Image
                  src="/community/guidelines/forge_pillar_atrium.png"
                  alt="Modern atrium with FORGE blue pillar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 300px"
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />
              </div>

            </div>

            {/* ── ROW 2: Card 03 + Workshop Photo + Card 04 + Card 05 ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
              
              {/* CARD 03: Make Feedback Useful (Cols 1–4) */}
              <div
                ref={(el) => { cardRefs.current[3] = el; }}
                style={{ opacity: 0 }}
                className="lg:col-span-4 group relative bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:bg-[#F7FAFF] hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-wider text-[#004DE6] transition-transform duration-300 group-hover:translate-x-1">
                        03
                      </span>
                      <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-clash text-lg font-bold text-[#0A0D14] tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
                    Make Feedback Useful
                  </h3>
                  <p className="font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                    Be honest, specific, and constructive. Help the work move forward.
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between gap-3">
                  <div className="h-[1px] bg-slate-200 w-[30%] group-hover:w-[65%] transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <button
                    type="button"
                    aria-label="Make Feedback Useful"
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* CENTER WORKSHOP PHOTO (Cols 5–6 on desktop) */}
              <div
                ref={(el) => { cardRefs.current[4] = el; }}
                style={{ opacity: 0 }}
                className="lg:col-span-2 group relative rounded-[22px] overflow-hidden min-h-[180px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] bg-slate-900"
              >
                <Image
                  src="/community/guidelines/students_workshop_coding.png"
                  alt="Students coding on laptops in workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 180px"
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />
              </div>

              {/* CARD 04: Own Your Work (Cols 7–9) */}
              <div
                ref={(el) => { cardRefs.current[5] = el; }}
                style={{ opacity: 0 }}
                className="lg:col-span-3 group relative bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:bg-[#F7FAFF] hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-wider text-[#004DE6] transition-transform duration-300 group-hover:translate-x-1">
                        04
                      </span>
                      <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                      <FileText className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-clash text-lg font-bold text-[#0A0D14] tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
                    Own Your Work
                  </h3>
                  <p className="font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                    Stand behind your ideas, contributions, and commitments.
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between gap-3">
                  <div className="h-[1px] bg-slate-200 w-[30%] group-hover:w-[65%] transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <button
                    type="button"
                    aria-label="Own Your Work"
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* CARD 05: Protect What Matters (Cols 10–12) */}
              <div
                ref={(el) => { cardRefs.current[6] = el; }}
                style={{ opacity: 0 }}
                className="lg:col-span-3 group relative bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:bg-[#F7FAFF] hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-wider text-[#004DE6] transition-transform duration-300 group-hover:translate-x-1">
                        05
                      </span>
                      <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                      <Lock className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-clash text-lg font-bold text-[#0A0D14] tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
                    Protect What Matters
                  </h3>
                  <p className="font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                    Respect privacy, confidentiality, and the trust of the community.
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between gap-3">
                  <div className="h-[1px] bg-slate-200 w-[30%] group-hover:w-[65%] transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <button
                    type="button"
                    aria-label="Protect What Matters"
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

            </div>

            {/* ── ROW 3: Card 06 + Card 07 + Card 08 (Blue Tint) + Editorial Impact Panel ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
              
              {/* CARD 06: Keep It Safe (Cols 1–3) */}
              <div
                ref={(el) => { cardRefs.current[7] = el; }}
                style={{ opacity: 0 }}
                className="lg:col-span-3 group relative bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:bg-[#F7FAFF] hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-wider text-[#004DE6] transition-transform duration-300 group-hover:translate-x-1">
                        06
                      </span>
                      <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-clash text-lg font-bold text-[#0A0D14] tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
                    Keep It Safe
                  </h3>
                  <p className="font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                    No harassment, discrimination, intimidation, or behaviour that makes others feel unwelcome.
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between gap-3">
                  <div className="h-[1px] bg-slate-200 w-[30%] group-hover:w-[65%] transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <button
                    type="button"
                    aria-label="Keep It Safe"
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* CARD 07: Give Credit (Cols 4–6) */}
              <div
                ref={(el) => { cardRefs.current[8] = el; }}
                style={{ opacity: 0 }}
                className="lg:col-span-3 group relative bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:bg-[#F7FAFF] hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-wider text-[#004DE6] transition-transform duration-300 group-hover:translate-x-1">
                        07
                      </span>
                      <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#EBF3FE] text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04]">
                      <Database className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-clash text-lg font-bold text-[#0A0D14] tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
                    Give Credit
                  </h3>
                  <p className="font-jakarta text-xs sm:text-[13px] text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                    Acknowledge the people, ideas, and sources that helped shape the work.
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between gap-3">
                  <div className="h-[1px] bg-slate-200 w-[30%] group-hover:w-[65%] transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <button
                    type="button"
                    aria-label="Give Credit"
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:border-[#004DE6] group-hover:text-[#004DE6]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* CARD 08: Share Responsibly (Light Blue Tint - Cols 7–9) */}
              <div
                ref={(el) => { cardRefs.current[9] = el; }}
                style={{ opacity: 0 }}
                className="lg:col-span-3 group relative bg-[#EBF3FE] rounded-[22px] border border-blue-200/80 shadow-[0_4px_24px_rgba(0,77,230,0.06)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:bg-[#E2EDFE] hover:border-blue-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-wider text-[#004DE6] transition-transform duration-300 group-hover:translate-x-1">
                        08
                      </span>
                      <div className="w-4 h-[2px] bg-[#004DE6] mt-1" aria-hidden="true" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-[#004DE6] flex items-center justify-center transition-transform duration-350 ease-out group-hover:-translate-y-[3px] group-hover:scale-[1.04] shadow-xs">
                      <Megaphone className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-clash text-lg font-bold text-[#0A0D14] tracking-tight mt-5 mb-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
                    Share Responsibly
                  </h3>
                  <p className="font-jakarta text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    Use community spaces, resources, and knowledge with care.
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between gap-3">
                  <div className="h-[1px] bg-blue-300/80 w-[30%] group-hover:w-[65%] transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <button
                    type="button"
                    aria-label="Share Responsibly"
                    className="w-8 h-8 rounded-full border border-blue-200 bg-white flex items-center justify-center text-[#004DE6] transition-colors duration-300 group-hover:border-[#004DE6]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* EDITORIAL IMPACT PANEL: FROM CAMPUS TO IMPACT (Cols 10–12) */}
              <div
                ref={(el) => { cardRefs.current[10] = el; }}
                style={{ opacity: 0 }}
                className="lg:col-span-3 group relative rounded-[22px] overflow-hidden min-h-[190px] border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] bg-gradient-to-br from-[#F7F8FC] to-white p-6 flex flex-col justify-between"
              >
                {/* Background Geometric Arc */}
                <div
                  className="pointer-events-none absolute -right-10 -bottom-10 w-44 h-44 rounded-full border border-blue-600/[0.08] -z-0"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.24em] font-semibold text-slate-400 uppercase">
                    FORGE
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#004DE6]" />
                </div>

                <div className="relative z-10 text-right pt-8">
                  <div className="w-8 h-[1px] bg-slate-300 ml-auto mb-2" />
                  <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500 font-semibold uppercase block leading-tight">
                    FROM
                    <br />
                    CAMPUS
                    <br />
                    TO IMPACT.
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
