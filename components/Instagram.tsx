"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Instagram as InstagramIcon } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import instagramData from "@/data/instagram.json"

export function Instagram() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    
    script.onload = () => {
      // Process embeds when script loads
      if (window.instgrm?.Embeds) {
        window.instgrm.Embeds.process()
      }
    }
    
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="py-20 container px-4 md:px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
              Off the Clock
            </span>{" "}
            <span className="inline-block">☕</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Occasionally documenting life beyond the code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {instagramData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-[350px]"
            >
              {/* Wrapper to control size and add styling */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20 bg-card/50 backdrop-blur-sm">
                {/* Fixed aspect ratio container */}
                <div 
                  className="relative w-full"
                  style={{ 
                    minHeight: '450px',
                    maxHeight: '650px',
                  }}
                >
                  {/* Instagram embed */}
                  <div 
                    className="instagram-embed-wrapper"
                    dangerouslySetInnerHTML={{ __html: item.embedHtml }}
                  />
                </div>
                
                {/* Gradient overlay for better theme integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary" asChild>
            <Link href="https://instagram.com/ashesnbats" target="_blank">
              <InstagramIcon className="mr-2 h-4 w-4" />
              More on Instagram
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

// Type declaration for Instagram embed script
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}
