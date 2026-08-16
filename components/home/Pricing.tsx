'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react'
import Container from '@/components/ui/Container'
import PricingTable from '@/components/services/PricingTable'
import { servicesData } from '@/data/services'

const plans = servicesData.umkm.pricing.map((plan) => ({
  name: plan.name,
  price: plan.price,
  features: plan.features,
  periode:
    plan.name === 'Professional'
      ? 'Domain & Hosting Gratis 1 Tahun'
      : 'Mulai dengan DP 50%',
  recommended: !!plan.popular,
}))

export default function Pricing() {
  return (
    <section
      className="py-20 bg-white border-b-8 border-black"
      aria-labelledby="pricing-heading"
    >
      <Container>
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
            Harga Transparan
          </div>
          <h2
            id="pricing-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mt-4"
          >
            Investasi untuk <span className="text-primary-500 block sm:inline">Website Anda</span>
          </h2>
          <p className="font-sans text-base font-bold text-navy-700 max-w-2xl mx-auto leading-relaxed">
            Harga jelas tanpa biaya tersembunyi. Semua paket sudah termasuk desain custom,
            mobile responsive, dan SEO-friendly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PricingTable plans={plans} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 space-y-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-yellow-300 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-5 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <span className="inline-flex items-center gap-2 font-sans font-black text-xs sm:text-sm uppercase tracking-wide text-black">
                <ShieldCheck size={18} strokeWidth={2.5} aria-hidden="true" /> Garansi revisi desain sampai puas
              </span>
              <span className="inline-flex items-center gap-2 font-sans font-black text-xs sm:text-sm uppercase tracking-wide text-black">
                <CheckCircle size={18} strokeWidth={2.5} aria-hidden="true" /> Free maintenance 1 bulan
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/jasa-pembuatan-website-umkm"
              className="inline-flex items-center gap-2 border-2 border-black bg-white px-5 py-2.5 font-sans font-black text-xs uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-primary-500 hover:text-white hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Lihat Detail Semua Paket <ArrowRight size={14} strokeWidth={3} aria-hidden="true" />
            </Link>
            <p className="font-sans font-bold text-sm text-navy-600">
              Butuh paket company profile atau sekolah?{' '}
              <Link href="/kontak" className="underline decoration-2 underline-offset-2 font-black text-black hover:text-primary-500">
                Konsultasikan kebutuhan Anda
              </Link>
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
