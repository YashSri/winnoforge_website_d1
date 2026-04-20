import { type NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get("limit") || "10", 10)),
    );
    const offset = (page - 1) * limit;

    const {
      data: certificates,
      error,
      count: total,
    } = await supabase
      .from("certificates")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      throw error;
    }

    return NextResponse.json({
      certificates: certificates || [],
      total: total || 0,
      page,
      limit,
      totalPages: Math.ceil((total || 0) / limit),
    });
  } catch (error) {
    console.error("List error:", error);
    return NextResponse.json(
      { error: "Failed to fetch certificates" },
      { status: 500 },
    );
  }
}
