import Image from "next/image";

export default function InnovationGap() {
  return (
    <section className="bg-[linear-gradient(180deg,#d9e7f8_0%,#a7c4e7_55%,#628ECB_100%)] px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/20 bg-[linear-gradient(135deg,#0E2E48_0%,#1E4D72_45%,#628ECB_100%)] shadow-[0_20px_70px_rgba(2,8,20,0.4)]">
        <div className="relative">
          <div className="grid gap-8 p-6 md:gap-12 md:p-10 lg:p-12">
            <div>
            <p className="font-jakarta text-xs font-semibold uppercase tracking-[0.28em] text-[#78D8C6]">
              Why This Matters
            </p>

            <h2 className="mt-4 max-w-xl font-varela text-4xl font-semibold leading-tight text-white md:text-5xl">
              The Innovation Gap
            </h2>

            <p className="mt-5 max-w-2xl whitespace-pre-line font-jakarta text-base leading-relaxed text-[#D8E7F5] md:text-lg">
              {`Across campuses today, Innovation initiatives remain
episodic - hackathons, seminars, and workshops.

But very few students leave college having built real
products, startups, or market-ready solutions.`}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="rounded-full border border-white/40 px-6 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:border-white hover:bg-white/10"
              >
                LEARN MORE
              </button>
              <button
                type="button"
                className="rounded-full bg-primary px-6 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:bg-primary/90"
              >
                DOWNLOAD PLACEMENT REPORT
              </button>
            </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 h-full w-full md:w-[45%]">
            <Image
              src="/man_speaking.png"
              alt="Speaker"
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
