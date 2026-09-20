"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight, Building2, GraduationCap, Play, Rocket, Users, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const statsData = [
  {
    target: 45,
    suffix: "+",
    label: "Institutions",
    icon: GraduationCap,
  },
  {
    target: 10000,
    suffix: "+",
    label: "Students",
    icon: Users,
  },
  {
    target: 40,
    suffix: "+",
    label: "Startups",
    icon: Rocket,
  },
];

const partnerLogos = [
  {
    src: "/airtel.png",
    alt: "Bharti Airtel logo",
    name: "Airtel",
  },
  {
    src: "/logos/Perfetti Van Melle.png",
    alt: "Perfetti Van Melle logo",
    name: "Perfetti",
  },
  {
    src: "/logos/CJ Darcl Logistics Ltd.jpg",
    alt: "CJ Darcl Logistics Ltd. logo",
    name: "CJ Darcl",
  },
  {
    src: "/logos/lightstorm logo.jpg",
    alt: "Lightstorm logo",
    name: "Lightstorm",
  },
  {
    src: "/logos/Infynix Communications Ltd..png",
    alt: "Infynix Communications Ltd. logo",
    name: "Infynix",
  },
  {
    src: "/logos/mankind.png",
    alt: "Mankind logo",
    name: "Mankind",
  },
];

