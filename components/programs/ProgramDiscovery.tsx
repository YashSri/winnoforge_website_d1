"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  GraduationCap,
  Rocket,
  School,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PATHWAYS = [
  {
    num: "01",
    icon: School,
    title: "School Learners",
    description:
      "For students beginning to explore technology, creativity, problem-solving, and innovation.",
    cta: "Explore School Programs",
    href: "/collaborate",
  },
  {
    num: "02",
    icon: GraduationCap,
    title: "College Students",
    description:
      "For learners seeking practical exposure beyond classroom instruction.",
    cta: "Explore College Programs",
    href: "#categories",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Founders and Aspiring Entrepreneurs",
    description:
      "For individuals transforming ideas into structured, testable ventures.",
    cta: "Explore Founder Programs",
    href: "/citadel1",
  },
  {
    num: "04",
    icon: Users,
    title: "Faculty and Educators",
    description:
      "For educators and institutional teams seeking to strengthen practical, innovation-led learning.",
    cta: "Explore Faculty Programs",
    href: "/collaborate",
  },
  {
    num: "05",
    icon: Building2,
    title: "Institutions",
    description:
      "For schools, colleges, and partner institutions seeking a structured innovation and capability-building ecosystem.",
    cta: "Explore Institutional Programs",
    href: "/collaborate",
  },
  {
    num: "06",
    icon: Briefcase,
    title: "Industry and Corporate Teams",
    description:
      "For organisations seeking talent engagement, innovation partnerships, and practical problem-solving.",
    cta: "Explore Industry Engagements",
    href: "/collaborate",
  },
];

