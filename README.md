# 🚀 Modern Portfolio Website

A high-performance, SEO-friendly portfolio built with the latest web technologies. This project showcases modern web development practices and serves as both a portfolio and a learning resource.

## ✨ Features

- ⚡ **Next.js 14** with App Router for blazing-fast performance
- 🎨 **TypeScript** for type-safe code
- 💅 **Tailwind CSS** for rapid styling
- 🧩 **Shadcn/ui** for beautiful, accessible components
- 📝 **Sanity CMS** integration ready for blog content
- 🌙 **Dark mode** support
- 📱 **Fully responsive** design
- ♿ **Accessible** components
- 🔍 **SEO optimized**

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)

### Content Management
- **CMS**: [Sanity](https://www.sanity.io/) (Headless CMS)

### Deployment
- **Platform**: [Vercel](https://vercel.com/) (Recommended)
- **Alternative**: Netlify, Railway, or any Node.js hosting

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example file
   cp .env.local.example .env.local
   
   # Edit .env.local and add your Sanity credentials
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with Navbar & Footer
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # About page
│   │   ├── projects/           # Projects showcase
│   │   ├── blog/               # Blog listing
│   │   └── contact/            # Contact page
│   │
│   ├── components/             # React components
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Footer.tsx          # Footer component
│   │   └── ui/                 # Shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── ...
│   │
│   └── lib/                    # Utility functions
│       ├── utils.ts            # Helper utilities
│       └── sanity.client.ts    # Sanity CMS client
│
├── public/                     # Static assets
├── .env.local                  # Environment variables (not in Git)
├── components.json             # Shadcn/ui configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Customization Guide

### 1. Update Personal Information

**Edit navigation and branding:**
- `src/components/Navbar.tsx` - Update logo and nav links
- `src/components/Footer.tsx` - Update social links and contact info
- `src/app/layout.tsx` - Update metadata (title, description)

**Edit content:**
- `src/app/page.tsx` - Home page hero and features
- `src/app/about/page.tsx` - Your skills and experience
- `src/app/projects/page.tsx` - Your projects
- `src/app/contact/page.tsx` - Contact information

### 2. Styling Customization

**Tailwind Configuration** (`tailwind.config.ts`):
```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
    fontFamily: {
      sans: ['Your Font', 'sans-serif'],
    },
  },
}
```

**Global Styles** (`src/app/globals.css`):
- Modify CSS variables for colors
- Adjust dark mode theme

### 3. Add New Components

```bash
# Add more Shadcn/ui components
npx shadcn@latest add [component-name]

# Available components:
# alert, avatar, calendar, checkbox, dialog, dropdown-menu,
# form, input, label, popover, select, sheet, tabs, toast, etc.
```

## 📝 Sanity CMS Setup (Optional but Recommended)

### Why Use Sanity?
- Manage blog posts and projects without touching code
- Rich text editor with image support
- Real-time collaboration
- Free tier includes everything you need

### Setup Steps

1. **Create a Sanity account**
   - Visit [sanity.io](https://www.sanity.io/)
   - Sign up for free

2. **Create a new project**
   - Click "Create project"
   - Choose a name and dataset (production)
   - Copy your Project ID

3. **Update environment variables**
   ```bash
   # In .env.local
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Create Sanity Studio** (optional)
   ```bash
   # In a separate folder
   npm create sanity@latest
   # Follow prompts to create studio
   ```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

Vercel is the fastest way to deploy Next.js apps and offers a generous free tier.

#### Option 1: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

#### Option 2: Deploy via GitHub

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com/)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings
   - Add environment variables
   - Click "Deploy"

3. **Your site is live!** 🎉
   - Vercel provides a URL: `your-project.vercel.app`
   - Every push to `main` auto-deploys

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### Environment Variables on Vercel

Add these in your Vercel project settings:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

## 📚 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repo](https://github.com/vercel/next.js)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript for React Devs](https://react-typescript-cheatsheet.netlify.app/)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### Shadcn/ui
- [Component Library](https://ui.shadcn.com/docs)
- [Component Source Code](https://github.com/shadcn-ui/ui)

## 🎓 Key Concepts Explained

### 1. Server Components vs Client Components

**Server Components (default):**
- Render on the server
- Can't use React hooks
- Better performance
- Can directly access databases

**Client Components (`"use client"`):**
- Render in the browser
- Can use hooks (useState, useEffect)
- Interactive features

### 2. App Router File Conventions

- `page.tsx` - Defines a route
- `layout.tsx` - Wraps pages (persistent UI)
- `loading.tsx` - Loading state
- `error.tsx` - Error boundary
- `not-found.tsx` - 404 page

### 3. TypeScript Benefits

- Catches bugs before runtime
- Better IDE autocomplete
- Self-documenting code
- Refactoring confidence

### 4. Tailwind Utility Classes

```tsx
// Instead of CSS files:
<div className="flex items-center justify-between p-4 bg-blue-500">

// Means:
// display: flex;
// align-items: center;
// justify-content: space-between;
// padding: 1rem;
// background-color: #3b82f6;
```

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Add Shadcn component
npx shadcn@latest add [component-name]
```

## 📊 Performance Optimizations

This portfolio is built with performance in mind:

- ✅ **Static Generation** - Pages pre-rendered at build time
- ✅ **Image Optimization** - Next.js automatic image optimization
- ✅ **Code Splitting** - Only load JavaScript needed for each page
- ✅ **Font Optimization** - Next.js font loading with Google Fonts
- ✅ **CSS Optimization** - Tailwind purges unused styles

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Fork the project
- Use it as a template
- Submit issues or suggestions
- Share improvements

## 📄 License

MIT License - Feel free to use this project for your own portfolio!

## 💡 Future Enhancements

Consider adding:
- 🔐 **Authentication** with Clerk or NextAuth.js
- 🗄️ **Database** with Supabase or PostgreSQL
- ✉️ **Contact Form** with email integration
- 📊 **Analytics** with Vercel Analytics or Google Analytics
- 🧪 **Testing** with Vitest and Playwright
- 🔄 **CI/CD** with GitHub Actions
- 🎬 **Animations** with Framer Motion
- 🌐 **Internationalization** for multiple languages

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### TypeScript errors
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Clear Next.js cache
rm -rf .next
npm run dev
```

### Tailwind styles not working
- Ensure `tailwind.config.ts` content paths are correct
- Check `globals.css` has Tailwind directives
- Restart dev server

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Check Next.js documentation
- Join the Next.js Discord community

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies**

**Live Demo**: [your-portfolio.vercel.app](https://your-portfolio.vercel.app)
**Repository**: [github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

<!-- Trigger redeploy: Updated by GitHub Copilot on 2025-10-20 -->

