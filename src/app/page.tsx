import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer | Next.js | TypeScript | React
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <Link 
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            About Me
          </Link>
          <Link 
            href="/projects"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            View Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-2">⚡ Fast</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built with Next.js 14 and optimized for performance
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-2">🎨 Modern</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Styled with Tailwind CSS and Shadcn/ui components
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-2">🔒 Type-Safe</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Written in TypeScript for better code quality
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
