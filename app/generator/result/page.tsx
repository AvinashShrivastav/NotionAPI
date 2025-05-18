"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Check, ExternalLink, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ResultData {
  id: string
  status: "processing" | "completed" | "failed"
  notionUrl?: string
  code?: string
  error?: string
}

export default function ResultPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const [result, setResult] = useState<ResultData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setError("No result ID provided. Please return to the generator page and try again.")
      setLoading(false)
      return
    }

    const fetchResult = async () => {
      try {
        const response = await fetch(`/api/result?id=${id}`)

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || "Failed to fetch result")
        }

        const data = await response.json()

        // Check if data is empty
        if (!data || Object.keys(data).length === 0) {
          throw new Error("Result not found. It may have expired or been removed.")
        }

        setResult(data)

        // If still processing, poll every 2 seconds
        if (data.status === "processing") {
          setTimeout(() => fetchResult(), 2000)
        } else {
          setLoading(false)
        }
      } catch (err) {
        console.error("Error fetching result:", err)
        setError(err instanceof Error ? err.message : "An unexpected error occurred")
        setLoading(false)
      }
    }

    fetchResult()
  }, [id])

  if (error) {
    return (
      <div className="container max-w-4xl py-12">
        <Link
          href="/generator"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to generator
        </Link>

        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-700">{error}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="/generator">Try Again</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  if (loading || !result || result.status === "processing") {
    return (
      <div className="container max-w-4xl py-12">
        <Link
          href="/generator"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to generator
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Processing Your Request</CardTitle>
            <CardDescription>We're generating and executing code to create your Notion page.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <Loader2 className="h-12 w-12 animate-spin text-gray-400" />
            <p className="mt-4 text-center text-gray-500">This may take a few moments...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (result.status === "failed") {
    return (
      <div className="container max-w-4xl py-12">
        <Link
          href="/generator"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to generator
        </Link>

        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">Generation Failed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-700">{result.error || "An error occurred while processing your request."}</p>
            {result.code && (
              <div className="mt-6">
                <h3 className="font-medium mb-2">Generated Code (with errors):</h3>
                <pre className="bg-white p-4 rounded border overflow-auto text-sm">{result.code}</pre>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="/generator">Try Again</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl py-12">
      <Link
        href="/generator"
        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to generator
      </Link>

      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-2xl text-green-700 flex items-center">
            <Check className="mr-2 h-5 w-5" />
            Success!
          </CardTitle>
          <CardDescription>Your Notion page has been created successfully.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-medium mb-2">Notion Page:</h3>
              <div className="bg-white p-4 rounded border flex justify-between items-center">
                <span className="text-sm truncate">{result.notionUrl}</span>
                <Button variant="outline" size="sm" asChild>
                  <a href={result.notionUrl} target="_blank" rel="noopener noreferrer">
                    Open in Notion
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {result.code && (
              <div>
                <h3 className="font-medium mb-2">Generated Code:</h3>
                <pre className="bg-white p-4 rounded border overflow-auto text-sm">{result.code}</pre>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/generator">Create Another</Link>
          </Button>
          {result.notionUrl && (
            <Button asChild>
              <a href={result.notionUrl} target="_blank" rel="noopener noreferrer">
                View in Notion
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
