import { Target, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Feature Card 1 */}
          <div className="group relative border border-foreground/10 rounded-2xl p-8 lg:p-10 bg-background/50 backdrop-blur-sm hover:border-foreground/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 delay-100">
            <div className="space-y-6">
              {/* Icon */}
              <div className="flex items-center gap-3 text-muted-foreground text-sm uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Gestión Visual</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl lg:text-4xl font-normal leading-tight">
                ¿Dónde están tus proyectos hoy?
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                Visualizá el estado de cada proyecto en tiempo real. Tableros intuitivos que muestran progreso, tareas
                pendientes y próximos hitos de forma clara.
              </p>

              {/* Visual Element */}
              <div className="pt-8 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-accent/20 to-transparent rounded-full blur-2xl animate-pulse" />
                  <div className="absolute inset-0 grid grid-cols-8 gap-1 p-4">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className="rounded-full bg-foreground/60"
                        style={{
                          animationDelay: `${i * 20}ms`,
                          opacity: Math.random() > 0.3 ? 1 : 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="group relative border border-foreground/10 rounded-2xl p-8 lg:p-10 bg-background/50 backdrop-blur-sm hover:border-foreground/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 delay-200">
            <div className="space-y-6">
              {/* Icon */}
              <div className="flex items-center gap-3 text-muted-foreground text-sm uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Colaboración</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl lg:text-4xl font-normal leading-tight">
                ¿Cómo ejecutar rápido con tu equipo?
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                Coordiná tareas, asigná responsables y seguí el avance de cada miembro. Todo el equipo sincronizado en
                un mismo espacio de trabajo.
              </p>

              {/* Visual Element */}
              <div className="pt-8 flex items-center justify-center">
                <div className="relative w-64 h-48">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/40 via-accent/30 to-accent/20 blur-2xl animate-pulse" />
                  <div className="absolute inset-0 grid grid-cols-12 gap-1 p-4">
                    {Array.from({ length: 96 }).map((_, i) => {
                      const row = Math.floor(i / 12)
                      const col = i % 12
                      const wave = Math.sin((col + row) * 0.5) * 0.5 + 0.5
                      return (
                        <div
                          key={i}
                          className="rounded-full bg-foreground/60"
                          style={{
                            opacity: wave * (Math.random() > 0.2 ? 1 : 0.2),
                            transform: `scale(${0.5 + wave * 0.5})`,
                          }}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
