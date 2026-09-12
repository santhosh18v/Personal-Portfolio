# Santhosh — Engineering Universe

A cinematic personal portfolio for **Thunga Santhosh Kumar Reddy**, focused on software engineering, full-stack development, and AI systems.

The portfolio is designed as an interactive engineering journey rather than a traditional resume-style website, combining cinematic storytelling, project case studies, smooth motion, and a premium dark visual system.

## Live Portfolio

**https://santhoshreddy.vercel.app/**

## Highlights

- Cinematic hero experience with a custom professional portrait
- Smooth scroll-driven transitions and motion effects
- Interactive **Engineering Universe** skills section
- Dedicated project showcases and detailed case studies
- Responsive desktop, tablet, and mobile experience
- Reduced-motion support for accessibility
- SEO-ready metadata and production deployment support

## Featured Projects

### ForgeAI
**AI Orchestration Platform**

A multi-agent engineering platform where specialized AI agents collaborate across product planning, backend development, testing, and documentation.

### DentOS AI
**AI-Powered Dental Clinic Operating System**

A multi-tenant dental clinic SaaS platform with patient management, appointments, billing, role-based access control, clinical workflows, and AI-assisted dictation.

### AgriAI
**Intelligent Agriculture Platform**

An AI-powered agriculture platform for crop disease detection, pest identification, soil guidance, and intelligent farming assistance.

### LipSpeak
**Visual Speech Recognition System**

A computer-vision and deep-learning project exploring lip reading and visual speech recognition for communication assistance.

## Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

### Motion & Experience
- GSAP
- Lenis
- Three.js

### UI & Styling
- Radix UI
- Lucide React
- Barlow Condensed
- Manrope

## Portfolio Sections

1. Home
2. About
3. Engineering Universe
4. Selected Work
5. Journey
6. Education
7. Philosophy
8. Contact

## Project Case Studies

The featured projects have dedicated case-study routes:

```text
/work/forgeai
/work/dentos-ai
/work/agriai
/work/lipspeak
```

Each case study presents the project through sections such as:

- Overview
- Problem
- Why I built it
- Architecture
- Technology
- Engineering challenges
- Features
- What I learned

## Run Locally

### Requirements

- Node.js 22.13 or later
- npm

### Installation

```bash
git clone https://github.com/santhosh18v/Personal-Portfolio.git
cd Personal-Portfolio
npm ci
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

### Code Quality

```bash
npm run typecheck
npm run lint
```

## Project Structure

```text
Personal-Portfolio/
├── app/                 # Next.js application routes
├── components/          # UI, scenes, navigation, and visual components
├── data/                # Projects, skills, journey, education, and socials
├── lib/                 # Shared utilities
├── public/              # Images, resume, and static assets
├── vendor/              # Local styling dependencies
├── README.md
├── package.json
└── vercel.json
```

## Main Content Files

| File | Purpose |
| --- | --- |
| `data/projects.ts` | Featured projects and case-study content |
| `data/skills.ts` | Technology groups |
| `data/journey.ts` | Engineering journey timeline |
| `data/education.ts` | Education and certifications |
| `data/socials.ts` | Social links, email, resume, and site URL |
| `components/scenes/HeroScene.tsx` | Cinematic hero section |
| `app/globals.css` | Global visual system and responsive styling |
| `public/resume.pdf` | Downloadable resume |

## Deployment

The portfolio is configured for deployment on **Vercel**.

For a custom production domain, set:

```env
SITE_URL=https://your-domain.com
```

## Contact

**Thunga Santhosh Kumar Reddy**  
Software Engineer • AI Developer

- GitHub: https://github.com/santhosh18v
- LinkedIn: https://linkedin.com/in/thunga-santhosh-reddy
- Email: thungasanthoshkumarreddy@gmail.com

## Assets & Usage

See `ASSET_CREDITS.md` for image and font credits.

This repository contains a personal portfolio and its associated design, content, and personal assets. No open-source license is included. Please contact the owner before reusing the design, content, or personal assets.
