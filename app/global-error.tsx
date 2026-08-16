'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="id">
      <body>
        <main
          id="main-content"
          className="min-h-screen flex items-center justify-center bg-primary-500 p-6"
        >
          <div className="w-full max-w-lg bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 text-center">
            <p className="font-mono font-black text-xs uppercase tracking-widest bg-black text-white inline-block px-3 py-1 border-2 border-white transform rotate-1">
              ⚠️ Terjadi Kendala
            </p>
            <h1 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight mt-5 mb-3">
              Ups, Ada Masalah
            </h1>
            <p className="font-sans text-sm font-bold text-navy-700 leading-relaxed mb-6">
              Terjadi kesalahan tak terduga. Silakan muat ulang halaman, atau hubungi kami
              via WhatsApp jika masalah berlanjut.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="w-full inline-flex items-center justify-center gap-2 font-sans font-black uppercase tracking-tight text-black border-4 border-black rounded-none transition-all duration-150 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black bg-yellow-300 hover:bg-primary-500 px-6 py-3 text-sm sm:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Muat Ulang Halaman
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}
