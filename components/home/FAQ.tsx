'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Container from '@/components/ui/Container' // asumsikan ada komponen Container

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan website?',
    answer: 'Waktu pengerjaan website biasanya antara 2-4 minggu tergantung kompleksitas fitur yang dibutuhkan. Untuk website sederhana seperti company profile, bisa selesai dalam 2 minggu.',
  },
  {
    question: 'Apakah website yang dibuat sudah mobile friendly?',
    answer: 'Ya, semua website yang kami buat sudah fully responsive dan mobile friendly. Website akan tampil sempurna di semua perangkat (desktop, tablet, dan smartphone).',
  },
  {
    question: 'Apakah saya bisa mengedit konten sendiri?',
    answer: 'Tentu. Kami akan memberikan akses ke dashboard admin yang mudah digunakan. Anda bisa mengedit teks, gambar, dan konten lainnya tanpa perlu skill coding.',
  },
  {
    question: 'Apakah harga sudah termasuk hosting dan domain?',
    answer: 'Harga dasar adalah untuk pembuatan website saja. Namun kami memiliki paket lengkap yang sudah termasuk hosting premium dan domain untuk 1 tahun pertama.',
  },
  {
    question: 'Apakah ada garansi setelah website selesai?',
    answer: 'Ya, kami memberikan garansi free maintenance selama 1 bulan setelah launching. Untuk kelanjutan, kami menyediakan paket maintenance bulanan.',
  },
  {
    question: 'Apakah website yang dibuat SEO friendly?',
    answer: '100% SEO friendly! Website dibangun dengan struktur kode yang optimal untuk SEO, kecepatan loading tinggi, dan sudah terintegrasi dengan meta tags.',
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
      </Container>
    </section>
  )
}