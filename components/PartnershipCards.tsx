import Image from "next/image";
import { ArrowUpRight, Building2, GraduationCap } from "lucide-react";

export default function PartnershipCards() {
  return (
    <section className="relative overflow-hidden bg-[#F3F6F8] px-6 py-24 md:px-10">
      <div className="relative mx-auto max-w-6xl">
        <h2 className="font-varela mt-3 text-center text-4xl font-semibold text-foreground md:text-6xl md:leading-[1.05]">
          Ready To Forge?
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="group relative overflow-hidden rounded-[34px] border border-[#0A5886]/30 bg-[#DDEFFD] p-8 shadow-[0_20px_50px_rgba(15,26,44,0.14)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(10,88,134,0.22)] md:p-10">
            <Image
              src="/webp/5.webp"
              alt="Institute background"
              fill
              className="object-cover opacity-24 transition-all duration-500 group-hover:scale-105 group-hover:opacity-30"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#DDEFFD]/82" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/55 text-[#0A5886] backdrop-blur-sm">
                  <GraduationCap size={24} />
                </div>
                <span className="font-varela text-6xl leading-none text-[#0A5886]/20">"</span>
              </div>

              <h3 className="mt-7 font-varela text-3xl font-bold text-[#123047] md:text-4xl">For Institute</h3>

              <p className="mt-5 max-w-sm font-jakarta text-lg leading-relaxed text-[#22384a]/85">
                Transform your campus into an innovation ecosystem.
              </p>

              <button
                type="button"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-[#0A5886]/30 bg-white px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-[#123047] transition-all duration-300 hover:bg-[#0A5886] hover:text-white"
              >
                Institution partnership.
                <ArrowUpRight size={16} />
              </button>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[34px] border border-[#365F1C]/30 bg-[#E7F3D8] p-8 shadow-[0_20px_50px_rgba(15,26,44,0.14)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(53,93,19,0.2)] md:p-10">
            <Image
              src="/webp/6.webp"
              alt="Corporate background"
              fill
              className="object-cover opacity-22 transition-all duration-500 group-hover:scale-105 group-hover:opacity-30"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#E7F3D8]/84" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/55 text-[#365f1c] backdrop-blur-sm">
                  <Building2 size={24} />
                </div>
                <span className="font-varela text-6xl leading-none text-[#365f1c]/20">"</span>
              </div>

              <h3 className="mt-7 font-varela text-3xl font-bold text-[#213c16] md:text-4xl">For Corporates.</h3>

              <p className="mt-5 max-w-sm font-jakarta text-lg leading-relaxed text-[#2b451d]/85">
                Access talent and innovation before the market discovers it.
              </p>

              <button
                type="button"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-[#365f1c]/30 bg-white px-7 py-3 font-jakarta text-sm font-semibold tracking-wide text-[#213c16] transition-all duration-300 hover:bg-[#365f1c] hover:text-white"
              >
                Corporate partnership.
                <ArrowUpRight size={16} />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
