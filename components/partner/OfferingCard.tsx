import type { LucideIcon } from "lucide-react";

export default function OfferingCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(24,42,72,0.14)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-clash text-lg font-semibold text-foreground">{title}</h3>
      <p className="font-jakarta text-sm leading-relaxed text-foreground/70">{description}</p>
    </div>
  );
}
