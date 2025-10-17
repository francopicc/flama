"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setEmail("")
    setName("")

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-balance">
            Únete a la <span className="italic">lista de espera</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sé de los primeros en acceder cuando lancemos. Te mantendremos informado sobre nuestro progreso.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base">
              Nombre
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Tu nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 text-base"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full text-base font-medium h-12 group"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Unirme a la waitlist"}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          {isSubmitted && (
            <div className="text-center text-sm text-muted-foreground bg-accent/50 py-3 px-4 rounded-lg">
              ¡Gracias! Te hemos agregado a la lista de espera.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
