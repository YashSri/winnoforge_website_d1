"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { experts } from "@/lib/experts-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ExpertsSpeakers() {
  // CRITICAL (Section 7): No card highlighted by default (activeId = null)
  const [activeId, setActiveId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(1); // 02/04 index in reference when navigating
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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
            ".mentor-eyebrow",
            ".mentor-heading",
            ".mentor-desc",
            ".mentor-nav",
            ".mentor-card",
            ".mentor-footer",
          ],
          { opacity: 1, y: 0, scale: 1, clearProps: "all" },
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "restart none none reset",
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        onComplete: () => {
          gsap.set(".mentor-card", { clearProps: "transform,opacity" });
        },
      });

      // Right content reveals
      tl.from(".mentor-eyebrow", {
        opacity: 0,
        y: 14,
        duration: 0.5,
      })
        .from(
          ".mentor-heading",
          {
            opacity: 0,
            y: 22,
            duration: 0.65,
          },
          "-=0.3",
        )
        .from(
          ".mentor-desc",
          {
            opacity: 0,
            y: 16,
            duration: 0.55,
          },
          "-=0.4",
        )
        .from(
          ".mentor-nav",
          {
            opacity: 0,
            y: 14,
            duration: 0.5,
          },
          "-=0.3",
        )
        // Left cards reveal sequentially
        .from(
          ".mentor-card",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            stagger: 0.09,
          },
          "-=0.3",
        )
        // Footer line
        .from(
          ".mentor-footer",
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

  // Desktop hover interactions with smooth de-bounce to avoid flicker
  const handleMouseEnter = (id: string, idx: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveId(id);
    setCurrentIndex(idx);
  };

  const handleContainerMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // Return smoothly to null so NO card remains highlighted when cursor exits
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveId(null);
    }, 180);
  };

  const handleCardClick = (id: string, idx: number) => {
    setActiveId((prev) => (prev === id ? null : id));
    setCurrentIndex(idx);
  };

  // Navigate cards via circular buttons
  const navigate = useCallback(
    (direction: -1 | 1) => {
      const nextIndex =
        (currentIndex + direction + experts.length) % experts.length;
      setCurrentIndex(nextIndex);
      setActiveId(experts[nextIndex].id);

      // Scroll into view on mobile
      if (cardRefs.current[nextIndex] && mobileTrackRef.current) {
        cardRefs.current[nextIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    },
    [currentIndex],
  );

  // Mobile touch handlers
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
      navigate(1);
    } else if (diff < -45) {
      navigate(-1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeDisplayIndex =
    activeId !== null
      ? experts.findIndex((e) => e.id === activeId)
      : currentIndex;
  const counterText = String(activeDisplayIndex + 1).padStart(2, "0");

  return (
    <section
      ref={sectionRef}
      id="mentors"
      className="relative w-full bg-[#F7F8FC] px-4 py-20 sm:px-6 md:px-10 md:py-28 lg:px-12 lg:py-32 overflow-hidden border-t border-[#D9DEE7]"
    >
      {/* CSS Keyframes for Subtle Floating Solid Geometric Circles */}
      <style jsx>{`
        @keyframes mentorOrbFloat1 {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(20px, -24px, 0) scale(1.05);
          }
        }

        @keyframes mentorOrbFloat2 {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(0.95);
          }
          50% {
            transform: translate3d(-24px, 18px, 0) scale(1.04);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mentor-orb-float-1,
          .mentor-orb-float-2 {
            animation: none !important;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1500px]">
        {/* ━━━━━━━━ TWO-COLUMN EDITORIAL COMPOSITION ━━━━━━━━
            LEFT (~60%): Mentor Cards Carousel
            RIGHT (~40%): Editorial Headline + Copy + Navigation
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.55fr)_minmax(340px,0.85fr)] gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* ━━━━━━━━ LEFT COLUMN: MENTOR CARDS CAROUSEL (DESKTOP) ━━━━━━━━ */}
          <div className="relative order-2 lg:order-1 w-full">
            {/* Subtle Solid Geometric Floating Circles Behind Cards */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 z-0 overflow-visible select-none"
            >
              {/* Small accent dot (solid FORGE Blue) */}
              <div className="absolute left-2 top-2 h-3.5 w-3.5 rounded-full bg-[#1683E8]" />

              {/* Large subtle solid circle (Light blue #EAF3FF) */}
              <div
                className="mentor-orb-float-1 absolute -left-12 -top-16 h-64 w-64 rounded-full bg-[#EAF3FF]"
                style={{ animation: "mentorOrbFloat1 9s ease-in-out infinite" }}
              />

              {/* Mid-sized subtle solid circle behind card 3 */}
              <div
                className="mentor-orb-float-2 absolute left-[44%] -top-10 h-44 w-44 rounded-full bg-[#EAF3FF]"
                style={{
                  animation: "mentorOrbFloat2 11s ease-in-out infinite -4s",
                }}
              />

              {/* Soft circle on right */}
              <div className="absolute right-6 top-[38%] h-24 w-24 rounded-full bg-[#EAF3FF]" />
            </div>

            {/* Desktop Horizontal Expanding Cards Row (Hidden on mobile/tablet) */}
            <div
              ref={cardsContainerRef}
              onMouseLeave={handleContainerMouseLeave}
              role="region"
              aria-label="Mentor Cards Carousel"
              className="relative z-10 hidden lg:flex items-stretch gap-2.5 xl:gap-3 w-full h-[400px] xl:h-[420px]"
            >
              {experts.map((expert, idx) => {
                const isActive = activeId === expert.id;
                const num = String(idx + 1).padStart(2, "0");

                return (
                  <div
                    key={expert.id}
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    onMouseEnter={() => handleMouseEnter(expert.id, idx)}
                    onClick={() => handleCardClick(expert.id, idx)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isActive}
                    aria-label={`${expert.name}, ${expert.designation}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleCardClick(expert.id, idx);
                      }
                    }}
                    style={{
                      flex: isActive ? "2.1 1 0%" : "1 1 0%",
                      minWidth: isActive ? "320px" : "150px",
                    }}
                    className={`mentor-card group relative h-full rounded-[26px] select-none cursor-pointer transition-all duration-600 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8] focus-visible:ring-offset-2 ${
                      isActive
                        ? "bg-[#1683E8] border border-[#1474CE] shadow-[0_20px_45px_rgba(22,131,232,0.28)] -translate-y-1.5 scale-[1.01] z-20"
                        : "bg-white border border-[#D9DEE7] hover:border-[#1683E8] shadow-[0_6px_24px_rgba(16,42,67,0.04)] hover:shadow-[0_12px_32px_rgba(16,42,67,0.08)] translate-y-0 scale-100 z-10"
                    }`}
                  >
                    {/* Card Interior */}
                    <div className="flex h-full flex-col justify-between p-6 xl:p-7">
                      {/* Top Row: Initials Circle Badge + Index Number */}
                      <div className="flex items-center justify-between">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-full font-clash text-sm font-bold transition-all duration-300 ${
                            isActive
                              ? "bg-[#55A8F2] text-white scale-105"
                              : "bg-[#EAF3FF] text-[#1683E8] group-hover:scale-105"
                          }`}
                        >
                          {initials(expert.name)}
                        </div>

                        <span
                          className={`font-clash text-xs font-bold tracking-wider transition-colors duration-300 ${
                            isActive ? "text-white/90" : "text-[#7A8492]"
                          }`}
                        >
                          {num} / 04
                        </span>
                      </div>

                      {/* Lower Area: Name, Role & Staggered Reveal Content */}
                      <div className="mt-auto">
                        {/* Mentor Name */}
                        <h3
                          className={`font-clash font-bold leading-tight transition-colors duration-300 ${
                            isActive
                              ? "text-2xl xl:text-[26px] text-white"
                              : "text-lg xl:text-xl text-[#111111]"
                          }`}
                        >
                          {expert.name}
                        </h3>

                        {/* Designation & Organisation */}
                        <p
                          className={`font-jakarta mt-1 text-xs xl:text-[13px] leading-snug transition-colors duration-300 ${
                            isActive ? "text-white/90" : "text-[#667085]"
                          }`}
                        >
                          {expert.designation}, {expert.organisation}
                        </p>

                        {/* Collapsible / Expandable Reveal Area */}
                        <div
                          className={`overflow-hidden transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                            isActive
                              ? "max-h-[220px] opacity-100 mt-4 pointer-events-auto"
                              : "max-h-0 opacity-0 mt-0 pointer-events-none"
                          }`}
                        >
                          {/* Skill Tags */}
                          <div
                            className={`flex flex-wrap gap-1.5 pt-1 transition-all duration-300 delay-[120ms] ${
                              isActive
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-2"
                            }`}
                          >
                            {expert.domain.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-[#3FA3F8] border border-white/25 px-2.5 py-0.5 font-jakarta text-[11px] font-semibold text-white tracking-wide"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Contribution / Short Description */}
                          {expert.contribution && (
                            <p
                              className={`font-jakarta mt-2.5 text-xs xl:text-[13px] leading-relaxed text-white/95 line-clamp-2 transition-all duration-300 delay-[180ms] ${
                                isActive
                                  ? "opacity-100 translate-y-0"
                                  : "opacity-0 translate-y-2"
                              }`}
                            >
                              {expert.contribution}.
                            </p>
                          )}

                          {/* CTA: View Profile */}
                          <div
                            className={`pt-3.5 transition-all duration-300 delay-[240ms] ${
                              isActive
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-2"
                            }`}
                          >
                            <Link
                              href="/mentors"
                              className="group/cta inline-flex items-center gap-1.5 font-jakarta text-xs xl:text-[13px] font-bold text-white transition-opacity hover:opacity-90"
                            >
                              <span>View Profile</span>
                              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet Horizontal Swipe Carousel (< 1024px) */}
            <div className="relative z-10 w-full flex flex-col lg:hidden">
              <div
                ref={mobileTrackRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="flex gap-4 overflow-x-auto px-1 py-4 no-scrollbar snap-x snap-mandatory"
              >
                {experts.map((expert, idx) => {
                  const isActive = activeId === expert.id;
                  const num = String(idx + 1).padStart(2, "0");

                  return (
                    <div
                      key={expert.id}
                      onClick={() => handleCardClick(expert.id, idx)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleCardClick(expert.id, idx);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-expanded={isActive}
                      aria-label={`${expert.name}, ${expert.designation}`}
                      className={`w-[80vw] max-w-[340px] shrink-0 snap-center rounded-[26px] select-none cursor-pointer transition-all duration-500 min-h-[360px] flex flex-col justify-between p-6 sm:p-7 ${
                        isActive
                          ? "bg-[#1683E8] border border-[#1474CE] text-white shadow-[0_18px_40px_rgba(22,131,232,0.3)] -translate-y-1"
                          : "bg-white border border-[#D9DEE7] text-[#111111] shadow-[0_6px_20px_rgba(16,42,67,0.04)]"
                      }`}
                    >
                      {/* Top Row */}
                      <div className="flex items-center justify-between">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-full font-clash text-sm font-bold transition-colors ${
                            isActive
                              ? "bg-[#55A8F2] text-white"
                              : "bg-[#EAF3FF] text-[#1683E8]"
                          }`}
                        >
                          {initials(expert.name)}
                        </div>

                        <span
                          className={`font-clash text-xs font-bold tracking-wider ${
                            isActive ? "text-white/90" : "text-[#7A8492]"
                          }`}
                        >
                          {num} / 04
                        </span>
                      </div>

                      {/* Body Content */}
                      <div className="my-auto py-2">
                        <h3
                          className={`font-clash text-xl font-bold leading-snug ${
                            isActive ? "text-white" : "text-[#111111]"
                          }`}
                        >
                          {expert.name}
                        </h3>

                        <p
                          className={`font-jakarta mt-1 text-xs sm:text-[13px] ${
                            isActive ? "text-white/90" : "text-[#667085]"
                          }`}
                        >
                          {expert.designation}, {expert.organisation}
                        </p>

                        {/* Revealed Content on Tap */}
                        <div
                          className={`overflow-hidden transition-all duration-400 ${
                            isActive
                              ? "max-h-[220px] opacity-100 mt-3"
                              : "max-h-0 opacity-0 mt-0"
                          }`}
                        >
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {expert.domain.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-[#3FA3F8] border border-white/20 px-2.5 py-0.5 font-jakarta text-[11px] font-semibold text-white tracking-wide"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {expert.contribution && (
                            <p className="font-jakarta mt-2 text-xs leading-relaxed text-white/95 line-clamp-2">
                              {expert.contribution}.
                            </p>
                          )}

                          <div className="pt-3">
                            <Link
                              href="/mentors"
                              className="inline-flex items-center gap-1.5 font-jakarta text-xs font-bold text-white"
                            >
                              <span>View Profile</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Tap Hint */}
                      <div className="pt-2 border-t border-black/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider font-jakarta">
                        <span
                          className={
                            isActive ? "text-white/80" : "text-[#667085]"
                          }
                        >
                          {isActive ? "TAP TO COLLAPSE" : "TAP TO EXPLORE"}
                        </span>
                        <span
                          className={
                            isActive ? "text-white/80" : "text-[#667085]"
                          }
                        >
                          MENTOR
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ━━━━━━━━ RIGHT COLUMN: EDITORIAL CONTENT & NAVIGATION ━━━━━━━━ */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            {/* Section Eyebrow */}
            <div className="mentor-eyebrow flex items-center gap-3">
              <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
              <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#1683E8]">
                MENTOR NETWORK
              </span>
              <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
            </div>

            {/* Main Editorial Headline */}
            <h2 className="mentor-heading font-clash mt-5 text-[clamp(44px,5vw,72px)] font-bold tracking-tight text-[#111111] leading-[0.98]">
              Learn From
              <br />
              People Who <span className="text-[#1683E8]">Build.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="mentor-desc font-jakarta mt-6 max-w-[500px] text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.55] text-[#667085]">
              FORGE brings learning closer to the real world through
              conversations, workshops, masterclasses, reviews, and mentorship
              with people who have built, operated, researched, led, or solved
              problems in their respective domains.
            </p>

            {/* Circular Navigation & Mentor Counter */}
            <div className="mentor-nav mt-8 sm:mt-10 flex items-center gap-5">
              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  aria-label="Previous mentor"
                  className="flex h-[54px] w-[54px] sm:h-[58px] sm:w-[58px] items-center justify-center rounded-full border border-[#D9DEE7] bg-white text-[#102A43] shadow-[0_4px_16px_rgba(16,42,67,0.04)] transition-all duration-300 hover:scale-105 hover:border-[#1683E8] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8]"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate(1)}
                  aria-label="Next mentor"
                  className="flex h-[54px] w-[54px] sm:h-[58px] sm:w-[58px] items-center justify-center rounded-full bg-[#1683E8] text-white shadow-[0_8px_20px_rgba(22,131,232,0.25)] transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8]"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Dynamic Counter */}
              <div className="flex items-baseline gap-1 font-clash text-lg sm:text-xl font-bold">
                <span className="text-[#1683E8]">{counterText}</span>
                <span className="text-[#718096] font-normal text-base sm:text-lg">
                  / 04
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ━━━━━━━━ FOOTER EDITORIAL LINE ━━━━━━━━ */}
        <div className="mentor-footer mt-16 sm:mt-20 lg:mt-24 pt-8 border-t border-[#D9DEE7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center select-none">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-6 sm:w-8 bg-[#D9DEE7]" />
            <span className="font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#718096]">
              PEOPLE &nbsp;&bull;&nbsp; IDEAS &nbsp;&bull;&nbsp; OPPORTUNITIES
            </span>
          </div>

          <div className="hidden sm:block flex-1 mx-6 h-[1px] bg-[#D9DEE7]" />

          <div className="flex items-center gap-3">
            <span className="font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#718096]">
              BUILT FOR WHAT&apos;S NEXT.
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-[#D9DEE7]" />
          </div>
        </div>
      </div>
    </section>
  );
}
