'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ClipboardList, Palette, Code, Rocket, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const steps = [
  {
    icon: ClipboardList,
    title: '1. Konsultasi',
    time: 'Hari 1 • Gratis',
    description:
      'Diskusikan kebutuhan, tujuan, dan budget website Anda. Kami bantu rekomendasi paket yang paling pas.',
  },
  {
    icon: Palette,
    title: '2. Desain',
    time: '3-5 Hari • Revisi tanpa batas',
    description:
      'Mockup desain sesuai brand dan preferensi Anda. Revisi sampai Anda puas sebelum masuk pengembangan.',
  },
  {
    icon: Code,
    title: '3. Development',
    time: '1-2 Minggu • Update tiap pekan',
    description:
      'Pengembangan website dengan teknologi modern dan SEO-friendly. Anda mendapat update progres setiap pekan.',
  },
  {
    icon: Rocket,
    title: '4. Launch',
    time: 'Garansi 1 bulan',
    description:
      'Website live dan siap digunakan. Kami dampingi setelah launch dan berikan support penuh.',
  },
]

export default function Workflow() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useScrollAnimation({ threshold: 0.2, once: true })

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white border-b-8 border-black"
      aria-labelledby="workflow-heading"
    >
      <Container>
        {/* Header neubrutalism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div
            className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            aria-hidden="true"
          >
            Cara Kerja
          </div>
          <h2 id="workflow-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mt-4">
            Proses <span className="text-primary-500 block sm:inline">Mudah & Terstruktur</span>
          </h2>
          <p className="font-sans text-base font-bold text-navy-700 max-w-2xl mx-auto leading-relaxed">
            Kami memiliki workflow yang jelas agar website Anda selesai tepat waktu sesuai harapan.
          </p>
        </motion.div>

        {/* Grid card neubrutalism */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col">
                  {/* Icon container - dekoratif */}
                  <div
                    className="w-20 h-20 mb-4 flex items-center justify-center bg-primary-100 border-2 border-black"
                    aria-hidden="true"
                  >
                    <IconComponent size={36} strokeWidth={2} className="text-primary-500" aria-hidden="true" />
                  </div>
                  <h3 className="font-sans font-black text-xl uppercase tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <div
                    className="inline-block px-2 py-0.5 mb-3 bg-yellow-300 border-2 border-black font-mono font-black text-[10px] uppercase tracking-wider"
                    aria-label={`Estimasi waktu: ${step.time}`}
                  >
                    {step.time}
                  </div>
                  <p className="font-sans font-bold text-navy-600 text-sm leading-relaxed grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <Button
            href="/kontak"
            size="lg"
            icon={<ArrowRight size={18} aria-hidden="true" />}
            className="bg-primary-500 text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:text-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white"
          >
            Mulai Langkah Pertama — Konsultasi Gratis
          </Button>
          <p className="mt-3 font-mono font-bold text-xs uppercase tracking-wider text-navy-500">
            Langkah 1 gratis & tanpa komitmen
          </p>
        </motion.div>
      </Container>
    </section>
  )
}