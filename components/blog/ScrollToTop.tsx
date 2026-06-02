'use client'

import { useEffect, useState, useCallback } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = useCallback(() => {
    setVisible(window.scrollY > 600)
  }, [])

  useEffect(() => {
    // Gunakan requestAnimationFrame untuk performa scroll yang lebih halus
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    toggleVisibility() // Cek posisi awal saat mount

    return () => window.removeEventListener('scroll', onScroll)
  }, [toggleVisibility])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-yellow-300 text-black p-3 rounded-none border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 active:bg-primary-100 transition-all z-9999 cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white"
          style={{ minHeight: '48px', minWidth: '48px' }}
          aria-label="Kembali ke atas halaman"
          role="button"
        >
          <ArrowUp size={22} strokeWidth={3} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}