const items = [
  { title: "Define the Objective", description: "What do you want to achieve through the collaboration?" },
  { title: "Identify the Audience", description: "Who will participate or benefit?" },
  { title: "Clarify the Format", description: "Are you considering a workshop, program, challenge, project, event, or ongoing engagement?" },
  { title: "Share the Context", description: "What problem, opportunity, or requirement should the FORGE team understand?" },
  { title: "Identify the Timeline", description: "When would you like the collaboration to begin?" },
  { title: "Clarify Responsibilities", description: "What support, resources, people, or infrastructure may be involved?" },
  { title: "Define the Expected Output", description: "What would a useful result look like?" },
  { title: "Share Relevant Materials", description: "Provide only documents or links necessary for the initial discussion." },
];

export default function ReadinessChecklist() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 md:px-12 md:py-24">
      <div className="text-center">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Collaboration Readiness Checklist
        </span>
        <h2 className="mt-3 font-clash text-3xl font-semibold text-foreground md:text-4xl">
          Before We Begin
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-[0_12px_30px_rgba(24,42,72,0.06)]"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-jakarta text-sm font-bold text-primary">
              {i + 1}
            </span>
            <div>
              <p className="font-jakarta font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 font-jakarta text-sm leading-relaxed text-foreground/65">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
