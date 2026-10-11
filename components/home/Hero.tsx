'use client'

import { useState, useCallback } from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Modal from '@/components/ui/Modal'
import { trackEvent } from '@/lib/analytics'
import { ArrowRight, Play, CheckCircle, Shield, Check, MessageCircle } from 'lucide-react'
import FeatureCard, { featureCards } from '@/components/home/FeatureCard'

const WA_LINK =
  'https://wa.me/6287823268333?text=Halo%20RakaWeb%2C%20saya%20tertarik%20untuk%20konsultasi%20gratis.'

const featureDetails: Record<
  string,
  { title: string; badge: string; points: string[]; note: string }
> = {
  'tech-stack': {
    title: 'Sistem Tech Stack Modern',
    badge: 'Teknologi',
    points: [
      'Dibangun dengan Next.js, React, dan TypeScript — stack yang sama dengan platform kelas enterprise.',
      'Tailwind CSS untuk desain yang konsisten dan mudah dikembangkan.',
      'Kode bersih dan terdokumentasi, sehingga mudah dipelihara dan di-upgrade di masa depan.',
    ],
    note: 'Anda tidak hanya mendapat website, tapi fondasi teknologi yang siap berkembang bersama bisnis.',
  },
  responsif: {
    title: 'Cepat & Responsif',
    badge: 'Mobile First',
    points: [
      'Layout otomatis menyesuaikan dengan sempurna di smartphone, tablet, dan desktop.',
      'Optimasi kecepatan loading agar pengunjung tidak kabur sebelum halaman terbuka.',
      'Tombol dan teks tetap nyaman digunakan saat diakses dari HP.',
    ],
    note: 'Mayoritas pengunjung bisnis lokal datang dari HP. Website Anda siap di semua perangkat.',
  },
  maintenance: {
    title: 'Full Maintenance',
    badge: 'Garansi',
    points: [
      'Garansi free maintenance selama 1 bulan setelah website live.',
      'Kami mengawal keamanan server, backup, dan pembaruan berkala.',
      'Jika ada kendala, tim kami siap membantu via WhatsApp.',
    ],
    note: 'Setelah website selesai, kami tetap memantau — bukan lepas tangan.',
  },
  seo: {
    title: 'Optimasi SEO Google',
    badge: 'SEO',
    points: [
      'Struktur kode bersih yang ramah algoritma Google.',
      'Meta tags, heading, dan schema markup terpasang dengan benar.',
      'Kecepatan loading optimal — salah satu faktor utama peringkat Google.',
    ],
    note: 'Website yang SEO-friendly membuka peluang muncul di halaman pertama Google.',
  },
}

export default function Hero() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  const handleCardClick = useCallback((cardId: string) => {
    setActiveFeature(cardId)
    trackEvent('hero_feature_modal_open', { feature: cardId })
  }, [])

  const handleClose = useCallback(() => setActiveFeature(null), [])

  const activeDetail = activeFeature ? featureDetails[activeFeature] : null

  const featureModal = (
    <Modal
      open={!!activeFeature}
      onClose={handleClose}
      title={activeFeature ? featureDetails[activeFeature].title : ''}
      badge={activeDetail?.badge}
      footer={
        <Button
          href={WA_LINK}
          fullWidth
          icon={<MessageCircle size={18} aria-hidden="true" />}
          className="bg-green-700 text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-green-500 hover:text-navy-900 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-black"
        >
          Konsultasi via WhatsApp
        </Button>
      }
    >
      <ul className="space-y-3">
        {activeDetail?.points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 w-5 h-5 bg-primary-100 border-2 border-black flex items-center justify-center" aria-hidden="true">
              <Check size={12} strokeWidth={4} className="text-primary-500" />
            </span>
            <span className="font-sans font-bold text-sm text-navy-700 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
      {activeDetail && (
        <p className="font-sans font-bold text-xs text-black bg-yellow-300 border-2 border-black p-3 leading-relaxed">
          {activeDetail.note}
        </p>
      )}
    </Modal>
  )

  /* Single responsive tree. No client-side viewport branching, so the
     server HTML is final: no hydration mismatch and no re-render of the
     LCP element after JS boots. */
  return (
    <>
      <section
        className="relative bg-primary-500 text-navy-900 overflow-hidden border-b-8 border-black"
        aria-labelledby="hero-heading"
      >
        <div className="pt-24 pb-16 flex items-center justify-center w-full">
          <Container className="relative z-10 w-full flex flex-col items-center">
            <div className="text-center max-w-3xl mb-8 space-y-4">
              <div
                className="pop-in inline-block px-4 py-1.5 bg-black text-white border-2 border-white text-xs sm:text-sm font-mono font-black tracking-widest uppercase transform rotate-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                aria-hidden="true"
              >
                <span className="mr-2" aria-hidden="true">🔥</span>
                Jasa Pembuatan Website & Desain Web Profesional
              </div>

              {/* LCP element — deliberately no opacity animation so it
                  paints immediately on first frame. */}
              <h1
                id="hero-heading"
                className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none bg-black p-4 md:p-5 border-4 border-yellow-300 shadow-[8px_8px_0px_0px_rgba(255,255,0,1)] inline-block transform -rotate-1"
              >
                JASA PEMBUATAN WEBSITE <br />
                <span className="text-yellow-300">PROFESIONAL DI BOGOR</span>
              </h1>

              <p className="font-sans text-xs sm:text-base font-bold text-white bg-black/30 p-3 border-2 border-black max-w-xl mx-auto leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Jasa pembuatan website UMKM & perusahaan yang cepat, responsif, dan SEO-friendly. Mulai dari <span className="font-black text-yellow-300 underline decoration-4 decoration-black">Rp 999.000</span>.
              </p>

              <div className="pop-in-delay-1 flex flex-col sm:flex-row gap-4 justify-center pt-1">
                <Button
                  href="/kontak"
                  size="lg"
                  icon={<ArrowRight size={20} aria-hidden="true" />}
                  className="bg-white text-black border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-primary-500"
                >
                  Konsultasi Jasa Web Gratis
                </Button>
                <Button
                  href="/studycase"
                  variant="outline"
                  size="lg"
                  icon={<Play size={20} aria-hidden="true" />}
                  className="bg-yellow-300 text-black border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-primary-500"
                >
                  Lihat Studi Kasus
                </Button>
              </div>

              <div className="pop-in-delay-2 flex flex-wrap items-center justify-center gap-2 pt-2" aria-hidden="true">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 border-2 border-black text-[10px] sm:text-xs font-black uppercase tracking-wide text-black">
                  <Shield size={12} /> Garansi revisi desain sampai puas
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 border-2 border-black text-[10px] sm:text-xs font-black uppercase tracking-wide text-black">
                  <CheckCircle size={12} /> Free maintenance 1 bulan
                </span>
              </div>
            </div>

            <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full auto-rows-fr mt-2">
              {featureCards.map((card) => (
                <FeatureCard key={card.id} card={card} onSelect={handleCardClick} />
              ))}
            </div>
          </Container>
        </div>
      </section>
      {featureModal}
    </>
  )
}