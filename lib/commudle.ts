export interface CommudleLocation {
  name?: string;
  address?: string;
  map_link?: string;
}

export interface CommudleTag {
  id: number;
  name: string;
}

export interface CommudleRawEvent {
  id: number;
  name: string;
  slug: string;
  start_time: string;
  end_time: string;
  event_type: string;
  interested_members_count?: number;
  header_image_path?: string;
  header_image?: {
    url?: string;
    i320?: string;
    i350?: string;
    i500?: string;
  };
  event_status?: {
    id: number;
    name: string;
    description?: string;
  };
  event_locations?: CommudleLocation[];
  description?: string;
  tags?: CommudleTag[];
}

export interface TransformedEvent {
  id: string;
  commudleId: number;
  title: string;
  slug: string;
  type: "Workshop" | "Event";
  category: "Events" | "Workshops";
  status: "upcoming" | "past";
  displayStatus: "Registration Open" | "Coming Soon" | "Completed";
  date: string;
  time: string;
  location: string;
  host: string;
  audience: string;
  description: string;
  image: string;
  attendeesCount: string;
  link: string;
}

export interface CommudleCommunityStats {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  membersCount: number;
  upcomingEventsCount: number;
  commudleUrl: string;
}

export const COMMUDLE_COMMUNITY_SLUG = "codeconsortium";
export const COMMUDLE_COMMUNITY_URL = `https://www.commudle.com/communities/${COMMUDLE_COMMUNITY_SLUG}`;

// Fallback verified event data in case Commudle API is offline
export const FALLBACK_COMMUDLE_EVENTS: TransformedEvent[] = [
  {
    id: "commudle-2261",
    commudleId: 2261,
    title: "DECODE THE MACHINE — NLP × Transformers",
    slug: "decode-the-machine",
    type: "Workshop",
    category: "Workshops",
    status: "past",
    displayStatus: "Completed",
    date: "26 Sep 2026",
    time: "10:00 AM – 4:00 PM",
    location: "Trinity Institute of Innovations, Greater Noida",
    host: "TEAM FORGE & Commudle",
    audience: "Beginner to Intermediate",
    description: "Hands-on AI workshop exploring NLP, Transformers, tokens, and how text moves through language models.",
    image: "/commudle-events/decode-the-machine.png",
    attendeesCount: "+88 attended",
    link: "https://www.commudle.com/communities/codeconsortium/events/decode-the-machine",
  },
  {
    id: "commudle-2249",
    commudleId: 2249,
    title: "From Foundations To Frontiers AI",
    slug: "from-foundations-to-frontiers",
    type: "Workshop",
    category: "Workshops",
    status: "past",
    displayStatus: "Completed",
    date: "19 Sep 2026",
    time: "10:00 AM – 4:00 PM",
    location: "Trinity Institute of Innovations, Greater Noida",
    host: "FORGE Community",
    audience: "Curious builders & learners",
    description: "Structured learning journey from AI fundamentals and neural networks to generative AI and agentic frontiers.",
    image: "/commudle-events/foundations-to-frontiers.png",
    attendeesCount: "+80 attended",
    link: "https://www.commudle.com/communities/codeconsortium/events/from-foundations-to-frontiers",
  },
  {
    id: "commudle-1975",
    commudleId: 1975,
    title: "FORGING THE AI ERA",
    slug: "forging-the-ai-era",
    type: "Workshop",
    category: "Workshops",
    status: "past",
    displayStatus: "Completed",
    date: "22 Feb 2026",
    time: "10:30 AM – 4:30 PM",
    location: "Winnovation, I-Thum Galleria, Greater Noida",
    host: "Winnovation FORGE",
    audience: "Developers, students & founders",
    description: "Build AI foundations from scratch. Machine learning, prompt engineering, and live vibe-coding demonstration.",
    image: "/commudle-events/forging-the-ai-era.png",
    attendeesCount: "+62 attended",
    link: "https://www.commudle.com/communities/codeconsortium/events/forging-the-ai-era",
  },
];

export const FALLBACK_COMMUNITY_STATS: CommudleCommunityStats = {
  id: 184,
  name: "FORGE",
  slug: COMMUDLE_COMMUNITY_SLUG,
  tagline: "Where Curiosity Becomes Creation.",
  membersCount: 356,
  upcomingEventsCount: 0,
  commudleUrl: COMMUDLE_COMMUNITY_URL,
};

function stripHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>?/gm, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&bull;/g, "•")
    .replace(/&rarr;/g, "→")
    .replace(/&times;/g, "×")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(isoStr: string): string {
  try {
    const d = new Date(isoStr);
    if (isNaN(d.getTime())) return isoStr;
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return isoStr;
  }
}

function formatTime(startIso: string, endIso: string): string {
  try {
    const s = new Date(startIso);
    const e = new Date(endIso);
    if (isNaN(s.getTime())) return "To Be Announced";
    const startTimeStr = s.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    if (isNaN(e.getTime())) return startTimeStr;
    const endTimeStr = e.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `${startTimeStr} – ${endTimeStr}`;
  } catch {
    return "To Be Announced";
  }
}

