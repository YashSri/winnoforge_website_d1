"use client";

import { useMemo, useState, useRef } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Search,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  CheckCircle2,
  Wrench,
  ArrowRight,
  GraduationCap,
  Laptop,
  BookOpen,
} from "lucide-react";
import {
  COURSE_CATALOG,
  CourseItem,
  getCourseImage,
  getCourseIllustration,
} from "@/lib/courses-data";
import { useModal } from "@/components/modal/ModalContext";

type SortOption = "relevant" | "duration-desc" | "duration-asc" | "title-asc" | "title-desc";

// Curated priority order for default "Most Relevant" sort to match reference
const REFERENCE_ORDER: Record<string, number> = {
  "1y-genai": 1,
  "1y-fullstack": 2,
  "1y-datascience": 3,
  "1y-dataanalytics": 4,
  "1y-cloud": 5,
  "6m-genai": 6,
  "1y-dsa": 7,
  "1y-iot": 8,
  "1y-marketing": 9,
  "6m-fullstack": 10,
  "6m-datascience": 11,
  "6m-dataanalytics": 12,
  "6m-cloud": 13,
  "6m-dsa": 14,
  "6m-iot": 15,
  "6m-marketing": 16,
  "3m-genai": 17,
  "3m-fullstack": 18,
  "3m-datascience": 19,
  "3m-dataanalytics": 20,
  "3m-cloud": 21,
  "3m-dsa": 22,
  "3m-iot": 23,
  "3m-marketing": 24,
  "45d-analytics": 25,
  "45d-webdev": 26,
};

const DURATION_WEIGHT: Record<string, number> = {
  "1-year": 4,
  "6-months": 3,
  "3-months": 2,
  "45-days": 1,
};

