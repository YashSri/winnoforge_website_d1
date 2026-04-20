import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function PATCH(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        // First get the current status
        const { data: cert, error: fetchError } = await supabase
            .from("certificates")
            .select("is_revoked")
            .eq("id", id)
            .single();

        if (fetchError || !cert) {
            return NextResponse.json(
                { error: "Certificate not found" },
                { status: 404 }
            );
        }

        const newValue = cert.is_revoked === 0 ? 1 : 0;

        const { data: updatedCert, error: updateError } = await supabase
            .from("certificates")
            .update({ is_revoked: newValue })
            .eq("id", id)
            .select()
            .single();

        if (updateError) {
            throw updateError;
        }

        return NextResponse.json({ certificate: updatedCert });
    } catch (error) {
        console.error("Revoke error:", error);
        return NextResponse.json(
            { error: "Failed to toggle revocation" },
            { status: 500 }
        );
    }
}
