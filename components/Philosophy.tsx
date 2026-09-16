"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ForgeWayCard {
  index: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  tag: string;
  accentColor: string;
  bgGradient: string;
  badgeBg: string;
  badgeText: string;
  href: string;
}

const forgeWayCards: ForgeWayCard[] = [
  {
    index: "01",
    eyebrow: "INSTITUTION LAYER",
    title: "Institution",
    subtitle: "The Foundation",
    description:
      "Embedding a structured innovation ecosystem inside campuses, creating an environment where students can learn, build, experiment, and execute.",
    capabilities: [
      "Campus Infrastructure",
      "Experiential Labs",
      "Faculty Alignment",
    ],
    tag: "FORGE / 01",
    accentColor: "#1683E8",
    bgGradient: "from-blue-50/80 via-white to-white",
    badgeBg: "bg-blue-50 border-blue-200/80",
    badgeText: "text-[#1683E8]",
    href: "/collaborate",
  },
  {
    index: "02",
    eyebrow: "CORPORATE LAYER",
    title: "Corporate",
    subtitle: "The Opportunity",
    description:
      "Connecting companies with emerging talent, real-world problem statements, mentorship, and meaningful industry engagement.",
    capabilities: [
      "Industry Mentorship",
      "Live Problem Statements",
      "Direct Talent Pipelines",
    ],
    tag: "FORGE / 02",
    accentColor: "#0066FF",
    bgGradient: "from-slate-50/90 via-white to-white",
    badgeBg: "bg-slate-100 border-slate-200",
    badgeText: "text-[#102A43]",
    href: "/collaborate",
  },
  {
    index: "03",
    eyebrow: "BUILDER LAYER",
    title: "Builder",
    subtitle: "The People & Impact",
    description:
      "Where students become builders and ideas become real ventures through practical execution, mentorship, structured sprints, and continuous feedback.",
    capabilities: [
      "Rapid Prototyping",
      "Structured Sprints",
      "Venture Incubation",
    ],
    tag: "FORGE / 03",
    accentColor: "#FF5500",
    bgGradient: "from-orange-50/80 via-white to-white",
    badgeBg: "bg-orange-50 border-orange-200/80",
    badgeText: "text-[#FF5500]",
    href: "/programs",
  },
];

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsStageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check user prefers-reduced-motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  /**
   * Ultra-smooth continuous card transform with blur & shadow depth
   * Active: distance = 0
   * Next: distance = +1
   * Previous: distance = -1
   */
  const applyCardState = (
    el: HTMLElement,
    distance: number,
    isMobile: boolean,
  ) => {
    const yUnit = isMobile ? 32 : 46;
    const rotUnit = isMobile ? 0.4 : 1.2;

    // Vertical offset: translateY = distance * 46px (clamped to [-92px, 92px])
    const translateY = Math.max(-92, Math.min(92, distance * yUnit));

    // Smooth physical scale curve
    const scale = Math.max(0.88, 1 - Math.min(Math.abs(distance), 1.5) * 0.045);

    // Subtle natural tilt
    const rotation = Math.max(-2.5, Math.min(2.5, distance * -rotUnit));

    // Dynamic blur: 0px when active, soft 2-3px when adjacent, fading to 6px
    const absDist = Math.abs(distance);
    const blurPx = Math.min(6, absDist * 2.4);

    // Opacity interpolation
    let opacity = 0;
    if (absDist === 0) {
      opacity = 1;
    } else if (distance > 0) {
      if (distance <= 1) {
        opacity = 1 - distance * 0.16; // 1 -> 0.84
      } else if (distance <= 1.5) {
        opacity = 0.84 - ((distance - 1) / 0.5) * (0.84 - 0.2); // 0.84 -> 0.20
      } else if (distance <= 1.8) {
        opacity = 0.2 - ((distance - 1.5) / 0.3) * 0.2; // 0.20 -> 0
      } else {
        opacity = 0;
      }
    } else {
      if (absDist <= 1) {
        opacity = 1 - absDist * 0.22; // 1 -> 0.78
      } else if (absDist <= 1.5) {
        opacity = 0.78 - ((absDist - 1) / 0.5) * (0.78 - 0.2); // 0.78 -> 0.20
      } else if (absDist <= 1.8) {
        opacity = 0.2 - ((absDist - 1.5) / 0.3) * 0.2; // 0.20 -> 0
      } else {
        opacity = 0;
      }
    }

    // Dynamic depth shadow: deeper when active, lighter when layered
    const shadowAlpha = Math.max(0.04, 0.14 - absDist * 0.05);
    const shadowOffsetY = Math.max(10, Math.round(30 - absDist * 10));
    const shadowBlur = Math.max(25, Math.round(70 - absDist * 20));

    // Z-Index: Active card has highest layer
    const zIndex = Math.max(1, 100 - Math.round(absDist * 10));

    // Apply continuous GPU-accelerated transform & blur
    el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rotation.toFixed(2)}deg)`;
    el.style.opacity = Math.max(0, Math.min(1, opacity)).toFixed(3);
    el.style.filter = blurPx > 0.1 ? `blur(${blurPx.toFixed(1)}px)` : "none";
    el.style.boxShadow = `0 ${shadowOffsetY}px ${shadowBlur}px rgba(16, 42, 67, ${shadowAlpha.toFixed(3)}), 0 4px 12px rgba(16, 42, 67, 0.03)`;
    el.style.zIndex = String(zIndex);
    el.style.pointerEvents = absDist < 0.3 ? "auto" : "none";
  };

  useGSAP(
    () => {
      if (isReducedMotion) return;

      const mm = gsap.matchMedia();

      // Desktop & Tablet (>= 768px)
      mm.add("(min-width: 768px)", () => {
        cardRefs.current.forEach((cardEl, idx) => {
          if (!cardEl) return;
          applyCardState(cardEl, idx, false);
        });

        const st = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "+=240%", // balanced 3 viewport heights scroll distance
          pin: true,
          scrub: 1.0, // Silky smooth inertia on wheel/scroll
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;

            // Smooth continuous card progress from 0 to 2
            const cardProgress = Math.min(2, p * 2.15);

            // Active index update for vertical progress indicator
            const nextIdx = p < 0.35 ? 0 : p < 0.72 ? 1 : 2;
            if (nextIdx !== activeIndexRef.current) {
              activeIndexRef.current = nextIdx;
              setActiveCardIndex(nextIdx);
            }

            cardRefs.current.forEach((cardEl, idx) => {
              if (!cardEl) return;
              const distance = idx - cardProgress;
              applyCardState(cardEl, distance, false);
            });
          },
        });

        scrollTriggerRef.current = st;
      });

      // Mobile (< 768px)
      mm.add("(max-width: 767px)", () => {
        cardRefs.current.forEach((cardEl, idx) => {
          if (!cardEl) return;
          applyCardState(cardEl, idx, true);
        });

        const st = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            const cardProgress = Math.min(2, p * 2.15);

            const nextIdx = p < 0.35 ? 0 : p < 0.72 ? 1 : 2;
            if (nextIdx !== activeIndexRef.current) {
              activeIndexRef.current = nextIdx;
              setActiveCardIndex(nextIdx);
            }

            cardRefs.current.forEach((cardEl, idx) => {
              if (!cardEl) return;
              const distance = idx - cardProgress;
              applyCardState(cardEl, distance, true);
            });
          },
        });

        scrollTriggerRef.current = st;
      });
    },
    { scope: containerRef, dependencies: [isReducedMotion] },
  );

  // Smooth scroll to card when clicking progress indicator
  const handleJumpToCard = (targetIndex: number) => {
    if (!scrollTriggerRef.current) return;
    const st = scrollTriggerRef.current;
    const progressMap = [0.05, 0.48, 0.92];
    const targetProgress = progressMap[targetIndex] ?? 0;
    const targetScroll = st.start + (st.end - st.start) * targetProgress;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      aria-label="The FORGE Way Philosophy"
      className="relative w-full bg-[#F7F8FC] text-[#111111] overflow-hidden select-none border-t border-[#D9DEE7]/70"
    >
      {/* Reduced motion static layout fallback */}
      {isReducedMotion ? (
        <div className="w-full max-w-[1360px] mx-auto px-6 py-20 flex flex-col gap-12">
          <div className="max-w-xl">
            <span className="font-poppins text-xs font-bold tracking-[0.25em] text-[#FF5500] uppercase">
              — PHILOSOPHY —
            </span>
            <h2 className="mt-3 font-poppins font-bold text-5xl sm:text-6xl text-[#111111] leading-none tracking-tight">
              The FORGE way.
            </h2>
            <p className="mt-4 font-sans text-base text-[#5F6672] leading-relaxed">
              We don't do boring. We don't do average. We prefer chaos over
              comfort and execution over excuses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {forgeWayCards.map((card) => (
              <article
                key={card.index}
                className="rounded-[28px] border border-slate-200/90 bg-white/95 backdrop-blur-xl p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(16,42,67,0.08)]"
              >
                <div>
                  <div className="flex justify-between items-start pb-4 border-b border-slate-200/80">
                    <span className="font-poppins text-sm font-bold text-[#111111]">
                      {card.index}
                    </span>
                    <span className="font-poppins text-xs font-bold tracking-[0.2em] text-[#5F6672] uppercase">
                      {card.eyebrow}
                    </span>
                  </div>
                  <h3 className="mt-7 font-poppins font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight">
                    {card.title}
                    <span className="text-[#FF5500]">.</span>
                  </h3>
                  <p className="mt-4 font-sans text-sm text-[#5F6672] leading-relaxed max-w-[430px]">
                    {card.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {card.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="rounded-full bg-slate-100 border border-slate-200/80 px-3 py-1 text-xs font-medium text-[#111111]"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between mt-8">
                  <span className="font-mono text-xs font-bold tracking-wider text-[#111111]">
                    {card.tag}
                  </span>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#1683E8] hover:underline"
                  >
                    <span>Explore Layer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        /* Pinned 100vh Viewport Stage */
        <div className="relative w-full h-screen min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1440px] mx-auto">
          {/* Mobile Top Header */}
          <div className="md:hidden flex items-center justify-between w-full pt-6 pb-2 z-10">
            <h2 className="font-poppins font-bold text-2xl text-[#111111] flex items-center gap-2">
              <span>The</span>
              <span className="inline-block relative w-16 h-7 align-middle">
                <Image
                  src="/forge-logo.svg"
                  alt="Forge"
                  fill
                  className="object-contain"
                  priority
                />
              </span>
              <span>way.</span>
            </h2>
            <div className="font-poppins text-xs font-bold text-[#FF5500]">
              0{activeCardIndex + 1} / 03
            </div>
          </div>

          {/* Desktop Left Column: Fixed / Pinned Heading */}
          <div className="hidden md:flex w-full md:w-5/12 lg:w-5/12 xl:w-5/12 z-10 flex-col justify-center text-left pr-6">
            {/* Top Tag */}
            <div className="flex items-center gap-2.5 mb-5">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"
              />
              <span className="font-poppins text-xs font-bold tracking-[0.22em] text-[#FF5500] uppercase">
                THE FORGE WAY
              </span>
            </div>

            {/* Main Editorial Headline with Brand Logo */}
            <h2 className="font-poppins font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight text-[#111111]">
              The
              <span className="inline-block relative w-36 h-16 sm:w-44 sm:h-20 md:w-52 md:h-24 lg:w-60 lg:h-28 align-middle mx-2 sm:mx-3">
                <Image
                  src="/forge-logo.svg"
                  alt="Forge Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </span>
              way.
            </h2>

            {/* Manifesto Statement */}
            <p className="mt-6 font-sans text-base sm:text-lg text-[#5F6672] max-w-md leading-relaxed border-l-2 border-[#1683E8] pl-5 font-normal">
              We don't do boring. We don't do average. We prefer chaos over
              comfort and execution over excuses.
            </p>

            {/* Editorial Layer Counter */}
            <div className="mt-8 flex items-center gap-3 text-xs font-poppins text-[#5F6672]">
              <span className="text-[#FF5500] font-bold">
                0{activeCardIndex + 1} / 03
              </span>
              <span
                aria-hidden="true"
                className="w-8 h-[1px] bg-[#CBD5E1]"
              />
              <span className="uppercase tracking-wider font-medium">
                {forgeWayCards[activeCardIndex].eyebrow}
              </span>
            </div>
          </div>

          {/* Right Column: Card Stage */}
          <div className="w-full md:w-7/12 lg:w-7/12 xl:w-7/12 flex items-center justify-center md:justify-end xl:justify-center relative my-auto">
            {/* Fixed Visual Stage with Forge's Theme Rounded Geometry */}
            <div
              ref={cardsStageRef}
              className="relative w-[88vw] h-[58vh] max-h-[520px] md:w-[min(680px,50vw)] md:h-[min(680px,70vh)] md:max-w-[680px] md:max-h-[680px] mx-auto"
            >
              {forgeWayCards.map((card, idx) => (
                <article
                  key={card.index}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className={`absolute inset-0 w-full h-full rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-gradient-to-br ${card.bgGradient} p-6 sm:p-9 lg:p-11 flex flex-col justify-between backdrop-blur-2xl will-change-transform select-none overflow-hidden`}
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  {/* Subtle Background Accent Aura */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[60px] opacity-40 pointer-events-none"
                    style={{ backgroundColor: card.accentColor }}
                  />

                  {/* Card Header: 01 and Eyebrow with rounded pill badge */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-center pb-4 sm:pb-5 border-b border-slate-200/80">
                      <div className="flex items-center gap-3">
                        <span className="font-poppins text-sm sm:text-base font-bold text-[#111111]">
                          {card.index}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span className="font-poppins text-xs sm:text-[13px] font-semibold tracking-[0.18em] text-[#5F6672] uppercase">
                          {card.eyebrow}
                        </span>
                      </div>

                      {/* Creative Layer Pill Badge */}
                      <span
                        className={`font-poppins text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full border ${card.badgeBg} ${card.badgeText} tracking-wide`}
                      >
                        {card.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Title & Description in Lower-Middle with Poppins */}
                  <div className="my-auto py-2 sm:py-4 relative z-10">
                    <h3 className="font-poppins font-bold text-[clamp(42px,5.2vw,80px)] leading-[0.92] tracking-[-0.05em] text-[#111111]">
                      {card.title}
                      <span className="text-[#FF5500]">.</span>
                    </h3>

                    <p className="mt-4 sm:mt-5 font-sans text-xs sm:text-sm md:text-base lg:text-[1.05rem] text-[#5F6672] leading-relaxed max-w-[430px] font-normal">
                      {card.description}
                    </p>

                    {/* Creative Capability Pills */}
                    <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
                      {card.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="rounded-full bg-white/90 border border-slate-200/90 text-[#111111] text-[11px] sm:text-xs font-medium px-3 py-1 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: FORGE / 01 ───── Explore Layer → */}
                  <div className="pt-4 sm:pt-5 border-t border-slate-200/80 flex items-center justify-between gap-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs sm:text-[13px] font-bold tracking-wider text-[#111111]">
                        {card.tag}
                      </span>
                      <span
                        aria-hidden="true"
                        className="hidden sm:inline-block w-8 h-[1px] bg-slate-300"
                      />
                    </div>

                    <Link
                      href={card.href}
                      className="group/link inline-flex items-center gap-1.5 font-poppins text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#1683E8] transition-colors"
                    >
                      <span>Explore Layer</span>
                      <ArrowUpRight
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1683E8] transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Minimal Vertical Progress Indicator (Desktop & Tablet) */}
          <div
            className="hidden md:flex absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-4 py-4 px-2.5 rounded-full bg-white/90 border border-slate-200/80 shadow-[0_4px_20px_rgba(16,42,67,0.06)] backdrop-blur-md select-none"
            aria-label="Layer progress indicator"
          >
            {forgeWayCards.map((card, idx) => {
              const isActive = activeCardIndex === idx;

              return (
                <button
                  key={card.index}
                  type="button"
                  onClick={() => handleJumpToCard(idx)}
                  className="group flex flex-col items-center gap-1.5 cursor-pointer focus:outline-none p-1 transition-transform"
                  aria-label={`Jump to card ${card.index}: ${card.title}`}
                >
                  <span
                    className={`font-poppins text-xs font-bold transition-colors duration-300 ${
                      isActive
                        ? "text-[#FF5500]"
                        : "text-[#5F6672] group-hover:text-[#111111]"
                    }`}
                  >
                    {card.index}
                  </span>
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-2 h-2 bg-[#FF5500] ring-2 ring-[#FF5500]/30 scale-125"
                        : "w-1.5 h-1.5 bg-slate-300 group-hover:bg-slate-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
