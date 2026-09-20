"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight, Rocket, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EcosystemHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const circleLargeRef = useRef<HTMLDivElement>(null);
  const circleSmallRef = useRef<HTMLDivElement>(null);
  const [startupCount, setStartupCount] = useState<number>(0);

  // Counter animation: 0 -> 50+ over 1300ms
  const triggerCounter = useCallback(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setStartupCount(50);
      return;
    }

    const state = { val: 0 };
    gsap.to(state, {
      val: 50,
      duration: 1.3,
      ease: "power2.out",
      onUpdate: () => {
        setStartupCount(Math.round(state.val));
      },
      onComplete: () => {
        setStartupCount(50);
      },
    });
  }, []);

  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        setStartupCount(50);
        gsap.set(
          [
            ".eco-eyebrow",
            ".eco-heading-line-1",
            ".eco-heading-line-2",
            ".eco-desc-primary",
            ".eco-desc-secondary",
            ".eco-card-1",
            ".eco-card-2",
            ".eco-card-3",
            ".eco-cta-group",
            ".eco-side-editorial",
          ],
          { opacity: 1, y: 0, clearProps: "all" },
        );
        return;
      }

      // Parallax scroll effects on orbit & decorative solid circles (relative to top of page)
      if (orbitRef.current) {
        gsap.to(orbitRef.current, {
          y: -15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (circleLargeRef.current) {
        gsap.to(circleLargeRef.current, {
          y: 15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (circleSmallRef.current) {
        gsap.to(circleSmallRef.current, {
          y: -10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Trigger number counter
      triggerCounter();

      // Master entrance timeline (Runs immediately on load since Hero is at the top of the viewport)
      const tl = gsap.timeline({
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        onComplete: () => {
          // Clear all transform and opacity overrides so CSS hover and responsive styles remain 100% clean
          gsap.set(
            [
              ".eco-eyebrow",
              ".eco-heading-line-1",
              ".eco-heading-line-2",
              ".eco-desc-primary",
              ".eco-desc-secondary",
              ".eco-card-1",
              ".eco-card-2",
              ".eco-card-3",
              ".eco-cta-group",
              ".eco-side-editorial",
            ],
            { clearProps: "opacity,transform" },
          );
        },
      });

      // 1. Eyebrow reveal (fade + translateY 10px)
      tl.from(".eco-eyebrow", {
        opacity: 0,
        y: 10,
        duration: 0.5,
      });

      // 2. Masked Heading reveal (Line 1 followed by Line 2 with 100ms offset)
      tl.from(
        ".eco-heading-line-1",
        {
          y: "100%",
          duration: 0.7,
        },
        "-=0.2",
      ).from(
        ".eco-heading-line-2",
        {
          y: "100%",
          duration: 0.7,
        },
        "-=0.55",
      );

      // 3. Description statements reveal (fade + translateY 16px)
      tl.from(
        ".eco-desc-primary",
        {
          opacity: 0,
          y: 16,
          duration: 0.55,
        },
        "-=0.4",
      ).from(
        ".eco-desc-secondary",
        {
          opacity: 0,
          y: 16,
          duration: 0.55,
        },
        "-=0.45",
      );

      // 4. Ecosystem metric cards reveal sequentially (fade + translateY 20px)
      tl.from(
        ".eco-card-1",
        {
          opacity: 0,
          y: 20,
          duration: 0.55,
        },
        "-=0.35",
      )
        .from(
          ".eco-card-2",
          {
            opacity: 0,
            y: 20,
            duration: 0.55,
          },
          "-=0.45",
        )
        .from(
          ".eco-card-3",
          {
            opacity: 0,
            y: 20,
            duration: 0.55,
          },
          "-=0.45",
        );

      // 5. CTA Buttons reveal (fade + translateY 14px)
      tl.from(
        ".eco-cta-group",
        {
          opacity: 0,
          y: 14,
          duration: 0.5,
        },
        "-=0.3",
      );

      // 6. Side editorial text labels
      tl.from(
        ".eco-side-editorial",
        {
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="ecosystem-showcase"
      className="relative w-full bg-[#F7F8FC] px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 flex flex-col justify-center items-center select-none min-h-[calc(100vh-84px)] min-h-[calc(100svh-84px)] sm:min-h-[calc(100vh-92px)] sm:min-h-[calc(100svh-92px)] md:min-h-[calc(100vh-104px)] md:min-h-[calc(100svh-104px)]"
    >
      {/* Continuous Orbit Keyframe Animation */}
      <style jsx>{`
        @keyframes orbitTravel {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .eco-orbit-traveler {
          animation: orbitTravel 14s linear infinite;
          transform-origin: center center;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .eco-orbit-traveler {
            animation: none !important;
          }
        }
      `}</style>

      {/* ━━━━━━━━ BACKGROUND LAYER: EDITORIAL GRID (NO GRADIENTS) ━━━━━━━━ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="eco-editorial-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#D9DEE7"
                strokeWidth="1"
                strokeOpacity="0.45"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#eco-editorial-grid)" />
        </svg>
      </div>

      {/* ━━━━━━━━ BACKGROUND LAYER: DECORATIVE SOLID CIRCLES ━━━━━━━━ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Large Solid Light-Blue Circle (Upper Left) */}
        <div
          ref={circleLargeRef}
          className="absolute -left-14 sm:left-[4%] top-6 sm:top-10 h-44 w-44 sm:h-56 sm:w-56 rounded-full bg-[#EAF3FF]"
        />

        {/* Small Solid FORGE Blue Circle (Mid Left) */}
        <div
          ref={circleSmallRef}
          className="absolute left-[6%] sm:left-[11%] top-1/2 -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#1683E8]"
        />

        {/* Medium Solid Light-Blue Circle (Mid Right) */}
        <div className="absolute right-[2%] sm:right-[7%] top-1/2 -translate-y-1/2 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-[#EAF3FF]" />
      </div>

      {/* ━━━━━━━━ BACKGROUND LAYER: DECORATIVE ORBIT & TRAVELING DOT ━━━━━━━━ */}
      <div
        ref={orbitRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        {/* Large Circular Orbit Outline (Fully visible, responsive, static, subtle solid border) */}
        <div className="relative rounded-full aspect-square border border-[#D7E6F8] w-[min(82vw,360px)] sm:w-[clamp(500px,52vw,600px)] lg:w-[min(740px,48vw,calc(100svh-130px))] max-h-[calc(100svh-110px)]">
          {/* Static Solid FORGE Blue Dots on the Orbit */}
          <div className="absolute right-[12%] top-[14%] h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-[#1683E8]" />
          <div className="hidden sm:block absolute -left-1.5 top-[62%] h-3.5 w-3.5 rounded-full bg-[#1683E8]" />

          {/* Traveling Continuous Orbit Dot (Subtle 14s linear infinite rotation) */}
          <div className="eco-orbit-traveler absolute inset-0">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-[#1683E8]" />
          </div>
        </div>
      </div>

      {/* ━━━━━━━━ DESKTOP EDITORIAL SIDE LABELS ━━━━━━━━ */}
      {/* LEFT EDITORIAL LIST */}
      <div className="eco-side-editorial pointer-events-none absolute left-6 xl:left-12 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-4 z-10 select-none">
        <div className="w-[1.5px] h-28 bg-[#CBD5E1]" />
        <div className="flex flex-col gap-1.5 font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-[#667085]">
          <span>PEOPLE</span>
          <span>IDEAS</span>
          <span>TECHNOLOGY</span>
          <span>IMPACT</span>
        </div>
      </div>

      {/* RIGHT EDITORIAL LIST */}
      <div className="eco-side-editorial pointer-events-none absolute right-6 xl:right-12 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-4 z-10 select-none">
        <div className="flex flex-col items-end gap-1.5 font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-[#667085]">
          <span>CAMPUSES</span>
          <span>STARTUPS</span>
          <span>INDUSTRY</span>
          <span>TOMORROW</span>
        </div>
        <div className="w-[1.5px] h-28 bg-[#CBD5E1]" />
      </div>

      {/* ━━━━━━━━ MAIN CENTERED EDITORIAL COMPOSITION ━━━━━━━━ */}
      <div className="relative z-10 mx-auto w-full max-w-[1360px] text-center">
        {/* Eyebrow */}
        <div className="eco-eyebrow flex items-center justify-center gap-3 select-none">
          <span className="h-[1px] w-8 sm:w-14 bg-[#CBD5E1]" />
          <span className="font-jakarta text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#1683E8]">
            FORGE ECOSYSTEM
          </span>
          <span className="h-[1px] w-8 sm:w-14 bg-[#CBD5E1]" />
        </div>

        {/* Masked Text Reveal Headline */}
        <h1 className="mt-3 sm:mt-4 font-clash text-center font-bold tracking-tight leading-[0.92] select-none">
          {/* Line 1: The FORGE */}
          <span className="block overflow-hidden pb-0.5 sm:pb-1">
            <span className="eco-heading-line-1 block text-[clamp(40px,6.6vw,86px)] tracking-[-0.05em] text-[#111111] font-bold">
              The FORGE
            </span>
          </span>
          {/* Line 2: Ecosystem */}
          <span className="block overflow-hidden pb-1 sm:pb-2">
            <span className="eco-heading-line-2 block text-[clamp(40px,6.6vw,86px)] tracking-[-0.05em] text-[#1683E8] font-bold">
              Ecosystem
            </span>
          </span>
        </h1>

        {/* Supporting Descriptions */}
        <div className="mx-auto mt-4 sm:mt-5 max-w-[700px] px-3">
          {/* Primary Statement */}
          <p className="eco-desc-primary font-jakarta text-base sm:text-lg md:text-[20px] font-medium leading-[1.45] text-[#102A43]">
            A structured innovation environment connecting institutions,
            builders, and industry, powered by Winnovation.
          </p>

          {/* Secondary Statement (Subtext) */}
          <p className="eco-desc-secondary font-jakarta mt-2 sm:mt-2.5 text-xs sm:text-sm md:text-[15px] leading-[1.55] text-[#667085]">
            FORGE transforms campuses into execution-driven ecosystems where
            students learn, build, and launch real-world innovations.
          </p>
        </div>

        {/* ━━━━━━━━ METRIC / ECOSYSTEM HORIZONTAL CARDS (Directly after subtext) ━━━━━━━━ */}
        <div className="mx-auto mt-6 sm:mt-8 max-w-[1040px] w-full px-2 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 items-stretch justify-center">
            {/* ──────── CARD 1: 50+ Startups launched ──────── */}
            <div
              tabIndex={0}
              className="eco-card-1 group relative flex min-h-[96px] sm:min-h-[104px] items-center gap-3.5 sm:gap-4.5 rounded-[22px] border border-[#D9DEE7] bg-[#FFFFFF] px-5 py-4 sm:px-6 sm:py-4.5 shadow-[0_10px_26px_rgba(16,42,67,0.05)] select-none transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#1683E8] hover:shadow-[0_16px_36px_rgba(22,131,232,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8]"
            >
              {/* Icon Container (44px square, rounded 12px) */}
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-[13px] bg-[#EAF3FF] text-[#1683E8] transition-transform duration-300 group-hover:scale-105">
                <Rocket className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.8]" />
              </div>

              {/* Text Block */}
              <div className="text-left">
                <span className="font-clash text-2xl sm:text-[28px] font-bold tracking-tight text-[#111111] leading-none">
                  {startupCount}+
                </span>
                <span className="block font-jakarta text-xs sm:text-[13px] font-semibold text-[#667085] mt-1">
                  Startups launched
                </span>
              </div>
            </div>

            {/* ──────── CARD 2: Campus • Community • Industry ──────── */}
            <div
              tabIndex={0}
              className="eco-card-2 group relative flex min-h-[96px] sm:min-h-[104px] items-center gap-3.5 sm:gap-4.5 rounded-[22px] border border-[#D9DEE7] bg-[#FFFFFF] px-5 py-4 sm:px-6 sm:py-4.5 shadow-[0_10px_26px_rgba(16,42,67,0.05)] select-none transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#1683E8] hover:shadow-[0_16px_36px_rgba(22,131,232,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8]"
            >
              {/* Icon Container (44px square, rounded 12px) */}
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-[13px] bg-[#EAF3FF] text-[#1683E8] transition-transform duration-300 group-hover:scale-105">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.8]" />
              </div>

              {/* Text Block */}
              <div className="text-left">
                <span className="block font-clash text-[14px] sm:text-[15px] font-bold text-[#111111] leading-snug">
                  Campus &bull; Community &bull; Industry
                </span>
                <span className="block font-jakarta text-xs sm:text-[13px] font-medium text-[#667085] mt-0.5">
                  A connected innovation network
                </span>
              </div>
            </div>

            {/* ──────── CARD 3: Real-World Impact ──────── */}
            <div
              tabIndex={0}
              className="eco-card-3 group relative flex min-h-[96px] sm:min-h-[104px] items-center gap-3.5 sm:gap-4.5 rounded-[22px] border border-[#D9DEE7] bg-[#FFFFFF] px-5 py-4 sm:px-6 sm:py-4.5 shadow-[0_10px_26px_rgba(16,42,67,0.05)] select-none transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#1683E8] hover:shadow-[0_16px_36px_rgba(22,131,232,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8]"
            >
              {/* Icon Container (44px square, rounded 12px) */}
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-[13px] bg-[#EAF3FF] text-[#1683E8] transition-transform duration-300 group-hover:scale-105">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.8]" />
              </div>

              {/* Text Block */}
              <div className="text-left">
                <span className="block font-clash text-[15px] sm:text-[16px] font-bold text-[#111111] leading-snug">
                  Real-World Impact
                </span>
                <span className="block font-jakarta text-xs sm:text-[13px] font-medium text-[#667085] mt-0.5">
                  From learning to launch
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ━━━━━━━━ CTA BUTTONS (Directly after cards) ━━━━━━━━ */}
        <div className="eco-cta-group mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {/* Button 1: Explore the Ecosystem */}
          <Link
            href="#who-we-are"
            className="group inline-flex h-[50px] sm:h-[52px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-[#D9DEE7] bg-[#FFFFFF] px-6 sm:px-7 font-jakarta text-xs sm:text-sm font-semibold text-[#111111] shadow-[0_6px_18px_rgba(16,42,67,0.04)] transition-[background-color,border-color,color] duration-250 hover:bg-[#111111] hover:border-[#111111] hover:text-[#FFFFFF] active:scale-98"
          >
            <span>Explore the Ecosystem</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
          </Link>

          {/* Button 2: Join Ecosystem */}
          <Link
            href="/collaborate"
            className="group inline-flex h-[50px] sm:h-[52px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[#1683E8] px-6 sm:px-7 font-jakarta text-xs sm:text-sm font-semibold text-[#FFFFFF] shadow-[0_10px_24px_rgba(22,131,232,0.22)] transition-[background-color] duration-250 hover:bg-[#102A43] active:scale-98"
          >
            <span>Join Ecosystem</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
