import Image from "next/image";
import TextVisualSplit from "@/components/shared/TextVisualSplit";

export default function LeadershipMilestonesSection() {
  return (
    <TextVisualSplit
      eyebrow="Our Story"
      heading="From a Campus Idea to a Student-Led Ecosystem"
      body="Winnovation started with a simple observation: campuses were full of talented students with nowhere to build. What began as a small student-led initiative has grown into a structured ecosystem spanning institutions, mentors, and industry partners — with a leadership team that's stayed hands-on with every cohort of builders since day one."
      visual={
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-primary/5">
          <Image
            src="/forge-logo.svg"
            alt="Winnovation leadership"
            fill
            className="object-contain p-16"
          />
        </div>
      }
    />
  );
}
