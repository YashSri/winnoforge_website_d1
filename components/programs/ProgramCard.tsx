"use client";

import Link from "next/link";
import { ArrowUpRight, Clock, Download, Laptop } from "lucide-react";
import type { Program } from "@/lib/programs-data";
import { useModal } from "@/components/modal/ModalContext";

export default function ProgramCard({ program }: { program: Program }) {
  const { open } = useModal();

  return (
    <div className="group flex flex-col gap-5 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(24,42,72,0.14)]">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-primary/10 px-3 py-1 font-jakarta text-xs font-semibold text-primary">
          {program.domain}
        </span>
        <span className="flex items-center gap-1 rounded-full bg-black/5 px-3 py-1 font-jakarta text-xs font-medium text-foreground/70">
          <Clock className="h-3 w-3" />
          {program.duration}
        </span>
        <span className="flex items-center gap-1 rounded-full bg-black/5 px-3 py-1 font-jakarta text-xs font-medium text-foreground/70">
          <Laptop className="h-3 w-3" />
          {program.deliveryMode}
        </span>
      </div>

      <h3 className="font-clash text-2xl font-semibold text-foreground">{program.name}</h3>
      <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
        {program.shortDescription}
      </p>

      <div className="mt-auto flex items-center justify-between pt-2">
        <Link
          href={`/programs/${program.slug}`}
          className="inline-flex items-center gap-1.5 font-jakarta text-sm font-semibold text-primary transition-colors hover:text-primary/70"
        >
          View Program
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
        <button
          type="button"
          onClick={() => open("download", { programSlug: program.slug, programName: program.name })}
          aria-label={`Download brochure for ${program.name}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-foreground/60 transition-colors hover:bg-primary/10 hover:text-primary"
        >
          <Download className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
