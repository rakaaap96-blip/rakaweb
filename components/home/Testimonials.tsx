'use client'

import { motion } from 'framer-motion'
import { Star, ArrowUpRight, BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Owner Robek Bakery',
    content:
      'Website baru kami berhasil menjual cerita sebelum menjual roti. Pesanan via WhatsApp bertambah dan pelanggan sering bilang "websitenya kelihatan mahal".',
    highlight: '"websitenya kelihatan mahal"',
    result: 'Pesanan WhatsApp bertambah setelah website live',
    rating: 5,
    spanClass: 'md:col-span-2',
    avatar: '/images/testimonials/budi.avif',
  },
  {
    id: 2,
    name: 'Siti Aisyah',
    role: 'Marketing Manager, PT Maju Jaya',
    content:
      'Company profile kami sekarang modern dan informatif. Calon klien jauh lebih percaya saat proposal kami disertai link website yang profesional — kualitas pertanyaan yang masuk pun meningkat.',
    highlight: 'jauh lebih percaya',
    result: 'Kredibilitas di mata calon klien naik',
    rating: 5,
    spanClass: 'md:col-span-2',
    avatar: '/images/testimonials/siti.avif',
  },
  {
    id: 3,
    name: 'Andi Wijaya',
    role: 'Founder StartupID',
    content:
      'Budget UMKM saya terbatas, tapi hasilnya tidak murahan. Prosesnya cepat, komunikasinya jelas, dan revisi desain tidak dibatasi sampai saya puas.',
    highlight: 'revisi desain tidak dibatasi',
    result: 'Hasil premium di budget UMKM',
    rating: 5,
    spanClass: 'md:col-span-1',
    avatar: '/images/testimonials/andi.avif',
  },
  {
    id: 4,
    name: 'Dewi Kartika',
    role: 'Owner Lunaria',
    content:
      'Saya bisa edit konten sendiri tanpa minta tolong developer. Ganti promo, upload foto, tambah produk — semua gampang. Saya tinggal fokus ngembangin bisnis.',
    highlight: 'edit konten sendiri',
    result: 'Kontrol penuh tanpa developer',
    rating: 5,
    spanClass: 'md:col-span-3',
    avatar: '/images/testimonials/dewi.avif',
  },
]

function highlightText(text: string, highlight: string) {
  if (!highlight) return text
  const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'))
  return parts.map((part, i) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
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
          <div
            className="w-7 h-7 bg-primary-500 border-2 border-black flex items-center justify-center text-white font-black shrink-0"
            aria-hidden="true"
          >
            <ArrowUpRight size={12} />
          </div>
        </div>

        <p className="font-sans text-xs sm:text-sm font-bold leading-relaxed mb-3 tracking-tight">
          &ldquo;{highlightText(item.content, item.highlight)}&rdquo;
        </p>

        <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 border-2 border-green-600 text-[9px] sm:text-[10px] font-black uppercase tracking-wide text-green-800 mb-1">
          <BadgeCheck size={11} aria-hidden="true" /> Klien Terverifikasi
        </div>
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
          <div className="text-center max-w-2xl mb-8 space-y-3">
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
              Hasil nyata dari para mitra bisnis yang bertransformasi bersama RakaWeb.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-3 mb-8 bg-black text-white border-2 border-white px-5 py-3 shadow-[5px_5px_0px_0px_rgba(255,255,0,1)]"
            aria-label="Ringkasan rating"
          >
            <span className="font-display text-2xl font-black tracking-tighter text-yellow-300">5/5</span>
            <span className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
              ))}
            </span>
            <span className="font-sans font-bold text-xs uppercase tracking-wide">
              dari testimonial klien di bawah
            </span>
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
