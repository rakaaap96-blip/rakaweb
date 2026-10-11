'use client'

import { useEffect, useState, useCallback } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    const evaluate = () => {
      setVisible(window.scrollY > 600)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(evaluate)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    const rafId = requestAnimationFrame(evaluate)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <button
      type="button"
      data-visible={visible}
      onClick={scrollToTop}
      className="scroll-to-top fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] sm:bottom-[max(2rem,env(safe-area-inset-bottom))] sm:right-[max(2rem,env(safe-area-inset-right))] bg-yellow-300 text-black p-3 rounded-none border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 active:bg-primary-100 transition-all z-9999 cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white"
      style={{ minHeight: '48px', minWidth: '48px' }}
      aria-label="Kembali ke atas halaman"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={22} strokeWidth={3} aria-hidden="true" />
    </button>
  )
}