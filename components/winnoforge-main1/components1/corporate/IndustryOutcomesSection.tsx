import Image from "next/image";

interface OutcomeCard {
  value: string;
  label: string;
  image: string;
}

const outcomes: OutcomeCard[] = [
  {
    value: "50+",
    label: "Institutions",
    image: "/webp/1.webp",
  },
  {
    value: "10,000+",
    label: "Students",
    image: "/webp/2.webp",
  },
  {
    value: "200+",
    label: "Prototypes",
    image: "/webp/3.webp",
  },
  {
    value: "40+",
    label: "Startups",
    image: "/webp/IMG_2131.jpg",
  },
];

export default function IndustryOutcomesSection() {
  return (
    <section className="px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-varela text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
          Built With Industry. Designed For Outcomes.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((card) => (
            <article
              key={card.label}
              className="overflow-hidden rounded-[26px] border border-[#c8d8e8] bg-white shadow-[0_15px_40px_rgba(20,44,78,0.12)]"
            >
              <div className="relative h-44">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a2b44]/65 via-[#0a2b44]/20 to-transparent" />
              </div>

              <div className="p-5">
                <p className="font-varela text-4xl font-semibold text-[#0c3654] md:text-5xl">
                  {card.value}
                </p>
                <p className="mt-1 font-jakarta text-base font-semibold tracking-[0.08em] uppercase text-[#2f4c65]">
                  {card.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
