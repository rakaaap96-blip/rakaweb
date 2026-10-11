'use client'

import { ArrowDownRight, Info, Sparkles, CheckCircle, Shield, TrendingUp } from 'lucide-react'
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si'

export interface FeatureCardConfig {
  id: string
  number?: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  iconColor: string
  title: string
  description: string
  descClass: string
  spanClass: string
  cornerIcon?: React.ComponentType<{ size?: number; className?: string }>
  badge?: string
  techRow?: boolean
  layout: 'vertical' | 'horizontal'
  gapClass: string
  titleGap: string
}

export const featureCards: FeatureCardConfig[] = [
  {
    id: 'tech-stack',
    number: '01',
    icon: Sparkles,
    iconColor: 'text-primary-600',
    title: 'Sistem Tech Stack Modern',
    description:
      'Kami membangun ekosistem digital performa tinggi menggunakan framework mutakhir untuk kecepatan maksimal.',
    descClass: 'text-navy-600',
    spanClass: 'md:col-span-2',
    techRow: true,
    layout: 'vertical',
    gapClass: 'mb-4',
    titleGap: 'mb-2',
  },
  {
    id: 'responsif',
    icon: CheckCircle,
    iconColor: 'text-green-600',
    title: 'Cepat & Responsif',
    description:
      'Website otomatis optimal diakses sempurna via smartphone, tablet, maupun desktop komputer tanpa kendala layout.',
    descClass: 'text-navy-700',
    spanClass: '',
    cornerIcon: ArrowDownRight,
    layout: 'vertical',
    gapClass: 'mb-6',
    titleGap: 'mb-1',
  },
  {
    id: 'maintenance',
    icon: Shield,
    iconColor: 'text-blue-600',
    title: 'Full Maintenance',
    description:
      'Jaminan garansi penuh pasca-pembuatan sistem. Kami mengawal keamanan server dan pembaruan berkala website Anda.',
    descClass: 'text-navy-600',
    spanClass: '',
    cornerIcon: ArrowDownRight,
    layout: 'vertical',
    gapClass: 'mb-6',
    titleGap: 'mb-1',
  },
  {
    id: 'seo',
    icon: TrendingUp,
    iconColor: 'text-purple-600',
    title: 'Optimasi SEO Google',
    description:
      'Struktur kode bersih yang dirancang khusus ramah algoritma mesin pencari demi mendorong peringkat bisnis Anda ke halaman utama Google.',
    descClass: 'text-navy-700',
    spanClass: 'md:col-span-4',
    badge: 'Target Pasar Tepat',
    layout: 'horizontal',
    gapClass: '',
    titleGap: '',
  },
]

interface FeatureCardProps {
  card: FeatureCardConfig
  onSelect: (id: string) => void
}

export default function FeatureCard({ card, onSelect }: FeatureCardProps) {
  const {
    id,
    number,
    icon: Icon,
    iconColor,
    title,
    description,
    descClass,
    spanClass,
    cornerIcon: CornerIcon,
    badge,
    techRow,
    layout,
    gapClass,
    titleGap,
  } = card

  const clickProps = {
    role: 'button' as const,
    tabIndex: 0,
    onClick: () => onSelect(id),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onSelect(id)
      }
    },
  }

  const baseClass = `p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${spanClass} group cursor-pointer transition-all duration-150 hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2`

  const inner = (
    <>
      {layout === 'vertical' ? (
        <>
          <div className={`flex justify-between items-start ${gapClass}`}>
            <div
              className={`w-10 h-10 bg-primary-100 border-2 border-black flex items-center justify-center ${iconColor} group-hover:scale-110 transition-transform duration-200`}
              aria-hidden="true"
            >
              <Icon size={20} />
            </div>
            {number ? (
              <div
                className="w-8 h-8 bg-black text-white border-2 border-black flex items-center justify-center font-black text-sm group-hover:bg-yellow-300 group-hover:text-black transition-colors"
                aria-label={`Fitur nomor ${number}`}
              >
                {number}
              </div>
            ) : CornerIcon ? (
              <CornerIcon
                size={20}
                className="text-navy-500 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
                aria-hidden="true"
              />
            ) : null}
          </div>
          <div>
            <h2
              className={`font-sans font-black text-lg uppercase tracking-tight ${titleGap} group-hover:text-primary-600 transition-colors`}
            >
              {title}
            </h2>
            <p className={`font-sans text-xs sm:text-sm font-bold ${descClass} leading-snug`}>{description}</p>
          </div>
          {techRow && (
            <div
              className="flex gap-3 pt-4 mt-4 border-t-2 border-black"
              role="group"
              aria-label="Teknologi yang digunakan: Next.js, React, TypeScript, Tailwind CSS"
            >
              <SiNextdotjs size={24} className="text-black group-hover:scale-110 transition-transform" aria-hidden="true" />
              <SiReact size={24} className="text-[#61DAFB] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <SiTypescript size={24} className="text-[#3178C6] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <SiTailwindcss size={24} className="text-[#38BDF8] group-hover:scale-110 transition-transform" aria-hidden="true" />
            </div>
          )}
          <div className="mt-3 text-xs font-mono font-bold text-navy-500 flex items-center gap-1 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100 transition-opacity">
            <Info size={12} aria-hidden="true" /> Klik untuk detail
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 bg-primary-100 border-2 border-black flex items-center justify-center ${iconColor} shrink-0 group-hover:scale-110 transition-transform`}
              aria-hidden="true"
            >
              <Icon size={24} />
            </div>
            <div>
              <h2
                className="font-sans font-black text-lg uppercase tracking-tight group-hover:text-primary-600 transition-colors"
              >
                {title}
              </h2>
              <p className={`font-sans text-xs sm:text-sm font-bold ${descClass} leading-snug mt-0.5`}>{description}</p>
            </div>
          </div>
          {badge && (
            <div
              className="px-3 py-1.5 bg-black text-white text-xs font-mono font-black uppercase tracking-wider shrink-0 border border-black max-sm:w-full text-center group-hover:bg-yellow-300 group-hover:text-black transition-colors"
              aria-label="Keunggulan: Target Pasar Tepat"
            >
              {badge}
            </div>
          )}
          <div className="sm:hidden text-xs font-mono font-bold text-navy-500 flex items-center gap-1">
            <Info size={12} aria-hidden="true" /> Klik untuk detail
          </div>
        </>
      )}
    </>
  )

  return (
    <div
      className={`${baseClass} ${
        layout === 'horizontal' ? 'flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4' : 'flex flex-col justify-between'
      }`}
      {...clickProps}
    >
      {inner}
    </div>
  )
}
