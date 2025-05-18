import { type NextRequest, NextResponse } from "next/server"
import { getResult } from "@/lib/results-store"

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Result ID is required" }, { status: 400 })
    }

    const result = getResult(id)

    if (!result) {
      return NextResponse.json(
        {
          error: "Result not found or has expired",
          status: "not_found",
        },
        { status: 404 },
      )
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error in result API:", error)
    return NextResponse.json({ error: "Failed to fetch result" }, { status: 500 })
  }
}
