'use client'

import dynamic from 'next/dynamic'

// Lazy load agar tidak mempengaruhi performa awal
const ScrollToTop = dynamic(() => import('@/components/blog/ScrollToTop'), {
  ssr: false,
})

export default function ScrollToTopWrapper() {
  return <ScrollToTop />
}