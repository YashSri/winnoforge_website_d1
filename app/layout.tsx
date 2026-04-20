import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FORGE",
  description: "A student-led innovation ecosystem converting campuses into startup hubs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
