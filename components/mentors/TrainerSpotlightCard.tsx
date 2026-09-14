import type { Program } from "@/lib/programs-data";

export default function TrainerSpotlightCard({ program }: { program: Program }) {
  return (
    <div className="flex flex-col gap-3 rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_18px_40px_rgba(24,42,72,0.08)]">
      <span className="w-fit rounded-full bg-primary/10 px-3 py-1 font-jakarta text-xs font-semibold text-primary">
        {program.name}
      </span>
      <h3 className="font-clash text-lg font-semibold text-foreground">{program.trainerName}</h3>
      <p className="font-jakarta text-xs text-foreground/60">{program.trainerDesignation}</p>
      <p className="font-jakarta text-sm leading-relaxed text-foreground/70">{program.trainerBio}</p>
    </div>
  );
}
