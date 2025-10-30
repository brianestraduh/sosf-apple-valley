import type { ReactNode } from 'react'
import { Button } from './Button'

interface HeroProps {
  title: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  imageSrc?: string
  imageAlt?: string
  children?: ReactNode
}

export function Hero({ 
  title, 
  subtitle, 
  ctaLabel, 
  ctaHref, 
  imageSrc, 
  imageAlt,
  children 
}: HeroProps) {
  return (
    <section className="relative">
      {/* Background Image */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}${imageSrc.replace(/^\//, '')}`}
              alt={imageAlt || ''}
              className="w-full h-full object-contain object-center opacity-20"
              style={{ 
                minHeight: '120%', 
                minWidth: '120%',
                transform: 'scale(1.1)'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/50 via-brand-bg/80 to-brand-bg" />
        </div>
      )}

      {/* Content */}
      <div className="container relative z-10">
        <div className="py-20 sm:py-28 lg:py-36 max-w-4xl">
          <h1 className="h1 mb-6">{title}</h1>
          {subtitle && <p className="lead mb-8 max-w-2xl">{subtitle}</p>}
          {ctaLabel && ctaHref && (
            <Button variant="primary" href={ctaHref}>
              {ctaLabel}
            </Button>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

