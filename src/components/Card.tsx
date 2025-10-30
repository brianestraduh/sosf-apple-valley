import type { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  title?: string
  children: ReactNode
  imageSrc?: string
  imageAlt?: string
  className?: string
}

export function Card({ title, children, imageSrc, imageAlt, className }: CardProps) {
  return (
    <div className={clsx('card', className)}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || title || ''}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
      )}
      {title && <h3 className="h2 text-xl mb-3">{title}</h3>}
      <div className="text-brand-ink/80">{children}</div>
    </div>
  )
}

