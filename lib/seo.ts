// lib/seo.ts
import { Metadata } from 'next'
import { MetadataProps } from '@/types'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://rakaweb.vercel.app').replace(/\/$/, '')
const SITE_NAME = 'RakaWeb'
const SITE_DESCRIPTION = 'Jasa pembuatan website profesional di Bogor. Solusi website UMKM, company profile, dan ecommerce dengan harga terjangkau.'
const SITE_KEYWORDS = [
  'jasa website',
  'jasa pembuatan website',
  'jasa pembuatan website di bogor',
  'pembuatan website bogor',
  'web developer bogor',
  'jasa website umkm bogor',
  'company profile bogor',
  'ecommerce bogor'
]

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage,
  slug = '',
  noIndex = false,
}: MetadataProps): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const pageDescription = description || SITE_DESCRIPTION
  const pageKeywords = keywords || SITE_KEYWORDS
  const pageUrl = `${SITE_URL}${slug.startsWith('/') ? slug : `/${slug}`}`
  const pageOgImage = ogImage?.startsWith('http') ? ogImage : `${SITE_URL}${ogImage || '/og-image.jpg'}`

  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords.join(', '),
    authors: [{ name: 'RakaWeb Team', url: SITE_URL }],
    creator: 'RakaWeb',
    publisher: 'RakaWeb',
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: SITE_NAME,
      locale: 'id_ID',
      alternateLocale: ['en_US'],
      type: 'website',
      images: [
        {
          url: pageOgImage,
          secureUrl: pageOgImage,
          width: 1200,
          height: 630,
          alt: title || SITE_NAME,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageOgImage],
      creator: '@rakawed',
      site: '@rakawed',
    },
    alternates: {
      canonical: pageUrl,
    },
    category: 'technology',
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    },
  }
}

export function generateSchemaWebSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateSchemaOrganization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://facebook.com/rakawed',
      'https://instagram.com/rakawed',
      'https://linkedin.com/company/rakawed',
    ],
    email: 'rakaaa.p96@gmail.com',
    telephone: '+6287823268333',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raya Narogong, Kp. Kembang Kuning, Ds. Kembang Kuning, RT 014/RW 004 No. 51',
      addressLocality: 'Bogor',
      addressRegion: 'Jawa Barat',
      postalCode: '16710',
      addressCountry: 'Indonesia',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+6287823268333',
      contactType: 'customer service',
      availableLanguage: ['Indonesian', 'English'],
      areaServed: 'ID',
    },
  }
}

export function generateSchemaLocalBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    image: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raya Narogong, Kp. Kembang Kuning, Ds. Kembang Kuning, RT 014/RW 004 No. 51',
      addressLocality: 'Bogor',
      addressRegion: 'Jawa Barat',
      postalCode: '16710',
      addressCountry: 'Indonesia',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.597147,
      longitude: 106.806038,
    },
    url: SITE_URL,
    telephone: '+6287823268333',
    priceRange: 'Rp500.000 - Rp50.000.000',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00',
      },
    ],
    sameAs: [
      'https://facebook.com/rakawed',
      'https://instagram.com/rakawed',
      'https://linkedin.com/company/rakawed',
    ],
  }
}

export function generateSchemaBreadcrumbList(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

export function generateSchemaService() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development',
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: 'Bogor',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Paket Pembuatan Website',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website UMKM',
            description: 'Paket website untuk usaha kecil dan menengah',
          },
          price: '999000',
          priceCurrency: 'IDR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Company Profile',
            description: 'Website perusahaan profesional',
          },
          price: '2500000',
          priceCurrency: 'IDR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Sekolah',
            description: 'Website Sekolah Terlengkap',
          },
          price: '2500000',
          priceCurrency: 'IDR',
        },
      ],
    },
  }
}