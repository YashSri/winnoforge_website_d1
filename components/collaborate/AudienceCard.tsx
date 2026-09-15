import type { LucideIcon } from "lucide-react";

export default function AudienceCard({
  icon: Icon,
  title,
  description,
  cta,
  onSelect,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  onSelect: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(24,42,72,0.14)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-clash text-xl font-semibold text-foreground">{title}</h3>
      <p className="font-jakarta text-sm leading-relaxed text-foreground/70">{description}</p>
      <button
        type="button"
        onClick={onSelect}
        className="mt-auto w-fit font-jakarta text-sm font-semibold text-primary transition-colors hover:text-primary/70"
      >
        {cta} &rarr;
      </button>
    </div>
  );
}
