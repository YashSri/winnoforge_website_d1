"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TimelineStep {
  title: string;
  description: string;
}

export default function ProcessTimeline({ steps }: { steps: TimelineStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined" || !containerRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".pt-step-card", {
          opacity: 1,
          y: 0,
          scale: 1,
          clearProps: "all",
        });
        return;
      }

      gsap.from(".pt-step-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
        opacity: 0,
        y: 28,
        duration: 0.65,
        stagger: 0.07,
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        clearProps: "opacity",
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
    >
      {steps.map((step, i) => {
        const num = String(i + 1).padStart(2, "0");

        return (
          <div
            key={step.title}
            tabIndex={0}
            className="pt-step-card group relative flex flex-col justify-between rounded-[22px] border border-[#D9DEE7] bg-[#FFFFFF] p-6 sm:p-7 shadow-[0_8px_24px_rgba(16,42,67,0.04)] select-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#1683E8] hover:border-[#1474CE] hover:shadow-[0_20px_45px_rgba(22,131,232,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8] focus-visible:ring-offset-2"
          >
            <div>
              {/* Top Step Number Circle & Step Label */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF3FF] font-clash text-sm font-bold text-[#1683E8] transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#55A8F2] group-hover:text-white group-hover:scale-108 shadow-sm">
                  {num}
                </div>

                <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.16em] text-[#7A8492] transition-colors duration-300 group-hover:text-white/80">
                  STEP {num}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="font-clash text-xl font-bold text-[#111111] transition-colors duration-300 group-hover:text-white mt-5 leading-snug">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="font-jakarta text-sm leading-relaxed text-[#5F6672] transition-colors duration-300 group-hover:text-white/90 mt-2.5">
                {step.description}
              </p>
            </div>

            {/* Bottom Progress Connector Micro-Indicator */}
            <div className="mt-6 pt-3.5 border-t border-[#D9DEE7]/70 transition-colors duration-300 group-hover:border-white/20 flex items-center justify-between text-xs">
              <span className="font-jakarta text-[11px] font-semibold text-[#7A8492] transition-colors duration-300 group-hover:text-white/80">
                Phase {Math.ceil((i + 1) / 2)}
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-[#1683E8] transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
