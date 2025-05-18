import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-gray-200">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-black flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="font-medium">NotionGen</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              How it works
            </Link>
            <Link href="#examples" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Examples
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/generator"
              className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  The AI generator that <br />
                  works for your Notion.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Describe what you want in plain English, and we'll generate and execute code to create it in your
                  Notion workspace.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="/generator"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Create Now
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Natural language to Notion pages</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Simply describe what you want, and our AI will handle the rest.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Natural Language Input</h3>
                  <p className="text-gray-500">
                    Describe your Notion page in plain English, just like you would to a colleague.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">AI Code Generation</h3>
                  <p className="text-gray-500">Google Gemini generates the code needed to create your Notion page.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Automatic Execution</h3>
                  <p className="text-gray-500">
                    The generated code is automatically executed to create your page in Notion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">How it works</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Three simple steps</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  From your description to a fully created Notion page in seconds.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-start space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Describe Your Page</h3>
                  <p className="text-gray-500">Enter a detailed description of the Notion page you want to create.</p>
                </div>
              </div>
              <div className="flex flex-col justify-start space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">AI Generates Code</h3>
                  <p className="text-gray-500">
                    Our AI analyzes your request and generates the necessary code to create your page.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Page Created in Notion</h3>
                  <p className="text-gray-500">
                    The code is executed and your page is created in your Notion workspace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="examples" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Examples</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What you can create</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Here are some examples of what you can build with NotionGen.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Project Tracker</h3>
                  <p className="text-gray-500">
                    "Create a project tracker with columns for task name, status, priority, due date, and assignee."
                  </p>
                </div>
                <div className="mt-4 rounded-lg border bg-gray-50 p-4">
                  <pre className="text-sm text-gray-700 overflow-auto">
                    <code>
                      {`// Generated code will create a Notion database
// with properties for task tracking`}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Meeting Notes Template</h3>
                  <p className="text-gray-500">
                    "Create a meeting notes template with sections for attendees, agenda, discussion points, and action
                    items."
                  </p>
                </div>
                <div className="mt-4 rounded-lg border bg-gray-50 p-4">
                  <pre className="text-sm text-gray-700 overflow-auto">
                    <code>
                      {`// Generated code will create a Notion page
// with blocks for meeting notes structure`}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Content Calendar</h3>
                  <p className="text-gray-500">
                    "Create a content calendar with dates, content types, status, and publishing platforms."
                  </p>
                </div>
                <div className="mt-4 rounded-lg border bg-gray-50 p-4">
                  <pre className="text-sm text-gray-700 overflow-auto">
                    <code>
                      {`// Generated code will create a Notion database
// with properties for content planning`}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Weekly Planner</h3>
                  <p className="text-gray-500">
                    "Create a weekly planner with days of the week, time blocks, and task categories."
                  </p>
                </div>
                <div className="mt-4 rounded-lg border bg-gray-50 p-4">
                  <pre className="text-sm text-gray-700 overflow-auto">
                    <code>
                      {`// Generated code will create a Notion page
// with a structured weekly schedule`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="/generator"
                className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 py-2 text-sm font-medium text-white hover:bg-gray-800"
              >
                Create Your Own <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to transform how you use Notion?
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Start creating Notion pages with natural language today.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="/generator"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-black flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="font-medium">NotionGen</span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} NotionGen. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
