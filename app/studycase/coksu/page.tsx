// app/studycase/coksu/page.tsx (Server Component - tanpa 'use client')
import { generateMetadata } from '@/lib/seo'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = generateMetadata({
  title: 'Study Case: COKSU',
  description: 'Mengubah minuman sehari-hari menjadi pengalaman brand futuristik.',
  slug: '/studycase/coksu',
})

export default function StudyCaseCoksu() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'COKSU - Futuristic Chocolate Drink Brand Experience',
    description: 'Mengubah minuman sehari-hari menjadi pengalaman brand futuristik.',
    url: 'https://rakawebpro.vercel.app/studycase/coksu',
    creator: { '@type': 'Organization', name: 'RakaWeb' },
    dateCreated: '2025',
  }

  return (
    <>
      <main className="bg-white min-h-screen py-12 overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="mb-16" aria-labelledby="coksu-hero-heading">
          <Container>
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <Link
                href="/studycase"
                className="inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-black"
              >
                <ArrowLeft size={16} aria-hidden="true" /> Kembali
              </Link>
              <a
                href="https://coksu.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-black bg-primary-500 text-white px-5 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Lihat Demo Langsung <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="border-4 border-black p-6 md:p-10 bg-primary-500 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h1
                id="coksu-hero-heading"
                className="text-4xl md:text-7xl text-center font-black mb-6 uppercase italic tracking-tighter text-yellow-300"
              >
                COKSU
              </h1>
              <p className="text-lg md:text-2xl font-medium text-center border-t-2 border-white pt-4">
                Transforming an Everyday Drink into a Futuristic Brand Experience
              </p>
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
                    <dd>COKSU (Minuman Coklat)</dd>
                  </div>
                  <div className="border-b-2 border-black pb-2">
                    <dt className="text-gray-500 text-sm">Tahun</dt>
                    <dd>2025</dd>
                  </div>
                  <div className="border-b-2 border-black pb-2">
                    <dt className="text-gray-500 text-sm">Kategori</dt>
                    <dd>Branding & Landing Page</dd>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://coksu.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary-500 hover:underline break-all"
                    >
                      coksu.vercel.app <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                </dl>
              </div>

              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Overview</h3>
                <p>
                  COKSU adalah konsep landing page untuk minuman coklat yang menggabungkan dunia kuliner dengan
                  estetika cyberpunk futuristik. Tujuan proyek ini adalah membuktikan bahwa sebuah produk
                  sehari-hari dapat memiliki identitas brand yang kuat melalui pengalaman digital yang berbeda dari
                  kompetitor. Alih-alih bersaing melalui harga atau diskon, website ini dirancang untuk membangun
                  persepsi produk yang unik, premium, dan memorable.
                </p>
              </div>

              {/* Row 2: SS Hero (Full) */}
              <div className="col-span-full relative h-80 md:h-96 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src="/images/studycase/coksu/CoksuHeroStudycase.avif"
                  alt="Hero section futuristik COKSU"
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Row 3: The Challenge & SS Product */}
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">The Challenge</h3>
                <ul className="space-y-4 font-medium">
                  <li>
                    <strong>Lack of Brand Differentiation:</strong> Banyak bisnis memiliki produk yang baik,
                    namun tidak memiliki identitas visual yang kuat. Akibatnya pelanggan sulit mengingat satu
                    brand.
                  </li>
                  <li>
                    <strong>Generic Customer Experience:</strong> Mayoritas website F&B hanya berfungsi sebagai
                    katalog produk. Engagement rendah, waktu kunjungan singkat.
                  </li>
                  <li>
                    <strong>Product Information Gets Ignored:</strong> Pengguna melakukan scanning visual,
                    informasi penting terlewat.
                  </li>
                </ul>
              </div>
              <div className="relative h-64 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src="/images/studycase/coksu/CoksuProductCard.avif"
                  alt="Product cards design"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Row 4: Design Strategy & 6 Solution Pillars */}
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Design Strategy</h3>
                <p>
                  <strong>Turning Product Information into an Experience.</strong> Alih-alih membuat katalog
                  biasa, saya merancang pengalaman yang membuat pengguna merasa sedang memasuki dunia brand
                  tersebut. Konsep cyberpunk dipilih untuk menciptakan identitas yang kuat dan mudah diingat.
                </p>
              </div>
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">6 Solution Pillars</h3>
                <ol className="list-decimal pl-5 space-y-2 font-medium">
                  <li>
                    <strong>Unforgettable First Impression:</strong> Hero dengan grid futuristik, neon effects,
                    sci-fi typography.
                  </li>
                  <li>
                    <strong>Distinct Brand Identity:</strong> Neon cyan accents, purple gradients,
                    terminal-inspired UI.
                  </li>
                  <li>
                    <strong>Easier Product Selection:</strong> Card layout seragam dengan visual, harga, CTA
                    langsung.
                  </li>
                  <li>
                    <strong>Clear Product Value:</strong> Section "Core Components" menjelaskan kualitas bahan.
                  </li>
                  <li>
                    <strong>Social Proof:</strong> Testimonial dengan tema visual yang konsisten.
                  </li>
                  <li>
                    <strong>Reduced Purchase Friction:</strong> CTA WhatsApp pada area-area penting.
                  </li>
                </ol>
              </div>

              {/* Row 5: SS Core Components (Full) */}
              <div className="col-span-full relative h-64 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src="/images/studycase/coksu/CoksuCoreComponent.avif"
                  alt="Core Components"
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Row 6: Visual & Technical / Key Takeaways */}
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Visual & Technical</h3>
                <p>
                  <strong>Cyberpunk Aesthetic:</strong> warna gelap dengan aksen neon.{' '}
                  <strong>High Contrast Interface:</strong> meningkatkan readability.{' '}
                  <strong>Mobile-First Experience:</strong> layout responsif. <strong>SEO-Friendly:</strong>{' '}
                  semantic HTML.
                </p>
              </div>
              <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Key Takeaways</h3>
                <p>
                  Banyak bisnis mencoba menjual produk. Proyek ini berfokus pada bagaimana menjual{' '}
                  <strong>pengalaman dan identitas brand</strong> terlebih dahulu. Website membantu produk
                  terlihat lebih berbeda dan menarik.
                </p>
              </div>

              {/* Row 7: Outcome (Full) */}
              <div className="col-span-full border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-xl mb-4 uppercase text-primary-500">Outcome</h3>
                <p className="italic font-bold">
                  Hasil akhirnya adalah landing page dengan identitas visual yang kuat, pengalaman pengguna yang
                  imersif, serta struktur yang tetap mendukung tujuan bisnis seperti membangun brand awareness,
                  meningkatkan kepercayaan pelanggan, dan mempermudah proses pemesanan.
                </p>
              </div>

              {/* Row 8: CTA (Full) */}
              <div className="col-span-full border-4 border-black p-8 text-center bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-3xl font-black mb-6 uppercase italic">Tertarik dengan hasil serupa?</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    href="/kontak"
                    className="bg-primary-500 text-white font-black uppercase tracking-widest px-10 py-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:text-black hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                  >
                    Hubungi Kami Sekarang
                  </Button>
                  <a
                    href="https://coksu.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-4 border-black bg-white px-8 py-5 font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all hover:bg-primary-500 hover:text-white"
                  >
                    Kunjungi Live Demo <ExternalLink size={18} aria-hidden="true" />
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