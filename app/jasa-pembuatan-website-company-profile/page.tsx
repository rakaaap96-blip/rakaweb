import { servicesData } from '@/data/services'
import { generateMetadata } from '@/lib/seo'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { CheckCircle } from 'lucide-react'
import PricingTable from '@/components/services/PricingTable'

export const metadata = generateMetadata({
  title: servicesData.company.title,
  description: servicesData.company.description,
  slug: '/jasa-pembuatan-website-company-profile',
})

export default function CompanyProfilePage() {
  const data = servicesData.company

  const pricingWithRecommended = data.pricing.map((plan, idx) => ({
    ...plan,
    recommended: idx === 1,
    periode: 'Uang Muka 50%',
  }))

  // JSON-LD untuk layanan
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': data.title,
    'description': data.description,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'RakaWeb',
      'url': 'https://rakawebpro.vercel.app/',
    },
    'offers': data.pricing.map(plan => ({
      '@type': 'Offer',
      'name': plan.name,
      'price': plan.price.replace(/[^0-9]/g, ''),
      'priceCurrency': 'IDR',
      'description': plan.features.join(', '),
    })),
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-24 pb-16 bg-primary-500 border-b-8 border-black"
        aria-labelledby="hero-heading"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div
              className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              aria-hidden="true"
            >
              Company Profile
            </div>
            <h1
              id="hero-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight"
            >
              {data.title.split('Website Bisnis')[0]} <span className="text-yellow-300">Website Bisnis</span>
            </h1>
            <p className="font-sans text-base md:text-lg font-bold text-white bg-black/20 p-3 border-2 border-black max-w-2xl mx-auto leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/kontak"
                size="lg"
                className="bg-white text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black"
                aria-label="Konsultasi gratis pembuatan website company profile"
              >
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Fitur Section - Bento 3-2 */}
      <section
        className="py-20 bg-white border-b-8 border-black"
        aria-labelledby="features-heading"
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div
              className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              aria-hidden="true"
            >
              Keunggulan
            </div>
            <h2
              id="features-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter"
            >
              Fitur Lengkap <span className="text-primary-500">Website Corporate</span>
            </h2>
            <p className="font-sans text-base font-bold text-navy-700 max-w-2xl mx-auto">
              Kami membangun website company profile dengan fitur-fitur terbaik untuk meningkatkan kredibilitas perusahaan Anda.
            </p>
          </div>

          {/* Baris pertama: 3 kolom (3 kartu pertama) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {data.features.slice(0, 3).map((feature, idx) => {
              const [title, desc] = feature.includes(' – ')
                ? feature.split(' – ')
                : [feature, '']
              return (
                <div
                  key={idx}
                  className="flex gap-5 p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  role="article"
                >
                  <div
                    className="shrink-0 w-14 h-14 bg-primary-100 border-2 border-black flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <CheckCircle size={28} strokeWidth={2} className="text-green-500" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-lg uppercase tracking-tight mb-2">{title}</h3>
                    {desc && <p className="font-sans font-bold text-navy-700 text-sm leading-relaxed">{desc}</p>}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Baris kedua: 2 kolom (2 kartu sisanya, lebih lebar) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.features.slice(3, 5).map((feature, idx) => {
              const [title, desc] = feature.includes(' – ')
                ? feature.split(' – ')
                : [feature, '']
              return (
                <div
                  key={idx}
                  className="flex gap-5 p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  role="article"
                >
                  <div
                    className="shrink-0 w-14 h-14 bg-primary-100 border-2 border-black flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <CheckCircle size={28} strokeWidth={2} className="text-green-500" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-lg uppercase tracking-tight mb-2">{title}</h3>
                    {desc && <p className="font-sans font-bold text-navy-700 text-sm leading-relaxed">{desc}</p>}
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section
        className="py-20 bg-primary-50 border-b-8 border-black"
        aria-labelledby="pricing-heading"
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div
              className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              aria-hidden="true"
            >
              Investasi
            </div>
            <h2
              id="pricing-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter"
            >
              Pilihan <span className="text-primary-500">Paket Harga</span>
            </h2>
            <p className="font-sans text-base font-bold text-navy-700 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan dan budget perusahaan Anda.
            </p>
          </div>
          <PricingTable plans={pricingWithRecommended} />
        </Container>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-primary-500 border-b-8 border-black"
        aria-labelledby="cta-heading"
      >
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2
              id="cta-heading"
              className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter"
            >
              Siap Tingkatkan <span className="text-yellow-300">Kredibilitas Perusahaan?</span>
            </h2>
            <p className="font-sans text-base font-bold text-white/90 max-w-xl mx-auto">
              Dapatkan website company profile profesional sekarang juga. Konsultasi gratis tanpa biaya.
            </p>
            <Button
              href="/kontak"
              size="lg"
              className="bg-white text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black"
              aria-label="Hubungi kami untuk konsultasi pembuatan website company profile"
            >
              Hubungi Kami Sekarang
            </Button>
          </div>
        </Container>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}