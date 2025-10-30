import { Button } from '../components/Button'
import { Section } from '../components/Section'

export function NotFound() {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="h1 mb-4">404</h1>
        <h2 className="h2 mb-6">Page Not Found</h2>
        <p className="lead mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button variant="primary" href="#/">
          Go Home
        </Button>
      </div>
    </Section>
  )
}

