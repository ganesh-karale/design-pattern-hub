"use client"

import { useDesignPattern } from "@/store/design-pattern-context"
import { patterns, languages } from "@/data/design-patterns"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PatternSelector() {
  const { selectedPattern, selectedLanguage, setSelectedPattern, setSelectedLanguage } =
    useDesignPattern()

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="bg-card/60 backdrop-blur border border-border/50 rounded-2xl shadow p-6 flex flex-col gap-4">
        <label htmlFor="pattern-select" className="text-lg font-semibold text-foreground">
          Design Pattern
        </label>
        <Select
          value={selectedPattern?.id}
          onValueChange={(value) => {
            const pattern = patterns.find((p) => p.id === value)
            setSelectedPattern(pattern ?? null)
          }}
        >
          <SelectTrigger id="pattern-select" className="w-full h-12 rounded-lg border border-accent shadow focus:ring-2 focus:ring-accent focus:border-accent transition-all text-base">
            <SelectValue placeholder="Select a pattern" />
          </SelectTrigger>
          <SelectContent className="rounded-lg shadow-lg border border-accent bg-background">
            {patterns.map((pattern) => (
              <SelectItem key={pattern.id} value={pattern.id} className="py-3 px-4 text-base hover:bg-accent/20 rounded-md cursor-pointer">
                {pattern.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {selectedPattern && (
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            {selectedPattern.description}
          </p>
        )}
      </div>

      <div className="bg-card/60 backdrop-blur border border-border/50 rounded-2xl shadow p-6 flex flex-col gap-4">
        <label htmlFor="language-select" className="text-lg font-semibold text-foreground">
          Programming Language
        </label>
        <Select
          value={selectedLanguage?.id}
          onValueChange={(value) => {
            const language = languages.find((l) => l.id === value)
            setSelectedLanguage(language ?? null)
          }}
        >
          <SelectTrigger id="language-select" className="w-full h-12 rounded-lg border border-accent shadow focus:ring-2 focus:ring-accent focus:border-accent transition-all text-base">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent className="rounded-lg shadow-lg border border-accent bg-background">
            {languages.map((language) => (
              <SelectItem key={language.id} value={language.id} className="py-3 px-4 text-base hover:bg-accent/20 rounded-md cursor-pointer">
                {language.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
