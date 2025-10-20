# ⚡ Quick Start Guide

Your portfolio is ready! Here's everything you need to know to get started.

## 🎉 Your Site is Running!

**Local URL:** [http://localhost:3000](http://localhost:3000)

Open this in your browser to see your portfolio!

---

## 🗺️ What You Have

### Pages
- **Home** (`/`) - Hero section with call-to-action
- **About** (`/about`) - Skills, experience, and bio
- **Projects** (`/projects`) - Showcase your work
- **Blog** (`/blog`) - Articles and tutorials
- **Contact** (`/contact`) - Ways to reach you

### Components
- **Navbar** - Navigation bar with active link highlighting
- **Footer** - Social links and site info
- **Shadcn/ui Components** - Button, Card, Badge, etc.

---

## ✏️ Customize Your Portfolio (5-Minute Setup)

### 1. Update Personal Info

**File: `src/app/page.tsx`** (Home Page)
```typescript
// Line 7-9: Change the hero text
<h1>Your Name Here</h1>
<p>Your tagline here</p>
```

**File: `src/components/Navbar.tsx`**
```typescript
// Line 24: Change logo
<Link href="/" className="text-xl font-bold">
  Your Name  {/* ← Change this */}
</Link>
```

**File: `src/components/Footer.tsx`**
```typescript
// Update social links (lines 45-65)
href="https://github.com/YOUR_USERNAME"
href="https://linkedin.com/in/YOUR_PROFILE"
href="mailto:YOUR_EMAIL@example.com"
```

### 2. Add Your Skills

**File: `src/app/about/page.tsx`**
```typescript
// Line 5-9: Update your skills
const skills = {
  frontend: ["Your", "Skills", "Here"],
  backend: ["Your", "Backend", "Skills"],
  tools: ["Your", "Tools"],
};
```

### 3. Add Your Projects

**File: `src/app/projects/page.tsx`**
```typescript
// Line 7-32: Replace with your actual projects
const projects = [
  {
    title: "Your Project Name",
    description: "What your project does",
    technologies: ["Tech", "Stack"],
    github: "https://github.com/you/project",
    demo: "https://your-project.com",
  },
  // Add more projects...
];
```

---

## 🎨 Change Colors & Styling

### Update Theme Colors

**File: `tailwind.config.ts`**
```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color-here',
    },
  },
}
```

### Common Tailwind Color Classes
- `bg-blue-600` - Blue background
- `text-red-500` - Red text
- `border-green-400` - Green border

Replace any color class in your components!

---

## 📝 Content Management

### Current Status: Static Data
Right now, your projects and blog posts are **hardcoded** in the files.

### Future: Sanity CMS (Optional)
When you're ready to manage content easily:

1. **Sign up at [sanity.io](https://www.sanity.io/)**
2. **Create a project** (free tier)
3. **Copy Project ID** to `.env.local`
4. **Follow the Sanity setup guide** in README.md

---

## 🚀 Deploy Your Portfolio (10 Minutes)

### Option 1: Vercel (Easiest - Recommended)

1. **Create GitHub repo:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"
   - **Done!** Your site is live at `your-project.vercel.app`

### Option 2: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

---

## 🛠️ Development Commands

```bash
# Start development server (already running!)
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Check for code issues
npm run lint

# Add new Shadcn component
npx shadcn@latest add [component-name]
```

### Available Components to Add:
```bash
npx shadcn@latest add dialog      # Modal dialogs
npx shadcn@latest add form        # Form components
npx shadcn@latest add input       # Text inputs
npx shadcn@latest add toast       # Notifications
npx shadcn@latest add avatar      # User avatars
npx shadcn@latest add tabs        # Tab navigation
```

---

## 📚 File Structure Quick Reference

```
Portfolio/
├── src/
│   ├── app/                  # 📄 Pages (edit these for content)
│   │   ├── page.tsx          # Home page
│   │   ├── about/page.tsx    # About page
│   │   ├── projects/page.tsx # Projects page
│   │   ├── blog/page.tsx     # Blog listing
│   │   └── contact/page.tsx  # Contact page
│   │
│   ├── components/           # 🧩 Reusable components
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── Footer.tsx        # Footer
│   │   └── ui/               # Shadcn components
│   │
│   └── lib/                  # 🔧 Utilities
│       └── sanity.client.ts  # Sanity CMS setup
│
├── public/                   # 🖼️ Static files (images, etc.)
├── .env.local                # 🔒 Environment variables (secrets)
├── tailwind.config.ts        # 🎨 Tailwind customization
└── package.json              # 📦 Dependencies
```

---

## 🎯 Next Steps

### Immediate (Do Now):
- [ ] Open [http://localhost:3000](http://localhost:3000)
- [ ] Update personal info (name, links)
- [ ] Add your skills in About page
- [ ] Replace placeholder projects with real ones

### This Week:
- [ ] Customize colors and styling
- [ ] Add your own projects
- [ ] Write your first blog post
- [ ] Deploy to Vercel

### This Month:
- [ ] Set up Sanity CMS for content
- [ ] Add custom domain
- [ ] Implement contact form
- [ ] Add analytics

---

## 💡 Pro Tips

1. **Save Often** - Ctrl+S or Cmd+S
2. **Hot Reload** - Changes appear instantly in browser
3. **Check Console** - Press F12 for browser dev tools
4. **Git Commits** - Commit after each feature
5. **Mobile First** - Test on phone view (F12 → device toolbar)

---

## 🆘 Troubleshooting

### Server won't start?
```bash
# Kill existing process
npx kill-port 3000

# Restart
npm run dev
```

### Changes not showing?
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Restart dev server

### TypeScript errors?
```bash
# Check errors
npx tsc --noEmit

# Clear Next.js cache
rm -rf .next
npm run dev
```

### Need help?
- Check `LEARNING.md` for detailed guides
- Check `README.md` for full documentation
- Google the error message
- Ask on [Next.js Discord](https://nextjs.org/discord)

---

## 📖 Learn as You Build

### Key Files to Understand:
1. **`src/app/page.tsx`** - Learn React components
2. **`src/components/Navbar.tsx`** - Learn client components
3. **`tailwind.config.ts`** - Learn Tailwind customization
4. **`next.config.ts`** - Learn Next.js configuration

### Experiment!
- Change colors in Tailwind classes
- Add new sections to pages
- Create new components
- Try different layouts

**You learn by doing!** 🚀

---

## ✅ Checklist Before Deployment

- [ ] Updated personal information
- [ ] Replaced placeholder content
- [ ] Tested all pages
- [ ] Added real project links
- [ ] Updated social media links
- [ ] Checked mobile responsiveness
- [ ] Fixed any TypeScript errors
- [ ] Created GitHub repository
- [ ] Set up environment variables

---

## 🎓 Learning Resources

Included in this project:
- **`LEARNING.md`** - Complete learning guide
- **`README.md`** - Full documentation
- **This file** - Quick reference

External resources:
- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com)

---

## 🌟 You're All Set!

Your portfolio is professional, modern, and ready to showcase your skills.

**Current Status:** ✅ Development server running at `http://localhost:3000`

**Next Action:** Open the link above and start customizing!

---

**Questions?** Check `README.md` or `LEARNING.md` for detailed guides.

**Happy coding!** 🚀💻✨

