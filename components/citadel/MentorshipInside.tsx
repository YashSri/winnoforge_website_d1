import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const contributions = [
  "Learning sessions",
  "Technical guidance",
  "Project reviews",
  "Problem-solving discussions",
  "Career conversations",
  "Founder support",
  "Feedback on presentations",
  "Industry perspectives",
];

export default function MentorshipInside() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          Mentorship Inside the Citadel
        </p>
        <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          Guidance That Helps Work Move Forward
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/72 md:text-lg">
          Mentorship within the Citadel is intended to help participants think more clearly,
          make better decisions, improve their work, and understand practical contexts. Mentor
          participation and availability follow confirmed arrangements — not every participant
          receives unlimited one-to-one access or guaranteed mentorship from a particular
          individual.
        </p>

        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
          {contributions.map((item) => (
            <span
              key={item}
              className="rounded-full bg-primary/8 px-4 py-1.5 font-jakarta text-sm font-medium text-primary"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href="/mentors"
          className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/70 px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-white"
        >
          Meet the Mentors and Experts
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
