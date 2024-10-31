'use client'

import { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useTheme } from "next-themes"
import { useIsDarkMode } from '@/hooks'

export default function AnotherHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const { isDarkMode} = useIsDarkMode();

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const symbols = ['₿', '€', '$', '£', '¥']
    const particles: Particle[] = []

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      symbol: string

      constructor() {
        this.x = Math.random() * (canvas?.width ?? 0)
        this.y = Math.random() * (canvas?.height ?? 0)
        this.size = Math.random() * 20 + 10
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (!canvas) return
        if (this.x > canvas?.width) this.x = 0
        if (this.x < 0) this.x = canvas?.width
        if (this.y > canvas?.height) this.y = 0
        if (this.y < 0) this.y = canvas?.height
      }

      draw(isDarkMode: boolean) {
        if (!ctx) return
        ctx.font = `${this.size}px Arial`
        ctx.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
        ctx.textAlign = 'center'
        ctx.fillText(this.symbol, this.x, this.y)
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const particle of particles) {
        particle.update()
        particle.draw(isDarkMode)
      }
      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [isDarkMode])

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
          David Hanlon
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8">
        Full Stack Engineer, Entrepreneur, & Blockchain Enthusiast
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Work with Me</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}