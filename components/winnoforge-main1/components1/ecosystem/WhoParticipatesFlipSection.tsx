"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Landmark,
  Lightbulb,
  Network,
  Rocket,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParticipantItem {
  num: string;
  title: string;
  description: string;
  icon: typeof Users;
  image: string;
  accentShape: "circle" | "square" | "dual-square";
  contributions: string[];
}

const PARTICIPANTS: ParticipantItem[] = [
  {
    num: "01",
    title: "Students and Builders",
    description:
      "Participate in learning, projects, workshops, hackathons, community activity, and execution pathways.",
    icon: Users,
    image: "/impact-student-led.png",
    accentShape: "circle",
    contributions: [
      "Sprint-driven prototype builds",
      "Cross-campus hackathons",
      "Hands-on project execution",
      "Peer reviews & demo days",
    ],
  },
  {
    num: "02",
    title: "Institutions",
    description:
      "Colleges and universities provide the campus context in which learning, innovation, and industry collaboration can become embedded.",
    icon: Landmark,
    image: "/impact-campus-wide.jpg",
    accentShape: "square",
    contributions: [
      "Campus innovation spaces",
      "Curriculum & credit alignment",
      "Faculty & institutional support",
      "Long-term builder culture",
    ],
  },
  {
    num: "03",
    title: "Faculty",
    description:
      "Support academic alignment, student development, institutional coordination, and collaboration around projects.",
    icon: GraduationCap,
    image: "/webp/3.webp",
    accentShape: "square",
    contributions: [
      "Academic rigor & standards",
      "Research problem framing",
      "Student project mentorship",
      "Departmental coordination",
    ],
  },
  {
    num: "04",
    title: "Mentors and Experts",
    description:
      "Contribute practical experience through seminars, workshops, reviews, mentorship, and evaluation.",
    icon: Lightbulb,
    image: "/webp/4.webp",
    accentShape: "circle",
    contributions: [
      "Technical architecture reviews",
      "Practitioner problem critiques",
      "Direct code & sprint guidance",
      "Industry readiness evaluation",
    ],
  },
  {
    num: "05",
    title: "Industry Partners",
    description:
      "Contribute through problem statements, talent engagement, innovation experimentation, mentorship, and hiring.",
    icon: Building2,
    image: "/webp/2.webp",
    accentShape: "dual-square",
    contributions: [
      "Production problem statements",
      "Direct hiring & talent pipelines",
      "Enterprise tooling & workflows",
      "Pilot testbeds & internships",
    ],
  },
  {
    num: "06",
    title: "Founders and Entrepreneurs",
    description:
      "Participate in problem discovery, validation, prototyping, incubation, and venture development.",
    icon: Rocket,
    image: "/webp/5.webp",
    accentShape: "circle",
    contributions: [
      "Problem discovery",
      "Market validation",
      "Rapid prototyping",
      "Venture incubation",
    ],
  },
  {
    num: "07",
    title: "Government and Public Institutions",
    description:
      "May contribute real problem statements, policy conversations, and public-purpose innovation opportunities where formal relationships exist.",
    icon: Shield,
    image: "/citadel1.png",
    accentShape: "square",
    contributions: [
      "Public-purpose problem briefs",
      "Civic innovation challenges",
      "Regional innovation support",
      "Policy & public standards",
    ],
  },
  {
    num: "08",
    title: "FORGE Core and Campus Teams",
    description:
      "Support standards, coordination, execution systems, and the operation of the ecosystem.",
    icon: Network,
    image: "/ecosystem-builders-20260222.jpg",
    accentShape: "circle",
    contributions: [
      "Ecosystem-wide standards",
      "Chapter leadership & operations",
      "Cohort sprint orchestration",
      "Convergence demo summits",
    ],
  },
];

