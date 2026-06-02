import { generateMetadata } from '@/lib/seo'
import Container from '@/components/ui/Container'

export const metadata = generateMetadata({
  title: 'Syarat & Ketentuan Layanan RakaWeb',
  description: 'Syarat dan ketentuan penggunaan layanan jasa pembuatan website dari RakaWeb. Baca sebelum menggunakan layanan kami.',
  slug: '/terms',
})

export default function TermsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Syarat & Ketentuan Layanan RakaWeb',
    description: 'Syarat dan ketentuan penggunaan layanan jasa pembuatan website dari RakaWeb.',
    url: 'https://rakawebpro.vercel.app/terms',
    mainEntity: {
      '@type': 'TermsOfService',
      name: 'Syarat & Ketentuan RakaWeb',
      text: 'Syarat dan ketentuan layanan jasa pembuatan website RakaWeb.',
      dateLastModified: new Date().toISOString().split('T')[0],
    },
  }

  return (
    <>
      <section
        className="pt-24 pb-16 bg-primary-500 border-b-8 border-black"
        aria-labelledby="terms-heading"
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div
              className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              aria-hidden="true"
            >
              Legal
            </div>
            <h1
              id="terms-heading"
              className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tighter"
            >
              Syarat & Ketentuan
            </h1>
            <p className="font-sans text-base font-bold text-white bg-black/20 p-3 border-2 border-black max-w-2xl mx-auto leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white border-b-8 border-black">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-p:font-bold prose-p:text-navy-700 prose-strong:text-black prose-a:text-primary-500 prose-a:no-underline prose-a:border-b-2 prose-a:border-primary-500 hover:prose-a:text-black focus:prose-a:outline-none focus:prose-a:ring-2 focus:prose-a:ring-black">
            <h2 id="penerimaan">1. Penerimaan Ketentuan</h2>
            <p>Dengan menggunakan layanan RakaWeb (“kami”, “kita”, atau “RakaWeb”), Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, mohon tidak menggunakan layanan kami.</p>

            <h2 id="deskripsi">2. Deskripsi Layanan</h2>
            <p>RakaWeb menyediakan jasa pembuatan website profesional, meliputi Website UMKM, Company Profile, Website Sekolah, serta layanan maintenance dan support.</p>

            <h2 id="proyek">3. Proyek dan Pembayaran</h2>
            <ul>
              <li><strong>DP 50%</strong> di awal proyek sebelum pekerjaan dimulai.</li>
              <li><strong>Pelunasan 50%</strong> setelah website selesai dan disetujui klien.</li>
              <li>Pembayaran dapat dilakukan melalui transfer bank ke rekening yang tertera di invoice.</li>
              <li>Keterlambatan pembayaran dapat mengakibatkan penundaan pengerjaan.</li>
            </ul>

            <h2 id="hak-cipta">4. Hak Kekayaan Intelektual</h2>
            <p>Setelah pelunasan penuh, <strong>source code website menjadi milik klien</strong>. RakaWeb berhak mencantumkan kredit kecil “Powered by RakaWeb” di footer website (kecuali ada kesepakatan lain).</p>

            <h2 id="garansi">5. Garansi dan Revisi</h2>
            <ul>
              <li>Garansi <strong>1 bulan</strong> untuk perbaikan bug dan revisi minor setelah launching.</li>
              <li>Revisi mayor (perubahan desain/tambahan fitur) dikenakan biaya tambahan.</li>
            </ul>

            <h2 id="pembatalan">6. Pembatalan dan Pengembalian Dana</h2>
            <p>DP tidak dapat dikembalikan jika klien membatalkan proyek setelah pekerjaan dimulai. Jika RakaWeb gagal menyelesaikan proyek sesuai kesepakatan, dana akan dikembalikan secara proporsional.</p>

            <h2 id="tanggung-jawab">7. Tanggung Jawab Klien</h2>
            <ul>
              <li>Klien bertanggung jawab menyediakan konten (teks, gambar, logo) tepat waktu.</li>
              <li>Keterlambatan penyediaan konten dapat menggeser jadwal proyek.</li>
            </ul>

            <h2 id="perubahan">8. Perubahan Ketentuan</h2>
            <p>RakaWeb dapat mengubah Syarat & Ketentuan ini setiap saat. Perubahan akan diumumkan melalui website.</p>

            <h2 id="hukum">9. Hukum yang Berlaku</h2>
            <p>Ketentuan ini tunduk pada hukum Negara Kesatuan Republik Indonesia. Setiap sengketa akan diselesaikan di pengadilan negeri Bogor.</p>

            <h2 id="hubungi">10. Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, <br/> silakan hubungi kami di email{' '}
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

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}