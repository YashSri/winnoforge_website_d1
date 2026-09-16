"use client";

export interface Tab {
  key: string;
  label: string;
}

export default function TabSwitch({
  tabs,
  active,
  onChange,
}: {
  tabs: Tab[];
  active: string;
  onChange: (key: string) => void;
}) {
  return (
    <div
      role="tablist"
      className="inline-flex flex-wrap items-center gap-1 rounded-full border border-black/5 bg-white p-1.5 shadow-[0_18px_40px_rgba(24,42,72,0.08)]"
    >
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          role="tab"
          aria-selected={active === tab.key}
          onClick={() => onChange(tab.key)}
          className={`rounded-full px-5 py-2 font-jakarta text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            active === tab.key
              ? "bg-primary text-white shadow-[0_8px_18px_rgba(77,150,255,0.28)]"
              : "text-foreground/60 hover:text-primary"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
