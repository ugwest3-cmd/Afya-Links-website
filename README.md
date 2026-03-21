# Afya Links Marketing Website

Official website for Afya Links - B2B Medicine Sourcing & Logistics Platform

## Features

- **Multi-page Site**: Home, About, Features, Pricing, Blog, Contact, Registration
- **Mobile Responsive**: Optimized for all devices
- **Performance Optimized**: Next.js with Tailwind CSS
- **SEO Ready**: Metadata, sitemap, and Open Graph tags
- **API Integrated**: Connects to backend for blog posts and metrics
- **Hosted on Vercel**: Automatic deployments, edge functions support

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **APIs**: Fetch API for backend integration

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Environment variables configured

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_BASE_URL=https://your-backend-api.com/api
```

## Project Structure

```
website/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── register/          # Registration page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── sections/          # Page sections (Hero, Features, etc.)
├── lib/                   # Utilities and helpers
│   ├── api.ts            # API client
│   └── types.ts          # TypeScript types
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.ts        # Next.js configuration
```

## Deployment to Vercel

### Option 1: Git Integration (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Configure environment variables in project settings
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

## Environment Variables for Production

Set these in Vercel project settings:

- `NEXT_PUBLIC_API_BASE_URL` - Your production backend URL (e.g., https://api.afyalinks.com)

## Pages & Content

### Home Page
- Hero section with value proposition
- Key benefits
- Call-to-action
- Platform statistics

### About Page
- Company mission and vision
- Core values
- How the platform operates

### Features Page
- Detailed features for clinics, pharmacies, drivers

### Pricing Page
- Transparent pricing structure for all user types
- FAQ section

### Blog Page
- Blog posts fetched from backend API
- Placeholder structure ready for integration

### Contact Page
- Contact form with backend integration
- Contact information

### Registration Page
- Registration steps for each user type
- App download links
- FAQ

## Integration with Backend API

The website expects the following API endpoints:

### Blog API
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:slug` - Get single blog post

### Metrics API
- `GET /api/metrics` - Get platform metrics

### Contact API
- `POST /api/contact` - Submit contact form

Update `lib/api.ts` if your backend uses different endpoint paths.

## Performance & SEO

- Pages are optimized for Core Web Vitals
- All images use Next.js Image component for optimization
- Metadata and Open Graph tags configured
- Lighthouse score target: >90 on mobile and desktop

## Support & Maintenance

### Common Tasks

#### Update Home Page Content
Edit `app/page.tsx` and sections in `components/sections/`

#### Add New Blog Posts
Blog posts are fetched from backend API. No code changes needed.

#### Update Pricing
Edit `app/pricing/page.tsx`

#### Change Colors/Branding
Modify `tailwind.config.ts` color palette

#### Update Contact Info
Edit `components/Footer.tsx` and `app/contact/page.tsx`

## License

© 2026 Afya Links. All rights reserved.
