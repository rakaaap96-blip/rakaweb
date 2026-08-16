'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { MessageCircle, ShieldCheck, Clock, CheckCircle } from 'lucide-react'

const WA_LINK =
  'https://wa.me/6287823268333?text=Halo%20RakaWeb%2C%20saya%20tertarik%20untuk%20konsultasi%20gratis.'

const trustPoints = [
  {
    icon: CheckCircle,
    text: 'Konsultasi gratis 30 menit',
  },
  {
    icon: ShieldCheck,
    text: 'Tanpa komitmen',
  },
  {
    icon: Clock,
    text: 'Respon < 1 hari kerja',
  },
  {
    icon: CheckCircle,
    text: 'Revisi desain sampai puas',
  },
]

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
          <div
            className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            aria-hidden="true"
          >
            Siap Memulai?
          </div>

          <h2
            id="cta-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white"
          >
            Siap Meningkatkan <span className="text-yellow-300">Bisnis Anda?</span>
          </h2>

          <p className="font-sans text-base md:text-lg font-bold text-white/90 max-w-2xl mx-auto leading-relaxed">
            Website profesional selesai dalam 2-4 minggu, mulai dari{' '}
            <span className="text-yellow-300 font-black">Rp 999.000</span> untuk UMKM.
            Konsultasi gratis dulu — jika tidak cocok, tidak ada kewajiban sama sekali.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              href={WA_LINK}
              size="lg"
              icon={<MessageCircle size={20} aria-hidden="true" />}
              className="bg-green-500 text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-green-400 hover:text-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-primary-500"
            >
              Konsultasi Gratis via WhatsApp
            </Button>
            <Button
              href="/kontak"
              size="lg"
              variant="outline"
              className="bg-yellow-300 text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-primary-500"
            >
              Isi Formulir Kontak
            </Button>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4">
            {trustPoints.map((point) => (
              <li
                key={point.text}
                className="inline-flex items-center gap-1.5 font-sans font-bold text-xs sm:text-sm text-white"
              >
                <point.icon size={14} strokeWidth={3} className="text-yellow-300" aria-hidden="true" />
                {point.text}
              </li>
            ))}
          </ul>

          <p className="font-mono font-black text-xs uppercase tracking-wider text-white pt-2 border-t-2 border-white/30 max-w-xl mx-auto" aria-live="polite">
            Kuota proyek terbatas — kami hanya menerima 5 proyek per bulan untuk menjaga kualitas.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
