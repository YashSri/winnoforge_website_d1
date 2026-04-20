import crypto from "node:crypto";
import { type NextRequest, NextResponse } from "next/server";
import Papa from "papaparse";
import { type Certificate, supabase } from "@/lib/supabase";

interface CsvRow {
  name: string;
  email: string;
  event_name: string;
  issue_date: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    if (!file.name.endsWith(".csv")) {
      return NextResponse.json(
        { error: "Only CSV files are allowed" },
        { status: 400 },
      );
    }

    const text = await file.text();
    const { data, errors } = Papa.parse<CsvRow>(text, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (h: string) =>
        h.trim().toLowerCase().replace(/\s+/g, "_"),
    });

    if (errors.length > 0) {
      return NextResponse.json(
        { error: "CSV parsing errors", details: errors },
        { status: 400 },
      );
    }

    const inserted: Certificate[] = [];
    const skipped: { row: CsvRow; reason: string }[] = [];

    for (const row of data) {
      // Validate required fields
      if (!row.name || !row.event_name || !row.issue_date) {
        skipped.push({
          row,
          reason: "Missing required fields (name, event_name, or issue_date)",
        });
        continue;
      }

      const email = (row.email || "").trim();
      const event_name = row.event_name.trim();

      // Check for duplicate email + event combination if email is provided
      if (email) {
        const { data: existing } = await supabase
          .from("certificates")
          .select("id")
          .eq("email", email)
          .eq("event_name", event_name)
          .single();

        if (existing) {
          skipped.push({
            row,
            reason: `Duplicate: ${email} already has a certificate for ${event_name}`,
          });
          continue;
        }
      }

      const verification_token = crypto.randomBytes(32).toString("hex");

      const { data: cert, error: insertError } = await supabase
        .from("certificates")
        .insert({
          name: row.name.trim(),
          email: email,
          event_name: event_name,
          issue_date: row.issue_date.trim(),
          verification_token: verification_token,
        })
        .select()
        .single();

      if (insertError) {
        console.error("Failed to insert:", insertError);
        skipped.push({ row, reason: "Database error during insertion" });
        continue;
      }

      if (cert) inserted.push(cert);
    }

    return NextResponse.json({
      inserted: inserted.length,
      skipped: skipped.length,
      certificates: inserted,
      skippedDetails: skipped,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to process upload" },
      { status: 500 },
    );
  }
}
