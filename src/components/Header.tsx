import { useState } from 'react'
import siteData from '../../content/site.json'
import { Button } from './Button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-mute">
      <nav className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#/" className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}images/logo.jpg`} alt={siteData.shortName} className="h-10 w-10 rounded-full" />
            <div className="flex flex-col">
              <span className="font-display text-lg text-brand-sand leading-none">{siteData.shortName}</span>
              <span className="text-xs text-brand-ink/60 leading-none mt-0.5 hidden sm:block">
                {siteData.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {siteData.nav.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                className="text-brand-ink hover:text-brand-sand transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" href="#/donate">
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-brand-ink"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-mute">
            <div className="flex flex-col gap-4">
              {siteData.nav.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  className="text-brand-ink hover:text-brand-sand transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="primary" href="#/donate" className="w-full">
                Donate
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

