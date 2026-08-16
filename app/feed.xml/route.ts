// app/feed.xml/route.ts
import { getAllBlogPosts } from '@/lib/mdx'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://rakawebpro.vercel.app').replace(/\/$/, '')

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function imageType(url: string): string {
  const ext = url.split('.').pop()?.toLowerCase()
  switch (ext) {
    case 'png':
      return 'image/png'
    case 'webp':
      return 'image/webp'
    case 'avif':
      return 'image/avif'
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg'
    default:
      return 'image/jpeg'
  }
}

export async function GET() {
  const posts = await getAllBlogPosts()

  const items = posts
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString()
      const link = `${SITE_URL}/blog/${post.slug}`
      const enclosure = post.image
        ? `\n    <enclosure url="${SITE_URL}${post.image}" type="${imageType(post.image)}" />`
        : ''
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.description)}</description>${enclosure}
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog RakaWeb</title>
    <link>${SITE_URL}/blog</link>
    <description>Artikel dan tips terbaru seputar pembuatan website, digital marketing, dan teknologi.</description>
    <language>id-id</language>
    <lastBuildDate>${posts[0] ? new Date(posts[0].date).toUTCString() : new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
