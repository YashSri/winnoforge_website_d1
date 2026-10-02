import { NextResponse } from "next/server";
import { getCommudleEvents } from "@/lib/commudle";

export const revalidate = 1800; // Cache for 30 minutes (ISR)

export async function GET() {
  try {
    const data = await getCommudleEvents();

    return NextResponse.json(
      {
        success: true,
        source: "commudle",
        syncedAt: new Date().toISOString(),
        ...data,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    console.error("Failed to sync Commudle events:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch Commudle events",
      },
      { status: 500 }
    );
  }
}
