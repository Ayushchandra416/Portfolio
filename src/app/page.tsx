import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { StickyReveal } from "@/components/sections/StickyReveal";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Apple-style Hero */}
      <Hero />

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

      {/* Sticky Reveal Highlights */}
      <StickyReveal
        steps={[
          {
            eyebrow: "Performance",
            title: "Fast by default",
            description:
              "Optimized Next.js builds, image optimization, and careful use of animations keep things snappy.",
          },
          {
            eyebrow: "Design",
            title: "Clarity and focus",
            description:
              "Clean typography, balanced spacing, and meaningful contrast—no visual noise.",
          },
          {
            eyebrow: "Craft",
            title: "Details that matter",
            description:
              "Thoughtful micro-interactions and accessible components that feel great to use.",
          },
        ]}
      />

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
