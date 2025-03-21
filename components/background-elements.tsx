"use client"

import { useEffect, useState } from "react"

export default function BackgroundElements() {
  const [elements, setElements] = useState([])

  useEffect(() => {
    // Create random background elements
    const hexagons = Array.from({ length: 5 }, (_, i) => ({
      id: `hexagon-${i}`,
      type: "hexagon",
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 150 + Math.random() * 200,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
    }))

    const circles = Array.from({ length: 8 }, (_, i) => ({
      id: `circle-${i}`,
      type: "circle",
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 100 + Math.random() * 300,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }))

    setElements([...hexagons, ...circles])
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {elements.map((el) => {
        if (el.type === "hexagon") {
          return (
            <div
              key={el.id}
              className="bg-hexagon"
              style={{
                top: el.top,
                left: el.left,
                width: `${el.size}px`,
                height: `${el.size}px`,
                animationDelay: `${el.delay}s`,
                animationDuration: `${el.duration}s`,
              }}
            />
          )
        } else {
          return (
            <div
              key={el.id}
              className="bg-circle"
              style={{
                top: el.top,
                left: el.left,
                width: `${el.size}px`,
                height: `${el.size}px`,
                animationDelay: `${el.delay}s`,
                animationDuration: `${el.duration}s`,
              }}
            />
          )
        }
      })}
    </div>
  )
}

