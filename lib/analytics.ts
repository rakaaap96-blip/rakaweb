// lib/analytics.ts
type EventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(action: string, params: EventParams = {}) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', action, params)
    }
  } catch {
    // Analitik tidak boleh mengganggu UX
  }
}
