"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import TabSwitch from "@/components/shared/TabSwitch";
import { expertiseCategories, mentors } from "@/lib/mentors-data";
import MentorProfileCard from "@/components/mentors/MentorProfileCard";

export default function MentorDirectory() {
  const [category, setCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return mentors.filter((mentor) => {
      if (category !== "All" && mentor.expertiseCategory !== category) return false;
      if (query && !mentor.name.toLowerCase().includes(query)) return false;
      return true;
    });
  }, [category, search]);

  return (
    <section id="directory" className="mx-auto w-full max-w-[1400px] scroll-mt-28 px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          The FORGE Expert Network
        </span>
        <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
          People Directory
        </h2>
      </div>

      <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name..."
            className="w-full rounded-full border border-black/10 bg-white py-2.5 pl-11 pr-4 font-jakarta text-sm text-foreground outline-none transition-colors focus:border-primary"
          />
        </div>
        <TabSwitch
          tabs={[{ key: "All", label: "All" }, ...expertiseCategories.map((c) => ({ key: c, label: c }))]}
          active={category}
          onChange={setCategory}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center font-jakarta text-sm text-foreground/60">
          No approved contributors in this category yet — check back soon.
        </p>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((mentor) => (
            <MentorProfileCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      )}
    </section>
  );
}
