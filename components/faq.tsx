// @ts-ignore
import React from "react"

export function FaqSection() {

const faqs = [
    {
        q: "¿Qué es Flama?",
        a: "Flama es una plataforma integral de gestión de proyectos que te permite organizar, supervisar y colaborar en tareas con tu equipo de manera eficiente. Nuestra solución combina una interfaz intuitiva con potentes herramientas de control y visualización."
    },
    {
        q: "¿Cómo comenzar con Flama?",
        a: "Iniciar es muy sencillo: crea una cuenta gratuita con tu correo electrónico o acepta una invitación de tu equipo. Una vez dentro, podrás crear tu primer proyecto, configurar tareas y añadir colaboradores en cuestión de minutos."
    },
    {
        q: "¿Qué planes y precios ofrece Flama?",
        a: "Disponemos de planes flexibles que se adaptan a tus necesidades: desde nuestra versión early access para nuevos usuarios hasta planes empresariales personalizados. Contáctanos para recibir una cotización adaptada a tus requerimientos específicos."
    },
    {
        q: "¿Cómo funciona la gestión de equipo y permisos?",
        a: "Flama ofrece un control granular de permisos: puedes invitar miembros, asignar roles específicos y gestionar niveles de acceso tanto a nivel de proyecto como de espacio de trabajo. Esto garantiza que cada miembro tenga exactamente los permisos que necesita.",
    },
    {
        q: "¿Qué tipo de soporte ofrecen?",
        a: "Brindamos un soporte integral que incluye documentación detallada, asistencia por correo electrónico con tiempos de respuesta garantizados y sesiones personalizadas de onboarding para equipos que requieran una implementación guiada.",
    },
    {
        q: "¿Cómo aseguran la protección de datos?",
        a: "Tu información está segura con nosotros: implementamos protocolos de seguridad de nivel empresarial, realizamos copias de seguridad regulares y mantenemos estrictos controles de acceso. Puedes consultar nuestra política de privacidad para conocer todos los detalles técnicos.",
    },
]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-balance">
            F.A.Q
          </h2>
          <p className="text-lg leading-relaxed">
            Preguntas frecuentes sobre Flama y cómo puede ayudarte a gestionar tus proyectos.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((f, idx) => (
            <details
              key={idx}
              className="group border border-foreground/10 rounded-xl p-5 bg-background/50 backdrop-blur-sm"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-medium text-lg">{f.q}</span>
                <span className="ml-4 text-muted-foreground group-open:rotate-45 transition-transform">+</span>
              </summary>

              <div className="mt-3 text-muted-foreground leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
