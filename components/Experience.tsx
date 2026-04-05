"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, MapPin, Calendar } from "lucide-react"
import experienceData from "@/data/experience.json"
import { cn } from "@/lib/utils"

export function Experience() {
  const groupedExperience = experienceData.reduce((acc, curr) => {
    if (!acc[curr.company]) {
      acc[curr.company] = []
    }
    acc[curr.company].push(curr)
    return acc
  }, {} as Record<string, typeof experienceData>)

  return (
    <section id="experience" className="py-20 container px-4 md:px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto text-lg">
            My journey in the software industry.
          </p>
        </div>

        <div className="grid gap-8 max-w-3xl mx-auto">
          {Object.entries(groupedExperience).map(([company, roles], index) => (
            <motion.div
                key={company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
            >
                <Card className="relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm shadow-lg">
                  {/* Decorative gradient */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
                  
                  <CardHeader className="bg-secondary/30 border-b border-border/50 pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl md:text-2xl font-bold">{company}</CardTitle>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm bg-secondary/50 px-3 py-1 rounded-full w-fit">
                            <MapPin className="h-3 w-3 mr-1" />
                            {roles[0].location}
                        </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 my-2 space-y-10">
                      {roles.map((role, i) => (
                        <div key={role.id} className="relative pl-8 pr-2">
                          {/* Timeline Dot */}
                          <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-gradient-to-r from-primary to-accent shadow-md" />
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                            <h3 className="text-lg font-semibold text-foreground">{role.role}</h3>
                            <div className="flex items-center text-sm text-muted-foreground/80 font-medium">
                              <Calendar className="h-4 w-4 mr-1.5" />
                              {role.startDate} - {role.endDate}
                            </div>
                          </div>
                          
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3 border border-primary/20">
                            {role.type}
                          </span>
                          
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {role.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
