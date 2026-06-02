export interface MetadataProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  slug?: string
  noIndex?: boolean
}

export interface Author {
  id: number
  name: string
  avatar?: string
  role?: string
  bio?: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  authors: Author[]  // multiple authors
  readingTime: number
  category: string
  tags: string[]
  image: string
  content: any
}

// Untuk backward compatibility, kita bisa tambahkan properti author (single) yang diambil dari authors[0]
// Tapi lebih baik semua komponen menggunakan authors array.

export interface ServicePage {
  title: string
  description: string
  slug: string
  keywords: string[]
  priceRange: string
  features: string[]
  faqs: FAQ[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
}

export interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  link: string
}

export interface PricingPlan {
  name: string
  price: string
  features: string[]
  buttonText?: string
  popular?: boolean
}