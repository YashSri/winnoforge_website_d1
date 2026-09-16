import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Mentors & Experts | FORGE",
  description:
    "Meet FORGE's mentors and experts, and explore how practitioners, educators, founders, and industry professionals contribute through workshops, project reviews, and mentorship.",
  path: "/mentors",
});

export default function MentorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
