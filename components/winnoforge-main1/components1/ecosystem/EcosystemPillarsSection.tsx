import { Building2, Factory, Sparkles, Wrench } from "lucide-react";
import Image from "next/image";

type LogoItem = {
  src: string;
  alt: string;
};

type ShowcaseCard = {
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  logos: LogoItem[];
};

const showcaseCards: ShowcaseCard[] = [
  {
    eyebrow: "Industry Backbone",
    title: "Powered by Winnovation",
    description:
      "Built on the foundation of Winnovation's industry ecosystem and execution capabilities.",
    accent:
      "from-primary/18 via-primary/10 to-transparent ring-primary/15 shadow-[0_24px_60px_rgba(77,150,255,0.14)]",
    logos: [
      {
        src: "/logos/Samarth Care.webp",
        alt: "Samarth Care logo",
      },
      {
        src: "/logos/Kratikal Tech Private Limited.webp",
        alt: "Kratikal Tech Private Limited logo",
      },
      {
        src: "/logos/lightstorm logo.jpg",
        alt: "Lightstorm logo",
      },
      {
        src: "/logos/Infynix Communications Ltd..png",
        alt: "Infynix Communications Ltd. logo",
      },
      {
        src: "/logos/Wahal Infosol logo.jpg",
        alt: "Wahal Infosol logo",
      },
      {
        src: "/logos/satcomlogo.png",
        alt: "Satcom logo",
      },
    ],
  },
  {
    eyebrow: "Operator Network",
    title: "Built by Industry Experts",
    description:
      "Professionals with experience across leading enterprises and high-growth companies.",
    accent:
      "from-[#f7f3ff] via-white to-[#edf5ff] ring-black/8 shadow-[0_24px_60px_rgba(24,42,72,0.09)]",
    logos: [
      {
        src: "/airtel.png",
        alt: "Bharti Airtel logo",
      },
      {
        src: "/logos/Perfetti Van Melle.png",
        alt: "Perfetti Van Melle logo",
      },
      {
        src: "/logos/CJ Darcl Logistics Ltd.jpg",
        alt: "CJ Darcl Logistics Ltd. logo",
      },
      {
        src: "/logos/Movers International Pvt. Ltd..jpg",
        alt: "Movers International Pvt. Ltd. logo",
      },
      {
        src: "/logos/lightstorm logo.jpg",
        alt: "Lightstorm logo",
      },
      {
        src: "/logos/mankind.png",
        alt: "Mankind logo",
      },
    ],
  },
  {
    eyebrow: "Academic Pedigree",
    title: "From Top Global Institutions",
    description:
      "Talent shaped by world-class universities and premier institutions.",
    accent:
      "from-[#f8fbff] via-white to-[#eef9f1] ring-black/8 shadow-[0_24px_60px_rgba(24,42,72,0.09)]",
    logos: [
      {
        src: "/iimA.png",
        alt: "IIM Ahmedabad logo",
      },
      {
        src: "/logos/iim banglore.png",
        alt: "IIM Bangalore logo",
      },
      {
        src: "/logos/IIM_Calcutta_Logo.svg.png",
        alt: "IIM Calcutta logo",
      },
      {
        src: "/logos/iit kanpur.jpg",
        alt: "IIT Kanpur logo",
      },
      {
        src: "/logos/du logo.jpg",
        alt: "University of Delhi logo",
      },
      {
        src: "/logos/Cornell Institute for Healthy Futures.png",
        alt: "Cornell Institute for Healthy Futures logo",
      },
    ],
  },
];

const pillars = [
  {
    short: "IL",
    title: "Institution Layer",
    description: "Embedding a structured innovation ecosystem inside campuses.",
    icon: Building2,
    image: "/webp/2.webp",
    overlay: "from-[#f8fbff]/96 via-[#eff6ff]/82 to-[#e7f0ff]/40",
    glow: "hover:shadow-[0_24px_70px_rgba(77,150,255,0.16)]",
    iconTone: "text-primary bg-primary/10 ring-1 ring-primary/12",
  },
  {
    short: "CL",
    title: "Corporate Layer",
    description: "Connecting companies with emerging talent and innovation.",
    icon: Factory,
    image: "/webp/4.webp",
    overlay: "from-[#fffaf4]/96 via-[#fff4e5]/84 to-[#ffe9ce]/42",
    glow: "hover:shadow-[0_24px_70px_rgba(249,115,22,0.14)]",
    iconTone: "text-[#d97706] bg-[#f59e0b]/12 ring-1 ring-[#f59e0b]/14",
  },
  {
    short: "BL",
    title: "Builder Layer",
    description:
      "Where students become builders and ideas become real ventures.",
    icon: Wrench,
    image: "/webp/6.webp",
    overlay: "from-[#f7fff8]/96 via-[#edf9f0]/84 to-[#daf0e2]/42",
    glow: "hover:shadow-[0_24px_70px_rgba(52,211,153,0.14)]",
    iconTone:
      "text-emerald-700 bg-emerald-500/10 ring-1 ring-emerald-500/12",
  },
];

export default function EcosystemPillarsSection() {
  return (
    <section className="mb-16 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 grid gap-6 lg:grid-cols-3">
          {showcaseCards.map((card) => (
            <article
              key={card.title}
              className={`relative overflow-hidden rounded-[2rem] border border-black/10 bg-gradient-to-br p-7 ring-1 ${card.accent}`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_38%)]" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/12 bg-white/80 px-3 py-1.5 font-jakarta text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  {card.eyebrow}
                </div>

                <h3 className="mt-5 font-varela text-3xl font-semibold leading-tight text-foreground">
                  {card.title}
                </h3>

                <p className="mt-3 max-w-xl font-jakarta text-base leading-relaxed text-foreground/72">
                  {card.description}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {card.logos.map((logo) => (
                    <div
                      key={logo.src}
                      className="flex h-20 items-center justify-center rounded-2xl border border-black/8 bg-white/92 px-4 shadow-[0_12px_28px_rgba(24,42,72,0.06)]"
                    >
                      <div className="relative h-10 w-full">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mb-5 text-center lg:mb-7">
          <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Ecosystem Architecture
          </span>
          <h2 className="font-varela text-3xl font-bold text-foreground md:text-5xl">
            Three Layers. One Ecosystem.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-jakarta text-base leading-relaxed text-foreground/70 md:text-lg">
            Designed as one interconnected operating system where campuses,
            companies, and builders reinforce each other.
          </p>
        </div>

        <div className="grid gap-6 md:auto-rows-fr md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className={`group relative flex min-h-[32rem] flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white/82 p-7 shadow-[0_18px_50px_rgba(24,42,72,0.08)] transition-all duration-300 hover:-translate-y-1 ${pillar.glow}`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={pillar.image}
                    alt={`${pillar.title} visual`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-b ${pillar.overlay}`}
                  />
                  <div className="absolute inset-0 bg-white/28 transition-colors duration-300 group-hover:bg-white/12" />
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  <span className="absolute right-0 top-0 font-clash text-xs font-semibold tracking-[0.18em] text-foreground/55">
                    {pillar.short}
                  </span>

                  <div
                    className={`mb-6 inline-flex w-fit rounded-2xl p-3 transition-transform duration-300 group-hover:scale-105 ${pillar.iconTone}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-clash text-3xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 max-w-sm font-jakarta text-base leading-relaxed text-foreground/72">
                    {pillar.description}
                  </p>

                  <div className="mt-auto pt-10">
                    <div className="h-px w-full bg-black/10" />
                    <p className="mt-4 font-jakarta text-xs uppercase tracking-[0.16em] text-foreground/52">
                      Integrated Ecosystem Layer
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
