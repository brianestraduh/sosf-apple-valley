import { Section } from '../components/Section'
import { Button } from '../components/Button'

export function ThankYou() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-6">
            <svg 
              className="w-12 h-12 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
        </div>

        {/* Thank You Message */}
        <h1 className="h1 mb-6">Thank You for Your Donation!</h1>
        
        <p className="lead mb-6">
          Your generous contribution will directly support at-risk youth in gaining access to 
          combat sports training and mentorship programs.
        </p>

        <div className="bg-brand-sand/10 rounded-2xl p-8 mb-8 text-left">
          <h2 className="h3 mb-4">What Happens Next?</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-brand-red font-bold mr-3">•</span>
              <span>You will receive a confirmation email with your donation receipt</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-red font-bold mr-3">•</span>
              <span>Your contribution will be allocated to our youth programs immediately</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-red font-bold mr-3">•</span>
              <span>We'll keep you updated on the impact you're making</span>
            </li>
          </ul>
        </div>

        <p className="text-xl text-neutral-700 mb-8">
          Together, we're empowering the next generation through combat sports. 
          Your support makes a real difference in these young lives.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="#/">
            Return Home
          </Button>
          <Button variant="outline" href="#/about">
            Learn More About Our Impact
          </Button>
        </div>

        {/* Social Sharing */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-lg font-semibold mb-4">Help us spread the word!</p>
          <p className="text-neutral-600 mb-6">
            Follow us on Instagram to stay connected and share our mission with your friends and family
          </p>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              href="https://www.instagram.com/sos_fdn?igsh=NTc4MTIwNjQ2YQ=="
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow Us on Instagram
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

