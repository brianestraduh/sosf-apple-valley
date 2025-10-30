import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html','./src/**/*.{ts,tsx}','./content/**/*.{md,mdx,json}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif','system-ui','Inter','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','sans-serif'],
        display: ['Georgia','Times New Roman','serif']
      },
      colors: {
        brand: {
          bg:   'var(--brand-bg)',
          ink:  'var(--brand-ink)',
          sand: 'var(--brand-sand)',
          red:  'var(--brand-red)',
          mute: 'var(--brand-mute)'
        }
      }
    }
  },
  plugins: []
} satisfies Config

