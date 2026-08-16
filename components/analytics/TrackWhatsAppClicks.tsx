'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

const WA_NUMBER = '6287823268333'

export default function TrackWhatsAppClicks() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest?.('a[href*="wa.me"]') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href') || ''
      if (!href.includes(WA_NUMBER)) return
      trackEvent('whatsapp_click', {
        location: document.title,
        href,
      })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
