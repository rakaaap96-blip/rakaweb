import { CheckCircle, MapPin, Landmark, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { servicesData } from '@/data/services'
import type { LocationData } from '@/lib/locations'

const serviceLinks = [
  {
    href: '/jasa-pembuatan-website-umkm',
    name: servicesData.umkm.title,
    price: servicesData.umkm.pricing[0].price,
  },
  {
    href: '/jasa-pembuatan-website-company-profile',
    name: servicesData.company.title,
    price: servicesData.company.pricing[0].price,
  },
  {
    href: '/jasa-pembuatan-website-sekolah',
    name: servicesData.school.title,
    price: servicesData.school.pricing[0].price,
  },
]

export default function LocationSections({ location }: { location: LocationData }) {
  return (
    <>
      {/* Pembuka */}
      <section className="py-16 bg-white border-b-8 border-black" aria-labelledby="about-heading">
        <Container>
          <h2
            id="about-heading"
            className="font-display text-3xl sm:text-4xl font-black text-navy-900 uppercase tracking-tighter mb-6"
          >
            Tentang Layanan Kami di{' '}
            <span className="text-primary-600">{location.city}</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {location.intro.slice(1).map((paragraph, idx) => (
              <p key={idx} className="font-sans text-base text-navy-800 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Keunggulan */}
      <section className="py-16 bg-primary-50 border-b-8 border-black" aria-labelledby="why-heading">
        <Container>
          <h2
            id="why-heading"
            className="font-display text-3xl sm:text-4xl font-black text-navy-900 uppercase tracking-tighter text-center mb-10"
          >
            Kenapa Pilih <span className="text-primary-600">RakaWeb</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {location.why.map((item) => (
              <div
                key={item.title}
                className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-display text-xl font-black text-navy-900 uppercase mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-navy-800 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industri */}
      <section className="py-16 bg-white border-b-8 border-black" aria-labelledby="industries-heading">
        <Container>
          <h2
            id="industries-heading"
            className="font-display text-3xl sm:text-4xl font-black text-navy-900 uppercase tracking-tighter text-center mb-10"
          >
            Cocok Untuk <span className="text-primary-600">Bisnis di {location.city}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {location.industries.map((item) => (
              <div
                key={item.name}
                className="bg-primary-50 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-display text-lg font-black text-navy-900 uppercase mb-3">
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-navy-800 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Area dan landmark */}
      <section className="py-16 bg-primary-100 border-b-8 border-black" aria-labelledby="area-heading">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <h2
                id="area-heading"
                className="font-display text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tighter mb-5 flex items-center gap-3"
              >
                <MapPin size={28} aria-hidden="true" className="text-primary-600 shrink-0" />
                Area yang Dilayani
              </h2>
              <ul className="flex flex-wrap gap-2">
                {location.areas.map((area) => (
                  <li
                    key={area}
                    className="bg-white border-2 border-black px-3 py-1 font-mono text-sm font-bold text-navy-900"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tighter mb-5 flex items-center gap-3">
                <Landmark size={28} aria-hidden="true" className="text-primary-600 shrink-0" />
                Landmark di Sekitar {location.city}
              </h3>
              <ul className="space-y-2">
                {location.landmarks.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-navy-800">
                    <CheckCircle
                      size={18}
                      aria-hidden="true"
                      className="text-primary-600 shrink-0 mt-0.5"
                    />
                    <span className="font-sans text-sm font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="max-w-3xl mx-auto mt-10 font-sans text-sm font-bold text-navy-900 bg-white border-2 border-black p-4 text-center leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {location.localNote}
          </p>
        </Container>
      </section>

      {/* Paket dan harga */}
      <section className="py-16 bg-white border-b-8 border-black" aria-labelledby="pricing-heading">
        <Container>
          <h2
            id="pricing-heading"
            className="font-display text-3xl sm:text-4xl font-black text-navy-900 uppercase tracking-tighter text-center mb-4"
          >
            Paket dan <span className="text-primary-600">Harga</span>
          </h2>
          <p className="text-center font-sans text-sm font-bold text-navy-700 max-w-2xl mx-auto mb-10">
            Harga sama untuk semua kota. Yang berbeda adalah kami datang langsung
            ke lokasi Anda di {location.city} untuk konsultasi awal.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceLinks.map((service) => (
              <div
                key={service.href}
                className="bg-primary-50 border-4 border-black p-6 flex flex-col shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-display text-lg font-black text-navy-900 uppercase mb-2">
                  {service.name}
                </h3>
                <p className="font-mono text-2xl font-black text-primary-600 mb-4">
                  {service.price}
                </p>
                <Button
                  href={service.href}
                  className="mt-auto bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black text-center"
                  aria-label={`Lihat detail ${service.name}`}
                >
                  Lihat Detail <ArrowRight size={18} aria-hidden="true" />
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}