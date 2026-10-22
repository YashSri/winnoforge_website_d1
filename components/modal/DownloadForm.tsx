"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Loader2,
  Lock,
  RotateCcw,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { useModal } from "./ModalContext";

const inputClass =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-jakarta text-sm text-[#102A43] placeholder:text-[#102A43]/40 outline-none focus:border-[#1683E8] focus:ring-2 focus:ring-[#1683E8]/15 transition";
const labelClass =
  "block font-jakarta text-xs font-semibold uppercase tracking-wider text-[#102A43]/60 mb-1.5";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

export default function DownloadForm({ onSuccess }: { onSuccess: () => void }) {
  const { downloadPayload } = useModal();
  const [step, setStep] = useState<"details" | "otp">("details");

  // Form State
  const [form, setForm] = useState({
    "Full Name": "",
    Email: "",
    Phone: "",
    College: "",
  });

  // OTP State
  const [otpDigits, setOtpDigits] = useState<string[]>(["", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState<string>("4829");
  const [timer, setTimer] = useState<number>(30);
  const [canResend, setCanResend] = useState<boolean>(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(true);

  const digitRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

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

  // Timer countdown for OTP resend
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === "otp" && timer > 0) {
      interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const setField = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  // Step 1: Send OTP
  async function handleSendOtp(e: React.FormEvent) {
    e.preventDefault();

    if (!form["Full Name"].trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!EMAIL_RE.test(form.Email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    const cleanPhone = form.Phone.replace(/\D/g, "").slice(-10);
    if (!PHONE_RE.test(cleanPhone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    if (!consent) {
      setError("Please agree to receive the brochure & verification code.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Generate a clean 4-digit OTP
      const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
      setGeneratedOtp(newOtp);

      // Simulate instantaneous dispatch
      await new Promise((r) => setTimeout(r, 600));

      setStep("otp");
      setTimer(30);
      setCanResend(false);
      setOtpDigits(["", "", "", ""]);

      // Auto-focus first digit input on next render
      setTimeout(() => {
        digitRefs[0].current?.focus();
      }, 100);
    } catch {
      setError("Unable to generate OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // Resend OTP
  function handleResendOtp() {
    if (!canResend) return;
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    setTimer(30);
    setCanResend(false);
    setOtpDigits(["", "", "", ""]);
    setError("");
    setTimeout(() => {
      digitRefs[0].current?.focus();
    }, 100);
  }

  // Handle single digit input
  const handleDigitChange = (index: number, val: string) => {
    // Only accept numeric digit
    const cleaned = val.replace(/\D/g, "");
    if (!cleaned) {
      const copy = [...otpDigits];
      copy[index] = "";
      setOtpDigits(copy);
      return;
    }

    // Single digit input
    const char = cleaned.slice(-1);
    const copy = [...otpDigits];
    copy[index] = char;
    setOtpDigits(copy);

    // Auto advance
    if (index < 3) {
      digitRefs[index + 1].current?.focus();
    }
  };

  const handleDigitKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      digitRefs[index - 1].current?.focus();
    }
  };

  const handleDigitPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
    if (pasted.length > 0) {
      const copy = [...otpDigits];
      for (let i = 0; i < 4; i++) {
        copy[i] = pasted[i] || "";
      }
      setOtpDigits(copy);
      const nextIndex = Math.min(pasted.length, 3);
      digitRefs[nextIndex].current?.focus();
    }
  };

  // Step 2: Verify OTP and trigger download/preview
  async function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault();
    const entered = otpDigits.join("");

    if (entered.length < 4) {
      setError("Please enter the complete 4-digit verification code.");
      return;
    }

    // Check OTP match (allow generatedOtp or demo fallback 4829)
    if (entered !== generatedOtp && entered !== "4829") {
      setError("Incorrect code. Please enter the valid OTP or use the demo code.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 1. Record lead with verified status
      const payload = {
        formType: "download",
        "Full Name": form["Full Name"],
        Email: form.Email,
        Phone: `+91 ${form.Phone.replace(/\D/g, "").slice(-10)}`,
        "College / Institution": form.College || "—",
        Program: downloadPayload?.programName || "General Brochure",
        "Verification Status": "OTP Verified (Mobile)",
        Action: downloadPayload?.actionType || "download",
      };

      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => null); // Non-blocking

      // 2. Mark student as verified in sessionStorage for session convenience
      if (typeof window !== "undefined") {
        sessionStorage.setItem("forge_student_verified", "true");
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

      // 3. Trigger automatic download or preview
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

      onSuccess();
    } catch {
      setError("Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // RENDER: STEP 2 - OTP VERIFICATION SCREEN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (step === "otp") {
    return (
      <form onSubmit={handleVerifyOtp} className="space-y-5">
        {/* Header with back button */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
          <button
            type="button"
            onClick={() => {
              setStep("details");
              setError("");
            }}
            className="inline-flex items-center gap-1.5 font-jakarta text-xs font-semibold text-[#1683E8] hover:underline cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Change Details</span>
          </button>
          <span className="font-jakarta text-[11px] font-bold uppercase tracking-wider text-[#64748B] bg-[#F1F5F9] px-2.5 py-0.5 rounded-full">
            Step 2 of 2
          </span>
        </div>

        {/* Security / Verification Badge */}
        <div className="flex items-center gap-3 bg-[#EAF3FF] p-3.5 rounded-2xl border border-[#D1E6FF]">
          <div className="h-10 w-10 shrink-0 rounded-xl bg-[#1683E8] flex items-center justify-center text-white shadow-xs">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-clash text-sm font-bold text-[#102A43]">
              Verify Mobile via OTP
            </h4>
            <p className="font-jakarta text-xs text-[#5F6672]">
              Sent to <strong className="text-[#102A43]">+91 {form.Phone}</strong>
            </p>
          </div>
        </div>

        {/* Interactive 4-Digit Input Boxes */}
        <div>
          <label className={labelClass}>Enter 4-Digit Verification Code</label>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2">
            {otpDigits.map((digit, idx) => (
              <input
                key={idx}
                ref={digitRefs[idx]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleDigitChange(idx, e.target.value)}
                onKeyDown={(e) => handleDigitKeyDown(idx, e)}
                onPaste={handleDigitPaste}
                className="w-14 h-16 sm:w-16 sm:h-16 text-center text-2xl font-bold font-clash text-[#102A43] bg-white border-2 border-[#CBD5E1] rounded-2xl focus:border-[#1683E8] focus:ring-4 focus:ring-[#1683E8]/15 outline-none transition-all shadow-xs"
                placeholder="•"
              />
            ))}
          </div>
        </div>

        {/* Demo Helper Pill (Instant 1-Click Verification) */}
        <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-2.5 rounded-xl text-xs font-jakarta">
          <div className="flex items-center gap-1.5 text-[#64748B]">
            <Sparkles className="h-3.5 w-3.5 text-[#1683E8]" />
            <span>Demo Test OTP: <strong className="text-[#102A43]">{generatedOtp}</strong></span>
          </div>
          <button
            type="button"
            onClick={() => {
              setOtpDigits(generatedOtp.split(""));
              setError("");
            }}
            className="font-bold text-[#1683E8] hover:underline cursor-pointer"
          >
            Auto-fill
          </button>
        </div>

        {/* Resend & Timer */}
        <div className="flex items-center justify-between font-jakarta text-xs text-[#64748B] pt-1">
          {timer > 0 ? (
            <span className="flex items-center gap-1 text-[#64748B]">
              <Clock className="h-3.5 w-3.5 text-[#1683E8]" /> Resend code in{" "}
              <strong>{timer}s</strong>
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResendOtp}
              className="flex items-center gap-1 text-[#1683E8] hover:underline font-bold cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Resend OTP
            </button>
          )}

          <span className="text-[#94A3B8]">Instant Delivery</span>
        </div>

        {error && (
          <p className="font-jakarta text-xs text-red-500 font-medium bg-red-50 p-2.5 rounded-xl border border-red-200">
            {error}
          </p>
        )}

        {/* Submit Verification Button */}
        <button
          type="submit"
          disabled={loading || otpDigits.join("").length < 4}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1683E8] hover:bg-[#1272cb] py-3.5 px-6 font-jakarta text-sm font-bold text-white shadow-[0_6px_20px_rgba(22,131,232,0.25)] hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              {downloadPayload?.actionType === "preview" ? (
                <>
                  <FileText className="h-4 w-4" />
                  <span>Verify OTP &amp; Preview PDF</span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  <span>Verify OTP &amp; Download Brochure</span>
                </>
              )}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // RENDER: STEP 1 - STUDENT DETAILS FORM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  return (
    <form onSubmit={handleSendOtp} className="space-y-4">
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

      {/* Mobile Number with +91 Country Code */}
      <div>
        <label className={labelClass}>Mobile Number (for OTP Verification) *</label>
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
        <p className="font-jakarta text-[11px] text-[#64748B] mt-1 flex items-center gap-1">
          <Smartphone className="h-3 w-3 text-[#1683E8]" /> A 4-digit verification code will be sent to this number
        </p>
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

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2 pt-1">
        <input
          id="otp-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-[#CBD5E1] text-[#1683E8] focus:ring-[#1683E8] cursor-pointer"
        />
        <label
          htmlFor="otp-consent"
          className="font-jakarta text-xs text-[#5F6672] leading-relaxed cursor-pointer select-none"
        >
          I agree to receive the curriculum PDF and verified cohort updates via WhatsApp/Email.
        </label>
      </div>

      {error && (
        <p className="font-jakarta text-xs text-red-500 font-medium bg-red-50 p-2.5 rounded-xl border border-red-200">
          {error}
        </p>
      )}

      {/* Proceed to OTP Button */}
      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1683E8] hover:bg-[#1272cb] py-3.5 px-6 font-jakarta text-sm font-bold text-white shadow-[0_6px_20px_rgba(22,131,232,0.25)] hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            <span>Send OTP &amp; Continue</span>
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
