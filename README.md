# Santhosh — Engineering Universe

The cinematic portfolio of Thunga Santhosh Kumar Reddy, featuring full-stack applications and AI engineering projects. This repository contains the current portfolio design from [Engineering Universe](https://santhosh-engineering-universe.thungasanthoshkumarr.chatgpt.site/), adapted to run with standard Next.js.

## Included

- Eight sections: Home, About, Engineering Universe, Selected Work, Journey, Education, Philosophy, and Contact.
- Case studies for ForgeAI, DentOS AI, AgriAI, and LipSpeak, with their GitHub or live demo links.
- The updated black-suit portrait, résumé, contact links, and social profiles.
- Madanapalle Institute of Technology and Science, graduation year 2027, and the supplied Microsoft and Oracle certificate titles.
- Responsive navigation, native section and project links, cinematic scroll effects, and reduced-motion support.
- Self-hosted fonts, local images, and an optional Three.js atmosphere with a graceful fallback.

## Run locally

Use Node.js 22.13 or later and npm.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`.

```sh
npm run build
npm start
```

`npm run typecheck` checks TypeScript. `npm run lint` runs ESLint.

## Deploy to Vercel

Import or reconnect `santhosh18v/Personal-Portfolio` with the repository root as the project root. The committed `vercel.json` selects Next.js, `npm ci`, `npm run build`, and `.next` output so this repository no longer uses the previous Vite build configuration.

Canonical metadata uses Vercel's production domain automatically. For another host or an explicit custom domain, set `SITE_URL` to the full HTTPS URL before building; see `.env.example`. No API keys or ChatGPT Sites account are needed to run this portfolio.

## Edit content

| File | Content |
| --- | --- |
| `data/projects.ts` | Featured projects, case studies, technologies, and destination links |
| `data/skills.ts` | Technology groups |
| `data/journey.ts` | Journey chapters |
| `data/education.ts` | College, graduation year, and certifications |
| `data/socials.ts` | Email, phone, résumé, social links, and canonical URL |
| `components/scenes/HeroScene.tsx` | Opening portrait and role text |
| `app/globals.css` | Shared visual design and responsive styles |
| `public/resume.pdf` | Downloadable résumé |

Project routes are `/work/forgeai`, `/work/dentos-ai`, `/work/agriai`, and `/work/lipspeak`.

## Assets and usage

See `ASSET_CREDITS.md` for image and font credits. The project displays are conceptual interface illustrations. The reference video is not included in the site.

This is a personal portfolio with no open-source license. Please contact the owner before reusing the design, content, or personal assets.
