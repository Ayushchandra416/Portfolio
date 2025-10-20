# 🎓 Complete Learning Guide

This guide explains every technology in your portfolio and how to master them.

## 📚 Table of Contents

1. [Next.js 14 Fundamentals](#nextjs-14-fundamentals)
2. [TypeScript Essentials](#typescript-essentials)
3. [Tailwind CSS Mastery](#tailwind-css-mastery)
4. [Shadcn/ui Components](#shadcnui-components)
5. [Sanity CMS](#sanity-cms)
6. [Deployment & DevOps](#deployment--devops)

---

## 1. Next.js 14 Fundamentals

### What is Next.js?
Next.js is a React framework that provides:
- **Server-Side Rendering (SSR)** - Pages render on server
- **Static Site Generation (SSG)** - Pre-build pages at build time
- **File-based Routing** - No need for react-router
- **API Routes** - Backend endpoints in same project
- **Image Optimization** - Automatic image compression
- **Built-in CSS Support** - Import CSS directly

### App Router (New in v13+)

The App Router uses the `app/` directory for routing:

```
app/
├── page.tsx          → /
├── layout.tsx        → Wraps all pages
├── about/
│   └── page.tsx      → /about
└── blog/
    ├── page.tsx      → /blog
    └── [slug]/
        └── page.tsx  → /blog/any-post
```

### Key Concepts

#### 1. Server Components (Default)
```tsx
// This runs on the SERVER
export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  return <div>{data}</div>;
}
```

**Advantages:**
- No JavaScript sent to client
- Can directly access databases
- Better SEO
- Faster initial page load

#### 2. Client Components
```tsx
"use client";  // ⭐ This directive makes it a client component

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

**When to use:**
- Need React hooks (useState, useEffect, etc.)
- Event handlers (onClick, onChange)
- Browser APIs (localStorage, window)
- Interactive features

#### 3. Layouts
```tsx
// app/layout.tsx - Wraps EVERY page
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}  {/* Page content goes here */}
        <Footer />
      </body>
    </html>
  );
}
```

#### 4. Dynamic Routes
```tsx
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>;
}

// /blog/hello-world → params.slug = "hello-world"
```

### Learn More
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js Tutorial](https://nextjs.org/learn)

---

## 2. TypeScript Essentials

### What is TypeScript?
TypeScript is JavaScript with **types**. It catches bugs before you run code.

### Basic Types

```typescript
// Primitive types
let name: string = "John";
let age: number = 25;
let isStudent: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Objects
interface User {
  name: string;
  age: number;
  email?: string;  // Optional property
}

const user: User = {
  name: "John",
  age: 25,
};

// Functions
function greet(name: string): string {
  return `Hello, ${name}`;
}

// Arrow functions
const add = (a: number, b: number): number => a + b;
```

### React + TypeScript

```tsx
// Component Props
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ text, onClick, disabled }: ButtonProps) {
  return <button onClick={onClick} disabled={disabled}>{text}</button>;
}

// State
const [count, setCount] = useState<number>(0);

// Events
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget);
};
```

### Why TypeScript?

**Before TypeScript:**
```javascript
function getUser(id) {
  // What type is id? string? number?
  // What does this function return?
  return fetch(`/api/users/${id}`);
}
```

**With TypeScript:**
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

async function getUser(id: number): Promise<User> {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}
```

### Learn More
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

## 3. Tailwind CSS Mastery

### What is Tailwind?
Tailwind is a **utility-first** CSS framework. Instead of writing CSS classes, you combine utility classes.

### Traditional CSS vs Tailwind

**Traditional CSS:**
```css
/* styles.css */
.button {
  padding: 0.5rem 1rem;
  background-color: blue;
  color: white;
  border-radius: 0.25rem;
}
```

```html
<button class="button">Click me</button>
```

**Tailwind CSS:**
```html
<button class="px-4 py-2 bg-blue-500 text-white rounded">
  Click me
</button>
```

### Core Concepts

#### 1. Spacing
```html
<!-- Padding -->
<div class="p-4">      <!-- padding: 1rem (all sides) -->
<div class="px-4">     <!-- padding-left & right: 1rem -->
<div class="py-2">     <!-- padding-top & bottom: 0.5rem -->

<!-- Margin -->
<div class="m-4">      <!-- margin: 1rem -->
<div class="mt-8">     <!-- margin-top: 2rem -->
<div class="mb-4">     <!-- margin-bottom: 1rem -->
```

**Scale:** 1 unit = 0.25rem (4px)
- `p-1` = 0.25rem = 4px
- `p-4` = 1rem = 16px
- `p-8` = 2rem = 32px

#### 2. Colors
```html
<div class="bg-blue-500">   <!-- Blue background -->
<div class="text-red-600">  <!-- Red text -->
<div class="border-green-400"> <!-- Green border -->
```

**Shades:** 50 (lightest) to 950 (darkest)

#### 3. Flexbox
```html
<div class="flex items-center justify-between">
  <!-- display: flex; align-items: center; justify-content: space-between; -->
</div>
```

#### 4. Grid
```html
<div class="grid grid-cols-3 gap-4">
  <!-- 3 columns with 1rem gap -->
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

#### 5. Responsive Design
```html
<div class="text-sm md:text-lg lg:text-xl">
  <!-- Small text by default -->
  <!-- Large text on medium screens (md:) -->
  <!-- Extra large text on large screens (lg:) -->
