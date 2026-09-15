import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const activities = [
  "Campus chapters",
  "Student communities",
  "Inter-campus challenges",
  "Shared workshops",
  "Project showcases",
  "Faculty interactions",
  "Cross-campus collaboration",
  "Institutional innovation activities",
];

export default function CampusInstitutionalCommunity() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-12 md:py-24">
      <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Campus & Institutional Community
      </span>
      <h2 className="mt-3 font-clash text-3xl font-semibold text-foreground md:text-4xl">
        Connected Across Campuses and Institutions
      </h2>
      <p className="mx-auto mt-6 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/70">
        FORGE can connect learners and contributors across partner campuses and institutions
        through shared activities, learning experiences, innovation challenges, mentorship, and
        community initiatives.
      </p>
      <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
        {activities.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white px-4 py-1.5 font-jakarta text-sm font-medium text-foreground/70 shadow-[0_10px_24px_rgba(24,42,72,0.06)]"
          >
            {item}
          </span>
        ))}
      </div>
      <Link
        href="/collaborate"
        className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
      >
        Explore Institutional Collaboration
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
