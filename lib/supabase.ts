import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("⚠️ Missing Supabase environment variables. Please check your .env.local file.");
}

export const supabase = createClient(
    supabaseUrl || "https://placeholder-url.supabase.co",
    supabaseAnonKey || "placeholder-key"
);

export type Certificate = {
    id: string;
    name: string;
    email: string | null;
    event_name: string;
    issue_date: string;
    verification_token: string;
    is_revoked: number;
    created_at: string;
};