export default function WhoParticipatesFlipSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // CRITICAL IDLE STATE: All 8 cards start idle, facing front, pure white, no active card
  const [activeFlippedCard, setActiveFlippedCard] = useState<number | null>(
    null,
  );

  // Mobile / Touch toggle
  const handleCardClick = (idx: number) => {
    setActiveFlippedCard((prev) => (prev === idx ? null : idx));
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick(idx);
    }
  };

  useGSAP(
    () => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".part-eyebrow",
            ".part-heading",
            ".part-desc",
            ".part-card",
            ".part-footer",
          ],
          { opacity: 1, y: 0, scale: 1, clearProps: "all" },
        );
        return;
      }

      // Fast coordinated scroll entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
        onComplete: () => {
          gsap.set(
            [
              ".part-eyebrow",
              ".part-heading",
              ".part-desc",
              ".part-card",
              ".part-footer",
            ],
            { clearProps: "opacity,transform" },
          );
        },
      });

      // 0ms: Eyebrow
      tl.from(
        ".part-eyebrow",
        {
          opacity: 0,
          y: 18,
          duration: 0.5,
        },
        0,
      );

      // 70ms: Heading
      tl.from(
        ".part-heading",
        {
          opacity: 0,
          y: 22,
          duration: 0.55,
        },
        0.07,
      );

      // 140ms: Supporting description
      tl.from(
        ".part-desc",
        {
          opacity: 0,
          y: 18,
          duration: 0.5,
        },
        0.14,
      );

      // 220ms: 8 Cards entrance (fast 30ms stagger, under 240ms)
      tl.from(
        ".part-card",
        {
          opacity: 0,
          y: 22,
          duration: 0.55,
          stagger: 0.03,
        },
        0.22,
      );

      // Footer line
      tl.from(
        ".part-footer",
        {
          opacity: 0,
          duration: 0.5,
        },
        0.35,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="who-participates"
      onClick={() => setActiveFlippedCard(null)}
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 select-none overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        {/* ━━━━━━━━ SECTION HEADER (Centered & Clean) ━━━━━━━━ */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow with subtle divider lines */}
          <div className="part-eyebrow flex items-center justify-center gap-3 select-none">
            <span className="h-[1px] w-8 sm:w-10 bg-[#D9E2EE]" />
            <span className="font-jakarta text-xs font-bold uppercase tracking-[0.24em] text-[#1683E8]">
              WHO PARTICIPATES
            </span>
            <span className="h-[1px] w-8 sm:w-10 bg-[#D9E2EE]" />
          </div>

          {/* Main Heading with FORGE Blue highlight */}
          <h2 className="part-heading mt-4 sm:mt-5 font-clash text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.06] select-none">
            An Ecosystem Is{" "}
            <span className="text-[#1683E8]">Built by People</span>
          </h2>

          {/* Supporting Copy */}
          <p className="part-desc mt-4 sm:mt-5 font-jakarta text-sm sm:text-base leading-relaxed text-[#667085]">
            FORGE connects different groups that contribute to learning,
            execution, innovation, and opportunity. Each group has a different
            role, but the system works because the roles interact.
          </p>
        </div>

        {/* ━━━━━━━━ 8 PARTICIPANT CARDS IN ONE SINGLE HORIZONTAL ROW ━━━━━━━━ */}
        {/* Desktop: 8 equal columns in 1 row. Mobile: Horizontal scrollable rail. */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="mt-12 sm:mt-14 w-full flex lg:grid lg:grid-cols-8 gap-2.5 xl:gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 px-1 lg:px-0 snap-x snap-mandatory lg:snap-none no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PARTICIPANTS.map((participant, idx) => {
            const Icon = participant.icon;
            const isFlipped = activeFlippedCard === idx;

            return (
              <div
                key={participant.num}
                tabIndex={0}
                role="button"
                aria-label={`${participant.num} ${participant.title}. Flip to view contribution details.`}
                onMouseEnter={() => setActiveFlippedCard(idx)}
                onMouseLeave={() => setActiveFlippedCard(null)}
                onFocus={() => setActiveFlippedCard(idx)}
                onBlur={() => setActiveFlippedCard(null)}
                onClick={() => handleCardClick(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="part-card group relative w-[76vw] sm:w-[42vw] md:w-[32vw] lg:w-full shrink-0 lg:shrink snap-center cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683E8] focus-visible:ring-offset-2 rounded-[22px]"
                style={{
                  perspective: "1000px",
                  height: "365px",
                }}
              >
                {/* 3D Inner Flip Container */}
                <div
                  className="relative w-full h-full rounded-[22px] will-change-transform"
                  style={{
                    transformStyle: "preserve-3d",
                    transition:
                      "transform 700ms cubic-bezier(0.23, 1, 0.32, 1)",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* ──────────────── FRONT FACE (White, Clean, Image-based) ──────────────── */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-[22px] border border-[#D9E2EE] bg-[#FFFFFF] p-3.5 sm:p-4 flex flex-col justify-between shadow-[0_6px_20px_rgba(16,42,67,0.04)] hover:shadow-[0_14px_32px_rgba(16,42,67,0.08)] hover:border-[#BFD8F5] transition-shadow duration-400 overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {/* Top Row: Index + Icon Badge */}
                    <div className="flex items-center justify-between w-full">
                      <span className="font-clash text-xs sm:text-[13px] font-bold text-[#667085]">
                        {participant.num}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#1683E8] shadow-sm">
                        <Icon className="h-4 w-4 stroke-[2]" />
                      </div>
                    </div>

                    {/* Middle: Editorial Image with Solid Blue Geometric Accent */}
                    <div className="relative w-full h-[145px] sm:h-[150px] my-auto rounded-xl overflow-hidden bg-[#F7F8FC] border border-[#EAF3FF]">
                      {/* Geometric Accent Behind Subject */}
                      {participant.accentShape === "circle" && (
                        <div
                          aria-hidden="true"
                          className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-[#1683E8] pointer-events-none z-0 opacity-90"
                        />
                      )}
                      {participant.accentShape === "square" && (
                        <div
                          aria-hidden="true"
                          className="absolute right-0 top-0 h-20 w-20 rounded-lg bg-[#1683E8] pointer-events-none z-0 opacity-90"
                        />
                      )}
                      {participant.accentShape === "dual-square" && (
                        <>
                          <div
                            aria-hidden="true"
                            className="absolute left-1 top-1 h-14 w-14 rounded-md bg-[#1683E8] pointer-events-none z-0 opacity-90"
                          />
                          <div
                            aria-hidden="true"
                            className="absolute right-1 bottom-1 h-16 w-16 rounded-md bg-[#1683E8] pointer-events-none z-0 opacity-90"
                          />
                        </>
                      )}

                      {/* Photo Asset with 500ms subtle scale */}
                      <Image
                        src={participant.image}
                        alt={participant.title}
                        fill
                        sizes="(max-width: 768px) 280px, 160px"
                        className="object-cover relative z-10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Participant Title */}
                    <div className="pt-1">
                      <h3 className="font-clash text-xs sm:text-[13px] font-bold text-[#111111] leading-tight line-clamp-2 min-h-[32px]">
                        {participant.title}
                      </h3>
                    </div>

                    {/* Bottom: FORGE + Circular Arrow */}
                    <div className="flex items-center justify-between border-t border-[#D9E2EE] pt-2.5 text-xs">
                      <span className="font-jakarta text-[9px] font-bold uppercase tracking-wider text-[#667085]">
                        FORGE
                      </span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D9E2EE] bg-white text-[#1683E8] shadow-sm transition-all duration-300 group-hover:bg-[#1683E8] group-hover:text-white group-hover:border-[#1683E8]">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>

                  {/* ──────────────── BACK FACE (Solid FORGE Blue #1683E8) ──────────────── */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-[22px] border border-[#1474CE] bg-[#1683E8] p-3.5 sm:p-4 flex flex-col justify-between text-white shadow-[0_16px_36px_rgba(22,131,232,0.25)] overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {/* Top Row: Index + White Icon Badge */}
                    <div className="flex items-center justify-between w-full">
                      <span className="font-clash text-xs sm:text-[13px] font-bold text-white/80">
                        {participant.num}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 text-white">
                        <Icon className="h-4 w-4 stroke-[2]" />
                      </div>
                    </div>

                    {/* Middle: Title, Description, and Contribution Points */}
                    <div
                      className={`my-auto py-1 flex flex-col justify-center transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isFlipped
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
                    >
                      <h3 className="font-clash text-xs sm:text-[13px] font-bold text-white leading-tight">
                        {participant.title}
                      </h3>

                      <p className="mt-1 font-jakarta text-[10px] text-white/90 leading-tight line-clamp-3">
                        {participant.description}
                      </p>

                      {/* Contribution List */}
                      <div className="mt-2.5 pt-2 border-t border-white/20">
                        <span className="font-jakarta text-[8px] font-bold uppercase tracking-[0.16em] text-white/75 block mb-1">
                          THEIR CONTRIBUTION
                        </span>
                        <ul className="space-y-0.5">
                          {participant.contributions.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-1 font-jakarta text-[9px] text-white/95 leading-tight"
                            >
                              <span className="text-white/60">•</span>
                              <span className="line-clamp-1">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom: FORGE + Index Indicator */}
                    <div className="flex items-center justify-between border-t border-white/20 pt-2 text-xs">
                      <span className="font-jakarta text-[9px] font-bold uppercase tracking-wider text-white/80">
                        FORGE
                      </span>
                      <span className="font-jakarta text-[9px] font-bold text-white/80">
                        {participant.num} / 08
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ━━━━━━━━ FOOTER EDITORIAL DETAIL ━━━━━━━━ */}
        <div className="part-footer mt-10 sm:mt-12 flex items-center justify-center gap-3 select-none">
          <span className="h-[1px] w-6 sm:w-10 bg-[#D9E2EE]" />
          <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-[#667085]">
            DIFFERENT ROLES. A STRONGER TOMORROW.
          </span>
          <span className="h-[1px] w-6 sm:w-10 bg-[#D9E2EE]" />
        </div>
      </div>
    </section>
  );
}
