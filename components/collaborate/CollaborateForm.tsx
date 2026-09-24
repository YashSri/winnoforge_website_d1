"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  FileText,
  Lightbulb,
  Link2,
  Loader2,
  Mail,
  Phone,
  User,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const stakeholderTypes = [
  "Student",
  "Parent",
  "College / University",
  "Company",
  "Mentor / Expert",
  "Founder / Venture",
  "Community / Event",
  "Researcher",
  "CSR / Strategic Partner",
  "General Enquiry",
] as const;

export type StakeholderType = (typeof stakeholderTypes)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const valueBlocks = [
  {
    icon: Users,
    title: "Programs & Partnerships",
    description: "Build impactful learning experiences together.",
  },
  {
    icon: Lightbulb,
    title: "Ideas & Opportunities",
    description: "Bring your challenges, we'll find ways to solve them.",
  },
  {
    icon: BarChart3,
    title: "Real Impact",
    description: "Turn conversations into meaningful outcomes.",
  },
];

export default function CollaborateForm({
  stakeholder,
  onStakeholderChange,
}: {
  stakeholder: StakeholderType;
  onStakeholderChange: (value: StakeholderType) => void;
}) {
  const [form, setForm] = useState({
    "Full Name": "",
    Email: "",
    Phone: "",
    Organization: "",
    "Role / Designation": "",
    "Preferred Timeline": "",
    "Expected Audience": "",
    "Website / Profile Link": "",
    "Preferred Contact Method": "Email",
    Message: "",
  });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });
  const [formVisible, setFormVisible] = useState(false);
  const formCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSuccess(false);
  }, [stakeholder]);

  // Viewport observer for Form Entrance: opacity 0 -> 1, translateY 25px -> 0, 750ms duration
  useEffect(() => {
    const el = formCardRef.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setFormVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFormVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Subtle mouse parallax on decorative elements only
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseParallax({ x: x * 12, y: y * 12 });
  };

  const set =
    (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!form["Full Name"].trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!EMAIL_RE.test(form.Email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setError("Please confirm you're okay with FORGE contacting you about this.");
      return;
    }
    if (loading) return;

    setLoading(true);
    setError("");
    try {
      const payload = {
        formType: "collaborate",
        "Full Name": form["Full Name"],
        Email: form.Email,
        Phone: form.Phone || "—",
        Organization: form.Organization || "—",
        "Role / Designation": form["Role / Designation"] || "—",
        "Stakeholder Type": stakeholder,
        "Preferred Timeline": form["Preferred Timeline"] || "—",
        "Expected Audience": form["Expected Audience"] || "—",
        "Website / Profile Link": form["Website / Profile Link"] || "—",
        "Preferred Contact Method": form["Preferred Contact Method"],
        Message: form.Message || "—",
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // Liquid Glass Form input tokens: 12px radius, subtle inner glass surfaces, crisp focus rings
  const inputContainer = "group relative transition-all duration-300";
  const inputLabel =
    "block font-jakarta text-[11px] font-bold uppercase tracking-[0.16em] text-[#0D1117]/60 mb-1.5 transition-colors duration-200 group-focus-within:text-[#1683E8]";
  const inputBase =
    "w-full h-[42px] rounded-[12px] border border-[rgba(20,30,50,0.08)] bg-[rgba(255,255,255,0.28)] hover:bg-[rgba(255,255,255,0.36)] backdrop-blur-md pl-10 pr-4 py-2.5 font-jakarta text-sm leading-normal text-[#111111] placeholder:text-[rgba(20,30,50,0.48)] outline-none transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] focus:border-[#1683E8] focus:bg-[rgba(255,255,255,0.48)] focus:ring-[3px] focus:ring-[#1683E8]/[0.08]";
  const selectField =
    "w-full h-[42px] rounded-[12px] border border-[rgba(20,30,50,0.08)] bg-[rgba(255,255,255,0.28)] hover:bg-[rgba(255,255,255,0.36)] backdrop-blur-md pl-10 pr-9 py-2.5 font-jakarta text-sm leading-normal text-[#111111] outline-none transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] focus:border-[#1683E8] focus:bg-[rgba(255,255,255,0.48)] focus:ring-[3px] focus:ring-[#1683E8]/[0.08] appearance-none cursor-pointer";
  const textArea =
    "w-full rounded-[12px] border border-[rgba(20,30,50,0.08)] bg-[rgba(255,255,255,0.28)] hover:bg-[rgba(255,255,255,0.36)] backdrop-blur-md pl-10 pr-4 py-2.5 font-jakarta text-sm leading-normal text-[#111111] placeholder:text-[rgba(20,30,50,0.48)] outline-none transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] focus:border-[#1683E8] focus:bg-[rgba(255,255,255,0.48)] focus:ring-[3px] focus:ring-[#1683E8]/[0.08] resize-none";
  const iconBase =
    "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0D1117]/40 transition-colors duration-200 group-focus-within:text-[#1683E8]";

  // Sequential field entrance: Stagger 50–70ms (60ms), no height shift
  const fieldEnterStyle = (index: number) => ({
    opacity: formVisible ? 1 : 0,
    transform: formVisible ? "translateY(0)" : "translateY(12px)",
    transition:
      "opacity 450ms cubic-bezier(0.22, 1, 0.36, 1), transform 450ms cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${formVisible ? 180 + index * 60 : 0}ms`,
  });

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-[#F7F8FC] py-20 md:py-28 lg:py-32"
    >
      <style>{`
        /* Liquid Glass Form Material & Physical Reflections */
        .liquid-glass-form::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.20) 0%,
            rgba(255, 255, 255, 0.04) 40%,
            rgba(255, 255, 255, 0) 100%
          );
          pointer-events: none;
          opacity: 0.7;
        }

        .liquid-glass-form::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.15),
            inset 1.5px 1.5px 0 rgba(255, 255, 255, 0.45),
            inset 0 0 14px rgba(255, 255, 255, 0.16);
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .liquid-glass-form,
          .liquid-glass-form::before,
          .liquid-glass-form::after,
          .form-field-item {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
      {/* ========================================================
          BACKGROUND: SUBTLE FORGE AMBIENT GEOMETRICS + PARALLAX
      ======================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Large thin circular arc — Top Left */}
        <div
          className="absolute -top-32 -left-28 h-[540px] w-[540px] rounded-full border border-[#1683E8]/[0.08] animate-ambient-circle"
          style={{
            transform: `translate3d(${mouseParallax.x * 0.7}px, ${mouseParallax.y * 0.7}px, 0)`,
            transition: "transform 400ms ease-out",
          }}
        />

        {/* Large thin circular arc — Center Right */}
        <div
          className="absolute top-1/4 -right-36 h-[620px] w-[620px] rounded-full border border-[#1683E8]/[0.07] animate-ambient-arc"
          style={{
            transform: `translate3d(${mouseParallax.x * -0.6}px, ${mouseParallax.y * -0.6}px, 0)`,
            transition: "transform 400ms ease-out",
          }}
        />

        {/* Subtle royal blue dots */}
        <div
          className="absolute top-24 left-[46%] h-2.5 w-2.5 rounded-full bg-[#1683E8] animate-ambient-dot"
          style={{
            transform: `translate3d(${mouseParallax.x * 1.1}px, ${mouseParallax.y * 1.1}px, 0)`,
            animationDuration: "14s",
            transition: "transform 400ms ease-out",
          }}
        />
        <div
          className="absolute bottom-28 left-[12%] h-2 w-2 rounded-full bg-[#1683E8] animate-ambient-dot"
          style={{
            transform: `translate3d(${mouseParallax.x * -0.8}px, ${mouseParallax.y * -0.8}px, 0)`,
            animationDuration: "18s",
            animationDelay: "3s",
            transition: "transform 400ms ease-out",
          }}
        />
        <div
          className="absolute top-[65%] right-12 h-2.5 w-2.5 rounded-full bg-[#1683E8] animate-ambient-dot"
          style={{
            transform: `translate3d(${mouseParallax.x * 0.9}px, ${mouseParallax.y * 0.9}px, 0)`,
            animationDuration: "16s",
            animationDelay: "2s",
            transition: "transform 400ms ease-out",
          }}
        />

        {/* Subtle geometric hairline SVG */}
        <svg
          className="absolute inset-0 h-full w-full opacity-35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M -60 160 C 350 100, 850 220, 1600 120"
            fill="none"
            stroke="#1683E8"
            strokeWidth="0.75"
            strokeDasharray="4 8"
            strokeOpacity="0.12"
          />
          <path
            d="M 60 720 C 500 640, 1000 780, 1550 680"
            fill="none"
            stroke="#1683E8"
            strokeWidth="0.75"
            strokeDasharray="6 10"
            strokeOpacity="0.1"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 md:px-10 lg:px-12">
        {/* ========================================================
            TWO-COLUMN EDITORIAL COMPOSITION (APPLE × FORGE)
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* ========================================================
              LEFT COLUMN: HERO HEADLINE + VALUE BLOCKS + EDITORIAL IMAGE
          ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <ScrollReveal delay={0}>
                <div className="flex items-center gap-2.5 select-none">
                  <span className="font-jakarta text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#1683E8]">
                    GET IN TOUCH
                  </span>
                  <span className="h-[1px] w-8 sm:w-12 bg-[#1683E8]/30" />
                </div>
              </ScrollReveal>

              {/* Headline with "Mind." in FORGE Royal Blue */}
              <ScrollReveal delay={80}>
                <h2 className="font-clash text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#0D1117] leading-[1.06] mt-4">
                  Tell Us What
                  <br />
                  You Have in <span className="text-[#1683E8]">Mind.</span>
                </h2>
              </ScrollReveal>

              {/* Supporting Copy */}
              <ScrollReveal delay={180}>
                <p className="font-jakarta text-sm sm:text-base leading-relaxed text-[#5F6672] mt-4 max-w-lg">
                  Share a few details and our team will get in touch to explore how we can work
                  together.
                </p>
              </ScrollReveal>

              {/* Three Compact Value Blocks */}
              <div className="mt-8 sm:mt-10 space-y-4">
                {valueBlocks.map((block, idx) => {
                  const Icon = block.icon;
                  return (
                    <ScrollReveal key={block.title} delay={280 + idx * 90}>
                      <div className="group/val flex items-start gap-4 rounded-2xl p-3 sm:p-3.5 transition-all duration-300 hover:bg-white/60 hover:shadow-[0_8px_24px_rgba(24,42,72,0.04)] select-none cursor-default">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EBF3FF] text-[#1683E8] transition-all duration-300 group-hover/val:bg-[#1683E8] group-hover/val:text-white shadow-xs">
                          <Icon className="h-5 w-5 transition-transform duration-300 group-hover/val:scale-105" />
                        </div>
                        <div className="transition-transform duration-300 group-hover/val:translate-x-1">
                          <h4 className="font-clash text-base font-bold text-[#0D1117] leading-snug">
                            {block.title}
                          </h4>
                          <p className="font-jakarta text-xs sm:text-[13px] leading-relaxed text-[#5F6672] mt-0.5">
                            {block.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>

            {/* Editorial Photograph + Stats Lockup */}
            <ScrollReveal delay={350} className="mt-10 sm:mt-12">
              <div className="relative rounded-[24px] overflow-hidden bg-slate-900 shadow-[0_16px_40px_rgba(16,42,67,0.08)] group">
                <div className="relative h-[240px] sm:h-[280px] w-full overflow-hidden">
                  <Image
                    src="/collaborate/get-in-touch-campus.jpg"
                    alt="Modern campus environment with builders collaborating"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] motion-reduce:transform-none"
                  />
                  {/* Subtle Scrim */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
                  />
                </div>

                {/* Handwritten Accent Badge in Photo */}
                <div className="absolute bottom-4 right-5 z-10 pointer-events-none">
                  <span className="font-serif italic text-xs sm:text-[13px] text-white/90 drop-shadow-md">
                    From Conversations to Collaboration.
                  </span>
                </div>
              </div>

              {/* Stats Metrics Strip */}
              <div className="mt-7 grid grid-cols-3 gap-4 pt-6 border-t border-[#D9DEE7]/70">
                <div>
                  <div className="font-clash text-2xl sm:text-3xl font-bold text-[#0D1117]">
                    100<span className="text-[#1683E8]">+</span>
                  </div>
                  <div className="font-jakarta text-[11px] sm:text-xs text-[#5F6672] mt-0.5 leading-snug">
                    Institutions Engaged
                  </div>
                </div>

                <div>
                  <div className="font-clash text-2xl sm:text-3xl font-bold text-[#0D1117]">
                    5000<span className="text-[#1683E8]">+</span>
                  </div>
                  <div className="font-jakarta text-[11px] sm:text-xs text-[#5F6672] mt-0.5 leading-snug">
                    Builders in Ecosystem
                  </div>
                </div>

                <div>
                  <div className="font-clash text-2xl sm:text-3xl font-bold text-[#0D1117]">
                    50<span className="text-[#1683E8]">+</span>
                  </div>
                  <div className="font-jakarta text-[11px] sm:text-xs text-[#5F6672] mt-0.5 leading-snug">
                    Industry Partners
                  </div>
                </div>
              </div>

              {/* Bottom Left Editorial Tag */}
              <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A8492]">
                <span className="h-[1.5px] w-6 bg-[#1683E8]" />
                <span>IDEAS &nbsp;PEOPLE &nbsp;OPPORTUNITIES &nbsp;REAL IMPACT.</span>
              </div>
            </ScrollReveal>
          </div>

          {/* ========================================================
              RIGHT COLUMN: SUBTLE RESTRAINED LIQUID GLASS FORM CONTAINER
          ======================================================== */}
          <div className="lg:col-span-7">
            <div
              ref={formCardRef}
              className="liquid-glass-form relative rounded-[28px] p-6 sm:p-8 md:p-10 transition-all duration-750 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.20)",
                border: "1px solid rgba(255, 255, 255, 0.32)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                boxShadow:
                  "inset 0 0 0 1px rgba(255, 255, 255, 0.15), inset 1.5px 1.5px 0 rgba(255, 255, 255, 0.45), inset 0 0 14px rgba(255, 255, 255, 0.16), 0 18px 55px rgba(20, 50, 100, 0.10)",
                opacity: formVisible ? 1 : 0,
                transform: formVisible ? "translateY(0)" : "translateY(25px)",
              }}
            >
              {/* Form Physical Light Reflection Sweep (10–14s infinite loop, low opacity) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-[28px]"
              >
                <div className="w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-lg animate-glass-sweep-form pointer-events-none" />
              </div>

              {/* Form Top Category Indicator */}
              <div className="relative z-10 flex items-center justify-between mb-6 pb-4 border-b border-black/[0.06]">
                <div className="flex items-center gap-2.5">
                  <span className="h-4 w-1 rounded-full bg-[#1683E8]" />
                  <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-[#1683E8]">
                    {stakeholder ? stakeholder.toUpperCase() : "GENERAL ENQUIRY"}
                  </span>
                </div>

                <span className="font-jakarta text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  FORGE ENQUIRY
                </span>
              </div>

              {success ? (
                <div className="relative z-10 flex flex-col items-center gap-4 py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EBF3FF] text-[#1683E8] shadow-xs">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-clash text-2xl font-bold text-[#0D1117]">
                    Thank you — we've got your details.
                  </h3>
                  <p className="max-w-md font-jakarta text-sm leading-relaxed text-[#5F6672]">
                    Our team will review your objectives and reach out shortly to explore how we
                    can collaborate together.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="mt-4 rounded-full border border-black/10 bg-white px-6 py-2.5 font-jakarta text-xs font-semibold text-[#0D1117] transition-all hover:bg-slate-50 cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="relative z-10 space-y-4">
                  {/* 01. Stakeholder Type Dropdown */}
                  <div
                    style={fieldEnterStyle(0)}
                    className={`${inputContainer} form-field-item`}
                  >
                    <label htmlFor="stakeholder-select" className={inputLabel}>
                      I am a... *
                    </label>
                    <div className="relative">
                      <select
                        id="stakeholder-select"
                        required
                        className={selectField}
                        value={stakeholder}
                        onChange={(e) => onStakeholderChange(e.target.value as StakeholderType)}
                      >
                        {stakeholderTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <User className={iconBase} size={15} />
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0D1117]/40 text-xs">
                        ▾
                      </span>
                    </div>
                  </div>

                  {/* 02. Full Name + Email */}
                  <div
                    style={fieldEnterStyle(1)}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 form-field-item"
                  >
                    <div className={inputContainer}>
                      <label htmlFor="full-name-input" className={inputLabel}>
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          id="full-name-input"
                          required
                          className={inputBase}
                          placeholder="Jane Doe"
                          value={form["Full Name"]}
                          onChange={set("Full Name")}
                        />
                        <User className={iconBase} size={15} />
                      </div>
                    </div>

                    <div className={inputContainer}>
                      <label htmlFor="email-input" className={inputLabel}>
                        Email *
                      </label>
                      <div className="relative">
                        <input
                          id="email-input"
                          required
                          type="email"
                          className={inputBase}
                          placeholder="jane@example.com"
                          value={form.Email}
                          onChange={set("Email")}
                        />
                        <Mail className={iconBase} size={15} />
                      </div>
                    </div>
                  </div>

                  {/* 03. Phone + Organization */}
                  <div
                    style={fieldEnterStyle(2)}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 form-field-item"
                  >
                    <div className={inputContainer}>
                      <label htmlFor="phone-input" className={inputLabel}>
                        Phone
                      </label>
                      <div className="relative">
                        <input
                          id="phone-input"
                          className={inputBase}
                          placeholder="9876543210"
                          value={form.Phone}
                          onChange={set("Phone")}
                        />
                        <Phone className={iconBase} size={15} />
                      </div>
                    </div>

                    <div className={inputContainer}>
                      <label htmlFor="org-input" className={inputLabel}>
                        Organization / Institution
                      </label>
                      <div className="relative">
                        <input
                          id="org-input"
                          className={inputBase}
                          placeholder="Optional"
                          value={form.Organization}
                          onChange={set("Organization")}
                        />
                        <Building2 className={iconBase} size={15} />
                      </div>
                    </div>
                  </div>

                  {/* 04. Role + Website */}
                  <div
                    style={fieldEnterStyle(3)}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 form-field-item"
                  >
                    <div className={inputContainer}>
                      <label htmlFor="role-input" className={inputLabel}>
                        Role / Designation
                      </label>
                      <div className="relative">
                        <input
                          id="role-input"
                          className={inputBase}
                          placeholder="Optional"
                          value={form["Role / Designation"]}
                          onChange={set("Role / Designation")}
                        />
                        <Briefcase className={iconBase} size={15} />
                      </div>
                    </div>

                    <div className={inputContainer}>
                      <label htmlFor="website-input" className={inputLabel}>
                        Website / Profile Link
                      </label>
                      <div className="relative">
                        <input
                          id="website-input"
                          className={inputBase}
                          placeholder="Optional"
                          value={form["Website / Profile Link"]}
                          onChange={set("Website / Profile Link")}
                        />
                        <Link2 className={iconBase} size={15} />
                      </div>
                    </div>
                  </div>

                  {/* 05. Timeline + Expected Audience */}
                  <div
                    style={fieldEnterStyle(4)}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 form-field-item"
                  >
                    <div className={inputContainer}>
                      <label htmlFor="timeline-input" className={inputLabel}>
                        Preferred Timeline
                      </label>
                      <div className="relative">
                        <input
                          id="timeline-input"
                          className={inputBase}
                          placeholder="e.g. Next semester (optional)"
                          value={form["Preferred Timeline"]}
                          onChange={set("Preferred Timeline")}
                        />
                        <Calendar className={iconBase} size={15} />
                      </div>
                    </div>

                    <div className={inputContainer}>
                      <label htmlFor="audience-input" className={inputLabel}>
                        Expected Audience
                      </label>
                      <div className="relative">
                        <input
                          id="audience-input"
                          className={inputBase}
                          placeholder="Optional"
                          value={form["Expected Audience"]}
                          onChange={set("Expected Audience")}
                        />
                        <Users className={iconBase} size={15} />
                      </div>
                    </div>
                  </div>

                  {/* 06. Preferred Contact Method */}
                  <div
                    style={fieldEnterStyle(5)}
                    className={`${inputContainer} form-field-item`}
                  >
                    <label htmlFor="contact-method-select" className={inputLabel}>
                      Preferred Contact Method
                    </label>
                    <div className="relative">
                      <select
                        id="contact-method-select"
                        className={selectField}
                        value={form["Preferred Contact Method"]}
                        onChange={set("Preferred Contact Method")}
                      >
                        <option value="Email">Email</option>
                        <option value="Phone">Phone</option>
                        <option value="WhatsApp">WhatsApp</option>
                      </select>
                      <Mail className={iconBase} size={15} />
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0D1117]/40 text-xs">
                        ▾
                      </span>
                    </div>
                  </div>

                  {/* 07. Message */}
                  <div
                    style={fieldEnterStyle(6)}
                    className={`${inputContainer} form-field-item`}
                  >
                    <label htmlFor="message-input" className={inputLabel}>
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message-input"
                        rows={3}
                        className={textArea}
                        placeholder="Tell us a bit about what you're looking for (optional)"
                        value={form.Message}
                        onChange={set("Message")}
                      />
                      <FileText
                        className="pointer-events-none absolute left-3.5 top-3 text-[#0D1117]/40 transition-colors duration-200 group-focus-within:text-[#1683E8]"
                        size={15}
                      />
                    </div>
                  </div>

                  {/* 08. Consent Checkbox */}
                  <div style={fieldEnterStyle(7)} className="pt-1 form-field-item">
                    <label className="flex items-start gap-2.5 font-jakarta text-xs text-[#0D1117]/70 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-black/20 text-[#1683E8] focus:ring-[#1683E8]/30 cursor-pointer accent-[#1683E8]"
                      />
                      <span>
                        I'm okay with FORGE contacting me about programs, partnerships, or
                        relevant opportunities.
                      </span>
                    </label>
                  </div>

                  {error && (
                    <p className="font-jakarta text-xs font-medium text-red-500 pt-1">
                      {error}
                    </p>
                  )}

                  {/* 09. Primary CTA Button with Smooth Hover Arrow */}
                  <div style={fieldEnterStyle(8)} className="pt-2 form-field-item">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative flex w-full items-center justify-between rounded-full bg-[#1683E8] pl-8 pr-3 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.30),0_8px_24px_rgba(22,131,232,0.18)] hover:bg-[#1272cb] hover:shadow-[inset_1px_1px_0_rgba(255,255,255,0.30),0_12px_28px_rgba(22,131,232,0.26)] hover:-translate-y-px active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none"
                    >
                      <span className="mx-auto pl-6 font-jakarta text-sm font-semibold tracking-wide">
                        {loading ? "Sending Details..." : "Start a Conversation"}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:bg-white group-hover:text-[#1683E8]">
                        {loading ? (
                          <Loader2 className="h-4 w-4 animate-spin text-white" />
                        ) : (
                          <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
                        )}
                      </div>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
