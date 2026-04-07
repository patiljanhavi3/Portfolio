# Customization Guide

## Quick Customization Steps

### 1. Personal Information

Edit `/src/app/data/portfolioData.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1-234-567-8900",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  // ... update all fields
};
```

### 2. Profile Image

**Option A: Use External URL**
Update the `profileImage` field in `personalInfo`:
```typescript
profileImage: "https://your-image-url.com/photo.jpg"
```

**Option B: Use Local Image**
1. Add your image to `/public/profile.jpg`
2. Update the `profileImage` field:
```typescript
profileImage: "/profile.jpg"
```

### 3. Projects

Update the `projects` array in `/src/app/data/portfolioData.ts`:

```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description...",
    impact: "What impact it made...",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://your-image-url.com/project.jpg", // or "/projects/project1.jpg"
    github: "https://github.com/your-username/project-repo",
    live: "https://your-project.com", // or null if no live demo
    award: "1st Prize" // optional, remove if no award
  },
  // Add more projects...
];
```

### 4. Skills

Update the `skills` object:

```typescript
export const skills = {
  languages: ["JavaScript", "TypeScript", "Python"],
  frameworks: ["React", "Next.js", "Express"],
  tools: ["Git", "Docker", "AWS"],
  domains: ["Web Development", "DevOps", "Cloud Computing"]
};
```

### 5. Experience

Update the `experience` array:

```typescript
export const experience = [
  {
    id: 1,
    role: "Your Job Title",
    company: "Company Name",
    period: "Jan 2024 – Present",
    description: "What you did...",
    type: "internship" // or "program", "opensource"
  },
  // Add more experiences...
];
```

### 6. Certifications

Update the `certifications` array:

```typescript
export const certifications = [
  {
    id: 1,
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "2024",
    category: "Web Development" // or "AI/ML", "Cloud Computing", etc.
  },
  // Add more certifications...
];
```

### 7. Leadership Roles

Update the `leadership` array:

```typescript
export const leadership = [
  {
    id: 1,
    role: "Your Role",
    organization: "Organization Name",
    period: "2024 – Present"
  },
  // Add more roles...
];
```

### 8. Color Theme

To change colors, edit `/src/styles/theme.css`:

```css
:root {
  --background: #YOURCOLOR;
  --primary: #YOURCOLOR;
  --accent: #YOURCOLOR;
  /* ... other colors */
}
```

Current color scheme:
- **Primary (Lilac)**: #A78BFA
- **Accent (Pink)**: #FBCFE8
- **Background**: #F8F7FF
- **Secondary**: #F3F0FF

### 9. Resume File

1. Add your resume PDF to `/public/resume.pdf`
2. If you want to use a different filename, update all resume links in components:
   - `/src/app/components/Navbar.tsx`
   - `/src/app/components/Hero.tsx`

Search for `/resume.pdf` and replace with your filename.

### 10. Section Content

Edit section descriptions:

**About Section:**
```typescript
export const about = {
  summary: "Your professional summary..."
};
```

**Achievements:**
```typescript
export const achievements = [
  "🏆 Your first achievement",
  "🌟 Your second achievement",
  // Add more...
];
```

## Advanced Customization

### Change Section Order

Edit `/src/app/App.tsx` and reorder components:

```tsx
<main>
  <Hero />
  <Projects />  {/* Moved up */}
  <About />
  <Skills />
  {/* ... other sections */}
</main>
```

### Add New Section

1. Create new component in `/src/app/components/YourSection.tsx`
2. Import and add to `/src/app/App.tsx`:

```tsx
import { YourSection } from './components/YourSection';

// In the main component:
<main>
  {/* ... existing sections */}
  <YourSection />
</main>
```

3. Add navigation link in `/src/app/components/Navbar.tsx`:

```typescript
const navLinks = [
  // ... existing links
  { name: 'Your Section', href: '#your-section' },
];
```

### Modify Animations

Edit animation settings in any component:

```tsx
// Change animation duration
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.0 }} // Change this
>

// Change animation delay
<motion.div
  transition={{ delay: 0.5 }} // Change this
>

// Disable animation
<div> {/* Just use regular div instead of motion.div */}
```

### Change Fonts

1. Add font to `/src/styles/fonts.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

2. Update theme in `/src/styles/theme.css`:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Modify Layout

Each component has its own responsive layout. Example:

```tsx
// Change from 2 columns to 3 columns on large screens
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Content */}
</div>
```

Common Tailwind breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

### Change Rounded Corners

Find and replace border radius classes:
- `rounded-xl` → `rounded-2xl` (more rounded)
- `rounded-2xl` → `rounded-xl` (less rounded)
- `rounded-3xl` → `rounded-xl` (much less rounded)

### Modify Shadows

Find and replace shadow classes:
- `shadow-lg` → `shadow-xl` (bigger shadow)
- `shadow-xl` → `shadow-2xl` (even bigger)
- Add shadow color: `shadow-primary/20` (20% opacity)

## Testing Changes

After making changes:

1. **Development Server:**
```bash
npm run dev
```

2. **Build Test:**
```bash
npm run build
```

3. **Check Console:**
Open browser DevTools (F12) and check for errors

4. **Test Responsive:**
- Use browser DevTools device toolbar
- Test on actual mobile devices

5. **Test Dark Mode:**
Click the theme toggle button in the navbar

## Component File Locations

Quick reference for editing:

```
/src/app/components/
├── Navbar.tsx          → Navigation bar, theme toggle
├── Hero.tsx            → Hero section, profile image
├── About.tsx           → About me section
├── Skills.tsx          → Skills showcase
├── Projects.tsx        → Project cards
├── Experience.tsx      → Work experience & leadership
├── Certifications.tsx  → Certificates with flip animation
├── Contact.tsx         → Contact information
├── Footer.tsx          → Footer with social links
└── ScrollToTop.tsx     → Scroll to top button
```

## Tips

1. **Backup First**: Always backup your changes before major modifications
2. **Test Incrementally**: Make small changes and test frequently
3. **Use Git**: Commit changes regularly to track your modifications
4. **Check Mobile**: Always test responsive design on mobile
5. **Optimize Images**: Use compressed images for better performance
6. **Keep It Clean**: Remove unused code and imports

## Need Help?

- Check the main README.md for project overview
- Check DEPLOYMENT.md for deployment instructions
- Look at existing components for patterns and examples
- Use browser DevTools to inspect and debug

---

Happy Customizing! ✨
