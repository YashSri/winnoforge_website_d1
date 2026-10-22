"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, FileText, Loader2 } from "lucide-react";
import { useModal } from "./ModalContext";

const inputClass =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-jakarta text-sm text-[#102A43] placeholder:text-[#102A43]/40 outline-none focus:border-[#1683E8] focus:ring-2 focus:ring-[#1683E8]/15 transition";
const labelClass =
  "block font-jakarta text-xs font-semibold uppercase tracking-wider text-[#102A43]/60 mb-1.5";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function DownloadForm({ onSuccess }: { onSuccess: () => void }) {
  const { downloadPayload } = useModal();
  const [form, setForm] = useState({
    "Full Name": "",
    Email: "",
    Phone: "",
    College: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submittedOnce, setSubmittedOnce] = useState(false);

  // Pre-fill previously stored student data if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = sessionStorage.getItem("forge_student_data");
        if (stored) {
          const parsed = JSON.parse(stored);
          setForm((p) => ({
            ...p,
            "Full Name": parsed.name || "",
            Email: parsed.email || "",
            Phone: parsed.phone || "",
            College: parsed.college || "",
          }));
        }
      } catch {}
    }
  }, []);

  const setField = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!form["Full Name"].trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!EMAIL_RE.test(form.Email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!form.Phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    if (loading || submittedOnce) return;

    setLoading(true);
    setError("");

    try {
      const payload = {
        formType: "download",
        "Full Name": form["Full Name"],
        Email: form.Email,
        Phone: form.Phone,
        "College / Institution": form.College || "—",
        Program: downloadPayload?.programName || "General Brochure",
        Action: downloadPayload?.actionType || "download",
      };

      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => null);

      if (typeof window !== "undefined") {
        sessionStorage.setItem(
          "forge_student_data",
          JSON.stringify({
            name: form["Full Name"],
            email: form.Email,
            phone: form.Phone,
            college: form.College,
          })
        );
      }

      // Automatically trigger download or preview
      const targetPdf =
        downloadPayload?.pdfPath ||
        `/courses/1-year/1_Year_Generative_AI_Brochure.pdf`;
      const targetFileName =
        downloadPayload?.fileName || "FORGE_Course_Curriculum_Brochure.pdf";

      if (downloadPayload?.actionType === "preview") {
        window.open(targetPdf, "_blank", "noopener,noreferrer");
      } else {
        const link = document.createElement("a");
        link.href = targetPdf;
        link.download = targetFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setSubmittedOnce(true);
      onSuccess();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {/* Program Context Pill */}
      {downloadPayload?.programName && (
        <div className="flex items-center justify-between rounded-xl bg-[#EAF3FF] px-4 py-2.5 border border-[#D1E6FF]">
          <div className="flex items-center gap-2 text-xs font-jakarta font-semibold text-[#1683E8]">
            <FileText className="h-4 w-4 shrink-0" />
            <span className="line-clamp-1">{downloadPayload.programName}</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-[#1683E8] px-2 py-0.5 rounded-md border border-[#D1E6FF]">
            Verified Syllabi
          </span>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className={labelClass}>Full Name *</label>
        <input
          required
          type="text"
          className={inputClass}
          placeholder="e.g. Rahul Sharma"
          value={form["Full Name"]}
          onChange={setField("Full Name")}
        />
      </div>

      {/* Email Address */}
      <div>
        <label className={labelClass}>Email Address *</label>
        <input
          required
          type="email"
          className={inputClass}
          placeholder="e.g. rahul@example.com"
          value={form.Email}
          onChange={setField("Email")}
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className={labelClass}>Mobile Number *</label>
        <div className="flex gap-2">
          <div className="w-20 shrink-0 flex items-center justify-center rounded-xl border border-black/10 bg-[#F8FAFC] font-jakarta text-xs font-bold text-[#102A43]">
            🇮🇳 +91
          </div>
          <input
            required
            type="tel"
            maxLength={10}
            className={`${inputClass} flex-1`}
            placeholder="9876543210"
            value={form.Phone}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "").slice(0, 10);
              setForm((p) => ({ ...p, Phone: val }));
            }}
          />
        </div>
      </div>

      {/* College / Institution */}
      <div>
        <label className={labelClass}>College / University (Optional)</label>
        <input
          type="text"
          className={inputClass}
          placeholder="e.g. IIT Delhi, DTU, VIT..."
          value={form.College}
          onChange={setField("College")}
        />
      </div>

      {error && (
        <p className="font-jakarta text-xs text-red-500 font-medium bg-red-50 p-2.5 rounded-xl border border-red-200">
          {error}
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading || submittedOnce}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1683E8] hover:bg-[#1272cb] py-3.5 px-6 font-jakarta text-sm font-bold text-white shadow-[0_6px_20px_rgba(22,131,232,0.25)] hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {downloadPayload?.actionType === "preview" ? (
              <>
                <FileText className="h-4 w-4" />
                <span>Open PDF Preview</span>
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                <span>Download Brochure (PDF)</span>
              </>
            )}
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
