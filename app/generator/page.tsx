"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function GeneratorPage() {
  const router = useRouter()
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!prompt.trim()) {
      setError("Please enter a description")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to generate Notion page")
      }

      const data = await response.json()
      router.push(`/generator/result?id=${data.id}`)
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container max-w-4xl py-12">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create Your Notion Page</CardTitle>
          <CardDescription>Describe what you want to create in your Notion workspace in detail.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full gap-4">
              <Textarea
                placeholder="E.g., Create a project tracker with columns for task name, status, priority, due date, and assignee."
                className="min-h-[200px]"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => setPrompt("")}>
              Clear
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Notion Page"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Example prompts:</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            className="cursor-pointer hover:bg-gray-50"
            onClick={() =>
              setPrompt(
                "Create a project tracker with columns for task name, status, priority, due date, and assignee.",
              )
            }
          >
            <CardHeader>
              <CardTitle className="text-base">Project Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Create a project tracker with columns for task name, status, priority, due date, and assignee.
              </p>
            </CardContent>
          </Card>
          <Card
            className="cursor-pointer hover:bg-gray-50"
            onClick={() =>
              setPrompt(
                "Create a meeting notes template with sections for attendees, agenda, discussion points, and action items.",
              )
            }
          >
            <CardHeader>
              <CardTitle className="text-base">Meeting Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Create a meeting notes template with sections for attendees, agenda, discussion points, and action
                items.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
