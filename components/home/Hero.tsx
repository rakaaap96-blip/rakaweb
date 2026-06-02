'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { ArrowRight, Play, CheckCircle, Shield, TrendingUp, Sparkles, ArrowDownRight, Info } from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

// Variants untuk animasi staggered children (DESKTOP ONLY)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 20,
    },
  },
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeCard, setActiveCard] = useState<string | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleCardClick = (cardId: string, title: string) => {
    setActiveCard(cardId)
    alert(`✨ Informasi lebih lanjut tentang "${title}"\n\nHubungi tim kami untuk konsultasi gratis terkait fitur ini.`)
    setTimeout(() => setActiveCard(null), 300)
  }

  const handleKeyDown = (e: React.KeyboardEvent, cardId: string, title: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCardClick(cardId, title)
    }
  }

  // VERSI MOBILE: Tanpa animasi (LCP langsung muncul)
  if (isMobile) {
    return (
      <section
        className="relative -mt-16 bg-primary-500 text-navy-900 overflow-hidden border-b-8 border-black px-4"
        aria-labelledby="hero-heading"
      >
        <div className="pt-24 pb-16 flex items-center justify-center w-full">
          <Container className="relative z-10 w-full flex flex-col items-center">
            {/* Header Hero - tanpa motion */}
            <div className="text-center max-w-3xl mb-8 space-y-4">
              <div className="inline-block px-4 py-1.5 bg-black text-white border-2 border-white text-xs sm:text-sm font-mono font-black tracking-widest uppercase transform rotate-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]" aria-hidden="true">
                <span className="mr-2" aria-hidden="true">🔥</span>
                Jasa Pembuatan Website & Desain Web Profesional
              </div>

              <h1 id="hero-heading" className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none bg-black p-4 md:p-5 border-4 border-yellow-300 shadow-[8px_8px_0px_0px_rgba(255,255,0,1)] inline-block transform -rotate-1">
                JASA PEMBUATAN <br />
                <span className="text-yellow-300">WEBSITE PROFESIONAL</span>
              </h1>

              <p className="font-sans text-xs sm:text-base font-bold text-white bg-black/30 p-3 border-2 border-black max-w-xl mx-auto leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Jasa pembuatan website UMKM & perusahaan yang cepat, responsif, dan SEO-friendly. Mulai dari <span className="font-black text-yellow-300 underline decoration-4 decoration-black">Rp999rb</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-1">
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
            </div>

            {/* Bento Grid Mobile (tanpa animasi) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full auto-rows-fr mt-2">
              {/* Kotak 1: Tech Stack */}
              <div className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:col-span-2 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-primary-100 border-2 border-black flex items-center justify-center text-primary-600" aria-hidden="true">
                    <Sparkles size={20} />
                  </div>
                  <div className="w-8 h-8 bg-black text-white border-2 border-black flex items-center justify-center font-black text-sm" aria-label="Fitur nomor 1">01</div>
                </div>
                <div>
                  <h2 className="font-sans font-black text-lg uppercase tracking-tight mb-2">Sistem Tech Stack Modern</h2>
                  <p className="font-sans text-xs sm:text-sm font-bold text-navy-600 leading-snug">Kami membangun ekosistem digital performa tinggi menggunakan framework mutakhir untuk kecepatan maksimal.</p>
                </div>
                <div className="flex gap-3 pt-4 mt-4 border-t-2 border-black" role="group" aria-label="Teknologi yang digunakan: Next.js, React, TypeScript, Tailwind CSS">
                  <SiNextdotjs size={24} className="text-black" aria-hidden="true" />
                  <SiReact size={24} className="text-[#61DAFB]" aria-hidden="true" />
                  <SiTypescript size={24} className="text-[#3178C6]" aria-hidden="true" />
                  <SiTailwindcss size={24} className="text-[#38BDF8]" aria-hidden="true" />
                </div>
              </div>

              {/* Kotak 2: Kecepatan & Responsif */}
              <div className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-primary-100 border-2 border-black flex items-center justify-center text-green-600" aria-hidden="true"><CheckCircle size={20} /></div>
                  <ArrowDownRight size={20} className="text-navy-400" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-sans font-black text-lg uppercase tracking-tight mb-1">Cepat & Responsif</h2>
                  <p className="font-sans text-xs sm:text-sm font-bold text-navy-700 leading-snug">Website otomatis optimal diakses sempurna via smartphone, tablet, maupun desktop komputer tanpa kendala layout.</p>
                </div>
              </div>

              {/* Kotak 3: Maintenance */}
              <div className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-primary-100 border-2 border-black flex items-center justify-center text-blue-600" aria-hidden="true"><Shield size={20} /></div>
                  <ArrowDownRight size={20} className="text-navy-400" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-sans font-black text-lg uppercase tracking-tight mb-1">Full Maintenance</h2>
                  <p className="font-sans text-xs sm:text-sm font-bold text-navy-600 leading-snug">Jaminan garansi penuh pasca-pembuatan sistem. Kami mengawal keamanan server dan pembaruan berkala website Anda.</p>
                </div>
              </div>

              {/* Kotak 4: SEO */}
              <div className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:col-span-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 border-2 border-black flex items-center justify-center text-purple-600 shrink-0" aria-hidden="true"><TrendingUp size={24} /></div>
                  <div>
                    <h2 className="font-sans font-black text-lg uppercase tracking-tight">Optimasi SEO Google</h2>
                    <p className="font-sans text-xs sm:text-sm font-bold text-navy-700 leading-snug mt-0.5">Struktur kode bersih yang dirancang khusus ramah algoritma mesin pencari demi mendorong peringkat bisnis Anda ke halaman utama Google.</p>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-black text-white text-xs font-mono font-black uppercase tracking-wider shrink-0 border border-black max-sm:w-full text-center" aria-label="Keunggulan: Target Pasar Tepat">Target Pasar Tepat</div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    )
  }

  // VERSI DESKTOP: Dengan animasi motion
  return (
    <section
      className="relative -mt-16 bg-primary-500 text-navy-900 overflow-hidden border-b-8 border-black px-4"
      aria-labelledby="hero-heading"
    >
      <div className="pt-24 pb-16 flex items-center justify-center w-full">
        <Container className="relative z-10 w-full flex flex-col items-center">
          
          {/* Header Hero */}
          <div className="text-center max-w-3xl mb-8 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-block px-4 py-1.5 bg-black text-white border-2 border-white text-xs sm:text-sm font-mono font-black tracking-widest uppercase transform rotate-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
              aria-hidden="true"
            >
              <span className="mr-2" aria-hidden="true">🔥</span>
              Jasa Pembuatan Website & Desain Web Profesional
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 150, delay: 0.1 }}
              id="hero-heading"
              className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none bg-black p-4 md:p-5 border-4 border-yellow-300 shadow-[8px_8px_0px_0px_rgba(255,255,0,1)] inline-block transform -rotate-1"
            >
              JASA PEMBUATAN <br />
              <span className="text-yellow-300">WEBSITE PROFESIONAL</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0 }}
              className="font-sans text-xs sm:text-base font-bold text-white bg-black/30 p-3 border-2 border-black max-w-xl mx-auto leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Jasa pembuatan website UMKM & perusahaan yang cepat, responsif, dan SEO-friendly. Mulai dari <span className="font-black text-yellow-300 underline decoration-4 decoration-black">Rp999rb</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-1"
            >
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
            </motion.div>
          </div>

          {/* Bento Grid Interaktif Desktop */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full auto-rows-fr mt-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Kotak 1: Tech Stack */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 }, boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick('tech-stack', 'Sistem Tech Stack Modern')}
              onKeyDown={(e) => handleKeyDown(e, 'tech-stack', 'Sistem Tech Stack Modern')}
              role="button"
              tabIndex={0}
              className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:col-span-2 flex flex-col justify-between group cursor-pointer transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-primary-100 border-2 border-black flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform duration-200" aria-hidden="true"><Sparkles size={20} /></div>
                <div className="w-8 h-8 bg-black text-white border-2 border-black flex items-center justify-center font-black text-sm group-hover:bg-yellow-300 group-hover:text-black transition-colors" aria-label="Fitur nomor 1">01</div>
              </div>
              <div>
                <h2 className="font-sans font-black text-lg uppercase tracking-tight mb-2 group-hover:text-primary-600 transition-colors">Sistem Tech Stack Modern</h2>
                <p className="font-sans text-xs sm:text-sm font-bold text-navy-600 leading-snug">Kami membangun ekosistem digital performa tinggi menggunakan framework mutakhir untuk kecepatan maksimal.</p>
              </div>
              <div className="flex gap-3 pt-4 mt-4 border-t-2 border-black" role="group" aria-label="Teknologi yang digunakan: Next.js, React, TypeScript, Tailwind CSS">
                <SiNextdotjs size={24} className="text-black group-hover:scale-110 transition-transform" aria-hidden="true" />
                <SiReact size={24} className="text-[#61DAFB] group-hover:scale-110 transition-transform" aria-hidden="true" />
                <SiTypescript size={24} className="text-[#3178C6] group-hover:scale-110 transition-transform" aria-hidden="true" />
                <SiTailwindcss size={24} className="text-[#38BDF8] group-hover:scale-110 transition-transform" aria-hidden="true" />
              </div>
              <div className="mt-3 text-xs font-mono font-bold text-navy-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"><Info size={12} aria-hidden="true" /> Klik untuk detail</div>
            </motion.div>

            {/* Kotak 2: Kecepatan & Responsif */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 }, boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick('responsif', 'Cepat & Responsif')}
              onKeyDown={(e) => handleKeyDown(e, 'responsif', 'Cepat & Responsif')}
              role="button"
              tabIndex={0}
              className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between group cursor-pointer transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 bg-primary-100 border-2 border-black flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform" aria-hidden="true"><CheckCircle size={20} /></div>
                <ArrowDownRight size={20} className="text-navy-400 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-sans font-black text-lg uppercase tracking-tight mb-1 group-hover:text-primary-600 transition-colors">Cepat & Responsif</h2>
                <p className="font-sans text-xs sm:text-sm font-bold text-navy-700 leading-snug">Website otomatis optimal diakses sempurna via smartphone, tablet, maupun desktop komputer tanpa kendala layout.</p>
              </div>
              <div className="mt-3 text-xs font-mono font-bold text-navy-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"><Info size={12} aria-hidden="true" /> Klik untuk detail</div>
            </motion.div>

            {/* Kotak 3: Maintenance */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 }, boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick('maintenance', 'Full Maintenance')}
              onKeyDown={(e) => handleKeyDown(e, 'maintenance', 'Full Maintenance')}
              role="button"
              tabIndex={0}
              className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between group cursor-pointer transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 bg-primary-100 border-2 border-black flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform" aria-hidden="true"><Shield size={20} /></div>
                <ArrowDownRight size={20} className="text-navy-400 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-sans font-black text-lg uppercase tracking-tight mb-1 group-hover:text-primary-600 transition-colors">Full Maintenance</h2>
                <p className="font-sans text-xs sm:text-sm font-bold text-navy-600 leading-snug">Jaminan garansi penuh pasca-pembuatan sistem. Kami mengawal keamanan server dan pembaruan berkala website Anda.</p>
              </div>
              <div className="mt-3 text-xs font-mono font-bold text-navy-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"><Info size={12} aria-hidden="true" /> Klik untuk detail</div>
            </motion.div>

            {/* Kotak 4: SEO */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 }, boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick('seo', 'Optimasi SEO Google')}
              onKeyDown={(e) => handleKeyDown(e, 'seo', 'Optimasi SEO Google')}
              role="button"
              tabIndex={0}
              className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:col-span-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group cursor-pointer transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 border-2 border-black flex items-center justify-center text-purple-600 shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true"><TrendingUp size={24} /></div>
                <div>
                  <h2 className="font-sans font-black text-lg uppercase tracking-tight group-hover:text-primary-600 transition-colors">Optimasi SEO Google</h2>
                  <p className="font-sans text-xs sm:text-sm font-bold text-navy-700 leading-snug mt-0.5">Struktur kode bersih yang dirancang khusus ramah algoritma mesin pencari demi mendorong peringkat bisnis Anda ke halaman utama Google.</p>
                </div>
              </div>
              <div className="px-3 py-1.5 bg-black text-white text-xs font-mono font-black uppercase tracking-wider shrink-0 border border-black max-sm:w-full text-center group-hover:bg-yellow-300 group-hover:text-black transition-colors" aria-label="Keunggulan: Target Pasar Tepat">Target Pasar Tepat</div>
              <div className="sm:hidden text-xs font-mono font-bold text-navy-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"><Info size={12} aria-hidden="true" /> Klik untuk detail</div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  )
}