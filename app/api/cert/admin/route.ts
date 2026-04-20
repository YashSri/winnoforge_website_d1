import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
    try {
        const { count: total } = await supabase.from("certificates").select("*", { count: "exact", head: true });
        const { count: active } = await supabase.from("certificates").select("*", { count: "exact", head: true }).eq("is_revoked", 0);
        const { count: revoked } = await supabase.from("certificates").select("*", { count: "exact", head: true }).eq("is_revoked", 1);

        // For distinct events, fetch all and filter unique
        const { data: eventData } = await supabase.from("certificates").select("event_name");
        const uniqueEvents = [...new Set((eventData || []).map(r => r.event_name))].sort();

        const { data: emailData } = await supabase.from("certificates").select("email").neq("email", null).neq("email", "");
        const uniqueEmails = [...new Set((emailData || []).map(r => r.email))];

        const stats = {
            totalCertificates: total || 0,
            activeCertificates: active || 0,
            revokedCertificates: revoked || 0,
            distinctEvents: uniqueEvents.length,
            distinctEmails: uniqueEmails.length,
            dbSizeBytes: 0, // Not applicable for external Supabase without RPC
        };

        return NextResponse.json({ stats, events: uniqueEvents });
    } catch (error) {
        console.error("Stats error:", error);
        return NextResponse.json({ error: "Failed to get stats" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { action, eventName } = body;

        switch (action) {
            case "clear_all": {
                const { error, count } = await supabase.from("certificates").delete().neq("id", "00000000-0000-0000-0000-000000000000"); // Hack to delete all
                if (error) throw error;
                return NextResponse.json({ message: `Deleted all certificates` });
            }
            case "drop_db": {
                const { error } = await supabase.from("certificates").delete().neq("id", "00000000-0000-0000-0000-000000000000");
                if (error) throw error;
                return NextResponse.json({ message: "Database entries cleared" });
            }
            case "revoke_all": {
                const { error } = await supabase.from("certificates").update({ is_revoked: 1 }).eq("is_revoked", 0);
                if (error) throw error;
                return NextResponse.json({ message: `Revoked all active certificates` });
            }
            case "restore_all": {
                const { error } = await supabase.from("certificates").update({ is_revoked: 0 }).eq("is_revoked", 1);
                if (error) throw error;
                return NextResponse.json({ message: `Restored all revoked certificates` });
            }
            case "delete_event": {
                if (!eventName) {
                    return NextResponse.json({ error: "eventName is required" }, { status: 400 });
                }
                const { error } = await supabase.from("certificates").delete().eq("event_name", eventName);
                if (error) throw error;
                return NextResponse.json({ message: `Deleted certificates for event "${eventName}"` });
            }
            default:
                return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
        }
    } catch (error) {
        console.error("Admin action error:", error);
        return NextResponse.json({ error: "Failed to execute action" }, { status: 500 });
    }
}
