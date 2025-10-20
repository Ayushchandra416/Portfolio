import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const skills = {
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    backend: ["Node.js", "PostgreSQL", "Supabase", "REST APIs"],
    tools: ["Git", "VS Code", "Vercel", "npm"],
  };

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description: "Building modern web applications with Next.js and TypeScript",
    },
    {
      title: "Frontend Developer",
      company: "Startup Inc",
      period: "2022 - 2023",
      description: "Developed responsive user interfaces with React and Tailwind CSS",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer passionate about building exceptional digital experiences
            with modern web technologies.
          </p>
        </div>

        {/* Skills Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Skills & Technologies</CardTitle>
            <CardDescription>
              Technologies I work with to bring ideas to life
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Backend & Database</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Experience</h2>
          {experience.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                  </div>
                  <Badge variant="outline">{job.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
