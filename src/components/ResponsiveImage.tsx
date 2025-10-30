interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
}

export function ResponsiveImage({ src, alt, className }: ResponsiveImageProps) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`}
      alt={alt}
      className={className || 'w-full h-auto rounded-2xl'}
      loading="lazy"
    />
  )
}

