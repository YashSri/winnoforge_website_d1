# FORGE Website — Technical Architecture Report
**Prepared for:** Hosting & Handoff Reference  
**Project:** forge-v2  
**Framework:** Next.js 16.1.6  
**Date:** April 2026

---

## TABLE OF CONTENTS

1. Executive Summary
2. Full Tech Stack
3. Project Folder Structure
4. Routing Architecture
5. Component Architecture
6. Modal & Form System
7. API Layer
8. Database Layer (Supabase)
9. Email System (Resend)
10. Environment Variables & Deployment Guide

---

## PAGE 1 — EXECUTIVE SUMMARY

The FORGE website is a full-stack web application built on **Next.js 16.1.6** using the **App Router** pattern. It serves as the public-facing platform for the FORGE innovation ecosystem run by Winnovation.

### What the Website Does

- **Marketing & Information:** Presents the FORGE ecosystem, programs, community, citadel, and corporate pages to prospective students and institutions.
- **Lead Generation:** Two contact forms (Join the Ecosystem / Partner With FORGE) collect user details and send formatted emails to the Winnovation team via the Resend API.
- **Certificate System:** A full certificate management system backed by Supabase allows admins to issue, verify, and revoke participation certificates with QR codes.

### Hosting Requirements at a Glance

| Requirement | Detail |
|---|---|
| Hosting Platform | Vercel (recommended) or any Node.js host |
| Node Version | 18+ |
| Package Manager | npm (package-lock.json) |
| Build Command | `npm run build` |
| Start Command | `npm run start` |
| Environment Variables | 4 required (see Page 10) |
| Database | Supabase (external, cloud-hosted) |
| Email Service | Resend (external, cloud-hosted) |
| Storage | No file storage — all assets are static in `/public` |

---

## PAGE 2 — FULL TECH STACK

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16.1.6 | React framework, App Router, SSR/SSG |
| **React** | 19.2.3 | UI rendering |
| **TypeScript** | 5.x | Type safety across all files |
| **Tailwind CSS** | 4.x | Utility-first styling (no config file — configured inline in globals.css via `@theme`) |
| **GSAP** | 3.14.2 | Scroll animations on Hero, Navbar, Impact, HowItWorks sections |
| **Lucide React** | 0.563.0 | Icon library used throughout UI |
| **Matter.js** | 0.20.0 | Physics engine (used in specific interactive sections) |

### Backend / API

| Technology | Version | Purpose |
|---|---|---|
| **Next.js API Routes** | 16.1.6 | Server-side API endpoints inside `app/api/` |
| **Resend** | 6.12.2 | Transactional email delivery for contact forms |
| **Supabase JS** | 2.98.0 | Database client for certificate system |
| **PapaParse** | 5.5.3 | CSV parsing for bulk certificate uploads |
| **QRCode** | 1.5.4 | QR code image generation for certificates |

### Dev Tools

| Technology | Purpose |
|---|---|
| **Biome** | Linting and formatting (replaces ESLint + Prettier) |
| **PostCSS** | CSS processing pipeline for Tailwind |
| **Vercel CLI** | Deployment and build tooling |

### External Services

| Service | Usage |
|---|---|
| **Resend** | Sends join/partner form submissions to shiwansh@winnovation.org |
| **Supabase** | PostgreSQL database for certificate records |
| **GitHub** | Source control — repo: YashSri/winnoforge_website_d1 |
| **Vercel** | Hosting and CI/CD (auto-deploys on push to `main`) |

---

## PAGE 3 — PROJECT FOLDER STRUCTURE

```
winnoforge-main/                        ← Project root
│
├── app/                                ← Next.js App Router (all pages & API)
├── components/                         ← All React components
├── public/                             ← Static files (images, videos, logos)
├── lib/                                ← Utility functions and service clients
├── assets/                             ← Additional asset files
│
├── package.json                        ← Dependencies and scripts
├── package-lock.json                   ← npm lockfile (used by Vercel)
├── next.config.ts                      ← Next.js configuration
├── tsconfig.json                       ← TypeScript configuration
├── postcss.config.mjs                  ← PostCSS (Tailwind processing)
├── biome.json                          ← Linting/formatting rules
├── vercel.json                         ← Vercel deployment settings
├── .gitignore                          ← Files excluded from git
├── .env.local                          ← Local environment variables (NOT in git)
│
└── components/winnoforge-main1/        ← Legacy/backup nested project (not primary)
```

