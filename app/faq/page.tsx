import { generateMetadata } from '@/lib/seo'
import Container from '@/components/ui/Container'
import { ChevronDown } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'FAQ - Pertanyaan Umum Seputar Jasa Website',
  description: 'Temukan jawaban atas pertanyaan umum tentang jasa pembuatan website, harga, waktu pengerjaan, SEO, dan layanan purna jual RakaWeb.',
  slug: '/faq',
})

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan website?',
    answer: 'Waktu pengerjaan website biasanya antara 2-4 minggu tergantung kompleksitas fitur yang dibutuhkan. Untuk website sederhana seperti company profile, bisa selesai dalam 2 minggu.',
  },
  {
    question: 'Apakah website yang dibuat sudah mobile friendly?',
    answer: 'Ya, semua website yang kami buat sudah fully responsive dan mobile friendly. Website akan tampil sempurna di semua perangkat (desktop, tablet, dan smartphone).',
  },
  {
    question: 'Apakah saya bisa mengedit konten sendiri?',
    answer: 'Tentu. Kami akan memberikan akses ke dashboard admin yang mudah digunakan. Anda bisa mengedit teks, gambar, dan konten lainnya tanpa perlu skill coding.',
  },
  {
    question: 'Apakah harga sudah termasuk hosting dan domain?',
    answer: 'Harga dasar adalah untuk pembuatan website saja. Namun kami memiliki paket lengkap yang sudah termasuk hosting premium dan domain untuk 1 tahun pertama.',
  },
  {
    question: 'Apakah ada garansi setelah website selesai?',
    answer: 'Ya, kami memberikan garansi free maintenance selama 1 bulan setelah launching. Untuk kelanjutan, kami menyediakan paket maintenance bulanan.',
  },
  {
    question: 'Apakah website yang dibuat SEO friendly?',
    answer: '100% SEO friendly! Website dibangun dengan struktur kode yang optimal untuk SEO, kecepatan loading tinggi, dan sudah terintegrasi dengan meta tags.',
  },
  {
    question: 'Teknologi apa yang digunakan RakaWeb?',
    answer: 'Kami menggunakan teknologi modern: Next.js, TypeScript, TailwindCSS, dan Framer Motion. Hasilnya website super cepat, aman, dan mudah dikembangkan.',
  },
  {
    question: 'Apakah RakaWeb melayani klien di luar Bogor?',
    answer: 'Ya, kami melayani klien dari seluruh Indonesia. Proses konsultasi dan kolaborasi dapat dilakukan secara online via Zoom, WhatsApp, atau email.',
  },
]

export default function FAQPage() {
  // JSON-LD untuk FAQPage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  }

  return (
    <>
      {/* Hero Section - Neubrutalism */}
      <section
        className="pt-24 pb-16 bg-primary-500 border-b-8 border-black"
        aria-labelledby="faq-hero-heading"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div
              className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              aria-hidden="true"
            >
              FAQ
            </div>
            <h1
              id="faq-hero-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight"
            >
              Pertanyaan <span className="text-yellow-300">Umum</span>
            </h1>
            <p className="font-sans text-base md:text-lg font-bold text-white bg-black/20 p-3 border-2 border-black max-w-2xl mx-auto leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Temukan jawaban atas pertanyaan yang sering diajukan tentang layanan kami.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Accordion - Neubrutalism */}
      <section
        className="py-20 bg-white border-b-8 border-black"
        aria-labelledby="faq-list-heading"
      >
        <Container>
          <h2 id="faq-list-heading" className="sr-only">
            Daftar pertanyaan yang sering diajukan
          </h2>
          <div className="max-w-3xl mx-auto space-y-5">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                <summary
                  className="flex cursor-pointer justify-between items-center p-5 font-sans font-black text-base uppercase tracking-tight text-black list-none hover:bg-yellow-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    strokeWidth={3}
                    className="text-black transition-transform duration-150 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-5 pb-5 pt-3 border-t-4 border-black">
                  <p className="font-sans font-bold text-navy-700 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* JSON-LD untuk SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}