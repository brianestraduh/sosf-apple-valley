import { useEffect } from 'react'
import themeData from '../../content/theme.json'

export function useTheme() {
  useEffect(() => {
    // Apply theme colors to CSS variables
    const root = document.documentElement
    Object.entries(themeData.brand).forEach(([key, value]) => {
      root.style.setProperty(`--brand-${key}`, value)
    })
  }, [])

  return themeData
}

