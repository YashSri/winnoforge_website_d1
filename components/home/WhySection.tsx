"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowLeft, ArrowRight, Rocket, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureCard {
  id: string;
  num: string;
  icon: typeof Rocket;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  orbs: {
    size: string;
    color: string;
    position: string;
    animation: string;
  }[];
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "card-execution",
    num: "01",
    icon: Rocket,
    title: "Execution-led,\nnot lecture-led",
    description:
      "Every builder ships something real — a prototype, a product, a pitch — instead of sitting through another theory module.",
    ctaText: "BUILD",
    ctaHref: "/programs",
    orbs: [
      {
        size: "w-36 h-36 sm:w-40 sm:h-40",
        color: "bg-[#1683E8]",
        position: "-top-12 -left-10",
        animation: "orb-float-1",
      },
      {
        size: "w-28 h-28 sm:w-32 sm:h-32",
        color: "bg-[#EAF3FF]",
        position: "-bottom-8 -left-6",
        animation: "orb-float-2",
      },
      {
        size: "w-20 h-20 sm:w-24 sm:h-24",
        color: "bg-[#1683E8]",
        position: "top-1/2 -right-8",
        animation: "orb-float-3",
      },
    ],
  },
  {
    id: "card-standards",
    num: "02",
    icon: ShieldCheck,
    title: "Industry-backed\nstandards",
    description:
      "Mentors and problem statements come from operators who've actually built and shipped, so the bar stays real.",
    ctaText: "LEARN",
    ctaHref: "/mentors",
    orbs: [
      {
        size: "w-32 h-32 sm:w-36 sm:h-36",
        color: "bg-[#EAF3FF]",
        position: "-top-14 left-1/4",
        animation: "orb-float-2",
      },
      {
        size: "w-40 h-40 sm:w-44 sm:h-44",
        color: "bg-[#1683E8]",
        position: "-bottom-12 -right-6",
        animation: "orb-float-1",
      },
      {
        size: "w-16 h-16 sm:w-20 sm:h-20",
        color: "bg-[#EAF3FF]",
        position: "top-1/3 -left-6",
        animation: "orb-float-3",
      },
    ],
  },
  {
    id: "card-student-run",
    num: "03",
    icon: Users,
    title: "Student-run,\nnot top-down",
    description:
      "Builders run the show — FORGE gives them the structure, network, and accountability to do it well.",
    ctaText: "BELONG",
    ctaHref: "/community",
    orbs: [
      {
        size: "w-36 h-36 sm:w-40 sm:h-40",
        color: "bg-[#1683E8]",
        position: "-top-10 -right-10",
        animation: "orb-float-1",
      },
      {
        size: "w-28 h-28 sm:w-32 sm:h-32",
        color: "bg-[#EAF3FF]",
        position: "top-1/2 -right-12",
        animation: "orb-float-2",
      },
      {
        size: "w-24 h-24 sm:w-28 sm:h-28",
        color: "bg-[#1683E8]",
        position: "-bottom-10 right-1/4",
        animation: "orb-float-3",
      },
    ],
  },
];

