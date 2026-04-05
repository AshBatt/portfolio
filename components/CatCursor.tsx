"use client"

import { useEffect, useRef, useState } from "react"

export function CatCursor() {
  const [mounted, setMounted] = useState(false)
  const nekoRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>(0)
  
  const nekoPosX = useRef(32)
  const nekoPosY = useRef(32)
  const mousePosX = useRef(0)
  const mousePosY = useRef(0)
  const frameCount = useRef(0)
  const idleTime = useRef(0)
  const idleAnimation = useRef<string | null>(null)
  const idleAnimationFrame = useRef(0)
  const lastFrameTimestamp = useRef<number>(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (isReducedMotion) return

    const nekoEl = nekoRef.current
    if (!nekoEl) return

    const nekoSpeed = 10
    const spriteSets: Record<string, number[][]> = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
      scratchWallN: [[0, 0], [0, -1]],
      scratchWallS: [[-7, -1], [-6, -2]],
      scratchWallE: [[-2, -2], [-2, -3]],
      scratchWallW: [[-4, 0], [-4, -1]],
      tired: [[-3, -2]],
      sleeping: [[-2, 0], [-2, -1]],
      N: [[-1, -2], [-1, -3]],
      NE: [[0, -2], [0, -3]],
      E: [[-3, 0], [-3, -1]],
      SE: [[-5, -1], [-5, -2]],
      S: [[-6, -3], [-7, -2]],
      SW: [[-5, -3], [-6, -1]],
      W: [[-4, -2], [-4, -3]],
      NW: [[-1, 0], [-1, -1]],
    }

    const handleMouseMove = (event: MouseEvent) => {
      mousePosX.current = event.clientX
      mousePosY.current = event.clientY
    }
    document.addEventListener("mousemove", handleMouseMove)

    function setSprite(name: string, frame: number) {
      const sprite = spriteSets[name][frame % spriteSets[name].length]
      if (nekoEl) {
        nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`
      }
    }

    function resetIdleAnimation() {
      idleAnimation.current = null
      idleAnimationFrame.current = 0
    }

    function idle() {
      idleTime.current += 1

      if (idleTime.current > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation.current === null) {
        const availableIdleAnimations = ["sleeping", "scratchSelf"]
        if (nekoPosX.current < 32) availableIdleAnimations.push("scratchWallW")
        if (nekoPosY.current < 32) availableIdleAnimations.push("scratchWallN")
        if (nekoPosX.current > window.innerWidth - 32) availableIdleAnimations.push("scratchWallE")
        if (nekoPosY.current > window.innerHeight - 32) availableIdleAnimations.push("scratchWallS")
        idleAnimation.current = availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)]
      }

      switch (idleAnimation.current) {
        case "sleeping":
          if (idleAnimationFrame.current < 8) {
            setSprite("tired", 0)
            break
          }
          setSprite("sleeping", Math.floor(idleAnimationFrame.current / 4))
          if (idleAnimationFrame.current > 192) {
            resetIdleAnimation()
          }
          break
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation.current, idleAnimationFrame.current)
          if (idleAnimationFrame.current > 9) {
            resetIdleAnimation()
          }
          break
        default:
          setSprite("idle", 0)
          return
      }
      idleAnimationFrame.current += 1
    }

    function frame() {
      frameCount.current += 1
      const diffX = nekoPosX.current - mousePosX.current
      const diffY = nekoPosY.current - mousePosY.current
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2)

      if (distance < nekoSpeed || distance < 48) {
        idle()
        return
      }

      idleAnimation.current = null
      idleAnimationFrame.current = 0

      if (idleTime.current > 1) {
        setSprite("alert", 0)
        idleTime.current = Math.min(idleTime.current, 7)
        idleTime.current -= 1
        return
      }

      let direction = ""
      direction += diffY / distance > 0.5 ? "N" : ""
      direction += diffY / distance < -0.5 ? "S" : ""
      direction += diffX / distance > 0.5 ? "W" : ""
      direction += diffX / distance < -0.5 ? "E" : ""
      setSprite(direction, frameCount.current)

      nekoPosX.current -= (diffX / distance) * nekoSpeed
      nekoPosY.current -= (diffY / distance) * nekoSpeed

      nekoPosX.current = Math.min(Math.max(16, nekoPosX.current), window.innerWidth - 16)
      nekoPosY.current = Math.min(Math.max(16, nekoPosY.current), window.innerHeight - 16)

      if (nekoEl) {
        nekoEl.style.left = `${nekoPosX.current - 16}px`
        nekoEl.style.top = `${nekoPosY.current - 16}px`
      }
    }

    function onAnimationFrame(timestamp: number) {
      if (!nekoEl || !nekoEl.isConnected) {
        return
      }
      if (!lastFrameTimestamp.current) {
        lastFrameTimestamp.current = timestamp
      }
      if (timestamp - lastFrameTimestamp.current > 100) {
        lastFrameTimestamp.current = timestamp
        frame()
      }
      animationFrameRef.current = requestAnimationFrame(onAnimationFrame)
    }

    animationFrameRef.current = requestAnimationFrame(onAnimationFrame)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div
      ref={nekoRef}
      className="pointer-events-none fixed"
      style={{
        width: "32px",
        height: "32px",
        backgroundImage: "url('/oneko.gif')",
        imageRendering: "pixelated",
        left: "16px",
        top: "16px",
        zIndex: 9999,
      }}
    />
  )
}
