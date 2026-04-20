import Link from "next/link";
import Image from "next/image";

export default function Citadel() {
  return (
    <section className="bg-[#FDFBF7] px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/20 bg-[linear-gradient(135deg,#0E2E48_0%,#1E4D72_45%,#628ECB_100%)] shadow-[0_20px_70px_rgba(2,8,20,0.4)]">
        <div className="relative">
          <div className="grid gap-8 p-6 md:gap-12 md:p-10 md:pl-[45%] lg:p-12 lg:pl-[45%]">
            <div>
              <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#78D8C6]">
                Ready to Forge
              </p>

              <h2 className="mt-4 max-w-xl font-varela text-4xl font-semibold leading-tight text-white md:text-5xl">
                Forge Citadel
              </h2>

              <p className="mt-5 max-w-2xl whitespace-pre-line font-jakarta text-base leading-relaxed text-[#D8E7F5] md:text-lg">
                {`The Citadel is the operational core of the FORGE ecosystem.
A high-performance execution environment where
teams build prototypes, test ideas and launch startups.
`}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/citadel1"
                  className="rounded-full bg-[#D7EC6E] px-6 py-3 font-jakarta text-sm font-semibold tracking-wide text-[#1B2F25] transition hover:bg-[#e3f883]"
                >
                  Explore Citadel
                </Link>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 h-full w-full md:w-[45%]">
            <Image
              src="/man_speaking.png"
              alt="Citadel"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
