"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

const input =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-jakarta text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition";
const select =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-jakarta text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition appearance-none cursor-pointer";
const label =
  "block font-jakarta text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-1.5";

export default function MentorForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState({
    "Full Name": "",
    Email: "",
    Organisation: "",
    "Professional Role": "",
    "Areas of Expertise": "",
    "Preferred Contribution Type": "",
    Availability: "",
    "Profile / Portfolio Link": "",
    Message: "",
  });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set =
    (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setError("Please confirm you're okay with FORGE contacting you about this.");
      return;
    }
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={label}>Organisation</p>
          <input className={input} placeholder="Optional" value={form.Organisation} onChange={set("Organisation")} />
        </div>
        <div>
          <p className={label}>Professional Role</p>
          <input className={input} placeholder="Optional" value={form["Professional Role"]} onChange={set("Professional Role")} />
        </div>
      </div>

      <div>
        <p className={label}>Areas of Expertise *</p>
        <input required className={input} placeholder="Product, Engineering, Data..." value={form["Areas of Expertise"]} onChange={set("Areas of Expertise")} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={label}>Preferred Contribution Type *</p>
          <div className="relative">
            <select required className={select} value={form["Preferred Contribution Type"]} onChange={set("Preferred Contribution Type")}>
              <option value="">Select</option>
              <option>Mentorship</option>
              <option>Workshops</option>
              <option>Guest Sessions</option>
              <option>Project Reviews</option>
              <option>Founder Conversations</option>
              <option>Industry Challenges</option>
              <option>Faculty Development</option>
              <option>Innovation Events</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40">▾</span>
          </div>
        </div>
        <div>
          <p className={label}>Availability</p>
          <input className={input} placeholder="e.g. 2 hours/month (optional)" value={form.Availability} onChange={set("Availability")} />
        </div>
      </div>

      <div>
        <p className={label}>Profile / Portfolio Link</p>
        <input className={input} placeholder="https://www.linkedin.com/in/jane-doe/" value={form["Profile / Portfolio Link"]} onChange={set("Profile / Portfolio Link")} />
      </div>

      <div>
        <p className={label}>Message</p>
        <textarea
          rows={3}
          className={`${input} resize-none`}
          placeholder="Tell us a bit about your motivation (optional)"
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
        I'm okay with FORGE contacting me about this.
      </label>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_14px_30px_rgba(77,150,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Express Interest in Mentoring <ArrowRight className="h-4 w-4" /></>}
      </button>
    </form>
  );
}
