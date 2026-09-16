import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";

const highlights = [
  {
    title: "FORGE Demo Day — Winter Cohort",
    type: "Event",
    date: "Dec 2026",
    summary: "Builders present shipped prototypes to mentors and industry guests.",
  },
  {
    title: "Intro to Systems Thinking",
    type: "Workshop",
    date: "Nov 2026",
    summary: "A hands-on workshop on breaking down real-world problems.",
  },
  {
    title: "From First Cohort to First Startup",
    type: "Story",
    date: "May 2026",
    summary: "One builder's path from a FORGE bootcamp to a funded startup.",
  },
  {
    title: "New Certification Track: AI Productivity",
    type: "Announcement",
    date: "Oct 2026",
    summary: "Enrollment opens for the newest FORGE certification track.",
  },
];

export default function CommunityHighlights() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          A Community of Learners, Builders, and Collaborators
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_40px_rgba(24,42,72,0.08)]"
          >
            <span className="flex w-fit items-center gap-1.5 rounded-full bg-primary/8 px-3 py-1 font-jakarta text-xs font-semibold text-primary">
              <Calendar className="h-3 w-3" />
              {item.date}
            </span>
            <span className="font-jakarta text-xs font-medium uppercase tracking-wide text-foreground/40">
              {item.type}
            </span>
            <h3 className="font-clash text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
              {item.summary}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/community"
          className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
        >
          View Community
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
