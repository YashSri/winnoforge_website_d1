"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

const input =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-jakarta text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition";
const label =
  "block font-jakarta text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-1.5";

export default function MentorForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState({
    "Full Name": "",
    Email: "",
    "Expertise Area": "",
    "LinkedIn URL": "",
    Motivation: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set =
    (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const payload = { formType: "mentor", ...form };
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
          <input required className={input} placeholder="Priya Suresh" value={form["Full Name"]} onChange={set("Full Name")} />
        </div>
        <div>
          <p className={label}>Email *</p>
          <input required type="email" className={input} placeholder="priya@example.com" value={form.Email} onChange={set("Email")} />
        </div>
      </div>

      <div>
        <p className={label}>Area of Expertise *</p>
        <input required className={input} placeholder="Product, Engineering, Data..." value={form["Expertise Area"]} onChange={set("Expertise Area")} />
      </div>

      <div>
        <p className={label}>LinkedIn URL</p>
        <input className={input} placeholder="https://www.linkedin.com/in/jane-doe/" value={form["LinkedIn URL"]} onChange={set("LinkedIn URL")} />
      </div>

      <div>
        <p className={label}>Why do you want to mentor at FORGE?</p>
        <textarea
          rows={3}
          className={`${input} resize-none`}
          placeholder="Tell us a bit about your motivation (optional)"
          value={form.Motivation}
          onChange={set("Motivation")}
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_14px_30px_rgba(77,150,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Apply to Mentor <ArrowRight className="h-4 w-4" /></>}
      </button>
    </form>
  );
}
