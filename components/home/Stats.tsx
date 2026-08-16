'use client'

import { motion } from 'framer-motion'
import { Globe, Star, MessageCircle, Timer } from 'lucide-react'
import Container from '@/components/ui/Container'

const stats = [
  {
    icon: Globe,
    value: '100%',
    label: 'Mobile Friendly',
    detail: 'Tampil sempurna di semua perangkat',
  },
  {
    icon: Star,
    value: '30 Hari',
    label: 'Garansi Maintenance',
    detail: 'Gratis setelah website live',
  },
  {
    icon: MessageCircle,
    value: '< 1 Hari',
    label: 'Respon Konsultasi',
    detail: 'Setiap pesan kami balas',
  },
  {
    icon: Timer,
    value: '2-4 Minggu',
    label: 'Rata-rata Pengerjaan',
    detail: 'Sesuai kompleksitas proyek',
  },
]

export default function Stats() {
  return (
    <section
      className="py-16 bg-white border-b-8 border-black"
      aria-labelledby="stats-heading"
    >
      <Container>
        <div className="text-center mb-12">
          <div
            className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            aria-hidden="true"
          >
            Angka yang Berbicara
          </div>
          <h2
            id="stats-heading"
            className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tighter mt-6 mb-3"
          >
            Dipercaya <span className="text-primary-500">Bisnis Lokal</span>
          </h2>
          <p className="font-sans text-base font-bold text-navy-700 max-w-2xl mx-auto">
            Bukti kerja kami bukan sekadar janji — tapi hasil nyata yang terus bertambah.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col items-center text-center transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div
                  className="w-12 h-12 mb-4 flex items-center justify-center bg-primary-100 border-2 border-black text-primary-500"
                  aria-hidden="true"
                >
                  <IconComponent size={24} strokeWidth={2.5} />
                </div>
                <div className="font-display text-3xl sm:text-4xl font-black text-black tracking-tighter">
                  {stat.value}
                </div>
                <div className="mt-2 font-sans font-black text-sm uppercase tracking-tight text-navy-900">
                  {stat.label}
                </div>
                <p className="mt-1 font-sans font-bold text-xs text-navy-600 leading-relaxed">
                  {stat.detail}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