export default function CourseCatalogSection() {
  const { open } = useModal();
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedDomain, setSelectedDomain] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("relevant");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const topicsScrollRef = useRef<HTMLDivElement>(null);

  // Dynamic counts derived directly from actual course catalog
  const durationCounts = useMemo(() => {
    return {
      all: COURSE_CATALOG.length,
      "1-year": COURSE_CATALOG.filter((c) => c.durationCategory === "1-year").length,
      "6-months": COURSE_CATALOG.filter((c) => c.durationCategory === "6-months").length,
      "3-months": COURSE_CATALOG.filter((c) => c.durationCategory === "3-months").length,
      "45-days": COURSE_CATALOG.filter((c) => c.durationCategory === "45-days").length,
    };
  }, []);

  // Duration tabs configuration
  const durationTabs = useMemo(
    () => [
      { key: "all", label: "All Durations", count: durationCounts.all },
      { key: "1-year", label: "1 Year", count: durationCounts["1-year"] },
      { key: "6-months", label: "6 Months", count: durationCounts["6-months"] },
      { key: "3-months", label: "3 Months", count: durationCounts["3-months"] },
      { key: "45-days", label: "45 Days", count: durationCounts["45-days"] },
    ],
    [durationCounts]
  );

  // Distinct topics list from catalog
  const domains = useMemo(() => {
    const list = Array.from(new Set(COURSE_CATALOG.map((c) => c.domain)));
    return ["all", ...list];
  }, []);

  // Filtered & sorted courses
  const filteredCourses = useMemo(() => {
    const list = COURSE_CATALOG.filter((course) => {
      // Duration filter
      if (
        selectedDuration !== "all" &&
        course.durationCategory !== selectedDuration
      ) {
        return false;
      }

      // Domain filter
      if (selectedDomain !== "all" && course.domain !== selectedDomain) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesDomain = course.domain.toLowerCase().includes(query);
        const matchesDesc = course.description.toLowerCase().includes(query);
        const matchesDuration = course.duration.toLowerCase().includes(query);
        const matchesHighlights = course.highlights.some((h) =>
          h.toLowerCase().includes(query)
        );
        return (
          matchesTitle ||
          matchesDomain ||
          matchesDesc ||
          matchesDuration ||
          matchesHighlights
        );
      }

      return true;
    });

    // Apply sorting
    return list.sort((a, b) => {
      if (sortBy === "relevant") {
        const orderA = REFERENCE_ORDER[a.id] ?? 999;
        const orderB = REFERENCE_ORDER[b.id] ?? 999;
        return orderA - orderB;
      }
      if (sortBy === "duration-desc") {
        return (DURATION_WEIGHT[b.durationCategory] || 0) - (DURATION_WEIGHT[a.durationCategory] || 0);
      }
      if (sortBy === "duration-asc") {
        return (DURATION_WEIGHT[a.durationCategory] || 0) - (DURATION_WEIGHT[b.durationCategory] || 0);
      }
      if (sortBy === "title-asc") {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === "title-desc") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });
  }, [selectedDuration, selectedDomain, searchQuery, sortBy]);

  // Handle filter changes (resets pagination state)
  const handleDurationChange = (key: string) => {
    setSelectedDuration(key);
    setIsExpanded(false);
  };

  const handleDomainChange = (domain: string) => {
    setSelectedDomain(domain);
    setIsExpanded(false);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setIsExpanded(false);
  };

  const clearFilters = () => {
    setSelectedDuration("all");
    setSelectedDomain("all");
    setSearchQuery("");
    setSortBy("relevant");
    setIsExpanded(false);
  };

  // Visible courses (strictly 6 initially, all when expanded)
  const visibleCourses = isExpanded ? filteredCourses : filteredCourses.slice(0, 6);
  const remainingCount = Math.max(0, filteredCourses.length - 6);

  // Scroll topics container
  const scrollTopics = (direction: "left" | "right") => {
    if (topicsScrollRef.current) {
      const offset = direction === "left" ? -180 : 180;
      topicsScrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const getDurationBadgeColor = (duration: string) => {
    switch (duration) {
      case "1 Year":
        return "bg-[#102A43] text-white";
      case "6 Months":
        return "bg-[#1683E8] text-white";
      case "3 Months":
        return "bg-[#1E3A8A] text-white";
      case "45 Days":
        return "bg-[#D92D20] text-white";
      default:
        return "bg-[#102A43] text-white";
    }
  };

  return (
    <section
      id="courses"
      className="relative w-full bg-[#FBFBFE] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-[#E2E8F0] overflow-hidden"
    >
      {/* Decorative background contour lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-60"
      >
        <svg
          className="absolute -top-24 -left-24 w-[600px] h-[600px] text-[#1683E8]/[0.04]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#1683E8]/[0.03] blur-[80px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px]">
        {/* ━━━━━━━━ 1. EDITORIAL HERO WITH RIGHT-SIDE ILLUSTRATION ━━━━━━━━ */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-10 sm:pb-12 border-b border-[#E2E8F0]/70">
          {/* Left Text Column */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#64748B]">
                OFFICIAL BROCHURES &amp; CURRICULA
              </span>
              <span className="h-[1.5px] w-10 bg-[#1683E8]" />
            </div>

            {/* Heading */}
            <h2 className="font-clash mt-3 text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#102A43] leading-[1.06]">
              Courses by <span className="text-[#1683E8]">Duration.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="font-jakarta mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl">
              Explore structured learning paths, verified syllabi, and project
              roadmaps designed for every stage of your journey.
            </p>
          </div>

          {/* Right Hero Photographic Visual Column */}
          <div className="shrink-0 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-[0_12px_36px_rgba(16,42,67,0.08)] group bg-[#F1F5F9]">
              <Image
                src="/course-images/hero-campus.jpg"
                alt="FORGE Innovation Campus & Active Builders"
                fill
                priority
                sizes="(max-width: 640px) 340px, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/75 via-[#102A43]/15 to-transparent pointer-events-none" />

              {/* Floating Editorial Badge Overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/60 shadow-md">
                <div>
                  <p className="font-jakarta text-[10px] font-bold uppercase tracking-wider text-[#1683E8]">
                    Hands-On Engineering
                  </p>
                  <p className="font-clash text-xs sm:text-[13px] font-bold text-[#102A43]">
                    From Curiosity to Capability
                  </p>
                </div>
                <span className="text-[10px] font-bold font-jakarta bg-[#1683E8] text-white px-2.5 py-1 rounded-full shadow-xs">
                  26 Curricula
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ━━━━━━━━ 2. DURATION FILTER TABS (All, 1 Year, 6 Months, 3 Months, 45 Days) ━━━━━━━━ */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-2 sm:gap-3">
          {durationTabs.map((tab) => {
            const isActive = selectedDuration === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => handleDurationChange(tab.key)}
                className={`group relative inline-flex items-center gap-2.5 rounded-full px-4 sm:px-5 py-2.5 font-jakarta text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#1683E8] text-white shadow-[0_4px_16px_rgba(22,131,232,0.28)] scale-[1.02]"
                    : "bg-white text-[#102A43] border border-[#E2E8F0] hover:border-[#1683E8] hover:text-[#1683E8] shadow-xs"
                }`}
              >
                <Calendar
                  className={`h-4 w-4 transition-colors ${
                    isActive ? "text-white" : "text-[#1683E8]"
                  }`}
                />
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-bold transition-colors ${
                    isActive
                      ? "bg-white/25 text-white"
                      : "bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#EAF3FF] group-hover:text-[#1683E8]"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ━━━━━━━━ 3. UNIFIED SEARCH & TOPIC FILTER BAR ━━━━━━━━ */}
        <div className="mt-6 flex flex-col lg:flex-row items-stretch lg:items-center gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-[#E2E8F0] shadow-xs">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[260px] lg:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search courses, e.g. Generative AI, Data Science..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-jakarta text-xs sm:text-sm text-[#102A43] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#1683E8] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#102A43] p-1"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Subtle Vertical Divider (desktop) */}
          <div className="hidden lg:block h-8 w-px bg-[#E2E8F0]" />

          {/* Topic Pills with Smooth Horizontal Scroll */}
          <div className="relative flex-1 flex items-center overflow-hidden">
            <button
              type="button"
              onClick={() => scrollTopics("left")}
              aria-label="Scroll topics left"
              className="hidden sm:flex shrink-0 mr-1.5 h-8 w-8 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#64748B] hover:text-[#1683E8] hover:border-[#1683E8] transition-all cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div
              ref={topicsScrollRef}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth w-full"
            >
              {domains.map((d) => {
                const isSelected = selectedDomain === d;
                const label = d === "all" ? "All Topics" : d;
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => handleDomainChange(d)}
                    className={`px-3.5 py-1.5 rounded-lg font-jakarta text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#102A43] text-white shadow-xs"
                        : "bg-[#F1F5F9] text-[#64748B] hover:bg-[#EAF3FF] hover:text-[#1683E8]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => scrollTopics("right")}
              aria-label="Scroll topics right"
              className="hidden sm:flex shrink-0 ml-1.5 h-8 w-8 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#64748B] hover:text-[#1683E8] hover:border-[#1683E8] transition-all cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ━━━━━━━━ 4. RESULTS COUNTER & SORT CONTROLS ━━━━━━━━ */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-jakarta text-xs sm:text-sm text-[#64748B]">
          {/* Result Count Status */}
          <div>
            Showing <strong className="text-[#102A43]">{visibleCourses.length}</strong> of{" "}
            <strong className="text-[#102A43]">{filteredCourses.length}</strong> courses
            {selectedDuration !== "all" && (
              <span>
                {" "}
                in <strong className="text-[#1683E8]">{selectedDuration.replace("-", " ")}</strong>
              </span>
            )}
            {selectedDomain !== "all" && (
              <span>
                {" "}
                under <strong className="text-[#1683E8]">{selectedDomain}</strong>
              </span>
            )}
            {(selectedDuration !== "all" || selectedDomain !== "all" || searchQuery.trim() !== "") && (
              <button
                type="button"
                onClick={clearFilters}
                className="ml-3 text-[#1683E8] hover:underline font-semibold cursor-pointer inline-flex items-center gap-1"
              >
                <X className="h-3 w-3" /> Reset filters
              </button>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-[#64748B] text-xs font-medium">Sort by</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none bg-white border border-[#E2E8F0] rounded-lg pl-3 pr-8 py-1.5 font-jakarta text-xs font-semibold text-[#102A43] hover:border-[#1683E8] focus:outline-none focus:border-[#1683E8] cursor-pointer"
              >
                <option value="relevant">Most Relevant</option>
                <option value="duration-desc">Duration (Longest First)</option>
                <option value="duration-asc">Duration (Shortest First)</option>
                <option value="title-asc">Title (A - Z)</option>
                <option value="title-desc">Title (Z - A)</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#64748B]" />
            </div>
          </div>
        </div>

        {/* ━━━━━━━━ 5. COURSE CARDS GRID (3 Columns on Desktop, 6 Initially) ━━━━━━━━ */}
        {filteredCourses.length === 0 ? (
          <div className="mt-10 text-center py-16 bg-white rounded-3xl border border-[#E2E8F0] p-8 shadow-xs">
            <BookOpen className="h-12 w-12 text-[#1683E8]/50 mx-auto" />
            <h3 className="font-clash text-xl font-bold text-[#102A43] mt-4">
              No matching courses found
            </h3>
            <p className="font-jakarta text-sm text-[#64748B] mt-2 max-w-md mx-auto">
              We couldn&apos;t find any course brochures matching your current filters. Try
              clearing the search or selecting another duration.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1683E8] px-6 py-2.5 font-jakarta text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#1272cb] transition-all cursor-pointer"
            >
              Reset Filters &amp; View All
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {visibleCourses.map((course: CourseItem) => {
              const durationBadgeClass = getDurationBadgeColor(course.duration);
              const courseImageSrc = getCourseImage(course);

              return (
                <div
                  key={course.id}
                  className="group relative flex flex-col justify-between rounded-[22px] border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_2px_12px_rgba(16,42,67,0.03)] hover:shadow-[0_16px_36px_rgba(16,42,67,0.08)] hover:border-[#1683E8] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Upper Section: Badges, Title, Illustration, Description, Modules */}
                  <div>
                    {/* Top Row: Duration Badge & Category Pill */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-jakarta text-[11px] font-bold uppercase tracking-wider ${durationBadgeClass}`}
                      >
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </span>

                      <span className="font-jakarta text-[11px] font-semibold text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-0.5 rounded-md">
                        {course.domain}
                      </span>
                    </div>

                    {/* Title & Real Photo Visual Row */}
                    <div className="mt-4 flex items-start justify-between gap-3">
                      <h3 className="font-clash text-lg sm:text-[21px] font-bold text-[#102A43] leading-snug group-hover:text-[#1683E8] transition-colors flex-1">
                        {course.title}
                      </h3>

                      {/* Course Real Photographic Visual */}
                      <div className="shrink-0 relative w-24 h-20 sm:w-28 sm:h-22 rounded-xl overflow-hidden shadow-xs border border-[#E2E8F0] bg-[#F1F5F9]">
                        <Image
                          src={courseImageSrc}
                          alt={`${course.title} real visual`}
                          fill
                          sizes="(max-width: 640px) 96px, 112px"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="font-jakarta mt-3 text-xs sm:text-[13px] text-[#64748B] leading-relaxed line-clamp-3">
                      {course.description}
                    </p>

                    {/* Key Modules */}
                    <div className="mt-5 pt-3.5 border-t border-[#F1F5F9]">
                      <p className="font-jakarta text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#64748B] mb-2.5 flex items-center gap-1.5">
                        <Wrench className="h-3 w-3 text-[#1683E8]" /> KEY MODULES
                      </p>
                      <ul className="space-y-1.5">
                        {course.highlights.slice(0, 3).map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 font-jakarta text-xs text-[#334155] leading-snug"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#1683E8] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Area: Download Brochure + Preview / Request Info */}
                  <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex flex-col gap-2.5">
                    {/* Primary Direct Download Button */}
                    <a
                      href={course.pdfPath}
                      download={course.fileName}
                      className="w-full flex items-center justify-between rounded-xl bg-[#1683E8] hover:bg-[#1272cb] text-white py-2.5 px-4 font-jakarta text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all active:scale-[0.98] group/btn"
                      aria-label={`Download ${course.title} (${course.duration}) Brochure`}
                    >
                      <span className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        <span>Download Brochure ({course.duration})</span>
                      </span>
                      <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </a>

                    {/* Secondary Actions Row */}
                    <div className="flex items-center justify-between pt-1">
                      <a
                        href={course.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-jakarta text-xs font-semibold text-[#64748B] hover:text-[#1683E8] transition-colors py-1"
                      >
                        <FileText className="h-3.5 w-3.5 text-[#1683E8]" />
                        <span>Preview PDF</span>
                        <ExternalLink className="h-3 w-3 text-[#94A3B8]" />
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          open("download", {
                            programSlug: course.slug,
                            programName: `${course.title} (${course.duration})`,
                            pdfPath: course.pdfPath,
                            fileName: course.fileName,
                            actionType: "download",
                          })
                        }
                        className="inline-flex items-center gap-1 font-jakarta text-xs font-semibold text-[#1683E8] hover:underline cursor-pointer py-1"
                      >
                        <span>Request Info</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ━━━━━━━━ 6. VIEW ALL COURSES INTERACTION BUTTON ━━━━━━━━ */}
        {filteredCourses.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#1683E8] bg-white hover:bg-[#1683E8] text-[#1683E8] hover:text-white px-8 py-3.5 font-jakarta text-sm font-bold shadow-[0_4px_16px_rgba(22,131,232,0.10)] hover:shadow-[0_8px_24px_rgba(22,131,232,0.25)] transition-all duration-300 -translate-y-0 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>
                {isExpanded
                  ? "Show Less"
                  : `View All Courses (${remainingCount})`}
              </span>
              <ArrowRight
                className={`h-4 w-4 transition-transform duration-300 ${
                  isExpanded
                    ? "-rotate-90 group-hover:-translate-y-0.5"
                    : "rotate-0 group-hover:translate-x-1"
                }`}
              />
            </button>
          </div>
        )}

        {/* ━━━━━━━━ 7. INSTITUTIONAL TRUST FOOTER HIGHLIGHTS ━━━━━━━━ */}
        <div className="mt-16 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-center select-none font-jakarta text-xs font-bold uppercase tracking-wider text-[#64748B]">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-[#1683E8]" />
            <span>26 Verified Course Curricula</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#1683E8]" />
            <span>4 Durations: 1 Year &bull; 6 Months &bull; 3 Months &bull; 45 Days</span>
          </div>

          <div className="flex items-center gap-2">
            <Laptop className="h-4 w-4 text-[#1683E8]" />
            <span>Direct PDF Brochures &amp; Syllabi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
