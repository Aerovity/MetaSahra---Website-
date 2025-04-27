import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "StudentCopilot",
    description: "AI powered App pour assister les étudiant dans leur études.",
    image: "/images/StudentCopilot.png",
    tags: ["OpenAI", "NLP and Vector Databases", "React"],
    githubUrl: "https://www.studentcopilot.app/",
    liveUrl: "https://www.studentcopilot.app/",
  },
  {
    id: 2,
    title: "CV-Vision",
    description: "Extension Chrome et Assistant virtuel pour optimiser votre CV à la recherche d'emploi.",
    image: "/images/CVision.png",
    tags: ["NLP", "Python", "Chatbot"],
    githubUrl: "https://github.com/faisalmujawar148/cvision",
    liveUrl: "https://github.com/faisalmujawar148/cvision",
  },
  {
    id: 3,
    title: "ArticSense",
    description: "Le model IA qui detecte en direct les animaux polaires dans leur envionnement naturel.",
    image: "/images/ArticSense.jpg",
    tags: ["OpenCV", "Data Science", "Visualisation"],
    githubUrl: "https://github.com/Aerovity/ArticSense---Snow-Animals-AI-Spotter",
    liveUrl: "https://github.com/Aerovity/ArticSense---Snow-Animals-AI-Spotter",
  },
  {
    id: 4,
    title: "READYOU",
    description: "Generateur de readme.md pour vos projects informatique sur Github.",
    image: "/images/Readyou.png",
    tags: ["Fintuning", "Vector Database", "Python"],
    githubUrl: "https://github.com/Egham-7/readme-ai",
    liveUrl: "https://readyou.uk/",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Projets</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez quelques-unes de nos réalisations récentes en matière d'intelligence artificielle et de
            développement logiciel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Voir le projet
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
