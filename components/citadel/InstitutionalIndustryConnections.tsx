import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const engagements = [
  "Campus-linked activities",
  "Institutional learning programs",
  "Industry-led sessions",
  "Applied challenges",
  "Project reviews",
  "Talent and portfolio showcases",
  "Faculty collaboration",
  "Innovation events",
  "Research or experimentation",
  "Community initiatives",
];

export default function InstitutionalIndustryConnections() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Institutional and Industry Connections
          </p>
          <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Connected Beyond the Citadel
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/72 md:text-lg">
            The Citadel can serve as a point of connection between learners, institutions,
            mentors, and industry contributors — not every partner participates in every
            activity.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {engagements.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/85 px-4 py-1.5 font-jakarta text-sm font-medium text-foreground/70 shadow-[0_10px_24px_rgba(23,23,23,0.05)]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/collaborate"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:opacity-95"
          >
            For Institutions
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/collaborate"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-foreground transition hover:-translate-y-0.5 hover:bg-white"
          >
            For Industry Partners
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/collaborate"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-foreground transition hover:-translate-y-0.5 hover:bg-white"
          >
            Explore Collaboration
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
