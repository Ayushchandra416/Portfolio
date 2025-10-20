import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>📧 Email</CardTitle>
              <CardDescription>Drop me an email anytime</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:your.email@example.com"
                className="text-primary hover:underline"
              >
                your.email@example.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>💼 LinkedIn</CardTitle>
              <CardDescription>Let's connect professionally</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>💻 GitHub</CardTitle>
              <CardDescription>Check out my code</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🐦 Twitter/X</CardTitle>
              <CardDescription>Follow me for updates</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow Me
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Note about future features */}
        <Card className="bg-secondary/50">
          <CardHeader>
            <CardTitle>📝 Contact Form Coming Soon</CardTitle>
            <CardDescription>
              In future iterations, we can add a contact form using services like
              Formspree, SendGrid, or integrate with Supabase for backend handling.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
