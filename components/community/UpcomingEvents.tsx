import { Calendar, Clock, MapPin } from "lucide-react";
import JoinButton from "@/components/modal/JoinButton";

interface EventItem {
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  host: string;
  audience: string;
  description: string;
  status: "Registration Open" | "Coming Soon" | "Registration Closed" | "Completed" | "To Be Announced";
}

const events: EventItem[] = [
  {
    title: "FORGE Demo Day — Winter Cohort",
    type: "Event",
    date: "Dec 2026",
    time: "To Be Announced",
    location: "FORGE Citadel",
    host: "FORGE Team",
    audience: "Open to all",
    description: "Builders present shipped prototypes to mentors and industry guests.",
    status: "Coming Soon",
  },
  {
    title: "Intro to Systems Thinking",
    type: "Workshop",
    date: "Nov 2026",
    time: "To Be Announced",
    location: "Online",
    host: "FORGE Mentor Network",
    audience: "Beginners welcome",
    description: "A hands-on workshop on breaking down real-world problems.",
    status: "Registration Open",
  },
  {
    title: "New Certification Track: AI Productivity",
    type: "Announcement",
    date: "Oct 2026",
    time: "—",
    location: "Online",
    host: "FORGE Team",
    audience: "All learners",
    description: "Enrollment opens for the newest FORGE certification track.",
    status: "To Be Announced",
  },
];

const statusStyles: Record<EventItem["status"], string> = {
  "Registration Open": "bg-primary/10 text-primary",
  "Coming Soon": "bg-black/5 text-foreground/60",
  "Registration Closed": "bg-black/5 text-foreground/40",
  Completed: "bg-black/5 text-foreground/40",
  "To Be Announced": "bg-black/5 text-foreground/60",
};

export default function UpcomingEvents() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
        Upcoming in the Community
      </h2>

      {events.length === 0 ? (
        <p className="mt-16 text-center font-jakarta text-sm text-foreground/60">
          New community activities are being prepared. Check back soon or connect with the
          FORGE team to explore ways to participate.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex flex-col gap-3 rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_18px_40px_rgba(24,42,72,0.08)]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-black/5 px-3 py-1 font-jakarta text-xs font-semibold text-foreground/60">
                  {event.type}
                </span>
                <span className={`rounded-full px-3 py-1 font-jakarta text-xs font-semibold ${statusStyles[event.status]}`}>
                  {event.status}
                </span>
              </div>
              <h3 className="font-clash text-lg font-semibold text-foreground">{event.title}</h3>
              <p className="font-jakarta text-sm leading-relaxed text-foreground/70">
                {event.description}
              </p>
              <div className="flex flex-col gap-1.5 font-jakarta text-xs text-foreground/55">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {event.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {event.time}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> {event.location}
                </span>
              </div>
              <p className="font-jakarta text-xs text-foreground/45">
                Hosted by {event.host} &middot; {event.audience}
              </p>
              <JoinButton className="mt-auto w-fit rounded-full bg-primary px-5 py-2 font-jakarta text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-95">
                Register Interest
              </JoinButton>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
