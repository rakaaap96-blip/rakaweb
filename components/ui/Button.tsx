'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  ariaLabel?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  fullWidth = false,
  ariaLabel,
}: ButtonProps) {
  // Base styles: border hitam 4px, tanpa rounded, efek translate saat active
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-sans font-black uppercase tracking-tight text-black border-4 border-black rounded-none transition-all duration-150 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-x-0 disabled:active:translate-y-0'

  // Neubrutalism variants
  const variants = {
    primary:
      'bg-primary-500 hover:bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    secondary:
      'bg-white hover:bg-stone-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    outline:
      'bg-transparent border-4 border-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    ghost:
      'border-transparent shadow-none bg-transparent hover:bg-stone-100 active:translate-x-0 active:translate-y-0',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs sm:text-sm',
    md: 'px-6 py-3 text-sm sm:text-base',
    lg: 'px-8 py-4 text-base sm:text-lg',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  const mergedClassName = twMerge(
    clsx(baseStyles, variants[variant], sizes[size], widthClass, className)
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="truncate">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  )

  // Jika href dimulai dengan http/https atau mailto:, gunakan <a> dengan target="_blank" dan rel="noopener"
  const isExternal = href?.startsWith('http') || href?.startsWith('mailto:')

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={mergedClassName}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={mergedClassName} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={mergedClassName}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}