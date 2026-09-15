import { CheckCircle2 } from "lucide-react";

const expectations = [
  "Treat others with respect",
  "Communicate responsibly",
  "Honour agreed commitments",
  "Maintain academic and professional integrity",
  "Protect private and confidential information",
  "Use shared resources responsibly",
  "Avoid harassment, discrimination, intimidation, or misconduct",
  "Raise concerns through appropriate channels",
  "Respect the safety and learning of others",
];

export default function CodeOfConduct() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl rounded-[2.2rem] border border-black/10 bg-white/85 p-8 shadow-[0_18px_50px_rgba(23,23,23,0.06)] md:p-12">
        <div className="text-center">
          <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Code of Conduct
          </p>
          <h2 className="mt-3 font-varela text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            A Shared Standard of Conduct
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-jakarta text-sm leading-relaxed text-foreground/65">
            Participants are encouraged to:
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
