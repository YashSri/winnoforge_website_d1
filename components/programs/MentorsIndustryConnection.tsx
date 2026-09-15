import Link from "next/link";
import { ArrowUpRight, Award, MessageSquare, Presentation, Users } from "lucide-react";

const contributions = [
  { icon: Presentation, label: "Guest sessions & technical workshops" },
  { icon: MessageSquare, label: "Project reviews & portfolio feedback" },
  { icon: Users, label: "Career conversations & founder guidance" },
  { icon: Award, label: "Demonstration-day evaluation" },
];

export default function MentorsIndustryConnection() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-12 md:py-24">
      <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Mentors, Experts & Industry
      </span>
      <h2 className="mt-3 font-clash text-3xl font-semibold text-foreground md:text-4xl">
        Learning With People Who Have Built, Solved, and Led
      </h2>
      <p className="mx-auto mt-6 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/70">
        Mentors, trainers, speakers, and industry practitioners contribute directly to the
        program experience — through guest sessions, project reviews, career conversations,
        real industry problem statements, and demo-day evaluation. Approved mentor quotes and
        profiles will be published here as they're confirmed.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {contributions.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-5 py-4 text-left shadow-[0_12px_30px_rgba(24,42,72,0.06)]"
            >
              <Icon className="h-5 w-5 shrink-0 text-primary" />
              <span className="font-jakarta text-sm font-medium text-foreground">{item.label}</span>
            </div>
          );
        })}
      </div>

      <Link
        href="/community#mentors"
        className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
      >
        Meet the Mentors and Experts
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
