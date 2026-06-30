# EU Staging Site — Collaborator Guide

This repo is the staging environment for the TruckerCloud European website.

**Live staging URL:** https://eustaging-tceuwebsite.vercel.app

---

## Setup (one time)

1. Install [Node.js](https://nodejs.org) (v18 or later)
2. Clone this repo:
   ```bash
   git clone https://github.com/reed-soyunbot/eustaging.git
   cd eustaging
   npm install
   ```
3. Install [Claude Code](https://claude.ai/code) if you want AI-assisted editing

---

## Making edits

### Run locally first
```bash
npm run dev
```
Opens at http://localhost:3000 — changes hot-reload automatically.

### Key files to edit

| What you want to change | File |
|------------------------|------|
| Homepage content | `src/app/page.tsx` |
| Navigation / header | `src/components/Header.tsx` |
| Footer | `src/components/Footer.tsx` |
| A partner program page | `content/programs-json/<slug>.json` |
| Blog posts | `src/app/blog/` |
| Images | `public/images/` |
| Site-wide styles | `src/app/globals.css` |

### Program pages (partner-specific)
Each insurance partner has a JSON config at `content/programs-json/<slug>.json`. Edit that file to change the hero text, supported ELD providers, contact info, etc. No code changes needed — the page auto-generates from the JSON.

---

## Deploying

Push to the `main` branch and the site deploys automatically:

```bash
git add <files you changed>
git commit -m "describe what you changed"
git push origin main
```

Deployment takes ~2 minutes. Check https://eustaging-tceuwebsite.vercel.app to confirm.

---

## Using Claude Code

If you have Claude Code installed, open this repo in it and describe what you want to change in plain English. For example:

- "Change the hero headline on the homepage to..."
- "Add a new section below the pricing table that says..."
- "Update the contact email on the sentry program page"

Claude Code knows the file structure and will make the edits directly. After it's done, commit and push.

---

## Questions?

Contact Reed at Reed@truckercloud.com.
