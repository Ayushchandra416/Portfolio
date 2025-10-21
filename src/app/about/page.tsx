import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const skills = {
    languages: ["Java", "C++", "Python", "JavaScript", "TypeScript"],
    frontend: ["React", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "REST APIs"],
    database: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code"],
  };

  const education = {
    degree: "B.Tech in Computer Science and Engineering",
    college: "VIT Bhopal University",
    year: "3rd Year",
    duration: "2023 - 2027 (expected)",
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Intro Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">
            I&apos;m Ayush Chandra, a 3rd year CSE student at VIT Bhopal University with a strong focus on
            modern web development. I enjoy turning ideas into real products using React, Next.js,
            TypeScript, and robust backends.
          </p>
        </div>

        {/* Education */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription>Academic background</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="secondary">{education.year}</Badge>
              <div>
                <p className="font-semibold">{education.degree}</p>
                <p className="text-muted-foreground">{education.college} • {education.duration}</p>
              </div>
            </div>
          </CardContent>
        </Card>

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
              <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
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
              <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
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

        {/* Focus Area */}
        <Card>
          <CardHeader>
            <CardTitle>Focus Area</CardTitle>
            <CardDescription>Web development</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              I focus on building scalable, responsive web applications with clean, maintainable code.
              My typical stack includes Next.js/React on the frontend, Node.js APIs, and databases like
              MySQL and MongoDB, all managed with Git and deployed to platforms like Vercel or Railway.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
