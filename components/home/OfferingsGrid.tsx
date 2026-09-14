import Link from "next/link";
import { Award, Building2, GraduationCap, Landmark, Network } from "lucide-react";

const offerings = [
  {
    key: "ecosystem",
    icon: Network,
    title: "Ecosystem",
    description: "The full FORGE network — institutions, mentors, industry, and builders.",
    href: "/ecosystem",
  },
  {
    key: "certifications",
    icon: Award,
    title: "Certifications",
    description: "Industry-backed certification tracks across data, engineering, and AI.",
    href: "/programs",
  },
  {
    key: "training",
    icon: GraduationCap,
    title: "Regular Training",
    description: "Ongoing cohort-based training that runs alongside the certification tracks.",
    href: "/programs",
  },
  {
    key: "citadel",
    icon: Building2,
    title: "Citadel",
    description: "A physical build space for sprint cycles, prototypes, and shipped products.",
    href: "/citadel1",
  },
  {
    key: "institutional",
    icon: Landmark,
    title: "Institutional Programs",
    description: "Structured partnership programs built for colleges and universities.",
    href: "/corporate",
  },
];

export default function OfferingsGrid() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
        Explore Our Offerings
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.map((offering) => {
          const Icon = offering.icon;
          return (
            <Link
              key={offering.key}
              href={offering.href}
              className="group flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(24,42,72,0.14)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-clash text-xl font-semibold text-foreground">
                {offering.title}
              </h3>
              <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
                {offering.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
