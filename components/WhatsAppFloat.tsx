'use client'

import { MessageCircle } from 'lucide-react'

const WA_LINK =
  'https://wa.me/6287823268333?text=Halo%20RakaWeb%2C%20saya%20tertarik%20untuk%20konsultasi%20gratis.'

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp RakaWeb"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[90] flex items-center gap-2 bg-green-500 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-3 font-sans font-black uppercase tracking-tight text-xs sm:text-sm transition-all hover:bg-green-400 hover:text-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    >
      <MessageCircle size={20} strokeWidth={3} aria-hidden="true" />
      <span className="hidden sm:inline">Chat Kami</span>
    </a>
  )
}
