"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight, BarChart3, Box, Users2 } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useModal } from "@/components/modal/ModalContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


const featurePills = [
  { icon: BarChart3, label: "Execution Pipeline" },
  { icon: Box, label: "Build Real MVPs" },
  { icon: Users2, label: "Mentor Sprint Reviews" },
];

const statsData = [
  { value: 500, suffix: "+", label: "Builders" },
  { value: 50, suffix: "+", label: "Projects Launched" },
  { value: 20, suffix: "+", label: "Industry Mentors" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { open } = useModal();

  // Counter state
  const [counters, setCounters] = useState<number[]>([0, 0, 0]);
  const counterTweenRef = useRef<gsap.core.Tween | null>(null);

  // Function to smoothly animate counters using GSAP - re-runnable on scroll
  const triggerCounterAnimation = useCallback(() => {
    if (counterTweenRef.current) {
      counterTweenRef.current.kill();
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setCounters(statsData.map((s) => s.value));
      return;
    }

    const state = { val0: 0, val1: 0, val2: 0 };
    setCounters([0, 0, 0]);

    counterTweenRef.current = gsap.to(state, {
      val0: 500,
      val1: 50,
      val2: 20,
      duration: 2.0,
      ease: "power2.out",
      onUpdate: () => {
        setCounters([
          Math.round(state.val0),
          Math.round(state.val1),
          Math.round(state.val2),
        ]);
      },
      onComplete: () => {
        setCounters([500, 50, 20]);
      },
    });
  }, []);

  useEffect(() => {
    let hasScrolledDown = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 250) {
        hasScrolledDown = true;
      } else if (scrollY <= 20 && hasScrolledDown) {
        hasScrolledDown = false;
        triggerCounterAnimation();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerCounterAnimation]);

  // GSAP Hero Entrance Sequence
  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setCounters([500, 50, 20]);
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Step 1: Initial state set
      gsap.set(".hero-eyebrow", { opacity: 0, y: 20 });
      gsap.set(".hero-headline-line", {
        opacity: 0,
        y: 35,
        filter: "blur(6px)",
      });
      gsap.set(".hero-description", { opacity: 0, y: 20 });
      gsap.set(".hero-feature-pill", { opacity: 0, y: 18, scale: 0.98 });
      gsap.set(".hero-cta-area", { opacity: 0, y: 20 });
      gsap.set(".hero-video-box", { opacity: 0, scale: 0.96, y: 20 });
      gsap.set(".hero-bottom-strip", { opacity: 0, y: 20 });

      // Step 2-8: Sequential cinematic reveal
      tl.delay(0.15)
        .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.4 })
        .to(
          ".hero-headline-line",
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.2",
        )
        .to(".hero-description", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to(
          ".hero-feature-pill",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.1,
          },
          "-=0.25",
        )
        .to(".hero-cta-area", { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        .to(
          ".hero-video-box",
          { opacity: 1, scale: 1, y: 0, duration: 0.8 },
          "-=0.45",
        )
        .to(
          ".hero-bottom-strip",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            onStart: () => {
              triggerCounterAnimation();
            },
          },
          "-=0.3",
        );

      // ScrollTrigger for counter animations in Hero stats
      if (statsRef.current) {
        ScrollTrigger.create({
          trigger: statsRef.current,
          start: "top 95%",
          onEnter: () => {
            triggerCounterAnimation();
          },
          onEnterBack: () => {
            triggerCounterAnimation();
          },
          onLeave: () => {
            setCounters([0, 0, 0]);
          },
        });
      }

      // Re-trigger counter animation whenever user scrolls back up into the hero section
      if (containerRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          onEnterBack: () => {
            triggerCounterAnimation();
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-transparent pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-10 overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Text & Content (~42%) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
            {/* Top Eyebrow */}
            <div className="hero-eyebrow flex items-center gap-3">
              <span className="font-jakarta text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#5F6672] uppercase">
                PEOPLE &times; IDEAS &times; EXECUTION
              </span>
              <span
                className="inline-block w-10 sm:w-14 h-[1.5px] bg-[#111111]/30 align-middle"
                aria-hidden="true"
              />
            </div>

            {/* Main Headline */}
            <h1 className="mt-4 sm:mt-5 font-clash font-bold text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.5rem] leading-[1.04] tracking-[-0.03em] text-[#111111]">
              <span className="hero-headline-line block">The Innovation</span>
              <span className="hero-headline-line block">
                <span className="text-[#1683E8]">Ecosystem</span>,
              </span>
              <span className="hero-headline-line block">Where Builders</span>
              <span className="hero-headline-line block">Are Forged</span>
            </h1>

            {/* Supporting Copy */}
            <p className="hero-description mt-5 font-jakarta text-base sm:text-lg text-[#5F6672] max-w-lg leading-relaxed font-normal">
              Programs, community and resources to turn your ideas into
              real-world impact.
            </p>

            {/* Feature Pills */}
            <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {featurePills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.label}
                    className="hero-feature-pill flex items-center gap-2 bg-white border border-[#D9DEE7] rounded-full px-4 py-2 shadow-[0_1px_4px_rgba(16,42,67,0.03)] hover:border-[#1683E8] transition-colors"
                  >
                    <Icon
                      className="w-4 h-4 text-[#1683E8] shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-jakarta text-xs sm:text-[13px] font-medium text-[#111111] whitespace-nowrap">
                      {pill.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Primary CTA Area */}
            <div className="hero-cta-area mt-8 sm:mt-9 flex items-center">
              <button
                type="button"
                onClick={() => open("join")}
                className="group inline-flex items-center gap-2.5 bg-[#102A43] hover:bg-[#163A5C] text-white px-8 py-3.5 rounded-full font-jakarta text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
              >
                <span>Join The Program</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Video Container (~58%) */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
            <div className="hero-video-box relative w-full aspect-[16/9] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#0B1521] border border-[#102A43]/15 shadow-[0_20px_50px_rgba(16,42,67,0.12)]">
              {/* Background Video */}
              <video
                ref={videoRef}
                src="/forge-hero-logo.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
              {/* Architectural Typography Overlays on Video */}
              <div className="absolute top-4 left-5 sm:top-6 sm:left-6 z-20 pointer-events-none select-none text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#102A43]/85 uppercase leading-relaxed">
                PEOPLE
                <br />
                IDEAS
                <br />
                IMPACT
              </div>

              <div className="absolute top-4 right-5 sm:top-6 sm:right-6 z-20 pointer-events-none select-none text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-[#102A43]/85 text-right uppercase leading-relaxed">
                FOR A<br />
                BRIGHTER
                <br />
                TOMORROW
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-5 sm:right-6 z-20 hidden md:block pointer-events-none select-none text-[9px] sm:text-[10px] font-mono font-semibold tracking-widest text-[#102A43]/70 text-right uppercase leading-relaxed">
                BUILD
                <br />
                LEARN
                <br />
                COLLABORATE
                <br />
                GROW
              </div>

              <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-20 pointer-events-none select-none text-[9px] sm:text-[10px] font-mono font-semibold tracking-widest text-[#102A43]/75 text-right uppercase leading-tight">
                A BRIGHTER
                <br />
                TOMORROW
                <br />
                IS A BUILDER
                <br />
                AWAY
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Backed By & Statistics */}
        <div className="hero-bottom-strip mt-10 sm:mt-12 lg:mt-14 pt-6 border-t border-[#D9DEE7]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Backed By Winnovation */}
            <div className="flex items-center gap-3.5 sm:gap-4 w-full md:w-auto justify-center md:justify-start">
              <span className="font-jakarta text-[11px] sm:text-xs font-bold tracking-wider text-[#5F6672] uppercase whitespace-nowrap">
                BACKED BY
              </span>
              <div className="h-11 sm:h-12 px-4 sm:px-5 py-1.5 bg-white border border-[#D9DEE7] hover:border-[#1683E8]/50 rounded-xl flex items-center justify-center shadow-[0_1px_4px_rgba(16,42,67,0.03)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <Image
                  src="/supporters/winnovation-clean.png"
                  alt="WinNovation"
                  width={440}
                  height={88}
                  className="h-6 sm:h-7 w-auto object-contain max-w-[130px]"
                />
              </div>
            </div>

            {/* Right Group: Statistics Counters Area */}
            <div
              ref={statsRef}
              className="flex items-center justify-around sm:justify-start gap-6 sm:gap-8 lg:gap-10 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-[#D9DEE7]/70"
            >
              {statsData.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-6 sm:gap-8 lg:gap-10"
                >
                  <div className="flex flex-col text-center sm:text-left">
                    <span className="font-clash font-bold text-3xl sm:text-4xl lg:text-[2.6rem] text-[#111111] leading-none tracking-tight tabular-nums flex items-baseline justify-center sm:justify-start">
                      <span>{counters[idx]}</span>
                      <span className="text-[#1683E8] text-2xl sm:text-3xl lg:text-[2.2rem] ml-0.5 font-bold">
                        {stat.suffix}
                      </span>
                    </span>
                    <span className="font-jakarta text-xs sm:text-[13px] text-[#5F6672] mt-1.5 font-semibold whitespace-nowrap tracking-wide">
                      {stat.label}
                    </span>
                  </div>

                  {idx < statsData.length - 1 && (
                    <span
                      className="h-10 sm:h-12 w-[1.5px] bg-[#D9DEE7]"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
