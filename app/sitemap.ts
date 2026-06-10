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
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
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
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/studycase`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/tentang`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // Study case detail pages
  const studycaseSlugs = ['coksu', 'lunaria', 'robek-bakery']
  const studycasePages: MetadataRoute.Sitemap = studycaseSlugs.map((slug) => ({
    url: `${SITE_URL}/studycase/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

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

  return [...staticPages, ...studycasePages, ...blogPages]
}