import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Collaborate With FORGE | Institutions, Industry & Mentors",
  description:
    "Partner with FORGE as an institution, industry organisation, mentor, or strategic partner to build industry-aligned learning, innovation, and execution experiences.",
  path: "/collaborate",
});

export default function CollaborateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
