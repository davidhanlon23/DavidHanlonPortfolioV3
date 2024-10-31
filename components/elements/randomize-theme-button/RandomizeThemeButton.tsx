"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/ui"
import { Paintbrush } from "lucide-react"

const themes = [
  "zinc",
  "slate",
  "stone",
  "gray",
  "neutral",
  "red",
  "rose",
  "orange",
  "green",
  "blue",
  "yellow",
  "violet",
]

export default function RandomThemeButton() {
  const { setTheme } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)

  const randomizeTheme = () => {
    setIsAnimating(true)
    const randomTheme = themes[Math.floor(Math.random() * themes.length)]
    setTheme(randomTheme)
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  return (
    <Button
      onClick={randomizeTheme}
      className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
        isAnimating ? "animate-wiggle" : ""
      }`}
      aria-label="Randomize theme"
    >
      <span className="relative z-10 flex items-center gap-2">
        <Paintbrush className="h-4 w-4" />
      </span>
      <span
        className={`absolute inset-0 z-0 bg-gradient-to-r from-violet-500 via-pink-500 to-red-500 opacity-0 transition-opacity duration-300 ${
          isAnimating ? "animate-gradient-x opacity-50" : ""
        }`}
      ></span>
    </Button>
  )
}