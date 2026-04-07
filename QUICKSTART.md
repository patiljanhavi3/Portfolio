# Quick Start Guide

Get your portfolio up and running in minutes!

## 🚀 Instant Setup (3 Steps)

### Step 1: Clone & Install
```bash
# Navigate to your project directory
cd your-portfolio-folder

# Install dependencies
npm install
```

### Step 2: Customize Your Data
Open `/src/app/data/portfolioData.ts` and update:
- Name, email, phone, LinkedIn, GitHub
- Projects (replace with your actual projects)
- Skills (add/remove as needed)
- Experience (update with your experience)
- Certifications (update with yours)

### Step 3: Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` and see your portfolio live! 🎉

## 📝 Essential Customizations

### 1. Replace Profile Image (2 minutes)

**Quick way:**
```typescript
// In portfolioData.ts, update:
profileImage: "YOUR_IMAGE_URL_HERE"
```

**Professional way:**
1. Add your photo to `/public/profile.jpg`
2. Update portfolioData.ts:
```typescript
profileImage: "/profile.jpg"
```

### 2. Update Contact Info (1 minute)
```typescript
export const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  phone: "+1-234-567-8900",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  // ...
};
```

### 3. Add Your Resume (1 minute)
1. Add your PDF to `/public/resume.pdf`
2. Done! The download links are already set up.

### 4. Update Projects (5 minutes)
Replace the placeholder projects with yours:
```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "What it does...",
    impact: "Results achieved...",
    technologies: ["React", "Node.js"],
    image: "YOUR_IMAGE_URL",
    github: "YOUR_GITHUB_LINK",
    live: null, // or "YOUR_LIVE_DEMO_LINK"
  },
];
```

## 🎨 Quick Visual Changes

### Change Primary Color
```css
/* In /src/styles/theme.css */
:root {
  --primary: #YOUR_COLOR; /* Default: #A78BFA (lilac) */
}
```

### Change Background
```css
:root {
  --background: #YOUR_COLOR; /* Default: #F8F7FF */
}
```

### Disable Dark Mode
```tsx
// In /src/app/components/Navbar.tsx
// Remove or comment out the theme toggle button
```

## 🚢 Deploy to Production

### Option 1: Vercel (Fastest - 2 minutes)
1. Push to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repo
4. Click "Deploy"
5. Done! ✨

### Option 2: Netlify
1. Push to GitHub
2. Visit [netlify.com](https://netlify.com)
3. "Add new site" → Import from GitHub
4. Deploy!

## 📱 Test Your Portfolio

### Check These:
- [ ] All links work (LinkedIn, GitHub, email, phone)
- [ ] Resume downloads correctly
- [ ] Images load properly
- [ ] Theme toggle works
- [ ] Mobile responsive (use DevTools)
- [ ] No console errors (F12 → Console)
- [ ] Smooth scrolling between sections
- [ ] All animations working

## 🆘 Common Issues & Fixes

### Issue: "npm install" fails
**Fix:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Images don't load
**Fix:**
- Check image URLs are correct
- If using local images, ensure they're in `/public/`
- Use full URLs for external images

### Issue: Dark mode not working
**Fix:**
```tsx
// Check that theme toggle is not disabled
// In Navbar.tsx, ensure theme toggle button exists
```

### Issue: Build fails
**Fix:**
```bash
# Check for TypeScript errors
npm run build

# Read the error message and fix the issue
# Usually missing imports or type errors
```

### Issue: Smooth scroll not working
**Fix:**
```tsx
// In App.tsx, ensure this exists:
useEffect(() => {
  document.documentElement.style.scrollBehavior = 'smooth';
}, []);
```

## 📚 Next Steps

1. ✅ **Customize content** → Edit `portfolioData.ts`
2. ✅ **Add your images** → Update profile and project images
3. ✅ **Test thoroughly** → Check all features work
4. ✅ **Deploy** → Use Vercel or Netlify
5. ✅ **Share** → Add portfolio link to LinkedIn, resume

## 🎯 Pro Tips

1. **Use Real Images**: Replace Unsplash placeholders with actual project screenshots
2. **Optimize Images**: Compress images before adding them (use tinypng.com)
3. **Test Mobile**: Always test on real mobile devices
4. **Keep It Updated**: Regularly update your projects and experience
5. **Use Git**: Commit your changes regularly
6. **Monitor Performance**: Use Lighthouse in Chrome DevTools
7. **Backup**: Keep a backup of your customized version
8. **Get Feedback**: Show to friends/colleagues for feedback

## 📖 More Resources

- **Full README**: See `/README.md` for complete documentation
- **Customization**: Check `/CUSTOMIZATION.md` for detailed customization guide
- **Deployment**: Read `/DEPLOYMENT.md` for all deployment options
- **Features**: View `/FEATURES.md` for complete feature list

## 💡 Customization Examples

### Add a New Project
```typescript
// In portfolioData.ts, add to projects array:
{
  id: 5, // Next ID number
  title: "New Project",
  description: "Description here...",
  impact: "Impact statement...",
  technologies: ["Tech1", "Tech2"],
  image: "IMAGE_URL",
  github: "GITHUB_URL",
  live: "LIVE_URL" // or null
}
```

### Add a New Skill Category
```typescript
// In portfolioData.ts, add to skills object:
export const skills = {
  // ... existing categories
  newCategory: ["Skill1", "Skill2", "Skill3"]
};

// Then update Skills.tsx component to display it
```

### Change Section Order
```tsx
// In App.tsx, reorder components:
<main>
  <Hero />
  <Projects />  {/* Moved up */}
  <Skills />
  <About />     {/* Moved down */}
  {/* ... */}
</main>
```

## ⚡ Performance Tips

1. **Optimize Images**: Max 1MB per image
2. **Use WebP**: Convert images to WebP format
3. **Lazy Load**: Already implemented with Motion
4. **Minimize Dependencies**: Don't add unnecessary packages
5. **Test Speed**: Use PageSpeed Insights

## 🎉 You're Ready!

Your portfolio is now set up and ready to customize. Take your time to:
1. Update all content with your information
2. Add your actual projects and images
3. Test everything thoroughly
4. Deploy to production
5. Share with the world!

Need help? Check the other documentation files or search online for specific questions.

**Good luck with your portfolio! 🚀**

---

Built with ❤️ using React + Vite + Tailwind CSS + Motion
