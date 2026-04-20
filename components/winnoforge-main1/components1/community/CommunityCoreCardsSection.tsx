import { Building2, Calendar, FlaskConical } from "lucide-react";

const cards = [
  {
    title: "Exclusive Access to Events",
    description:
      "Be part of workshops, hackathons, and sessions designed to push ideas into execution.",
    icon: Calendar,
  },
  {
    title: "Institutional Collaborations",
    description:
      "FORGE partners with leading institutions through MoUs to build structured innovation ecosystems.",
    icon: Building2,
  },
  {
    title: "Research & Development",
    description:
      "Work on emerging ideas, explore new technologies, and contribute to real innovation projects.",
    icon: FlaskConical,
  },
];

export default function CommunityCoreCardsSection() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group rounded-[2rem] border border-[#1f4b7a]/10 bg-white/82 p-8 shadow-[0_18px_40px_rgba(24,42,72,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(24,42,72,0.18)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4d96ff]/16 text-[#2f5f95] ring-1 ring-[#4d96ff]/20">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-varela text-3xl font-semibold leading-snug text-[#1f4270] md:text-4xl">
                  {card.title}
                </h3>

                <p className="mt-4 font-jakarta text-lg leading-relaxed text-foreground/72">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
