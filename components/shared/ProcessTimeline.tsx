export interface TimelineStep {
  title: string;
  description: string;
}

export default function ProcessTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-4">
      {steps.map((step, i) => (
        <div key={step.title} className="flex flex-1 gap-4 md:flex-col md:gap-3">
          <div className="flex flex-col items-center md:w-full">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-jakarta text-sm font-bold text-white">
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className="mt-2 w-px flex-1 bg-primary/20 md:mt-0 md:h-px md:w-full md:flex-none md:translate-y-5" />
            )}
          </div>
          <div className="pb-8 md:pb-0 md:pt-2 md:text-center">
            <h3 className="font-jakarta text-base font-semibold text-foreground">{step.title}</h3>
            <p className="mt-1.5 font-jakarta text-sm leading-relaxed text-foreground/65">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
