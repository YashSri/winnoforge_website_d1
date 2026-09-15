import { Landmark } from "lucide-react";

const focusAreas = [
  "AI governance",
  "Technology ethics",
  "Digital transformation",
  "Public health",
  "Climate adaptation",
  "Financial inclusion",
  "Smart infrastructure",
  "Education technology",
];

export default function GovernmentInnovation() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:px-12 md:py-24">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Landmark className="h-6 w-6" />
      </div>
      <span className="mt-4 block font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Our Vision
      </span>
      <h2 className="mt-3 font-clash text-3xl font-semibold text-foreground md:text-4xl">
        Innovation Can Serve Public Purpose
      </h2>
      <p className="mx-auto mt-6 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/70">
        Some of the most consequential problems exist in public systems. FORGE's long-term vision
        includes creating structured ways for public-sector challenges to enter the innovation
        ecosystem — where formal relationships exist, students, founders, and teams may work on
        genuine operational challenges rather than hypothetical exercises.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {focusAreas.map((area) => (
          <span
            key={area}
            className="rounded-full bg-primary/8 px-4 py-1.5 font-jakarta text-sm font-medium text-primary"
          >
            {area}
          </span>
        ))}
      </div>
    </section>
  );
}
