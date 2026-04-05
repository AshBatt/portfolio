"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"
import educationData from "@/data/education.json"

export function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-transparent to-secondary/20">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
        >
            <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
                Education
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto text-lg">
                Academic background and qualifications.
            </p>
            </div>

            <div className="grid gap-6 max-w-3xl mx-auto">
            {educationData.map((edu) => (
                <Card key={edu.id} className="border-0 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                            <div className="mt-1 p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl h-fit">
                                <GraduationCap className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-bold">{edu.institution}</CardTitle>
                                <p className="text-lg text-primary/80 font-medium mt-1">{edu.degree}</p>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="pl-[5.5rem]">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center bg-secondary/50 px-3 py-1 rounded-full w-fit">
                            <Calendar className="h-3.5 w-3.5 mr-2" />
                            {edu.startDate} - {edu.endDate}
                        </div>
                        <div className="flex items-center bg-secondary/50 px-3 py-1 rounded-full w-fit">
                            <MapPin className="h-3.5 w-3.5 mr-2" />
                            {edu.location}
                        </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </motion.div>
      </div>
    </section>
  )
}