### Important Notes on Folder Roles

- `app/` is the **only** directory Next.js uses for routing and pages.
- `components/winnoforge-main1/` is a nested copy of an older project. The actual pages in `app/` import from this folder. It is **not** a second running app — it is just a component library location.
- `public/` is served directly at the root URL. A file at `public/airtel.png` is accessible at `/airtel.png` on the live site.
- `.env.local` is never committed to GitHub. Environment variables must be set manually on Vercel.

---

## PAGE 4 — ROUTING ARCHITECTURE

Next.js App Router maps folder names inside `app/` directly to URL paths.

### All Routes

| URL Path | File | Type | Description |
|---|---|---|---|
| `/` | `app/page.tsx` | Page | Home page — Hero, Philosophy, HowItWorks |
| `/programs` | `app/programs/page.tsx` | Page | FORGE Programs / execution pipeline |
| `/community` | `app/community/page.tsx` | Page | FORGE Community benefits |
| `/ecosystem` | `app/ecosystem/page.tsx` | Page | Ecosystem architecture with logos |
| `/citadel1` | `app/citadel1/page.tsx` | Page | Innovation Citadel page |
| `/corporate` | `app/corporate/page.tsx` | Page | Corporate partnership page |
| `/cert` | `app/cert/page.tsx` | Page | Certificate landing / search |
| `/cert/admin` | `app/cert/admin/page.tsx` | Page | Admin dashboard (certificate management) |
| `/cert/verify/[token]` | `app/cert/verify/[token]/page.tsx` | Dynamic Page | Certificate verification display |
| `/api/contact` | `app/api/contact/route.ts` | API | Join / Partner form submission handler |
| `/api/cert/admin` | `app/api/cert/admin/route.ts` | API | Certificate statistics and admin actions |
| `/api/cert/upload` | `app/api/cert/upload/route.ts` | API | Bulk CSV certificate upload |
| `/api/cert/certificates` | `app/api/cert/certificates/route.ts` | API | List/paginate certificates |
| `/api/cert/certificates/[id]/qrcode` | `.../qrcode/route.ts` | API | Generate QR code for a certificate |
| `/api/cert/certificates/[id]/revoke` | `.../revoke/route.ts` | API | Revoke a certificate |
| `/api/cert/verify/[token]` | `.../route.ts` | API | Verify certificate token |

### How Pages Import Their Content

The pages in `app/` are thin re-export wrappers. For example:

```
app/programs/page.tsx
  └── imports → components/winnoforge-main1/components1/program1/page (2).tsx
                  └── which renders the full ProgramsPage component
```

This pattern applies to: `/programs`, `/community`, `/ecosystem`, `/citadel1`, `/corporate`.

### Root Layout

`app/layout.tsx` wraps every page with:
- `ModalProvider` — provides global modal state (join/partner forms)
- `FormModal` — renders the floating modal overlay on every page
- Global CSS (`globals.css`)
- HTML metadata (title, description)

---

## PAGE 5 — COMPONENT ARCHITECTURE

### Top-Level Components (`components/`)

These are the main building blocks used across pages:

| Component | File | Used On | Description |
|---|---|---|---|
| **Navbar** | `Navbar.tsx` | All pages | Top navigation bar with GSAP animation on scroll, "Partner With FORGE" button opens partner modal |
| **Hero** | `Hero.tsx` | Home (`/`) | Full-screen hero with GSAP text reveal, FORGE logo animation, supporter logos strip |
| **Philosophy** | `Philosophy.tsx` | Home (`/`) | Horizontal scrolling philosophy cards |
| **HowItWorks** | `HowItWorks.tsx` | Home (`/`) | Step-by-step journey with animated SVG path |
| **Footer** | `Footer.tsx` | All pages | Footer with social links (Instagram, X, LinkedIn), "Join the Revolution" opens join modal |
| **SplashScreen** | `SplashScreen.tsx` | Home (`/`) | Loading animation shown on first visit |
| **Citadel** | `Citadel.tsx` | Home (imported) | Citadel showcase block |
| **Impact** | `Impact.tsx` | Home (imported) | Stats and impact numbers with GSAP counter animation |
| **PartnershipCards** | `PartnershipCards.tsx` | Home (imported) | Partnership tier display cards |

