import { Linkedin } from "lucide-react";
import type { MentorProfile } from "@/lib/mentors-data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function MentorProfileCard({ mentor }: { mentor: MentorProfile }) {
  return (
    <div className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_18px_40px_rgba(24,42,72,0.08)]">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 font-jakarta text-base font-semibold text-primary">
          {initials(mentor.name)}
        </div>
        <div className="min-w-0">
          <h3 className="truncate font-clash text-lg font-semibold text-foreground">{mentor.name}</h3>
          <p className="truncate font-jakarta text-xs text-foreground/60">
            {mentor.designation}, {mentor.organisation}
          </p>
        </div>
        {mentor.linkedinUrl && (
          <a
            href={mentor.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${mentor.name} on LinkedIn`}
            className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/5 text-foreground/60 transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
      </div>

      <span className="w-fit rounded-full bg-primary/8 px-3 py-1 font-jakarta text-xs font-semibold text-primary">
        {mentor.contributionType}
      </span>

      <p className="font-jakarta text-sm leading-relaxed text-foreground/70">{mentor.bio}</p>

      <div className="flex flex-wrap gap-2">
        {mentor.expertiseTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-black/5 px-3 py-1 font-jakarta text-xs font-medium text-foreground/60"
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        aria-disabled="true"
        title="Full profile pages coming soon"
        className="mt-auto w-fit cursor-not-allowed font-jakarta text-sm font-semibold text-foreground/30"
      >
        View Profile &rarr;
      </span>
    </div>
  );
}
