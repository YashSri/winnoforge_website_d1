export interface Zone {
  name: string;
  description: string;
  dimensions: string;
}

export default function ZoneCard({ zone }: { zone: Zone }) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10">
      <h3 className="font-clash text-xl font-semibold text-white">{zone.name}</h3>
      <p className="font-jakarta text-sm leading-relaxed text-[#D8E7F5]">{zone.description}</p>
      <span className="mt-auto font-jakarta text-xs font-semibold uppercase tracking-[0.18em] text-[#78D8C6]">
        {zone.dimensions}
      </span>
    </div>
  );
}
