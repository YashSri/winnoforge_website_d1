import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/components/modal/ModalContext";
import FormModal from "@/components/modal/FormModal";

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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground overflow-x-hidden">
        <ModalProvider>
          {children}
          <FormModal />
        </ModalProvider>
      </body>
    </html>
  );
}
