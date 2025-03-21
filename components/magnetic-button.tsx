"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"

interface MagneticButtonProps extends ButtonProps {
  children: ReactNode
  strength?: number
}

export default function MagneticButton({ children, strength = 30, ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Calculate distance from center (0 to 1)
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    const maxDistance = Math.sqrt((rect.width / 2) * (rect.width / 2) + (rect.height / 2) * (rect.height / 2))
    const distanceRatio = Math.min(distance / maxDistance, 1)

    // Apply magnetic effect (stronger when closer to center)
    const moveX = distanceX * (1 - distanceRatio) * (strength / 100)
    const moveY = distanceY * (1 - distanceRatio) * (strength / 100)

    setPosition({ x: moveX, y: moveY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <Button
      ref={buttonRef}
      className="magnetic-button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

