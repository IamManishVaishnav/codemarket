"use client"

import { useEffect, useRef } from "react"

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Grid properties
    const gridSize = 40
    const dotSize = 1

    // Animation properties
    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          // Calculate wave effect
          const distX = (x - canvas.width / 2) / canvas.width
          const distY = (y - canvas.height / 2) / canvas.height
          const dist = Math.sqrt(distX * distX + distY * distY)

          // Pulse effect
          const pulse = Math.sin(time * 0.5 + dist * 5) * 0.5 + 0.5

          // Draw dot
          ctx.beginPath()
          ctx.arc(x, y, dotSize * pulse, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 229, 255, ${0.1 + pulse * 0.2})`
          ctx.fill()

          // Draw connecting lines with varying opacity
          if (x < canvas.width - gridSize && y < canvas.height - gridSize) {
            // Horizontal line
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + gridSize, y)
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.05 * pulse})`
            ctx.stroke()

            // Vertical line
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x, y + gridSize)
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.05 * pulse})`
            ctx.stroke()
          }
        }
      }

      time += 0.01
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-30"
      style={{ background: "linear-gradient(to bottom, #0a0b1a, #0f1a2b)" }}
    />
  )
}

