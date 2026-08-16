'use client'

import { ReactNode, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  badge?: string
  children: ReactNode
  footer?: ReactNode
}

export default function Modal({ open, onClose, title, badge, children, footer }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (!open) return

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const dialog = dialogRef.current
    if (!dialog) return

    const focusable = dialog.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleTab)
      document.body.style.overflow = ''
    }
  }, [open, handleEscape])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 cursor-pointer appearance-none border-0"
            aria-label="Tutup dialog"
            tabIndex={-1}
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="relative z-10 w-full max-w-lg bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex flex-col gap-2">
                  {badge && (
                    <span className="inline-block w-fit px-2 py-0.5 bg-primary-500 text-white border-2 border-black font-mono font-black text-[10px] uppercase tracking-wider">
                      {badge}
                    </span>
                  )}
                  <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight text-black leading-none">
                    {title}
                  </h3>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  className="shrink-0 w-10 h-10 flex items-center justify-center bg-black text-white border-2 border-black hover:bg-yellow-300 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
                  aria-label="Tutup dialog"
                >
                  <X size={18} strokeWidth={3} aria-hidden="true" />
                </button>
              </div>

              <div className="space-y-4">{children}</div>

              {footer && (
                <div className="mt-8 pt-6 border-t-4 border-black flex flex-col sm:flex-row gap-3">
                  {footer}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
