import { ReactNode, ElementType } from 'react'
import clsx from 'clsx'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'dark'
  as?: ElementType // Memungkinkan penggunaan 'article', 'main', 'div', dll.
  ariaLabel?: string
  ariaLabelledby?: string
}

export default function Section({
  children,
  className,
  id,
  background = 'white',
  as: Component = 'section',
  ariaLabel,
  ariaLabelledby,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-dark-800 text-white',
  }

  return (
    <Component
      id={id}
      className={clsx('py-16 md:py-24', backgrounds[background], className)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      <Container>{children}</Container>
    </Component>
  )
}