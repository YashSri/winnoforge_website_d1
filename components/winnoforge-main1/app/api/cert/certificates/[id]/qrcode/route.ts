import { NextResponse } from "next/server";
import QRCode from "qrcode";
import { supabase } from "@/lib/supabase";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const { data: cert, error } = await supabase
      .from("certificates")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !cert) {
      return NextResponse.json(
        { error: "Certificate not found" },
        { status: 404 },
      );
    }

    // Determine the base URL dynamically based on environment if needed, defaulting to host or localhost
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const url = `${baseUrl}/cert/verify/${cert.verification_token}`;

    const qrDataUrl = await QRCode.toDataURL(url, {
      width: 300,
      margin: 2,
      color: {
        dark: "#1a1a2e",
        light: "#ffffff",
      },
    });

    return NextResponse.json({ qrCode: qrDataUrl, url });
  } catch (error) {
    console.error("QR error:", error);
    return NextResponse.json(
      { error: "Failed to generate QR code" },
      { status: 500 },
    );
  }
}
