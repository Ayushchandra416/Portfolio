import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

// This would normally come from a CMS or database
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.vercel.app",
    image: "🛒",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.vercel.app",
    image: "✅",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather application with forecasts, location search, and historical data visualization.",
    technologies: ["Next.js", "Chart.js", "OpenWeather API"],
    github: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.vercel.app",
    image: "🌤️",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground">
            A collection of projects showcasing my skills and experience in web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              {/* Project Icon/Image */}
              <div className="h-40 flex items-center justify-center bg-secondary text-6xl">
                {project.image}
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="gap-2">
                <Button asChild variant="default" className="flex-1">
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
