"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

const input =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-jakarta text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition";
const label =
  "block font-jakarta text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-1.5";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CatalogueForm({ onSuccess }: { onSuccess: (downloadUrl: string) => void }) {
  const [form, setForm] = useState({
    "Full Name": "",
    Email: "",
    Phone: "",
    Institution: "",
    Interest: "",
  });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submittedOnce, setSubmittedOnce] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
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
    if (!form.Phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    if (!consent) {
      setError("Please confirm you're okay with FORGE contacting you about programs.");
      return;
    }
    if (loading || submittedOnce) return;

    setLoading(true);
    setError("");
    try {
      const payload = {
        formType: "catalogue",
        "Full Name": form["Full Name"],
        Email: form.Email,
        Phone: form.Phone,
        Institution: form.Institution || "—",
        Interest: form.Interest || "—",
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setSubmittedOnce(true);
      onSuccess("/catalogue/forge-course-catalog.pdf");
    } catch {
      setError("We could not submit your details right now. Please check your information and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
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

      <div>
        <p className={label}>Phone *</p>
        <input required className={input} placeholder="9876543210" value={form.Phone} onChange={set("Phone")} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={label}>Institution / College</p>
          <input className={input} placeholder="Optional" value={form.Institution} onChange={set("Institution")} />
        </div>
        <div>
          <p className={label}>Area of Interest</p>
          <input className={input} placeholder="Optional" value={form.Interest} onChange={set("Interest")} />
        </div>
      </div>

      <label className="flex items-start gap-2.5 font-jakarta text-xs text-foreground/60">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-black/20 text-primary focus:ring-primary/30"
        />
        I'm okay with FORGE contacting me about programs or relevant opportunities.
      </label>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading || submittedOnce}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_14px_30px_rgba(77,150,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Get the Catalogue <ArrowRight className="h-4 w-4" /></>}
      </button>
    </form>
  );
}
