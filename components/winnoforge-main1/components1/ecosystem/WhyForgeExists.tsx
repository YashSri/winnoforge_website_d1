import { CheckCircle2, XCircle } from "lucide-react";

const problems = [
  {
    title: "Knowledge Without Enough Application",
    description: "Students may understand concepts without having enough opportunities to apply them in realistic contexts.",
  },
  {
    title: "Limited Industry Exposure",
    description: "Industry interaction may happen as isolated talks or placement-season activity rather than as a continuous relationship.",
  },
  {
    title: "Weak Execution Evidence",
    description: "A resume or certificate may not fully communicate how a person works through ambiguity, feedback, teamwork, and delivery.",
  },
  {
    title: "Fragmented Innovation Activity",
    description: "Workshops, hackathons, clubs, projects, and entrepreneurship initiatives may operate separately instead of forming a connected progression.",
  },
  {
    title: "Institutional Pressure",
    description: "Institutions need stronger ways to connect learning, employability, innovation, industry engagement, and measurable outcomes.",
  },
];

const responses = [
  "Certification and skill development",
  "Practical project execution",
  "Mentorship",
  "Campus communities",
  "Innovation infrastructure",
  "Industry problem statements",
  "Performance and progression",
  "Venture development",
  "Hiring and institutional partnerships",
];

export default function WhyForgeExists() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Why FORGE Exists
        </span>
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          The Market Has Changed. Learning Must Evolve.
        </h2>
        <p className="font-jakarta text-base text-foreground/70">
          There's a structural gap between the talent available in the academic ecosystem and the
          outcomes that talent is able to produce in professional environments. FORGE is designed
          as a response to this gap.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-5 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)]">
          <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
            The Gap
          </span>
          {problems.map((problem) => (
            <div key={problem.title} className="flex items-start gap-3">
              <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-foreground/30" />
              <div>
                <p className="font-jakarta font-semibold text-foreground">{problem.title}</p>
                <p className="mt-1 font-jakarta text-sm leading-relaxed text-foreground/65">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-[2rem] border border-primary/15 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)]">
          <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            The FORGE Response
          </span>
          <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
            FORGE responds by connecting:
          </p>
          <ul className="flex flex-col gap-3">
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
