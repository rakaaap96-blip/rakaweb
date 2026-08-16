// app/manifest.ts
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RakaWeb - Jasa Pembuatan Website Profesional di Bogor',
    short_name: 'RakaWeb',
    description:
      'Jasa pembuatan website profesional di Bogor. Solusi website UMKM, company profile, dan ecommerce dengan harga terjangkau dan SEO-friendly.',
    start_url: '/',
    display: 'standalone',
    background_color: '#4169E1',
    theme_color: '#4169E1',
    lang: 'id',
    categories: ['business', 'web'],
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  }
}
