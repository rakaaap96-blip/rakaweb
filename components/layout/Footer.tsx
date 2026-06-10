import Link from 'next/link'
import { Mail } from 'lucide-react'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa'
import Container from '@/components/ui/Container'

// ========== MUDAH MENGUBAH KOORDINAT MAP ==========
const MAP_LAT = -6.441006   // Ganti dengan latitude yang diinginkan
const MAP_LNG = 106.939880  // Ganti dengan longitude yang diinginkan
// =================================================

const footerLinks = {
  Perusahaan: [
    { name: 'Tentang Kami', href: '/tentang' },
    { name: 'Karir', href: '/karir' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontak', href: '/kontak' },
  ],
  Layanan: [
    { name: 'Website UMKM', href: '/jasa-pembuatan-website-umkm' },
    { name: 'Website Bisnis', href: '/jasa-pembuatan-website-company-profile' },
    { name: 'Website Sekolah', href: '/jasa-pembuatan-website-sekolah' },
  ],
}

// Link bantuan yang akan diletakkan di kanan bawah footer
const bantuanLinks = [
  { name: 'FAQ', href: '/faq' },
  { name: 'Kebijakan Privasi', href: '/privacy' },
  { name: 'Syarat & Ketentuan', href: '/terms' },
]

const socialLinks = [
  { icon: FaTiktok, href: 'https://tiktok.com/rakaweb', label: 'Tiktok' },
  { icon: FaWhatsapp, href: 'https://wa.me/6287823268333', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:rakaaa.p96@gmail.com', label: 'Gmail' },
]

export default function Footer() {
  return (
    <footer
      className="bg-white border-t-8 border-black pt-12 pb-6"
      aria-labelledby="footer-heading"
    >
      <Container>
        <h2 id="footer-heading" className="sr-only">
          Informasi footer RakaWeb
        </h2>

        {/* Grid: Brand, Perusahaan, Layanan, Google Maps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="inline-block group focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              <div className="text-2xl font-black uppercase tracking-tight text-black px-2 py-0.5 border-2 border-black group-hover:bg-yellow-300 group-hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150">
                <span className="text-primary-500">Raka</span>
                <span>Web</span>
              </div>
            </Link>
            <p className="font-sans font-bold text-navy-700 mt-4 mb-6 leading-relaxed text-sm">
              Jasa pembuatan website profesional di Bogor. Solusi digital untuk bisnis Anda.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  aria-label={`Kunjungi halaman ${social.label} RakaWeb (membuka tab baru)`}
                >
                  <social.icon size={18} className="text-black" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Perusahaan & Layanan (dari footerLinks) */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-sans font-black text-lg uppercase tracking-tight text-black mb-4 border-b-2 border-black inline-block">
                {category}
              </h3>
              <ul className="space-y-3 mt-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans font-bold text-navy-700 hover:text-black hover:underline decoration-2 underline-offset-2 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:text-black inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Google Maps Placeholder (bekas kolom Bantuan) */}
          <div>
            <h3 className="font-sans font-black text-lg uppercase tracking-tight text-black mb-4 border-b-2 border-black inline-block">
              Lokasi Kami
            </h3>
            <div className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-gray-100">
              <iframe
                title="Google Maps lokasi RakaWeb"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=15&output=embed`}
              ></iframe>
            </div>
            <p className="text-xs text-navy-700 mt-2 font-sans">
              Jl. Raya Narogong Kp. Kembang Kuning <br/> Ds. Kembang Kuning Rt 014/004 No.51 <br/> Kec.klapanunggal Kab. bogor
            </p>
          </div>
        </div>

        {/* Baris bawah: kiri "RakaWeb 2026" | kanan link bantuan */}
        <div className="border-t-4 border-black pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono font-black text-xs uppercase tracking-wider text-black">
            © 2026 RakaWeb. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4 justify-center">
            {bantuanLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-sans font-bold text-navy-700 hover:text-black hover:underline decoration-2 underline-offset-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:text-black"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}