### Ecosystem Sub-Components (`components/winnoforge-main1/components1/ecosystem/`)

| Component | Description |
|---|---|
| `EcosystemHeroSection.tsx` | Centered hero banner for the Ecosystem page |
| `EcosystemHowWorksSection.tsx` | "Built on Winnovation" section with partner logos grid |
| `EcosystemPillarsSection.tsx` | Three showcase cards (Industry / Operator / Academic) + three pillar cards |
| `EcosystemEngineSection.tsx` | Additional ecosystem engine description section |

### Modal System (`components/modal/`)

Four files work together as a global overlay form system (detailed on Page 6).

### Animation Library

GSAP is the primary animation engine:
- `useGSAP()` hook from `@gsap/react` is used inside components
- `ScrollTrigger` plugin drives scroll-based animations
- All GSAP components are marked `"use client"` since animations require browser APIs

---

## PAGE 6 — MODAL & FORM SYSTEM

The contact form system works as a global overlay accessible from any page.

### Architecture

```
app/layout.tsx
  └── <ModalProvider>          ← Wraps entire app, holds modal state
        └── {children}         ← All page content
        └── <FormModal />      ← Single modal instance at root level
```

### How It Works

1. Any button on any page (Navbar, Footer, CTA sections) calls `useModal().open("join")` or `useModal().open("partner")`
2. `ModalContext` stores the current modal type in React state
3. `FormModal` reads that state and renders the correct form
4. On submit, the form POSTs to `/api/contact`
5. The API route formats the data and sends an email via Resend
6. Success screen is shown to the user

### Files

| File | Role |
|---|---|
| `ModalContext.tsx` | React Context — stores `modalType`, exposes `open()` and `close()` |
| `JoinButton.tsx` | `"use client"` button — calls `open("join")` on click |
| `PartnerButton.tsx` | `"use client"` button — calls `open("partner")` on click |
| `FormModal.tsx` | The full modal UI — contains JoinForm, PartnerForm, SuccessScreen |

### Join Form Fields

| Field | Required |
|---|---|
| Full Name | Yes |
| Email | Yes |
| WhatsApp Number + Country Code | Yes |
| Gender | Yes |
| College / University | Yes |
| City | Yes |
| LinkedIn URL | No |
| Interest in FORGE | No |

### Partner Form Fields

| Field | Required |
|---|---|
| Full Name | Yes |
| Work Email | Yes |
| Organization | Yes |
| Designation | Yes |
| WhatsApp Number + Country Code | Yes |
| City | Yes |
| Partnership Type | Yes |
| Message / Interest | No |

---

## PAGE 7 — API LAYER

All API routes live in `app/api/` and follow Next.js Route Handler conventions.

### Contact API — `/api/contact`

**Method:** POST  
**Purpose:** Receives form data and sends an email  
**File:** `app/api/contact/route.ts`

**Request body:**
```json
{
  "formType": "join" | "partner",
  "Full Name": "...",
  "Email": "...",
  "WhatsApp": "+91 9876543210",
  ...other fields
}
```

**What it does:**
1. Reads `formType` to determine email subject line
2. Builds an HTML email from the submitted fields
3. Sends via Resend to `shiwansh@winnovation.org`
4. Reply-to is set to the submitter's email
5. Returns `{ ok: true }` on success or `{ ok: false, error: "..." }` on failure

**Dependencies:** `RESEND_API_KEY` environment variable

---

### Certificate API — `/api/cert/*`

