import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ token: string }> }
) {
    try {
        const { token } = await params;

        if (!token || token.length !== 64) {
            return NextResponse.json(
                {
                    valid: false,
                    error: "Invalid token format",
                    verifiedAt: new Date().toISOString(),
                },
                { status: 400 }
            );
        }

        const { data: cert, error } = await supabase
            .from("certificates")
            .select("*")
            .eq("verification_token", token)
            .single();

        if (error || !cert || cert.is_revoked === 1) {
            return NextResponse.json({
                valid: false,
                error: cert?.is_revoked === 1 ? "Certificate has been revoked" : "Certificate not found",
                verifiedAt: new Date().toISOString(),
            });
        }

        return NextResponse.json({
            valid: true,
            certificate: {
                name: cert.name,
                event_name: cert.event_name,
                issue_date: cert.issue_date,
                created_at: cert.created_at,
            },
            verifiedAt: new Date().toISOString(),
        });
    } catch (error) {
        console.error("Verify error:", error);
        return NextResponse.json(
            { valid: false, error: "Verification failed" },
            { status: 500 }
        );
    }
}
