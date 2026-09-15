const origins = [
  "A question",
  "A problem",
  "A community need",
  "A technical curiosity",
  "An industry challenge",
  "A research direction",
  "A product idea",
  "A social or institutional opportunity",
];

const process = [
  "Research",
  "Problem definition",
  "Ideation",
  "Design",
  "Prototyping",
  "Testing",
  "Feedback",
  "Iteration",
  "Documentation",
  "Demonstration",
];

export default function ProjectInnovationCulture() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Project and Innovation Culture
          </p>
          <h2 className="mt-3 font-varela text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Ideas Become Stronger When They Are Tested
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/72 md:text-lg">
            The Citadel encourages participants to move from ideas to action. A project may
            begin with any of these starting points, then move through a structured process.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white/85 p-7 shadow-[0_16px_44px_rgba(23,23,23,0.06)]">
            <p className="font-jakarta text-xs font-semibold uppercase tracking-wider text-foreground/45">
              A Project May Begin With
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {origins.map((item) => (
                <li key={item} className="flex items-center gap-2 font-jakarta text-sm text-foreground/70">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/85 p-7 shadow-[0_16px_44px_rgba(23,23,23,0.06)]">
            <p className="font-jakarta text-xs font-semibold uppercase tracking-wider text-foreground/45">
              Participants Then Work Through
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {process.map((item, i) => (
                <span
                  key={item}
                  className="rounded-full bg-primary/8 px-3 py-1.5 font-jakarta text-xs font-semibold text-primary"
                >
                  {i + 1}. {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center font-jakarta text-base italic text-primary/65">
          Progress is measured by what participants learn, build, improve, and can explain — not
          only by what they submit.
        </p>
      </div>
    </section>
  );
}