</div>
```

**Breakpoints:**
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

#### 6. Hover & Dark Mode
```html
<button class="bg-blue-500 hover:bg-blue-700 dark:bg-blue-800">
  <!-- Blue background -->
  <!-- Darker blue on hover -->
  <!-- Dark blue in dark mode -->
</button>
```

### Common Patterns

**Card:**
```html
<div class="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow">
  Card content
</div>
```

**Centered Content:**
```html
<div class="min-h-screen flex items-center justify-center">
  Centered content
</div>
```

**Button:**
```html
<button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
  Click me
</button>
```

### Learn More
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind Play (Interactive)](https://play.tailwindcss.com/)

---

## 4. Shadcn/ui Components

### What is Shadcn/ui?
Unlike traditional component libraries (Material-UI, Chakra), Shadcn/ui **copies code into your project**.

**Benefits:**
- ✅ Full control over component code
- ✅ No "black box" dependencies
- ✅ Customize anything
- ✅ Built with Radix UI (accessibility)

### How It Works

```bash
# Add a component
npx shadcn@latest add button

# This creates: src/components/ui/button.tsx
# You now OWN this code - modify it however you want!
```

### Using Components

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Component Variants

Shadcn uses `class-variance-authority` (CVA) for variants:

```tsx
// In button.tsx
const buttonVariants = cva(
  "base classes here",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border border-input bg-background",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
  }
);
```

### Available Components
- `button` - Buttons with variants
- `card` - Card container
- `badge` - Labels and tags
- `dialog` - Modal dialogs
- `form` - Form components
- `input` - Text inputs
- `select` - Dropdown select
- `toast` - Notifications
- And 40+ more!

### Learn More
- [Shadcn/ui Docs](https://ui.shadcn.com/)
- [Component Examples](https://ui.shadcn.com/examples)

---

## 5. Sanity CMS

### What is a Headless CMS?
Traditional CMS (WordPress) couples content and presentation. Headless CMS separates them:

```
Content (Sanity) → API → Your App (Next.js)
```

### Why Sanity?
- ✅ Real-time collaboration
- ✅ Powerful query language (GROQ)
- ✅ Free tier (perfect for portfolios)
- ✅ Rich text editor
- ✅ Image management

### Setup Sanity

1. **Create Project:**
   ```bash
   npm create sanity@latest
   ```

2. **Define Schema:**
   ```typescript
   // schemas/post.ts
   export default {
     name: 'post',
     type: 'document',
     title: 'Blog Post',
     fields: [
       {
         name: 'title',
         type: 'string',
         title: 'Title'
       },
       {
         name: 'slug',
         type: 'slug',
         title: 'Slug',
         options: { source: 'title' }
       },
       {
         name: 'content',
         type: 'array',
         title: 'Content',
         of: [{ type: 'block' }]
       }
     ]
   }
   ```

3. **Fetch Data in Next.js:**
   ```typescript
   import { client } from '@/lib/sanity.client';

   async function getPosts() {
     const posts = await client.fetch(`
       *[_type == "post"] {
         title,
         slug,
         publishedAt
       }
     `);
     return posts;
   }
   ```

### Learn More
- [Sanity Docs](https://www.sanity.io/docs)
- [GROQ Tutorial](https://www.sanity.io/docs/groq)

---

## 6. Deployment & DevOps

### Deploy to Vercel

**Method 1: GitHub Integration (Recommended)**

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select repository
5. Vercel auto-detects Next.js
6. Click "Deploy"

**Benefits:**
- Auto-deploy on every push
- Preview deployments for PRs
- Automatic SSL
- Global CDN

**Method 2: Vercel CLI**

```bash
# Install CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

In Vercel dashboard:
1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add your variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`

### Custom Domain

1. In Vercel, go to Domains
2. Add your domain
3. Update DNS settings at your registrar
4. Vercel handles SSL automatically

---

## 🎯 Learning Roadmap

### Week 1: Foundations
- [ ] Complete Next.js tutorial
- [ ] Learn TypeScript basics
- [ ] Practice Tailwind classes

### Week 2: Building
- [ ] Build 3 pages from scratch
- [ ] Create 5 custom components
- [ ] Implement dark mode

### Week 3: Advanced
- [ ] Set up Sanity CMS
- [ ] Add dynamic blog posts
- [ ] Implement search functionality

### Week 4: Deployment
- [ ] Deploy to Vercel
- [ ] Set up custom domain
- [ ] Add analytics

---

## 📚 Additional Resources

### YouTube Channels
- **Fireship** - Quick tech overviews
- **Web Dev Simplified** - Beginner-friendly tutorials
- **Traversy Media** - Full courses
- **Lee Robinson (Vercel)** - Next.js deep dives

### Practice Projects
1. Build a blog
2. Create a todo app
3. Make a weather dashboard
4. Build an e-commerce store
5. Create a portfolio (you're doing this!)

### Communities
- [Next.js Discord](https://nextjs.org/discord)
- [r/nextjs](https://reddit.com/r/nextjs)
- [r/webdev](https://reddit.com/r/webdev)
- [Dev.to](https://dev.to/)

---

## 💡 Pro Tips

1. **Read Error Messages** - They usually tell you exactly what's wrong
2. **Use TypeScript Strict Mode** - Catch bugs early
3. **Component Composition** - Small, reusable components
4. **Git Commits Often** - Easy to undo mistakes
5. **Deploy Early** - Find production issues sooner
6. **Ask for Help** - Stack Overflow, Discord, Reddit

---

**Keep building! 🚀**

