import { ShieldCheck } from "lucide-react";

const commitments = [
  "Consent is obtained before publishing photographs.",
  "Names and designations are verified.",
  "Confirmed contributors are clearly distinguished from prospective ones.",
  "Profile updates and removal requests are respected.",
];

export default function ResponsibleRepresentation() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16 text-center md:px-12 md:py-24">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <ShieldCheck className="h-6 w-6" />
      </div>
      <span className="mt-4 block font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Responsible Representation
      </span>
      <h2 className="mt-3 font-clash text-3xl font-semibold text-foreground md:text-4xl">
        Credibility Begins With Accuracy
      </h2>
      <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-2 text-left">
        {commitments.map((item) => (
          <li key={item} className="font-jakarta text-sm text-foreground/65">
            &bull; {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
