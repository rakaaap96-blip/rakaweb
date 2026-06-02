import Link from 'next/link'
import { Mail } from 'lucide-react'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa'
import Container from '@/components/ui/Container'

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
  Bantuan: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Kebijakan Privasi', href: '/privacy' },
    { name: 'Syarat & Ketentuan', href: '/terms' },
  ],
}

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
        {/* Heading tersembunyi untuk aksesibilitas landmark */}
        <h2 id="footer-heading" className="sr-only">
          Informasi footer RakaWeb
        </h2>

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

          {/* Links Sections */}
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
        </div>

        {/* Copyright */}
        <div className="border-t-4 border-black pt-6 text-center">
          <p className="font-mono font-black text-xs uppercase tracking-wider text-black">
            &copy; {new Date().getFullYear()} RakaWeb. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}