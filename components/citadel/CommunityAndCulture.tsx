import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const themes = [
  "Peer learning",
  "Shared knowledge",
  "Respectful discussion",
  "Constructive feedback",
  "Collaborative problem-solving",
  "Cross-disciplinary interaction",
  "Recognition of effort",
  "Responsible participation",
  "Inclusive learning",
  "Continuous improvement",
];

export default function CommunityAndCulture() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          Community and Culture
        </p>
        <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          A Community Built Around Contribution
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/72 md:text-lg">
          The strength of the Citadel depends on the people who contribute to it. Every learner,
          mentor, educator, partner, and team member can help create an environment where
          curiosity is encouraged, questions are welcomed, and meaningful work is respected.
        </p>

        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
          {themes.map((theme) => (
            <span
              key={theme}
              className="rounded-full bg-primary/8 px-4 py-1.5 font-jakarta text-sm font-medium text-primary"
            >
              {theme}
            </span>
          ))}
        </div>

        <Link
          href="/community"
          className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/70 px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-white"
        >
          Explore the FORGE Community
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