export function transformCommudleEvent(raw: CommudleRawEvent): TransformedEvent {
  const isWorkshop =
    raw.tags?.some((t) => t.name.toLowerCase().includes("workshop")) ||
    raw.name.toLowerCase().includes("workshop") ||
    raw.name.toLowerCase().includes("hands-on");

  const category: "Events" | "Workshops" = isWorkshop ? "Workshops" : "Events";
  const type: "Workshop" | "Event" = isWorkshop ? "Workshop" : "Event";

  const eventEndDate = raw.end_time ? new Date(raw.end_time) : new Date(raw.start_time);
  const now = new Date();
  const isPast = eventEndDate < now || raw.event_status?.name?.toLowerCase() === "completed";

  const status: "upcoming" | "past" = isPast ? "past" : "upcoming";
  const displayStatus: "Registration Open" | "Coming Soon" | "Completed" = isPast
    ? "Completed"
    : "Registration Open";

  const location =
    raw.event_locations && raw.event_locations.length > 0 && raw.event_locations[0].name
      ? raw.event_locations[0].name.trim()
      : raw.event_type === "online"
      ? "Online Session"
      : "Greater Noida";

  const cleanDesc = stripHtml(raw.description || "");
  const excerpt = cleanDesc.length > 130 ? cleanDesc.slice(0, 127) + "..." : cleanDesc;

  const image =
    raw.header_image?.url ||
    raw.header_image_path ||
    "/community-events/demo-day-winter.png";

  const count = raw.interested_members_count || 0;
  const attendeesCount = isPast
    ? `+${count > 0 ? count : 80} attended`
    : `+${count > 0 ? count : 40} registered`;

  const link = `https://www.commudle.com/communities/${COMMUDLE_COMMUNITY_SLUG}/events/${raw.slug}`;

  return {
    id: `commudle-${raw.id}`,
    commudleId: raw.id,
    title: raw.name,
    slug: raw.slug,
    type,
    category,
    status,
    displayStatus,
    date: formatDate(raw.start_time),
    time: formatTime(raw.start_time, raw.end_time),
    location,
    host: "TEAM FORGE & Commudle",
    audience: "Open to all learners",
    description: excerpt || "A hands-on learning and building session hosted by FORGE.",
    image,
    attendeesCount,
    link,
  };
}

/**
 * Fetches all events directly from the official Commudle JSON API.
 * Automatically handles caching and graceful fallbacks.
 */
export async function getCommudleEvents(): Promise<{
  events: TransformedEvent[];
  upcoming: TransformedEvent[];
  past: TransformedEvent[];
  stats: CommudleCommunityStats;
}> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const [eventsRes, statsRes] = await Promise.allSettled([
      fetch(
        `https://json.commudle.com/api/v2/events/public/index_by_community?community_id=${COMMUDLE_COMMUNITY_SLUG}`,
        {
          headers: { "User-Agent": "FORGE-Website-Sync/1.0" },
          next: { revalidate: 1800 },
          signal: controller.signal,
        }
      ),
      fetch(
        `https://json.commudle.com/api/v2/communities/public_show?community_id=${COMMUDLE_COMMUNITY_SLUG}`,
        {
          headers: { "User-Agent": "FORGE-Website-Sync/1.0" },
          next: { revalidate: 1800 },
          signal: controller.signal,
        }
      ),
    ]);

    clearTimeout(timeoutId);

    let rawEvents: CommudleRawEvent[] = [];
    if (eventsRes.status === "fulfilled" && eventsRes.value.ok) {
      const data = await eventsRes.value.json();
      if (data?.data?.values && Array.isArray(data.data.values)) {
        rawEvents = data.data.values;
      }
    }

    let stats: CommudleCommunityStats = FALLBACK_COMMUNITY_STATS;
    if (statsRes.status === "fulfilled" && statsRes.value.ok) {
      const data = await statsRes.value.json();
      if (data?.data) {
        stats = {
          id: data.data.id || 184,
          name: data.data.name || "FORGE",
          slug: data.data.slug || COMMUDLE_COMMUNITY_SLUG,
          tagline: data.data.mini_description || "Where Curiosity Becomes Creation.",
          membersCount: data.data.members_count || 356,
          upcomingEventsCount: data.data.upcoming_events_count || 0,
          commudleUrl: COMMUDLE_COMMUNITY_URL,
        };
      }
    }

    if (rawEvents.length === 0) {
      return {
        events: FALLBACK_COMMUDLE_EVENTS,
        upcoming: FALLBACK_COMMUDLE_EVENTS.filter((e) => e.status === "upcoming"),
        past: FALLBACK_COMMUDLE_EVENTS.filter((e) => e.status === "past"),
        stats,
      };
    }

    const transformed = rawEvents.map(transformCommudleEvent);

    // Map any local high-res cached banners if match
    const withLocalImages = transformed.map((ev) => {
      if (ev.slug === "decode-the-machine") {
        return { ...ev, image: "/commudle-events/decode-the-machine.png" };
      }
      if (ev.slug === "from-foundations-to-frontiers") {
        return { ...ev, image: "/commudle-events/foundations-to-frontiers.png" };
      }
      if (ev.slug === "forging-the-ai-era") {
        return { ...ev, image: "/commudle-events/forging-the-ai-era.png" };
      }
      return ev;
    });

    const upcoming = withLocalImages.filter((e) => e.status === "upcoming");
    const past = withLocalImages.filter((e) => e.status === "past");

    return {
      events: withLocalImages,
      upcoming,
      past,
      stats,
    };
  } catch (error) {
    console.warn("Commudle sync error, serving fallback events:", error);
    return {
      events: FALLBACK_COMMUDLE_EVENTS,
      upcoming: FALLBACK_COMMUDLE_EVENTS.filter((e) => e.status === "upcoming"),
      past: FALLBACK_COMMUDLE_EVENTS.filter((e) => e.status === "past"),
      stats: FALLBACK_COMMUNITY_STATS,
    };
  }
}
