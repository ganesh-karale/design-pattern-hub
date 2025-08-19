"use client"

import { useDesignPattern } from "@/store/design-pattern-context"
import { implementations } from "@/data/design-patterns"
import { CopyIcon, CheckIcon } from "lucide-react"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export function CodeDisplay() {
  const { selectedPattern, selectedLanguage } = useDesignPattern()
  const [copied, setCopied] = useState(false)

  if (!selectedPattern || !selectedLanguage) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center text-muted-foreground shadow">
        <span className="text-lg font-medium">
          Select a pattern and language to view the implementation
        </span>
      </div>
    )
  }

  const code =
    implementations[selectedPattern.id as keyof typeof implementations][
      selectedLanguage.id as "python" | "typescript" | "java" | "go"
    ]

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between p-6 border-b border-border/50">
        <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {selectedPattern.name} in {selectedLanguage.name}
        </h2>
        <button
          className="px-4 py-2 hover:bg-accent/10 rounded-lg inline-flex items-center gap-2 text-sm border border-border/50 transition-colors bg-background/50 backdrop-blur"
          onClick={copyToClipboard}
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4 text-green-500" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="h-4 w-4" />
              <span>Copy code</span>
            </>
          )}
        </button>
      </div>
      <div className="p-6 overflow-auto bg-background/50 backdrop-blur rounded-b-2xl">
        <SyntaxHighlighter
          language={selectedLanguage.id}
          style={oneDark}
          customStyle={{
            background: "transparent",
            padding: 0,
            margin: 0,
            fontSize: "1rem",
            borderRadius: "0.75rem",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
