export interface Insight {
  title: string;
  excerpt: string;
  author: string;
}

export default function InsightCard({ insight }: { insight: Insight }) {
  return (
    <div className="flex flex-col gap-3 rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_18px_40px_rgba(24,42,72,0.08)]">
      <div className="aspect-[16/9] w-full rounded-2xl bg-primary/8" />
      <h3 className="font-clash text-lg font-semibold text-foreground">{insight.title}</h3>
      <p className="font-jakarta text-sm leading-relaxed text-foreground/70">{insight.excerpt}</p>
      <span className="font-jakarta text-xs font-medium text-foreground/50">
        By {insight.author}
      </span>
    </div>
  );
}
