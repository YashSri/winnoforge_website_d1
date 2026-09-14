import Image from "next/image";
import TextVisualSplit from "@/components/shared/TextVisualSplit";

export default function IntroWinnovation() {
  return (
    <TextVisualSplit
      eyebrow="Who We Are"
      heading="Introduction to Winnovation"
      body="Winnovation is the organization behind FORGE — built to close the gap between what students learn in a classroom and what it actually takes to build something real. We work with institutions, industry, and student builders to turn campuses into execution hubs, not just lecture halls."
      cta={{ label: "About & Ecosystem", href: "/ecosystem" }}
      visual={
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-primary/5">
          <Image
            src="/forge-logo.svg"
            alt="Winnovation"
            fill
            className="object-contain p-16"
          />
        </div>
      }
    />
  );
}
