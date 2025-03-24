import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Coffee Tracker",
      description: "Caffein keep track of your coffee with Caffein app with React.js FantaCSS & Firebase.",
      image: "https://lh3.googleusercontent.com/CxHaI20ht6lNNv-34nEAT2LdWJPspebZGP-N_IeCZONG-QGtNjCrwE_4WiqbDlLkK4D6laeEt6iX3oP6rdqmy1Cp=s1280-w1280-h800",
      tags: ["JavaScript", "Firebase", "Fanta CSS", "React"],
      githubLink: "https://github.com/mohidasmat/caffein",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative work with dark/light mode and animations.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmLQ1liZsB1dJTPSd_hBBdasqOFNXgv-7AA&s",
      tags: ["React", "Framer Motion", "CSS Modules"],
      githubLink: "https://github.com/MohammadMohid03/Portfolio",
    },
    {
      title: "Chat with PDF website",
      description: "You can Chat with your PDF's and also make a POP Quiz out of the PDF's.",
      image: "https://dlsdc.com/wp-content/uploads/2024/02/1685538597643-600x400.jpeg",
      tags: ["Python", "Numpy" ,"Streamlit", "Json"],
      githubLink: "https://github.com/MohammadMohid03/ChatPDF",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is unique and demonstrates different skills and
            technologies.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="overflow-hidden h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="https://github.com/MohammadMohid03" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

