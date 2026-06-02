'use client'

import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface ServiceFAQProps {
  faqs: FAQItem[]
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const headingId = useId()

  if (!faqs.length) return null

  return (
    <div
      className="max-w-3xl mx-auto space-y-4"
      aria-labelledby={headingId}
      role="region"
    >
      {/* Heading tersembunyi untuk aksesibilitas region */}
      <h2 id={headingId} className="sr-only">
        Pertanyaan yang Sering Diajukan seputar layanan
      </h2>

      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx
        const buttonId = `faq-button-${idx}`
        const panelId = `faq-panel-${idx}`

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <button
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex justify-between items-center p-5 text-left font-black text-navy-900 text-base bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`shrink-0 ml-4 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                strokeWidth={3}
                size={20}
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
                  transition={{ duration: 0.3 }}
                  className="border-t-4 border-black bg-primary-50"
                >
                  <p className="p-5 font-sans font-bold text-navy-800 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}