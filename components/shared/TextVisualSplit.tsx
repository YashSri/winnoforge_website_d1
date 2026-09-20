"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { ReactNode } from "react";
import Link from "next/link";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TextVisualSplit({
  eyebrow,
  heading,
  body,
  cta,
  visual,
  reverse = false,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  cta?: { label: string; href: string };
  visual: ReactNode;
  reverse?: boolean;
}) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined" || !containerRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".tvs-eyebrow",
            ".tvs-heading",
            ".tvs-body",
            ".tvs-cta",
            ".tvs-visual",
          ],
          { opacity: 1, x: 0, y: 0, clearProps: "all" },
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      });

      if (eyebrow) {
        tl.from(".tvs-eyebrow", {
          opacity: 0,
          y: 14,
          duration: 0.5,
        });
      }

      tl.from(
        ".tvs-heading",
        {
          opacity: 0,
          y: 22,
          duration: 0.65,
        },
        eyebrow ? "-=0.3" : 0,
      )
        .from(
          ".tvs-body",
          {
            opacity: 0,
            y: 18,
            duration: 0.55,
          },
          "-=0.35",
        );

      if (cta) {
        tl.from(
          ".tvs-cta",
          {
            opacity: 0,
            y: 14,
            duration: 0.5,
          },
          "-=0.3",
        );
      }

      tl.from(
        ".tvs-visual",
        {
          opacity: 0,
          y: 28,
          scale: 0.96,
          duration: 0.75,
        },
        "-=0.45",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className={`mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 px-6 py-16 md:gap-16 md:px-12 md:py-24 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex flex-1 flex-col gap-5">
        {eyebrow && (
          <div className="tvs-eyebrow flex items-center gap-3 select-none">
            <span className="h-[1px] w-8 sm:w-10 bg-[#D9DEE7]" />
            <span className="font-jakarta text-xs font-bold uppercase tracking-[0.22em] text-[#1683E8]">
              {eyebrow}
            </span>
          </div>
        )}

        <h2 className="tvs-heading font-clash text-3xl font-bold tracking-tight text-[#111111] md:text-4xl lg:text-[42px] leading-[1.06]">
          {heading}
        </h2>

        <p className="tvs-body font-jakarta text-base sm:text-lg leading-relaxed text-[#5F6672]">
          {body}
        </p>

        {cta && (
          <div className="tvs-cta mt-2">
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-[#1683E8] px-7 py-3 font-jakarta text-sm font-bold text-white shadow-[0_12px_28px_rgba(22,131,232,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95"
            >
              <span>{cta.label}</span>
            </Link>
          </div>
        )}
      </div>

      <div className="tvs-visual w-full flex-1">{visual}</div>
    </section>
  );
}
