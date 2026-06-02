import { generateMetadata } from '@/lib/seo'
import Container from '@/components/ui/Container'

export const metadata = generateMetadata({
  title: 'Kebijakan Privasi RakaWeb',
  description: 'Kebijakan privasi penggunaan website dan layanan RakaWeb. Bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.',
  slug: '/privacy',
})

export default function PrivacyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Kebijakan Privasi RakaWeb',
    description: 'Kebijakan privasi penggunaan website dan layanan RakaWeb. Bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.',
    url: 'https://rakaweb.vercel.app/privacy',
    mainEntity: {
      '@type': 'PrivacyPolicy',
      name: 'Kebijakan Privasi RakaWeb',
      text: 'Kebijakan privasi yang menjelaskan pengumpulan dan penggunaan data pengguna.',
      dateLastModified: new Date().toISOString().split('T')[0],
    },
  }

  return (
    <>
      <section
        className="pt-24 pb-16 bg-primary-500 border-b-8 border-black"
        aria-labelledby="privacy-heading"
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div
              className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              aria-hidden="true"
            >
              Privasi
            </div>
            <h1
              id="privacy-heading"
              className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tighter"
            >
              Kebijakan Privasi
            </h1>
            <p className="font-sans text-base font-bold text-white bg-black/20 p-3 border-2 border-black max-w-2xl mx-auto leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white border-b-8 border-black">
        <Container>
          <div
            className="max-w-4xl mx-auto prose prose-lg prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-p:font-bold prose-p:text-navy-700 prose-strong:text-black prose-a:text-primary-500 prose-a:no-underline prose-a:border-b-2 prose-a:border-primary-500 hover:prose-a:text-black focus:prose-a:outline-none focus:prose-a:ring-2 focus:prose-a:ring-black"
          >
            <h2 id="informasi">1. Informasi yang Kami Kumpulkan</h2>
            <p>Kami dapat mengumpulkan informasi berikut ketika Anda menggunakan layanan RakaWeb:</p>
            <ul>
              <li><strong>Data Pribadi:</strong> Nama, alamat email, nomor telepon, dan informasi kontak lainnya yang Anda berikan saat mengisi formulir kontak atau konsultasi.</li>
              <li><strong>Data Proyek:</strong> Spesifikasi website, konten, gambar, dan materi yang Anda berikan untuk pembuatan website.</li>
              <li><strong>Data Penggunaan:</strong> Alamat IP, jenis browser, halaman yang dikunjungi, dan waktu akses (melalui cookie atau Google Analytics).</li>
            </ul>

            <h2 id="penggunaan">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
            <ul>
              <li>Menanggapi pertanyaan dan memberikan layanan konsultasi.</li>
              <li>Memproses dan menyelesaikan proyek pembuatan website.</li>
              <li>Mengirim informasi terkait proyek (update, invoice, dll).</li>
              <li>Meningkatkan kualitas layanan dan pengalaman pengguna.</li>
              <li>Mematuhi kewajiban hukum yang berlaku.</li>
            </ul>

            <h2 id="perlindungan">3. Perlindungan Data</h2>
            <p>Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi data Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran. Namun, tidak ada metode transmisi data melalui internet yang 100% aman.</p>

            <h2 id="pengungkapan">4. Pengungkapan Data ke Pihak Ketiga</h2>
            <p>Kami tidak akan menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk kepentingan pemasaran mereka. Kami dapat membagikan data hanya jika diperlukan untuk penyelesaian proyek (misal: hosting, payment gateway) atau diwajibkan oleh hukum.</p>

            <h2 id="cookie">5. Cookie dan Teknologi Pelacakan</h2>
            <p>Website RakaWeb menggunakan cookie untuk meningkatkan pengalaman browsing. Anda dapat mengatur browser untuk menolak cookie, namun beberapa fitur mungkin tidak berfungsi optimal.</p>

            <h2 id="tautan">6. Tautan ke Situs Lain</h2>
            <p>Website kami mungkin berisi tautan ke situs eksternal. Kami tidak bertanggung jawab atas praktik privasi situs tersebut.</p>

            <h2 id="hak-anda">7. Hak Anda</h2>
            <p>Anda berhak untuk mengakses data pribadi yang kami simpan, meminta koreksi, atau meminta penghapusan data (dengan batasan tertentu). Untuk menggunakan hak-hak tersebut, silakan hubungi kami di rakaaa.p96@gmail.com.</p>

            <h2 id="perubahan">8. Perubahan Kebijakan Privasi</h2>
            <p>Kami dapat memperbarui kebijakan ini sewaktu-waktu. Perubahan akan diumumkan melalui website.</p>

            <h2 id="hubungi">9. Hubungi Kami</h2>
            <p>
              Jika ada pertanyaan tentang Kebijakan Privasi ini, silakan hubungi email{' '}
              <a href="mailto:rakaaa.p96@gmail.com" className="focus:outline-none focus:ring-2 focus:ring-black">
                rakaaa.p96@gmail.com
              </a>{' '}
              atau WhatsApp{' '}
              <a href="https://wa.me/6287823268333" className="focus:outline-none focus:ring-2 focus:ring-black">
                +62 878-2326-8333
              </a>.
            </p>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}