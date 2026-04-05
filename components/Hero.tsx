"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background/90 to-background opacity-80"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] animate-pulse delay-1000"></div>
      
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-lg md:text-xl font-medium text-accent tracking-wide">
            Software Engineer
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent">Aashima Batra</span>
          </h1>
          <p className="max-w-[600px] mx-auto text-lg md:text-xl text-muted-foreground">
            Building elegant solutions by day, creating content by... also day ☕
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg shadow-primary/20" asChild>
            <Link href="#projects">
              View Projects
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 hover:text-primary rounded-full px-8" asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
