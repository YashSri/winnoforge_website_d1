"use client";

import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Building2,
  Compass,
  GraduationCap,
  Lightbulb,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  User,
  X,
} from "lucide-react";
import { type KeyboardEvent, useState } from "react";

// Default icons mapped by index or fallback
export const DEFAULT_FAQ_ICONS: LucideIcon[] = [
  BookOpen, // 01
  Target, // 02
  User, // 03
  GraduationCap, // 04
  Building2, // 05
  TrendingUp, // 06
  Sparkles, // 07
  Shield, // 08
  Compass, // 09
  Lightbulb, // 10
];

export interface FAQCardProps {
  number: string;
  question: string;
  answer: string;
  icon?: LucideIcon;
  category?: string;
  verticalQuestion?: boolean;
  className?: string;
}

export default function FAQCard({
  number,
  question,
  answer,
  icon,
  category,
  verticalQuestion = true,
  className = "",
}: FAQCardProps) {
  // Local flip state for mobile tap / click toggle
  const [isFlipped, setIsFlipped] = useState(false);

  const IconComponent = icon || DEFAULT_FAQ_ICONS[0];

  const handleToggle = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <button
      type="button"
      className={`faq-card-container relative h-[420px] sm:h-[430px] lg:h-[440px] w-full rounded-[22px] select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1683EA] focus-visible:ring-offset-2 text-left p-0 bg-transparent border-none block ${className}`}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      aria-expanded={isFlipped}
      aria-label={`${number} ${question}. Click or press Enter to read answer.`}
      onBlur={() => setIsFlipped(false)}
      style={{ perspective: "1000px" }}
    >
      {/* 3D Flippable Card Inner */}
      <div
        className={`faq-card-inner relative w-full h-full rounded-[inherit] ${isFlipped ? "is-flipped" : ""
          }`}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 700ms cubic-bezier(0.23, 1, 0.32, 1)",
          transform: isFlipped ? "rotateY(180deg)" : undefined,
        }}
      >
        {/* ━━━━━━━━ FRONT FACE (White / Idle State) ━━━━━━━━ */}
        <div
          className="faq-card-front absolute inset-0 w-full h-full rounded-[inherit] bg-[#FFFFFF] border border-[#D9E2EE] p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(16,42,67,0.03)] hover:border-[#1683EA] transition-colors"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          {/* Subtle Tone-on-Tone Light Blue Arc (Bottom-Left Corner) */}
          <div className="pointer-events-none absolute -bottom-10 -left-10 w-36 h-36 opacity-70">
            <svg
              viewBox="0 0 160 160"
              fill="none"
              aria-hidden="true"
              className="w-full h-full text-[#1683EA]/10"
            >
              <circle
                cx="40"
                cy="120"
                r="70"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle
                cx="40"
                cy="120"
                r="105"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="3 4"
              />
            </svg>
          </div>

          {/* Top Row: Card Number */}
          <div className="flex items-center justify-between w-full">
            <span className="font-jakarta text-xs sm:text-sm font-semibold text-[#667085]">
              {number}
            </span>
            {category && (
              <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.16em] text-[#8896A6]">
                {category}
              </span>
            )}
          </div>

          {/* Center Area: Icon + Vertical Hairline + Question */}
          <div className="my-auto flex flex-col items-center justify-center w-full min-h-[220px]">
            {/* Minimal Blue Line Icon */}
            <div className="transition-transform duration-300 group-hover:scale-105">
              <IconComponent className="h-7 w-7 text-[#1683EA] stroke-[1.8]" />
            </div>

            {/* Hairline Divider */}
            <div className="w-[1px] h-4 bg-[#D9E2EE] my-3 sm:my-4" />

            {/* Question (Vertical rotated text or horizontal if wide) */}
            <div className="relative flex items-center justify-center min-h-[170px] w-full px-1">
              <span
                className={`font-clash font-bold uppercase text-[#111111] leading-snug block text-center ${verticalQuestion
                    ? "text-xs sm:text-[13px] tracking-[0.2em] whitespace-nowrap"
                    : "text-sm sm:text-base tracking-tight"
                  }`}
                style={
                  verticalQuestion
                    ? {
                      transform: "rotate(-90deg)",
                      transformOrigin: "center center",
                      maxWidth: "260px",
                    }
                    : undefined
                }
              >
                {question}
              </span>
            </div>
          </div>

          {/* Bottom Row: Balance Spacer */}
          <div className="w-full h-2" />
        </div>

        {/* ━━━━━━━━ BACK FACE (FORGE Blue / Flipped State) ━━━━━━━━ */}
        <div
          className="faq-card-back absolute inset-0 w-full h-full rounded-[inherit] bg-[#1683EA] border border-[#1683EA] p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-[0_16px_36px_rgba(22,131,234,0.22)]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Subtle Tone-on-Tone White Arc (Bottom-Right Corner) */}
          <div className="pointer-events-none absolute -bottom-10 -right-10 w-36 h-36 opacity-60">
            <svg
              viewBox="0 0 160 160"
              fill="none"
              aria-hidden="true"
              className="w-full h-full text-white/[0.08]"
            >
              <circle
                cx="120"
                cy="120"
                r="70"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle
                cx="120"
                cy="120"
                r="105"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="3 4"
              />
            </svg>
          </div>

          {/* Top Row: Number + Flip Close Indicator */}
          <div className="relative z-10 flex items-center justify-between w-full">
            <span className="font-jakarta text-xs sm:text-sm font-semibold text-white/80">
              {number}
            </span>
            <div className="w-6 h-6 rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-white/90">
              <X className="h-3 w-3" />
            </div>
          </div>

          {/* Middle: Question Heading & Answer Text */}
          <div className="relative z-10 my-auto flex flex-col justify-center py-2 overflow-y-auto no-scrollbar">
            <h4 className="font-clash text-base sm:text-lg font-bold uppercase tracking-tight text-white leading-snug">
              {question}
            </h4>

            <div className="w-8 h-[1.5px] bg-white/40 my-3 rounded-full" />

            <p className="font-jakarta text-xs sm:text-[13px] leading-relaxed text-white/90">
              {answer}
            </p>
          </div>

          {/* Bottom Row: Subtle FORGE label */}
          <div className="relative z-10 pt-1">
            <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
              FORGE ECOSYSTEM
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
