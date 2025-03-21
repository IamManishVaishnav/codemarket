"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
  decreasing: boolean
}

export default function ParticleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const animationRef = useRef<number>(null)
  const { theme } = useTheme()

  // Initialize particles
  useEffect(() => {
    const initialParticles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      initialParticles.push(createParticle(window.innerWidth / 2, window.innerHeight / 2))
    }
    setParticles(initialParticles)

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Add new particles on mouse move
      if (Math.random() > 0.5) {
        setParticles((prev) => {
          const newParticles = [...prev]
          if (newParticles.length > 100) {
            newParticles.shift() // Remove oldest particle if we have too many
          }
          newParticles.push(createParticle(e.clientX, e.clientY))
          return newParticles
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

      const updatedParticles = particles
        .map((particle) => {
          // Update position
          particle.x += particle.speedX
          particle.y += particle.speedY

          // Update alpha (fade in/out)
          if (particle.decreasing) {
            particle.alpha -= 0.01
            if (particle.alpha <= 0.1) {
              particle.decreasing = false
            }
          } else {
            particle.alpha += 0.01
            if (particle.alpha >= 0.7) {
              particle.decreasing = true
            }
          }

          // Draw particle
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = `${particle.color}${Math.floor(particle.alpha * 255)
            .toString(16)
            .padStart(2, "0")}`
          ctx.fill()

          return particle
        })
        .filter((particle) => {
          // Remove particles that are off screen
          return (
            particle.x > 0 &&
            particle.x < canvasRef.current.width &&
            particle.y > 0 &&
            particle.y < canvasRef.current.height
          )
        })

      setParticles(updatedParticles)
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particles])

  function createParticle(x: number, y: number): Particle {
    // Web3 color palette
    const colors = [
      "#00e5ff", // cyan
      "#2979ff", // blue
      "#651fff", // purple
      "#00b8d4", // light blue
      "#00bfa5", // teal
    ]

    return {
      x,
      y,
      size: Math.random() * 5 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.1,
      decreasing: Math.random() > 0.5,
    }
  }

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" style={{ opacity: 0.7 }} />
}

