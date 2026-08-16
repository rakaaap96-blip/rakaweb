import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Kontak RakaWeb - Konsultasi Gratis Jasa Pembuatan Website',
  description:
    'Hubungi RakaWeb untuk konsultasi gratis pembuatan website UMKM, company profile, dan sekolah di Bogor. Respon cepat via WhatsApp, email, atau formulir kontak.',
  slug: '/kontak',
})

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return children
}
