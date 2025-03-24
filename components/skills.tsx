import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const technicalSkills = [
    { name: "HTML/CSS", level: 85 },
    { name: "C++", level: 80 },
    { name: "SQL/MYSQL", level: 65 },
    { name: "Java", level: 50 },
    { name: "Python", level: 40 },
    { name: "JavaScript/React", level: 30 },
  ]

  const softSkills = [
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Communication", icon: "💬" },
    { name: "Team Collaboration", icon: "👥" },
    { name: "Time Management", icon: "⏱️" },
    { name: "Adaptability", icon: "🔄" },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've acquired a diverse range of skills throughout my career. Here's a glimpse of my technical and soft
            skills.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <span className="text-3xl mb-3">{skill.icon}</span>
                    <h4 className="font-medium">{skill.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

