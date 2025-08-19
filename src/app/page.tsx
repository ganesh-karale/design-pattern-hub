import { DesignPatternProvider } from "@/store/design-pattern-context"
import { PatternSelector } from "@/components/pattern-selector"
import { CodeDisplay } from "@/components/code-display"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <DesignPatternProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="bg-card/50 backdrop-blur border border-border/50 rounded-3xl p-8 shadow-lg">
              <div className="space-y-8">
                <PatternSelector />
                <CodeDisplay />
              </div>
            </div>
          </div>
        </main>
      </div>
    </DesignPatternProvider>
  )
}
