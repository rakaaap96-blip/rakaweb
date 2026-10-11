import { generateMetadata } from '@/lib/seo'

// Tanpa file ini, /tentang mewarisi metadata dari root layout, yang membuat
// title dan canonical-nya sama persis dengan homepage. Google akan menganggap
// halaman ini duplikat dan-propertiesnya di-drop dari index.
// Next.js mewajibkan setiap layout punya default export, walaupun isinya hanya
// metadata. Tanpa ini build gagal dengan "Property 'default' is missing".
export default function TentangLayout({ children }: { children: React.ReactNode }) {
  return children
}

export const metadata = generateMetadata({
  title: 'Tentang RakaWeb - Tim Web Developer Bogor',
  description:
    'Kenalan dengan RakaWeb, jasa pembuatan website lokal di Bogor. Cerita tim, proses kerja, dan komitmen kami terhadap kualitas serta transparansi harga.',
  slug: '/tentang',
})