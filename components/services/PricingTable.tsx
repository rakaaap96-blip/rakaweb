'use client'

import { useId } from 'react'
import Button from '@/components/ui/Button'
import { CheckCircle } from 'lucide-react'

interface PricingPlan {
  name: string
  price: string
  features: string[]
  periode?: string
  recommended?: boolean
}

interface PricingTableProps {
  plans: PricingPlan[]
}

export default function PricingTable({ plans }: PricingTableProps) {
  const headingId = useId()

  return (
    <div
      className="grid md:grid-cols-3 gap-8"
      role="region"
      aria-labelledby={headingId}
    >
      {plans.map((plan, idx) => {
        const cardId = `pricing-card-${idx}`
        const headingCardId = `pricing-card-heading-${idx}`

        return (
          <div
            key={idx}
            className={`relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col ${
              plan.recommended ? 'border-yellow-300' : ''
            }`}
            role="article"
            aria-labelledby={headingCardId}
            id={cardId}
          >
            {plan.recommended && (
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-300 text-black border-2 border-black px-3 py-0.5 font-mono font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10"
                aria-label="Rekomendasi terbaik"
              >
                Paling Laris
              </div>
            )}
            <div className="p-6 border-b-4 border-black bg-primary-100">
              <h3 id={headingCardId} className="font-sans font-black text-2xl uppercase tracking-tight text-black">
                {plan.name}
              </h3>
              <div className="font-display text-4xl font-black text-primary-500 mt-2" aria-label={`Harga ${plan.price}`}>
                {plan.price}
              </div>
              <p className="font-mono text-xs font-bold text-navy-600 mt-1">
                {plan.periode || 'Uang Muka 50%'}
              </p>
            </div>
            <div className="p-6 grow">
              <ul className="space-y-3" role="list">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2" role="listitem">
                    <CheckCircle
                      size={16}
                      strokeWidth={2}
                      className="text-green-500 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-sans font-bold text-sm text-navy-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 border-t-4 border-black">
              <Button
                href="/kontak"
                fullWidth
                className="bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:text-black hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white"
                aria-label={`Pilih paket ${plan.name}`}
              >
                Pilih Paket
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}