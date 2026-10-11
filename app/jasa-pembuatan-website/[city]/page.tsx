import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import LocationSections from '@/components/locations/LocationSections'
import {
  generateMetadata as generateSeoMetadata,
  generateSchemaBreadcrumbList,
  generateSchemaFAQ,
} from '@/lib/seo'
import { getLocation, locations, type LocationData } from '@/lib/locations'

interface PageProps {
  params: Promise<{ city: string }>
}

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://rakawebpro.vercel.app').replace(/\/$/, '')

// URL location page memakai segmen terpisah: /jasa-pembuatan-website/bogor.
// Folder seperti app/jasa-pembuatan-website-[city] TIDAK bekerja di App Router,
// karena dynamic segment harus menjadi seluruh segmen folder.
function locationPath(city: string) {
  return `/jasa-pembuatan-website/${city}`
}

// Hanya kota yang terdaftar di lib/locations.ts yang boleh dirender. Tanpa ini
// Next akan membuat halaman untuk slug sembarang, dan itu berisiko dilihat Google
// sebagai doorway page.
export const dynamicParams = false

export function generateStaticParams() {
  return locations.map((location) => ({ city: location.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params
  const location = getLocation(city)

  if (!location) {
    return generateSeoMetadata({
      title: 'Halaman Lokasi Tidak Ditemukan',
      description: 'Halaman lokasi yang Anda cari tidak ditemukan.',
      slug: locationPath(city),
      noIndex: true,
    })
  }

  return generateSeoMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    slug: locationPath(city),
  })
}

function buildLocationSchemas(location: LocationData, slug: string) {
  const url = `${SITE_URL}${slug}`
  const serviceName = `Jasa Pembuatan Website di ${location.city}`

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      serviceType: 'Web Development',
      description: location.metaDescription,
      url,
      provider: {
        '@type': 'LocalBusiness',
        name: 'RakaWeb',
        url: SITE_URL,
        telephone: '+6287823268333',
      },
      areaServed: [
        { '@type': 'City', name: location.cityFormal },
        { '@type': 'AdministrativeArea', name: location.province },
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'IDR',
        lowPrice: '999000',
        offerCount: 3,
      },
    },
    generateSchemaFAQ(location.faqs),
    generateSchemaBreadcrumbList([
      { name: 'Beranda', url: '/' },
      { name: serviceName, url: slug },
    ]),
  ]
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params
  const location = getLocation(city)

  if (!location) notFound()

  const slug = locationPath(city)
  const schemas = buildLocationSchemas(location, slug)

  return (
    <>
      {/* Hero */}
      <section
        className="pt-24 pb-16 bg-primary-500 border-b-8 border-black"
        aria-labelledby="location-hero-heading"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div
              className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              aria-hidden="true"
            >
              Melayani {location.cityFormal}
            </div>

            <h1
              id="location-hero-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight"
            >
              {location.h1Prefix}{' '}
              <span className="text-yellow-300">{location.h1Highlight}</span>
            </h1>

            <p className="font-sans text-base md:text-lg font-bold text-white bg-black/20 p-3 border-2 border-black max-w-2xl mx-auto leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {location.intro[0]}
            </p>

            <div className="flex justify-center">
              <Button
                href="/kontak"
                size="lg"
                className="bg-white text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black"
                aria-label={`Konsultasi gratis pembuatan website di ${location.city}`}
              >
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <LocationSections location={location} />

      {/* FAQ */}
      <section
        className="py-16 bg-primary-500 border-b-8 border-black"
        aria-labelledby="faq-heading"
      >
        <Container>
          <h2
            id="faq-heading"
            className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter text-center mb-10"
          >
            Pertanyaan Seputar Website di <span className="text-yellow-300">{location.city}</span>
          </h2>
          <ServiceFAQ faqs={location.faqs} />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-500" aria-labelledby="cta-heading">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2
              id="cta-heading"
              className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter"
            >
              Butuh Website di {location.city}?{' '}
              <span className="text-yellow-300">Konsultasi Gratis</span>
            </h2>
            <p className="font-sans text-base font-bold text-white max-w-xl mx-auto">
              Ceritakan kebutuhan Anda. Kami siapkan saran struktur halaman dan
              estimasi biaya dalam tiga hari kerja.
            </p>
            <div className="flex justify-center">
              <Button
                href="/kontak"
                size="lg"
                className="bg-white text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black"
                aria-label={`Hubungi kami untuk website di ${location.city}`}
              >
                Hubungi Kami Sekarang
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}