'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  gradient: string
  index?: number
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  gradient,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
      role="article"
      aria-labelledby={`service-title-${index}`}
    >
      <div className={`p-6 bg-linear-to-r ${gradient}`} aria-hidden="true">
        <Icon size={40} className="text-white" aria-hidden="true" />
      </div>
      <div className="p-6">
        <h3 id={`service-title-${index}`} className="text-xl font-bold mb-2">
          {title}
        </h3>
        <p className="text-navy-600 mb-4 leading-relaxed">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary-500 font-semibold group-hover:gap-3 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded"
          aria-label={`Pelajari lebih lanjut tentang ${title}`}
        >
          <span>Selengkapnya</span>
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  )
}