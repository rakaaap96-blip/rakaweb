import { ReactNode, ElementType } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  as?: ElementType
  ariaLabel?: string
  onClick?: () => void
}

export default function Card({
  children,
  className,
  hover = false,
  padding = 'md',
  as: Component = 'div',
  ariaLabel,
  onClick,
}: CardProps) {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const isInteractive = hover || onClick

  return (
    <Component
      className={twMerge(
        clsx(
          'bg-white rounded-xl shadow-md transition-all duration-200',
          paddingStyles[padding],
          hover && 'hover:shadow-xl hover:-translate-y-1 cursor-pointer',
          isInteractive && 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
          className
        )
      )}
      aria-label={ariaLabel}
      onClick={onClick}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </Component>
  )
}