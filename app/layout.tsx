import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export const metadata: Metadata = {
  title: {
    default: 'Afya Links - Digital Healthcare Logistics & Medicine Sourcing',
    template: '%s | Afya Links'
  },
  description: 'Fast, reliable, and digital B2B medicine sourcing for clinics and pharmacies. Afya Links connects providers for verified pharmaceutical logistics across East Africa.',
  keywords: 'medicine sourcing Uganda, pharmaceutical logistics Africa, B2B healthcare Mbarara, digital pharmacy distribution, wholesale medicines, clinic supply chain',
  metadataBase: new URL('https://getafyalinks.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Afya Links - B2B Medicine Sourcing & Logistics',
    description: 'Transforming healthcare logistics with digital speed and absolute transparency. Sourcing made simple for clinics.',
    url: 'https://getafyalinks.com',
    siteName: 'Afya Links',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Afya Links Platform Overview',
      },
    ],
    locale: 'en_UG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afya Links - B2B Medicine Sourcing',
    description: 'B2B digital healthcare logistics across Africa.',
    images: ['/assets/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'Afya Links Team', url: 'https://getafyalinks.com' }],
  creator: 'Afya Links',
  publisher: 'Afya Links',
  verification: {
    google: 'i33lVtfKWUrFr42eVbeHKA0sP1oyxxO9MAnAVdpTVG0',
  },
}

export const viewport: Viewport = {
  themeColor: '#0071E3',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SEO />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
