"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  Award,
  Briefcase,
  Compass,
  PenTool,
  Rocket,
  Wrench,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * DATA — six program categories (preserved)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
interface ProgramCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

const categories: ProgramCategory[] = [
  {
    icon: Compass,
    title: "Foundation Programs",
    description:
      "Build the fundamentals required to explore technology, innovation, and structured problem-solving.",
    tags: ["LEARN", "EXPLORE", "BUILD"],
    image: "",
  },
  {
    icon: Wrench,
    title: "Technical Skill Programs",
    description:
      "Develop practical, industry-relevant technical capabilities through guided learning and hands-on work.",
    tags: ["PRACTICE", "BUILD", "GROW"],
    image: "/programs-stairs.jpg",
  },
  {
    icon: PenTool,
    title: "Innovation and Project Programs",
    description:
      "Turn problems and ideas into prototypes, experiments, and demonstrable solutions.",
    tags: ["IDEAS", "INTO", "IMPACT"],
    image: "/programs-building.jpg",
  },
  {
    icon: Rocket,
    title: "Founder and Venture Programs",
    description:
      "Support aspiring founders as they move from early ideas toward validated products, ventures, or initiatives.",
    tags: ["PEOPLE", "IDEAS", "VENTURES"],
    image: "",
  },
  {
    icon: Award,
    title: "Certification and Capability Programs",
    description:
      "Build structured capability through learning, assessment, practical work, and evidence of completion.",
    tags: ["SKILLS", "CREDIBILITY", "OPPORTUNITY"],
    image: "",
  },
  {
    icon: Briefcase,
    title: "Industry and Corporate Programs",
    description:
      "Connect learners, institutions, and organisations through applied challenges, mentorship, and innovation collaboration.",
    tags: ["COLLABORATE", "SOLVE", "SCALE"],
    image: "/programs-facade.jpg",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ANIMATED BORDER SVG (per-card)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function AnimatedBorder({ active }: { active: boolean }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        rx="19"
        ry="19"
        fill="none"
        stroke="#1683E8"
        strokeWidth="1.5"
        pathLength="100"
        strokeDasharray="10 90"
        strokeDashoffset="0"
        className="transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0.35,
          animation: "borderTravel 16s linear infinite",
        }}
      />
    </svg>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * SINGLE CARD
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function CategoryCard({
  cat,
  index,
  delay,
}: {
  cat: ProgramCategory;
  index: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const num = String(index + 1).padStart(2, "0");
  const Icon = cat.icon;
  const hasImage = !!cat.image;

  /* ── Card with two halves: content (left) + tags/image (right) ── */
  return (
    <div
      ref={ref}
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group relative flex h-full flex-col justify-between rounded-[20px] border border-[#D9DEE7] bg-white select-none overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8] focus-visible:ring-offset-2"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)`,
        boxShadow: hovered
          ? "0 20px 48px rgba(22,131,232,0.12), 0 4px 12px rgba(0,0,0,0.04)"
          : "0 6px 24px rgba(16,42,67,0.04)",
      }}
    >
      {/* Animated border */}
      <AnimatedBorder active={hovered} />

      {/* Card inner layout */}
      <div className="relative z-20 flex h-full">
        {/* ── LEFT: content ── */}
        <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
          {/* Number */}
          <span
            className="font-jakarta text-[13px] font-bold tracking-wider text-[#A0AABB] transition-colors duration-300 group-hover:text-[#1683E8]"
          >
            {num}
          </span>

          {/* Icon */}
          <div
            className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#1683E8] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:bg-[#1683E8] group-hover:text-white"
            style={{
              boxShadow: hovered
                ? "0 6px 18px rgba(22,131,232,0.22)"
                : "0 2px 6px rgba(22,131,232,0.08)",
            }}
          >
            <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
          </div>

          {/* Title */}
          <h3
            className="mt-4 font-clash text-lg font-bold leading-snug text-[#111111] md:text-xl"
          >
            {cat.title}
          </h3>

          {/* Description (reveals on hover) */}
          <p
            className="mt-2 font-jakarta text-[13px] leading-relaxed text-[#667085] transition-all duration-400"
            style={{
              opacity: hovered ? 1 : 0.8,
              maxHeight: hovered ? "80px" : "60px",
            }}
          >
            {cat.description}
          </p>

          {/* CTA */}
          <div className="mt-4 flex items-center gap-1.5">
            <span className="font-jakarta text-[13px] font-semibold text-[#1683E8] transition-colors duration-300 group-hover:text-[#1474CE]">
              Explore Programs
            </span>
            <ArrowRight
              className="h-3.5 w-3.5 text-[#1683E8] transition-all duration-300 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </div>
        </div>

        {/* ── RIGHT: tags + optional image ── */}
        <div className="relative flex w-[120px] flex-col items-end justify-between py-6 pr-5 sm:w-[140px] sm:pr-6">
          {/* Tags */}
          <div className="flex flex-col items-end gap-0.5">
            {cat.tags.map((tag) => (
              <span
                key={tag}
                className="font-jakarta text-[10px] font-bold uppercase tracking-[0.16em] text-[#A0AABB] transition-colors duration-300 group-hover:text-[#667085]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Image (if present, reveals from bottom on hover) */}
          {hasImage && (
            <div
              className="absolute bottom-0 right-0 w-full overflow-hidden rounded-tl-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                height: hovered ? "65%" : "55%",
                opacity: hovered ? 1 : 0.85,
              }}
            >
              <Image
                src={cat.image!}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                sizes="140px"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * MAIN SECTION
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function ProgramCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHeaderVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="categories"
      className="relative w-full overflow-hidden px-6 py-16 md:px-12 md:py-24"
    >
      {/* ── CSS for border animation ── */}
      <style>{`
        @keyframes borderTravel {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -100; }
        }
      `}</style>

      {/* ── Subtle background orbs ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        <div className="absolute left-10 top-1/4 h-3.5 w-3.5 rounded-full bg-[#1683E8]" />
        <div className="absolute -left-16 top-1/3 h-64 w-64 rounded-full bg-[#EAF3FF] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute -right-12 top-1/2 h-56 w-56 rounded-full bg-[#EAF3FF] animate-[pulse_10s_ease-in-out_infinite_2s]" />
        <div className="absolute right-12 bottom-1/4 h-3 w-3 rounded-full bg-[#1683E8]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* ━━━━━ HEADER ━━━━━ */}
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          {/* Corner labels — desktop only */}
          <span
            className="absolute -left-40 top-0 hidden font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-[#A0AABB] leading-relaxed xl:block"
            style={{
              opacity: headerVisible ? 1 : 0,
              transition: "opacity 0.8s ease 0.3s",
            }}
          >
            LEARNING
            <br />
            BUILDS
            <br />
            TOMORROW
          </span>
          <span
            className="absolute -right-36 top-0 hidden font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-[#A0AABB] leading-relaxed text-right xl:block"
            style={{
              opacity: headerVisible ? 1 : 0,
              transition: "opacity 0.8s ease 0.5s",
            }}
          >
            IDEAS
            <br />
            INTO
            <br />
            IMPACT
          </span>

          {/* Eyebrow */}
          <div
            className="flex items-center justify-center gap-3 select-none"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(12px)",
              transition:
                "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
            <span className="font-jakarta text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#1683E8]">
              Program Categories
            </span>
            <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
          </div>

          {/* Heading */}
          <h2
            className="font-clash text-3xl font-bold tracking-tight text-[#111111] md:text-4xl lg:text-[42px] leading-[1.08]"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s",
            }}
          >
            Built Around Real{" "}
            <span className="font-boska italic text-[#1683E8]">
              Stages of Growth
            </span>
          </h2>

          {/* Supporting text */}
          <p
            className="font-jakarta text-base sm:text-lg leading-relaxed text-[#5F6672]"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(16px)",
              transition:
                "opacity 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s",
            }}
          >
            Explore programs designed for every stage — from learning the basics
            to building real-world solutions.
          </p>
        </div>

        {/* ━━━━━ CARD GRID — 3 columns × 2 rows ━━━━━ */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <CategoryCard
              key={cat.title}
              cat={cat}
              index={idx}
              delay={idx * 70}
            />
          ))}
        </div>

        {/* ━━━━━ BOTTOM — Explore All + Corner Labels ━━━━━ */}
        <div className="relative mt-12 flex flex-col items-center">
          {/* Corner labels — desktop only */}
          <span
            className="absolute left-0 bottom-0 hidden font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-[#A0AABB] leading-relaxed xl:block"
            style={{
              opacity: headerVisible ? 1 : 0,
              transition: "opacity 0.8s ease 0.6s",
            }}
          >
            PEOPLE.
            <br />
            IDEAS.
            <br />
            IMPACT.
          </span>
          <span
            className="absolute right-0 bottom-0 hidden font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-[#A0AABB] leading-relaxed text-right xl:block"
            style={{
              opacity: headerVisible ? 1 : 0,
              transition: "opacity 0.8s ease 0.7s",
            }}
          >
            REAL PROGRAMS.
            <br />
            REAL PROGRESS.
          </span>

          {/* Center logo mark */}
          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#D9DEE7]">
            <div className="h-2.5 w-[1.5px] rounded-full bg-[#111111]" />
          </div>

          {/* Explore all link */}
          <span
            className="font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-[#667085] transition-colors duration-300 hover:text-[#1683E8] cursor-pointer"
            style={{
              opacity: headerVisible ? 1 : 0,
              transition:
                "opacity 0.6s ease 0.5s, color 0.3s ease",
            }}
          >
            Explore All Categories
          </span>
        </div>
      </div>
    </section>
  );
}
