# Santhosh — Engineering Universe

The cinematic portfolio of Thunga Santhosh Kumar Reddy, featuring full-stack applications and AI engineering projects. This repository contains the current portfolio design from [Engineering Universe](https://santhosh-engineering-universe.thungasanthoshkumarr.chatgpt.site/), adapted to run with standard Next.js.

## Included

- Eight sections: Home, About, Engineering Universe, Selected Work, Journey, Education, Philosophy, and Contact.
- Case studies for ForgeAI, DentOS AI, AgriAI, and LipSpeak, with their GitHub or live demo links.
- The updated black-suit portrait, résumé, contact links, and social profiles.
- Madanapalle Institute of Technology and Science, graduation year 2027, and the supplied Microsoft and Oracle certificate titles.
- Responsive navigation, native smooth section scrolling, Next.js case-study links, a short opening sequence, and reduced-motion support.
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

Before review, run all three checks in order:

```sh
npm run typecheck
npm run lint
npm run build
```

Test the home page and all four case-study routes. Check the menu and layouts at 320, 375, 390, 430, 768, and 1024 CSS pixels. Confirm Explore my work lands at Selected Work, each project opens, Selected work returns to `/#work`, direct page refresh works, and browser back/forward restores navigation. Tab through the links, close the mobile menu with Escape, and open the résumé. Enable Reduce Motion in the operating system and repeat the navigation in Chrome and Safari.

The dev script still runs Next.js. Its small adapter also accepts the host/port flags used by the internal QA preview; ordinary `npm run dev` keeps the standard local behavior. No command above commits, pushes, or publishes anything.

## Deploy to Vercel

Import or reconnect `santhosh18v/Personal-Portfolio` with the repository root as the project root. The committed `vercel.json` selects Next.js, `npm ci`, `npm run build`, and `.next` output so this repository no longer uses the previous Vite build configuration.

Canonical metadata uses `SITE_URL`, then Vercel's production domain, then the repository's verified homepage, `https://santhoshreddy.vercel.app`. For another host or a custom domain, set `SITE_URL` to its full HTTPS URL before building; see `.env.example`. No API keys or ChatGPT Sites account are needed to run this portfolio.

## Edit content

| File                              | Content                                                              |
| --------------------------------- | -------------------------------------------------------------------- |
| `data/projects.ts`                | Featured projects, case studies, technologies, and destination links |
| `data/skills.ts`                  | Technology groups                                                    |
| `data/journey.ts`                 | Journey chapters                                                     |
| `data/education.ts`               | College, graduation year, and certifications                         |
| `data/socials.ts`                 | Email, phone, résumé, social links, and canonical URL                |
| `components/scenes/HeroScene.tsx` | Opening portrait and role text                                       |
| `app/globals.css`                 | Shared visual design and responsive styles                           |
| `public/resume.pdf`               | Downloadable résumé                                                  |

Project routes are `/work/forgeai`, `/work/dentos-ai`, `/work/agriai`, and `/work/lipspeak`.

## Motion and accessibility

The opening sequence lasts about 2.25 seconds. GSAP loads separately only when motion is allowed; native scrolling remains usable if that chunk fails. Project reveals, the journey path, and shared scene reveals live in separate modules under `lib/motion`. Desktop portrait drift is limited to 3.5% scale. Smaller screens use short reveals without camera/parallax effects.

The optional Three.js dust loads near its scene on desktop, pauses out of view or in a hidden tab, and disposes its resources on navigation, preference changes, or WebGL context loss. All sections and case studies remain available without WebGL. Reduced motion disables the intro, parallax, atmosphere, and scroll animations. Fonts are local and preloaded through Next.js; secondary images load lazily.

## Assets and usage

See `ASSET_CREDITS.md` for image and font credits. The project displays are conceptual interface illustrations. The reference video is not included in the site.

This is a personal portfolio with no open-source license. Please contact the owner before reusing the design, content, or personal assets.
