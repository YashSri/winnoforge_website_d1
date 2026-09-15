import Link from "next/link";
import { ArrowUpRight, Building2, FlaskConical, Rocket, Trophy, Wrench } from "lucide-react";

const pathways = [
  {
    icon: Wrench,
    title: "FORGE Technical Accelerator",
    positioning: "A practical pathway for developing job-relevant technical skills through structured learning and project execution.",
    href: "/programs#catalog",
  },
  {
    icon: FlaskConical,
    title: "FORGE Innovation Lab",
    positioning: "A project-focused experience for exploring problems, building prototypes, and testing solutions.",
    href: "/citadel1",
  },
  {
    icon: Rocket,
    title: "FORGE Founder Creation and Venture Acceleration",
    positioning: "A structured pathway for aspiring founders working from problem discovery to venture development.",
    href: "/citadel1",
  },
  {
    icon: Building2,
    title: "FORGE Campus Programs",
    positioning: "Institution-linked learning and innovation experiences delivered through partner campuses.",
    href: "/collaborate",
  },
  {
    icon: Trophy,
    title: "FORGE Industry Challenge Series",
    positioning: "Applied challenges that connect participants with real-world problem statements and expert feedback.",
    href: "/collaborate",
  },
];

export default function FeaturedPathways() {
  return (
    <section id="featured-pathways" className="mx-auto w-full max-w-[1400px] scroll-mt-28 px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Featured Pathways
        </span>
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          Priority Pathways Across the Ecosystem
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {pathways.map((pathway) => {
          const Icon = pathway.icon;
          return (
            <div
              key={pathway.title}
              className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-clash text-xl font-semibold text-foreground">{pathway.title}</h3>
              <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
                {pathway.positioning}
              </p>
              <Link
                href={pathway.href}
                className="mt-auto inline-flex w-fit items-center gap-1.5 font-jakarta text-sm font-semibold text-primary transition-colors hover:text-primary/70"
              >
                Learn More
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
