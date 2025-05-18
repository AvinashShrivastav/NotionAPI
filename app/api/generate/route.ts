import { type NextRequest, NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { setResult, updateResult } from "@/lib/results-store"

// Initialize Google Generative AI with API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    // Generate a unique ID for this request
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

    // Initialize the result with processing status
    setResult(id, { id, status: "processing" })

    // Start the generation process asynchronously
    generateNotionPage(id, prompt).catch((error) => {
      console.error("Unhandled error in generateNotionPage:", error)
      updateResult(id, {
        status: "failed",
        error: "An unexpected error occurred during processing",
      })
    })

    // Return immediately with the ID
    return NextResponse.json({ id })
  } catch (error) {
    console.error("Error in generate API:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}

// This function runs asynchronously after the response is sent
async function generateNotionPage(id: string, prompt: string) {
  try {
    // Construct a prompt for Gemini to generate Notion API code
    const geminiPrompt = `
      You are an expert in the Notion API. Generate JavaScript code that creates a Notion page or database based on this description:
      
      "${prompt}"
      
      The code should:
      1. Use the Notion API client for Node.js
      2. Create the page or database in the user's workspace
      3. Include all necessary properties, content blocks, and structure
      4. Return the URL of the created page
      5. Handle errors appropriately
      6. Only include the code, no explanations
      
      Use these environment variables that are already set:
      - NOTION_API_KEY: The API key for authentication
      - NOTION_DATABASE_ID: The parent database ID where the page should be created
      
      The code will be executed directly, so make it production-ready.
    `

    // Generate code with Gemini
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })
    const result = await model.generateContent(geminiPrompt)
    const generatedCode = result.response.text()

    // Update the result with the generated code
    updateResult(id, {
      code: generatedCode,
    })

    try {
      // Execute the generated code
      const executeFunction = new Function(`
        return async function executeGeneratedCode() {
          const { Client } = require('@notionhq/client');
          const notion = new Client({ auth: process.env.NOTION_API_KEY });
          
          ${generatedCode}
        }
      `)()

      const notionResult = await executeFunction()

      // Update with the successful result
      updateResult(id, {
        status: "completed",
        notionUrl: notionResult?.url || "https://notion.so", // Fallback URL if not returned
      })
    } catch (execError) {
      console.error("Error executing generated code:", execError)

      // Update with the execution error
      updateResult(id, {
        status: "failed",
        error: `Error executing code: ${execError.message}`,
      })
    }
  } catch (genError) {
    console.error("Error generating code:", genError)

    // Update with the generation error
    updateResult(id, {
      status: "failed",
      error: `Error generating code: ${genError.message}`,
    })
  }
}
