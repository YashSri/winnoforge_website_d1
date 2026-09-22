"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Users,
  Lightbulb,
  Monitor,
  Box,
  Link2,
  MessageSquare,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  { id: "01", label: "A structured learning environment", icon: BookOpen },
  { id: "02", label: "Access to mentors and experts", icon: Users },
  { id: "03", label: "Innovation activities", icon: Lightbulb },
  { id: "04", label: "Demonstration of work", icon: Monitor },
  { id: "05", label: "Practical project opportunities", icon: Box },
  { id: "06", label: "Peer-to-peer collaboration", icon: Link2 },
  { id: "07", label: "Reflection and feedback", icon: MessageSquare },
  { id: "08", label: "Clear pathways for continued growth", icon: TrendingUp },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * WHAT IS THE CITADEL? SECTION
 * Premium 2D Editorial & Architectural Composition
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function WhatIsCitadel() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        gsap.set(
          [
            ".wic-eyebrow",
            ".wic-eyebrow-line",
            ".wic-heading-line",
            ".wic-desc",
            ".wic-cta-primary",
            ".wic-cta-secondary",
            ".wic-image-wrap",
            ".wic-backdrop-block",
            ".wic-label-annotation",
            ".wic-label-secondary",
            ".wic-feature-item",
            ".wic-side-label",
            ".wic-pagination",
          ],
          { opacity: 1, y: 0, x: 0, scale: 1, clearProps: "all" }
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      // 0ms — Eyebrow
      tl.fromTo(
        ".wic-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0
      );
      tl.fromTo(
        ".wic-eyebrow-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "power3.out" },
        0
      );

      // 80ms — Heading line 1: More Than a Place.
      tl.fromTo(
        ".wic-heading-line-1",
        { opacity: 0, y: "105%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.08
      );

      // 180ms — Heading line 2: A Practice-Oriented
      tl.fromTo(
        ".wic-heading-line-2",
        { opacity: 0, y: "105%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.18
      );

      // 280ms — Heading line 3: Ecosystem.
      tl.fromTo(
        ".wic-heading-line-3",
        { opacity: 0, y: "105%" },
        { opacity: 1, y: "0%", duration: 0.7, ease: "power3.out" },
        0.28
      );

      // 150ms — Main architectural image enters
      tl.fromTo(
        ".wic-image-wrap",
        { opacity: 0, y: 35, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        0.15
      );
      tl.fromTo(
        ".wic-backdrop-block",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.75, ease: "power3.out", stagger: 0.06 },
        0.18
      );

      // 350ms — Description paragraph
      tl.fromTo(
        ".wic-desc",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
        0.35
      );

      // 400ms & 470ms — CTA buttons
      tl.fromTo(
        ".wic-cta-primary",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0.4
      );
      tl.fromTo(
        ".wic-cta-secondary",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0.47
      );

      // 450ms — Feature items sequence (450ms, 500ms, 550ms... 800ms)
      tl.fromTo(
        ".wic-feature-item",
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.48,
          ease: "power3.out",
          stagger: 0.05,
        },
        0.45
      );

      // 550ms — Editorial image annotations
      tl.fromTo(
        [".wic-label-annotation", ".wic-label-secondary"],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.08 },
        0.55
      );

      // 300ms, 450ms, 600ms — Side framing labels & pagination
      tl.fromTo(
        ".wic-side-label-1",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0.3
      );
      tl.fromTo(
        ".wic-side-label-2",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0.45
      );
      tl.fromTo(
        [".wic-side-label-3", ".wic-pagination"],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.05 },
        0.6
      );

      // ── Ambient decorative motion (subtle, infinite, 12-16s) ──
      gsap.to(".wic-deco-circle", {
        y: -7,
        x: 4,
        duration: 14,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".wic-square-marker", {
        y: 8,
        duration: 9,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="what-is-citadel"
      className="relative w-full overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24 lg:px-12 lg:py-28"
    >
      {/* ── Background Subtle Decorative Geometry ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Large partial circular outline sweeping behind the composition */}
        <svg
          className="wic-deco-circle absolute left-1/4 top-1/2 -translate-y-1/2 h-[680px] w-[680px] -translate-x-1/2"
          viewBox="0 0 700 700"
          fill="none"
        >
          <circle
            cx="350"
            cy="350"
            r="330"
            stroke="#93C5FD"
            strokeWidth="1.2"
            opacity="0.32"
          />
        </svg>

        {/* Soft background ambient blurs */}
        <div className="absolute left-[5%] top-1/3 h-80 w-80 rounded-full bg-[#EAF2FF]/60 blur-3xl" />
        <div className="absolute right-[8%] bottom-1/4 h-72 w-72 rounded-full bg-[#EBF4FF]/50 blur-3xl" />
      </div>

      {/* ── Outer Editorial Framing Labels (Desktop) ── */}
      {/* Top Left: THE CITADEL */}
      <div
        className="wic-side-label-1 pointer-events-none absolute left-6 top-8 hidden xl:flex flex-col gap-2.5 opacity-0 z-10"
        aria-hidden="true"
      >
        <span className="h-5 w-[1.5px] bg-[#94A3B8]/60" />
        <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C9BB4] leading-relaxed">
          THE
          <br />
          CITADEL
        </span>
      </div>

      {/* Bottom Left: IDEAS PEOPLE PRACTICE IMPACT with blue horizontal line */}
      <div
        className="wic-side-label-2 pointer-events-none absolute left-6 bottom-10 hidden xl:flex flex-col gap-2.5 opacity-0 z-10"
        aria-hidden="true"
      >
        <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C9BB4] leading-relaxed">
          IDEAS
          <br />
          PEOPLE
          <br />
          PRACTICE
          <br />
          IMPACT
        </span>
        <span className="h-[2px] w-7 rounded-full bg-[#1683E8]" />
      </div>

      {/* Top Right: STUDENTS IDEAS REAL IMPACT. */}
      <div
        className="wic-side-label-3 pointer-events-none absolute right-8 top-8 hidden xl:block font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C9BB4] leading-relaxed text-right opacity-0 z-10"
        aria-hidden="true"
      >
        STUDENTS
        <br />
        IDEAS
        <br />
        REAL IMPACT.
      </div>

      {/* ━━━━━ MAIN CONTAINER ━━━━━ */}
      <div className="relative z-10 mx-auto max-w-[1380px]">
        {/* Mobile / Tablet / Desktop Responsive Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:gap-16">
          {/* ═════════════════════════════════════════════
              LEFT SIDE: ARCHITECTURAL IMAGE + FEATURES LIST
             ═════════════════════════════════════════════ */}
          <div className="order-2 flex flex-col items-center lg:order-1 lg:items-start w-full">
            {/* Desktop Composition Row: Features Column + Architectural Collage */}
            <div className="flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-center lg:items-center lg:justify-between">
              {/* Vertical Architectural Line with Marker + Features List */}
              <div className="relative flex items-center gap-4 sm:gap-6 shrink-0 order-2 md:order-1">
                {/* Thin Architectural Vertical Guide Line + Moving Blue Square Marker */}
                <div className="relative hidden xl:flex flex-col items-center self-stretch py-2">
                  <div className="h-full w-[1px] bg-[#D8E1EE]/70" />
                  <div
                    className="wic-square-marker absolute top-1/2 -left-[5px] -translate-y-1/2 h-2.5 w-2.5 rounded-[2px] bg-[#1683E8] shadow-[0_0_8px_rgba(22,131,232,0.4)]"
                    aria-hidden="true"
                  />
                </div>

                {/* 8 Feature Items (1 column on desktop, 2 columns on tablet/mobile if needed) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 sm:gap-3.5 w-full max-w-[280px]">
                  {features.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.id}
                        className="wic-feature-item group/feat flex items-center gap-3 transition-transform duration-250 opacity-0"
                      >
                        {/* Circular icon container (34-38px, #EDF4FF, FORGE blue icon) */}
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDF4FF] text-[#1683E8] transition-all duration-250 group-hover/feat:translate-x-[3px] group-hover/feat:bg-[#DCEBFF]">
                          <Icon className="h-4 w-4 stroke-[1.9]" />
                        </div>

                        {/* Feature text */}
                        <span className="font-jakarta text-[13px] font-medium text-[#1E293B]/85 leading-snug transition-transform duration-250 group-hover/feat:translate-x-[3px]">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Architectural Image Collage Composition */}
              <div className="relative flex items-center justify-center w-full max-w-[360px] sm:max-w-[380px] lg:max-w-[370px] xl:max-w-[400px] order-1 md:order-2 mx-auto md:mx-0">
                {/* ── 2D Offset Backdrop Elements (Architectural Collage) ── */}
                {/* 1. Top-Right Solid Blue Block */}
                <div
                  className="wic-backdrop-block pointer-events-none absolute -top-6 right-2 sm:right-0 h-28 w-28 rounded-[20px] bg-[#3B82F6] opacity-0 -z-10"
                  aria-hidden="true"
                />

                {/* 2. Top-Left Translucent White/Blue Block with Editorial Wayfinding */}
                <div
                  className="wic-backdrop-block wic-label-annotation pointer-events-none absolute -top-8 -left-6 sm:-left-8 z-10 rounded-[20px] bg-[#F0F5FF]/95 border border-[#D0E0FC]/80 px-4 py-3.5 shadow-[0_8px_24px_rgba(20,40,80,0.04)] opacity-0 select-none"
                >
                  <p className="font-jakarta text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-[#334155] leading-relaxed">
                    A SPACE
                    <br />
                    TO BUILD
                    <br />
                    A BRIGHTER
                    <br />
                    TOMORROW.
                  </p>
                </div>

                {/* 3. Lower-Left Solid FORGE Blue Accent Block */}
                <div
                  className="wic-backdrop-block pointer-events-none absolute bottom-12 -left-4 h-16 w-12 rounded-[14px] bg-[#1683E8] opacity-0 -z-10"
                  aria-hidden="true"
                />

                {/* ── Main Architectural Image Container ── */}
                <div className="wic-image-wrap group/img relative w-full aspect-[4/5] overflow-hidden rounded-[28px] sm:rounded-[32px] border border-[#D8E1EE]/70 bg-white shadow-[0_20px_50px_rgba(20,40,80,0.06)] opacity-0">
                  <Image
                    src="/citadel-architecture.jpg"
                    alt="The Citadel — Modern Institutional Learning and Innovation Environment"
                    fill
                    className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/img:scale-[1.025]"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />

                  {/* On Building Facade: Subtle Architectural Wayfinding Typography */}
                  <div
                    className="pointer-events-none absolute right-6 top-[48%] z-10 select-none hidden sm:block"
                    aria-hidden="true"
                  >
                    <div className="font-jakarta text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-[#1E293B]/80 leading-relaxed text-left">
                      <div>BUILD</div>
                      <div className="mt-1">EXPERIMENT</div>
                      <div className="mt-1">COLLABORATE</div>
                      <div className="mt-1">EXECUTE</div>
                    </div>
                  </div>
                </div>

                {/* ── Overlapping Editorial Badge (Lower-Right) ── */}
                <div className="wic-label-secondary group/badge absolute -bottom-4 right-0 sm:right-2 z-20 rounded-[18px] bg-white px-5 py-4 border border-[#D8E1EE]/90 shadow-[0_12px_32px_rgba(20,40,80,0.06)] opacity-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px]">
                  <p className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#1E293B] leading-tight">
                    FROM
                    <br />
                    CURIOSITY
                    <br />
                    TO CAPABILITY.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════
              RIGHT SIDE: TYPOGRAPHY, DESCRIPTION, CTAS
             ═════════════════════════════════════════════ */}
          <div className="order-1 flex flex-col items-start text-left lg:order-2 lg:pl-4 xl:pl-8">
            {/* Eyebrow: ───── WHAT IS THE CITADEL? */}
            <div className="wic-eyebrow flex items-center gap-3.5 opacity-0">
              <span className="wic-eyebrow-line h-[1px] w-8 sm:w-12 bg-[#1683E8] origin-left" />
              <span className="font-jakarta text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#1683E8]">
                What Is the Citadel?
              </span>
            </div>

            {/* Main Heading — Masked line-by-line reveal */}
            <h2 className="mt-5 font-clash text-[42px] font-bold tracking-tight leading-[0.98] sm:text-[54px] md:text-[62px] lg:text-[68px] xl:text-[76px]">
              <span className="block overflow-hidden">
                <span className="wic-heading-line wic-heading-line-1 inline-block text-[#111111] opacity-0">
                  More Than a Place.
                </span>
              </span>
              <span className="block overflow-hidden mt-1 sm:mt-1.5">
                <span className="wic-heading-line wic-heading-line-2 inline-block text-[#1683E8] opacity-0">
                  A Practice-Oriented
                </span>
              </span>
              <span className="block overflow-hidden mt-1 sm:mt-1.5">
                <span className="wic-heading-line wic-heading-line-3 inline-block text-[#1683E8] opacity-0">
                  Ecosystem.
                </span>
              </span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="wic-desc mt-6 max-w-[620px] font-jakarta text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.65] text-[#64748B] opacity-0">
              The Citadel is designed to provide a focused environment for learning,
              experimentation, collaboration, and execution — bringing together the
              elements required for meaningful capability-building, and helping
              participants develop habits of ownership, curiosity, responsibility,
              and continuous improvement.
            </p>

            {/* CTA Buttons: Primary + Secondary */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Primary CTA */}
              <Link
                href="#citadel-programs"
                className="wic-cta-primary group/btn inline-flex items-center gap-3 rounded-full bg-[#1683E8] px-7 py-3.5 font-jakarta text-sm font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(22,131,232,0.28)] opacity-0"
              >
                Explore the Citadel
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-[4px]"
                  strokeWidth={2.5}
                />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#citadel-details"
                className="wic-cta-secondary group/btn-sec inline-flex items-center gap-3 rounded-full border border-[#1683E8]/60 bg-white/70 px-7 py-3.5 font-jakarta text-sm font-semibold text-[#111111] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:border-[#1683E8] hover:bg-white opacity-0"
              >
                Learn More
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn-sec:translate-x-[4px]"
                  strokeWidth={2.5}
                />
              </Link>
            </div>

            {/* Bottom Right Pagination Indicator (as seen in reference visual) */}
            <div className="wic-pagination mt-10 sm:mt-12 flex items-center gap-3 font-jakarta text-xs text-[#8C9BB4] opacity-0">
              <span className="h-[1px] w-6 bg-[#CBD5E1]" />
              <span className="font-mono text-[11px] font-semibold text-[#64748B]">
                01 / 04
              </span>
              <div className="flex items-center gap-1.5 ml-1">
                <span className="h-2 w-2 rounded-full bg-[#1683E8]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#CBD5E1]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#CBD5E1]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#CBD5E1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
