"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Filter,
  GraduationCap,
  Laptop,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { COURSE_CATALOG, CourseItem, DURATION_TABS } from "@/lib/courses-data";
import { useModal } from "@/components/modal/ModalContext";

export default function CourseCatalogSection() {
  const { open } = useModal();
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedDomain, setSelectedDomain] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Domain options
  const domains = useMemo(() => {
    const list = Array.from(new Set(COURSE_CATALOG.map((c) => c.domain)));
    return ["all", ...list];
  }, []);

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return COURSE_CATALOG.filter((course) => {
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
  }, [selectedDuration, selectedDomain, searchQuery]);

  const clearFilters = () => {
    setSelectedDuration("all");
    setSelectedDomain("all");
    setSearchQuery("");
  };

  const getDurationBadgeColor = (duration: string) => {
    switch (duration) {
      case "1 Year":
        return "bg-[#102A43] text-white border-[#183A5A]";
      case "6 Months":
        return "bg-[#1683E8] text-white border-[#1474CE]";
      case "3 Months":
        return "bg-[#EAF3FF] text-[#1683E8] border-[#D1E6FF]";
      case "45 Days":
        return "bg-[#FEF3F2] text-[#D92D20] border-[#FECDCA]";
      default:
        return "bg-[#F0F4F8] text-[#102A43] border-[#D9DEE7]";
    }
  };

  return (
    <section
      id="courses"
      className="relative w-full bg-[#F7F8FC] py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-[#D9DEE7] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      >
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#1683E8]/[0.06] blur-[80px]" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[#102A43]/[0.04] blur-[90px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px]">
        {/* ━━━━━━━━ SECTION HEADER ━━━━━━━━ */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-8 bg-[#1683E8]/40" />
            <span className="font-jakarta text-xs font-bold uppercase tracking-[0.24em] text-[#1683E8]">
              OFFICIAL BROCHURES &amp; CURRICULA
            </span>
            <span className="h-[1.5px] w-8 bg-[#1683E8]/40" />
          </div>

          {/* Heading */}
          <h2 className="font-clash mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-[1.04]">
            Courses by <span className="text-[#1683E8]">Duration.</span>
          </h2>

          {/* Subtext */}
          <p className="font-jakarta mt-4 text-base sm:text-lg text-[#5F6672] leading-relaxed">
            Download institutional curricula across <strong>1 Year</strong>,{" "}
            <strong>6 Months</strong>, <strong>3 Months</strong>, and{" "}
            <strong>45-Day</strong> fast-track cohorts. Verified syllabi and project
            roadmaps ready for offline study.
          </p>
        </div>

        {/* ━━━━━━━━ DURATION TABS (1 Year, 6 Months, 3 Months, 45 Days) ━━━━━━━━ */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {DURATION_TABS.map((tab) => {
            const isActive = selectedDuration === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setSelectedDuration(tab.key)}
                className={`group relative flex items-center gap-2 rounded-full px-5 py-2.5 font-jakarta text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#1683E8] text-white shadow-[0_6px_20px_rgba(22,131,232,0.28)] -translate-y-0.5 scale-[1.02]"
                    : "bg-white text-[#111111] border border-[#D9DEE7] hover:border-[#1683E8] hover:text-[#1683E8] shadow-xs"
                }`}
              >
                <Calendar className={`h-3.5 w-3.5 ${isActive ? "text-white" : "text-[#1683E8]"}`} />
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#F0F4F8] text-[#5F6672] group-hover:bg-[#EAF3FF] group-hover:text-[#1683E8]"
                  }`}
                >
                  {tab.count}
                </span>
                {"badge" in tab && tab.badge && (
                  <span
                    className={`hidden sm:inline-block text-[10px] uppercase tracking-wider px-1.5 py-0.2 rounded-md ${
                      isActive
                        ? "bg-white/15 text-white/90"
                        : "text-[#8898AA]"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ━━━━━━━━ SEARCH & DOMAIN FILTERS ━━━━━━━━ */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#D9DEE7] shadow-xs">
          {/* Search Box */}
          <div className="relative w-full md:w-80 lg:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8898AA]" />
            <input
              type="text"
              placeholder="Search courses, e.g. Generative AI, Full Stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-[#D9DEE7] bg-[#F7F8FC] font-jakarta text-xs sm:text-sm text-[#111111] placeholder:text-[#8898AA] focus:outline-none focus:border-[#1683E8] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8898AA] hover:text-[#111111]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Domain Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
            <span className="font-jakarta text-xs font-semibold text-[#8898AA] uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Filter className="h-3 w-3" /> Topic:
            </span>
            {domains.map((d) => {
              const isSelected = selectedDomain === d;
              const label = d === "all" ? "All Topics" : d;
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => setSelectedDomain(d)}
                  className={`px-3 py-1.5 rounded-lg font-jakarta text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#102A43] text-white"
                      : "bg-[#F0F4F8] text-[#5F6672] hover:bg-[#EAF3FF] hover:text-[#1683E8]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ━━━━━━━━ RESULTS COUNTER ━━━━━━━━ */}
        <div className="mt-6 flex items-center justify-between text-xs sm:text-sm font-jakarta text-[#5F6672]">
          <div>
            Showing <strong className="text-[#111111]">{filteredCourses.length}</strong> of{" "}
            <strong>{COURSE_CATALOG.length}</strong> course brochures
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
          </div>

          {(selectedDuration !== "all" ||
            selectedDomain !== "all" ||
            searchQuery.trim() !== "") && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-[#1683E8] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <X className="h-3 w-3" /> Reset all filters
            </button>
          )}
        </div>

        {/* ━━━━━━━━ COURSES GRID ━━━━━━━━ */}
        {filteredCourses.length === 0 ? (
          <div className="mt-12 text-center py-16 bg-white rounded-3xl border border-[#D9DEE7] p-8">
            <BookOpen className="h-12 w-12 text-[#1683E8]/50 mx-auto" />
            <h3 className="font-clash text-xl font-bold text-[#111111] mt-4">
              No matching brochures found
            </h3>
            <p className="font-jakarta text-sm text-[#5F6672] mt-2 max-w-md mx-auto">
              We couldn&apos;t find any course brochures matching your current filters. Try
              clearing the search or selecting another duration.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1683E8] px-6 py-2.5 font-jakarta text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#1272cb] transition-all"
            >
              View All Courses
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {filteredCourses.map((course: CourseItem) => {
              const durationBadgeClass = getDurationBadgeColor(course.duration);

              return (
                <div
                  key={course.id}
                  className="group relative flex flex-col justify-between rounded-[24px] border border-[#D9DEE7] bg-white p-6 sm:p-7 shadow-[0_6px_24px_rgba(16,42,67,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(16,42,67,0.10)] hover:border-[#1683E8]"
                >
                  {/* Top Bar: Duration Pill & Domain */}
                  <div>
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      {/* Duration Tag */}
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-jakarta text-xs font-bold uppercase tracking-wider ${durationBadgeClass}`}
                      >
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </span>

                      {/* Domain Tag */}
                      <span className="font-jakarta text-[11px] font-semibold text-[#5F6672] bg-[#F0F4F8] px-2.5 py-0.5 rounded-md">
                        {course.domain}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h3 className="font-clash text-xl sm:text-[22px] font-bold text-[#111111] mt-4 leading-snug group-hover:text-[#1683E8] transition-colors">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="font-jakarta mt-2.5 text-xs sm:text-[13.5px] text-[#5F6672] leading-relaxed line-clamp-3">
                      {course.description}
                    </p>

                    {/* Key Curriculum Highlights */}
                    <div className="mt-5 pt-4 border-t border-[#D9DEE7]/70">
                      <p className="font-jakarta text-[10px] font-bold uppercase tracking-wider text-[#8898AA] mb-2 flex items-center gap-1">
                        <Sparkles className="h-3 w-3 text-[#1683E8]" /> Key Modules:
                      </p>
                      <ul className="space-y-1.5">
                        {course.highlights.slice(0, 3).map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 font-jakarta text-xs text-[#111111]/80"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#1683E8] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Actions: Direct Download & View PDF */}
                  <div className="mt-6 pt-4 border-t border-[#D9DEE7] flex flex-col gap-2.5">
                    {/* Primary Direct Download Button */}
                    <a
                      href={course.pdfPath}
                      download={course.fileName}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#1683E8] hover:bg-[#1272cb] text-white py-2.5 px-4 font-jakarta text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
                      aria-label={`Download ${course.title} ${course.duration} Brochure`}
                    >
                      <Download className="h-4 w-4" />
                      <span>Download Brochure ({course.duration})</span>
                    </a>

                    {/* Secondary Actions Row: Open PDF in Tab + Enquire Modal */}
                    <div className="flex items-center justify-between gap-2">
                      <a
                        href={course.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-jakarta text-xs font-semibold text-[#5F6672] hover:text-[#1683E8] transition-colors py-1 px-1"
                      >
                        <FileText className="h-3.5 w-3.5 text-[#1683E8]" />
                        <span>Preview PDF</span>
                        <ExternalLink className="h-3 w-3 text-[#8898AA]" />
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          open("download", {
                            programSlug: course.slug,
                            programName: `${course.title} (${course.duration})`,
                          })
                        }
                        className="inline-flex items-center gap-1 font-jakarta text-xs font-semibold text-[#1683E8] hover:underline cursor-pointer"
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

        {/* ━━━━━━━━ FOOTER EDITORIAL HIGHLIGHT ━━━━━━━━ */}
        <div className="mt-16 pt-8 border-t border-[#D9DEE7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center select-none font-jakarta text-xs font-bold uppercase tracking-wider text-[#5F6672]">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-[#1683E8]" />
            <span>26 Verified Course Curricula</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#1683E8]" />
            <span>4 Flexible Durations: 1 Year &bull; 6 Months &bull; 3 Months &bull; 45 Days</span>
          </div>

          <div className="flex items-center gap-2">
            <Laptop className="h-4 w-4 text-[#1683E8]" />
            <span>Hybrid &amp; Online Cohorts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
