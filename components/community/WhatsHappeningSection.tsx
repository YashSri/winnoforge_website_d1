"use client";

import { useRef, useState, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import JoinButton from "@/components/modal/JoinButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * DATA DEFINITIONS
 * Preserving all existing community events, categories,
 * statuses, dates, times, locations, and descriptions.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export interface CommunityItem {
  id: string;
  category: "Events" | "Workshops" | "Projects" | "Stories" | "Announcements";
  status: "upcoming" | "past";
  title: string;
  description: string;
  date: string;
  image?: string;
  attendeesCount?: string;
  avatars?: string[];
}

export interface UpcomingEventItem {
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  host: string;
  audience: string;
  description: string;
  status: "Registration Open" | "Coming Soon" | "Registration Closed" | "Completed" | "To Be Announced";
}

const ALL_COMMUNITY_ITEMS: CommunityItem[] = [
  {
    id: "e1",
    category: "Events",
    status: "upcoming",
    title: "FORGE Demo Day — Winter Cohort",
    description: "Builders present shipped prototypes to mentors and industry guests.",
    date: "Dec 2026",
    image: "/community-events/demo-day-winter.png",
    attendeesCount: "+120 attended",
  },
  {
    id: "e2",
    category: "Events",
    status: "past",
    title: "FORGE Demo Day — Summer Cohort",
    description: "Six teams presented working products after an 8-week sprint.",
    date: "Jun 2026",
    image: "/community-events/demo-day-summer.png",
    attendeesCount: "+89 attended",
  },
  {
    id: "w1",
    category: "Workshops",
    status: "upcoming",
    title: "Intro to Systems Thinking",
    description: "A hands-on workshop on breaking down real-world problems.",
    date: "Nov 2026",
    image: "/webp/5.webp",
    attendeesCount: "+64 registered",
  },
  {
    id: "w2",
    category: "Workshops",
    status: "past",
    title: "Prompt Engineering for Builders",
    description: "A practical session on getting more out of AI tools.",
    date: "Aug 2026",
    image: "/webp/6.webp",
    attendeesCount: "+110 attended",
  },
  {
    id: "p1",
    category: "Projects",
    status: "past",
    title: "Campus Waste Sorting Bot",
    description: "A student team's Citadel-built prototype now piloting on campus.",
    date: "Jul 2026",
    image: "/webp/8.webp",
    attendeesCount: "Team project",
  },
  {
    id: "p2",
    category: "Projects",
    status: "upcoming",
    title: "Peer Mentorship Matching Tool",
    description: "A builder team's in-progress internal tool for the mentor network.",
    date: "In progress",
    image: "/webp/4.webp",
    attendeesCount: "In sprint",
  },
  {
    id: "s1",
    category: "Stories",
    status: "past",
    title: "From First Cohort to First Startup",
    description: "One builder's path from a FORGE bootcamp to a funded startup.",
    date: "May 2026",
    image: "/webp/2.webp",
    attendeesCount: "Founder story",
  },
  {
    id: "s2",
    category: "Stories",
    status: "past",
    title: "What a Semester at the Citadel Taught Me",
    description: "A builder reflects on their first sprint cycle.",
    date: "Mar 2026",
    image: "/webp/activation-builders.webp",
    attendeesCount: "Builder reflect",
  },
  {
    id: "a1",
    category: "Announcements",
    status: "upcoming",
    title: "New Certification Track: AI Productivity",
    description: "Enrollment opens for the newest FORGE certification track.",
    date: "Oct 2026",
    image: "/webp/3.webp",
    attendeesCount: "Curriculum",
  },
  {
    id: "a2",
    category: "Announcements",
    status: "past",
    title: "FORGE Citadel Opens Its Doors",
    description: "The Citadel's first cohort officially began sprint cycles.",
    date: "Feb 2026",
    image: "/citadel-architecture.jpg",
    attendeesCount: "Milestone",
  },
];

const UPCOMING_CARDS_DATA: UpcomingEventItem[] = [
  {
    title: "FORGE Demo Day — Winter Cohort",
    type: "Event",
    date: "Dec 2026",
    time: "To Be Announced",
    location: "FORGE Citadel",
    host: "FORGE Team",
    audience: "Open to all",
    description: "Builders present shipped prototypes to mentors and industry guests.",
    status: "Coming Soon",
  },
  {
    title: "Intro to Systems Thinking",
    type: "Workshop",
    date: "Nov 2026",
    time: "To Be Announced",
    location: "Online",
    host: "FORGE Mentor Network",
    audience: "Beginners welcome",
    description: "A hands-on workshop on breaking down real-world problems.",
    status: "Registration Open",
  },
  {
    title: "New Certification Track: AI Productivity",
    type: "Announcement",
    date: "Oct 2026",
    time: "—",
    location: "Online",
    host: "FORGE Team",
    audience: "All learners",
    description: "Enrollment opens for the newest FORGE certification track.",
    status: "To Be Announced",
  },
];

const CATEGORIES = ["Events", "Workshops", "Projects", "Stories", "Announcements"] as const;
const STATUS_FILTERS = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
] as const;

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * WHATS HAPPENING & UPCOMING EDITORIAL SHOWCASE
 * Two connected editorial blocks:
 * BLOCK A: What's Happening (Carousel, Categories, Times, Editorial Collage)
 * BLOCK B: Upcoming in the Community (3 Identical Cards + View All CTA)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function WhatsHappeningSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Events");
  const [selectedStatus, setSelectedStatus] = useState<"all" | "upcoming" | "past">("all");
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Filter items based on selected category and status
  const filteredFeatured = useMemo(() => {
    const list = ALL_COMMUNITY_ITEMS.filter(
      (item) =>
        item.category === selectedCategory &&
        (selectedStatus === "all" || item.status === selectedStatus)
    );
    return list.length > 0 ? list : ALL_COMMUNITY_ITEMS.slice(0, 2);
  }, [selectedCategory, selectedStatus]);

  // Carousel navigation
  const maxIndex = Math.max(0, filteredFeatured.length - 2);
  const handlePrev = () => {
    setCarouselIndex((prev) => Math.max(0, prev - 1));
  };
  const handleNext = () => {
    setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const isReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (isReduced) {
        gsap.set(
          [
            ".wh-eyebrow",
            ".wh-heading-line",
            ".wh-desc",
            ".wh-filters",
            ".wh-featured-card",
            ".wh-editorial-side",
            ".wh-upcoming-eyebrow",
            ".wh-upcoming-heading-line",
            ".wh-upcoming-desc",
            ".wh-upcoming-card",
            ".wh-bottom-marker",
          ],
          { opacity: 1, y: 0, scale: 1, clearProps: "all" }
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      });

      // 0ms — Eyebrow
      tl.fromTo(
        ".wh-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        0
      );

      // 100ms — What's Happening Heading masked lines
      tl.fromTo(
        ".wh-heading-line-1",
        { opacity: 0, y: "110%" },
        { opacity: 1, y: "0%", duration: 0.75 },
        0.1
      );
      tl.fromTo(
        ".wh-heading-line-2",
        { opacity: 0, y: "110%" },
        { opacity: 1, y: "0%", duration: 0.75 },
        0.18
      );

      // 180ms — Supporting Description
      tl.fromTo(
        ".wh-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.65 },
        0.24
      );

      // 260ms — Filter Pills
      tl.fromTo(
        ".wh-filters",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.28
      );

      // 350ms — Featured Cards Carousel
      tl.fromTo(
        ".wh-featured-card",
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          onComplete: () => {
            gsap.set(".wh-featured-card", { clearProps: "transform" });
          },
        },
        0.35
      );

      // 400ms — Editorial Side Visual
      tl.fromTo(
        ".wh-editorial-side",
        { opacity: 0, x: 25 },
        { opacity: 1, x: 0, duration: 0.8 },
        0.4
      );

      // 500ms — Upcoming Block Eyebrow & Heading
      tl.fromTo(
        ".wh-upcoming-eyebrow",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.5
      );
      tl.fromTo(
        ".wh-upcoming-heading-line",
        { opacity: 0, y: "110%" },
        { opacity: 1, y: "0%", duration: 0.75, stagger: 0.08 },
        0.56
      );
      tl.fromTo(
        ".wh-upcoming-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.65 },
        0.62
      );

      // 650ms — 3 Upcoming Cards Staggered Reveal
      tl.fromTo(
        ".wh-upcoming-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          onComplete: () => {
            gsap.set(".wh-upcoming-card", { clearProps: "transform" });
          },
        },
        0.68
      );

      // Bottom Microcopy
      tl.fromTo(
        ".wh-bottom-marker",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, stagger: 0.1 },
        0.8
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="activities"
      aria-label="What's Happening and Upcoming in the Community"
      className="relative w-full overflow-hidden bg-[#FAFBFD] text-[#111111] py-16 sm:py-20 md:py-24 lg:py-28 select-none"
    >
      {/* ── Background Architectural Decorative Elements ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Soft pale blue circular arc on left */}
        <svg
          className="absolute -left-36 top-12 h-[640px] w-[640px] opacity-25"
          viewBox="0 0 640 640"
          fill="none"
        >
          <circle cx="320" cy="320" r="300" stroke="#93C5FD" strokeWidth="1.2" />
        </svg>

        {/* Small solid blue square marker on left */}
        <div className="absolute left-[3%] top-[34%] h-2.5 w-2.5 bg-[#0066FF] opacity-75 hidden xl:block" />

        {/* Large sweeping arc on right */}
        <svg
          className="absolute -right-32 bottom-20 h-[560px] w-[560px] opacity-20"
          viewBox="0 0 560 560"
          fill="none"
        >
          <circle cx="280" cy="280" r="260" stroke="#93C5FD" strokeWidth="1.2" />
        </svg>

        {/* Ambient blurs */}
        <div className="absolute left-[10%] top-1/3 h-72 w-72 rounded-full bg-[#EBF4FF]/60 blur-3xl" />
        <div className="absolute right-[8%] bottom-1/4 h-80 w-80 rounded-full bg-[#EBF4FF]/60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1540px] px-6 sm:px-10 lg:px-14">
        {/* ═══════════════════════════════════════════════════════════════
            BLOCK A: WHAT'S HAPPENING
           ═══════════════════════════════════════════════════════════════ */}
        <div className="relative">
          {/* Top Filters Row (Categories + Status) */}
          <div className="wh-filters opacity-0 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Pills (Events, Workshops, Projects, Stories, Announcements) */}
            <div
              role="tablist"
              aria-label="Filter events by category"
              className="inline-flex flex-wrap items-center gap-1.5 rounded-full bg-white/90 p-1.5 border border-[#E2E8F0] shadow-[0_2px_12px_rgba(20,40,80,0.03)]"
            >
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCarouselIndex(0);
                    }}
                    className={`rounded-full px-4 py-2 font-jakarta text-xs sm:text-[13px] font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#0066FF] text-white shadow-sm"
                        : "bg-transparent text-[#5F6672] hover:text-[#111111] hover:bg-black/5"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Time Pills (All, Upcoming, Past) */}
            <div
              role="tablist"
              aria-label="Filter events by timing"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/90 p-1.5 border border-[#E2E8F0] shadow-[0_2px_12px_rgba(20,40,80,0.03)] self-start md:self-auto"
            >
              {STATUS_FILTERS.map((f) => {
                const isActive = selectedStatus === f.key;
                return (
                  <button
                    key={f.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setSelectedStatus(f.key);
                      setCarouselIndex(0);
                    }}
                    className={`rounded-full px-4 py-2 font-jakarta text-xs sm:text-[13px] font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#0066FF] text-white shadow-sm"
                        : "bg-transparent text-[#5F6672] hover:text-[#111111] hover:bg-black/5"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Block A Grid: Left Heading + Center Featured Carousel + Right Editorial Side Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            {/* ── LEFT: Heading & Supporting Description (3 Cols) ── */}
            <div className="lg:col-span-3 flex flex-col justify-start">
              {/* Eyebrow: • WHAT'S HAPPENING */}
              <div className="wh-eyebrow opacity-0 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#0066FF]" />
                <span className="font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#5F6672]">
                  WHAT&apos;S HAPPENING
                </span>
              </div>

              {/* Headline with Masked Line Reveal */}
              <h2 className="mt-4 font-clash text-4xl sm:text-5xl md:text-[54px] font-bold tracking-tight text-[#111111] leading-[0.98]">
                <span className="block overflow-hidden">
                  <span className="wh-heading-line wh-heading-line-1 block opacity-0">
                    Ideas in
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="wh-heading-line wh-heading-line-2 block text-[#0066FF] opacity-0">
                    Motion.
                  </span>
                </span>
              </h2>

              {/* Supporting Copy with Blue Accent Line */}
              <div className="wh-desc opacity-0 mt-6 flex items-start gap-3.5">
                <span className="h-10 w-[2px] bg-[#0066FF] shrink-0 mt-1 rounded-full" />
                <p className="font-jakarta text-sm sm:text-[15px] leading-relaxed text-[#5F6672]">
                  Events, workshops, projects and stories from across the FORGE ecosystem.
                </p>
              </div>
            </div>

            {/* ── CENTER: Featured Event Cards (7 Cols on desktop) ── */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Cards Row (shows 2 cards side by side on desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {filteredFeatured.slice(carouselIndex, carouselIndex + 2).map((item, idx) => (
                  <article
                    key={item.id + idx}
                    className="wh-featured-card opacity-0 group/featured relative flex flex-col justify-between rounded-[24px] bg-white border border-[#E2E8F0] p-3 sm:p-3.5 shadow-[0_12px_36px_rgba(20,40,80,0.05)] hover:shadow-[0_20px_50px_rgba(20,40,80,0.12)] hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer"
                  >
                    {/* Image Area with Overlays */}
                    <div className="relative h-44 sm:h-48 md:h-52 w-full rounded-[18px] overflow-hidden bg-[#EDF4FF]">
                      <Image
                        src={item.image || "/community-events/demo-day-winter.png"}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/featured:scale-[1.04]"
                      />

                      {/* Top Left: Date Pill Overlay */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 font-jakarta text-[11px] font-bold text-[#0066FF] shadow-sm">
                        <Calendar className="h-3 w-3 stroke-[2.2]" />
                        <span>{item.date}</span>
                      </div>

                      {/* Top Right: Arrow Button Overlay */}
                      <div className="absolute top-3 right-3 z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/95 backdrop-blur-md text-[#111111] shadow-sm transition-transform duration-300 group-hover/featured:translate-x-0.5 group-hover/featured:-translate-y-0.5">
                        <ArrowUpRight className="h-4 w-4 stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Content Beneath Image */}
                    <div className="px-3 pt-4 pb-2 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="font-clash text-lg sm:text-[19px] font-bold text-[#111111] leading-snug group-hover/featured:text-[#0066FF] transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-2 font-jakarta text-[13px] leading-relaxed text-[#5F6672] line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom Attendee Row */}
                      <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                        <div className="flex items-center">
                          {/* Overlapping Avatar Circles */}
                          <div className="flex -space-x-2 overflow-hidden">
                            <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#0A192F] text-white text-[9px] font-bold flex items-center justify-center">
                              B1
                            </span>
                            <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#0066FF] text-white text-[9px] font-bold flex items-center justify-center">
                              B2
                            </span>
                            <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#78D8C6] text-[#0A192F] text-[9px] font-bold flex items-center justify-center">
                              B3
                            </span>
                          </div>
                          <span className="ml-3 font-jakarta text-[11px] font-semibold text-[#8896A6]">
                            {item.attendeesCount || "+120 attended"}
                          </span>
                        </div>

                        <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.16em] text-[#0066FF] group-hover/featured:translate-x-1 transition-transform">
                          VIEW →
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Carousel Controls & Scribble Note Row */}
              <div className="mt-6 flex items-center justify-between">
                {/* Arrow Controls */}
                <div className="flex items-center gap-2.5">
                  <button
                    aria-label="Previous events"
                    onClick={handlePrev}
                    disabled={carouselIndex === 0}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9DEE7] bg-white text-[#111111] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-black/5 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    aria-label="Next events"
                    onClick={handleNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0066FF] text-white shadow-md transition-all duration-300 hover:bg-[#0052D4] hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Hand-Drawn Scribble Annotation: Real builders. Real progress. */}
                <div className="flex items-center gap-2">
                  <div className="relative h-12 w-28 sm:w-32">
                    <Image
                      src="/community-events/real-builders-scribble.png"
                      alt="Real builders. Real progress."
                      fill
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── FAR RIGHT: Editorial Side Visual Collage (2 Cols on desktop) ── */}
            <div className="wh-editorial-side opacity-0 hidden lg:flex lg:col-span-2 flex-col items-center justify-center relative">
              <div className="relative w-full max-w-[200px] h-[260px]">
                {/* Offset Blue Border Frame */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-3 -left-3 w-full h-full rounded-[16px] border border-[#0066FF]/25 z-0"
                />

                {/* Solid Blue Block Accent */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-3 -right-3 w-16 h-28 bg-[#0066FF] rounded-lg -z-10 shadow-sm"
                />

                {/* The Building Exterior Image with "PEOPLE IDEAS SPACES IMPACT" */}
                <div className="relative z-10 w-full h-full rounded-[16px] overflow-hidden shadow-[0_16px_40px_rgba(20,40,80,0.12)] border border-white/90 bg-white">
                  <Image
                    src="/community-events/building-side.png"
                    alt="FORGE building - People Ideas Spaces Impact"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>

                {/* Small blue top-right accent square */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-5 right-2 w-2.5 h-2.5 bg-[#0066FF] z-20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Seamless Subtle Divider Between Block A and Block B ── */}
        <div className="my-14 sm:my-18 w-full h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

        {/* ═══════════════════════════════════════════════════════════════
            BLOCK B: UPCOMING IN THE COMMUNITY
           ═══════════════════════════════════════════════════════════════ */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            {/* ── LEFT: Upcoming Heading & Description (3 Cols) ── */}
            <div className="lg:col-span-3 flex flex-col justify-start">
              {/* Eyebrow: • UPCOMING */}
              <div className="wh-upcoming-eyebrow opacity-0 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#0066FF]" />
                <span className="font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#5F6672]">
                  UPCOMING
                </span>
              </div>

              {/* Headline */}
              <h2 className="mt-4 font-clash text-4xl sm:text-5xl md:text-[54px] font-bold tracking-tight text-[#111111] leading-[0.98]">
                <span className="block overflow-hidden">
                  <span className="wh-upcoming-heading-line block opacity-0">
                    Upcoming
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="wh-upcoming-heading-line block opacity-0">
                    in the
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="wh-upcoming-heading-line block text-[#0066FF] opacity-0">
                    Community.
                  </span>
                </span>
              </h2>

              {/* Supporting Copy with Blue Accent Line */}
              <div className="wh-upcoming-desc opacity-0 mt-6 flex items-start gap-3.5">
                <span className="h-10 w-[2px] bg-[#0066FF] shrink-0 mt-1 rounded-full" />
                <p className="font-jakarta text-sm sm:text-[15px] leading-relaxed text-[#5F6672]">
                  Join upcoming events, workshops, and announcements across the FORGE network.
                </p>
              </div>
            </div>

            {/* ── RIGHT: 3 Identical Cards + View All Action (9 Cols) ── */}
            <div className="lg:col-span-9 flex flex-col lg:flex-row items-center gap-6">
              {/* 3 Identical Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 flex-1 w-full">
                {UPCOMING_CARDS_DATA.map((event) => (
                  <article
                    key={event.title}
                    className="wh-upcoming-card opacity-0 group/card relative flex flex-col justify-between rounded-[24px] bg-white border border-[#E2E8F0] p-6 sm:p-7 shadow-[0_12px_36px_rgba(20,40,80,0.05)] hover:shadow-[0_20px_50px_rgba(20,40,80,0.12)] hover:-translate-y-1.5 hover:border-[#0066FF]/35 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] min-h-[380px]"
                  >
                    <div>
                      {/* Top Row: Category Pill + Status Pill */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-[#EBF4FF] px-3 py-1 font-jakarta text-xs font-semibold text-[#0066FF]">
                          {event.type}
                        </span>
                        <span className="rounded-full bg-black/5 px-3 py-1 font-jakarta text-xs font-medium text-[#5F6672]">
                          {event.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-5 font-clash text-lg sm:text-[20px] font-bold text-[#111111] leading-tight group-hover/card:text-[#0066FF] transition-colors">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2.5 font-jakarta text-[13px] sm:text-[14px] leading-relaxed text-[#5F6672] line-clamp-2">
                        {event.description}
                      </p>

                      {/* Metadata Lines with Icons */}
                      <div className="mt-5 space-y-2 border-t border-[#F1F5F9] pt-4 font-jakarta text-xs text-[#5F6672]">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 text-[#8896A6]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3.5 w-3.5 text-[#8896A6]" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-[#8896A6]" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      {/* Host Info */}
                      <p className="mt-3 font-jakarta text-[11px] text-[#8896A6]">
                        Hosted by {event.host} &middot; {event.audience}
                      </p>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="mt-6 pt-2">
                      <JoinButton className="group/btn inline-flex items-center gap-2 rounded-full bg-[#0066FF] hover:bg-[#0052D4] text-white px-6 py-2.5 font-jakarta text-xs sm:text-[13px] font-semibold shadow-[0_6px_20px_rgba(0,102,255,0.22)] hover:shadow-[0_10px_25px_rgba(0,102,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer">
                        <span>Register Interest</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </JoinButton>
                    </div>
                  </article>
                ))}
              </div>

              {/* Far Right "View All Events" Pill Link */}
              <Link
                href="#activities"
                className="wh-upcoming-card opacity-0 group/viewall shrink-0 flex flex-col items-center justify-center gap-2 self-center text-center p-3 cursor-pointer"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9DEE7] bg-white text-[#0066FF] shadow-sm transition-all duration-300 group-hover/viewall:bg-[#0066FF] group-hover/viewall:border-[#0066FF] group-hover/viewall:text-white group-hover/viewall:scale-105">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/viewall:translate-x-0.5" />
                </div>
                <span className="font-jakarta text-xs font-bold text-[#0066FF] underline underline-offset-4 decoration-[#0066FF]/40 group-hover/viewall:decoration-[#0066FF]">
                  View all
                  <br />
                  events
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom Editorial Microcopy Rules ── */}
        <div className="mt-14 sm:mt-18 pt-6 border-t border-[#D9DEE7]/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Bottom Left: — FROM CAMPUS, TO IMPACT. */}
          <div className="wh-bottom-marker opacity-0 flex items-center gap-2.5 font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#8896A6]">
            <span className="h-[1px] w-6 bg-[#8896A6]" />
            <span>FROM CAMPUS. TO IMPACT.</span>
          </div>

          {/* Bottom Right: — A COMMUNITY FOR WHAT'S NEXT. */}
          <div className="wh-bottom-marker opacity-0 flex items-center gap-2.5 font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#8896A6]">
            <span className="h-[1px] w-6 bg-[#8896A6]" />
            <span>A COMMUNITY FOR WHAT&apos;S NEXT.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
