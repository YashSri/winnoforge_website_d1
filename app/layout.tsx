import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Varela_Round } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/modal/ModalContext";
import FormModal from "@/components/modal/FormModal";

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${varela.variable}`}
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
