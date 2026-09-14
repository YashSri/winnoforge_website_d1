import TextVisualSplit from "@/components/shared/TextVisualSplit";
import EcosystemDiagram from "@/components/shared/EcosystemDiagram";

export default function IntroForge() {
  return (
    <TextVisualSplit
      eyebrow="The System"
      heading="Introduction to FORGE"
      body="FORGE is the execution engine: institutions provide the ground, students step up as builders, mentors keep the bar high, and industry brings problems worth solving. Explore how a builder moves through the system below."
      cta={{ label: "Explore FORGE", href: "/ecosystem" }}
      visual={<EcosystemDiagram />}
      reverse
    />
  );
}
