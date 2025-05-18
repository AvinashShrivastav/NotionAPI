import { NextResponse } from "next/server"
import { getAllResults } from "@/lib/results-store"

// This is a debug endpoint - remove in production
export async function GET() {
  // Only enable in development
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 })
  }

  const results = getAllResults()
  return NextResponse.json({ results })
}
