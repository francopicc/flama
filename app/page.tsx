import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturesSection } from "@/components/features-section"
import { WaitlistSection } from "@/components/waitlist-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <WaitlistSection />
    </main>
  )
}
