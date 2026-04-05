"use client"

import { useEffect, useRef } from "react"
import confetti from "canvas-confetti"

export function KonamiCode() {
  const bufferRef = useRef<string[]>([])
  const sequence = [
    "arrowup",
    "arrowup",
    "arrowdown",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "arrowleft",
    "arrowright",
    "b",
    "a",
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      bufferRef.current = [...bufferRef.current, key].slice(-sequence.length)
      
      if (bufferRef.current.join(",") === sequence.join(",")) {
        // Use setTimeout to defer the event dispatch to avoid setState during render
        setTimeout(() => {
          console.log("KONAMI CODE ACTIVATED! 🎉")
          
          // Screen shake effect
          document.body.classList.add("animate-shake")
          setTimeout(() => {
            document.body.classList.remove("animate-shake")
          }, 1000)

          // Confetti celebration
          const duration = 3000
          const animationEnd = Date.now() + duration
          const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 }

          function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min
          }

          const interval: NodeJS.Timeout = setInterval(function() {
            const timeLeft = animationEnd - Date.now()

            if (timeLeft <= 0) {
              return clearInterval(interval)
            }

            const particleCount = 50 * (timeLeft / duration)
            
            // Multiple bursts from different positions
            confetti({
              ...defaults,
              particleCount,
              origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            })
            confetti({
              ...defaults,
              particleCount,
              origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            })
          }, 250)

          // Scroll to footer smoothly
          setTimeout(() => {
            const footer = document.querySelector('footer')
            if (footer) {
              footer.scrollIntoView({ behavior: 'smooth', block: 'end' })
            }
          }, 500)

          // Dispatch event for Footer component
          window.dispatchEvent(new CustomEvent("konami-activated"))
        }, 0)
        
        bufferRef.current = []
      }
    }
    
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, []) // sequence is constant, no deps needed

  return null
}
