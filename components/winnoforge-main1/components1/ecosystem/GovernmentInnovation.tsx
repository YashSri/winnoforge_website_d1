"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  BarChart3,
  Building,
  Cpu,
  Database,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Scale,
} from "lucide-react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface VisionTopic {
  title: string;
  icon: typeof Cpu;
}

const VISION_TOPICS: VisionTopic[] = [
  { title: "AI Governance", icon: Cpu },
  { title: "Technology Ethics", icon: Scale },
  { title: "Digital Transformation", icon: Database },
  { title: "Public Health", icon: HeartPulse },
  { title: "Climate Adaptation", icon: Leaf },
  { title: "Financial Inclusion", icon: BarChart3 },
  { title: "Smart Infrastructure", icon: Building },
  { title: "Education Technology", icon: GraduationCap },
];

export default function GovernmentInnovation() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const borderRectRef = useRef<SVGRectElement>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            frameRef.current,
            ".vis-icon",
            ".vis-eyebrow",
            ".vis-heading-line-1",
            ".vis-heading-line-2",
            ".vis-desc",
            ".vis-btn",
            ".vis-footer",
          ],
          { opacity: 1, y: 0, yPercent: 0, clearProps: "all" },
        );
        if (borderRectRef.current) {
          gsap.set(borderRectRef.current, {
            stroke: "#D9E2EE",
            strokeDasharray: "none",
            strokeDashoffset: 0,
          });
        }
        return;
      }

      // ━━━━━━━━ SYNCHRONIZED TIMELINE REVEAL ━━━━━━━━
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        onComplete: () => {
          gsap.set(
            [
              frameRef.current,
              ".vis-icon",
              ".vis-eyebrow",
              ".vis-desc",
              ".vis-btn",
              ".vis-footer",
            ],
            { clearProps: "opacity,transform" },
          );
        },
      });

      // 1. Frame Upward Reveal from 30px below (0ms)
      tl.from(
        frameRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
        },
        0,
      );

      // 2. Animated Perimeter Border Reveal (Starts at 100ms, duration ~1.3s)
      if (borderRectRef.current) {
        try {
          const length = borderRectRef.current.getTotalLength?.() || 3200;
          gsap.set(borderRectRef.current, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          tl.to(
            borderRectRef.current,
            {
              strokeDashoffset: 0,
              duration: 1.3,
              ease: "cubic-bezier(0.22, 1, 0.36, 1)",
              onComplete: () => {
                // Settle smoothly into static subtle border
                gsap.to(borderRectRef.current, {
                  stroke: "#D9E2EE",
                  duration: 0.35,
                });
              },
            },
            0.1,
          );
        } catch {
          // Fallback if SVG getTotalLength fails
        }
      }

      // 3. Icon (delay 100ms)
      tl.from(
        ".vis-icon",
        {
          opacity: 0,
          y: 16,
          duration: 0.5,
        },
        0.1,
      );

      // 4. Eyebrow (delay 180ms)
      tl.from(
        ".vis-eyebrow",
        {
          opacity: 0,
          y: 16,
          duration: 0.5,
        },
        0.18,
      );

      // 5. Main Heading Clipped Upward Reveal (Lines 1 & 2)
      // Line 1: Innovation Can Serve (delay 260ms)
      tl.from(
        ".vis-heading-line-1",
        {
          yPercent: 100,
          duration: 0.65,
        },
        0.26,
      );

      // Line 2: Public Purpose (delay 340ms)
      tl.from(
        ".vis-heading-line-2",
        {
          yPercent: 100,
          duration: 0.65,
        },
        0.34,
      );

      // 6. Description (delay 380ms)
      tl.from(
        ".vis-desc",
        {
          opacity: 0,
          y: 18,
          duration: 0.55,
        },
        0.38,
      );

      // 7. 8 Topic Buttons Reveal (delay 500ms, fast 60ms stagger)
      tl.from(
        ".vis-btn",
        {
          opacity: 0,
          y: 12,
          duration: 0.5,
          stagger: 0.06,
        },
        0.5,
      );

      // 8. Footer divider detail
      tl.from(
        ".vis-footer",
        {
          opacity: 0,
          duration: 0.5,
        },
        0.75,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="our-vision"
      className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 md:px-8 py-16 md:py-24 select-none overflow-hidden"
    >
      {/* ━━━━━━━━ LARGE SUBTLE ROUNDED RECTANGULAR FRAME ━━━━━━━━ */}
      <div
        ref={frameRef}
        className="relative z-10 w-full rounded-[28px] sm:rounded-[32px] bg-white p-7 sm:p-10 md:p-14 lg:p-16 text-center shadow-[0_12px_36px_rgba(16,42,67,0.03)]"
      >
        {/* Animated Perimeter Border SVG Overlay */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full rounded-[28px] sm:rounded-[32px] overflow-visible"
        >
          <rect
            ref={borderRectRef}
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="30"
            ry="30"
            fill="none"
            stroke="#1683E8"
            strokeWidth="1.2"
          />
        </svg>

        {/* 01 — Small Icon Badge Above Eyebrow */}
        <div className="vis-icon mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF3FF] text-[#1683E8] shadow-sm">
          <Landmark className="h-6 w-6 stroke-[1.8]" />
        </div>

        {/* 02 — Eyebrow */}
        <div className="vis-eyebrow mt-4 sm:mt-5 flex items-center justify-center gap-3 select-none">
          <span className="h-[1px] w-8 sm:w-10 bg-[#D9E2EE]" />
          <span className="font-jakarta text-xs font-bold uppercase tracking-[0.24em] text-[#1683E8]">
            OUR VISION
          </span>
          <span className="h-[1px] w-8 sm:w-10 bg-[#D9E2EE]" />
        </div>

        {/* 03 — Main Heading (Clipped Line-by-Line Reveal) */}
        <h2 className="mt-4 sm:mt-5 font-clash text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-[#111111] leading-[1.08] select-none text-center">
          <span className="block overflow-hidden pb-1">
            <span className="vis-heading-line-1 block">
              Innovation Can Serve
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="vis-heading-line-2 block text-[#1683E8]">
              Public Purpose
            </span>
          </span>
        </h2>

        {/* 04 — Supporting Description */}
        <p className="vis-desc mx-auto mt-5 max-w-2xl font-jakarta text-sm sm:text-base leading-relaxed text-[#667085]">
          Some of the most consequential problems exist in public systems.
          FORGE&apos;s long-term vision includes creating structured ways for
          public-sector challenges to enter the innovation ecosystem — where
          formal relationships exist, students, founders, and teams may work on
          genuine operational challenges rather than hypothetical exercises.
        </p>

        {/* 05 — 8 Topic Buttons (4 Columns × 2 Rows on Desktop) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
          {VISION_TOPICS.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.title}
                tabIndex={0}
                role="button"
                className="vis-btn group relative flex items-center gap-3 rounded-full border border-[#D9E2EE] bg-[#FFFFFF] px-5 py-3.5 text-left select-none cursor-default transition-all duration-250 ease-out hover:border-[#1683E8] hover:bg-[#EAF3FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8] shadow-sm"
              >
                {/* Minimal Blue Line Icon */}
                <Icon className="h-4 w-4 text-[#1683E8] shrink-0 transition-transform duration-250 ease-out group-hover:scale-105 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 stroke-[1.8]" />

                {/* Topic Title */}
                <span className="font-jakarta text-xs sm:text-[13px] font-semibold text-[#111111] transition-colors duration-250 group-hover:text-[#1683E8] whitespace-nowrap">
                  {topic.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* 06 — Editorial Footer Divider */}
        <div className="vis-footer mt-10 sm:mt-12 pt-4 flex items-center justify-center gap-3 select-none">
          <span className="h-[1px] w-6 sm:w-10 bg-[#D9E2EE]" />
          <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-[#667085]">
            IDEAS FOR A STRONGER TOMORROW
          </span>
          <span className="h-[1px] w-6 sm:w-10 bg-[#D9E2EE]" />
        </div>
      </div>
    </section>
  );
}
