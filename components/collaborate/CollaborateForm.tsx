"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const input =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-jakarta text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition";
const select =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-jakarta text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition appearance-none cursor-pointer";
const label =
  "block font-jakarta text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-1.5";

export const stakeholderTypes = [
  "Student",
  "Parent",
  "College / University",
  "Company",
  "Mentor / Expert",
  "CSR / Strategic Partner",
  "General Enquiry",
] as const;

export type StakeholderType = (typeof stakeholderTypes)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    Message: "",
  });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setSuccess(false);
  }, [stakeholder]);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
        "Stakeholder Type": stakeholder,
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

  if (success) {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h3 className="font-varela text-xl font-bold text-foreground">Thanks — we've got it.</h3>
        <p className="max-w-xs font-jakarta text-sm text-foreground/65">
          We've received your details and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <p className={label}>I am a... *</p>
        <div className="relative">
          <select
            required
            className={select}
            value={stakeholder}
            onChange={(e) => onStakeholderChange(e.target.value as StakeholderType)}
          >
            {stakeholderTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40">
            ▾
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={label}>Full Name *</p>
          <input required className={input} placeholder="Jane Doe" value={form["Full Name"]} onChange={set("Full Name")} />
        </div>
        <div>
          <p className={label}>Email *</p>
          <input required type="email" className={input} placeholder="jane@example.com" value={form.Email} onChange={set("Email")} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={label}>Phone</p>
          <input className={input} placeholder="9876543210" value={form.Phone} onChange={set("Phone")} />
        </div>
        <div>
          <p className={label}>Organization / Institution</p>
          <input className={input} placeholder="Optional" value={form.Organization} onChange={set("Organization")} />
        </div>
      </div>

      <div>
        <p className={label}>Message</p>
        <textarea
          rows={3}
          className={`${input} resize-none`}
          placeholder="Tell us a bit about what you're looking for (optional)"
          value={form.Message}
          onChange={set("Message")}
        />
      </div>

      <label className="flex items-start gap-2.5 font-jakarta text-xs text-foreground/60">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-black/20 text-primary focus:ring-primary/30"
        />
        I'm okay with FORGE contacting me about programs, partnerships, or relevant opportunities.
      </label>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_14px_30px_rgba(77,150,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Start a Conversation <ArrowRight className="h-4 w-4" /></>}
      </button>
    </form>
  );
}
