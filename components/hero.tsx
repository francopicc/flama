import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
  <section id="inicio" className="relative py-20 md:py-[15em] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="space-y-6">
          {/* Hero Heading with Didone-style font */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.15] tracking-tight text-balance animate-in fade-in slide-in-from-top-4 duration-700">
            Donde tus proyectos cobran{" "}
            <span className="italic" style={{ color: "#E91E1A" }}>
              dirección
            </span>
            .
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-4 duration-700 delay-150">
            <span className="font-bold">Flama</span> conecta personas, tareas y objetivos en un mismo espacio. Gestioná
            proyectos, metodologías y procesos con la claridad que tu organización necesita.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
            <Link href="/#waitlist" className="">
              <Button asChild size="lg" className="rounded-full px-8 text-base font-medium group">
                <span className="flex items-center">
                  Únete a la waitlist
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link href="#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full cursor-pointer px-8 text-base font-medium border-foreground/20 bg-transparent"
                >
                  Conoce más
                </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
