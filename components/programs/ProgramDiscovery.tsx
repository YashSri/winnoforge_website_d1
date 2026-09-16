import Link from "next/link";
import { ArrowUpRight, Briefcase, Building2, GraduationCap, Rocket, School, Users } from "lucide-react";

const audiences = [
  {
    icon: School,
    title: "School Learners",
    description: "For students beginning to explore technology, creativity, problem-solving, and innovation.",
    cta: "Explore School Programs",
    href: "/programs#catalog",
  },
  {
    icon: GraduationCap,
    title: "College Students",
    description: "For learners seeking practical exposure beyond classroom instruction.",
    cta: "Explore College Programs",
    href: "/programs#catalog",
  },
  {
    icon: Rocket,
    title: "Founders and Aspiring Entrepreneurs",
    description: "For individuals transforming ideas into structured, testable ventures.",
    cta: "Explore Founder Programs",
    href: "/programs#featured-pathways",
  },
  {
    icon: Users,
    title: "Faculty and Educators",
    description: "For educators and institutional teams seeking to strengthen practical, innovation-led learning.",
    cta: "Explore Faculty Programs",
    href: "/collaborate",
  },
  {
    icon: Building2,
    title: "Institutions",
    description: "For schools, colleges, and partner institutions seeking a structured innovation and capability-building ecosystem.",
    cta: "Explore Institutional Programs",
    href: "/collaborate",
  },
  {
    icon: Briefcase,
    title: "Industry and Corporate Teams",
    description: "For organisations seeking talent engagement, innovation partnerships, and practical problem-solving.",
    cta: "Explore Industry Engagements",
    href: "/collaborate",
  },
];

export default function ProgramDiscovery() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Find Your Path
        </span>
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          Find the Right Path for Your Next Stage
        </h2>
        <p className="font-jakarta text-base text-foreground/70">
          Different learners need different starting points — pick the pathway most relevant to
          you.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((audience) => {
          const Icon = audience.icon;
          return (
            <div
              key={audience.title}
              className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(24,42,72,0.14)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-clash text-lg font-semibold text-foreground">{audience.title}</h3>
              <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
                {audience.description}
              </p>
              <Link
                href={audience.href}
                className="mt-auto inline-flex w-fit items-center gap-1.5 font-jakarta text-sm font-semibold text-primary transition-colors hover:text-primary/70"
              >
                {audience.cta}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
