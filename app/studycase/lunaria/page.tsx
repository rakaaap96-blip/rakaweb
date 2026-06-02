import { generateMetadata } from '@/lib/seo'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = generateMetadata({
  title: 'Study Case: Lunaria',
  description: 'Merancang pengalaman bridal eksklusif yang membangun hasrat sebelum konsultasi.',
  slug: '/studycase/lunaria',
})

export default function StudyCaseLunaria() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Lunaria - Luxury Bridal Couture Website',
    description: 'Merancang pengalaman bridal eksklusif yang membangun hasrat sebelum konsultasi.',
    url: 'https://rakaweb.vercel.app/studycase/lunaria',
    creator: { '@type': 'Organization', name: 'RakaWeb' },
    dateCreated: '2025',
  }

  return (
    <>
      <main className="bg-white min-h-screen py-12 overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="mb-16" aria-labelledby="lunaria-hero-heading">
          <Container>
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <Link href="/studycase" className="inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-black">
                <ArrowLeft size={16} aria-hidden="true" /> Kembali
              </Link>
              
              <a href="https://lunaria-xi.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-black bg-primary-500 text-white px-5 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Lihat Demo Langsung <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="border-4 border-black p-6 md:p-10 bg-primary-500 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h1 id="lunaria-hero-heading" className="text-4xl md:text-7xl text-center font-black mb-6 uppercase italic tracking-tighter text-yellow-300">LUNARIA</h1>
              <p className="text-lg md:text-2xl font-medium text-center border-t-2 border-white pt-4">Designing a Luxury Bridal Experience That Builds Desire Before Inquiry</p>
            </div>
          </Container>
        </section>

        {/* BENTO GRID SECTION */}
        <section className="mb-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              
              {/* Row 1: Info Proyek & Overview */}
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Info Proyek</h3>
                <dl className="space-y-4 font-bold">
                  <div className="border-b-2 border-black pb-2">
                    <dt className="text-gray-500 text-sm">Klien</dt>
                    <dd>Lunaria Bridal Couture</dd>
                  </div>
                  <div className="border-b-2 border-black pb-2">
                    <dt className="text-gray-500 text-sm">Tahun</dt>
                    <dd>2025</dd>
                  </div>
                  <div className="border-b-2 border-black pb-2">
                    <dt className="text-gray-500 text-sm">Kategori</dt>
                    <dd>Luxury Bridal & Experience Design</dd>
                  </div>
                  <div className="pt-2">
                    <a href="https://lunaria-xi.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-500 hover:underline break-all">
                      lunaria-xi.vercel.app <ExternalLink size={14} />
                    </a>
                  </div>
                </dl>
              </div>

              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Overview</h3>
                <p>Lunaria adalah konsep website bridal couture yang berfokus pada pengalaman eksklusif. Alih-alih berfungsi sebagai katalog gaun, website ini dirancang untuk membangun aspirasi, kepercayaan, dan rasa eksklusivitas yang mendorong calon pelanggan untuk melakukan konsultasi.</p>
              </div>

              {/* Row 2: SS Hero */}
              <div className="col-span-full border-4 border-black bg-gray-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative h-80 md:h-96">
                <Image src="/images/studycase/lunaria/LunariaHeroStudycase.avif" alt="Hero section Lunaria" fill className="object-cover" />
              </div>

              {/* Row 3: The Challenge & Craftsmanship */}
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">The Challenge</h3>
                <ul className="space-y-4 font-medium">
                  <li><strong>Premium Brands Often Look Generic:</strong> Banyak brand bridal premium tampil seperti toko online biasa. Nilai eksklusif sulit terasa.</li>
                  <li><strong>Confidence Gap:</strong> Calon pelanggan butuh keyakinan tentang kualitas dan hasil sebelum membuat kontak.</li>
                  <li><strong>Information Friction:</strong> Informasi berlebihan (harga, paket) dapat menghambat pengalaman emosional.</li>
                </ul>
              </div>
              <div className="border-4 border-black bg-gray-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                <Image src="/images/studycase/lunaria/LunariaSection.avif" alt="Craftsmanship section" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" />
              </div>

              {/* Row 4: Design Strategy & 6 Solution Pillars */}
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Design Strategy</h3>
                <p><strong>Selling the Experience, Not the Product.</strong> Alih-alih fokus menjual gaun, website dirancang untuk menjual perjalanan emosional menuju hari pernikahan. Setiap section dibangun untuk memperkuat persepsi bahwa ini adalah pengalaman personal.</p>
              </div>
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">6 Solution Pillars</h3>
                <ol className="list-decimal pl-5 space-y-2 font-medium">
                  <li><strong>Luxury First Impression:</strong> Typography elegan dan palet netral.</li>
                  <li><strong>Craftsmanship Showcase:</strong> Menampilkan detail proses.</li>
                  <li><strong>Curated Collection:</strong> Tanpa overload pilihan.</li>
                  <li><strong>Bespoke Journey:</strong> Penjelasan tahapan layanan.</li>
                  <li><strong>Emotional Testimonials:</strong> Validasi sosial premium.</li>
                  <li><strong>Seamless Conversion:</strong> CTA konsultasi strategis.</li>
                </ol>
              </div>

              {/* Row 5: SS Collection (Center Aligned - 2 Columns) */}
              <div className="col-span-full grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Spacer kiri agar konten di tengah */}
                <div className="hidden md:block md:col-span-2"></div>
                
                {/* Image Container dengan span 8 (2 kolom utama) */}
                <div className="md:col-span-8 border-4 border-black bg-gray-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative h-64 overflow-hidden">
                  <Image 
                    src="/images/studycase/lunaria/LunariaCollection.avif" 
                    alt="Curated collection" 
                    fill 
                    className="object-cover" 
                  />
                </div>

                {/* Spacer kanan */}
                <div className="hidden md:block md:col-span-2"></div>
              </div>

              {/* Row 6: Mobile/SEO & Key Takeaways */}
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Mobile-First & SEO</h3>
                <p>Website dirancang responsif dengan semantic HTML, hierarki heading yang jelas, dan metadata terorganisir untuk mendukung trafik organik serta kenyamanan pada perangkat mobile.</p>
              </div>
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Key Takeaways</h3>
                <p>Brand premium tidak hanya menjual produk; mereka menjual perasaan dan kepercayaan. Website ini menerjemahkan nilai tersebut menjadi pengalaman digital yang meyakinkan.</p>
              </div>

              {/* Row 7: Outcome */}
              <div className="col-span-full border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Outcome</h3>
                <p className="italic font-bold">Hasil akhirnya adalah website bridal couture yang membantu membangun persepsi eksklusif, meningkatkan kepercayaan calon pelanggan, dan mendorong konsultasi melalui pengalaman digital yang selaras dengan positioning brand.</p>
              </div>

              {/* Row 8: CTA */}
              <div className="col-span-full border-4 border-black p-8 text-center bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-3xl font-black mb-6 uppercase italic">Tertarik dengan hasil serupa?</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button href="/kontak" className="bg-primary-500 text-white font-black uppercase tracking-widest px-10 py-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all hover:text-black">
                      Hubungi Kami Sekarang
                    </Button>
                    <a href="https://lunaria-xi.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-4 border-black bg-white px-8 py-5 font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all hover:bg-primary-500 hover:text-white">
                      Kunjungi Live Demo <ExternalLink size={18} />
                    </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}