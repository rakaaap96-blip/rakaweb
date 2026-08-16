import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Study Case - Portofolio Jasa Pembuatan Website',
  description:
    'Lihat portofolio dan studi kasus website yang telah dikerjakan RakaWeb: Robek Bakery, Coksu, dan Lunaria. Bukti nyata transformasi digital untuk bisnis di Indonesia.',
  slug: '/studycase',
})

export default function StudycaseLayout({ children }: { children: React.ReactNode }) {
  return children
}