| Endpoint | Method | Description |
|---|---|---|
| `/api/cert/admin` | GET | Returns stats: total, active, revoked certificates, event list |
| `/api/cert/admin` | POST | Admin actions: clear_all, revoke_all, restore_all, delete_event, drop_db |
| `/api/cert/upload` | POST | Accepts CSV, creates certificate records in Supabase |
| `/api/cert/certificates` | GET | Paginated list of all certificates |
| `/api/cert/certificates/[id]/qrcode` | GET | Returns QR code image (base64) for a certificate |
| `/api/cert/certificates/[id]/revoke` | POST | Marks a certificate as revoked |
| `/api/cert/verify/[token]` | GET | Verifies a certificate token, returns cert data |

**Dependencies:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_BASE_URL`

---

## PAGE 8 — DATABASE LAYER (SUPABASE)

The certificate system uses **Supabase** — a hosted PostgreSQL service.

### Database Table: `certificates`

| Column | Type | Description |
|---|---|---|
| `id` | string (UUID) | Primary key |
| `name` | string | Certificate holder name |
| `email` | string (nullable) | Email address |
| `event_name` | string | Name of the event/program |
| `issue_date` | string | Date of issuance |
| `verification_token` | string | 64-character hex token for public verification |
| `is_revoked` | number (0 or 1) | 0 = active, 1 = revoked |
| `created_at` | string | Timestamp of record creation |

### Supabase Client

**File:** `lib/supabase.ts`

```typescript
import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
```

### How Certificates Work (End-to-End)

```
Admin uploads CSV
      ↓
POST /api/cert/upload (PapaParse reads CSV)
      ↓
Records inserted into Supabase with unique verification_token
      ↓
Student receives certificate with QR code
      ↓
QR code URL: https://[domain]/cert/verify/[token]
      ↓
GET /api/cert/verify/[token] checks Supabase
      ↓
/cert/verify/[token] page shows: Valid / Revoked / Not Found
```

### Important Security Note

The `/api/cert/admin` POST endpoint (which can clear or drop all certificates) has no authentication guard. Access should be restricted at the infrastructure level or a password check should be added before going fully public.

---

## PAGE 9 — STATIC ASSETS (`public/`)

All files in the `public/` folder are served statically at the root URL with no processing.

### Directory Map

```
public/
├── forge-logo.svg                      → /forge-logo.svg
├── gear.svg                            → /gear.svg
├── airtel.png                          → /airtel.png
├── iimA.png                            → /iimA.png
├── citadel1.png                        → /citadel1.png
├── citadel_fort_20260422.png          → /citadel_fort_20260422.png
├── ecosystem-builders-20260222.jpg    → /ecosystem-builders-20260222.jpg
├── impact-campus-wide.jpg             → /impact-campus-wide.jpg
├── impact-student-led.png             → /impact-student-led.png
├── launch-step-4.jpg                  → /launch-step-4.jpg
├── Logo_Animation_Gear_to_FORGE.mp4  → /Logo_Animation_Gear_to_FORGE.mp4
│
├── logos/                              → /logos/[filename]
│   ├── airtel.png
│   ├── CJ Darcl Logistics Ltd.jpg
│   ├── Cornell Institute for Healthy Futures.png
│   ├── IIM_Calcutta_Logo.svg.png
│   ├── Infynix Communications Ltd..png
│   ├── Kratikal Tech Private Limited.webp
│   ├── Movers International Pvt. Ltd..jpg
│   ├── Perfetti Van Melle.png
│   ├── Samarth Care.webp
│   ├── Wahal Infosol logo.jpg
│   ├── du logo.jpg
│   ├── iim banglore.png
│   ├── iit kanpur.jpg
│   ├── lightstorm logo.jpg
│   ├── mankind.png
│   └── satcomlogo.png
│
├── supporters/                         → /supporters/[filename]
│   ├── winnovation.png
│   ├── faceoff.png
│   ├── founder-cube.png
│   ├── founder-remote.png
│   ├── hrjee.png
│   ├── we360ai.png
│   └── xonier.png
│
└── webp/                               → /webp/[filename]
    ├── 2.webp  (Ecosystem pillar image — Institution Layer)
    ├── 3.webp  (Used in sections)
    ├── 4.webp  (Ecosystem pillar image — Corporate Layer)
    ├── 5.webp  (Used in sections)
    ├── 6.webp  (Ecosystem pillar image — Builder Layer)
    ├── 8.webp  (Used in sections)
    └── activation-builders.webp
