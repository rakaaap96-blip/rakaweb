'use client'

import { useEffect, useState, useCallback } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const { scrollHeight, clientHeight } = document.documentElement
    const totalHeight = scrollHeight - clientHeight
    const scrollPosition = window.scrollY
    if (totalHeight > 0) {
      setProgress((scrollPosition / totalHeight) * 100)
    } else {
      setProgress(0)
    }
  }, [])

  useEffect(() => {
    // Gunakan requestAnimationFrame untuk meningkatkan performa
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Hitung progres awal saat komponen mount
    handleScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [handleScroll])

  return (
    <div
      className="fixed top-0 left-0 w-full h-2 bg-white border-b-2 border-black z-9999"
      aria-hidden="true"
      role="presentation"
    >
      <div
        className="h-full bg-yellow-300 border-r-2 border-black transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </div>
  )
}