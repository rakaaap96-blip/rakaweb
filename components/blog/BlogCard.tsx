'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowUpRight } from 'lucide-react'
import { Author } from '@/types'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  authors: Author[]
  readingTime: number
  image: string
  index?: number
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  authors,
  readingTime,
  image,
  index = 0,
}: BlogCardProps) {
  // Tampilkan nama penulis pertama, jika lebih dari satu tambahkan "dkk"
  const authorNames = authors.map(a => a.name).join(', ')
  const displayAuthor = authors.length > 2 ? `${authors[0].name} dkk` : authorNames
  const formattedDate = new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
      aria-labelledby={`blog-title-${slug}`}
    >
      <Link
        href={`/blog/${slug}`}
        className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white h-full flex-col justify-between"
        aria-label={`Baca artikel: ${title}`}
      >
        <div>
          {/* Container Gambar */}
          <div className="relative h-48 overflow-hidden border-b-4 border-black bg-primary-100">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
              priority={index === 0} // prioritas untuk card pertama
            />
            {/* Badge Waktu Baca */}
            <div
              className="absolute top-3 left-3 bg-yellow-300 text-black border-2 border-black px-2 py-0.5 text-[10px] font-mono font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              aria-label={`Waktu baca: ${readingTime} menit`}
            >
              {readingTime} Min Read
            </div>
          </div>

          {/* Konten Kartu */}
          <div className="p-5">
            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-2 mb-4 font-mono text-[11px] font-black uppercase">
              <span
                className="flex items-center gap-1 bg-primary-100 border-2 border-black px-2 py-0.5 text-primary-900"
                aria-label={`Penulis: ${displayAuthor}`}
              >
                <User size={12} strokeWidth={2.5} aria-hidden="true" />
                <span>{displayAuthor}</span>
              </span>
              <span
                className="flex items-center gap-1 bg-stone-100 border-2 border-black px-2 py-0.5 text-stone-700"
                aria-label={`Tanggal publikasi: ${formattedDate}`}
              >
                <Calendar size={12} strokeWidth={2.5} aria-hidden="true" />
                <span>{formattedDate}</span>
              </span>
            </div>

            {/* Judul Artikel */}
            <h3
              id={`blog-title-${slug}`}
              className="font-sans font-black text-lg sm:text-xl text-black leading-tight mb-2 line-clamp-2 group-hover:text-primary-600 group-hover:underline decoration-2 transition-colors"
            >
              {title}
            </h3>

            {/* Excerpt */}
            <p className="font-sans font-bold text-navy-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
              {excerpt}
            </p>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="p-5 pt-0 mt-auto flex justify-end">
          <div
            className="inline-flex items-center justify-center w-8 h-8 bg-black text-white border-2 border-black group-hover:bg-yellow-300 group-hover:text-black transition-colors duration-200"
            aria-hidden="true"
          >
            <ArrowUpRight size={18} strokeWidth={3} aria-hidden="true" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}