```

### Image Usage Notes

- All images use Next.js `<Image>` component for optimized delivery (lazy loading, WebP conversion, responsive sizing)
- The `fill` prop is used for most logo images — these require a positioned parent container
- Videos use standard HTML `<video>` tags with `suppressHydrationWarning` for React 19 compatibility

---

## PAGE 10 — ENVIRONMENT VARIABLES & DEPLOYMENT GUIDE

### Required Environment Variables

These must be set in Vercel (or your hosting platform) before the site works correctly.

| Variable | Where to Get It | Used For |
|---|---|---|
| `RESEND_API_KEY` | resend.com → API Keys | Sending contact form emails |
| `NEXT_PUBLIC_SUPABASE_URL` | supabase.com → Project Settings → API | Supabase database connection |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | supabase.com → Project Settings → API | Supabase authentication |
| `NEXT_PUBLIC_BASE_URL` | Your deployed domain (e.g. `https://winnoforge.vercel.app`) | QR code URLs in certificates |

**Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.**  
**Variables without that prefix (`RESEND_API_KEY`) are server-only and never sent to the client.**

### Vercel Deployment Steps

1. Push code to GitHub repo: `github.com/YashSri/winnoforge_website_d1`
2. Go to **vercel.com** → **Add New Project** → import the GitHub repo
3. Framework auto-detected as **Next.js** — leave all defaults
4. Before clicking Deploy, go to **Environment Variables** and add all 4 variables above
5. Click **Deploy**
6. Vercel auto-deploys every time you push to `main` branch

### Local Development Setup

```bash
# 1. Clone the repo
git clone https://github.com/YashSri/winnoforge_website_d1.git
cd winnoforge_website_d1

# 2. Install dependencies
npm install

# 3. Create environment file
# Create a file named .env.local in the project root with:
RESEND_API_KEY=your_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# 4. Run development server
npx next dev

# 5. Open http://localhost:3000
```

### Build & Production Commands

| Command | Purpose |
|---|---|
| `npx next dev` | Local development server (hot reload) |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server locally |
| `npm run lint` | Run Biome linter |

### Git & Deployment Flow

```
Local changes
    ↓
git add . && git commit -m "message"
    ↓
git push origin main
    ↓
Vercel detects push → auto builds → auto deploys
    ↓
Live at: winnoforge-website-d1.vercel.app (or custom domain)
```

### Custom Domain Setup (Vercel)

1. Go to Vercel → Project → **Settings → Domains**
2. Add your domain (e.g. `winnoforge.in`)
3. Update DNS at your registrar: add a CNAME pointing to `cname.vercel-dns.com`
4. Vercel auto-provisions SSL certificate

---

## SUMMARY TABLE

| Area | Technology | Notes |
|---|---|---|
| Framework | Next.js 16.1.6 | App Router, React Server Components |
| Language | TypeScript 5 | Strict mode enabled |
| Styling | Tailwind CSS 4 | No config file — uses `@theme` in globals.css |
| Animations | GSAP 3.14 | Client-side only, scroll-triggered |
| Icons | Lucide React | Used throughout all components |
| Email | Resend 6.12 | Server-side only, 1 env var needed |
| Database | Supabase | PostgreSQL, 2 env vars needed |
| Hosting | Vercel | Auto-deploy from GitHub main branch |
| Repo | GitHub | github.com/YashSri/winnoforge_website_d1 |
| Linting | Biome | Replaces ESLint + Prettier |
| Package Manager | npm | package-lock.json is the authoritative lockfile |

---

*This document covers the complete architecture of the FORGE website as of April 2026.*  
*For questions, contact: outreach@winnovation.org*
