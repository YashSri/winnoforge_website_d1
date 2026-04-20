import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Varela_Round } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela",
});

export const metadata: Metadata = {
  title: "FORGE",
  description:
    "A student-led innovation ecosystem converting campuses into startup hubs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${varela.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
