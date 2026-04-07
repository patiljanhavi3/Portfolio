# Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and configure build settings
5. Click "Deploy"

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `dist`

### Option 2: Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Click "Deploy"

### Option 3: GitHub Pages

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Add base path in vite.config.ts:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
});
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login and initialize:
```bash
firebase login
firebase init hosting
```

3. Configure firebase.json:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

4. Build and deploy:
```bash
npm run build
firebase deploy
```

## Pre-Deployment Checklist

- [ ] Update all personal information in `/src/app/data/portfolioData.ts`
- [ ] Replace profile image in data file or add to `/public/`
- [ ] Add your actual resume as `/public/resume.pdf`
- [ ] Update GitHub and LinkedIn URLs
- [ ] Update email and phone number
- [ ] Test all links (GitHub, LinkedIn, email, phone)
- [ ] Test theme toggle (light/dark mode)
- [ ] Test responsive design on mobile devices
- [ ] Test all animations and transitions
- [ ] Verify all images load correctly
- [ ] Check console for any errors
- [ ] Test smooth scrolling between sections
- [ ] Verify contact form/links work
- [ ] Check SEO meta tags (if needed)
- [ ] Test in multiple browsers

## Environment Variables

If you need environment variables:

1. Create `.env` file in root:
```env
VITE_API_KEY=your_api_key_here
```

2. Access in code:
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

3. Add to deployment platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Build & Deploy → Environment

## Performance Optimization

Already included in this portfolio:
- ✅ Lazy loading with React Suspense (if needed)
- ✅ Optimized animations with Motion
- ✅ Responsive images
- ✅ Tailwind CSS purging (automatic in production)
- ✅ Vite optimization (automatic code splitting)

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS according to Vercel's instructions

### Netlify
1. Go to Domain Settings → Custom Domains
2. Add your custom domain
3. Configure DNS according to Netlify's instructions

## SSL Certificate

Both Vercel and Netlify provide free SSL certificates automatically.

## Analytics (Optional)

Add Google Analytics or other tracking:

1. Add script to `index.html` or
2. Use a package like `react-ga4`:
```bash
npm install react-ga4
```

## Troubleshooting

**Build fails:**
- Check Node.js version (should be 18+)
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors: `npm run build`

**Images not loading:**
- Ensure images are in `/public/` directory
- Check image paths are correct
- Verify image URLs are accessible

**Animations not working:**
- Ensure Motion package is installed: `npm list motion`
- Check browser compatibility
- Clear browser cache

## Support

For issues or questions:
- Check Vite docs: [vitejs.dev](https://vitejs.dev)
- Check Tailwind CSS docs: [tailwindcss.com](https://tailwindcss.com)
- Check Motion docs: [motion.dev](https://motion.dev)

---

Happy Deploying! 🚀
