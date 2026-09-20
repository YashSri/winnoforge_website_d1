"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useCallback, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface Voice {
  quote: string;
  name: string;
  designation: string;
  org: string;
  photoSrc?: string;
}

const DEFAULT_VOICES: Voice[] = [
  {
    quote:
      "FORGE gave me a real problem to solve, not another assignment to submit.",
    name: "Aarav Mehta",
    designation: "Builder, Batch 3",
    org: "FORGE Citadel",
  },
  {
    quote:
      "Bringing FORGE onto campus changed how our students think about their final year.",
    name: "Dr. Nandini Rao",
    designation: "Dean of Innovation",
    org: "Partner Institution",
  },
  {
    quote:
      "The builders we've hired out of FORGE ship faster than most junior engineers.",
    name: "Rohan Kapoor",
    designation: "Engineering Manager",
    org: "Industry Partner",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function VoicesCarousel({
  title = "Voices From FORGE",
  voices = DEFAULT_VOICES,
}: {
  title?: string;
  voices?: Voice[];
}) {
  const items = voices && voices.length > 0 ? voices : DEFAULT_VOICES;

  // CRITICAL: When not hovering, activeVoice is null (ALL cards remain white)
  // Only on hover / active interaction does a card turn blue and expand.
  const [activeVoice, setActiveVoice] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(1); // default 02/03 for counter

  const sectionRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Navigate functions (updates activeVoice & counter)
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev - 1 + items.length) % items.length;
      setActiveVoice(next);
      return next;
    });
  }, [items.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % items.length;
      setActiveVoice(next);
      return next;
    });
  }, [items.length]);

  // Card hover handling: hovered card turns blue and expands; others stay white
  const handleCardMouseEnter = (idx: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveVoice(idx);
    setCurrentIndex(idx);
  };

  // Container mouse leave: returns ALL cards to white with uniform resting alignment
  const handleContainerMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveVoice(null);
    }, 180);
  };

  // Entrance animation via ScrollTrigger
  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".voices-eyebrow",
            ".voices-heading",
            ".voices-desc",
            ".voices-card",
            ".voices-nav",
            ".voices-footer",
          ],
          { opacity: 1, y: 0, scale: 1, clearProps: "all" },
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        onComplete: () => {
          gsap.set([".voices-card"], { clearProps: "opacity" });
        },
      });

      tl.from(".voices-eyebrow", {
        opacity: 0,
        y: 14,
        duration: 0.5,
      })
        .from(
          ".voices-heading",
          {
            opacity: 0,
            y: 22,
            duration: 0.65,
          },
          "-=0.3",
        )
        .from(
          ".voices-desc",
          {
            opacity: 0,
            y: 16,
            duration: 0.55,
          },
          "-=0.4",
        )
        .from(
          ".voices-card",
          {
            opacity: 0,
            y: 28,
            duration: 0.7,
            stagger: 0.1,
          },
          "-=0.3",
        )
        .from(
          ".voices-nav",
          {
            opacity: 0,
            y: 16,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          ".voices-footer",
          {
            opacity: 0,
            y: 12,
            duration: 0.5,
          },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const displayCounterIndex = activeVoice !== null ? activeVoice : currentIndex;
  const formattedCounter = String(displayCounterIndex + 1).padStart(2, "0");
  const formattedTotal = String(items.length).padStart(2, "0");

  return (
    <section
      ref={sectionRef}
      id="voices"
      className="relative w-full bg-[#F7F8FC] px-4 py-20 sm:px-6 md:px-10 md:py-28 lg:px-12 lg:py-32 overflow-hidden border-t border-[#D9DEE7]"
    >
      {/* CSS Keyframes for Subtle Floating Solid Geometric Circles */}
      <style jsx>{`
        @keyframes voicesOrbFloat1 {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(24px, -20px, 0) scale(1.05);
          }
        }

        @keyframes voicesOrbFloat2 {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(0.95);
          }
          50% {
            transform: translate3d(-20px, 18px, 0) scale(1.04);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .voices-orb-float-1,
          .voices-orb-float-2 {
            animation: none !important;
          }
        }
      `}</style>

      {/* ━━━━━━━━ SUBTLE SOLID GEOMETRIC BACKGROUND ACCENTS ━━━━━━━━ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Far Left Blue Dot */}
        <div className="absolute left-8 lg:left-16 top-1/2 h-3.5 w-3.5 rounded-full bg-[#1683E8]" />

        {/* Large Subtle Light Blue Circle behind left/center */}
        <div
          className="voices-orb-float-1 absolute left-[8%] top-[22%] h-72 w-72 rounded-full bg-[#EAF3FF]"
          style={{ animation: "voicesOrbFloat1 10s ease-in-out infinite" }}
        />

        {/* Mid-sized Light Blue Circle on right */}
        <div
          className="voices-orb-float-2 absolute right-[10%] top-[28%] h-52 w-52 rounded-full bg-[#EAF3FF]"
          style={{
            animation: "voicesOrbFloat2 12s ease-in-out infinite -5s",
          }}
        />

        {/* Far Right Blue Dot */}
        <div className="absolute right-10 lg:right-20 top-1/2 h-3 w-3 rounded-full bg-[#1683E8]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        {/* ━━━━━━━━ SECTION HEADER (CENTER ALIGNED) ━━━━━━━━ */}
        <div className="text-center max-w-[850px] mx-auto">
          {/* Eyebrow with subtle horizontal accent lines */}
          <div className="voices-eyebrow flex items-center justify-center gap-3 select-none">
            <span className="h-[1px] w-8 sm:w-12 bg-[#D9DEE7]" />
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#1683E8]">
              {title.toUpperCase()}
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-[#D9DEE7]" />
          </div>

          {/* Main Editorial Headline */}
          <h2 className="voices-heading font-clash mt-5 text-[clamp(40px,5vw,68px)] font-bold tracking-tight text-[#111111] leading-[1.02]">
            Real People. Real Impact.
            <br />
            That&apos;s <span className="text-[#1683E8]">FORGE.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="voices-desc font-jakarta mx-auto mt-5 max-w-[650px] text-[17px] sm:text-[18px] text-[#667085] leading-relaxed">
            Stories from builders, mentors, and partners who have experienced
            the FORGE ecosystem firsthand.
          </p>
        </div>

        {/* ━━━━━━━━ DESKTOP CAROUSEL: 3 CARDS CENTERED (>= 768px) ━━━━━━━━
            - When NOT hovering: ALL 3 cards are WHITE with equal balanced alignment.
            - Only on hovering a card does it expand and turn solid FORGE Blue with visible 3D rotation.
            - When pointer leaves container: all cards smoothly return to white and resting alignment.
        */}
        <div
          onMouseLeave={handleContainerMouseLeave}
          role="region"
          aria-label="Testimonials Carousel"
          className="relative z-10 hidden md:flex items-center justify-center gap-5 lg:gap-6 mt-14 sm:mt-16 w-full max-w-[1240px] mx-auto h-[380px] [perspective:1400px]"
        >
          {items.map((voice, idx) => {
            const isHoveredActive = activeVoice === idx;
            const isAnyHovered = activeVoice !== null;
            const num = String(idx + 1).padStart(2, "0");

            // 3D Perspective rotation calculation:
            // When no card is hovered: balanced symmetrical resting perspective (left +8deg, center 0deg, right -8deg).
            // When card idx is hovered: rotates to 0deg (faces forward), others tilt outward.
            let rotateAngle = 0;
            if (!isAnyHovered) {
              rotateAngle = idx === 0 ? 8 : idx === 2 ? -8 : 0;
            } else if (!isHoveredActive) {
              rotateAngle = idx < activeVoice ? 10 : -10;
            }

            // Dimensions:
            // When resting: all 3 cards have equal balanced width (280px / 300px)
            // When active: hovered card expands (390px / 420px), inactive cards contract slightly (235px / 250px)
            let cardWidth = "w-[270px] lg:w-[295px]";
            if (isAnyHovered) {
              cardWidth = isHoveredActive
                ? "w-[390px] lg:w-[420px]"
                : "w-[230px] lg:w-[250px]";
            }

            return (
              <div
                key={voice.name}
                onMouseEnter={() => handleCardMouseEnter(idx)}
                onClick={() => {
                  setActiveVoice(idx);
                  setCurrentIndex(idx);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveVoice(idx);
                    setCurrentIndex(idx);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isHoveredActive}
                aria-label={`Testimonial by ${voice.name}, ${voice.designation}`}
                style={{
                  transform: `perspective(1000px) rotateY(${rotateAngle}deg) ${
                    isHoveredActive
                      ? "scale(1.02) translateY(-8px)"
                      : "scale(0.96) translateY(0)"
                  }`,
                  transformStyle: "preserve-3d",
                  willChange: "transform, width, background-color",
                }}
                className={`voices-card relative h-[345px] rounded-[24px] select-none cursor-pointer overflow-hidden transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8] focus-visible:ring-offset-2 ${cardWidth} ${
                  isHoveredActive
                    ? "bg-[#1683E8] border border-[#1474CE] text-white shadow-[0_22px_48px_rgba(22,131,232,0.3)] z-20"
                    : "bg-[#FFFFFF] border border-[#D9DEE7] text-[#111111] shadow-[0_12px_30px_rgba(16,42,67,0.05)] hover:border-[#1683E8] z-10"
                }`}
              >
                {/* ─── ACTIVE EXPANDED BLUE CONTENT LAYER (Revealed on hover) ─── */}
                <div
                  className={`h-full flex flex-col justify-between p-7 lg:p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isHoveredActive
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-2 pointer-events-none absolute inset-0"
                  }`}
                >
                  {/* Top: Large Quotation Mark */}
                  <div className="flex items-start justify-between">
                    <Quote
                      className="h-10 w-10 text-white fill-white stroke-none opacity-95"
                      aria-hidden="true"
                    />
                    <span className="font-clash text-xs font-bold tracking-wider text-white/80">
                      {num} / {formattedTotal}
                    </span>
                  </div>

                  {/* Middle: Full Quote */}
                  <p className="font-clash text-xl lg:text-[22px] font-medium leading-[1.38] text-white my-auto pt-2">
                    &ldquo;{voice.quote}&rdquo;
                  </p>

                  {/* Bottom: Initials Badge + Name & Role */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-white/20">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#55A8F2] font-clash text-sm font-bold text-white shadow-sm">
                      {initials(voice.name)}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-clash text-base lg:text-[17px] font-bold text-white truncate">
                        {voice.name}
                      </span>
                      <span className="font-jakarta text-xs lg:text-[13px] text-white/90 truncate">
                        {voice.designation}, {voice.org}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ─── INACTIVE QUIET WHITE CONTENT LAYER (Default resting state) ─── */}
                <div
                  className={`h-full p-6 flex justify-between items-stretch transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    !isHoveredActive
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none absolute inset-0"
                  }`}
                >
                  {/* Left: Vertical Rotated Editorial Quote */}
                  <div className="flex items-center justify-center pl-1">
                    <span
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                      className="font-clash text-xs lg:text-[13px] font-semibold text-[#111111] leading-relaxed tracking-wide whitespace-normal max-h-[260px] line-clamp-4 select-none"
                    >
                      &ldquo;{voice.quote}&rdquo;
                    </span>
                  </div>

                  {/* Right: Initials Badge + Quote Icon + Divider + Counter */}
                  <div className="flex flex-col justify-between items-end select-none">
                    <div className="flex flex-col items-center gap-2">
                      {/* Initials Circle */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF3FF] font-clash text-xs font-bold text-[#1683E8]">
                        {initials(voice.name)}
                      </div>
                      {/* Blue Quote Icon */}
                      <Quote
                        className="h-4 w-4 text-[#1683E8] fill-[#1683E8] stroke-none mt-1"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Bottom Right: Divider & Number */}
                    <div className="flex flex-col items-center gap-1.5">
                      <span className="h-4 w-[1px] bg-[#D9DEE7]" />
                      <span className="font-clash text-[11px] font-bold tracking-wider text-[#7A8492]">
                        {num} / {formattedTotal}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ━━━━━━━━ MOBILE VIEW (< 768px): SWIPEABLE ACTIVE CARD ━━━━━━━━ */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative z-10 flex md:hidden items-center justify-center w-full mt-12 px-2"
        >
          {items[displayCounterIndex] && (
            <div
              key={items[displayCounterIndex].name}
              className="w-[86vw] max-w-[360px] min-h-[350px] rounded-[24px] bg-[#1683E8] border border-[#1474CE] p-7 flex flex-col justify-between shadow-[0_20px_45px_rgba(22,131,232,0.28)] text-white select-none transition-all duration-500"
            >
              {/* Top: Quote Mark & Counter */}
              <div className="flex items-start justify-between">
                <Quote
                  className="h-9 w-9 text-white fill-white stroke-none opacity-95"
                  aria-hidden="true"
                />
                <span className="font-clash text-xs font-bold tracking-wider text-white/80">
                  {formattedCounter} / {formattedTotal}
                </span>
              </div>

              {/* Middle: Quote */}
              <p className="font-clash text-lg sm:text-xl font-medium leading-[1.38] text-white my-auto pt-2">
                &ldquo;{items[displayCounterIndex].quote}&rdquo;
              </p>

              {/* Bottom: Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#55A8F2] font-clash text-sm font-bold text-white shadow-sm">
                  {initials(items[displayCounterIndex].name)}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-clash text-base font-bold text-white truncate">
                    {items[displayCounterIndex].name}
                  </span>
                  <span className="font-jakarta text-xs text-white/90 truncate">
                    {items[displayCounterIndex].designation},{" "}
                    {items[displayCounterIndex].org}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ━━━━━━━━ NAVIGATION CONTROLS & COUNTER ━━━━━━━━ */}
        <div className="voices-nav mt-10 sm:mt-12 flex items-center justify-center gap-5 select-none">
          {/* Previous Button (White circular) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D9DEE7] bg-white text-[#102A43] shadow-[0_4px_16px_rgba(16,42,67,0.04)] transition-all duration-250 hover:scale-105 hover:border-[#1683E8] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8]"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* Next Button (Solid FORGE Blue) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1683E8] text-white shadow-[0_8px_20px_rgba(22,131,232,0.25)] transition-all duration-250 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8]"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Tabular Numerical Counter */}
          <div className="flex items-baseline gap-1 font-clash text-lg sm:text-xl font-bold ml-2">
            <span className="text-[#1683E8]">{formattedCounter}</span>
            <span className="text-[#718096] font-normal text-base sm:text-lg">
              / {formattedTotal}
            </span>
          </div>
        </div>

        {/* ━━━━━━━━ FOOTER EDITORIAL LINE ━━━━━━━━ */}
        <div className="voices-footer mt-16 sm:mt-24 pt-8 border-t border-[#D9DEE7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center select-none">
          <span className="font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#718096]">
            MORE VOICES. BRIGHTER TOMORROWS.
          </span>

          <div className="hidden sm:block flex-1 mx-6 h-[1px] bg-[#D9DEE7]" />

          <span className="font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#718096]">
            BUILT BY PEOPLE. FOR WHAT&apos;S NEXT.
          </span>
        </div>
      </div>
    </section>
  );
}
