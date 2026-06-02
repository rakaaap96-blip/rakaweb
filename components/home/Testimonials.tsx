'use client'

import { motion } from 'framer-motion'
import { Star, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

// Data testimonial dengan avatar langsung pakai path lokal (tanpa placeholder)
const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Owner Robek Bakery',
    content: 'Saya menggunakan jasa pembuatan website dari RakaWeb, hasilnya sangat profesional. Prosesnya cepat dan memuaskan. Penjualan online kami meningkat drastis!',
    contentHighlight: ['jasa pembuatan website'],
    rating: 5,
    spanClass: 'md:col-span-2',
    avatar: '/images/testimonials/budi.avif',
  },
  {
    id: 2,
    name: 'Siti Aisyah',
    role: 'Marketing Manager, PT Maju Jaya',
    content: 'Tim RakaWeb sangat responsif dan memahami kebutuhan kami. jasa pembuatan website mereka menghasilkan company profile yang modern dan informatif.',
    contentHighlight: ['jasa pembuatan website'],
    rating: 5,
    spanClass: 'md:col-span-2',
    avatar: '/images/testimonials/siti.avif',
  },
  {
    id: 3,
    name: 'Andi Wijaya',
    role: 'Founder StartupID',
    content: 'Harga jasa pembuatan website dari RakaWeb terjangkau tapi kualitas premium.',
    contentHighlight: ['jasa pembuatan website'],
    rating: 5,
    spanClass: 'md:col-span-1',
    avatar: '/images/testimonials/andi.avif',
  },
  {
    id: 4,
    name: 'Dewi Kartika',
    role: 'Owner Lunaria',
    content: 'RakaWeb berhasil membuat website ecommerce yang mudah dikelola. jasa pembuatan website mereka menghasilkan conversion rate yang tinggi. Sangat puas!',
    contentHighlight: ['jasa pembuatan website'],
    rating: 5,
    spanClass: 'md:col-span-3',
    avatar: '/images/testimonials/dewi.avif',
  },
]

// Fungsi highlight teks
function renderHighlightedText(text: string, highlights: string[]) {
  if (!highlights.length) return text
  const regex = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) =>
    highlights.some(h => h.toLowerCase() === part.toLowerCase()) ? (
      <span
        key={i}
        className="bg-primary-500 text-white px-1 py-0.5 border border-black inline-block font-black tracking-wide mx-0.5 text-[11px]"
      >
        {part}
      </span>
    ) : (
      part
    )
  )
}

function TestimonialCard({ item, index }: { item: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ translateY: -4, translateX: -4, transition: { duration: 0.1 } }}
      className={`relative p-4 bg-white text-navy-900 border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between ${item.spanClass}`}
      role="article"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div
            className="flex gap-0.5 bg-primary-50 border-2 border-black px-2 py-0.5 text-[10px] font-black"
            role="group"
            aria-label={`Rating ${item.rating} dari 5 bintang`}
          >
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={10} className="fill-amber-500 text-amber-500" aria-hidden="true" />
            ))}
          </div>
          <div className="w-7 h-7 bg-primary-500 border-2 border-black flex items-center justify-center text-white font-black shrink-0" aria-hidden="true">
            <ArrowUpRight size={12} aria-hidden="true" />
          </div>
        </div>

        <p className="font-sans text-xs sm:text-sm font-bold leading-relaxed mb-3 tracking-tight">
          "{renderHighlightedText(item.content, item.contentHighlight)}"
        </p>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t-2 border-black w-full mt-auto">
        <div className="relative w-7 h-7 shrink-0">
          <Image
            src={item.avatar}
            alt={`Avatar ${item.name}`}
            fill
            className="object-cover border-2 border-black"
            sizes="28px"
          />
        </div>
        <div className="overflow-hidden">
          <h3 className="font-sans font-black text-xs sm:text-sm tracking-tight truncate">{item.name}</h3>
          <p className="font-mono text-[9px] sm:text-[10px] font-bold text-navy-600 bg-navy-100 px-1 py-0.5 border border-black/20 inline-block mt-0.5 truncate max-w-full">
            {item.role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section
      className="relative w-full py-16 bg-primary-500 overflow-hidden border-b-8 border-black px-4"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="flex flex-col items-center">
          <div className="text-center max-w-2xl mb-10 space-y-3">
            <div
              className="inline-block px-3 py-1 bg-black text-white border-2 border-black text-xs font-mono font-black tracking-widest uppercase transform rotate-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
              aria-hidden="true"
            >
              Validasi Sosial Nyata
            </div>
            <h2
              id="testimonials-heading"
              className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none bg-black p-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1"
            >
              APA KATA <span className="text-primary-200">KLIEN KAMI</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm font-bold text-white bg-black/20 p-2 border-2 border-black max-w-xl mx-auto leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Inilah pengakuan langsung dari para mitra bisnis yang bertransformasi bersama sistem RakaWeb.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full auto-rows-fr">
            {testimonials.map((item, index) => (
              <TestimonialCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}