import { CheckCircle2, XCircle } from "lucide-react";

const problems = [
  "Theory without enough application.",
  "Limited exposure to real industry workflows.",
  "Few opportunities to build with accountability.",
  "Weak connection between campus activity and career readiness.",
];

const responses = [
  "Industry-aligned curriculum.",
  "Hands-on practical work.",
  "Mentor-led feedback.",
  "Project and portfolio development.",
  "Innovation and entrepreneurship exposure.",
];

export default function ProblemResponse() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <h2 className="text-center font-clash text-3xl font-semibold text-foreground md:text-4xl">
        Degrees Matter. Demonstrated Capability Matters More.
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center font-jakarta text-base leading-relaxed text-foreground/70">
        Students graduate with knowledge, but employers increasingly look for evidence of what a
        person can actually do. FORGE responds to this gap by creating structured environments
        where students practise, build, receive feedback, and demonstrate their capability through
        real outputs.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)]">
          <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
            The Problem
          </span>
          <ul className="mt-2 flex flex-col gap-4">
            {problems.map((item) => (
              <li key={item} className="flex items-start gap-3 font-jakarta text-foreground/70">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-foreground/30" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 rounded-[2rem] border border-primary/15 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)]">
          <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            The FORGE Response
          </span>
          <ul className="mt-2 flex flex-col gap-4">
            {responses.map((item) => (
              <li key={item} className="flex items-start gap-3 font-jakarta font-medium text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
