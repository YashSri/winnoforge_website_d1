"use client";

import { useEffect, useRef, useState } from "react";
import { X, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useModal, type ModalType } from "./ModalContext";

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
function SuccessScreen({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <CheckCircle2 className="h-14 w-14 text-primary mb-5" />
      <h3 className="font-varela text-2xl font-bold text-foreground mb-3">You're in!</h3>
      <p className="font-jakarta text-base text-foreground/65 max-w-xs">
        We've received your submission. Our sales team will get back to you shortly.
      </p>
      <button
        onClick={onClose}
        className="mt-8 rounded-full bg-primary px-8 py-2.5 font-jakarta text-sm font-semibold text-white transition hover:opacity-90"
      >
        Close
      </button>
    </div>
  );
}

// ─── Modal shell ─────────────────────────────────────────────────────────────
const titles: Record<NonNullable<ModalType>, { heading: string; sub: string }> = {
  join: { heading: "Join the FORGE Ecosystem", sub: "Tell us a bit about yourself and we'll reach out." },
  partner: { heading: "Partner With FORGE", sub: "Let's talk about bringing FORGE to your campus or organisation." },
};

export default function FormModal() {
  const { modalType, close } = useModal();
  const [success, setSuccess] = useState(false);
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

  const { heading, sub } = titles[modalType];

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
            <SuccessScreen onClose={close} />
          ) : modalType === "join" ? (
            <JoinForm onSuccess={() => setSuccess(true)} />
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
