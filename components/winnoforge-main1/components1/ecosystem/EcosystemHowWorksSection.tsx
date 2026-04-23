import { ArrowRight, Building2, GraduationCap, Rocket, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    value: "45+",
    label: "Institutions",
    icon: GraduationCap,
  },
  {
    value: "10,000+",
    label: "Students",
    icon: Users,
  },
  {
    value: "40+",
    label: "Startups",
    icon: Rocket,
  },
];

const partnerLogos = [
  {
    src: "/airtel.png",
    alt: "Bharti Airtel logo",
    name: "Airtel",
  },
  {
    src: "/Guest list forge/Basant Chaturvedi/Perfetti Van Melle.png",
    alt: "Perfetti Van Melle logo",
    name: "Perfetti",
  },
  {
    src: "/Guest list forge/Harvinder Singh Banga/CJ Darcl Logistics Ltd.jpg",
    alt: "CJ Darcl Logistics Ltd. logo",
    name: "CJ Darcl",
  },
  {
    src: "/Guest list forge/Krishna Basudevan/lightstorm logo.jpg",
    alt: "Lightstorm logo",
    name: "Lightstorm",
  },
  {
    src: "/Guest list forge/LV Sastry/Infynix Communications Ltd..png",
    alt: "Infynix Communications Ltd. logo",
    name: "Infynix",
  },
  {
    src: "/Guest list forge/Pramod Gokhale/mankind.png",
    alt: "Mankind logo",
    name: "Mankind",
  },
];

export default function EcosystemHowWorksSection() {
  return (
    <section className="mb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border border-black/10 bg-gradient-to-br from-[#f7fbff] via-white to-[#eef5ff] shadow-[0_28px_80px_rgba(24,42,72,0.1)]">
        <div className="grid lg:grid-cols-12">
          <div className="p-8 md:p-12 lg:col-span-7 lg:pr-8">
            <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Winnovation Backbone
            </span>
            <h2 className="font-varela text-3xl font-bold text-foreground md:text-5xl">
              Built on the Winnovation Industry Ecosystem
            </h2>

            <p className="mt-5 max-w-2xl font-jakarta text-lg leading-relaxed text-foreground/70">
              FORGE is not operating in isolation. It is backed by
              Winnovation&apos;s industry ecosystem, giving campuses access to
              real operators, partner companies, and execution-led credibility.
            </p>

            <p className="mt-4 max-w-2xl font-jakarta text-base leading-relaxed text-foreground/64">
              This layer brings institutions closer to industry expectations and
              gives builders a stronger network around product thinking,
              operations, mentorship, and market relevance.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-black/10 bg-white/88 p-4 shadow-[0_12px_30px_rgba(24,42,72,0.05)]"
                  >
                    <span className="inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 font-varela text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-jakarta text-sm font-medium text-foreground/70">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="https://winnovation.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-jakarta text-base font-bold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(77,150,255,0.24)]"
            >
              Explore the Network
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="p-8 pt-0 md:p-12 md:pt-0 lg:col-span-5 lg:pl-0">
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/12 bg-white/88 p-6 shadow-[0_24px_60px_rgba(24,42,72,0.08)] md:p-7">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,150,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(120,178,255,0.12),transparent_28%)]" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-jakarta text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                      Industry-Linked
                    </p>
                    <h3 className="font-varela text-2xl font-semibold text-foreground">
                      Backed by Winnovation
                    </h3>
                  </div>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-black/10 bg-gradient-to-r from-[#f8fbff] via-white to-[#edf5ff] p-5 shadow-[0_14px_30px_rgba(24,42,72,0.05)]">
                  <div className="relative h-12 w-44">
                    <Image
                      src="/supporters/winnovation.png"
                      alt="Winnovation logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <p className="mt-4 font-jakarta text-sm leading-relaxed text-foreground/70">
                    The ecosystem is strengthened by Winnovation&apos;s network
                    of companies, operators, and industry leaders who bring
                    real-world context into the FORGE model.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {partnerLogos.map((partner) => (
                    <article
                      key={partner.name}
                      className="rounded-[1.35rem] border border-black/10 bg-white/92 p-4 shadow-[0_12px_24px_rgba(24,42,72,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(77,150,255,0.12)]"
                    >
                      <div className="relative h-11 w-full">
                        <Image
                          src={partner.src}
                          alt={partner.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="mt-3 text-center font-jakarta text-xs font-semibold uppercase tracking-[0.16em] text-foreground/58">
                        {partner.name}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
