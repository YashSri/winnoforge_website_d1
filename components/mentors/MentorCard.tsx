import { Linkedin } from "lucide-react";

export interface Mentor {
  name: string;
  designation: string;
  org: string;
  expertise: string[];
  linkedinUrl?: string;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <div className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_18px_40px_rgba(24,42,72,0.08)]">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 font-jakarta text-base font-semibold text-primary">
          {initials(mentor.name)}
        </div>
        <div>
          <h3 className="font-clash text-lg font-semibold text-foreground">{mentor.name}</h3>
          <p className="font-jakarta text-xs text-foreground/60">
            {mentor.designation}, {mentor.org}
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
      <div className="flex flex-wrap gap-2">
        {mentor.expertise.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-primary/8 px-3 py-1 font-jakarta text-xs font-medium text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
