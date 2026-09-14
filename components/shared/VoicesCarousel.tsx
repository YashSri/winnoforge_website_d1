"use client";

import { Quote } from "lucide-react";

export interface Voice {
  quote: string;
  name: string;
  designation: string;
  org: string;
  photoSrc?: string;
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

function VoiceCard({ voice }: { voice: Voice }) {
  return (
    <div className="flex w-[85vw] max-w-sm shrink-0 snap-start flex-col gap-6 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(24,42,72,0.08)] sm:w-[380px]">
      <Quote className="h-8 w-8 text-primary/60" fill="currentColor" strokeWidth={0} />
      <p className="font-clash text-xl font-medium leading-snug text-foreground">
        &ldquo;{voice.quote}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-4">
        {voice.photoSrc ? (
          <img
            src={voice.photoSrc}
            alt={voice.name}
            className="h-12 w-12 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-jakarta text-sm font-semibold text-primary">
            {initials(voice.name)}
          </div>
        )}
        <div className="flex flex-col">
          <span className="font-jakarta text-sm font-semibold text-foreground">
            {voice.name}
          </span>
          <span className="font-jakarta text-xs text-foreground/60">
            {voice.designation}, {voice.org}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function VoicesCarousel({
  title,
  voices,
}: {
  title: string;
  voices: Voice[];
}) {
  if (voices.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <h2 className="font-clash text-3xl font-semibold text-foreground md:text-4xl">
        {title}
      </h2>
      <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
        {voices.map((voice, i) => (
          <VoiceCard key={`${voice.name}-${i}`} voice={voice} />
        ))}
      </div>
    </section>
  );
}
