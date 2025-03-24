import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Calendar, MapPin, Briefcase } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden border-4 border-background shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Mohammad Mohid"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <Briefcase className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Hello, I'm Mohammad Mohid</h3>
            <p className="text-muted-foreground">
              I'm a passionate Coder and a web Developer with a keen eye for detail and a determination to deliver the
              very highest quality. I take great pride in my work, and I always try to better myself with every project
              I work on.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <User className="text-primary" />
                  <span>Mohammad Mohid</span>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Calendar className="text-primary" />
                  <span>0 Years Experience</span>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="text-primary" />
                  <span>Islamabad, Pakistan</span>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Briefcase className="text-primary" />
                  <span>Available for Hire</span>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">C++</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">SQL/MYSQL</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

