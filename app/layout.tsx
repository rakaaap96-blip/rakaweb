// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { 
  generateMetadata as seoMetadata,
  generateSchemaWebSite,
  generateSchemaOrganization,
  generateSchemaLocalBusiness,
  generateSchemaService
} from '@/lib/seo'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import ScrollToTopWrapper from '@/components/ScrollToTopWrapper'
import SkipLink from '@/components/ui/SkipLink'
import CustomScrollbar from '@/components/ui/CustomScrollbar'

const inter = Inter({ subsets: ['latin'] })

const baseMetadata = seoMetadata({
  title: 'RakaWeb - Jasa Pembuatan Website Profesional di Bogor',
  description: 'Jasa pembuatan website profesional di Bogor. Solusi website UMKM, company profile, dan ecommerce dengan harga terjangkau dan SEO-friendly.',
})

export const metadata: Metadata = {
  ...baseMetadata,
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    generateSchemaWebSite(),
    generateSchemaOrganization(),
    generateSchemaLocalBusiness(),
    generateSchemaService(),
  ]

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <html lang="id" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#4169E1" />
        <meta name="google-site-verification" content="google981a924a0f89d79b.html" />
        {schemas.map((schema, idx) => (
          <Script
            key={idx}
            id={`schema-${idx}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className={inter.className}>
        <SkipLink />
        <Navbar />
        <main id="main-content" className="pt-16" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Analytics />
        <ScrollToTopWrapper />
        <CustomScrollbar />
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
    </html>
  )
}