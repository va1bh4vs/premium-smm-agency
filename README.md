# Velvet Social — Premium Social Media Management Template (Demo)

This repository is a complete starter website for a premium Social Media Management Agency built with Next.js + TypeScript + Tailwind CSS + Framer Motion.

Features:
- Dark, luxury theme with electric purple accent.
- Hero with animated social post showcase.
- Services, Portfolio, Pricing, About, Blog scaffold.
- Functional contact form (server-side demo persistence).
- Simple Admin dashboard for enquiries (demo).
- SEO basics (meta tags, sitemap, robots.txt).
- Reusable configuration at `data/config.json`.

Quick start:
1. Node 18+
2. npm install
3. npm run dev
4. Open http://localhost:3000

Production notes:
- The demo API persists to `data/enquiries.json` using Node fs. This is fine for local demos but not for production serverless deployments (files are ephemeral).
- Replace with a managed DB / serverless DB:
  - Supabase / Postgres with Prisma
  - Airtable for lightweight use
  - Firebase / Firestore
- Configure environment variables in your host:
  - `ADMIN_PASSWORD` (for admin login, if you implement login)
  - `JWT_SECRET` (if you enable token auth)

Form protection and security:
- Add CAPTCHA (reCAPTCHA v3 / hCaptcha).
- Add rate limiting and logging.
- Use HTTPS and secure cookies.

Deployment:
- Vercel: recommended. Connect repo and set environment variables.
- Netlify: possible with Next.js adapter + functions.
- For the admin & data persistence use a DB or server.

Customization:
- Edit `data/config.json` to change site name, contact details, pricing, services, and portfolio placeholders.
- Replace `/public/images/*` with your professional photography and campaign mockups.
- Tailwind styles are in `styles/globals.css` and `tailwind.config.js`.

Legal & Ethics:
- Do not present demo content as real client work.
- Obtain permissions before showing real creatives or analytics data.

If you want, I can:
- Push this project to a GitHub repo and deploy it to Vercel with environment variables set.
- Replace the demo file-based store with a Supabase (or Prisma+SQLite) implementation and wire up admin auth with secure credentials.
- Provide suggested copy and 5 example portfolio mockups and images for higher-conversion presentation.
