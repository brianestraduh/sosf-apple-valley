import type { ReactNode } from 'react'
import clsx from 'clsx'

interface SectionProps {
  children: ReactNode
  className?: string
  container?: boolean
}

export function Section({ children, className, container = true }: SectionProps) {
  return (
    <section className={clsx('section', className)}>
      {container ? <div className="container">{children}</div> : children}
    </section>
  )
}

