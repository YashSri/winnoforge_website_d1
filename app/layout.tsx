import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Varela_Round, Poppins } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/modal/ModalContext";
import FormModal from "@/components/modal/FormModal";
import { SITE_URL } from "@/lib/site-config";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta-loaded",
  display: "swap",
});

const varela = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-varela-loaded",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FORGE — Industry-Aligned Learning, Innovation & Execution",
  description:
    "Winnovation FORGE brings together practical learning, industry-aligned certification programs, mentors, student projects, campus communities, and innovation infrastructure to help learners build real capability.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "FORGE — Industry-Aligned Learning, Innovation & Execution",
    description:
      "Winnovation FORGE brings together practical learning, industry-aligned certification programs, mentors, student projects, campus communities, and innovation infrastructure to help learners build real capability.",
    images: ["/forge-logo.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FORGE — Industry-Aligned Learning, Innovation & Execution",
    description:
      "Winnovation FORGE brings together practical learning, industry-aligned certification programs, mentors, student projects, campus communities, and innovation infrastructure to help learners build real capability.",
    images: ["/forge-logo.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${varela.variable} ${poppins.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground overflow-x-hidden">
        <ModalProvider>
          {children}
          <FormModal />
        </ModalProvider>
      </body>
    </html>
  );
}
