"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

const input =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-jakarta text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition";
const select =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-jakarta text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition appearance-none cursor-pointer";
const label =
  "block font-jakarta text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-1.5";

export default function InviteExpertForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState({
    "Full Name": "",
    Email: "",
    Organisation: "",
    "Use Case": "",
    "Preferred Expert or Topic": "",
    "Proposed Date": "",
    Message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set =
    (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const payload = { formType: "invite-expert", ...form };
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={label}>Full Name *</p>
          <input required className={input} placeholder="Anita Sharma" value={form["Full Name"]} onChange={set("Full Name")} />
        </div>
        <div>
          <p className={label}>Email *</p>
          <input required type="email" className={input} placeholder="anita@institution.edu" value={form.Email} onChange={set("Email")} />
        </div>
      </div>

      <div>
        <p className={label}>Organisation / Institution *</p>
        <input required className={input} placeholder="Your college, program, or company" value={form.Organisation} onChange={set("Organisation")} />
      </div>

      <div>
        <p className={label}>Use Case *</p>
        <div className="relative">
          <select required className={select} value={form["Use Case"]} onChange={set("Use Case")}>
            <option value="">Select</option>
            <option>Campus Session</option>
            <option>Technical Workshop</option>
            <option>Industry Interaction</option>
            <option>Founder Talk</option>
            <option>Faculty Development</option>
            <option>Project Review</option>
            <option>Innovation Challenge</option>
            <option>Community Event</option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40">▾</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={label}>Preferred Expert or Topic</p>
          <input className={input} placeholder="Optional" value={form["Preferred Expert or Topic"]} onChange={set("Preferred Expert or Topic")} />
        </div>
        <div>
          <p className={label}>Proposed Date</p>
          <input className={input} placeholder="Optional" value={form["Proposed Date"]} onChange={set("Proposed Date")} />
        </div>
      </div>

      <div>
        <p className={label}>Message</p>
        <textarea
          rows={3}
          className={`${input} resize-none`}
          placeholder="Tell us more about what you're looking for"
          value={form.Message}
          onChange={set("Message")}
        />
      </div>

      <p className="font-jakarta text-xs text-foreground/50">
        All invitations are subject to confirmation — we can't guarantee a specific expert's
        availability.
      </p>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_14px_30px_rgba(77,150,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Submit an Expert Invitation <ArrowRight className="h-4 w-4" /></>}
      </button>
    </form>
  );
}
