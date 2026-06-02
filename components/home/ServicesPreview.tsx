'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { servicesData } from '@/data/services'
import Container from '@/components/ui/Container'

// Data layanan yang sudah diperbaiki deskripsinya
const services = [
  {
    icon: servicesData.umkm.icon,
    title: 'Website UMKM',
    description: 'Solusi website profesional untuk usaha kecil dan menengah. Harga terjangkau, hasil maksimal.',
    href: '/jasa-pembuatan-website-umkm',
  },
  {
    icon: servicesData.company.icon,
    title: 'Company Profile',
    description: 'Tingkatkan kredibilitas perusahaan dengan website corporate yang modern dan profesional.',
    href: '/jasa-pembuatan-website-company-profile',
  },
  {
    icon: servicesData.school.icon,
    title: 'Website Sekolah',
    description: 'Kelola informasi sekolah, profil guru, prestasi, dan penerimaan siswa baru secara online dan profesional.',
    href: '/jasa-pembuatan-website-sekolah', // perbaiki URL sesuai kebutuhan
  },
]

export default function ServicesPreview() {
  return (
    <section
      className="py-20 bg-primary-500 border-b-8 border-black"
      aria-labelledby="services-heading"
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div
            className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            aria-hidden="true"
          >
            Layanan Kami
          </div>

          <h2 id="services-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mt-4">
            Solusi Website untuk{' '}
            <span className="text-yellow-300 block sm:inline">Semua Kebutuhan</span>
          </h2>

          <p className="font-sans text-white font-bold max-w-2xl mx-auto leading-relaxed">
            Pilih layanan yang sesuai dengan kebutuhan bisnis Anda. Kami siap membantu mewujudkan website impian.
          </p>
        </motion.div>

        {/* Grid Layanan */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <div className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col">
                  {/* Icon - dekoratif */}
                  <div
                    className="w-16 h-16 mb-5 flex items-center justify-center bg-primary-100 border-2 border-black"
                    aria-hidden="true"
                  >
                    <IconComponent size={32} strokeWidth={2} aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-black text-xl uppercase tracking-tight mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans font-bold text-navy-600 text-sm leading-relaxed mb-6 grow">
                    {service.description}
                  </p>

                  {/* Tombol navigasi yang semantik: Link dengan class tombol */}
                  <Link
                    href={service.href}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-yellow-300 border-2 border-black font-mono font-black text-xs uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white"
                    aria-label={`Pelajari lebih lanjut tentang ${service.title}`}
                  >
                    <span>Pelajari Lebih Lanjut</span>
                    <ArrowRight size={14} strokeWidth={3} aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}