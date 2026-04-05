"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal } from "lucide-react"
import achievementsData from "@/data/achievements.json"

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
              Achievements
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto text-lg">
              Recognition and milestones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievementsData.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-0 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform rotate-12 scale-150">
                    {item.icon === "trophy" ? (
                        <Trophy className="h-32 w-32" />
                    ) : (
                        <Medal className="h-32 w-32" />
                    )}
                    </div>
                    
                    <CardHeader className="pb-2 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent p-[1px] mb-4 shadow-lg">
                        <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                            {item.icon === "trophy" ? (
                            <Trophy className="h-7 w-7 text-primary" />
                            ) : (
                            <Medal className="h-7 w-7 text-primary" />
                            )}
                        </div>
                    </div>
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
