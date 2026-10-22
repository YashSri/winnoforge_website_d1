"use client";

import { useEffect, useRef, useState } from "react";
import { X, ArrowRight, CheckCircle2, Download, FileText, Loader2 } from "lucide-react";
import { useModal, type ModalType } from "./ModalContext";
import DownloadForm from "./DownloadForm";
import MentorForm from "./MentorForm";
import CatalogueForm from "./CatalogueForm";
import InviteExpertForm from "./InviteExpertForm";

// ─── shared input classes ────────────────────────────────────────────────────
const input =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-jakarta text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition";
const select =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-jakarta text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition appearance-none cursor-pointer";
const label = "block font-jakarta text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-1.5";

// ─── Join Form ───────────────────────────────────────────────────────────────
function JoinForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState({
    "Full Name": "",
    Email: "",
    "WhatsApp Number": "",
    "Country Code": "+91",
    Gender: "",
    College: "",
    City: "",
    "LinkedIn URL": "",
    Interest: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const payload = {
        formType: "join",
        "Full Name": form["Full Name"],
        Email: form.Email,
        "WhatsApp": `${form["Country Code"]} ${form["WhatsApp Number"]}`,
        Gender: form.Gender,
        "College / University": form.College,
        City: form.City,
        "LinkedIn URL": form["LinkedIn URL"] || "—",
        "Interest in FORGE": form.Interest || "—",
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      onSuccess();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={label}>Full Name *</p>
          <input required className={input} placeholder="Rahul Sharma" value={form["Full Name"]} onChange={set("Full Name")} />
        </div>
        <div>
          <p className={label}>Email *</p>
          <input required type="email" className={input} placeholder="rahul@example.com" value={form.Email} onChange={set("Email")} />
        </div>
      </div>

      {/* WhatsApp */}
      <div>
        <p className={label}>WhatsApp Number *</p>
        <div className="flex gap-2">
          <select
            className="w-24 shrink-0 rounded-xl border border-black/10 bg-white px-3 py-2.5 font-jakarta text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
            value={form["Country Code"]}
            onChange={set("Country Code")}
          >
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+971">🇦🇪 +971</option>
            <option value="+65">🇸🇬 +65</option>
          </select>
          <input required className={`${input} flex-1`} placeholder="9876543210" value={form["WhatsApp Number"]} onChange={set("WhatsApp Number")} />
        </div>
      </div>

      {/* Gender + Interest */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={label}>Gender *</p>
          <div className="relative">
            <select required className={select} value={form.Gender} onChange={set("Gender")}>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Prefer not to say</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40">▾</span>
          </div>
        </div>
        <div>
          <p className={label}>I'm interested in</p>
          <div className="relative">
            <select className={select} value={form.Interest} onChange={set("Interest")}>
              <option value="">Select (optional)</option>
              <option>Activation Program</option>
              <option>Bootcamp</option>
              <option>Innovation Citadel</option>
              <option>FORGE Community</option>
              <option>Just Exploring</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40">▾</span>
          </div>
        </div>
      </div>

      {/* College + City */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={label}>College / University *</p>
          <input required className={input} placeholder="IIT Bombay" value={form.College} onChange={set("College")} />
        </div>
        <div>
          <p className={label}>City *</p>
          <input required className={input} placeholder="Mumbai" value={form.City} onChange={set("City")} />
        </div>
      </div>

      {/* LinkedIn */}
      <div>
        <p className={label}>LinkedIn URL</p>
        <input className={input} placeholder="https://www.linkedin.com/in/john-doe/" value={form["LinkedIn URL"]} onChange={set("LinkedIn URL")} />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_14px_30px_rgba(77,150,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Submit <ArrowRight className="h-4 w-4" /></>}
      </button>
    </form>
  );
}

// ─── Partner Form ────────────────────────────────────────────────────────────
function PartnerForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState({
    "Full Name": "",
    "Work Email": "",
    Organization: "",
    Designation: "",
    "WhatsApp Number": "",
    "Country Code": "+91",
    City: "",
    "Partnership Type": "",
    Message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const payload = {
        formType: "partner",
        "Full Name": form["Full Name"],
        "Work Email": form["Work Email"],
        Organization: form.Organization,
        Designation: form.Designation,
        "WhatsApp": form["WhatsApp Number"] ? `${form["Country Code"]} ${form["WhatsApp Number"]}` : "—",
        City: form.City,
        "Partnership Type": form["Partnership Type"],
        Message: form.Message || "—",
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      onSuccess();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={label}>Full Name *</p>
          <input required className={input} placeholder="Anita Sharma" value={form["Full Name"]} onChange={set("Full Name")} />
        </div>
        <div>
          <p className={label}>Work Email *</p>
          <input required type="email" className={input} placeholder="anita@organization.com" value={form["Work Email"]} onChange={set("Work Email")} />
        </div>
      </div>

      {/* Org + Designation */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={label}>Organization *</p>
          <input required className={input} placeholder="ABC University / Corp" value={form.Organization} onChange={set("Organization")} />
        </div>
        <div>
          <p className={label}>Designation *</p>
          <input required className={input} placeholder="Director / CTO" value={form.Designation} onChange={set("Designation")} />
        </div>
      </div>

      {/* WhatsApp */}
      <div>
        <p className={label}>WhatsApp Number *</p>
        <div className="flex gap-2">
          <select
            className="w-24 shrink-0 rounded-xl border border-black/10 bg-white px-3 py-2.5 font-jakarta text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
            value={form["Country Code"]}
            onChange={set("Country Code")}
          >
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+971">🇦🇪 +971</option>
            <option value="+65">🇸🇬 +65</option>
          </select>
          <input required className={`${input} flex-1`} placeholder="9876543210" value={form["WhatsApp Number"]} onChange={set("WhatsApp Number")} />
        </div>
      </div>

      {/* City + Partnership Type */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={label}>City *</p>
          <input required className={input} placeholder="Mumbai" value={form.City} onChange={set("City")} />
        </div>
        <div>
          <p className={label}>Partnership Type *</p>
          <div className="relative">
            <select required className={select} value={form["Partnership Type"]} onChange={set("Partnership Type")}>
              <option value="">Select</option>
              <option>Institution (MoU)</option>
              <option>Corporate Partner</option>
              <option>Investor</option>
              <option>Government Body</option>
              <option>Other</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40">▾</span>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <p className={label}>Tell us about your interest</p>
        <textarea
          rows={3}
          className={`${input} resize-none`}
          placeholder="What are you looking to achieve with FORGE? (optional)"
          value={form.Message}
          onChange={set("Message")}
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_14px_30px_rgba(77,150,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Send Inquiry <ArrowRight className="h-4 w-4" /></>}
      </button>
    </form>
  );
}

// ─── Success screen ──────────────────────────────────────────────────────────
function SuccessScreen({
  onClose,
  downloadUrl,
  downloadLabel = "Download Brochure",
  actionType = "download",
}: {
  onClose: () => void;
  downloadUrl?: string;
  downloadLabel?: string;
  actionType?: "download" | "preview";
}) {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF3FF] text-[#1683E8] border border-[#D1E6FF] shadow-xs">
        <CheckCircle2 className="h-9 w-9 text-[#1683E8]" />
      </div>

      <span className="font-jakarta text-[11px] font-bold uppercase tracking-wider text-[#1683E8] bg-[#EAF3FF] px-3 py-1 rounded-full mb-3 border border-[#D1E6FF]">
        OTP Verified Successfully
      </span>

      <h3 className="font-clash text-2xl font-bold text-[#102A43] mb-2">
        {actionType === "preview" ? "Your Preview is Ready!" : "Your Download Has Started!"}
      </h3>

      <p className="font-jakarta text-sm text-[#5F6672] max-w-sm leading-relaxed">
        {actionType === "preview"
          ? "We've verified your contact number. Click below to view the official PDF curriculum."
          : "Your official course curriculum is downloading now. If it didn't start automatically, click below."}
      </p>

      {downloadUrl && (
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1683E8] hover:bg-[#1272cb] px-7 py-3 font-jakarta text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
        >
          {actionType === "preview" ? (
            <>
              <FileText className="h-4 w-4" />
              <span>{downloadLabel}</span>
            </>
          ) : (
            <>
              <Download className="h-4 w-4" />
              <span>{downloadLabel}</span>
            </>
          )}
        </a>
      )}

      <button
        onClick={onClose}
        className="mt-4 rounded-xl border border-black/10 px-8 py-2.5 font-jakarta text-xs font-semibold text-[#5F6672] hover:bg-black/5 transition cursor-pointer"
      >
        Close Window
      </button>
    </div>
  );
}

// ─── Modal shell ─────────────────────────────────────────────────────────────
const titles: Record<Exclude<NonNullable<ModalType>, "download">, { heading: string; sub: string }> = {
  join: { heading: "Join the FORGE Ecosystem", sub: "Tell us a bit about yourself and we'll reach out." },
  partner: { heading: "Partner With FORGE", sub: "Let's talk about bringing FORGE to your campus or organisation." },
  mentor: { heading: "Become a FORGE Mentor", sub: "Tell us about your expertise and we'll be in touch." },
  catalogue: { heading: "Download Course Catalog", sub: "Enter your details and we'll unlock the catalogue." },
  "invite-expert": { heading: "Invite an Expert", sub: "Tell us about your session and we'll help find the right fit." },
};

const PROGRAM_BROCHURE_PATH_MAP: Record<string, string> = {
  "data-science": "/courses/6-months/Winnovation_Data_Science_6_Months_Brochure.pdf",
  "data-analytics": "/courses/6-months/Winnovation_Data_Analytics_6_Months_Brochure.pdf",
  "business-analyst": "/courses/6-months/Winnovation_Data_Analytics_6_Months_Brochure.pdf",
  "full-stack": "/courses/6-months/Winnovation_Full_Stack_Web_Development_6_Months_Brochure.pdf",
  "ai-productivity": "/courses/6-months/Winnovation_Generative_AI_6_Months_Brochure.pdf",
  "generative-ai": "/courses/6-months/Winnovation_Generative_AI_6_Months_Brochure.pdf",
  "cloud-computing": "/courses/6-months/Winnovation_Cloud_Computing_6_Months_Brochure.pdf",
  "dsa": "/courses/6-months/Winnovation_DSA_6_Months_Brochure.pdf",
  "iot": "/courses/6-months/Winnovation_IoT_6_Months_Brochure.pdf",
  "digital-marketing": "/courses/6-months/Winnovation_Digital_Marketing_6_Months_Brochure.pdf",
};

export default function FormModal() {
  const { modalType, close, downloadPayload } = useModal();
  const [success, setSuccess] = useState(false);
  const [catalogueUrl, setCatalogueUrl] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Reset success state when modal opens/changes
  useEffect(() => { setSuccess(false); }, [modalType]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [close]);

  // Lock scroll
  useEffect(() => {
    if (modalType) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [modalType]);

  if (!modalType) return null;

  const { heading, sub } =
    modalType === "download"
      ? {
          heading: downloadPayload?.programName
            ? downloadPayload.actionType === "preview"
              ? `Preview ${downloadPayload.programName}`
              : `Download ${downloadPayload.programName}`
            : "Download Course Brochure",
          sub: "Enter your student details and verify via mobile OTP to unlock the verified PDF.",
        }
      : titles[modalType];

  const resolvedDownloadUrl =
    modalType === "download" && downloadPayload
      ? downloadPayload.pdfPath ||
        PROGRAM_BROCHURE_PATH_MAP[downloadPayload.programSlug] ||
        `/courses/1-year/1_Year_Full_Stack_Web_Development_Brochure.pdf`
      : modalType === "catalogue" && catalogueUrl
        ? catalogueUrl
        : undefined;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) close(); }}
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-8"
      style={{ animation: "fadeIn 0.18s ease" }}
    >
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F7FBFF] shadow-[0_32px_80px_rgba(14,46,72,0.22)]"
        style={{ animation: "scaleIn 0.2s ease" }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-3xl bg-gradient-to-r from-[#0e2e48] to-[#1a4a7a] px-7 py-6">
          <div>
            <h2 className="font-varela text-xl font-bold text-white leading-tight">{heading}</h2>
            <p className="mt-1 font-jakarta text-sm text-white/65">{sub}</p>
          </div>
          <button
            onClick={close}
            aria-label="Close"
            className="shrink-0 rounded-full p-1.5 text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-6">
          {success ? (
            <SuccessScreen
              onClose={close}
              downloadUrl={resolvedDownloadUrl}
              actionType={downloadPayload?.actionType || "download"}
              downloadLabel={
                downloadPayload?.actionType === "preview"
                  ? "Open PDF Preview"
                  : modalType === "catalogue"
                  ? "Download Catalogue"
                  : "Download Brochure (PDF)"
              }
            />
          ) : modalType === "join" ? (
            <JoinForm onSuccess={() => setSuccess(true)} />
          ) : modalType === "download" ? (
            <DownloadForm onSuccess={() => setSuccess(true)} />
          ) : modalType === "mentor" ? (
            <MentorForm onSuccess={() => setSuccess(true)} />
          ) : modalType === "catalogue" ? (
            <CatalogueForm
              onSuccess={(url) => {
                setCatalogueUrl(url);
                setSuccess(true);
              }}
            />
          ) : modalType === "invite-expert" ? (
            <InviteExpertForm onSuccess={() => setSuccess(true)} />
          ) : (
            <PartnerForm onSuccess={() => setSuccess(true)} />
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95) translateY(8px) } to { opacity: 1; transform: scale(1) translateY(0) } }
      `}</style>
    </div>
  );
}
