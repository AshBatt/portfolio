# Aashima Batra - Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring a sleek dark theme, smooth animations, and interactive elements including a cat cursor and Konami code easter egg.

🌐 **Live Site:** [bestgirlfriendinthe.world](https://bestgirlfriendinthe.world)

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## 📝 How to Update Content

All content is stored in JSON files in the `data/` folder for easy editing without touching code:

### 1. **Projects** (`data/projects.json`)
Update your projects, tech stack, and GitHub links:
```json
{
  "id": 1,
  "title": "Project Name",
  "description": "Brief description",
  "techStack": ["React", "Node.js"],
  "github": "https://github.com/yourusername/repo",
  "demo": "https://demo-url.com",
  "featured": true
}
```

### 2. **Experience** (`data/experience.json`)
Add or update work experience:
```json
{
  "company": "Company Name",
  "role": "Your Role",
  "type": "Full-time",
  "startDate": "Jun 2024",
  "endDate": "Present",
  "location": "City, Country",
  "description": "What you did..."
}
```

### 3. **Education** (`data/education.json`)
Update educational background:
```json
{
  "institution": "University Name",
  "degree": "Bachelor of Engineering - Computer Science",
  "startDate": "2020",
  "endDate": "2024",
  "location": "City, Country",
  "description": "Details about your studies"
}
```

### 4. **Achievements** (`data/achievements.json`)
Add new achievements:
```json
{
  "title": "Achievement Name",
  "description": "Description of the achievement",
  "icon": "trophy"  // or "medal"
}
```

### 5. **Instagram Reels** (`data/instagram.json`)
Update featured Instagram reels:
```json
{
  "id": "1",
  "url": "https://www.instagram.com/ashesnbats/reel/YOUR_REEL_ID/"
}
```

### 6. **Skills** (`data/skills.json`)
Update your technical skills:
```json
{
  "frontend": ["React", "Angular", "TypeScript"],
  "backend": ["Node.js", "C#", ".NET"],
  "database": ["MongoDB", "MySQL"]
}
```

### 7. **Social Links** (`components/Footer.tsx`)
Update GitHub, LinkedIn, Instagram links in the Footer component (lines 28-40).

### 8. **Resume**
Replace `public/resume.pdf` with your updated resume file.

## 🎨 Features

- **Dark/Light Mode Toggle** - Automatic theme switching
- **Oneko Cat Cursor** - Cute cat follows your mouse (desktop only)
- **Konami Code Easter Egg** - Type `↑ ↑ ↓ ↓ ← → ← → B A` for a surprise! 🎉
- **Smooth Animations** - Framer Motion powered transitions
- **Responsive Design** - Works perfectly on all devices
- **Instagram Integration** - Showcase your content creator side
- **Contact Form** - Web3Forms integration (configure access key in `components/Contact.tsx`)

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (80%) + Custom animations (20%)
- **Animations:** Framer Motion
- **Font:** Outfit (Google Fonts)
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Project Structure

```
portfolio-aashima/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles & theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Hero.tsx          # Landing section
│   ├── Experience.tsx    # Work experience
│   ├── Projects.tsx      # Project showcase
│   ├── Contact.tsx       # Contact form
│   └── ...
├── data/                  # Content (easy to update!)
│   ├── projects.json
│   ├── experience.json
│   ├── achievements.json
│   └── ...
├── public/               # Static assets
│   ├── resume.pdf
│   ├── oneko.gif        # Cat cursor sprite
│   └── ...
└── lib/                  # Utilities
```

## 🎯 Customization Tips

### Change Colors
Edit `app/globals.css` (lines 4-36) to modify the color scheme:
```css
--primary: 255 92% 76%;    /* Purple */
--accent: 186 82% 53%;     /* Cyan */
```

### Contact Form Setup
1. Get a free API key from [web3forms.com](https://web3forms.com)
2. Add it to `components/Contact.tsx` (line 22)

### Modify Section Order
Edit `app/page.tsx` to rearrange sections.

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically
4. Connect custom domain in Vercel settings

### Custom Domain Setup
In Vercel project settings:
1. Add domain: `bestgirlfriendinthe.world`
2. Update DNS records as instructed by Vercel
3. SSL certificate auto-configured ✅

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 💡 Pro Tips

- **Instagram embeds** only work on deployed domains (not localhost)
- **Cat cursor** only appears on desktop devices
- **Konami code** can be triggered with keyboard: `↑ ↑ ↓ ↓ ← → ← → B A`
- **Scroll button** appears after scrolling 300px down

## 🐛 Troubleshooting

**Instagram reels not showing?**
- Embeds only work on production domains
- Check if URL ends with trailing slash: `...reel/ID/`

**Cat cursor not appearing?**
- Only works on desktop (fine pointer devices)
- Check if `public/oneko.gif` exists

**Contact form not working?**
- Add Web3Forms access key in `components/Contact.tsx`

## 📄 License

Personal portfolio website. Feel free to use as inspiration!

---

Built with ❤️ by Gurjot (hint: try the Konami code!)
