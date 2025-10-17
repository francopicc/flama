import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl">
      <div className="rounded-full border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[#0a0a0a]/80 px-6 sm:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo-flama.svg" alt="Flama Logo" width={100} height={40} className="h-6 w-auto" />
          </Link>

          {/* CTA Button */}
          <Link href="/#waitlist">
              <Button
                variant="outline"
                className="hidden cursor-pointer md:inline-flex rounded-full border-foreground/20 hover:bg-foreground/5 bg-transparent"
              >
              Únete a la waitlist
              </Button>
          </Link>


          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  )
}
