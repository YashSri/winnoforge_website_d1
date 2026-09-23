"use client";

import FaqAccordion, { type FaqAccordionProps } from "./FaqAccordion";
import { type FaqItem } from "@/lib/faq-data";

export interface FAQSectionProps extends FaqAccordionProps {
  // Aliases and compatibility
}

export default function FAQSection(props: FAQSectionProps) {
  return <FaqAccordion {...props} />;
}

export { type FaqItem };
