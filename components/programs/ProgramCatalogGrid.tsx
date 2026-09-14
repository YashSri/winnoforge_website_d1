"use client";

import { useMemo, useState } from "react";
import { programs } from "@/lib/programs-data";
import ProgramCard from "@/components/programs/ProgramCard";
import ProgramFilterBar, { type ProgramFilters } from "@/components/programs/ProgramFilterBar";

const domains = Array.from(new Set(programs.map((p) => p.domain)));
const deliveryModes = Array.from(new Set(programs.map((p) => p.deliveryMode)));

export default function ProgramCatalogGrid() {
  const [filters, setFilters] = useState<ProgramFilters>({
    search: "",
    domain: null,
    deliveryMode: null,
  });

  const filtered = useMemo(() => {
    const search = filters.search.trim().toLowerCase();
    return programs.filter((program) => {
      if (search && !program.name.toLowerCase().includes(search)) return false;
      if (filters.domain && program.domain !== filters.domain) return false;
      if (filters.deliveryMode && program.deliveryMode !== filters.deliveryMode) return false;
      return true;
    });
  }, [filters]);

  return (
    <section id="catalog" className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
        Certification Catalog
      </h2>
      <p className="mt-3 max-w-2xl font-jakarta text-base text-foreground/70">
        Five industry-backed certification tracks, each built around real projects and mentorship
        from practicing operators.
      </p>

      <div className="mt-10">
        <ProgramFilterBar
          domains={domains}
          deliveryModes={deliveryModes}
          filters={filters}
          onChange={setFilters}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center font-jakarta text-sm text-foreground/60">
          No programs match your filters. Try clearing a filter or a different search term.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      )}
    </section>
  );
}
