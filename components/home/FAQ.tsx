'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import Container from '@/components/ui/Container' // asumsikan ada komponen Container
import Button from '@/components/ui/Button'

const WA_LINK =
  'https://wa.me/6287823268333?text=Halo%20RakaWeb%2C%20saya%20punya%20pertanyaan%20seputar%20jasa%20pembuatan%20website.'

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan website?',
    answer:
      'Rata-rata 2-4 minggu tergantung kompleksitas. Website company profile sederhana bisa selesai dalam 2 minggu. Anda mendapat update progres setiap pekan via WhatsApp, jadi selalu tahu posisi pengerjaan.',
  },
  {
    question: 'Apakah website yang dibuat sudah mobile friendly?',
    answer:
      'Ya, semua website kami dibangun dengan pendekatan mobile-first dan fully responsive. Website tampil sempurna di smartphone, tablet, dan desktop — karena mayoritas pengunjung bisnis lokal datang dari HP.',
  },
  {
    question: 'Apakah saya bisa mengedit konten sendiri?',
    answer:
      'Tentu. Untuk paket dengan CMS, Anda mendapat akses dashboard yang mudah digunakan — edit teks, ganti foto, tambah produk tanpa skill coding. Kami ajarkan gratis sampai Anda terbiasa.',
  },
  {
    question: 'Apakah harga sudah termasuk hosting dan domain?',
    answer:
      'Paket Professional ke atas sudah termasuk domain dan hosting gratis untuk 1 tahun pertama. Untuk paket Basic, hosting bisa ditambahkan dengan biaya terjangkau. Tidak ada biaya tersembunyi — semua transparan sejak awal.',
  },
  {
    question: 'Apakah ada garansi setelah website selesai?',
    answer:
      'Ada dua lapis garansi: (1) revisi desain tanpa batas sampai Anda puas sebelum launch, dan (2) free maintenance selama 1 bulan setelah website live. Setelahnya tersedia paket maintenance bulanan yang fleksibel.',
  },
  {
    question: 'Apakah website yang dibuat SEO friendly?',
    answer:
      '100%. Website dibangun dengan struktur kode yang ramah mesin pencari, kecepatan loading tinggi, meta tags dan schema markup yang benar — sehingga siap bersaing di halaman pertama Google.',
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer:
      'DP 50% untuk memulai pengerjaan, pelunasan dilakukan setelah website selesai dan Anda terima. Pembayaran bisa via transfer bank maupun e-wallet. Aman dan jelas, tidak ada pembayaran penuh di depan.',
  },
  {
    question: 'Apa yang terjadi jika website saya bermasalah?',
    answer:
      'Selama masa garansi, semua kendala kami perbaiki gratis. Setelah itu, paket maintenance bulanan memastikan website Anda tetap aman, ter-backup, dan ter-update tanpa repot.',
  },
  {
    question: 'Apakah saya bisa konsultasi dulu sebelum memutuskan?',
    answer:
      'Tentu, dan kami sarankan begitu. Konsultasi gratis 30 menit tanpa komitmen. Kami bantu petakan kebutuhan dan budget Anda sebelum Anda memutuskan apa pun.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      className="py-20 bg-white border-b-8 border-black"
      aria-labelledby="faq-heading"
    >
      <Container>
        {/* Header neubrutalism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div
            className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            aria-hidden="true"
          >
            FAQ
          </div>
          <h2 id="faq-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mt-4">
            Pertanyaan <span className="text-primary-500 block sm:inline">Yang Sering Diajukan</span>
          </h2>
          <p className="font-sans text-base font-bold text-navy-700 max-w-2xl mx-auto leading-relaxed">
            Masih ragu? Temukan jawaban dari pertanyaan yang paling sering ditanyakan.
          </p>
        </motion.div>

        {/* FAQ Accordion neubrutalism */}
        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                <button
                  id={buttonId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex justify-between items-center p-5 text-left font-sans font-black text-base uppercase tracking-tight text-black hover:bg-yellow-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    strokeWidth={3}
                    className={`transition-transform duration-150 shrink-0 ml-2 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t-4 border-black"
                    >
                      <p className="p-5 font-sans font-bold text-navy-700 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center space-y-4"
        >
          <p className="font-sans font-bold text-navy-700 max-w-xl mx-auto leading-relaxed">
            Masih ragu? Tanyakan langsung — gratis dan tanpa komitmen. Kami jawab secepatnya.
          </p>
          <Button
            href={WA_LINK}
            icon={<MessageCircle size={18} aria-hidden="true" />}
            className="bg-green-500 text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-green-400 hover:text-black hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white"
          >
            Tanya via WhatsApp
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}