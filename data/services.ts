import { Layers, Building2, GraduationCap } from 'lucide-react'
import { FAQ, PricingPlan } from '@/types'

export const servicesData = {
  umkm: {
    title: 'Jasa Pembuatan Website UMKM',
    description:
      'Website profesional untuk membantu UMKM meningkatkan kredibilitas, menjangkau lebih banyak pelanggan, dan memperkuat kehadiran bisnis secara online.',
    icon: Layers,
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Desain Custom Sesuai Brand',
      'Mobile Responsive',
      'SEO Friendly',
      'Gratis Hosting',
      'Integrasi WhatsApp',
    ],
    pricing: [
      {
        name: 'Basic',
        price: 'Rp 999.000',
        features: [
          '1 Halaman Landing Page',
          'Desain Custom',
          'Mobile Responsive',
          'Integrasi WhatsApp',
          'SSL Certificate',
          'Hosting Gratis 1 Tahun',
        ],
        buttonText: 'Pilih Paket',
      },
      {
        name: 'Professional',
        price: 'Rp 2.500.000',
        features: [
          'Hingga 5 Halaman',
          'Desain Custom Premium',
          'Mobile Responsive',
          'SEO Basic',
          'Google Maps',
          'Form Kontak',
          'Domain & Hosting Gratis 1 Tahun',
        ],
        popular: true,
        buttonText: 'Pilih Paket',
      },
      {
        name: 'Premium',
        price: 'Rp 4.500.000',
        features: [
          'Hingga 10 Halaman',
          'CMS Edit Konten',
          'Blog',
          'Google Analytics',
          'SEO Advanced',
          'Optimasi Kecepatan Website',
          'Maintenance 1 Bulan',
        ],
        buttonText: 'Pilih Paket',
      },
    ] as PricingPlan[],
    faqs: [
      {
        question: 'Apakah website bisa dibuka di HP?',
        answer:
          'Ya, seluruh website yang kami buat sudah mobile responsive sehingga nyaman digunakan di smartphone, tablet, maupun desktop.',
      },
      {
        question: 'Apakah saya mendapatkan domain dan hosting?',
        answer:
          'Ya, paket Professional sudah termasuk domain dan hosting gratis selama 1 tahun.',
      },
      {
        question: 'Apakah website bisa muncul di Google?',
        answer:
          'Ya, kami menerapkan optimasi SEO dasar hingga lanjutan sesuai paket yang dipilih.',
      },
    ] as FAQ[],
  },

  company: {
    title: 'Jasa Pembuatan Website Bisnis',
    description:
      'Bangun citra perusahaan yang profesional dengan website modern, cepat, dan mudah ditemukan di Google.',
    icon: Building2,
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Desain Profesional',
      'CMS Mudah Digunakan',
      'SEO Friendly',
      'SSL Certificate',
      'Skalabel untuk Bisnis',
    ],
    pricing: [
      {
        name: 'Starter',
        price: 'Rp 2.500.000',
        features: [
          'Hingga 5 Halaman',
          'Desain Custom',
          'Mobile Responsive',
          'SSL Certificate',
          'Form Kontak',
          'Hosting Gratis 1 Tahun',
        ],
        buttonText: 'Pilih Paket',
      },
      {
        name: 'Business',
        price: 'Rp 5.000.000',
        features: [
          'Hingga 10 Halaman',
          'CMS Edit Konten',
          'Blog / Artikel',
          'SEO Basic',
          'Google Analytics',
          'WhatsApp Integration',
          'Domain & Hosting Gratis 1 Tahun',
        ],
        popular: true,
        buttonText: 'Pilih Paket',
      },
      {
        name: 'Corporate',
        price: 'Rp 8.500.000',
        features: [
          'Unlimited Halaman',
          'CMS Lengkap',
          'Multi Bahasa',
          'SEO Advanced',
          'Custom Form',
          'Optimasi Performa',
          'Maintenance 3 Bulan',
        ],
        buttonText: 'Pilih Paket',
      },
    ] as PricingPlan[],
    faqs: [
      {
        question: 'Berapa lama pengerjaan website company profile?',
        answer:
          'Rata-rata 1–3 minggu tergantung jumlah halaman dan kesiapan materi dari klien.',
      },
      {
        question: 'Apakah saya bisa mengubah konten sendiri?',
        answer:
          'Ya, pada paket Business dan Corporate tersedia CMS yang memungkinkan Anda mengubah konten tanpa bantuan developer.',
      },
      {
        question: 'Apakah website sudah SEO friendly?',
        answer:
          'Ya, seluruh website dibangun dengan struktur yang ramah mesin pencari dan performa yang optimal.',
      },
    ] as FAQ[],
  },

  school: {
    title: 'Jasa Pembuatan Website Sekolah',
    description:
      'Website sekolah modern untuk menampilkan profil, berita, pengumuman, galeri kegiatan, dan informasi akademik secara profesional.',
    icon: GraduationCap,
    gradient: 'from-amber-500 to-orange-500',
    features: [
      'Profil Sekolah',
      'Berita & Pengumuman',
      'Galeri Kegiatan',
      'Mobile Responsive',
      'SEO Friendly',
    ],
    pricing: [
      {
        name: 'Starter',
        price: 'Rp 2.500.000',
        features: [
          'Profil Sekolah',
          'Hingga 5 Halaman',
          'Mobile Responsive',
          'Galeri Foto',
          'SSL Certificate',
          'Hosting Gratis 1 Tahun',
        ],
        buttonText: 'Pilih Paket',
      },
      {
        name: 'Professional',
        price: 'Rp 5.000.000',
        features: [
          'Hingga 10 Halaman',
          'CMS Edit Konten',
          'Berita & Pengumuman',
          'Galeri Foto & Video',
          'SEO Basic',
          'Domain & Hosting Gratis 1 Tahun',
        ],
        popular: true,
        buttonText: 'Pilih Paket',
      },
      {
        name: 'Premium',
        price: 'Rp 8.500.000',
        features: [
          'Unlimited Halaman',
          'CMS Lengkap',
          'PPDB Online',
          'Kalender Akademik',
          'Google Analytics',
          'SEO Advanced',
          'Maintenance 3 Bulan',
        ],
        buttonText: 'Pilih Paket',
      },
    ] as PricingPlan[],
    faqs: [
      {
        question: 'Apakah sekolah dapat mengelola berita sendiri?',
        answer:
          'Ya, paket Professional dan Premium sudah dilengkapi CMS sehingga admin sekolah dapat menambah berita dan pengumuman tanpa bantuan developer.',
      },
      {
        question: 'Apakah tersedia fitur PPDB online?',
        answer:
          'Ya, fitur PPDB online tersedia pada paket Premium dan dapat disesuaikan dengan kebutuhan sekolah.',
      },
      {
        question: 'Apakah website dapat diakses melalui HP?',
        answer:
          'Ya, seluruh website sudah mobile responsive dan nyaman digunakan di berbagai perangkat.',
      },
    ] as FAQ[],
  },
}