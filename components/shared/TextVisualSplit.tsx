import type { ReactNode } from "react";
import Link from "next/link";

export default function TextVisualSplit({
  eyebrow,
  heading,
  body,
  cta,
  visual,
  reverse = false,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  cta?: { label: string; href: string };
  visual: ReactNode;
  reverse?: boolean;
}) {
  return (
    <section
      className={`mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 px-6 py-16 md:gap-16 md:px-12 md:py-24 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex flex-1 flex-col gap-5">
        {eyebrow && (
          <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </span>
        )}
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          {heading}
        </h2>
        <p className="font-jakarta text-base leading-relaxed text-foreground/70">
          {body}
        </p>
        {cta && (
          <Link
            href={cta.href}
            className="w-fit rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
          >
            {cta.label}
          </Link>
        )}
      </div>
      <div className="w-full flex-1">{visual}</div>
    </section>
  );
}
