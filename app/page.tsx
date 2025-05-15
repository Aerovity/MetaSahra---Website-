import HeroSection from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import FeaturesSection from "@/components/features-8"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}