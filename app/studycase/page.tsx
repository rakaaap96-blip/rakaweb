'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'

const studyCases = [
  {
    id: 1,
    title: 'Robek Bakery',
    category: 'Company Profile',
    description:
      'Membangun kepercayaan pelanggan melalui desain website artisan yang menjual cerita sebelum menjual roti.',
    image: '/images/studycase/robek/RobekHeroStudycase.avif',
    href: '/studycase/robek-bakery',
  },
  {
    id: 2,
    title: 'Coksu',
    category: 'Company Profile',
    description:
      'Membangun kredibilitas bisnis dengan tampilan futuristik dan informasi yang lebih terstruktur.',
    image: '/images/studycase/coksu/CoksuHeroStudycase.avif',
    href: '/studycase/coksu',
  },
  {
    id: 3,
    title: 'Lunaria',
    category: 'Company Profile',
    description:
      'Mengoptimalkan pengalaman pengguna dan penyampaian informasi untuk meningkatkan engagement.',
    image: '/images/studycase/lunaria/LunariaHeroStudycase.avif',
    href: '/studycase/lunaria',
  },
]

export default function StudyCase() {
  return (
    <section
      className="py-20 bg-white border-b-8 border-black"
      aria-labelledby="studycase-heading"
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
            className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            aria-hidden="true"
          >
            Problem Solving
          </div>
          <h2
            id="studycase-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 uppercase tracking-tighter mt-4"
          >
            Dari Masalah Menjadi
            <span className="text-primary-500 block sm:inline"> Solusi</span>
          </h2>
          <p className="font-sans font-bold text-navy-600 max-w-2xl mx-auto leading-relaxed">
            Setiap website yang kami buat berawal dari sebuah tantangan.
            Pelajari bagaimana proses riset, strategi, dan desain membantu
            menyelesaikan masalah bisnis serta meningkatkan pengalaman pengguna.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studyCases.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <Link
                href={item.href}
                className="group block h-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white"
              >
                <div className="relative bg-white border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden bg-primary-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-primary-500/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="inline-flex items-center gap-2 bg-yellow-300 border-2 border-black px-5 py-3 font-mono font-black uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <span>Lihat Study Case</span>
                        <ArrowRight size={16} strokeWidth={3} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 grow">
                    <div
                      className="inline-block px-3 py-1 bg-yellow-300 border-2 border-black font-mono font-black text-xs uppercase tracking-wider"
                      aria-label={`Kategori: ${item.category}`}
                    >
                      {item.category}
                    </div>
                    <h3 className="mt-4 font-sans font-black text-xl uppercase tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-sans font-bold text-navy-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}