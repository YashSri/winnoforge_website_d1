"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  ClipboardList,
  Users2,
  GraduationCap,
  Route,
  Lightbulb,
  Landmark,
  UserCheck,
  Trophy,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * DATA — preserved
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
interface FeatureItem {
  icon: LucideIcon;
  label: string;
}

const features: FeatureItem[] = [
  { icon: Building2, label: "Campus needs assessment" },
  { icon: ClipboardList, label: "Program planning" },
  { icon: Users2, label: "Faculty coordination" },
  { icon: GraduationCap, label: "Student onboarding" },
  { icon: Route, label: "Skill pathways" },
  { icon: Lightbulb, label: "Innovation activities" },
  { icon: Landmark, label: "Campus chapter development" },
  { icon: UserCheck, label: "Mentor and expert sessions" },
  { icon: Trophy, label: "Project showcases" },
  { icon: BarChart3, label: "Progress reviews" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * COMPONENT
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function InstitutionalPrograms() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        // Instantly show everything
        gsap.set(
          [
            ".ip-card",
            ".ip-eyebrow",
            ".ip-heading-line",
            ".ip-desc",
            ".ip-cta",
            ".ip-image-wrap",
            ".ip-feature-row",
            ".ip-corner-label",
            ".ip-bg-circle",
            ".ip-bg-dot",
          ],
          { opacity: 1, y: 0, x: 0, scale: 1 }
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });

      // 1. Outer card
      tl.fromTo(
        ".ip-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        0
      );

      // 2. Eyebrow + decorative line
      tl.fromTo(
        ".ip-eyebrow",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
        0.08
      );
      tl.fromTo(
        ".ip-eyebrow-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.5,
          ease: "power3.out",
          transformOrigin: "left center",
        },
        0.08
      );

      // 3. Heading lines — masked reveal
      tl.fromTo(
        ".ip-heading-line",
        { opacity: 0, y: "105%" },
        {
          opacity: 1,
          y: "0%",
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.08,
        },
        0.15
      );

      // 4. Description
      tl.fromTo(
        ".ip-desc",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
        0.32
      );

      // 5. CTA
      tl.fromTo(
        ".ip-cta",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0.42
      );

      // 6. Image
      tl.fromTo(
        ".ip-image-wrap",
        { opacity: 0, y: 25, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
        },
        0.3
      );

      // 7. Feature rows — sequential cascade
      tl.fromTo(
        ".ip-feature-row",
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.05,
        },
        0.45
      );

      // 8. Corner labels
      tl.fromTo(
        ".ip-corner-label",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" },
        0.5
      );

      // Background decorations — slow ambient movement
      gsap.to(".ip-bg-circle", {
        y: -8,
        duration: 14,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".ip-bg-dot", {
        opacity: 0.6,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 1.2,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden px-6 py-16 md:px-12 md:py-24"
    >
      {/* ── Background Decorations ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Large thin circle */}
        <div className="ip-bg-circle absolute -left-24 top-1/4 h-80 w-80 rounded-full border border-[#E2EAF4] opacity-50" />
        <div className="ip-bg-circle absolute -right-20 bottom-1/4 h-64 w-64 rounded-full border border-[#E2EAF4] opacity-40" />
        {/* Small blue dots */}
        <div className="ip-bg-dot absolute left-[8%] top-[18%] h-3 w-3 rounded-full bg-[#1683E8] opacity-40" />
        <div className="ip-bg-dot absolute right-[12%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#1683E8] opacity-30" />
        <div className="ip-bg-dot absolute left-1/2 bottom-[8%] h-2.5 w-2.5 rounded-full bg-[#1683E8] opacity-25" />
        {/* Soft blobs */}
        <div className="absolute -left-20 top-1/2 h-56 w-56 rounded-full bg-[#EAF3FF] animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute -right-16 top-1/3 h-48 w-48 rounded-full bg-[#EAF3FF] animate-[pulse_12s_ease-in-out_infinite_3s]" />
      </div>

      {/* ── Corner Labels (desktop) ── */}
      <div
        className="ip-corner-label pointer-events-none absolute left-8 top-8 hidden font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-[#A0AABB] leading-relaxed opacity-0 xl:block"
        aria-hidden="true"
      >
        PEOPLE.
        <br />
        IDEAS.
        <br />
        IMPACT.
      </div>
      <div
        className="ip-corner-label pointer-events-none absolute right-8 top-8 hidden font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-[#A0AABB] leading-relaxed text-right opacity-0 xl:block"
        aria-hidden="true"
      >
        REAL
        <br />
        PARTNERSHIPS.
        <br />
        LASTING IMPACT.
      </div>
      <div
        className="ip-corner-label pointer-events-none absolute left-8 bottom-8 hidden font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-[#A0AABB] leading-relaxed opacity-0 xl:block"
        aria-hidden="true"
      >
        STRONGER
        <br />
        INSTITUTIONS.
        <br />
        BRIGHTER FUTURES.
      </div>

      {/* ━━━━━ MAIN CARD ━━━━━ */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <div
          className="ip-card rounded-[2.5rem] border border-[#D8E1EE] bg-white p-6 opacity-0 shadow-[0_18px_40px_rgba(24,42,72,0.06)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:shadow-[0_24px_52px_rgba(24,42,72,0.10)] sm:p-8 md:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-10">
            {/* ── LEFT COLUMN: Content ── */}
            <div className="flex flex-col justify-center gap-4">
              {/* Eyebrow */}
              <div className="ip-eyebrow flex items-center gap-3 opacity-0">
                <span className="ip-eyebrow-line h-[1px] w-8 bg-[#D9DEE7] origin-left" />
                <span className="font-jakarta text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#1683E8]">
                  For Institutions
                </span>
              </div>

              {/* Heading — masked text reveal */}
              <h2 className="font-clash text-3xl font-bold tracking-tight text-[#111111] md:text-4xl lg:text-[40px] leading-[1.1]">
                <span className="block overflow-hidden">
                  <span className="ip-heading-line inline-block opacity-0">
                    Bring FORGE Into
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="ip-heading-line inline-block text-[#1683E8] opacity-0">
                    Your Institution
                  </span>
                </span>
              </h2>

              {/* Description */}
              <p className="ip-desc font-jakarta text-[14px] leading-relaxed text-[#667085] opacity-0 max-w-sm sm:text-[15px]">
                FORGE works with institutions to design practical learning and
                innovation experiences that fit their learners, faculty,
                infrastructure, and long-term goals — positioned as a structured
                collaboration, not a one-off event.
              </p>

              {/* CTA */}
              <Link
                href="/collaborate"
                className="ip-cta group/cta mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#1683E8] px-7 py-3 font-jakarta text-sm font-semibold text-white opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_18px_40px_rgba(22,131,232,0.28)]"
              >
                Discuss an Institutional Program
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-[5px]" />
              </Link>
            </div>

            {/* ── CENTER: Image ── */}
            <div className="ip-image-wrap group/img relative mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl opacity-0 md:mx-0 md:max-w-[240px] lg:max-w-[280px]">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/programs-building.jpg"
                  alt="Institutional campus"
                  fill
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/img:scale-[1.025]"
                  sizes="280px"
                />
                {/* Very subtle blue overlay on hover */}
                <div className="pointer-events-none absolute inset-0 bg-[#1683E8] opacity-0 transition-opacity duration-500 group-hover/img:opacity-[0.05]" />
              </div>
              {/* Image corner labels */}
              <div className="absolute left-3 top-3 font-jakarta text-[9px] font-bold uppercase tracking-[0.16em] text-white/80 leading-relaxed">
                PARTNER
                <br />
                EDUCATE
                <br />
                INNOVATE
              </div>
            </div>

            {/* ── RIGHT COLUMN: Feature List ── */}
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-2">
              {features.map((feat) => {
                const FIcon = feat.icon;
                return (
                  <div
                    key={feat.label}
                    className="ip-feature-row group/row flex items-center gap-3 rounded-xl px-3 py-2.5 opacity-0 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1 hover:bg-[#F5F8FC] cursor-default"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EAF3FF] text-[#1683E8] transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/row:scale-105 group-hover/row:-translate-y-[1px] group-hover/row:bg-[#DCE9FD]">
                      <FIcon className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <span className="font-jakarta text-[13px] font-medium text-[#3A4554] transition-colors duration-[280ms] group-hover/row:text-[#1683E8]">
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom center dot */}
        <div className="ip-bg-dot mx-auto mt-8 h-2.5 w-2.5 rounded-full bg-[#1683E8] opacity-30" />
      </div>
    </section>
  );
}
