# Afya Links Website - Deployment & Launch Guide

## Quick Start for Local Development

### Prerequisites
- Node.js 18.17 or later
- npm 9+ or yarn 3+

### Setup

```bash
cd website
npm install
npm run dev
```

Visit `http://localhost:3000`

## Deployment to Vercel

### Step 1: Prepare Your Repository

```bash
# Initialize git if not already done
cd website
git init

# Add all files
git add .
git commit -m "Initial commit: Afya Links marketing website"

# Add remote (replace with your GitHub repo)
git remote add origin https://github.com/yourusername/afya-links-website.git
git branch -M main
git push -u origin main
```

### Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Authorize Vercel to access your repositories

### Step 3: Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended)

1. Go to your Vercel dashboard
2. Click "New Project"
3. Select your GitHub repository
4. Click "Import"
5. Configure environment variables:
   - Click "Environment Variables"
   - Add `NEXT_PUBLIC_API_BASE_URL` = `https://your-backend-api.com/api`
   - Click "Deploy"

#### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# In your project directory
cd website
vercel

# Follow the prompts
# When asked for environment variables, add:
# NEXT_PUBLIC_API_BASE_URL = https://your-backend-api.com/api
```

### Step 4: Configure Your Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (if you have one)
4. Update your domain's DNS records to point to Vercel

## Environment Variables

### Local Development (.env.local)
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
```

### Production (Vercel Settings)
```
NEXT_PUBLIC_API_BASE_URL=https://api.afyalinks.com/api
```

## Backend API Integration

### Required Endpoints

Your backend should provide these REST API endpoints:

#### Blog API
```
GET /api/blog
- Returns: BlogPost[]
- Query params: ?limit=10

GET /api/blog/:slug
- Returns: BlogPost
```

#### Metrics API
```
GET /api/metrics
- Returns: PlatformMetrics
- Response: { ordersProcessed, activeUsers, medicinesSourced, partnersActive, deliveryRate }
```

#### Contact API
```
POST /api/contact
- Body: { name, email, phone?, company?, userType, message }
- Returns: { success: boolean, message: string }
```

### Updating API Integration

Edit `lib/api.ts` if your backend endpoints differ:

```typescript
// Example: If your blog endpoint is different
async getBlogPosts(limit?: number): Promise<BlogPost[]> {
  const query = limit ? `?limit=${limit}` : ''
  return this.fetch<BlogPost[]>(`/your-blog-endpoint${query}`)
}
```

## Post-Deployment Checklist

- [ ] Website loads correctly at your domain
- [ ] Navigation links work
- [ ] Contact form submits successfully
- [ ] Mobile responsive design verified
- [ ] All CTAs point to correct app stores
- [ ] Backend API endpoints working
- [ ] Environment variables properly set
- [ ] SEO meta tags visible in page source
- [ ] Lighthouse score > 90
- [ ] All external links verified

## Monitoring & Maintenance

### Vercel Analytics

1. In Vercel dashboard, go to Analytics
2. Monitor:
   - Page views
   - Response times
   - Core Web Vitals
   - Error rates

### Automatic Deployments

Every push to `main` branch automatically deploys to production.

### Manual Redeploy

1. In Vercel dashboard
2. Click your project
3. Click "Deployments"
4. Find a deployment and click "Redeploy"

## Updating Content

### Homepage Content
Edit: `app/page.tsx` and `components/sections/`

### Pages
- About: `app/about/page.tsx`
- Features: `app/features/page.tsx`
- Pricing: `app/pricing/page.tsx`
- Contact: `app/contact/page.tsx`
- Blog: `app/blog/page.tsx`

### Global Elements
- Header: `components/Header.tsx`
- Footer: `components/Footer.tsx`
- Colors/Theme: `tailwind.config.ts`

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Environment Variables Not Working
- Ensure variables are set in Vercel project settings
- Prefix with `NEXT_PUBLIC_` if client-side accessible
- Restart deployment after adding variables

### Pages Not Found
- Check file names are lowercase
- Verify folder structure in `app/` directory

### Images Not Loading
- Check `public/` folder exists
- Use relative paths: `/images/file.png`

## Support

For issues:
1. Check Vercel logs: Dashboard → Deployments → View Build Logs
2. Check local development: `npm run dev`
3. Review Next.js docs: [nextjs.org](https://nextjs.org)

## Next Steps

1. Run `npm install` locally
2. Test with `npm run dev`
3. Push to GitHub
4. Deploy to Vercel
5. Add your domain
6. Connect backend APIs
7. Monitor analytics

---

**Happy deploying! 🚀**
