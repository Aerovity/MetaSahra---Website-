"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Erreur de lecture automatique de la vidéo:", error)
        setVideoError(true)
      })
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900 via-violet-800 to-pink-700"></div>
        )}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">MetaSahra</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Nous créons des solutions innovantes alimentées par l'intelligence artificielle
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-700/90 hover:to-pink-700/90 border-2 border-white/70 backdrop-blur-sm"
          >
            <a href="#about">Découvrir</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white/70 text-white bg-transparent hover:bg-white/20 backdrop-blur-sm"
          >
            <a href="#contact">Nous Contacter</a>
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-white">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  )
}