export default function EcosystemHowWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoGridRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const [hasCounted, setHasCounted] = useState<boolean>(false);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoOpen(false);
    };
    if (isVideoOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  // Smooth number count-up animation (0 -> 45+, 0 -> 10,000+, 0 -> 40+)
  const triggerCounters = useCallback(() => {
    if (hasCounted) return;
    setHasCounted(true);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setCounts(statsData.map((s) => s.target));
      return;
    }

    const state = { val0: 0, val1: 0, val2: 0 };
    gsap.to(state, {
      val0: statsData[0].target,
      val1: statsData[1].target,
      val2: statsData[2].target,
      duration: 2.0,
      ease: "power2.out",
      onUpdate: () => {
        setCounts([
          Math.round(state.val0),
          Math.round(state.val1),
          Math.round(state.val2),
        ]);
      },
      onComplete: () => {
        setCounts(statsData.map((s) => s.target));
      },
    });
  }, [hasCounted]);

  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        setCounts(statsData.map((s) => s.target));
        gsap.set(
          [
            containerRef.current,
            ".ehw-eyebrow",
            ".ehw-heading",
            ".ehw-paragraph",
            ".ehw-stat-card",
            ".ehw-cta-group",
            ".ehw-right-header",
            ".ehw-win-card",
            ".ehw-logo-card",
          ],
          { opacity: 1, y: 0, scale: 1, clearProps: "all" },
        );
        return;
      }

      // Subtle scroll parallax on the right logo grid (max 8px movement tied to scroll progress)
      if (logoGridRef.current) {
        gsap.to(logoGridRef.current, {
          y: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // ━━━━━━━━ SYNCHRONIZED MASTER ENTRANCE TIMELINE (ScrollTrigger once) ━━━━━━━━
      // Parallel coordinated reveal: Entire section settles within 700-1000ms
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => triggerCounters(),
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        onComplete: () => {
          // Clear opacity and transform overrides so CSS hover micro-interactions remain 100% clean
          gsap.set(
            [
              containerRef.current,
              ".ehw-eyebrow",
              ".ehw-heading",
              ".ehw-paragraph",
              ".ehw-stat-card",
              ".ehw-cta-group",
              ".ehw-right-header",
              ".ehw-win-card",
              ".ehw-logo-card",
            ],
            { clearProps: "opacity,transform" },
          );
        },
      });

      // 0ms: Entire section wrapper begins appearing
      masterTl.from(
        containerRef.current,
        {
          opacity: 0,
          y: 24,
          duration: 0.55,
        },
        0,
      );

      // 0ms: LEFT Eyebrow begins
      masterTl.from(
        ".ehw-eyebrow",
        {
          opacity: 0,
          y: 18,
          duration: 0.5,
        },
        0,
      );

      // 0ms: RIGHT Eyebrow + right-side heading begin simultaneously
      masterTl.from(
        ".ehw-right-header",
        {
          opacity: 0,
          y: 18,
          duration: 0.5,
        },
        0,
      );

      // 100ms (0.1s): LEFT Main heading begins
      masterTl.from(
        ".ehw-heading",
        {
          opacity: 0,
          y: 18,
          duration: 0.5,
        },
        0.1,
      );

      // 100ms (0.1s): RIGHT WinNovation information card begins
      masterTl.from(
        ".ehw-win-card",
        {
          opacity: 0,
          y: 18,
          duration: 0.5,
        },
        0.1,
      );

      // 200ms (0.2s): LEFT Paragraphs begin
      masterTl.from(
        ".ehw-paragraph",
        {
          opacity: 0,
          y: 18,
          duration: 0.5,
          stagger: 0.06,
        },
        0.2,
      );

      // 200ms (0.2s): RIGHT Company logo grid begins (stagger: 60ms per logo)
      // Logo 1: 0ms, Logo 2: 60ms, Logo 3: 120ms, Logo 4: 180ms, Logo 5: 240ms, Logo 6: 300ms
      masterTl.from(
        ".ehw-logo-card",
        {
          opacity: 0,
          y: 12,
          duration: 0.55,
          stagger: 0.06,
        },
        0.2,
      );

      // 300ms (0.3s): LEFT Statistics cards begin (stagger: 60ms per card)
      // Card 1: 0ms, Card 2: 60ms, Card 3: 120ms
      masterTl.from(
        ".ehw-stat-card",
        {
          opacity: 0,
          y: 14,
          duration: 0.55,
          stagger: 0.06,
        },
        0.3,
      );

      // 400ms (0.4s): LEFT CTA buttons group begins
      masterTl.from(
        ".ehw-cta-group",
        {
          opacity: 0,
          y: 18,
          duration: 0.5,
        },
        0.4,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="mb-20 px-4 sm:px-6 lg:px-8">
      {/* Main Section Card Frame */}
      <div
        ref={containerRef}
        className="mx-auto w-full max-w-[1400px] overflow-hidden rounded-[2.2rem] border border-[#D9E2EE] bg-[#FFFFFF] shadow-[0_20px_50px_rgba(16,42,67,0.06)]"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0">
          {/* ━━━━━━━━ LEFT COLUMN: EDITORIAL, STAT CARDS & CTAS (~58%) ━━━━━━━━ */}
          <div className="p-8 md:p-12 lg:p-14 lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* 01 — Eyebrow */}
              <div className="ehw-eyebrow flex items-center gap-3 select-none">
                <span className="h-[1px] w-8 sm:w-10 bg-[#D9E2EE]" />
                <span className="font-jakarta text-xs font-bold uppercase tracking-[0.24em] text-[#1683E8]">
                  WINNOVATION BACKBONE
                </span>
                <span className="h-[1px] w-8 sm:w-10 bg-[#D9E2EE]" />
              </div>

              {/* 02 — Main Heading */}
              <h2 className="ehw-heading mt-5 font-clash text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.04] select-none">
                Built on the Winnovation{" "}
                <span className="text-[#1683E8]">Industry Ecosystem</span>
              </h2>

              {/* 03 — Supporting Paragraphs */}
              <p className="ehw-paragraph mt-5 max-w-2xl font-jakarta text-base sm:text-lg leading-relaxed text-[#667085]">
                FORGE is not operating in isolation. It is backed by
                Winnovation&apos;s industry ecosystem, giving campuses access to
                real operators, partner companies, and execution-led credibility.
              </p>

              <p className="ehw-paragraph mt-3.5 max-w-2xl font-jakarta text-sm sm:text-base leading-relaxed text-[#667085]">
                This layer brings institutions closer to industry expectations and
                gives builders a stronger network around product thinking,
                operations, mentorship, and market relevance.
              </p>
            </div>

            {/* 04 — Interactive Stat Cards (Clean, Pure White, Solid Colors, Minimal) */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {statsData.map((stat, i) => {
                const Icon = stat.icon;
                const formattedValue =
                  stat.target >= 1000
                    ? counts[i].toLocaleString("en-US") + stat.suffix
                    : counts[i] + stat.suffix;

                return (
                  <div
                    key={stat.label}
                    tabIndex={0}
                    className="ehw-stat-card group relative rounded-[20px] border border-[#D9E2EE] bg-[#FFFFFF] p-5 shadow-[0_8px_20px_rgba(16,42,67,0.03)] select-none overflow-hidden transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.015] hover:border-[#BFD8F5] hover:shadow-[0_16px_36px_rgba(22,131,232,0.12)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8]"
                  >
                    {/* Icon Container with Micro-Motion */}
                    <span className="relative z-10 inline-flex rounded-xl bg-[#EAF3FF] p-2.5 text-[#1683E8] transition-transform duration-350 ease-out group-hover:-translate-y-0.5 group-hover:scale-105">
                      <Icon className="h-5 w-5 stroke-[1.8]" />
                    </span>

                    {/* Stat Value */}
                    <p className="relative z-10 mt-4 font-clash text-3xl sm:text-[32px] font-bold text-[#111111] tracking-tight">
                      {formattedValue}
                    </p>

                    {/* Stat Label */}
                    <p className="relative z-10 mt-1 font-jakarta text-xs sm:text-sm font-semibold text-[#667085]">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* 05 — Action CTA Buttons Group */}
            <div className="ehw-cta-group mt-8 flex flex-wrap items-center gap-4">
              {/* Primary CTA: Explore the Network */}
              <a
                href="https://winnovation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[50px] items-center gap-2.5 rounded-full bg-[#1683E8] px-7 font-jakarta text-sm font-bold text-white shadow-[0_12px_28px_rgba(22,131,232,0.24)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#102A43] active:scale-[0.98]"
              >
                <span>Explore the Network</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA: Watch Video / 2 min overview */}
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="group inline-flex h-[50px] items-center gap-3 rounded-full border border-[#D9E2EE] bg-white px-5 font-jakarta text-xs sm:text-sm font-semibold text-[#111111] shadow-[0_4px_14px_rgba(16,42,67,0.03)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#BFD8F5] hover:bg-[#F7F8FC] active:scale-[0.98]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF3FF] text-[#1683E8] transition-transform duration-350 ease-out group-hover:scale-105">
                  <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                </span>
                <div className="text-left leading-tight">
                  <span className="block font-bold text-[#111111]">
                    Watch Video
                  </span>
                  <span className="block text-[10px] text-[#667085]">
                    2 min overview
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* ━━━━━━━━ RIGHT COLUMN: WINNOVATION & PARTNER LOGOS (~42%) ━━━━━━━━ */}
          <div className="p-8 md:p-12 lg:p-14 lg:col-span-5 bg-[#F7F8FC] border-t lg:border-t-0 lg:border-l border-[#D9E2EE] flex flex-col justify-between relative overflow-hidden">
            <div>
              {/* 01 — Section Label & Heading */}
              <div className="ehw-right-header flex items-center gap-3 select-none">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF3FF] text-[#1683E8]">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#1683E8]">
                    INDUSTRY-LINKED
                  </p>
                  <h3 className="font-clash text-2xl font-bold text-[#111111]">
                    Backed by Winnovation
                  </h3>
                </div>
              </div>

              {/* 02 — WinNovation Information Card with Micro-Hover */}
              <div className="ehw-win-card group mt-5 rounded-[1.5rem] border border-[#D9E2EE] bg-white p-6 shadow-[0_10px_25px_rgba(16,42,67,0.04)] select-none transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-[#C7DCF5] hover:shadow-[0_16px_36px_rgba(16,42,67,0.07)] active:scale-[0.99]">
                <div className="relative h-11 w-44 transition-transform duration-350 ease-out group-hover:-translate-y-0.5">
                  <Image
                    src="/supporters/winnovation.png"
                    alt="Winnovation logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="mt-3.5 font-jakarta text-sm leading-relaxed text-[#667085]">
                  The ecosystem is strengthened by Winnovation&apos;s network of
                  companies, operators, and industry leaders who bring real-world
                  context into the FORGE model.
                </p>
              </div>

              {/* 03 — Partner Company Logo Cards Grid with Subtle Parallax & Hover System */}
              <div
                ref={logoGridRef}
                className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3"
              >
                {partnerLogos.map((partner) => (
                  <article
                    key={partner.name}
                    tabIndex={0}
                    className="ehw-logo-card group relative flex flex-col justify-between rounded-[1.25rem] border border-[#D9E2EE] bg-white p-4 shadow-[0_8px_20px_rgba(16,42,67,0.03)] cursor-default select-none transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[5px] hover:scale-[1.015] hover:border-[#BFD8F5] hover:shadow-[0_16px_36px_rgba(22,131,232,0.12)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8]"
                  >
                    {/* Logo Image with Micro-Motion (Scale 1.04, No Rotation, No Filter) */}
                    <div className="relative h-10 w-full transition-transform duration-350 ease-out group-hover:scale-[1.04]">
                      <Image
                        src={partner.src}
                        alt={partner.alt}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Company Name Label */}
                    <p className="mt-2.5 text-center font-jakarta text-[11px] font-bold uppercase tracking-[0.16em] text-[#667085] transition-colors duration-300 group-hover:text-[#1683E8]">
                      {partner.name}
                    </p>

                    {/* Logo Hover Detail: Centered Subtle FORGE-Blue Accent Line (Width 0 -> 32px) */}
                    <div className="mt-2 flex justify-center">
                      <span
                        aria-hidden="true"
                        className="h-[2px] w-0 rounded-full bg-[#1683E8] opacity-0 transition-all duration-350 ease-out group-hover:w-8 group-hover:opacity-100"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━ VIDEO MODAL ━━━━━━━━ */}
      {isVideoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Winnovation Ecosystem Video"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop with click to dismiss */}
          <div
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 bg-[#111111]/80 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Modal Content Box */}
          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[24px] border border-[#D9E2EE] bg-[#111111] shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#1683E8]" />
                <span className="font-jakarta text-xs font-bold uppercase tracking-wider text-white">
                  Winnovation Ecosystem Overview
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                aria-label="Close modal"
                className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Container (16:9) */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Winnovation Ecosystem Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
