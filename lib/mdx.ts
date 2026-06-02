import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'
import { BlogPost, Author } from '@/types'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export async function getAllBlogSlugs(): Promise<string[]> {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR)
  return files.filter(file => file.endsWith('.mdx')).map(file => file.replace(/\.mdx$/, ''))
}

// Generate a numeric ID from a name (simple hash)
function generateAuthorId(name: string): number {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash) + name.charCodeAt(i)
    hash |= 0 // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`)
  }
  const source = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })

  const readTime = readingTime(content)

  // Konversi author (tunggal atau jamak)
  let authors: Author[] = []
  if (data.authors && Array.isArray(data.authors)) {
    authors = data.authors.map((a: any) => ({
      id: typeof a.id === 'number' ? a.id : (a.id ? parseInt(String(a.id), 10) : generateAuthorId(a.name || 'penulis')),
      name: a.name || 'Penulis',
      avatar: a.avatar || '',
      role: a.role || 'Kontributor',
      bio: a.bio || '',
    }))
  } else if (data.author) {
    authors = [{
      id: typeof data.authorId === 'number' ? data.authorId : (data.authorId ? parseInt(String(data.authorId), 10) : generateAuthorId(data.author)),
      name: data.author,
      avatar: data.authorAvatar || '',
      role: data.authorRole || 'Penulis',
      bio: data.authorBio || '',
    }]
  } else {
    authors = [{
      id: 1, // fixed ID for admin
      name: 'Admin',
      role: 'Administrator',
      avatar: '',
      bio: '',
    }]
  }

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    authors,
    readingTime: Math.ceil(readTime.minutes),
    category: data.category,
    tags: data.tags || [],
    image: data.image,
    content: mdxSource,
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = await getAllBlogSlugs()
  const posts = await Promise.all(slugs.map(slug => getBlogPost(slug).catch(() => null)))
  return posts.filter(Boolean).sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as BlogPost[]
}

export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts()
  const currentPost = allPosts.find(post => post.slug === currentSlug)
  if (!currentPost) return []
  return allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => ({ post, score: post.tags.filter(tag => currentPost.tags.includes(tag)).length }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
}