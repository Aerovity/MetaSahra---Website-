"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "./mode-toggle"
import { useTheme } from "next-themes"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo-icon.png" alt="MetaSahra Logo" width={40} height={40} className="h-10 w-auto" />
          <span className="text-xl font-bold text-white">MetaSahra</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            À Propos
          </Link>
          <Link href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">
            Projets
          </Link>
          <Link href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link
              href="#projects"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
