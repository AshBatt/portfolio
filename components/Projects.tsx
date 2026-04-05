"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import projectsData from "@/data/projects.json"
import { cn } from "@/lib/utils"

export function Projects() {
  return (
    <section id="projects" className="py-20 container px-4 md:px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto text-lg">
            A collection of my best work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[minmax(300px,auto)]">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className={cn(
                "group relative rounded-xl",
                index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
              )}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Gradient Border Wrapper */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-20 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
              
              <Card className="relative h-full flex flex-col overflow-hidden border-0 bg-card/80 backdrop-blur-sm rounded-xl shadow-xl">
                {/* Image Section */}
                <div className={cn(
                  "relative overflow-hidden",
                  index === 0 ? "h-64 md:h-96" : "h-48"
                )}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-105 transition-transform duration-500" />
                    {/* Mock visual for placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-bold text-6xl select-none">
                        {project.title[0]}
                    </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className={cn(
                        "font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70",
                        index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                    )}>
                        {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-secondary-foreground border border-white/5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-4 pt-0">
                  <Button variant="outline" size="sm" className="w-full rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-white border-0 hover:opacity-90" asChild>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
