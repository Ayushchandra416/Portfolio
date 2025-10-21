import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Code, Rocket, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <GraduationCap className="w-4 h-4 mr-2" />
              CSE • 3rd Year • VIT Bhopal University
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ayush Chandra
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Aspiring Software Engineer • Full Stack Web Developer • Tech Enthusiast
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Currently pursuing B.Tech in Computer Science and Engineering at VIT Bhopal University.
              Passionate about building innovative solutions and learning cutting-edge technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button asChild size="lg">
                <Link href="/projects">
                  <Rocket className="mr-2 h-5 w-5" />
                  View My Projects
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn More About Me
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-4xl font-bold text-primary">3+</CardTitle>
                <CardDescription>Projects Completed</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-4xl font-bold text-primary">10+</CardTitle>
                <CardDescription>Technologies Used</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-4xl font-bold text-primary">100%</CardTitle>
                <CardDescription>Dedication</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-4xl font-bold text-primary">24/7</CardTitle>
                <CardDescription>Learning Mode</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-lg text-muted-foreground">
              Exploring and mastering various domains of technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Building modern, responsive web applications using React, Next.js, and TypeScript
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Rocket className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Problem Solving</CardTitle>
                <CardDescription>
                  Passionate about Data Structures, Algorithms, and competitive programming
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Continuous Learning</CardTitle>
                <CardDescription>
                  Always exploring new technologies, frameworks, and best practices
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-lg text-muted-foreground">
              Technologies I work with
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {["Java", "C++", "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "MySQL", "MongoDB", "Git", "GitHub"].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
