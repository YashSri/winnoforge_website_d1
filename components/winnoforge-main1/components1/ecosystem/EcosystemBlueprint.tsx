import { Building2, Network } from "lucide-react";

const networkCards = [
  {
    title: "Shared Knowledge",
    description: "Practices, learnings, and insights move across campuses.",
  },
  {
    title: "Cross-Campus Collaboration",
    description: "Teams from different institutions can work on shared problems.",
  },
  {
    title: "Distributed Experimentation",
    description: "Multiple teams can explore different pathways to a problem.",
  },
];

export default function EcosystemBlueprint() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          The Blueprint
        </span>
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          One Core. Many Campuses. A Shared Standard of Execution.
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Network className="h-6 w-6" />
          </div>
          <h3 className="font-clash text-xl font-semibold text-foreground">The Central Core</h3>
          <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
            The FORGE Central Core is the strategic, intellectual, and operational heart of the
            ecosystem — defining the overall vision, maintaining quality standards, developing
            execution playbooks, supporting digital infrastructure, and coordinating the broader
            network so campuses stay consistent without being micromanaged.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Building2 className="h-6 w-6" />
          </div>
          <h3 className="font-clash text-xl font-semibold text-foreground">Campus Chapters</h3>
          <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
            Campus Chapters are the local operational arms through which the FORGE ecosystem
            becomes active inside partner institutions — supporting local program execution,
            student participation, industry engagement, and connection to the broader network,
            while staying accountable to shared standards.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-[2rem] border border-primary/15 bg-[linear-gradient(135deg,#0E2E48_0%,#1E4D72_45%,#628ECB_100%)] px-8 py-10 text-center shadow-[0_20px_70px_rgba(2,8,20,0.4)] md:px-12 md:py-12">
        <p className="font-varela text-2xl font-semibold text-white md:text-3xl">
          Centralised vision. Decentralised execution.
        </p>
        <p className="mx-auto mt-4 max-w-2xl font-jakarta text-sm leading-relaxed text-[#D8E7F5] md:text-base">
          A fully centralised model can become rigid; a fully decentralised model can fragment
          into inconsistent quality. The FORGE blueprint combines shared standards with
          campus-level execution and contextual adaptation — designed to support scale without
          sacrificing consistency.
        </p>
      </div>

      <div className="mt-14">
        <h3 className="text-center font-clash text-2xl font-semibold text-foreground">
          Beyond the Campus: A National Network
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {networkCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 rounded-2xl border border-black/5 bg-white p-6 shadow-[0_12px_30px_rgba(24,42,72,0.06)]"
            >
              <h4 className="font-jakarta font-semibold text-foreground">{card.title}</h4>
              <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center font-jakarta text-xs text-foreground/50">
          This network is a long-term direction we're building toward, not a fully realized scale
          today.
        </p>
      </div>
    </section>
  );
}
