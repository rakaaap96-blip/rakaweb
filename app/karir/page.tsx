import { generateMetadata } from '@/lib/seo'
import Container from '@/components/ui/Container'
import { Briefcase, MessageCircle } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Karir - Bergabung Bersama RakaWeb',
  description: 'Saat ini belum ada lowongan terbuka di RakaWeb. Namun Anda tetap dapat menghubungi kami via WhatsApp atau email untuk mengirimkan CV.',
  slug: '/karir',
})

export default function KarirPage() {
  const waNumber = '6287823268333'
  const waLink = `https://wa.me/${waNumber}?text=Halo%20RakaWeb%2C%20saya%20tertarik%20bergabung.%20Apakah%20saat%20ini%20ada%20lowongan%3F`

  // JSON-LD untuk halaman karir (opsional, menunjukkan status lowongan)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Karir RakaWeb',
    description: 'Informasi lowongan pekerjaan di RakaWeb. Saat ini tidak ada lowongan terbuka.',
    url: 'https://rakaweb.vercel.app/karir',
    mainEntity: {
      '@type': 'JobPosting',
      title: 'Tidak ada lowongan terbuka',
      description: 'Saat ini RakaWeb tidak memiliki posisi yang dibuka. Silakan cek lagi nanti atau kirim CV untuk kandidat masa depan.',
      employmentType: 'FULL_TIME',
      datePosted: new Date().toISOString().split('T')[0],
      hiringOrganization: {
        '@type': 'Organization',
        name: 'RakaWeb',
        sameAs: 'https://rakaweb.vercel.app',
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'ID',
          addressLocality: 'Bogor',
        },
      },
    },
  }

  return (
    <>
      <section
        className="bg-primary-500 border-b-8 border-black min-h-screen flex items-center justify-center py-12"
        aria-labelledby="karir-heading"
      >
        <Container>
          <div className="max-w-2xl mx-auto w-full">
            <div
              className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 text-center transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              role="article"
            >
              <div
                className="w-20 h-20 mx-auto mb-6 bg-primary-100 border-4 border-black flex items-center justify-center"
                aria-hidden="true"
              >
                <Briefcase size={40} strokeWidth={2} className="text-primary-500" aria-hidden="true" />
              </div>
              <h1
                id="karir-heading"
                className="font-display text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4"
              >
                Belum Ada Lowongan Terbuka
              </h1>
              <p className="font-sans font-bold text-navy-700 mb-8 leading-relaxed text-base">
                Saat ini kami belum membuka posisi baru. Tetapi jika Anda tertarik bergabung dengan RakaWeb di masa depan,
                silakan hubungi kami via WhatsApp atau kirim CV ke email kami.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-3 font-sans font-black text-sm uppercase tracking-tight hover:bg-yellow-300 hover:text-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white"
                aria-label="Hubungi RakaWeb via WhatsApp (nomor 6287823268333)"
              >
                <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
                Hubungi via WhatsApp
              </a>
              <p className="font-sans font-bold text-sm text-navy-600 mt-6">
                Atau kirim email ke{' '}
                <a
                  href="mailto:rakaaa.p96@gmail.com"
                  className="text-primary-500 hover:text-black hover:underline underline-offset-2 decoration-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded"
                >
                  rakaaa.p96@gmail.com
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* JSON-LD untuk struktur halaman (opsional, membantu SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}