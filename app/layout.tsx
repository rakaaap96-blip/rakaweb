// app/layout.tsx
import type { Metadata, Viewport } from 'next'
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google981a924a0f89d79b',
  },
}

export const viewport: Viewport = {
  themeColor: '#4169E1',
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
      <body className={inter.className}>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {schemas.map((schema, idx) => (
          <script
            key={idx}
            id={`schema-${idx}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <SkipLink />
        <Navbar />
        <main id="main-content" className="pt-16" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_VERCEL_ENV && <Analytics />}
        <ScrollToTopWrapper />
        <CustomScrollbar />

        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        {gtmId && (
          <>
            <Script id="gtm" strategy="lazyOnload">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');
              `}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  )
}