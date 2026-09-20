"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight, GraduationCap, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    icon: Users,
    value: "45+",
    label: "Campuses Connected",
  },
  {
    icon: GraduationCap,
    value: "10,000+",
    label: "Students Empowered",
  },
  {
    icon: TrendingUp,
    value: "200+",
    label: "Industry Mentors",
  },
];

export default function LeadershipMilestonesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  // Toggle reveal on mobile / click
  const handleCardClick = () => {
    setIsRevealed((prev) => !prev);
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsRevealed((prev) => !prev);
    }
  };

  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".os-eyebrow",
            ".os-heading",
            ".os-paragraph",
            ".os-stats",
            ".os-cta",
            ".os-card-wrapper",
          ],
          { opacity: 1, y: 0, scale: 1, clearProps: "all" },
        );
        return;
      }

      // Entrance animation: Coordinate Left and Right sides smoothly
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        onComplete: () => {
          gsap.set(
            [
              ".os-eyebrow",
              ".os-heading",
              ".os-paragraph",
              ".os-stats",
              ".os-cta",
              ".os-card-wrapper",
            ],
            { clearProps: "opacity,transform" },
          );
        },
      });

      // Eyebrow: fade + translateY(20px) at 0ms
      tl.from(
        ".os-eyebrow",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        0,
      );

      // Heading: fade + translateY(25px) at 100ms
      tl.from(
        ".os-heading",
        {
          opacity: 0,
          y: 25,
          duration: 0.65,
        },
        0.1,
      );

      // Paragraph: fade + translateY(20px) at 220ms
      tl.from(
        ".os-paragraph",
        {
          opacity: 0,
          y: 20,
          duration: 0.55,
        },
        0.22,
      );

      // Stats: fade + translateY(18px) at 280ms
      tl.from(
        ".os-stats",
        {
          opacity: 0,
          y: 18,
          duration: 0.55,
        },
        0.28,
      );

      // CTA button: fade + translateY(16px) at 350ms
      tl.from(
        ".os-cta",
        {
          opacity: 0,
          y: 16,
          duration: 0.5,
        },
        0.35,
      );

      // Card: fade + translateY(30px) + scale(0.97) at 350ms
      tl.from(
        ".os-card-wrapper",
        {
          opacity: 0,
          y: 30,
          scale: 0.97,
          duration: 0.75,
        },
        0.35,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 select-none overflow-hidden"
    >
      <style>{`
        @keyframes storySubtleFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(6px, -8px, 0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .story-accent-float {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1360px]">
        {/* Main 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ━━━━━━━━ LEFT COLUMN: EDITORIAL NARRATIVE (~45%) ━━━━━━━━ */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center text-left">
            {/* 01 — Eyebrow */}
            <div className="os-eyebrow flex items-center gap-3 select-none">
              <span className="h-[1px] w-8 sm:w-10 bg-[#D9E2EE]" />
              <span className="font-jakarta text-xs font-bold uppercase tracking-[0.24em] text-[#1683E8]">
                OUR STORY
              </span>
              <span className="h-[1px] w-8 sm:w-10 bg-[#D9E2EE]" />
            </div>

            {/* 02 — Main Heading */}
            <h2 className="os-heading mt-5 font-clash text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold tracking-tight text-[#111111] leading-[1.04] select-none">
              From a Campus Idea to a{" "}
              <span className="text-[#1683E8]">Student-Led Ecosystem</span>
            </h2>

            {/* 03 — Supporting Paragraph */}
            <p className="os-paragraph mt-5 max-w-xl font-jakarta text-base sm:text-lg leading-relaxed text-[#667085]">
              Winnovation started with a simple observation: campuses were full
              of talented students with nowhere to build. What began as a small
              student-led initiative has grown into a structured ecosystem
              spanning institutions, mentors, and industry partners — with a
              leadership team that&apos;s stayed hands-on with every cohort of
              builders since day one.
            </p>

            {/* 04 — Stats Row */}
            <div className="os-stats mt-8 grid grid-cols-3 gap-4 border-y border-[#D9E2EE] py-6 select-none">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex rounded-lg bg-[#EAF3FF] p-1.5 text-[#1683E8]">
                        <Icon className="h-4 w-4 stroke-[2]" />
                      </span>
                      <span className="font-clash text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                        {s.value}
                      </span>
                    </div>
                    <span className="mt-1 font-jakarta text-[11px] sm:text-xs font-medium text-[#667085]">
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* 05 — CTA Button */}
            <div className="os-cta mt-8 flex items-center gap-4">
              <Link
                href="/programs"
                className="group inline-flex h-[50px] items-center gap-2.5 rounded-full bg-[#1683E8] px-7 font-jakarta text-sm font-bold text-white shadow-[0_12px_28px_rgba(22,131,232,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#102A43] active:scale-95"
              >
                <span>Explore Our Journey</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ━━━━━━━━ RIGHT COLUMN: LARGE INTERACTIVE STORY CARD (~55%) ━━━━━━━━ */}
          <div className="os-card-wrapper lg:col-span-6 xl:col-span-7 flex items-center justify-center lg:justify-end">
            {/* The Large Square Card Container (Apple-inspired physical editorial feel) */}
            <div
              onClick={handleCardClick}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="button"
              aria-label="Interactive FORGE story card. Hover or tap to reveal origin story."
              className={`group relative w-full max-w-[560px] aspect-square min-h-[460px] sm:min-h-[500px] rounded-[28px] border border-[#D9E2EE] bg-[#FFFFFF] overflow-hidden select-none cursor-pointer shadow-[0_16px_45px_rgba(16,42,67,0.06)] hover:border-[#BFD8F5] hover:shadow-[0_24px_50px_rgba(16,42,67,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8] transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform ${
                isRevealed
                  ? "-translate-y-1 scale-[1.015] -rotate-1 border-[#1683E8]"
                  : "hover:-translate-y-1 hover:scale-[1.015] hover:-rotate-1"
              }`}
            >
              {/* ──────────────── DEFAULT CARD STATE (Spacious, Minimal, Solid Colors) ──────────────── */}
              <div className="relative z-10 flex h-full w-full flex-col justify-between p-7 sm:p-9 md:p-10">
                {/* Top Row: Top-left CAMPUS ORIGIN Badge + Top-right EST. 2023 */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full border border-[#D9E2EE] bg-[#F7F8FC] px-3.5 py-1 font-jakarta text-[11px] font-bold uppercase tracking-[0.16em] text-[#1683E8] transition-colors duration-300 group-hover:border-[#1683E8]">
                    CAMPUS ORIGIN
                  </span>
                  <span className="font-jakarta text-xs font-bold uppercase tracking-wider text-[#667085]">
                    EST. 2023
                  </span>
                </div>

                {/* Center: Official FORGE Logo Mark + Micro-Movement Accent */}
                <div className="relative my-auto flex flex-col items-center justify-center py-6">
                  {/* Subtle Solid Floating Blue Accent Circle (8-10s subtle translate, no blur, no glow) */}
                  <div
                    aria-hidden="true"
                    className="story-accent-float absolute right-10 bottom-6 h-3 w-3 rounded-full bg-[#1683E8] pointer-events-none"
                    style={{ animation: "storySubtleFloat 9s ease-in-out infinite" }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute left-10 top-2 h-2.5 w-2.5 rounded-full bg-[#EAF3FF] border border-[#D9E2EE] pointer-events-none"
                  />

                  {/* FORGE Logo with 400ms subtle lift on hover (scale: 1.025, translateY: -2px) */}
                  <div className="relative h-14 sm:h-16 w-56 sm:w-64 transition-transform duration-400 ease-out group-hover:scale-[1.025] group-hover:-translate-y-[2px]">
                    <Image
                      src="/forge-logo.svg"
                      alt="Winnovation FORGE"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* Know More Button (Default State) */}
                  <div className="mt-8">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E2EE] bg-white px-4 py-2 font-jakarta text-xs font-bold text-[#111111] shadow-sm transition-all duration-350 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-[#1683E8] group-hover:text-[#1683E8]">
                      <span>Know More</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-350 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Footer Divider + Metadata */}
                <div className="flex items-center justify-between border-t border-[#D9E2EE] pt-4.5 text-xs">
                  <span className="font-jakarta text-[11px] sm:text-xs font-semibold text-[#667085]">
                    Student-Led Innovation Backbone
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-jakarta text-[11px] sm:text-xs font-bold text-[#1683E8]">
                      45+ Campuses Connected
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#1683E8]" />
                  </div>
                </div>
              </div>

              {/* ──────────────── INFORMATION REVEAL OVERLAY (Solid FORGE-Blue) ──────────────── */}
              {/* Refined editorial reveal: translate(-50%, -50%) rotate(-6deg) scale(0.94) -> rotate(0deg) scale(1) */}
              <div
                className={`absolute top-1/2 left-1/2 z-20 flex h-full w-full flex-col justify-between bg-[#1683E8] p-7 sm:p-9 md:p-10 text-white select-none transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform ${
                  isRevealed
                    ? "opacity-100 pointer-events-auto -translate-x-1/2 -translate-y-1/2 scale-100 rotate-0"
                    : "opacity-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 scale-[0.94] -rotate-6 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 group-hover:rotate-0"
                }`}
              >
                {/* Top Row: 01 / OUR STORY + THE BEGINNING Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                    01 / OUR STORY
                  </span>
                  <span className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1 font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    THE BEGINNING
                  </span>
                </div>

                {/* Center / Body: Title & Description */}
                <div className="my-auto py-4">
                  <h3 className="font-clash text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-[1.08] tracking-tight">
                    It started on campus.
                  </h3>
                  <p className="mt-4 font-jakarta text-sm sm:text-base font-normal leading-relaxed text-white/90">
                    &ldquo;FORGE grew from a simple idea: give students a place
                    to move beyond learning and start building. What began as a
                    student-led initiative evolved into an ecosystem connecting
                    campuses, builders, mentors, and industry.&rdquo;
                  </p>
                </div>

                {/* Bottom Row: Know More button + Campus Note */}
                <div className="flex items-center justify-between border-t border-white/20 pt-4.5">
                  <Link
                    href="/programs"
                    onClick={(e) => e.stopPropagation()}
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-jakarta text-xs sm:text-sm font-bold text-[#1683E8] shadow-md transition-all duration-300 hover:bg-[#F7F9FC] hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Know More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>

                  <span className="font-jakarta text-[11px] font-bold uppercase tracking-wider text-white/80">
                    45+ CAMPUSES CONNECTED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ━━━━━━━━ BOTTOM EDITORIAL FOOTNOTE BAR ━━━━━━━━ */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-[#D9E2EE] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs select-none">
          <div className="flex items-center gap-2 font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#667085]">
            <span>PEOPLE</span>
            <span>&times;</span>
            <span>IDEAS</span>
            <span>&times;</span>
            <span>IMPACT</span>
          </div>

          <div className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#667085]">
            BUILDING A BRIGHTER TOMORROW
          </div>
        </div>
      </div>
    </section>
  );
}
