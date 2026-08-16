// app/not-found.tsx
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ArrowRight, Home, MessageCircle } from 'lucide-react'

export const metadata = {
  title: '404 - Halaman Tidak Ditemukan | RakaWeb',
  description: 'Halaman yang Anda cari tidak ditemukan atau telah dipindahkan. Kembali ke beranda atau hubungi kami via WhatsApp.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <section
      className="bg-primary-500 text-navy-900 py-24 border-b-8 border-black"
      aria-labelledby="notfound-heading"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div
            className="inline-block px-4 py-1.5 bg-black text-white border-2 border-white text-xs sm:text-sm font-mono font-black tracking-widest uppercase transform rotate-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
            aria-hidden="true"
          >
            ⚠️ Error 404
          </div>

          <h1
            id="notfound-heading"
            className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none bg-black text-white p-4 md:p-6 border-4 border-yellow-300 shadow-[8px_8px_0px_0px_rgba(255,255,0,1)] inline-block transform -rotate-1"
          >
            404
          </h1>

          <p className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Halaman Tidak Ditemukan
          </p>

          <p className="font-sans text-sm sm:text-base font-bold text-white bg-black/30 p-3 border-2 border-black max-w-xl mx-auto leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Sepertinya halaman yang Anda cari sudah pindah atau tidak pernah ada.
            Jangan khawatir — kami masih di sini untuk membantu kebutuhan website Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button
              href="/"
              size="lg"
              icon={<Home size={20} aria-hidden="true" />}
              iconPosition="left"
              className="bg-white text-black border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black"
            >
              Kembali ke Beranda
            </Button>
            <Button
              href="https://wa.me/6287823268333"
              size="lg"
              icon={<MessageCircle size={20} aria-hidden="true" />}
              iconPosition="left"
              className="bg-yellow-300 text-black border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-black"
            >
              Hubungi Kami
            </Button>
          </div>

          <Button href="/blog" variant="ghost" icon={<ArrowRight size={18} aria-hidden="true" />}>
            Baca artikel & tips di Blog
          </Button>
        </div>
      </Container>
    </section>
  )
}
