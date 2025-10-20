import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

// This will be replaced with Sanity CMS data later
const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Apps with Next.js 14",
    excerpt: "Learn how to leverage the power of Next.js 14's App Router, Server Components, and Server Actions to build blazing-fast web applications.",
    date: "2024-01-15",
    tags: ["Next.js", "React", "Web Development"],
    slug: "building-modern-web-apps-nextjs-14",
  },
  {
    id: 2,
    title: "TypeScript Best Practices for React Developers",
    excerpt: "Discover essential TypeScript patterns and best practices that will make your React code more maintainable and bug-free.",
    date: "2024-01-08",
    tags: ["TypeScript", "React", "Best Practices"],
    slug: "typescript-best-practices-react",
  },
  {
    id: 3,
    title: "Styling with Tailwind CSS: A Complete Guide",
    excerpt: "Master Tailwind CSS from basics to advanced techniques. Learn how to create beautiful, responsive designs faster than ever.",
    date: "2024-01-01",
    tags: ["Tailwind CSS", "CSS", "Design"],
    slug: "tailwind-css-complete-guide",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Thoughts, tutorials, and insights about web development
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Coming Soon Note */}
        <Card className="mt-12 bg-secondary/50">
          <CardHeader>
            <CardTitle>🚀 More Content Coming Soon</CardTitle>
            <CardDescription>
              These blog posts are placeholder data. In the next steps, we'll integrate
              Sanity CMS to manage real blog content with rich text, images, and more!
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
