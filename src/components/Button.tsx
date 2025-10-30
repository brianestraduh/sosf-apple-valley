import type { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className,
  type = 'button' 
}: ButtonProps) {
  const classes = clsx(
    'btn',
    variant === 'primary' && 'btn-primary',
    variant === 'outline' && 'btn-outline',
    className
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

