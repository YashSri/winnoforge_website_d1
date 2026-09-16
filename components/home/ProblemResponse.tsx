"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Check, X } from "lucide-react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const problems = [
  "Theory without enough application.",
  "Limited exposure to real industry workflows.",
  "Few opportunities to build with accountability.",
  "Weak connection between campus activity and career readiness.",
];

const responses = [
  "Industry-aligned curriculum.",
  "Hands-on practical work.",
  "Mentor-led feedback.",
  "Project and portfolio development.",
  "Innovation and entrepreneurship exposure.",
];

export default function ProblemResponse() {
  const sectionRef = useRef<HTMLElement>(null);

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

      tl.from(".gap-eyebrow", { opacity: 0, y: 20, duration: 0.5 })
        .from(".gap-title-line", { opacity: 0, y: 35, duration: 0.7, stagger: 0.12 }, "-=0.2")
        .from(".gap-body", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".gap-left-card", { opacity: 0, x: -30, duration: 0.7 }, "-=0.2")
        .from(".gap-center-divider", { opacity: 0, scale: 0.9, duration: 0.5 }, "-=0.5")
        .from(".gap-right-card", { opacity: 0, x: 30, duration: 0.7 }, "-=0.6");
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-transparent py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8 border-t border-[#D9DEE7]/80 overflow-hidden"
    >
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-center text-center">
        {/* Top Eyebrow with Wings: — THE GAP — */}
        <div className="gap-eyebrow flex items-center justify-center gap-3 sm:gap-4 w-full max-w-xs mx-auto">
          <span aria-hidden="true" className="flex-1 h-[1.5px] bg-[#111111]/25" />
          <span className="font-jakarta text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#5F6672] uppercase whitespace-nowrap">
            THE GAP
          </span>
          <span aria-hidden="true" className="flex-1 h-[1.5px] bg-[#111111]/25" />
        </div>

        {/* Large Editorial Headline */}
        <h2 className="mt-4 sm:mt-5 font-clash font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.02] tracking-[-0.035em] text-[#111111]">
          <span className="gap-title-line block">A System Built to</span>
          <span className="gap-title-line block text-[#1683E8] mt-1">
            Bridge the Gap
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="gap-body mt-3.5 sm:mt-4 font-jakarta text-base sm:text-lg md:text-[1.05rem] text-[#5F6672] max-w-2xl mx-auto leading-relaxed font-normal">
          Traditional education gives you knowledge. FORGE gives you context,
          execution, and real-world exposure.
        </p>

        {/* Bento Cards Comparison Container */}
        <div className="w-full mt-8 sm:mt-10 md:mt-12 flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8">
          {/* Left Card: THE PROBLEM */}
          <div className="gap-left-card flex-1 w-full rounded-[28px] border border-[#D9DEE7] bg-white p-7 sm:p-9 lg:p-10 shadow-[0_4px_25px_rgba(16,42,67,0.04)] text-left flex flex-col justify-between h-full">
            <div className="flex flex-col flex-1">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="font-jakarta text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#5F6672] uppercase">
                  THE PROBLEM
                </span>
                <span
                  aria-hidden="true"
                  className="w-8 sm:w-10 h-[1.5px] bg-[#111111]/25 inline-block"
                />
              </div>

              {/* Card Heading */}
              <h3 className="font-clash font-bold text-2xl sm:text-3xl text-[#111111] mt-3 tracking-tight">
                Where Students Get Stuck
              </h3>

              {/* Items List - Evenly spaced to match height */}
              <ul className="mt-7 sm:mt-8 flex flex-col justify-between flex-1 gap-5 lg:gap-6">
                {problems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 border-b border-[#D9DEE7]/70 pb-4 lg:pb-5 last:border-b-0 last:pb-0"
                  >
                    <span
                      aria-hidden="true"
                      className="w-6 h-6 rounded-full border border-red-300 bg-red-50/70 flex items-center justify-center shrink-0 mt-0.5"
                    >
                      <X className="w-3.5 h-3.5 text-red-500 stroke-[2.5]" />
                    </span>
                    <span className="font-jakarta text-sm sm:text-[15px] text-[#111111]/85 font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center Connector (FROM GAPS TO GROWTH) */}
          <div className="gap-center-divider flex lg:flex-col items-center justify-center gap-3 shrink-0 py-2 lg:py-0 self-center">
            <span
              aria-hidden="true"
              className="hidden lg:block w-[1px] h-20 bg-[#D9DEE7]"
            />
            <div className="flex flex-row lg:flex-col items-center gap-1 font-mono text-[10px] font-bold tracking-[0.22em] text-[#5F6672] uppercase text-center leading-tight whitespace-nowrap">
              <span>FROM</span>
              <span>GAPS</span>
              <span>TO</span>
              <span>GROWTH</span>
            </div>
            <span
              aria-hidden="true"
              className="hidden lg:block w-[1px] h-20 bg-[#D9DEE7]"
            />
          </div>

          {/* Right Card: THE FORGE RESPONSE */}
          <div className="gap-right-card flex-1 w-full rounded-[28px] border-2 border-blue-400/80 bg-white p-7 sm:p-9 lg:p-10 shadow-[0_8px_30px_rgba(22,131,232,0.08)] text-left flex flex-col justify-between h-full">
            <div className="flex flex-col flex-1">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="font-jakarta text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#1683E8] uppercase">
                  THE FORGE RESPONSE
                </span>
                <span
                  aria-hidden="true"
                  className="w-8 sm:w-10 h-[1.5px] bg-[#1683E8]/40 inline-block"
                />
              </div>

              {/* Card Heading */}
              <h3 className="font-clash font-bold text-2xl sm:text-3xl text-[#111111] mt-3 tracking-tight">
                Turning Potential into Progress
              </h3>

              {/* Items List */}
              <ul className="mt-7 sm:mt-8 flex flex-col justify-between flex-1 gap-3.5 lg:gap-4">
                {responses.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 border-b border-[#D9DEE7]/70 pb-3.5 lg:pb-4 last:border-b-0 last:pb-0"
                  >
                    <span
                      aria-hidden="true"
                      className="w-6 h-6 rounded-full bg-[#1683E8] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_2px_8px_rgba(22,131,232,0.35)]"
                    >
                      <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    </span>
                    <span className="font-jakarta text-sm sm:text-[15px] text-[#111111] font-semibold leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
