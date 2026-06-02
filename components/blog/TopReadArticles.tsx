// Server Component - tidak perlu 'use client'
import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/mdx'
import { Calendar, Eye, ArrowRight } from 'lucide-react'

interface TopReadArticlesProps {
  currentSlug?: string
}

export default async function TopReadArticles({ currentSlug }: TopReadArticlesProps) {
  let allPosts = []
  try {
    allPosts = await getAllBlogPosts()
  } catch (error) {
    console.error('Gagal memuat daftar artikel:', error)
    return null // Tidak menampilkan widget jika error
  }

  const topArticles = allPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 5)

  if (topArticles.length === 0) return null

  return (
    <aside
      className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden w-full"
      aria-labelledby="top-read-title"
    >
      {/* Header Widget */}
      <div className="p-4 bg-primary-100 border-b-4 border-black">
        <h4
          id="top-read-title"
          className="font-sans font-black text-xs sm:text-sm uppercase tracking-tight text-black flex items-center gap-2"
        >
          <span aria-hidden="true">🔥</span> Artikel Populer
        </h4>
      </div>

      {/* Daftar Artikel */}
      <div className="bg-white">
        <ul className="divide-y-2 divide-black" role="list">
          {topArticles.map((post) => (
            <li key={post.slug} role="listitem">
              <Link
                href={`/blog/${post.slug}`}
                className="block p-4 bg-white hover:bg-yellow-100 transition-colors duration-150 group text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white"
              >
                {/* Judul Artikel */}
                <h5 className="font-sans font-black text-sm text-black group-hover:text-primary-600 group-focus:text-white line-clamp-2 leading-snug mb-2">
                  {post.title}
                </h5>

                {/* Metadata Bar */}
                <div className="flex items-center justify-between gap-3 text-[11px] font-mono font-black uppercase text-stone-600 group-focus:text-stone-300">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} strokeWidth={2.5} aria-hidden="true" />
                      <span>
                        {new Date(post.date).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={12} strokeWidth={2.5} aria-hidden="true" />
                      <span>1.2K Views</span> {/* Placeholder: ganti dengan data real jika tersedia */}
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    strokeWidth={3}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-black group-focus:text-white"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}