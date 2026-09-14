export interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded-2xl border border-black/10 bg-white px-6 py-4 transition-shadow open:shadow-[0_18px_40px_rgba(24,42,72,0.08)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between font-jakarta font-semibold text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            {item.question}
            <span className="ml-4 shrink-0 text-xl text-primary transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 font-jakarta text-sm leading-relaxed text-foreground/70">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
