import { MetadataRoute } from 'next'
import { getAllBlogSlugs, getBlogPost } from '@/lib/mdx'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rakawebpro.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/jasa-pembuatan-website-umkm`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/jasa-pembuatan-website-company-profile`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/jasa-pembuatan-website-ecommerce`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/karir`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/kontak`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Blog pages
  const slugs = await getAllBlogSlugs()
  const blogPages: MetadataRoute.Sitemap = await Promise.all(
    slugs.map(async (slug: string) => {
      const post = await getBlogPost(slug)
      return {
        url: `${SITE_URL}/blog/${slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const, // gunakan 'as const' untuk memastikan tipe literal
        priority: 0.6,
      }
    })
  )

  return [...staticPages, ...blogPages]
}