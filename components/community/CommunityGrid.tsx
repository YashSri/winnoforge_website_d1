"use client";

import { useMemo, useState } from "react";
import { Calendar } from "lucide-react";
import TabSwitch from "@/components/shared/TabSwitch";

interface CommunityItem {
  id: string;
  category: "Events" | "Workshops" | "Projects" | "Stories" | "Announcements";
  status: "upcoming" | "past";
  title: string;
  description: string;
  date: string;
}

const items: CommunityItem[] = [
  { id: "e1", category: "Events", status: "upcoming", title: "FORGE Demo Day — Winter Cohort", description: "Builders present shipped prototypes to mentors and industry guests.", date: "Dec 2026" },
  { id: "e2", category: "Events", status: "past", title: "FORGE Demo Day — Summer Cohort", description: "Six teams presented working products after an 8-week sprint.", date: "Jun 2026" },
  { id: "w1", category: "Workshops", status: "upcoming", title: "Intro to Systems Thinking", description: "A hands-on workshop on breaking down real-world problems.", date: "Nov 2026" },
  { id: "w2", category: "Workshops", status: "past", title: "Prompt Engineering for Builders", description: "A practical session on getting more out of AI tools.", date: "Aug 2026" },
  { id: "p1", category: "Projects", status: "past", title: "Campus Waste Sorting Bot", description: "A student team's Citadel-built prototype now piloting on campus.", date: "Jul 2026" },
  { id: "p2", category: "Projects", status: "upcoming", title: "Peer Mentorship Matching Tool", description: "A builder team's in-progress internal tool for the mentor network.", date: "In progress" },
  { id: "s1", category: "Stories", status: "past", title: "From First Cohort to First Startup", description: "One builder's path from a FORGE bootcamp to a funded startup.", date: "May 2026" },
  { id: "s2", category: "Stories", status: "past", title: "What a Semester at the Citadel Taught Me", description: "A builder reflects on their first sprint cycle.", date: "Mar 2026" },
  { id: "a1", category: "Announcements", status: "upcoming", title: "New Certification Track: AI Productivity", description: "Enrollment opens for the newest FORGE certification track.", date: "Oct 2026" },
  { id: "a2", category: "Announcements", status: "past", title: "FORGE Citadel Opens Its Doors", description: "The Citadel's first cohort officially began sprint cycles.", date: "Feb 2026" },
];

const categories = ["Events", "Workshops", "Projects", "Stories", "Announcements"] as const;

export default function CommunityGrid() {
  const [category, setCategory] = useState<string>("Events");
  const [status, setStatus] = useState<"all" | "upcoming" | "past">("all");

  const filtered = useMemo(
    () =>
      items.filter(
        (item) => item.category === category && (status === "all" || item.status === status),
      ),
    [category, status],
  );

  return (
    <section id="activities" className="mx-auto w-full max-w-[1400px] scroll-mt-28 px-6 py-16 md:px-12 md:py-24">
      <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
        What's Happening
      </h2>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <TabSwitch
          tabs={categories.map((c) => ({ key: c, label: c }))}
          active={category}
          onChange={setCategory}
        />
        <TabSwitch
          tabs={[
            { key: "all", label: "All" },
            { key: "upcoming", label: "Upcoming" },
            { key: "past", label: "Past" },
          ]}
          active={status}
          onChange={(v) => setStatus(v as typeof status)}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center font-jakarta text-sm text-foreground/60">
          Nothing here yet for this filter combination.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-3 rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_18px_40px_rgba(24,42,72,0.08)]"
            >
              <span className="flex w-fit items-center gap-1.5 rounded-full bg-primary/8 px-3 py-1 font-jakarta text-xs font-semibold text-primary">
                <Calendar className="h-3 w-3" />
                {item.date}
              </span>
              <h3 className="font-clash text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
