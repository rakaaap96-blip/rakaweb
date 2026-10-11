// lib/locations.ts
//
// Data untuk sistem halaman lokasi: /jasa-pembuatan-website-<kota>
//
// PENTING soal doorway pages:
// Google menghakimi halaman kota yang isinya hanya nama kota yang di-swap
// sebagai manipulasi dan bisa kena penalti. Karena itu setiap kota WAJIB punya
// konteks lokal yang benar-benar berbeda: karakter bisnis, area yang dilayani,
// landmark sekitar, dan FAQ yang relevan. Saat menambah kota baru, tulis
// konten spesifik. Jangan salin-tempel.
//
// Menambah kota baru: tambahkan satu objek ke array `locations`.
// generateStaticParams, sitemap, dan navigasi internal ikut berubah otomatis.

export interface LocationFAQ {
  question: string
  answer: string
}

export interface LocationData {
  slug: string
  city: string
  cityFormal: string
  province: string
  /** Kota utama = target kata kunci utama, mendapat perlakuan lebih dalam. */
  isPrimary?: boolean

  metaTitle: string
  metaDescription: string

  /** Dipisah supaya hero bisa menyorot kata kuncinya. */
  h1Prefix: string
  h1Highlight: string

  /** Paragraf pembuka yang spesifik untuk kota ini. */
  intro: string[]

  /** Alasan memilih, disesuaikan konteks kota. */
  why: { title: string; body: string }[]

  /** Komposisi bisnis yang lazim di kota ini. */
  industries: { name: string; detail: string }[]

  /** Kecamatan atau area yang dilayani. */
  areas: string[]

  /** Landmark sekitar sebagai penanda konteks lokal. */
  landmarks: string[]

  /** Catatan cara kerja yang menyesuaikan kondisi kota. */
  localNote: string

  faqs: LocationFAQ[]

  relatedServices: string[]
}