export default function ProgramDiscovery() {
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Default active card is index 1 ("02 College Students") matching the approved visual
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [windowWidth, setWindowWidth] = useState<number>(1440);

  // Track window resize for responsive orbital coordinates
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? PATHWAYS.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === PATHWAYS.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation: ArrowLeft / ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return;
      }
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (diff > 45) {
      handlePrev();
    } else if (diff < -45) {
      handleNext();
    }
    touchStartX.current = null;
  };

  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".fyp-reveal", { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      // Fast, coordinated viewport entrance reveal (500–650ms)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      });

      // 1. Eyebrow (0ms)
      tl.from(".fyp-eyebrow", { opacity: 0, y: 16, duration: 0.5 }, 0);

      // 2. Heading line-by-line reveal (70ms)
      tl.from(".fyp-heading", { opacity: 0, y: 22, duration: 0.65 }, 0.07);

      // 3. Subtitle (140ms)
      tl.from(".fyp-desc", { opacity: 0, y: 18, duration: 0.55 }, 0.14);

      // 4. Cards stage reveal (220ms)
      tl.from(
        ".fyp-card-wrapper",
        {
          opacity: 0,
          scale: 0.92,
          duration: 0.6,
          stagger: 0.05,
        },
        0.22,
      );

      // 5. Controls & Progress (320ms)
      tl.from(".fyp-controls", { opacity: 0, y: 14, duration: 0.5 }, 0.32);
    },
    { scope: sectionRef },
  );

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1200;

  // Calculate orbital placement for each card based on cyclic distance from activeIndex
  const getCardStyle = (index: number) => {
    let diff = index - activeIndex;
    const numCards = PATHWAYS.length;

    // Normalize diff to cyclic range [-2, 3]
    while (diff > 3) diff -= numCards;
    while (diff < -2) diff += numCards;

    if (isMobile) {
      // Mobile layout: active card centered, others peeking or faded
      if (diff === 0) {
        return {
          transform: "translate3d(0, 0, 0) scale(1)",
          opacity: 1,
          zIndex: 30,
          pointerEvents: "auto" as const,
        };
      }
      if (diff === -1) {
        return {
          transform: "translate3d(-104%, 0, 0) scale(0.9)",
          opacity: 0.25,
          zIndex: 10,
          pointerEvents: "none" as const,
        };
      }
      if (diff === 1) {
        return {
          transform: "translate3d(104%, 0, 0) scale(0.9)",
          opacity: 0.25,
          zIndex: 10,
          pointerEvents: "none" as const,
        };
      }
      return {
        transform: "translate3d(0, 0, 0) scale(0.75)",
        opacity: 0,
        zIndex: 1,
        pointerEvents: "none" as const,
      };
    }

    // Responsive horizontal distance scale factor
    const scaleFactor = isTablet ? 0.72 : windowWidth < 1440 ? 0.88 : 1.0;

    // Slot positions relative to center heading:
    // Slot 0 (Active Left): diff === 0
    // Slot 1 (Near Right): diff === 1
    // Slot 2 (Mid Right): diff === 2
    // Slot 3 (Far Right): diff === 3
    // Slot -1 (Near Left / Mid Left): diff === -1
    // Slot -2 (Far Left): diff === -2

    let x = 0;
    let y = 0;
    let scale = 1;
    let opacity = 1;
    let rotY = 0;
    let rotZ = 0;
    let zIndex = 20;

    if (diff === 0) {
      // Active Hero Card (Positioned prominent on left side of center heading)
      x = -345 * scaleFactor;
      y = 0;
      scale = 1.0;
      opacity = 1.0;
      rotY = 8;
      rotZ = -1;
      zIndex = 30;
    } else if (diff === -1) {
      // Mid Left (Card to the left of active)
      x = -560 * scaleFactor;
      y = 10;
      scale = 0.88;
      opacity = 0.88;
      rotY = 15;
      rotZ = -2;
      zIndex = 20;
    } else if (diff === -2) {
      // Far Left
      x = -750 * scaleFactor;
      y = 22;
      scale = 0.76;
      opacity = 0.52;
      rotY = 22;
      rotZ = -3.5;
      zIndex = 10;
    } else if (diff === 1) {
      // Near Right (Prominent card on right side of center heading)
      x = 345 * scaleFactor;
      y = 0;
      scale = 0.98;
      opacity = 0.98;
      rotY = -8;
      rotZ = 1;
      zIndex = 28;
    } else if (diff === 2) {
      // Mid Right
      x = 560 * scaleFactor;
      y = 10;
      scale = 0.88;
      opacity = 0.88;
      rotY = -15;
      rotZ = 2;
      zIndex = 20;
    } else if (diff === 3) {
      // Far Right
      x = 750 * scaleFactor;
      y = 22;
      scale = 0.76;
      opacity = 0.52;
      rotY = -22;
      rotZ = 3.5;
      zIndex = 10;
    }

    return {
      transform: `translate3d(${x.toFixed(1)}px, ${y}px, 0) scale(${scale.toFixed(3)}) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`,
      opacity,
      zIndex,
      pointerEvents: "auto" as const,
    };
  };

  return (
    <section
      ref={sectionRef}
      id="find-your-path"
      className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-8 overflow-hidden select-none bg-[#F7F9FC]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ━━━━━━━━ BACKGROUND ORBITAL DECORATION ━━━━━━━━ */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] md:w-[1040px] md:h-[1040px] z-0">
        <svg
          viewBox="0 0 1000 1000"
          fill="none"
          aria-hidden="true"
          className="w-full h-full text-[#1683EA]/12"
        >
          <circle
            cx="500"
            cy="500"
            r="440"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          {/* Subtle FORGE blue orbit accent dots matching approved reference */}
          <circle cx="189" cy="189" r="4.5" fill="#1683EA" />
          <circle cx="811" cy="189" r="4.5" fill="#1683EA" />
          <circle cx="940" cy="500" r="4.5" fill="#1683EA" />
          <circle cx="688" cy="880" r="4.5" fill="#1683EA" />
          <circle cx="312" cy="190" r="4" fill="#1683EA" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] flex flex-col justify-between min-h-[620px] lg:min-h-[700px]">
        {/* ━━━━━━━━ CAROUSEL STAGE CONTAINER ━━━━━━━━ */}
        {/* Desktop: Centered Content flanked horizontally by orbiting cards */}
        {/* Mobile: Stacked view with active card in center */}
        <div className="relative w-full flex items-center justify-center my-auto min-h-[520px] lg:min-h-[580px]">
          {/* ───── CENTER CONTENT (Always Stable & Visual Focal Point) ───── */}
          <div className="relative z-25 max-w-sm sm:max-w-md text-center flex flex-col items-center px-4">
            {/* Eyebrow with flanking hairlines */}
            <div className="fyp-eyebrow flex items-center justify-center gap-3 select-none mb-3">
              <span className="h-[1px] w-6 sm:w-8 bg-[#D9DEE7]" />
              <span className="font-jakarta text-xs font-bold uppercase tracking-[0.24em] text-[#1683EA]">
                FIND YOUR PATH
              </span>
              <span className="h-[1px] w-6 sm:w-8 bg-[#D9DEE7]" />
            </div>

            {/* Centered Main Heading */}
            <h2 className="fyp-heading font-clash text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-[#111111] leading-[1.08] tracking-tight select-none">
              Find the{" "}
              <span className="text-[#1683EA] block sm:inline">Right Path</span>{" "}
              <span className="block">for Your Next Stage</span>
            </h2>

            {/* Centered Subtitle */}
            <p className="fyp-desc mt-3 sm:mt-4 font-jakarta text-sm sm:text-[15px] leading-relaxed text-[#667085] max-w-sm">
              Different learners need different starting points — pick the
              pathway most relevant to you.
            </p>

            {/* Carousel Controls: Circular Left and Right Buttons */}
            <div className="fyp-controls mt-6 sm:mt-7 flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-[#D9DEE7] bg-white flex items-center justify-center text-[#111111] hover:border-[#1683EA] hover:text-[#1683EA] transition-all duration-200 hover:-translate-y-0.5 shadow-sm active:scale-95 cursor-pointer group"
                aria-label="Previous pathway card"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-[#1683EA] text-white flex items-center justify-center hover:bg-[#1272ce] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_6px_18px_rgba(22,131,234,0.28)] active:scale-95 cursor-pointer group"
                aria-label="Next pathway card"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Segmented Progress Indicator */}
            <div className="mt-4 flex items-center justify-center gap-1.5">
              {PATHWAYS.map((p, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={p.num}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className="group p-1 cursor-pointer focus:outline-none"
                    aria-label={`Go to pathway ${p.num}: ${p.title}`}
                  >
                    <div
                      className={`h-1 rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-8 bg-[#1683EA]"
                          : "w-3.5 bg-[#D9DEE7] group-hover:bg-[#8896A6]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* ───── ORBITING CARDS (Desktop: Surrounding Left & Right) ───── */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ perspective: "1400px" }}
          >
            {PATHWAYS.map((pathway, idx) => {
              const Icon = pathway.icon;
              const isActive = activeIndex === idx;
              const cardPositionStyle = getCardStyle(idx);

              return (
                <div
                  key={pathway.num}
                  className="fyp-card-wrapper absolute will-change-transform"
                  style={{
                    ...cardPositionStyle,
                    transition:
                      "transform 700ms cubic-bezier(0.23, 1, 0.32, 1), opacity 700ms cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                >
                  {/* Inner Card Wrapper with Independent Hover Elevation */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveIndex(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveIndex(idx);
                      }
                    }}
                    aria-label={`Select pathway ${pathway.num}: ${pathway.title}`}
                    className={`group/card w-[270px] sm:w-[285px] lg:w-[295px] h-[385px] sm:h-[400px] lg:h-[415px] rounded-[24px] bg-[#FFFFFF] p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-450 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:scale-[1.02] ${
                      isActive
                        ? "border border-[#1683EA] ring-2 ring-[#1683EA]/10"
                        : "border border-[#D9E2EE] hover:border-[#1683EA]"
                    }`}
                  >
                    {/* Top Row: Icon Container + Card Number */}
                    <div className="flex items-center justify-between w-full">
                      <div className="w-11 h-11 rounded-full bg-[#EAF3FF] flex items-center justify-center text-[#1683EA] transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:scale-105">
                        <Icon className="h-5 w-5 stroke-[2]" />
                      </div>
                      <span className="font-jakarta text-xs sm:text-sm font-semibold text-[#8896A6]">
                        {pathway.num}
                      </span>
                    </div>

                    {/* Middle: Title & Description */}
                    <div className="my-auto py-2">
                      <h3 className="font-clash text-xl sm:text-[22px] font-bold text-[#111111] leading-tight tracking-tight transition-colors group-hover/card:text-[#1683EA]">
                        {pathway.title}
                      </h3>
                      <p className="mt-3 font-jakarta text-xs sm:text-sm text-[#667085] leading-relaxed">
                        {pathway.description}
                      </p>
                    </div>

                    {/* Bottom: Action Link */}
                    <div className="pt-2 border-t border-[#D9DEE7]/50">
                      <Link
                        href={pathway.href}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 font-jakarta text-xs sm:text-sm font-semibold text-[#1683EA] transition-colors hover:text-[#1272ce] group/link"
                      >
                        <span>{pathway.cta}</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/card:translate-x-1 group-hover/card:-translate-y-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ━━━━━━━━ EDITORIAL FOOTER LABELS ━━━━━━━━ */}
        <div className="relative z-10 w-full pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D9DEE7]">
          {/* Left: People. Ideas. Impact. */}
          <div className="flex items-center gap-3">
            <div className="w-6 sm:w-8 h-[1px] bg-[#D9DEE7]" />
            <div className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#8896A6] flex gap-2">
              <span>PEOPLE.</span>
              <span>IDEAS.</span>
              <span>IMPACT.</span>
            </div>
          </div>

          {/* Right: Different Paths. A Brighter Tomorrow. */}
          <div className="flex items-center gap-3 text-right">
            <div className="font-jakarta text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#8896A6]">
              DIFFERENT PATHS. A BRIGHTER TOMORROW.
            </div>
            <div className="w-6 sm:w-8 h-[1px] bg-[#D9DEE7]" />
          </div>
        </div>
      </div>
    </section>
  );
}
