'use client'

import { Award, Eye, Target, TrendingUp, MessageCircle } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const stories = [
  { 
    title: 'Visual Eksklusif Menjual', 
    icon: Eye, 
    desc: 'Mayoritas jasa pembuatan website mengandalkan template instan pasaran. Kami merancang desain kustom semenjak piksel pertama untuk mengonversi kesan menjadi transaksi.' 
  },
  { 
    title: 'Performa Kilat Tanpa Friksi', 
    icon: TrendingUp, 
    desc: 'Website lambat adalah kebocoran profit terbesar. Kami mengoptimasi arsitektur kode agar platform Anda terbuka instan, menyelamatkan potensi omset dari pelanggan yang frustrasi.' 
  },
  { 
    title: 'Psikologi Konversi Terarah', 
    icon: Target, 
    desc: 'Keindahan visual tumpul tanpa penjualan. Setiap peletakan tombol, navigasi, dan elemen visual dipandu riset perilaku untuk menuntun audiens langsung ke WhatsApp Anda.' 
  },
  { 
    title: 'SEO Struktural Hari Pertama', 
    icon: Award, 
    desc: 'Sebuah platform hebat wajib mudah ditemukan. Kami menanamkan optimasi kata kunci dan keandalan indeks Google langsung ke dalam core blueprint website Anda.' 
  },
]

const milestones = [
  { year: '2024', title: 'Melihat Realita yang Patah', desc: 'RakaWeb berdiri atas keresahan melihat pelaku usaha yang kecewa dengan jasa pembuatan website murahan, sering error, lambat, dan ditinggalkan pengembang setelah pelunasan.' },
  { year: '2025', title: 'Membuktikan Standar Baru', desc: 'Kami mengubah arah industri dengan menyusun ulang strategi digital puluhan brand, menghidupkan kembali platform mati suri, dan membuktikan bahwa web premium adalah investasi.' },
  { year: '2026', title: 'Pusat Keunggulan Teknologi', desc: 'Kini, kami merancang ekosistem digital performa tinggi terintegrasi yang menjadi tulang punggung digitalisasi bisnis terpercaya di seluruh Indonesia.' },
]

export default function TentangPage() {
  const handleScrollToPhilosophy = () => {
    const element = document.getElementById('philosophy-section')
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // JSON-LD untuk halaman Tentang Kami
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Tentang RakaWeb - Jasa Pembuatan Website Premium',
    description: 'RakaWeb adalah penyedia jasa pembuatan website premium berbasis business problem solving. Kami menolak template instan dan fokus pada performa, konversi, dan SEO.',
    url: 'https://rakaweb.vercel.app/tentang',
    mainEntity: {
      '@type': 'Organization',
      name: 'RakaWeb',
      foundingDate: '2024',
      founders: [
        { '@type': 'Person', name: 'Raka' }
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bogor',
        addressCountry: 'ID'
      }
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-24 pb-16 bg-primary-500 border-b-8 border-black"
        aria-labelledby="tentang-heading"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div
              className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              aria-hidden="true"
            >
              Tentang Kami
            </div>
            <h1
              id="tentang-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight"
            >
              Bukan Sekadar <span className="text-yellow-300">Templating Instan</span>
            </h1>
            <p className="font-sans text-base md:text-lg font-bold text-white bg-black/20 p-3 border-2 border-black max-w-2xl mx-auto leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Di RakaWeb, kami menyajikan layanan jasa pembuatan website premium berbasis business problem solving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/kontak"
                size="lg"
                className="bg-white text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black"
                aria-label="Diskusikan proyek via konsultasi gratis"
              >
                Diskusikan Proyek
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Filosofi Grid */}
      <section
        id="philosophy-section"
        className="py-20 bg-white border-b-8 border-black"
        aria-labelledby="philosophy-heading"
      >
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-3 text-center lg:text-left">
              <div
                className="inline-block px-3 py-1 bg-black text-white border border-black text-[10px] font-mono font-black uppercase tracking-wider"
                aria-hidden="true"
              >
                FILOSOFI
              </div>
              <h2
                id="philosophy-heading"
                className="font-display text-3xl font-black uppercase tracking-tighter"
              >
                Mengapa Jasa Pembuatan Website Kami Berbeda?
              </h2>
              <p className="font-sans font-bold text-navy-700">
                Kami mematikan paksa alur kerja komoditas instan. Tim kami merakit ekosistem visual eksklusif bersenjatakan performa tangguh untuk menegakkan dominasi pasar brand Anda.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {stories.map((story, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  role="article"
                >
                  <div
                    className="w-8 h-8 bg-primary-100 border-2 border-black flex items-center justify-center mb-3"
                    aria-hidden="true"
                  >
                    <story.icon size={16} className="text-primary-500" aria-hidden="true" />
                  </div>
                  <h3 className="font-sans font-black text-sm uppercase tracking-tight mb-1">
                    {story.title}
                  </h3>
                  <p className="font-sans font-bold text-navy-700 text-xs leading-relaxed">
                    {story.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section
        className="py-20 bg-primary-500 border-b-8 border-black"
        aria-labelledby="timeline-heading"
      >
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-2 text-center lg:text-left">
              <div
                className="inline-flex items-center gap-1 text-[10px] font-mono font-black bg-black text-white px-2 py-0.5 uppercase"
                aria-hidden="true"
              >
                📜 Perjalanan
              </div>
              <h2
                id="timeline-heading"
                className="font-display text-3xl font-black text-yellow-300 uppercase tracking-tighter"
              >
                Bagaimana Cerita Ini Dimulai
              </h2>
              <p className="font-sans font-bold text-white">
                Komitmen profesional RakaWeb diilhami dari penolakan keras terhadap kualitas agensi digital usang yang kerap lepas tangan.
              </p>
            </div>
            <div className="lg:col-span-2 relative pl-6 space-y-5">
              <div className="absolute left-0 top-2 bottom-2 w-1 bg-black" aria-hidden="true" />
              {milestones.map((m, idx) => (
                <div key={idx} className="relative">
                  <div
                    className="absolute -left-8 top-1 w-3 h-3 bg-primary-500 border-2 border-black rotate-45"
                    aria-hidden="true"
                  />
                  <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono font-black bg-black text-white px-1.5 py-0.5">
                        {m.year}
                      </span>
                      <h3 className="font-sans font-black text-sm uppercase tracking-tight">
                        {m.title}
                      </h3>
                    </div>
                    <p className="font-sans font-bold text-navy-700 text-xs">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Penutup */}
      <section
        className="py-20 bg-primary-500 border-b-8 border-black"
        aria-labelledby="cta-heading"
      >
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div
              className="bg-black/20 border-2 border-black p-3 inline-block mx-auto"
              aria-hidden="true"
            >
              <Award size={24} className="text-white" aria-hidden="true" />
            </div>
            <h2
              id="cta-heading"
              className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter"
            >
              Hentikan Kebocoran Anggaran Digital Bisnis Anda.
            </h2>
            <p className="font-sans font-bold text-white/90">
              Menjaga ekosistem pertumbuhan produk Anda tetap sehat jauh lebih menguntungkan daripada memperbaiki sistem murah yang rapuh.
            </p>
            <Button
              href="/kontak"
              size="lg"
              className="bg-white text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black"
              icon={<MessageCircle size={16} />}
              aria-label="Mulai konsultasi gratis via WhatsApp"
            >
              Mulai Konsultasi Gratis
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