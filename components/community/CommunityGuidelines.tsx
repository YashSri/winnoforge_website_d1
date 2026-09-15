import { CheckCircle2 } from "lucide-react";

const expectations = [
  "Treat others with respect",
  "Encourage questions and learning",
  "Give constructive feedback",
  "Represent contributions honestly",
  "Respect privacy and confidentiality",
  "Avoid harassment, discrimination, intimidation, or abuse",
  "Credit collaborators and sources",
  "Use shared resources responsibly",
  "Communicate clearly",
  "Raise concerns through appropriate channels",
];

export default function CommunityGuidelines() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 md:px-12 md:py-24">
      <div className="rounded-[2.2rem] border border-black/10 bg-white/85 p-8 shadow-[0_18px_50px_rgba(23,23,23,0.06)] md:p-12">
        <div className="text-center">
          <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Community Guidelines
          </span>
          <h2 className="mt-3 font-varela text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Help Keep the Community Constructive
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-jakarta text-sm leading-relaxed text-foreground/65">
            Community members should:
          </p>
        </div>

        <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
          {expectations.map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-jakarta text-sm text-foreground/75">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
