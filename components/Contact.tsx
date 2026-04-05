"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle2, AlertCircle, Download } from "lucide-react"
export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [submitError, setSubmitError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError(null)

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim()
    if (!accessKey) {
      setStatus("error")
      setSubmitError(
        "Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local (see .env.example)."
      )
      return
    }

    setStatus("submitting")

    const form = formRef.current
    if (!form) {
      setStatus("error")
      setSubmitError("Could not access the form. Please refresh the page.")
      return
    }

    const formData = new FormData(form)
    formData.append("access_key", accessKey)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = (await response.json()) as {
        success?: boolean
        message?: string
      }

      if (data.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
        setSubmitError(
          typeof data.message === "string"
            ? data.message
            : "Something went wrong. Please try again."
        )
      }
    } catch {
      setStatus("error")
      setSubmitError("Network error. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
              Get in Touch
            </h2>
            <p className="text-muted-foreground">
              Have a project in mind or just want to say hi?
            </p>
          </div>

          <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    className="min-h-[120px] bg-background/50"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={status === "submitting"}>
                  {status === "submitting" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    <span className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Sent Successfully
                    </span>
                  ) : status === "error" ? (
                    <span className="flex items-center">
                      <AlertCircle className="mr-2 h-4 w-4" />
                      Something went wrong
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
                {submitError ? (
                  <p className="text-sm text-destructive" role="alert">
                    {submitError}
                  </p>
                ) : null}
              </form>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button variant="outline" className="rounded-full" asChild>
              <a href="/resume.pdf" download="Aashima_Batra_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
