import { ReactNode, ElementType } from 'react'
import clsx from 'clsx'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType // Menerima div, section, article, main, dll.
  ariaLabel?: string
  id?: string
}

export default function Container({
  children,
  className,
  as: Component = 'div',
  ariaLabel,
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={clsx('container-custom', className)}
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  )
}