"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Pattern = {
  id: string
  name: string
  description: string
}

type Language = {
  id: string
  name: string
  extension: string
}

interface DesignPatternContextType {
  selectedPattern: Pattern | null
  selectedLanguage: Language | null
  setSelectedPattern: (pattern: Pattern | null) => void
  setSelectedLanguage: (language: Language | null) => void
}

const DesignPatternContext = createContext<DesignPatternContextType | undefined>(undefined)

export function DesignPatternProvider({ children }: { children: ReactNode }) {
  const [selectedPattern, setSelectedPattern] = useState<Pattern | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null)

  return (
    <DesignPatternContext.Provider
      value={{
        selectedPattern,
        selectedLanguage,
        setSelectedPattern,
        setSelectedLanguage,
      }}
    >
      {children}
    </DesignPatternContext.Provider>
  )
}

export function useDesignPattern() {
  const context = useContext(DesignPatternContext)
  if (context === undefined) {
    throw new Error("useDesignPattern must be used within a DesignPatternProvider")
  }
  return context
}
