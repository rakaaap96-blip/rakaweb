import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { Calendar, User } from 'lucide-react'
import Image from 'next/image'
import ShareButtons from '@/components/blog/ShareButtons'
import AuthorBio from '@/components/blog/AuthorBio'
import TableOfContents from '@/components/blog/TableOfContents'
import TopReadArticles from '@/components/blog/TopReadArticles'
import ScrollProgress from '@/components/blog/ScrollProgress'
import ScrollToTop from '@/components/blog/ScrollToTop'
import Container from '@/components/ui/Container'

interface PageProps {
  params: Promise<{ slug: string }>
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const source = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(source)

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakawebpro.vercel.app/'
  const pageUrl = `${baseUrl}/blog/${slug}`

  let authors = []
  if (data.authors && Array.isArray(data.authors)) {
    authors = data.authors
  } else if (data.author) {
    authors = [{
      name: data.author,
      avatar: data.authorAvatar || '',
      role: data.authorRole || 'Penulis',
      bio: data.authorBio || '',
    }]
  } else {
    authors = [{ name: 'Admin', role: 'Administrator', avatar: '', bio: '' }]
  }

  const readingTime = data.readingTime || Math.ceil((content.split(/\s+/).length / 200)) || 5
  const category = data.category || 'Artikel'
  const tags = data.tags || []
  const title = data.title || 'Artikel'
  const date = data.date ? new Date(data.date).toLocaleDateString('id-ID') : 'Tanggal tidak tersedia'
  const image = data.image || '/images/blog/author/rakaaauthor.avif'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: data.description || content.slice(0, 160),
    image: `${baseUrl}${image}`,
    datePublished: data.date,
    dateModified: data.date,
    author: authors.map(a => ({ '@type': 'Person', name: a.name })),
    mainEntityOfPage: pageUrl,
  }

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article
        className="pt-32 pb-20 bg-white"
        aria-labelledby="article-title"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar kiri: Table of Contents - tidak perlu div sticky lagi */}
            <aside className="hidden lg:block lg:col-span-3" aria-label="Daftar isi artikel">
              <TableOfContents />
            </aside>

            {/* Konten utama */}
            <div className="lg:col-span-6">
              <header className="text-center mb-10 space-y-4">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="inline-block px-3 py-1 bg-black text-white border-2 border-black text-xs font-mono font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    {category}
                  </span>
                  <span className="inline-block px-3 py-1 bg-yellow-300 text-black border-2 border-black text-xs font-mono font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    {readingTime} min read
                  </span>
                </div>
                <h1
                  id="article-title"
                  className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter bg-black text-white p-4 border-4 border-yellow-300 shadow-[8px_8px_0px_0px_rgba(255,255,0,1)] inline-block transform -rotate-0.5"
                >
                  {title}
                </h1>
                <div className="flex flex-wrap justify-center gap-4 font-mono text-xs font-bold text-navy-800">
                  <span className="flex items-center gap-1 bg-primary-100 border-2 border-black px-2 py-1">
                    <User size={14} strokeWidth={2.5} aria-hidden="true" />
                    <span>{authors.map(a => a.name).join(', ')}</span>
                  </span>
                  <span className="flex items-center gap-1 bg-primary-100 border-2 border-black px-2 py-1">
                    <Calendar size={14} strokeWidth={2.5} aria-hidden="true" />
                    <span>{date}</span>
                  </span>
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {tags.map((tag: string) => (
                      <span key={tag} className="px-2 py-1 bg-black/10 border border-black text-[10px] font-mono font-black uppercase">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              <div className="relative w-full h-80 md:h-96 mb-10 bg-primary-100 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => <h1 id={slugify(children?.toString() || '')}>{children}</h1>,
                    h2: ({ children }) => <h2 id={slugify(children?.toString() || '')}>{children}</h2>,
                    h3: ({ children }) => <h3 id={slugify(children?.toString() || '')}>{children}</h3>,
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>

              <AuthorBio authors={authors} />
              <ShareButtons title={title} url={pageUrl} />

              <div className="mt-10 pt-6 border-t-4 border-black flex justify-between text-sm font-mono font-black">
                <span className="text-navy-500">← Artikel Sebelumnya</span>
                <span className="text-navy-500">Artikel Selanjutnya →</span>
              </div>
            </div>

            {/* Sidebar kanan: Artikel Populer */}
            <aside className="hidden lg:block lg:col-span-3" aria-label="Artikel populer">
              <TopReadArticles currentSlug={slug} />
            </aside>
          </div>
        </Container>
      </article>
    </>
  )
}