import type { LucideIcon } from "lucide-react";
import { Activity, BarChart3, Layers3 } from "lucide-react";

interface ModelBlock {
  title: string;
  description: string;
  icon: LucideIcon;
}

const modelBlocks: ModelBlock[] = [
  {
    title: "Continuous Activation",
    description:
      "Seminars, workshops, and hackathons create consistent exposure and engagement.",
    icon: Activity,
  },
  {
    title: "Structured Execution",
    description:
      "Bootcamps and Citadel cycles ensure ideas move into real builds and prototypes.",
    icon: Layers3,
  },
  {
    title: "Measurable Outcomes",
    description:
      "Performance tracking, mentor reviews, and startup outputs replace activity-based engagement.",
    icon: BarChart3,
  },
];

export default function InstitutionalModelSection() {
  return (
    <section className="px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-varela text-4xl font-semibold text-foreground md:text-5xl">
          The FORGE Institutional Model
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center font-jakarta text-base leading-relaxed text-foreground/70 md:text-lg">
          A structured, year-long innovation framework integrated within campus
          operations.
        </p>

        <div className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          <div className="pointer-events-none absolute left-[16.5%] right-[16.5%] top-7 hidden h-0.5 bg-linear-to-r from-[#9dd5ff] via-[#3c87d7] to-[#9dd5ff] md:block" />

          {modelBlocks.map((block, index) => {
            const Icon = block.icon;

            return (
              <article
                key={block.title}
                className={`relative rounded-[30px] border border-[#c9d9ea] bg-white p-7 shadow-[0_16px_40px_rgba(20,44,78,0.12)] md:p-8 ${
                  index === 1 ? "md:-translate-y-8" : ""
                }`}
              >
                <span className="absolute -top-3 left-7 hidden h-6 w-6 items-center justify-center rounded-full border border-[#9ac3f6] bg-white text-[11px] font-semibold text-[#265f9b] md:flex">
                  {index + 1}
                </span>

                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8f2fc] text-[#1b4f80]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="font-varela text-2xl font-semibold text-[#0d2f4a] md:text-3xl">
                  {block.title}
                </h3>

                <p className="mt-4 font-jakarta text-base leading-relaxed text-[#355066]">
                  {block.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
