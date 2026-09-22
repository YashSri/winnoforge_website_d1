"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  BookOpen,
  Layers,
  Users,
  UserCheck,
  RefreshCw,
  Monitor,
  ArrowRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * CITADEL EXPERIENCE — ASYMMETRIC BENTO SYSTEM
 * Editorial layout with 7 distinct cards, featured
 * cards, subtle moving borders, and hover micro-animations
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function CitadelExperienceBento() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const isReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (isReduced) {
        gsap.set(
          [
            ".ceb-eyebrow",
            ".ceb-eyebrow-line",
            ".ceb-heading-line",
            ".ceb-desc",
            ".ceb-card",
            ".ceb-corner",
          ],
          { opacity: 1, y: 0, x: 0, scale: 1, clearProps: "all" }
        );
        return;
      }

      // ── Entrance Reveal Timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      // Eyebrow
      tl.fromTo(
        ".ceb-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0
      );
      tl.fromTo(
        ".ceb-eyebrow-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "power3.out" },
        0
      );

      // Heading line-by-line masked reveal
      tl.fromTo(
        ".ceb-heading-line-1",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.08
      );
      tl.fromTo(
        ".ceb-heading-line-2",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.16
      );

      // Subtitle
      tl.fromTo(
        ".ceb-desc",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
        0.24
      );

      // Bento cards staggered entrance (01 -> 07)
      tl.fromTo(
        ".ceb-card",
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.06,
        },
        0.18
      );

      // Corner microcopy
      tl.fromTo(
        ".ceb-corner",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.06 },
        0.4
      );

      // ── Subtle Background Parallax ──
      gsap.to(".ceb-deco-circle-left", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -25,
        ease: "none",
      });

      gsap.to(".ceb-deco-circle-right", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: 20,
        ease: "none",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="citadel-experience"
      className="relative w-full overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24 lg:px-12 lg:py-28"
    >
      <style>{`
        @keyframes borderTravel {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -100; }
        }
      `}</style>

      {/* ── Background Architectural Graphics ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Large sweeping circular arc on left */}
        <svg
          className="ceb-deco-circle-left absolute -left-28 top-1/3 -translate-y-1/2 h-[680px] w-[680px] opacity-25"
          viewBox="0 0 700 700"
          fill="none"
        >
          <circle
            cx="350"
            cy="350"
            r="330"
            stroke="#93C5FD"
            strokeWidth="1.2"
          />
        </svg>

        {/* Small blue dot marker on left arc */}
        <div className="absolute left-[8%] top-[38%] h-2.5 w-2.5 rounded-full bg-[#1683E8] opacity-60 hidden lg:block" />

        {/* Large sweeping circular arc on right */}
        <svg
          className="ceb-deco-circle-right absolute -right-24 top-2/3 -translate-y-1/2 h-[580px] w-[580px] opacity-20"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle
            cx="300"
            cy="300"
            r="280"
            stroke="#93C5FD"
            strokeWidth="1.2"
          />
        </svg>

        {/* Small blue dot on right */}
        <div className="absolute right-[6%] top-[65%] h-2.5 w-2.5 rounded-full bg-[#1683E8] opacity-60 hidden lg:block" />

        {/* Soft background ambient blurs */}
        <div className="absolute left-[15%] top-1/4 h-80 w-80 rounded-full bg-[#EAF2FF]/50 blur-3xl" />
        <div className="absolute right-[12%] bottom-1/4 h-80 w-80 rounded-full bg-[#EBF4FF]/50 blur-3xl" />
      </div>

      {/* ── Outer Editorial Edge Microcopy ── */}
      {/* Top Left */}
      <div
        className="ceb-corner pointer-events-none absolute left-6 top-8 hidden xl:flex flex-col gap-2.5 opacity-0 z-10"
        aria-hidden="true"
      >
        <span className="h-5 w-[1.5px] bg-[#94A3B8]/60" />
        <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C9BB4] leading-relaxed">
          LEARN.
          <br />
          BUILD.
          <br />
          EXECUTE.
          <br />
          GROW.
        </span>
      </div>

      {/* Top Right */}
      <div
        className="ceb-corner pointer-events-none absolute right-8 top-8 hidden xl:block font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C9BB4] leading-relaxed text-right opacity-0 z-10"
        aria-hidden="true"
      >
        PEOPLE.
        <br />
        PARTNERSHIPS.
        <br />
        A BRIGHTER
        <br />
        TOMORROW.
      </div>

      {/* Bottom Left */}
      <div
        className="ceb-corner pointer-events-none absolute left-6 bottom-10 hidden xl:flex flex-col gap-2.5 opacity-0 z-10"
        aria-hidden="true"
      >
        <span className="h-5 w-[1.5px] bg-[#94A3B8]/60" />
        <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C9BB4] leading-relaxed">
          STUDENTS.
          <br />
          IDEAS.
          <br />
          REAL IMPACT.
        </span>
      </div>

      {/* Bottom Right */}
      <div
        className="ceb-corner pointer-events-none absolute right-8 bottom-10 hidden xl:flex items-center gap-3 opacity-0 z-10"
        aria-hidden="true"
      >
        <span className="h-[1px] w-9 bg-[#CBD5E1]" />
        <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C9BB4]">
          THE CITADEL
        </span>
      </div>

      {/* ━━━━━ MAIN CONTAINER ━━━━━ */}
      <div className="relative z-10 mx-auto max-w-[1360px]">
        {/* ── Section Header ── */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Eyebrow: ───── THE CITADEL EXPERIENCE ───── */}
          <div className="ceb-eyebrow flex items-center gap-3.5 opacity-0">
            <span className="ceb-eyebrow-line h-[1px] w-8 sm:w-12 bg-[#1683E8]/50 origin-left" />
            <span className="font-jakarta text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#1683E8]">
              The Citadel Experience
            </span>
            <span className="ceb-eyebrow-line h-[1px] w-8 sm:w-12 bg-[#1683E8]/50 origin-right" />
          </div>

          {/* Main Heading — Masked reveal */}
          <h2 className="mt-4 font-clash text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-bold tracking-tight leading-[1.02]">
            <span className="block overflow-hidden">
              <span className="ceb-heading-line ceb-heading-line-1 inline-block text-[#111111] opacity-0">
                A Different Way to
              </span>
            </span>
            <span className="block overflow-hidden mt-1">
              <span className="ceb-heading-line ceb-heading-line-2 inline-block text-[#1683E8] opacity-0">
                Learn and Build
              </span>
            </span>
          </h2>

          {/* Supporting Subtitle */}
          <p className="ceb-desc mt-5 font-jakarta text-[15px] sm:text-[17px] leading-[1.65] text-[#64748B] opacity-0 max-w-xl">
            Structured learning. Real execution. Meaningful collaboration.
            <br className="hidden sm:inline" /> A complete experience designed for what&apos;s next.
          </p>
        </div>

        {/* ── Bento Cards Layout ── */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* ═════════════════════════════════════════════
              ROW 1: CARD 01, CARD 02 (FEATURED), CARD 03
             ═════════════════════════════════════════════ */}

          {/* ── CARD 01: Structured Learning (Standard, 3 cols) ── */}
          <div className="ceb-card group/card lg:col-span-3 relative flex flex-col justify-between rounded-[24px] bg-white border border-[#E2E8F0]/90 shadow-[0_12px_36px_rgba(20,40,80,0.05)] p-7 sm:p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(20,40,80,0.1)] opacity-0">
            {/* Subtle traveling border */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                ry="23"
                fill="none"
                stroke="#1683E8"
                strokeWidth="1.5"
                pathLength="100"
                strokeDasharray="10 90"
                strokeDashoffset="0"
                className="opacity-20 group-hover/card:opacity-75 transition-opacity duration-500"
                style={{ animation: "borderTravel 16s linear infinite" }}
              />
            </svg>

            <div>
              {/* Top Row: 01 + Icon */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-sm font-bold text-[#111111]">01</span>
                  <div className="h-[2px] w-4 bg-[#1683E8] mt-0.5 rounded-full" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#EDF4FF] text-[#1683E8] transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:scale-105">
                  <BookOpen className="h-4 w-4 stroke-[2]" />
                </div>
              </div>

              {/* Title & Body */}
              <h3 className="mt-8 font-jakarta text-[20px] font-bold text-[#111111] tracking-tight leading-tight">
                Structured Learning
              </h3>
              <p className="mt-3 font-jakarta text-[14px] text-[#64748B] leading-relaxed">
                Participants engage with planned learning experiences that provide direction, context, and foundational understanding.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
              <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-[#94A3B8]">
                LEARN AND GROW.
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D1D5DB] text-[#1683E8] transition-all duration-300 group-hover/card:border-[#1683E8] group-hover/card:bg-[#EDF4FF]">
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5" />
              </div>
            </div>
          </div>

          {/* ── CARD 02: Practical Execution (FEATURED DARK NAVY, 6 cols) ── */}
          <div className="ceb-card group/card md:col-span-2 lg:col-span-6 relative flex flex-col justify-between rounded-[24px] bg-[#0A192F] border border-[#1E2E48] shadow-[0_20px_50px_rgba(10,25,47,0.22)] p-7 sm:p-9 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_26px_65px_rgba(10,25,47,0.3)] opacity-0 overflow-hidden">
            {/* Subtle decorative internal arc */}
            <svg className="pointer-events-none absolute right-0 top-0 h-48 w-48 opacity-25" viewBox="0 0 200 200" fill="none">
              <circle cx="200" cy="0" r="140" stroke="#60A5FA" strokeWidth="1.2" />
            </svg>
            <div className="pointer-events-none absolute right-16 top-16 h-2 w-2 rounded-full bg-[#3B82F6] opacity-70" />

            {/* Subtle traveling border */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                ry="23"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="1.5"
                pathLength="100"
                strokeDasharray="10 90"
                strokeDashoffset="0"
                className="opacity-30 group-hover/card:opacity-85 transition-opacity duration-500"
                style={{ animation: "borderTravel 14s linear infinite" }}
              />
            </svg>

            <div>
              {/* Top Row: IDEAS INTO IMPACT + 02 */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#93C5FD]">
                    IDEAS INTO IMPACT
                  </span>
                  <div className="h-[2px] w-6 bg-[#3B82F6] mt-1 rounded-full" />
                </div>
                <span className="font-mono text-base font-bold text-white tracking-wider">
                  02
                </span>
              </div>

              {/* Title & Body */}
              <h3 className="mt-8 font-jakarta text-[24px] sm:text-[28px] font-bold text-white tracking-tight leading-tight">
                Practical Execution
              </h3>
              <p className="mt-3 font-jakarta text-[14px] sm:text-[15px] text-[#94A3B8] leading-relaxed max-w-lg">
                Learning is connected to assignments, projects, experiments, prototypes, and real tasks wherever applicable.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                BUILD AND DEMONSTRATE.
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-300 group-hover/card:border-white group-hover/card:bg-[#1683E8]">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-0.5" />
              </div>
            </div>
          </div>

          {/* ── CARD 03: Peer Collaboration (Standard, 3 cols) ── */}
          <div className="ceb-card group/card lg:col-span-3 relative flex flex-col justify-between rounded-[24px] bg-white border border-[#E2E8F0]/90 shadow-[0_12px_36px_rgba(20,40,80,0.05)] p-7 sm:p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(20,40,80,0.1)] opacity-0">
            {/* Subtle traveling border */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                ry="23"
                fill="none"
                stroke="#1683E8"
                strokeWidth="1.5"
                pathLength="100"
                strokeDasharray="10 90"
                strokeDashoffset="0"
                className="opacity-20 group-hover/card:opacity-75 transition-opacity duration-500"
                style={{ animation: "borderTravel 16s linear infinite" }}
              />
            </svg>

            <div>
              {/* Top Row: 03 + Icon */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-sm font-bold text-[#111111]">03</span>
                  <div className="h-[2px] w-4 bg-[#1683E8] mt-0.5 rounded-full" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#EDF4FF] text-[#1683E8] transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:scale-105">
                  <Users className="h-4 w-4 stroke-[2]" />
                </div>
              </div>

              {/* Title & Body */}
              <h3 className="mt-8 font-jakarta text-[20px] font-bold text-[#111111] tracking-tight leading-tight">
                Peer Collaboration
              </h3>
              <p className="mt-3 font-jakarta text-[14px] text-[#64748B] leading-relaxed">
                Participants learn through discussion, teamwork, review, and shared problem-solving.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
              <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-[#94A3B8]">
                STRONGER TOGETHER.
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D1D5DB] text-[#1683E8] transition-all duration-300 group-hover/card:border-[#1683E8] group-hover/card:bg-[#EDF4FF]">
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5" />
              </div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════
              ROW 2: CARD 04 (WIDE), CARD 05 (BLUE), CARD 06 (DARK)
             ═════════════════════════════════════════════ */}

          {/* ── CARD 04: Mentorship (Wide White Card, 5 cols) ── */}
          <div className="ceb-card group/card lg:col-span-5 relative flex flex-col justify-between rounded-[24px] bg-white border border-[#E2E8F0]/90 shadow-[0_12px_36px_rgba(20,40,80,0.05)] p-7 sm:p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(20,40,80,0.1)] opacity-0">
            {/* Subtle traveling border */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                ry="23"
                fill="none"
                stroke="#1683E8"
                strokeWidth="1.5"
                pathLength="100"
                strokeDasharray="10 90"
                strokeDashoffset="0"
                className="opacity-20 group-hover/card:opacity-75 transition-opacity duration-500"
                style={{ animation: "borderTravel 16s linear infinite" }}
              />
            </svg>

            <div>
              {/* Top Row: 04 + Icon */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-sm font-bold text-[#111111]">04</span>
                  <div className="h-[2px] w-4 bg-[#1683E8] mt-0.5 rounded-full" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#EDF4FF] text-[#1683E8] transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:scale-105">
                  <UserCheck className="h-4 w-4 stroke-[2]" />
                </div>
              </div>

              {/* Title & Body */}
              <h3 className="mt-8 font-jakarta text-[22px] font-bold text-[#111111] tracking-tight leading-tight">
                Mentorship
              </h3>
              <p className="mt-3 font-jakarta text-[14px] text-[#64748B] leading-relaxed max-w-md">
                Mentors, trainers, and experts may provide guidance, feedback, context, and perspective.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
              <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-[#94A3B8]">
                GUIDANCE AT EVERY STEP.
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D1D5DB] text-[#1683E8] transition-all duration-300 group-hover/card:border-[#1683E8] group-hover/card:bg-[#EDF4FF]">
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5" />
              </div>
            </div>
          </div>

          {/* ── CARD 05: Reflection and Iteration (FORGE BLUE ACCENT, 3 cols) ── */}
          <div className="ceb-card group/card lg:col-span-3 relative flex flex-col justify-between rounded-[24px] bg-[#1683E8] border border-[#1579D6] shadow-[0_20px_45px_rgba(22,131,232,0.25)] p-7 sm:p-8 text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_26px_55px_rgba(22,131,232,0.35)] opacity-0">
            {/* Subtle traveling border */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                ry="23"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                pathLength="100"
                strokeDasharray="10 90"
                strokeDashoffset="0"
                className="opacity-30 group-hover/card:opacity-85 transition-opacity duration-500"
                style={{ animation: "borderTravel 15s linear infinite" }}
              />
            </svg>

            <div>
              {/* Top Row: 05 + Icon */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-sm font-bold text-white">05</span>
                  <div className="h-[2px] w-4 bg-white mt-0.5 rounded-full" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white/20 text-white transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:scale-105">
                  <RefreshCw className="h-4 w-4 stroke-[2]" />
                </div>
              </div>

              {/* Title & Body */}
              <h3 className="mt-8 font-jakarta text-[20px] font-bold text-white tracking-tight leading-tight">
                Reflection and Iteration
              </h3>
              <p className="mt-3 font-jakarta text-[14px] text-white/90 leading-relaxed">
                Participants are encouraged to review their work, understand gaps, improve outcomes, and learn from mistakes.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="mt-8 pt-4 border-t border-white/20 flex items-center justify-between">
              <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                IMPROVE CONTINUOUSLY.
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-all duration-300 group-hover/card:border-white group-hover/card:bg-white group-hover/card:text-[#1683E8]">
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5" />
              </div>
            </div>
          </div>

          {/* ── CARD 06: Demonstration (Dark Navy Feature, 4 cols) ── */}
          <div className="ceb-card group/card lg:col-span-4 relative flex flex-col justify-between rounded-[24px] bg-[#0A192F] border border-[#1E2E48] shadow-[0_16px_44px_rgba(10,25,47,0.2)] p-7 sm:p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(10,25,47,0.28)] opacity-0">
            {/* Subtle traveling border */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                ry="23"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="1.5"
                pathLength="100"
                strokeDasharray="10 90"
                strokeDashoffset="0"
                className="opacity-25 group-hover/card:opacity-80 transition-opacity duration-500"
                style={{ animation: "borderTravel 15s linear infinite" }}
              />
            </svg>

            <div>
              {/* Top Row: 06 + Icon */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-sm font-bold text-white">06</span>
                  <div className="h-[2px] w-4 bg-[#3B82F6] mt-0.5 rounded-full" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#162744] text-[#60A5FA] transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:scale-105">
                  <Monitor className="h-4 w-4 stroke-[2]" />
                </div>
              </div>

              {/* Title & Body */}
              <h3 className="mt-8 font-jakarta text-[22px] font-bold text-white tracking-tight leading-tight">
                Demonstration
              </h3>
              <p className="mt-3 font-jakarta text-[14px] text-[#94A3B8] leading-relaxed">
                Work can be presented through reviews, showcases, project demonstrations, or other approved formats.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                SHARE WHAT YOU BUILD.
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-300 group-hover/card:border-white group-hover/card:bg-[#1683E8]">
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5" />
              </div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════
              ROW 3: CARD 07 (HORIZONTAL FULL-WIDTH BANNER)
             ═════════════════════════════════════════════ */}
          <div className="ceb-card group/card lg:col-span-12 relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-8 rounded-[24px] bg-white border border-[#E2E8F0]/90 shadow-[0_12px_36px_rgba(20,40,80,0.05)] px-7 py-6 sm:px-9 sm:py-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,40,80,0.08)] opacity-0">
            {/* Subtle traveling border */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                ry="23"
                fill="none"
                stroke="#1683E8"
                strokeWidth="1.5"
                pathLength="100"
                strokeDasharray="8 92"
                strokeDashoffset="0"
                className="opacity-20 group-hover/card:opacity-75 transition-opacity duration-500"
                style={{ animation: "borderTravel 18s linear infinite" }}
              />
            </svg>

            {/* Left: 07 Number + Title */}
            <div className="flex items-center gap-6 sm:gap-8 shrink-0">
              <div>
                <span className="font-mono text-sm font-bold text-[#111111]">07</span>
                <div className="h-[2px] w-4 bg-[#1683E8] mt-0.5 rounded-full" />
              </div>
              <h3 className="font-jakarta text-[22px] sm:text-[24px] font-bold text-[#111111] tracking-tight">
                Progression
              </h3>
            </div>

            {/* Middle: Body Text */}
            <p className="font-jakarta text-[14px] sm:text-[15px] text-[#64748B] leading-relaxed max-w-2xl sm:px-4">
              Participants can explore further learning, advanced projects, leadership responsibilities, entrepreneurship, or professional pathways.
            </p>

            {/* Right: Tag + Arrow */}
            <div className="flex items-center gap-4 shrink-0 sm:self-center">
              <span className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] whitespace-nowrap">
                WHAT&apos;S NEXT.
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D1D5DB] text-[#1683E8] transition-all duration-300 group-hover/card:border-[#1683E8] group-hover/card:bg-[#EDF4FF]">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
