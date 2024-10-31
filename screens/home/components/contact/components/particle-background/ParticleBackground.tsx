'use client'
import { useEffect, useState } from 'react'

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<{
    top: number
    left: number
    width: number
    height: number
    animation: string
  }>>([])

  useEffect(() => {
    const newParticles = [...Array(50)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      width: Math.random() * 10 + 5,
      height: Math.random() * 10 + 5,
      animation: `float ${Math.random() * 10 + 5}s linear infinite`
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute bg-blue-500 rounded-full opacity-20"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            animation: particle.animation,
          }}
        />
      ))}
    </div>
  )
}

export default ParticleBackground