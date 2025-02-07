"use client"

import { useState } from "react"

export default function Demo() {
  const [code, setCode] = useState("")
  const [output, setOutput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a simple demo. In a real application, you'd send this to a backend for processing.
    setOutput(`AI analysis complete. Optimized code:\n\n${code}\n\n// Code optimized for performance and readability`)
  }

  return (
    <section id="demo" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">visit Demo</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your code for AI analysis:
              </label>
              <textarea
                id="code"
                rows={5}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                placeholder="Paste your code here..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Analyze power
            </button>
          </form>
          {output && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">AI Output:</h3>
              <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto">{output}</pre>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

