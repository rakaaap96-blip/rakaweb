export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-black text-white px-4 py-2 border-2 border-white font-mono font-black uppercase text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
    >
      Langsung ke konten utama
    </a>
  )
}