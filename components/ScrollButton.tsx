"use client"

import { useEffect, useState } from "react"
import { ArrowUp, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Show button after scrolling down 300px
      if (scrolled > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Check if near bottom (within 100px)
      if (scrolled + windowHeight >= documentHeight - 100) {
        setIsAtBottom(true)
      } else {
        setIsAtBottom(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    toggleVisibility() // Check initial state

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={isAtBottom ? scrollToTop : scrollToBottom}
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
            aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
          >
            {isAtBottom ? (
              <ArrowUp className="h-5 w-5" />
            ) : (
              <ArrowDown className="h-5 w-5" />
            )}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