export const locations: LocationData[] = [
  // ============================================================
  // BOGOR - target kata kunci utama
  // ============================================================
  {
    slug: 'bogor',
    city: 'Bogor',
    cityFormal: 'Kota Bogor',
    province: 'Jawa Barat',
    isPrimary: true,

    // Tanpa suffix "| RakaWeb": generateMetadata() di lib/seo.ts sudah
    // menambahkannya sendiri, jadi kalau ditulis di sini akan dobel.
    metaTitle: 'Jasa Pembuatan Website di Bogor - Mulai Rp 999.000',
    metaDescription:
      'Jasa pembuatan website di Bogor mulai Rp 999.000. Berbasis di Bogor Selatan dan melayani seluruh Kota Bogor. Desain custom, cepat, SEO friendly, garansi revisi.',

    h1Prefix: 'Jasa Pembuatan Website di',
    h1Highlight: 'Bogor',

    intro: [
      'Kota Bogor punya karakter bisnis yang khas. Ribuan warung dan restoran tumbuh di sepanjang jalan seperti Jl. Juanda, Jl. Surya Sumantri, dan Jl. Achmad Yani. Semua itu bercampur dengan kampus seperti IPB dan Universitas Pakuan, serta banyak bisnis yang masih bergantung pada media sosial sebagai satu-satunya kanal digital.',
      'RakaWeb berbasis di Bogor Selatan dan melayani seluruh Kota Bogor, mulai dari Bogor Tengah dan Kota Tua, Sentul dan Cibinong, sampai Bogor Barat, Bogor Utara, dan Tanah Sareal. Kami membangun website yang tidak cuma cantik tapi benar-benar bekerja: cepat dibuka dari HP, mudah ditemukan di Google saat orang mencari layanan di sekitar lokasi mereka, dan cukup fleksibel saat bisnis berkembang.',
      'Karena kami bekerja secara lokal, kami bisa datang langsung ke lokasi klien di Bogor untuk konsultasi awal tanpa biaya. Tidak ada biaya tambahan dari luar kota untuk hal-hal yang sebenarnya bisa diselesaikan dalam satu kunjungan.',
    ],

    why: [
      {
        title: 'Konsultasi onsite tanpa biaya',
        body: 'Tim kami berada di Bogor Selatan, sehingga konsultasi awal bisa dilakukan langsung di tempat usaha Anda. Untuk UMKM yang masih beroperasi dari ruang belakang, melihat langsung produk, alur kerja, dan bahasa yang dipakai jauh lebih akurat daripada deskripsi lewat chat.',
      },
      {
        title: 'Paham karakter pasar Bogor',
        body: 'Audiens di Bogor dan Jabodetabek punya kebiasaan browsing yang berbeda. Sebagian besar mencari lewat peta dan ulasan lokal, bukan hanya lewat hasil pencarian. Kami menyesuaikan struktur website dan cara menampilkan lokasi agar mudah ditemukan baik di Google Search maupun Google Maps.',
      },
      {
        title: 'Harga masuk akal untuk UMKM',
        body: 'Kami tahu banyak bisnis di Bogor masih fase awal. Karena itu paket dimulai dari Rp 999.000 dengan DP ringan, tanpa biaya langganan website yang membebani cashflow bulanan. Pembayaran bisa dipecah menjadi beberapa tahap.',
      },
      {
        title: 'Bisa berkembang bersama bisnis Anda',
        body: 'Website yang kami buat umumnya dibangun dengan CMS yang familiar supaya Anda bisa menambah produk, artikel, atau galeri sendiri tanpa perlu menyewa developer lagi. Kalau kebutuhan berubah, kami cukup menyesuaikan bagian yang perlu.',
      },
    ],

    industries: [
      { name: 'Restoran dan Kuliner', detail: 'Menu digital, integrasi dengan platform pesan antar, dan halaman lokasi yang mudah ditemukan lewat Google Maps. Banyak usaha di Bogor masih mengandalkan menu cetak atau unggahan Instagram.' },
      { name: 'Pendidikan dan Kursus', detail: 'Landing page pendaftaran, halaman kelas, dan formulir pendaftaran yang terhubung ke email atau WhatsApp tanpa perlu developer.' },
      { name: 'Klinik dan Praktik Kesehatan', detail: 'Halaman layanan, jam praktik, dan sistem booking. Konten kesehatan butuh penulisan yang cermat dan optimasi kecepatan tinggi karena pasien mencari dari HP.' },
      { name: 'Properti dan Hunian', detail: 'Listing properti dengan foto besar, filter harga dan lokasi, serta peta interaktif. Area Bogor, Cibinong, dan Sentul adalah salah satu pasar hunian paling aktif di Jabodetabek.' },
      { name: 'Pertanian dan Agribisnis', detail: 'Portal produk UMKM tani dan hasil bumi. Bogor adalah pusat penelitian pertanian nasional lewat IPB, sehingga banyak toko produk tani butuh presence yang lebih serius.' },
      { name: 'Retail dan UMKM', detail: 'Katalog produk, promo yang bisa diperbarui sendiri. Cocok untuk toko yang sudah punya omzet tapi belum punya toko online.' },
    ],

    areas: [
      'Bogor Selatan',
      'Bogor Utara',
      'Bogor Timur',
      'Bogor Barat',
      'Bogor Tengah',
      'Tanah Sareal',
      'Sentul',
      'Cibinong',
      'Cililin',
      'Narogong',
      'Sukajaya',
      'Caringin',
    ],

    landmarks: [
      'Kota Tua dan Taman Pintu',
      'Kebun Raya Bogor',
      'Museum Zoologicum',
      'Institut Pertanian Bogor',
      'Universitas Pakuan',
      'Sentul International Circuit',
      'Bogor Trade Mall',
      'Jalan Raya Narogong',
    ],

    localNote:
      'Untuk klien di Bogor dan sekitarnya kami menjadwalkan konsultasi onsite pada hari kerja maupun Sabtu pagi, agar tidak mengganggu jam operasional usaha Anda.',

    faqs: [
      {
        question: 'Berapa biaya jasa pembuatan website di Bogor?',
        answer:
          'Paket mulai dari Rp 999.000 untuk landing page UMKM, Rp 2.500.000 untuk company profile, dan Rp 2.500.000 untuk website sekolah dengan fitur pendaftaran. Harga final bergantung pada jumlah halaman, kebutuhan desain khusus, dan fitur tambahan seperti integrasi WhatsApp atau sistem booking.',
      },
      {
        question: 'Bisakah saya konsultasi dengan datang langsung ke tempat usaha saya?',
        answer:
          'Bisa. Untuk area Bogor dan sekitarnya kami menyediakan konsultasi onsite tanpa biaya pada jam kerja maupun Sabtu pagi. Kami datang ke lokasi untuk memahami produk, layanan, dan gaya komunikasi yang Anda pakai, supaya hasilnya lebih akurat daripada hanya bicara lewat chat atau telepon.',
      },
      {
        question: 'Berapa lama pengerjaan website di Bogor?',
        answer:
          'Landing page untuk UMKM biasanya selesai 7 sampai 14 hari kerja, tergantung kecepatan persetujuan konten dari Anda. Company profile memakan waktu sekitar 2 sampai 3 minggu, sedangkan website sekolah dengan fitur pendaftaran bisa 3 sampai 4 minggu. Kami kirim jadwal progres mingguan agar Anda tahu posisi proyek.',
      },
      {
        question: 'Apakah website yang dibuat sudah dioptimasi untuk pencarian lokal?',
        answer:
          'Ya. Setiap website yang kami buat sudah termasuk optimasi SEO on-page, termasuk penmetadataan lokasi, halaman kontak dengan schema LocalBusiness, serta struktur yang mudah dipindai mesin pencari. Untuk hasil terbaik di peta, website juga perlu dihubungkan dengan Google Business Profile Anda.',
      },
      {
        question: 'Apakah harga sudah termasuk domain dan hosting?',
        answer:
          'Sebagian paket sudah termasuk domain dan hosting untuk periode awal. Namun kami menjelaskan rincian komponen biaya di proposal sebelum Anda membayar, jadi tidak ada biaya tersembunyi di tengah proyek. Perpanjangan hosting dan domain tahunan akan kami ingatkan sebelum jatuh tempo.',
      },
      {
        question: 'Setelah website jadi, bisakah saya mengedit sendiri?',
        answer:
          'Bisa. Website yang kami buat umumnya dilengkapi CMS yang mirip dengan yang Anda pakai sehari-hari, plus sesi pelatihan singkat. Anda bisa mengubah teks, foto, harga, dan menambah produk sendiri. Kalau ada bagian teknis yang perlu bantuan, kami tetap tersedia.',
      },
    ],

    relatedServices: [
      '/jasa-pembuatan-website-umkm',
      '/jasa-pembuatan-website-company-profile',
      '/jasa-pembuatan-website-sekolah',
    ],
  },
]

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug)
}

export function getLocationSlugs(): string[] {
  return locations.map((l) => l.slug)
}

export const primaryLocation = locations.find((l) => l.isPrimary)!