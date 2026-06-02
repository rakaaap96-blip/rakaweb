// app/kontak/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

export default function KontakPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Nama tidak boleh kosong'
        if (value.trim().length < 2) return 'Nama minimal 2 karakter'
        return ''
      case 'email':
        if (!value.trim()) return 'Email tidak boleh kosong'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Format email tidak valid'
        return ''
      case 'message':
        if (!value.trim()) return 'Pesan tidak boleh kosong'
        if (value.trim().length < 10) return 'Pesan minimal 10 karakter'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    }
    setErrors(newErrors)
    if (Object.values(newErrors).some(err => err !== '')) return

    setIsSubmitting(true)
    setSubmitError('')
    try {
      const response = await fetch('/api/kontak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.error || 'Gagal mengirim pesan')
      }
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via WhatsApp.')
      setTimeout(() => setSubmitError(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: MapPin, title: 'Alamat', detail: 'Bogor, Jawa Barat, Indonesia', link: null, a11yLabel: 'Alamat RakaWeb' },
    { icon: FaWhatsapp, title: 'WhatsApp', detail: '+62 878-2326-8333', link: 'https://wa.me/6287823268333', a11yLabel: 'WhatsApp RakaWeb' },
    { icon: Mail, title: 'Email', detail: 'rakaaa.p96@gmail.com', link: 'mailto:rakaaa.p96@gmail.com', a11yLabel: 'Email RakaWeb' },
    { icon: Clock, title: 'Jam Kerja', detail: 'Senin - Jumat, 09:00 - 18:00 WIB', link: null, a11yLabel: 'Jam kerja RakaWeb' },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Hubungi RakaWeb',
    description: 'Konsultasikan kebutuhan website Anda secara gratis melalui formulir, WhatsApp, email, atau telepon.',
    url: 'https://rakaweb.vercel.app/kontak',
    mainEntity: {
      '@type': 'Organization',
      name: 'RakaWeb',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+6287823268333',
          contactType: 'customer service',
          availableLanguage: ['Indonesian', 'English'],
        },
        {
          '@type': 'ContactPoint',
          email: 'rakaaa.p96@gmail.com',
          contactType: 'sales',
        },
      ],
    },
  }

  return (
    <>
      <section className="pt-24 pb-16 bg-primary-500 border-b-8 border-black" aria-labelledby="kontak-heading">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-black text-white border-2 border-black text-sm font-mono font-black uppercase tracking-wider transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" aria-hidden="true">
              Kontak
            </div>
            <h1 id="kontak-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
              Hubungi <span className="text-yellow-300">Kami</span>
            </h1>
            <p className="font-sans text-base md:text-lg font-bold text-white bg-black/20 p-3 border-2 border-black max-w-2xl mx-auto leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Konsultasikan kebutuhan website Anda secara gratis. Tim kami siap membantu 24/7.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white border-b-8 border-black">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="font-sans font-black text-2xl uppercase tracking-tighter mb-6 flex items-center gap-2">
                <span aria-hidden="true">📞</span> Informasi Kontak
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className="w-10 h-10 bg-primary-100 border-2 border-black flex items-center justify-center text-primary-500" aria-hidden="true">
                      <item.icon size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-sans font-black text-sm uppercase tracking-tight">{item.title}</p>
                      {item.link ? (
                        <a href={item.link} className="font-sans font-bold text-navy-700 hover:text-black hover:underline text-sm" aria-label={item.a11yLabel}>
                          {item.detail}
                        </a>
                      ) : (
                        <p className="font-sans font-bold text-navy-700 text-sm" aria-label={item.a11yLabel}>{item.detail}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-primary-50 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-sans font-bold text-sm text-black flex items-center gap-2">
                  <span aria-hidden="true">💡</span> Butuh respon cepat? Hubungi kami langsung via WhatsApp.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <form onSubmit={handleSubmit} className="bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-6 space-y-5 transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter">Kirim Pesan</h3>

                <div>
                  <label htmlFor="name" className="font-sans font-bold text-sm block mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-3 py-2 border-2 border-black font-sans text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors ${
                      errors.name ? 'bg-red-50 border-red-500' : 'bg-white'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-600 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} aria-hidden="true" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="font-sans font-bold text-sm block mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-3 py-2 border-2 border-black font-sans text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors ${
                      errors.email ? 'bg-red-50 border-red-500' : 'bg-white'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-600 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} aria-hidden="true" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="font-sans font-bold text-sm block mb-1">
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-3 py-2 border-2 border-black font-sans text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors resize-none ${
                      errors.message ? 'bg-red-50 border-red-500' : 'bg-white'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-600 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} aria-hidden="true" /> {errors.message}
                    </p>
                  )}
                  <p className="text-right text-xs font-mono text-navy-600 mt-1">{formData.message.length} karakter (min 10)</p>
                </div>

                <Button
                  type="submit"
                  fullWidth
                  disabled={isSubmitting}
                  icon={isSubmitting ? undefined : <Send size={16} />}
                  className="bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:text-black transition-all font-black"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>

                {submitted && (
                  <div className="flex items-center gap-2 p-2 bg-green-100 border-2 border-green-600 text-green-800 text-sm font-bold" role="status">
                    <CheckCircle size={16} aria-hidden="true" /> Pesan terkirim! Kami akan membalas segera.
                  </div>
                )}
                {submitError && (
                  <div className="flex items-center gap-2 p-2 bg-red-100 border-2 border-red-600 text-red-800 text-sm font-bold" role="alert">
                    <AlertCircle size={16} aria-hidden="true" /> {submitError}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}