'use client'

import React, { useRef, useEffect, useState } from 'react'

interface Star {
  x: number
  y: number
  z: number
  pz: number
}

export default function LiveHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

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
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
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
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`
        ctx.arc(x, y, size, 0, 2 * Math.PI)
        ctx.fill()

        star.pz = star.z
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [dimensions])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Galaxy</h1>
        <p className="text-xl">Explore the wonders of the universe</p>
      </div>
    </div>
  )
}