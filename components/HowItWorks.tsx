"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "Activation.",
    description:
      "Seminars, workshops, and campus challenges build the rhythm of execution. Students learn by doing, show contribution quality, and earn momentum toward the next stage.",
    cta: "Activation",
    image: "/webp/activation-builders.webp",
    align: "right" as const,
  },
  {
    id: 2,
    title: "Bootcamp.",
    description:
      "Top performers enter an intensive week to sharpen problem statements, validate users, and shape MVP roadmaps. Teams leave aligned, prepared, and ready to build.",
    cta: "Bootcamp",
    image: "/webp/2.webp",
    align: "left" as const,
  },
  {
    id: 3,
    title: "Citadel.",
    description:
      "Sprint cycles, mentor reviews, and real prototype work move teams from plan to product. The Citadel keeps progress visible, accountable, and shipping every week.",
    cta: "Citadel",
    image: "/webp/3.webp",
    align: "center" as const,
  },
  {
    id: 4,
    title: "Launch.",
    description:
      "Refined ventures step into demo days, summit stages, and partner rooms. Validated MVPs meet industry, investors, and the first users who matter.",
    cta: "Launch",
    image: "/launch-step-4.jpg",
    align: "left" as const,
  },
];

const alignConfig = {
  left: { justify: "md:justify-start", direction: "md:flex-row" },
  center: { justify: "md:justify-center", direction: "md:flex-row" },
  right: { justify: "md:justify-end", direction: "md:flex-row-reverse" },
};

const strokePath = "M 856 50 Q 550 200 144 316 C 50 800 700 1200 108 1396";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".zigzag-card");

      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();

        gsap.set(pathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top+=450 center",
            end: "bottom center",
            scrub: 1,
          },
        });
      }

      cards.forEach((card) => {
        const dir = card.dataset.dir;
        const xStart = dir === "right" ? 100 : dir === "left" ? -100 : 0;
        const yStart = dir === "center" ? 60 : 0;

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=60",
            toggleActions: "play none none none",
          },
          x: xStart,
          y: yStart,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="programs"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div className="absolute right-40 inset-0 hidden md:flex justify-center items-start pointer-events-none z-0 opacity-100">
        <svg
          aria-hidden="true"
          className="w-full max-w-200 h-auto mt-150"
          viewBox="0 0 879 1397"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin meet"
        >
          <path
            ref={pathRef}
            d={strokePath}
            stroke="#4D96FF"
            strokeWidth="100"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="font-varela font-bold text-5xl md:text-7xl text-center mb-6 text-foreground">
          The <span className="text-primary">Forge Engine</span>
        </h2>
        <p className="font-jakarta text-foreground/60 text-center text-lg max-w-md mx-auto mb-20">
          Four stages. One relentless cycle. Every step pushes you closer to
          launch.
        </p>

        <div className="flex flex-col">
          {steps.map((step) => {
            const cfg = alignConfig[step.align];
            const topMargin = step.id === 4 ? "mt-40 md:mt-56" : "mt-12";

            return (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row ${cfg.justify} items-center`}
              >
                <div
                  className={`zigzag-card flex flex-col gap-6 ${cfg.direction} items-center w-full md:w-[75%] lg:w-[65%] ${topMargin}`}
                  data-dir={step.align}
                >

                  <div className={`w-full md:w-1/2 relative shrink-0 ${step.id === 4 ? "z-20" : "z-10"}`}>
                    <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl group">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                  </div>

                  <div className={`w-full md:w-1/2 ${step.id === 4 ? "z-20 relative" : ""}`}>
                    <span className="font-mono text-sm tracking-widest text-foreground/40 uppercase mb-3 block">
                      Step 0{step.id}
                    </span>

                    <h3 className="font-varela font-bold text-4xl md:text-5xl text-foreground mb-5 leading-tight">
                      {step.title}
                    </h3>

                    <p className="font-jakarta text-foreground/70 text-base md:text-lg leading-relaxed mb-8">
                      {step.description}
                    </p>

                    {/* <a
                      href="#programs"
                      className="inline-flex items-center gap-2 border-2 border-foreground rounded-full px-5 py-2.5 font-jakarta font-semibold text-sm text-foreground hover:bg-foreground hover:text-background transition-all duration-300 group"
                    >
                      {step.cta}
                      <span className="bg-primary rounded-full p-1 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                        <ArrowRight size={14} className="text-white" />
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
