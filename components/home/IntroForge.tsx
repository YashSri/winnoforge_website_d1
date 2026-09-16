"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const systemSteps = [
  {
    step: "01",
    title: "Institution",
    description: "Colleges and universities open the ground.",
  },
  {
    step: "02",
    title: "Student / Builder",
    description: "Ideas meet opportunity.",
  },
  {
    step: "03",
    title: "Mentors",
    description: "Guidance at every step.",
  },
  {
    step: "04",
    title: "Industry",
    description: "Real-world exposure.",
  },
  {
    step: "05",
    title: "Innovation",
    description: "From ideas to impact.",
  },
  {
    step: "06",
    title: "Outcomes",
    description: "A brighter tomorrow.",
  },
];

export default function IntroForge() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

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

        tl.from(".forge-eyebrow", { opacity: 0, y: 20, duration: 0.5 })
        .from(".forge-title-line", { opacity: 0, y: 35, duration: 0.7, stagger: 0.12 }, "-=0.2")
        .from(".forge-body", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".forge-step-node", { opacity: 0, y: 25, duration: 0.5, stagger: 0.08 }, "-=0.2");
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-transparent py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8 border-t border-[#D9DEE7]/80 overflow-hidden"
    >
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-center text-center">
        {/* Top Eyebrow with Wings: — THE SYSTEM — */}
        <div className="forge-eyebrow flex items-center justify-center gap-3 sm:gap-4 w-full max-w-xs mx-auto">
          <span aria-hidden="true" className="flex-1 h-[1.5px] bg-[#111111]/25" />
          <span className="font-jakarta text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#5F6672] uppercase whitespace-nowrap">
            THE SYSTEM
          </span>
          <span aria-hidden="true" className="flex-1 h-[1.5px] bg-[#111111]/25" />
        </div>

        {/* Massive Editorial Headline */}
        <h2 className="mt-4 sm:mt-5 font-clash font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.02] tracking-[-0.035em] text-[#111111]">
          <span className="forge-title-line block">Introduction to</span>
          <span className="forge-title-line block text-[#1683E8] mt-1">FORGE</span>
        </h2>

        {/* Supporting Copy */}
        <p className="forge-body mt-3.5 sm:mt-4 font-jakarta text-base sm:text-lg md:text-[1.05rem] text-[#5F6672] max-w-3xl mx-auto leading-relaxed font-normal">
          FORGE is the execution engine: institutions provide the ground, students step up as builders,
          mentors keep the bar high, and industry brings problems worth solving. Explore how a builder
          moves through the system.
        </p>

        {/* 6-Step Connected Builder Track */}
        <div className="w-full mt-8 sm:mt-10 relative">
          {/* Continuous Connecting Line Behind Dots (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[43px] left-[8%] right-[8%] h-[2px] bg-[#D9DEE7] z-0"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-5 lg:gap-3 items-start justify-between relative z-10">
            {systemSteps.map((item, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className="forge-step-node flex flex-col items-center text-center cursor-pointer group transition-all"
                >
                  {/* Step Number */}
                  <span
                    className={`font-clash font-bold text-xs sm:text-[13px] tracking-wider transition-colors duration-200 ${isActive
                        ? "text-[#1683E8]"
                        : "text-[#5F6672] group-hover:text-[#1683E8]"
                      }`}
                  >
                    {item.step}
                  </span>

                  {/* Connected Node Dot */}
                  <div className="my-2.5 sm:my-3 flex items-center justify-center h-6">
                    <div
                      className={`rounded-full transition-all duration-300 ${isActive
                          ? "w-4 h-4 bg-[#1683E8] ring-4 ring-blue-100 shadow-[0_0_10px_rgba(22,131,232,0.4)]"
                          : "w-3 h-3 bg-[#CBD5E1] group-hover:bg-[#1683E8]/60 group-hover:scale-110"
                        }`}
                    />
                  </div>

                  {/* Step Title */}
                  <span className="font-clash font-bold text-base sm:text-lg text-[#111111] leading-snug mt-1 transition-colors group-hover:text-[#1683E8]">
                    {item.title}
                  </span>

                  {/* Step Description */}
                  <span className="font-jakarta text-xs sm:text-[13px] text-[#5F6672] max-w-[170px] mt-1.5 leading-snug font-normal">
                    {item.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
