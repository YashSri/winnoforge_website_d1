"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useModal } from "@/components/modal/ModalContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ecosystemPillars = [
  { step: "01", title: "Institution", subtitle: "THE GROUND" },
  { step: "02", title: "Student / Builder", subtitle: "THE PEOPLE" },
  { step: "03", title: "Mentors", subtitle: "THE SUPPORT" },
  { step: "04", title: "Industry", subtitle: "THE OPPORTUNITY" },
  { step: "05", title: "Innovation", subtitle: "THE PROCESS" },
  { step: "06", title: "Outcomes", subtitle: "THE IMPACT" },
];

export default function IntroWinnovation() {
  const sectionRef = useRef<HTMLElement>(null);
  const { open } = useModal();

  // Scroll to hero video or play overview
  const handleWatchOverview = () => {
    const video = document.querySelector("video");
    if (video) {
      video.scrollIntoView({ behavior: "smooth", block: "center" });
      video.play();
    }
  };

  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".intro-eyebrow", { opacity: 0, y: 20, duration: 0.5 })
        .from(".intro-line", { scaleY: 0, duration: 0.4, transformOrigin: "top" }, "-=0.2")
        .from(".intro-title-line", { opacity: 0, y: 35, duration: 0.7, stagger: 0.12 }, "-=0.2")
        .from(".intro-body", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".intro-ctas", { opacity: 0, y: 20, duration: 0.5 }, "-=0.2")
        .from(".intro-pillar-item", { opacity: 0, y: 25, duration: 0.5, stagger: 0.08 }, "-=0.2");
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-transparent py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8 border-t border-[#D9DEE7]/80 overflow-hidden"
    >
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-center text-center">
        {/* Top Eyebrow */}
        <div className="intro-eyebrow">
          <span className="font-jakarta text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#5F6672] uppercase">
            PEOPLE &times; IDEAS &times; EXECUTION
          </span>
        </div>

        {/* Vertical Connecting Line Accent */}
        <div
          aria-hidden="true"
          className="intro-line w-[1.5px] h-8 sm:h-9 bg-[#111111]/25 mt-2.5 sm:mt-3 mb-2"
        />

        {/* Large Editorial Headline */}
        <h2 className="mt-2.5 font-clash font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.02] tracking-[-0.035em] text-[#111111]">
          <span className="intro-title-line block">Introduction to</span>
          <span className="intro-title-line block text-[#1683E8] mt-1">Winnovation</span>
        </h2>

        {/* Supporting Copy */}
        <p className="intro-body mt-4 sm:mt-5 font-jakarta text-base sm:text-lg md:text-[1.05rem] text-[#5F6672] max-w-2xl mx-auto leading-relaxed font-normal">
          Winnovation is the organization behind FORGE — built to close the gap
          between what students learn in a classroom and what it actually takes
          to build something real.
        </p>

        {/* Centered CTA Area */}
        <div className="intro-ctas mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA */}
          <Link
            href="/ecosystem"
            className="group inline-flex items-center gap-2.5 bg-[#1683E8] hover:bg-[#0F75D4] text-white px-7 py-3 rounded-full font-jakarta text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 shadow-[0_4px_16px_rgba(22,131,232,0.3)] hover:shadow-[0_6px_22px_rgba(22,131,232,0.45)] hover:-translate-y-0.5"
          >
            <span>Explore Ecosystem</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          {/* Secondary CTA: Watch Overview */}
          <button
            type="button"
            onClick={handleWatchOverview}
            className="group inline-flex items-center gap-3 cursor-pointer text-left focus:outline-none"
          >
            <span className="w-10 h-10 rounded-full border border-[#D9DEE7] bg-white flex items-center justify-center text-[#111111] shadow-[0_2px_8px_rgba(16,42,67,0.04)] group-hover:border-[#1683E8] group-hover:scale-105 transition-all">
              <Play
                className="w-4 h-4 ml-0.5 fill-[#111111] text-[#111111]"
                aria-hidden="true"
              />
            </span>
            <span className="flex flex-col transition-transform duration-200 group-hover:translate-x-0.5">
              <span className="font-jakarta text-sm font-semibold text-[#111111] leading-tight">
                Watch Overview
              </span>
              <span className="font-jakarta text-xs text-[#5F6672]">
                60 seconds
              </span>
            </span>
          </button>
        </div>

        {/* 6-Step Ecosystem Pipeline Strip */}
        <div className="w-full mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#D9DEE7]/70">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 lg:gap-2 items-center justify-between">
            {ecosystemPillars.map((item, idx) => (
              <div key={item.step} className="intro-pillar-item flex items-center justify-center lg:justify-between w-full">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  {/* Step Number */}
                  <span className="font-clash font-bold text-xs sm:text-[13px] text-[#1683E8] tracking-wider">
                    {item.step}
                  </span>

                  {/* Pillar Title */}
                  <span className="font-clash font-bold text-base sm:text-lg text-[#111111] mt-1 leading-snug whitespace-nowrap">
                    {item.title}
                  </span>

                  {/* Subtitle */}
                  <span className="font-jakarta text-[10px] sm:text-[11px] font-semibold text-[#5F6672] tracking-[0.15em] uppercase mt-1">
                    {item.subtitle}
                  </span>
                </div>

                {/* Horizontal connector line (desktop only) */}
                {idx < ecosystemPillars.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:block h-[1.5px] w-8 xl:w-12 bg-[#D9DEE7] mx-2"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
