import { Section } from '../components/Section'
import { Button } from '../components/Button'

export function DonationCancelled() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        {/* Info Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-neutral-100 mb-6">
            <svg 
              className="w-12 h-12 text-neutral-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h1 className="h1 mb-6">Donation Cancelled</h1>
        
        <p className="lead mb-6">
          Your donation was not completed. No charges have been made to your account.
        </p>

        <div className="bg-brand-sand/10 rounded-2xl p-8 mb-8 text-left">
          <h2 className="h3 mb-4">We understand</h2>
          <p className="text-lg mb-4">
            Every contribution helps, but we know timing isn't always right. There are many 
            other ways you can support our mission:
          </p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-brand-red font-bold mr-3">•</span>
              <span>Volunteer your time at a local gym partner</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-red font-bold mr-3">•</span>
              <span>Share our mission with friends and family</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-red font-bold mr-3">•</span>
              <span>Follow us on social media to stay connected</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-red font-bold mr-3">•</span>
              <span>Come back when you're ready to donate</span>
            </li>
          </ul>
        </div>

        <p className="text-xl text-neutral-700 mb-8">
          Together, we can empower the next generation through combat sports.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="#/donate">
            Try Again
          </Button>
          <Button variant="outline" href="#/">
            Return Home
          </Button>
        </div>

        {/* Additional Options */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-lg font-semibold mb-4">Explore Other Ways to Help</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" href="#/volunteers">
              Volunteer With Us
            </Button>
            <Button variant="outline" href="#/about">
              Learn About Our Impact
            </Button>
            <Button variant="outline" href="#/programs">
              View Our Programs
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

