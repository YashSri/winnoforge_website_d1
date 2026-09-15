import type { LucideIcon } from "lucide-react";

export interface GridCard {
  icon?: LucideIcon;
  title: string;
  description: string;
}

export default function CardGrid({
  eyebrow,
  heading,
  description,
  cards,
  columns = 3,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  cards: GridCard[];
  columns?: 2 | 3 | 4;
}) {
  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        {eyebrow && (
          <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </span>
        )}
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          {heading}
        </h2>
        {description && (
          <p className="font-jakarta text-base text-foreground/70">{description}</p>
        )}
      </div>

      <div className={`mt-14 grid grid-cols-1 gap-6 ${colClass}`}>
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(24,42,72,0.14)]"
            >
              {Icon && (
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
              )}
              <h3 className="font-clash text-lg font-semibold text-foreground">{card.title}</h3>
              <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