export default function WhySection() {
  // Initial state: null (all cards identical on page load per Section 10)
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Entrance animation via ScrollTrigger
  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".why-eyebrow",
            ".why-heading",
            ".why-desc",
            ".why-nav",
            ".why-card-wrapper",
            ".why-editorial",
            ".why-footer",
          ],
          { opacity: 1, y: 0, scale: 1, clearProps: "all" }
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
          gsap.set([".why-card-wrapper", ".why-card-item"], {
            clearProps: "transform,opacity",
          });
        },
      });

      tl.from(".why-eyebrow", {
        opacity: 0,
        y: 16,
        duration: 0.5,
      })
        .from(
          ".why-heading",
          {
            opacity: 0,
            y: 24,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".why-desc",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".why-nav",
          {
            opacity: 0,
            y: 16,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          ".why-card-wrapper",
          {
            opacity: 0,
            y: 28,
            duration: 0.75,
            stagger: 0.1,
          },
          "-=0.3"
        )
        .from(
          ".why-editorial",
          {
            opacity: 0,
            x: 20,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".why-footer",
          {
            opacity: 0,
            y: 12,
            duration: 0.5,
          },
          "-=0.3"
        );
    },
    { scope: sectionRef }
  );

  // Navigate cards (updates counter and scrolls mobile carousel)
  const navigate = useCallback((direction: -1 | 1) => {
    setCurrentIndex((prev) => {
      const next = (prev + direction + FEATURE_CARDS.length) % FEATURE_CARDS.length;
      setActiveCardIndex(next);

      // Scroll into view on mobile / touch carousel
      if (cardRefs.current[next] && carouselTrackRef.current) {
        cardRefs.current[next]?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
      return next;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-forge"
      className="relative w-full bg-[#F7F8FC] py-20 md:py-28 lg:py-32 overflow-hidden border-t border-[#D9DEE7]"
    >
      {/* CSS Keyframes for Pure Solid Geometric Orb Animations (No Blur, No Gradients) */}
      <style jsx>{`
        @keyframes orbFloat1 {
          0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          25% {
            transform: translate3d(24px, -28px, 0) scale(1.08) rotate(45deg);
          }
          50% {
            transform: translate3d(36px, 16px, 0) scale(0.95) rotate(90deg);
          }
          75% {
            transform: translate3d(10px, 30px, 0) scale(1.04) rotate(135deg);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1) rotate(180deg);
          }
        }

        @keyframes orbFloat2 {
          0% {
            transform: translate3d(0, 0, 0) scale(0.95);
          }
          25% {
            transform: translate3d(-26px, 22px, 0) scale(1.06);
          }
          50% {
            transform: translate3d(-34px, -22px, 0) scale(0.93);
          }
          75% {
            transform: translate3d(12px, -28px, 0) scale(1.03);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(0.95);
          }
        }

        @keyframes orbFloat3 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% {
            transform: translate3d(22px, 24px, 0) scale(1.05);
          }
          66% {
            transform: translate3d(-20px, -18px, 0) scale(0.94);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        .orb-float-1 {
          animation: orbFloat1 10s ease-in-out infinite;
          will-change: transform;
        }

        .orb-float-2 {
          animation: orbFloat2 11s ease-in-out infinite -3s;
          will-change: transform;
        }

        .orb-float-3 {
          animation: orbFloat3 9s ease-in-out infinite -5s;
          will-change: transform;
        }

        /* Hover acceleration: orbs float slightly faster and closer */
        .why-card-wrapper:hover .orb-float-1 {
          animation-duration: 5.5s;
        }
        .why-card-wrapper:hover .orb-float-2 {
          animation-duration: 6s;
        }
        .why-card-wrapper:hover .orb-float-3 {
          animation-duration: 5s;
        }

        @media (prefers-reduced-motion: reduce) {
          .orb-float-1,
          .orb-float-2,
          .orb-float-3 {
            animation: none !important;
          }
        }
      `}</style>

      {/* Decorative Solid Blue Accent Markers in Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-[#1683E8]/70" />
        <div className="absolute top-12 left-1/3 w-2.5 h-2.5 rounded-full bg-[#1683E8]/40" />
        <div className="absolute bottom-20 left-16 w-3.5 h-3.5 rounded-full bg-[#1683E8]/60" />
        <div className="absolute top-16 right-20 w-3 h-3 rounded-full bg-[#1683E8]/70" />
        <div className="absolute bottom-24 right-1/4 w-2.5 h-2.5 rounded-full bg-[#1683E8]/50" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Main Desktop Composition: Left Text (~34%) vs Right Cards (~66%) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 xl:gap-16">
          {/* LEFT SIDE: Editorial Text Block */}
          <div className="w-full lg:w-[35%] xl:w-[32%] flex flex-col justify-center shrink-0">
            {/* Eyebrow */}
            <div className="why-eyebrow flex items-center gap-3">
              <span className="font-jakarta text-xs font-bold uppercase tracking-[0.22em] text-[#5F6672]">
                THE FORGE DIFFERENCE
              </span>
              <div className="w-12 h-[1.5px] bg-[#D9DEE7]" />
            </div>

            {/* Main Headline */}
            <h2 className="why-heading font-clash text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-bold text-[#111111] leading-[0.98] tracking-[-0.02em] mt-6">
              Why Winnovation
              <br />
              and <span className="text-[#1683E8]">FORGE</span>
            </h2>

            {/* Supporting Copy */}
            <p className="why-desc font-jakarta text-base sm:text-lg text-[#5F6672] leading-relaxed mt-6 max-w-[500px]">
              A hands-on, high-trust ecosystem where students, mentors, and
              real-world problems come together to turn ideas into impact.
            </p>

            {/* Navigation Controls: Circular Buttons + 01 / 03 Counter */}
            <div className="why-nav mt-10 sm:mt-12 flex items-center gap-5">
              {/* Previous Button (White with border) */}
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#D9DEE7] bg-white text-[#111111] hover:bg-[#1683E8] hover:border-[#1683E8] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Previous card"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Next Button (Solid FORGE Blue) */}
              <button
                type="button"
                onClick={() => navigate(1)}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1683E8] text-white hover:scale-105 flex items-center justify-center transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-sm cursor-pointer"
                aria-label="Next card"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Counter with Active Segment Indicator */}
              <div className="flex items-center gap-4 ml-2">
                <div className="font-jakarta text-sm md:text-base font-semibold tracking-wider text-[#5F6672]">
                  <span className="text-[#1683E8] font-bold text-lg md:text-xl">
                    {`0${currentIndex + 1}`}
                  </span>
                  <span className="text-[#5F6672]/60"> / 03</span>
                </div>

                {/* Subtle horizontal track indicator */}
                <div className="hidden sm:flex items-center w-16 h-[2px] bg-[#D9DEE7] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1683E8] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: `${((currentIndex + 1) / 3) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Three Feature Cards + Animated Solid Orbs + Vertical Editorial Label */}
          <div className="w-full lg:w-[65%] xl:w-[68%] flex items-center justify-end relative">
            {/* Scrollable container on mobile, flex grid on desktop */}
            <div
              ref={carouselTrackRef}
              className="flex items-stretch gap-6 sm:gap-7 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 pt-8 px-2 w-full max-w-[1020px] scrollbar-none snap-x snap-mandatory"
            >
              {FEATURE_CARDS.map((card, idx) => {
                const Icon = card.icon;
                const isHoveredOrActive = activeCardIndex === idx;

                return (
                  <div
                    key={card.id}
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    className="why-card-wrapper relative shrink-0 snap-center w-[85vw] sm:w-[310px] md:w-[320px] lg:w-[310px] xl:w-[325px] select-none"
                    onMouseEnter={() => setActiveCardIndex(idx)}
                    onMouseLeave={() => setActiveCardIndex(null)}
                    onClick={() =>
                      setActiveCardIndex((prev) => (prev === idx ? null : idx))
                    }
                  >
                    {/* ANIMATED SOLID BLUE ORBS BEHIND THE CARD (Z-Index 0) */}
                    <div
                      className="absolute inset-0 pointer-events-none z-0 overflow-visible"
                      aria-hidden="true"
                    >
                      {card.orbs.map((orb, orbIdx) => (
                        <div
                          key={`orb-${card.id}-${orbIdx}`}
                          className={`absolute rounded-full ${orb.size} ${orb.color} ${orb.position} ${orb.animation}`}
                        />
                      ))}
                    </div>

                    {/* SOLID WHITE CARD (Z-Index 10) */}
                    <div
                      className={`why-card-item relative z-10 w-full h-[400px] sm:h-[420px] rounded-[24px] bg-[#FFFFFF] border p-8 sm:p-9 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isHoveredOrActive
                          ? "border-[#1683E8] -translate-y-2.5 scale-[1.015] shadow-[0_20px_45px_rgba(22,131,232,0.12)]"
                          : "border-[#D9DEE7] shadow-[0_12px_35px_rgba(16,42,67,0.06)] hover:-translate-y-2.5 hover:scale-[1.015] hover:border-[#1683E8] hover:shadow-[0_20px_45px_rgba(22,131,232,0.12)]"
                      }`}
                    >
                      <div>
                        {/* TOP: Index & subtle accent dash */}
                        <div className="flex items-center justify-between">
                          <span className="font-jakarta text-base font-bold text-[#5F6672]">
                            {card.num}
                          </span>
                          <div className="w-8 h-[1.5px] bg-[#D9DEE7]" />
                        </div>

                        {/* Circular Icon Container */}
                        <div
                          className={`mt-6 w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isHoveredOrActive
                              ? "bg-[#1683E8] text-white scale-105"
                              : "bg-[#EAF3FF] text-[#1683E8] group-hover:bg-[#1683E8] group-hover:text-white group-hover:scale-105"
                          }`}
                        >
                          <Icon className="w-6 h-6 transition-transform duration-300" />
                        </div>

                        {/* Heading */}
                        <h3
                          className={`font-clash text-xl sm:text-2xl font-bold text-[#111111] leading-tight mt-6 transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-pre-line ${
                            isHoveredOrActive ? "-translate-y-0.5" : ""
                          }`}
                        >
                          {card.title}
                        </h3>

                        {/* Description */}
                        <p
                          className={`font-jakarta text-sm text-[#5F6672] leading-relaxed mt-4 transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isHoveredOrActive ? "-translate-y-0.5" : ""
                          }`}
                        >
                          {card.description}
                        </p>
                      </div>

                      {/* BOTTOM: Action CTA */}
                      <Link
                        href={card.ctaHref}
                        className="w-fit flex items-center gap-1.5 font-jakarta text-xs font-bold tracking-[0.16em] uppercase text-[#1683E8] group/btn pt-4"
                      >
                        <span>{card.ctaText}</span>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isHoveredOrActive
                              ? "translate-x-1.5"
                              : "group-hover/btn:translate-x-1.5"
                          }`}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FAR RIGHT: Vertical Editorial Label (Desktop Only) */}
            <div className="why-editorial hidden xl:flex items-center gap-4 shrink-0 pl-6 select-none">
              <div className="w-[1px] h-32 bg-[#D9DEE7]" />
              <div className="flex flex-col gap-1.5 font-jakarta text-[11px] font-bold uppercase tracking-[0.18em] text-[#718096]">
                <span>PEOPLE</span>
                <span>IDEAS</span>
                <span>BUILDING</span>
                <span>IMPACT</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM EDITORIAL FOOTER LINE */}
        <div className="why-footer mt-16 sm:mt-24 pt-8 border-t border-[#D9DEE7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#718096]">
            MORE TO COME.
          </span>

          <div className="hidden md:flex items-center gap-3 flex-1 max-w-md mx-8">
            <div className="h-[1px] bg-[#D9DEE7] flex-1" />
            <div className="w-2 h-2 rounded-full bg-[#1683E8]" />
            <div className="h-[1px] bg-[#D9DEE7] flex-1" />
          </div>

          <span className="font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#718096]">
            IDEAS TODAY. IMPACT TOMORROW.
          </span>
        </div>
      </div>
    </section>
  );
}
