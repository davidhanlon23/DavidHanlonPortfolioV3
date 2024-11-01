'use client'
import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useIsDarkMode } from '@/hooks';
import { Button } from '@/ui';
interface Star {
  x: number
  y: number
  z: number
  pz: number
}

const LiveHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { isDarkMode } = useIsDarkMode();

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const stars: Star[] = []
    const numStars = 1000
    const centerX = dimensions.width / 2
    const centerY = dimensions.height / 2

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * dimensions.width - centerX,
        y: Math.random() * dimensions.height - centerY,
        z: Math.random() * dimensions.width,
        pz: 0,
      })
    }

    const animate = () => {
      ctx.fillStyle = isDarkMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.9)'
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      for (let star of stars) {
        star.z -= 0.2

        if (star.z <= 0) {
          star.z = dimensions.width
        }

        const x = (star.x / star.z) * 100 + centerX
        const y = (star.y / star.z) * 100 + centerY

        const size = (1 - star.z / dimensions.width) * 2
        const brightness = 1 - star.z / dimensions.width

        ctx.beginPath()
        ctx.fillStyle = isDarkMode ? `rgba(255, 255, 255, ${brightness})` : `rgba(0, 0, 0, ${brightness})`;

        ctx.arc(x, y, size, 0, 2 * Math.PI)
        ctx.fill()

        star.pz = star.z
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [dimensions])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="px-4 md:px-6 relative z-10 flex flex-col items-center justify-center h-full text-center">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                       Full Stack Engineer, Entrepreneur, & Blockchain Enthusiast
                      </h1>
                      <p className="mx-auto max-w-[700px]">
                        Together lets change the world                      
                      </p>
                    </div>
                    <div className="space-x-4">
                      <Button onClick={() => window.open('/Resume/DavidHanlonResume.pdf')}>Resume <ChevronRight className="ml-2 h-4 w-4" /></Button>
                      <Link href="#contact">
                        <Button variant="outline">Work with Me</Button>
                      </Link>
                    </div>
                  </div>
                </div>
    </section>
  )
}

export default LiveHero;
