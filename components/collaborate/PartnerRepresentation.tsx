import Image from "next/image";

const partnerLogos = [
  { src: "/airtel.png", alt: "Bharti Airtel logo", name: "Airtel" },
  { src: "/logos/Perfetti Van Melle.png", alt: "Perfetti Van Melle logo", name: "Perfetti" },
  { src: "/logos/CJ Darcl Logistics Ltd.jpg", alt: "CJ Darcl Logistics Ltd. logo", name: "CJ Darcl" },
  { src: "/logos/lightstorm logo.jpg", alt: "Lightstorm logo", name: "Lightstorm" },
  { src: "/logos/Infynix Communications Ltd..png", alt: "Infynix Communications Ltd. logo", name: "Infynix" },
  { src: "/logos/mankind.png", alt: "Mankind logo", name: "Mankind" },
];

export default function PartnerRepresentation() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Partner & Contributor Representation
        </span>
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          Built With People and Organisations
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {partnerLogos.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center justify-center rounded-2xl border border-black/10 bg-white p-5 shadow-[0_12px_24px_rgba(24,42,72,0.05)]"
          >
            <div className="relative h-10 w-full">
              <Image src={partner.src} alt={partner.alt} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
