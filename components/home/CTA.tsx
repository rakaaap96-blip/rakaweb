'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

export default function CTA() {
  return (
    <section
      className="py-20 bg-primary-500 border-b-8 border-black"
      aria-labelledby="cta-heading"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          {/* Badge - dekoratif, disembunyikan dari screen reader */}
          <div
            className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            aria-hidden="true"
          >
            Siap Memulai?
          </div>

          <h2 id="cta-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
            Siap Meningkatkan <span className="text-yellow-300">Bisnis Anda?</span>
          </h2>

          <p className="font-sans text-base md:text-lg font-bold text-white/90 max-w-2xl mx-auto leading-relaxed">
            Dapatkan website profesional dengan harga terjangkau. Konsultasi gratis tanpa biaya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              href="/kontak"
              size="lg"
              className="bg-white text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-primary-500"
            >
              Konsultasi Gratis
            </Button>
          </div>

          <p className="font-mono font-black text-xs uppercase tracking-wider text-white pt-4" aria-live="polite">
            *Tanpa komitmen. Free consultation 30 menit.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}