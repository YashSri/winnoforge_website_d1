import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const components = [
  "Campus needs assessment",
  "Program planning",
  "Faculty coordination",
  "Student onboarding",
  "Skill pathways",
  "Innovation activities",
  "Campus chapter development",
  "Mentor and expert sessions",
  "Project showcases",
  "Progress reviews",
];

export default function InstitutionalPrograms() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="grid grid-cols-1 gap-10 rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] md:grid-cols-2 md:p-12">
        <div className="flex flex-col justify-center gap-4">
          <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            For Institutions
          </span>
          <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
            Bring FORGE Into Your Institution
          </h2>
          <p className="font-jakarta text-base leading-relaxed text-foreground/70">
            FORGE works with institutions to design practical learning and innovation
            experiences that fit their learners, faculty, infrastructure, and long-term goals —
            positioned as a structured collaboration, not a one-off event.
          </p>
          <Link
            href="/collaborate"
            className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-7 py-3 font-jakarta text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.28)]"
          >
            Discuss an Institutional Program
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {components.map((item) => (
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
