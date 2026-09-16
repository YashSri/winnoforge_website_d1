"use client";

import { Search } from "lucide-react";

function FilterPillGroup({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: string[];
  active: string | null;
  onChange: (value: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 font-jakarta text-xs font-semibold uppercase tracking-wide text-foreground/50">
        {label}
      </span>
      <button
        type="button"
        onClick={() => onChange(null)}
        className={`rounded-full px-3 py-1.5 font-jakarta text-xs font-semibold transition-colors ${
          active === null
            ? "bg-primary text-white"
            : "bg-primary/8 text-foreground/70 hover:bg-primary/15"
        }`}
      >
        All
      </button>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-full px-3 py-1.5 font-jakarta text-xs font-semibold transition-colors ${
            active === option
              ? "bg-primary text-white"
              : "bg-primary/8 text-foreground/70 hover:bg-primary/15"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export interface ProgramFilters {
  search: string;
  domain: string | null;
  deliveryMode: string | null;
}

export default function ProgramFilterBar({
  domains,
  deliveryModes,
  filters,
  onChange,
}: {
  domains: string[];
  deliveryModes: string[];
  filters: ProgramFilters;
  onChange: (filters: ProgramFilters) => void;
}) {
  return (
    <div className="flex flex-col gap-5 rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_40px_rgba(24,42,72,0.08)] md:p-8">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
        <input
          type="text"
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          placeholder="Search programs..."
          className="w-full rounded-full border border-black/10 bg-background py-2.5 pl-11 pr-4 font-jakarta text-sm text-foreground outline-none transition-colors focus:border-primary"
        />
      </div>
      <FilterPillGroup
        label="Domain"
        options={domains}
        active={filters.domain}
        onChange={(domain) => onChange({ ...filters, domain })}
      />
      <FilterPillGroup
        label="Delivery Mode"
        options={deliveryModes}
        active={filters.deliveryMode}
        onChange={(deliveryMode) => onChange({ ...filters, deliveryMode })}
      />
    </div>
  );
}
