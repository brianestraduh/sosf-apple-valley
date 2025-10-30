import type { ReactNode } from 'react'
import { Section } from './Section'

interface MDXPageProps {
  children: ReactNode
}

export function MDXPage({ children }: MDXPageProps) {
  return (
    <Section>
      <div className="max-w-4xl mx-auto prose prose-invert prose-headings:text-brand-sand prose-a:text-brand-red prose-strong:text-brand-sand">
        {children}
      </div>
    </Section>
  )
}

