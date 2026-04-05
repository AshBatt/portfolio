"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Instagram, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Footer() {
  const [showCredit, setShowCredit] = useState(false)

  useEffect(() => {
    console.log("Psst... try the Konami code 👀 (↑ ↑ ↓ ↓ ← → ← → B A)")

    const handleKonami = () => {
      setShowCredit(true)
      setTimeout(() => setShowCredit(false), 5000)
    }

    window.addEventListener("konami-activated", handleKonami)
    return () => window.removeEventListener("konami-activated", handleKonami)
  }, [])

  return (
    <footer className="bg-background border-t border-border/50 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/AshBatt" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/aashimabatra123" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://instagram.com/ashesnbats" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
        
        <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Aashima Batra. All rights reserved.
            </p>
            
            <AnimatePresence>
                {showCredit && (
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                    >
                        Built with ❤️ by Aashima
                    </motion.p>
                )}
            </AnimatePresence>
        </div>

        <div className="absolute bottom-4 right-4 hidden md:block">
             <div className="group relative">
                <HelpCircle className="h-4 w-4 text-muted-foreground/20 hover:text-muted-foreground transition-colors cursor-help" />
                <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block whitespace-nowrap bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-md border border-border">
                    Try the Konami code 👀
                </div>
             </div>
        </div>
      </div>
    </footer>
  )
}
