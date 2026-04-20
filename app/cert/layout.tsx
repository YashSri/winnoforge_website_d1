import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Certificate Verification System",
    description: "Issue, manage, and verify digital certificates with QR codes and secure tokens.",
};

export default function CertLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="cert-app font-sans antialiased text-gray-900 bg-gray-50 min-h-screen">
            {children}
        </div>
    );
}
