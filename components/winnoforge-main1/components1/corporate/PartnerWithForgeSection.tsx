import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PartnerWithForgeSection() {
  return (
    <section id="partnership" className="px-4 pb-6 pt-10 md:px-8 md:pt-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl border border-[#d4e3f1] bg-linear-to-r from-[#eef5fb] via-white to-[#e7f2ff] shadow-[0_22px_70px_rgba(15,43,70,0.14)]">
        <div className="grid md:grid-cols-[1fr_0.9fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <h2 className="font-varela text-4xl font-semibold leading-tight text-[#0d2f4a] md:text-5xl">
              Partner With FORGE
            </h2>

            <p className="mt-5 max-w-2xl font-jakarta text-base leading-relaxed text-[#36546d] md:text-lg">
              FORGE collaborates with institutions to embed a structured
              innovation ecosystem, enabling students to build, innovate, and
              launch real-world solutions.
            </p>

            <a
              href="/corporate#partnership"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#0E2E48] px-6 py-3 font-jakarta text-sm font-semibold tracking-wide text-white transition hover:bg-[#164769]"
            >
              Apply for Partnership
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="relative min-h-70 md:min-h-full">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#99c8ff] blur-3xl" />
            <Image
              src="/webp/6.webp"
              alt="Institutional collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0b2a44]/45 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
