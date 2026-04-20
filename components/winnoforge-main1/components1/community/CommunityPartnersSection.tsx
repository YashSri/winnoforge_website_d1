import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const institutions = [
  {
    name: "Delhi Technological University",
    badge: "MoU Partner",
  },
  {
    name: "Vellore Institute of Technology",
    badge: "MoU Partner",
  },
  {
    name: "SRM Institute of Science & Technology",
    badge: "MoU Partner",
  },
];

const companies = [
  {
    name: "Tata Consultancy Services (TCS)",
    badge: "Industry Partner",
  },
  {
    name: "Infosys",
    badge: "Industry Partner",
  },
  {
    name: "Zoho Corporation",
    badge: "Industry Partner",
  },
];

export default function CommunityPartnersSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-varela text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Our Network of Partners
          </h2>
          <p className="mt-5 font-jakarta text-lg leading-relaxed text-foreground/72 md:text-xl">
            FORGE collaborates with leading institutions and companies to create
            a connected, execution-driven ecosystem.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <div>
            <h3 className="font-varela text-2xl font-semibold text-[#1f4270] md:text-3xl">
              Institutions
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
              {institutions.map((partner) => (
                <article
                  key={partner.name}
                  className="rounded-[1.7rem] border border-[#4d96ff]/22 bg-white/88 p-6 shadow-[0_14px_35px_rgba(23,45,77,0.1)]"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#4d96ff]/14 text-[#2f5f95]">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-varela text-2xl font-semibold leading-snug text-[#1f4270]">
                    {partner.name}
                  </h4>
                  <p className="mt-4 inline-flex rounded-full bg-[#4d96ff]/15 px-3 py-1 font-jakarta text-xs font-semibold uppercase tracking-[0.14em] text-[#2f5f95]">
                    {partner.badge}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-varela text-2xl font-semibold text-[#1f4270] md:text-3xl">
              Companies
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
              {companies.map((partner) => (
                <article
                  key={partner.name}
                  className="rounded-[1.7rem] border border-[#23457A]/22 bg-white/88 p-6 shadow-[0_14px_35px_rgba(23,45,77,0.1)]"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#23457A]/14 text-[#23457A]">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-varela text-2xl font-semibold leading-snug text-[#1f4270]">
                    {partner.name}
                  </h4>
                  <p className="mt-4 inline-flex rounded-full bg-[#23457A]/12 px-3 py-1 font-jakarta text-xs font-semibold uppercase tracking-[0.14em] text-[#23457A]">
                    {partner.badge}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
