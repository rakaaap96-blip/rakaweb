import { generateMetadata } from '@/lib/seo'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = generateMetadata({
  title: 'Study Case: Robek Bakery',
  description: 'Membangun kepercayaan pelanggan melalui desain website artisan.',
  slug: '/studycase/robek-bakery',
})

export default function StudyCaseRobekBakery() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Robek Bakery - Website Artisan Bakery',
    description: 'Membangun kepercayaan pelanggan melalui desain website artisan yang menjual cerita sebelum menjual roti.',
    url: 'https://rakawebpro.vercel.app/studycase/robek-bakery',
    creator: { '@type': 'Organization', name: 'RakaWeb' },
    dateCreated: '2026',
  }

  return (
    <>
      <main className="bg-white min-h-screen py-12 overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="mb-16" aria-labelledby="robek-hero-heading">
          <Container>
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <Link href="/studycase" className="inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-black">
                <ArrowLeft size={16} aria-hidden="true" /> Kembali
              </Link>
              
              <a href="https://robek.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-black bg-primary-500 text-white px-5 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Lihat Demo Langsung <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="border-4 border-black p-6 md:p-10 bg-primary-500 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h1 id="robek-hero-heading" className="text-4xl md:text-7xl text-center font-black mb-6 uppercase italic tracking-tighter text-yellow-300">ROBEK BAKERY</h1>
              <p className="text-lg md:text-2xl font-medium text-center border-t-2 border-white pt-4">Designing a Website That Sells Trust Before It Sells Bread</p>
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
                    <dd>Robek Bakery</dd>
                  </div>
                  <div className="border-b-2 border-black pb-2">
                    <dt className="text-gray-500 text-sm">Tahun</dt>
                    <dd>2026</dd>
                  </div>
                  <div className="border-b-2 border-black pb-2">
                    <dt className="text-gray-500 text-sm">Kategori</dt>
                    <dd>Branding & Ecommerce</dd>
                  </div>
                  <div className="pt-2">
                    <a href="https://robek.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-500 hover:underline break-all">
                      robek.vercel.app <ExternalLink size={14} />
                    </a>
                  </div>
                </dl>
              </div>

              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Overview</h3>
                <p>Robek Bakery adalah platform digital premium bagi brand roti artisan dengan estetika klasik. Website ini mengintegrasikan narasi tentang keahlian tradisional dengan teknologi modern untuk mentransformasi cara pelanggan mengapresiasi roti, fokus pada filosofi bahan dan proses fermentasi alami.</p>
              </div>

              {/* Row 2: SS Hero */}
              <div className="col-span-full border-4 border-black bg-gray-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative h-80 md:h-96">
                <Image src="/images/studycase/robek/RobekHeroStudycase.avif" alt="Hero section Robek Bakery" fill className="object-cover" />
              </div>

              {/* Row 3: The Challenge & Product */}
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">The Challenge</h3>
                <ul className="space-y-4 font-medium">
                  <li><strong>Produk Sulit Dibedakan:</strong> Pelanggan sering membandingkan harga tanpa memahami nilai kualitas artisan.</li>
                  <li><strong>Kurangnya Kepercayaan:</strong> Ketiadaan pengalaman sensorik langsung (aroma/tekstur) di dunia digital.</li>
                  <li><strong>Tidak Ada Cerita:</strong> Minimnya koneksi emosional antara pembeli dengan dedikasi pengrajin.</li>
                  <li><strong>Proses Pemesanan Rumit:</strong> Friction dalam alur checkout menurunkan konversi.</li>
                </ul>
              </div>
              <div className="border-4 border-black bg-gray-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                <Image src="/images/studycase/robek/RobekProductCard.avif" sizes="(max-width: 768px) 100vw, 33vw" alt="Product cards layout" fill className="object-cover" />
              </div>

              {/* Row 4: Design Strategy & 5 Solution Pillars */}
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Design Strategy</h3>
                <p><strong>Story First, Product Second.</strong> Kami membalik alur tradisional dengan membangun emosi dan persepsi kualitas tinggi melalui storytelling sebelum memaparkan pilihan produk dan harga.</p>
              </div>
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">5 Solution Pillars</h3>
                <ol className="list-decimal pl-5 space-y-2 font-medium">
                  <li><strong>First Impression:</strong> Hero section dengan value proposition yang kuat.</li>
                  <li><strong>Product Explore:</strong> Card layout yang clean dan informatif.</li>
                  <li><strong>Storytelling:</strong> Section "Dapur 1985" untuk koneksi autentik.</li>
                  <li><strong>Social Proof:</strong> Testimonial strategis untuk validasi.</li>
                  <li><strong>Frictionless Ordering:</strong> WhatsApp CTA yang tersebar strategis.</li>
                </ol>
              </div>

              {/* Row 5: SS Story (Full) */}
              <div className="col-span-full border-4 border-black bg-gray-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative h-64 overflow-hidden">
                <Image src="/images/studycase/robek/RobekDapur.avif" alt="Storytelling section" fill className="object-cover" />
              </div>

              {/* Row 6: Visual & Technical / Outcome */}
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Visual & Technical</h3>
                <p>Menggunakan palet warna hangat untuk nuansa artisan, fotografi produk yang menonjolkan tekstur, serta pendekatan <strong>Mobile-First</strong>. Kami memastikan fondasi SEO dan performa tetap ringan untuk konversi maksimal.</p>
              </div>
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Outcome</h3>
                <p className="italic font-bold">Banyak bisnis menjual produk. Website ini berhasil menjual *alasan* mengapa pelanggan harus memilih mereka, menjembatani kesenjangan emosional dan mengubah pengunjung menjadi pelanggan setia.</p>
              </div>

              {/* Row 7: CTA */}
              <div className="col-span-full border-4 border-black p-8 text-center bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-3xl font-black mb-6 uppercase italic">Tertarik dengan hasil serupa?</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button href="/kontak" className="bg-primary-500 text-white font-black uppercase tracking-widest px-10 py-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:text-black hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                      Hubungi Kami Sekarang
                    </Button>
                    <a href="https://robek.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-4 border-black bg-white px-8 py-5 font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-primary-500 hover:text-white hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
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