// Helper functions for loading content

export async function loadMDXPage(pageName: string) {
  try {
    const module = await import(`../../content/pages/${pageName}.mdx`)
    return module.default
  } catch (error) {
    console.error(`Failed to load page: ${pageName}`, error)
    return null
  }
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

