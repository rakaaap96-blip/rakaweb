'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

interface BlogLayoutProps {
  children: ReactNode
  title: string
  description: string
}

export default function BlogLayout({ children, title, description }: BlogLayoutProps) {
  return (
    <>
      {/* HEADER SECTION */}
      <section
        className="pt-32 pb-16 bg-primary-500 text-navy-900 border-b-8 border-black px-4"
        aria-labelledby="blog-header-title"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <div>
              <h1
                id="blog-header-title"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none bg-black p-5 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1"
              >
                {title}
              </h1>
            </div>

            <p className="font-sans text-sm sm:text-base font-bold text-white bg-black/20 p-3 border-2 border-black max-w-xl mx-auto leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {description}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* CONTENT SECTION: Area Grid Kartu Blog */}
      <section
        className="py-16 bg-white"
        aria-label="Daftar artikel blog"
      >
        <Container>
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </Container>
      </section>
    </>
  )
}