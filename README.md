# MAIKR Studio Website

Premium website for **MAIKR Studio** — Expert-Guided AI Development for Real-World Applications.

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Live Site

Deployed via Vercel (auto-deploy on push to `main`).

## Project Structure

```
src/
  app/
    layout.tsx                  # Root layout (Inter font, metadata)
    page.tsx                    # Homepage
    globals.css                 # Full design system
    case-studies/
      alpha-cv/page.tsx         # Alpha CV case study
  components/
    Navbar.tsx                  # Client: scroll effect + mobile menu
    Footer.tsx                  # Server component
    ScrollReveal.tsx            # Client: IntersectionObserver animations
    ContactForm.tsx             # Client: Web3Forms submission
    sections/                   # 9 homepage section components
public/                         # Static assets (logo, backgrounds)
```

## Features

- **Next.js App Router** with static prerendering
- **TypeScript** throughout
- Mobile-first responsive design
- Dark premium theme with CSS custom properties
- Calendly booking integration
- Web3Forms contact form
- Scroll reveal animations
- SEO metadata + Open Graph tags
- Security headers via `next.config.ts`

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

## Routes

- `/` — Homepage
- `/case-studies/alpha-cv` — Alpha CV case study

## Deployment

Connected to Vercel via GitHub. Push to `main` triggers auto-deploy.

## License

© 2026 MAIKR Studio. All rights reserved.
