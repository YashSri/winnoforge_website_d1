import { notFound } from "next/navigation";
import "../../cert.css";

interface VerifyResponse {
    valid: boolean;
    certificate?: {
        name: string;
        event_name: string;
        issue_date: string;
        created_at: string;
    };
    error?: string;
    verifiedAt: string;
}

// Ensure the fetch URL is absolute
async function verifyCertificate(token: string): Promise<VerifyResponse> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const url = `${baseUrl}/api/cert/verify/${token}`;

    const res = await fetch(url, {
        cache: "no-store",
    });

    return res.json();
}

export default async function VerifyPage({
    params,
}: {
    params: Promise<{ token: string }>;
}) {
    const { token } = await params;

    if (!token) {
        notFound();
    }

    const result = await verifyCertificate(token);

    if (result.valid && result.certificate) {
        const cert = result.certificate;
        const issueDate = new Date(cert.issue_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        return (
            <div className="verify-page">
                <div className="certificate-card fade-in-up">
                    <div className="cert-border-top" />

                    <div className="cert-content">
                        <div className="cert-logo">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <polyline points="9 12 11 14 15 10" />
                            </svg>
                        </div>

                        <p className="cert-label">Certificate of Completion</p>
                        <h1 className="cert-name">{cert.name}</h1>
                        <div className="cert-divider" />
                        <p className="cert-event-label">has successfully completed</p>
                        <h2 className="cert-event">{cert.event_name}</h2>
                        <p className="cert-date">Issued on {issueDate}</p>

                        <div className="verified-badge">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>VERIFIED</span>
                        </div>

                        <p className="cert-timestamp">
                            Verified at {new Date(result.verifiedAt).toLocaleString("en-US", {
                                dateStyle: "long",
                                timeStyle: "medium",
                            })}
                        </p>
                    </div>

                    <div className="cert-footer">
                        <div className="cert-footer-line" />
                        <p>Digitally Verified Certificate</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="verify-page verify-invalid">
            <div className="invalid-card fade-in-up">
                <div className="invalid-icon">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                </div>

                <h1 className="invalid-title">Invalid Certificate</h1>
                <p className="invalid-message">
                    {result.error || "This certificate could not be verified."}
                </p>
                <p className="invalid-hint">
                    The certificate may have been revoked or the verification link is incorrect.
                </p>

                <div className="invalid-timestamp">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>
                        Verification attempted at{" "}
                        {new Date(result.verifiedAt).toLocaleString("en-US", {
                            dateStyle: "long",
                            timeStyle: "medium",
                        })}
                    </span>
                </div>
            </div>
        </div>
    );
}
