'use client'

import Image from 'next/image'
import { Author } from '@/types'

interface AuthorBioProps {
  authors: Author[]
}

export default function AuthorBio({ authors }: AuthorBioProps) {
  if (!authors || authors.length === 0) return null

  const defaultBio = (name: string) =>
    `${name} adalah pengembang web profesional yang berfokus pada pembuatan website cepat, modern, dan SEO-friendly.`

  return (
    // NEUBRUTALISM WRAPPER: Kotak solid putih, border 4px hitam, shadow tebal pekat tanpa blur
    <div
      className="bg-white border-4 border-black p-6 sm:p-8 mt-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none"
      aria-label="Informasi penulis artikel"
    >
      <div className="flex flex-col gap-8 divide-y-2 divide-black/10">
        {authors.map((author, idx) => {
          const name = author?.name || 'Penulis'
          const avatar = author?.avatar || ''
          const role = author?.role || 'Penulis'
          const bio = author?.bio || defaultBio(name)

          return (
            <div
              key={author.id || idx} // gunakan id jika ada, fallback ke index
              className={`flex flex-col sm:flex-row gap-5 items-center sm:items-start ${
                idx > 0 ? 'pt-6' : ''
              }`}
              role="article"
              aria-labelledby={`author-name-${idx}`}
            >
              {/* AVATAR: Kotak kaku bersudut tajam dengan border hitam tebal */}
              <div className="w-20 h-20 rounded-none border-4 border-black overflow-hidden bg-primary-100 shrink-0 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {avatar ? (
                  <Image
                    src={avatar}
                    alt={`Foto profil ${name}`}
                    width={80}
                    height={80}
                    className="object-cover filter grayscale hover:grayscale-0 transition-all"
                    priority={idx === 0} // prioritas untuk penulis pertama jika penting
                  />
                ) : (
                  <span
                    className="text-black font-sans font-black text-2xl"
                    aria-hidden="true"
                  >
                    {name.charAt(0)}
                  </span>
                )}
              </div>

              {/* KONTEN BIOGRAFI */}
              <div className="text-center sm:text-left flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  {/* Judul Penulis - menggunakan <h3> untuk hierarki yang lebih baik */}
                  <h3
                    id={`author-name-${idx}`}
                    className="font-sans font-black text-lg text-black uppercase tracking-tight"
                  >
                    Ditulis oleh {name}
                  </h3>

                  {/* Badge Role Bergaya Tiket/Label */}
                  <div
                    className="inline-block self-center sm:self-auto px-2 py-0.5 bg-yellow-300 text-black border-2 border-black text-xs font-mono font-black uppercase tracking-wider transform sm:rotate-1 max-w-fit"
                    aria-label={`Peran: ${role}`}
                  >
                    {role}
                  </div>
                </div>

                {/* Deskripsi Teks */}
                <p className="font-sans font-bold text-navy-700 text-sm leading-relaxed max-w-xl">
                  {bio}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}