"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-20 w-full bg-card/80 backdrop-blur border-b border-border/50 shadow-sm">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Design Pattern Hub
          </div>
          <button
            className="p-2.5 rounded-lg border border-border/50 bg-background/50 backdrop-blur hover:bg-accent/10 transition-all"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-blue-600" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
