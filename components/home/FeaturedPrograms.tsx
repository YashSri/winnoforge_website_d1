"use client";

import { Clock, Laptop } from "lucide-react";
import Link from "next/link";
import { programs } from "@/lib/programs-data";
import { useModal } from "@/components/modal/ModalContext";

export default function FeaturedPrograms() {
  const { open } = useModal();
  const featured = programs.filter((p) => p.featured && p.status !== "draft");

  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          Learn Skills. Build Capability.
        </h2>
        <p className="max-w-2xl font-jakarta text-base text-foreground/70">
          Explore industry-aligned certification programs designed around practical learning,
          modern tools, real projects, and career readiness.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((program) => (
          <div
            key={program.slug}
            className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(24,42,72,0.14)]"
          >
            <span className="w-fit rounded-full bg-primary/10 px-3 py-1 font-jakarta text-xs font-semibold text-primary">
              {program.domain}
            </span>
            <h3 className="font-clash text-xl font-semibold text-foreground">{program.name}</h3>
            <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
              {program.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 font-jakarta text-xs text-foreground/60">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {program.duration}
              </span>
              <span className="flex items-center gap-1">
                <Laptop className="h-3 w-3" /> {program.deliveryMode}
              </span>
            </div>
            <p className="font-jakarta text-xs font-medium text-foreground/50">
              {program.price ?? "Fee details available on enquiry"}
            </p>
            <Link
              href={`/programs/${program.slug}`}
              className="mt-auto w-fit font-jakarta text-sm font-semibold text-primary transition-colors hover:text-primary/70"
            >
              Explore Program &rarr;
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={() => open("catalogue")}
          className="rounded-full border border-black/10 bg-white px-7 py-3 font-jakarta text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,42,72,0.1)]"
        >
          Download Course Catalog
        </button>
      </div>
    </section>
  );
}
