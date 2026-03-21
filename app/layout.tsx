import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Afya Links - B2B Medicine Sourcing & Logistics',
  description: 'Connect clinics, pharmacies, and drivers for efficient medicine sourcing and delivery. Afya Links simplifies B2B pharmaceutical logistics.',
  keywords: 'medicine, pharmacy, clinic, sourcing, logistics, B2B, healthcare',
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Afya Links - B2B Medicine Sourcing & Logistics',
    description: 'Connect clinics, pharmacies, and drivers for efficient medicine sourcing and delivery.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
