# Janhavi Patil - Portfolio Website

A premium, soft-aesthetic portfolio website built with React, Vite, Tailwind CSS, and Motion (Framer Motion). Designed to be recruiter-ready with elegant animations and a modern, professional look.

## 🎨 Design Features

- **Soft Lilac Aesthetic**: Light, airy UI with a beautiful lilac-dominant color palette
- **Neumorphism + Glassmorphism**: Modern design trends for a premium look
- **Smooth Animations**: Powered by Motion (formerly Framer Motion)
- **Responsive Design**: Mobile-first approach ensuring great UX on all devices
- **Theme Toggle**: Light and dark mode support
- **Scroll Animations**: Elements animate into view as you scroll

## 🎯 Color Palette

- **Base**: #F8F7FF, #F3F0FF
- **Primary**: #A78BFA (Lilac)
- **Accent**: #FBCFE8 (Light Pink)
- **Neutral**: #E5E7EB
- **Dark**: #2D2433, #1A1625 (Charcoal with purple tint)

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky navigation with theme toggle
│   │   ├── Hero.tsx             # Hero section with profile image
│   │   ├── About.tsx            # About section with highlights
│   │   ├── Skills.tsx           # Skills with chip design (no bars)
│   │   ├── Projects.tsx         # Project cards with hover effects
│   │   ├── Experience.tsx       # Professional experience & leadership
│   │   ├── Certifications.tsx   # Certificates with 3D flip animation
│   │   ├── Contact.tsx          # Contact information & achievements
│   │   ├── Footer.tsx           # Footer with social links
│   │   └── ScrollToTop.tsx      # Scroll to top button
│   ├── data/
│   │   └── portfolioData.ts     # All portfolio content and data
│   └── App.tsx                  # Main application component
├── styles/
│   ├── fonts.css                # Font imports
│   ├── tailwind.css             # Tailwind configuration + custom styles
│   ├── theme.css                # Color theme variables
│   └── index.css                # Style imports
└── public/
    ├── resume.pdf               # Resume file (placeholder)
    └── README.md                # Assets documentation
```

## 🚀 Tech Stack

- **React 18.3.1** - UI library
- **Vite 6.3.5** - Build tool
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Motion 12.23.24** - Animation library (formerly Framer Motion)
- **TypeScript** - Type safety
- **Lucide React** - Beautiful icon set

## ✨ Key Features

### Navigation
- Smooth scroll to sections
- Sticky header with blur effect
- Mobile-responsive menu
- Theme toggle (light/dark mode)
- Social links (LinkedIn, GitHub)
- Download resume button

### Hero Section
- Professional profile image with soft glow
- Rank 1 badge
- Compelling tagline and description
- CTA buttons for projects, contact, and resume

### About Section
- Concise summary
- Highlight cards with icons
- Academic excellence showcase

### Skills Section
- Grouped skill categories
- Clean chip-based design
- No percentage bars for better aesthetics
- Hover animations

### Projects Section
- Image-based project cards
- Impact statements
- Technology tags
- GitHub links
- Award badges (2nd Prize highlight)
- Hover lift effect

### Experience Section
- Professional internships
- Open source contributions
- Leadership roles
- Community involvement (IEEE/WIE, CODE, TEDx, ACM)

### Certifications Section
- 3D flip animation on hover
- Category-based color coding
- Certifications from Google, AWS, Cisco, IIT Bombay, Infosys

### Contact Section
- Multiple contact methods
- Key achievements highlight
- Location information
- Social links

## 🎬 Animations

- **Scroll Reveal**: Elements fade and slide in as you scroll
- **Hover Effects**: Cards lift, scale, and glow on hover
- **Navbar Shrink**: Navbar becomes compact on scroll with blur
- **Button Glow**: Interactive button states
- **Card Lift**: Project cards elevate on hover
- **Certificate Flip**: 3D flip animation on certificate cards
- **Floating Shapes**: Soft background animations in hero section
- **Smooth Scrolling**: Native smooth scroll behavior

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Touch-friendly interactions
- Optimized mobile menu
- Responsive grid layouts

## 🔗 Links & Contact

- **Email**: patiljanhavi306@gmail.com
- **Phone**: +91-9021268896
- **LinkedIn**: linkedin.com/in/janhavi-r-patil
- **GitHub**: github.com/janhavi-patil

## 📊 Academic Excellence

- **CGPA**: 9.86
- **Rank**: 1
- **Institution**: MMCOE Pune
- **Program**: B.Tech Computer Engineering (2024-2028)

## 🏆 Key Achievements

- 🏆 Rank 1 with 9.86 CGPA in B.Tech Computer Engineering
- 🥈 2nd Prize in Seminar Hall Booking System Competition
- 🌟 Google AI/ML Internship Selection
- 💻 Active Open Source Contributor (GSSoC '25, EcoWoc '26)
- 🎓 Multiple Industry Certifications (Google, AWS, Cisco, IIT Bombay)

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Customization

1. Update personal information in `/src/app/data/portfolioData.ts`
2. Replace placeholder images in `/public/` directory
3. Update color theme in `/src/styles/theme.css` if needed
4. Add your resume as `/public/resume.pdf`
5. Customize component styles in individual component files

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This portfolio is created for Janhavi Patil. Feel free to use as inspiration for your own portfolio!

---

Built with ❤️ using React + Vite + Tailwind CSS + Motion
