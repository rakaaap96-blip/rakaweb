import { getAllBlogPosts } from '@/lib/mdx'
import BlogLayout from '@/components/blog/BlogLayout'
import BlogCard from '@/components/blog/BlogCard'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Blog RakaWeb - Artikel & Tips Website Terbaru',
  description: 'Baca artikel terbaru tentang tips membuat website, digital marketing, dan perkembangan teknologi untuk bisnis Anda.',
  slug: '/blog',
})

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <>
      <BlogLayout
        title="BLOG & ARTIKEL"
        description="Dapatkan insight, panduan teknis, dan tips terbaru seputar pembuatan website, digital marketing, dan ekosistem teknologi."
      >
        {posts.length === 0 ? (
          <div
            className="text-center py-12 px-6 bg-yellow-100 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xl mx-auto my-8"
            role="status"
            aria-live="polite"
          >
            <span aria-hidden="true" className="text-4xl block mb-3">📁</span>
            <h2 className="font-sans font-black text-xl uppercase tracking-tight mb-2 text-navy-900">
              ARSIP MASIH KOSONG!
            </h2>
            <p className="font-sans text-sm font-bold text-navy-700 bg-white p-3 border-2 border-black inline-block">
              Belum ada artikel yang diterbitkan. Silakan cek kembali dalam waktu dekat.
            </p>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full auto-rows-fr"
            role="list"
            aria-label="Daftar artikel blog"
          >
            {posts.map((post, idx) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.description}
                date={post.date}
                authors={post.authors}
                readingTime={post.readingTime}
                image={post.image}
                index={idx}
              />
            ))}
          </div>
        )}
      </BlogLayout>

      {/* JSON-LD untuk halaman blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Blog RakaWeb",
            "description": "Artikel dan tips terbaru seputar pembuatan website, digital marketing, dan teknologi.",
            "url": "https://rakaweb.com/blog",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": posts.map((post, idx) => ({
                "@type": "ListItem",
                "position": idx + 1,
                "url": `https://rakaweb.com/blog/${post.slug}`,
                "name": post.title,
              })),
            },
          }),
        }}
      />
    </>
  )
}