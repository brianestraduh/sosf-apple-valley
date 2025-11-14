import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Section } from './components/Section'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ThankYou } from './pages/ThankYou'
import { DonationCancelled } from './pages/DonationCancelled'
import { PayPalButton } from './components/PayPalButton'
import { useTheme } from './hooks/useTheme'

// MDX Page Wrapper
function MDXPageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Section>
      <div className="max-w-4xl mx-auto content-page">
        {children}
      </div>
    </Section>
  )
}

function App() {
  useTheme()
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/')

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    // For now, we'll render simple placeholder pages for MDX content
    // In a production app, you'd use proper MDX rendering
    switch (currentPath) {
      case '/':
        return <Home />
      case '/about':
        return (
          <MDXPageWrapper>
            <h1>About SOSF</h1>
            <h2>Our Story</h2>
            <p>
              Submissions of Success Foundation (SOSF) was founded with a simple but powerful
              vision: to provide at-risk youth with access to combat sports training and mentorship
              that can transform their lives.
            </p>
            <h2>Mission Statement</h2>
            <p>
              We believe that every young person deserves a coach in their corner—someone who
              believes in them and helps them develop the discipline, confidence, and resilience
              needed to succeed in life.
            </p>
            <h2>What We Do</h2>
            <h3>Training Access</h3>
            <p>
              We partner with local gyms to provide subsidized or free training in boxing,
              wrestling, BJJ, and MMA to youth who might not otherwise have access.
            </p>
            <h3>Mentorship</h3>
            <p>
              Our volunteer mentors work one-on-one with participants, providing guidance both
              inside and outside the gym.
            </p>
            <h3>Community Building</h3>
            <p>
              We create a supportive community where youth can develop lasting friendships and
              positive role models.
            </p>
          </MDXPageWrapper>
        )
      case '/programs':
        return (
          <MDXPageWrapper>
            <h1>Our Programs</h1>
            <p>
              SOSF offers several programs designed to meet youth where they are and support their
              growth through combat sports.
            </p>
            <h2>Youth Training Scholarships</h2>
            <p>
              Our flagship program provides full or partial scholarships for training at partner
              gyms. Youth can choose from:
            </p>
            <ul>
              <li>
                <strong>Boxing:</strong> Learn footwork, combinations, and ring discipline
              </li>
              <li>
                <strong>Wrestling:</strong> Build strength, technique, and competitive spirit
              </li>
              <li>
                <strong>Brazilian Jiu-Jitsu:</strong> Develop problem-solving skills and technical
                mastery
              </li>
              <li>
                <strong>Mixed Martial Arts:</strong> Combine multiple disciplines for well-rounded
                training
              </li>
            </ul>
          </MDXPageWrapper>
        )
      case '/how-it-works':
        return (
          <MDXPageWrapper>
            <h1>How It Works</h1>
            <p>
              Getting involved with SOSF is straightforward, whether you're a young person seeking
              training, a gym looking to partner, or someone wanting to volunteer.
            </p>
            <h2>For Youth</h2>
            <h3>Step 1: Apply</h3>
            <p>
              Complete our simple online application or get a referral from a school counselor,
              social worker, or community organization.
            </p>
            <h3>Step 2: Interview</h3>
            <p>
              Have a brief conversation with our team to discuss your interests and goals.
            </p>
            <h3>Step 3: Placement</h3>
            <p>
              We match you with a partner gym based on location, sport preference, and schedule.
            </p>
          </MDXPageWrapper>
        )
      case '/donate':
        return (
          <MDXPageWrapper>
            <h1>Support Our Mission</h1>
            <p>
              Your donation directly impacts the lives of at-risk youth by providing them with
              training, mentorship, and opportunity.
            </p>
            
            <PayPalButton />
            
            <h2>Where Your Donation Goes</h2>
            <div className="card my-6">
              <ul className="space-y-4">
                <li>
                  <strong>$50</strong> - Provides one month of training for one youth
                </li>
                <li>
                  <strong>$150</strong> - Covers competition registration and basic equipment
                </li>
                <li>
                  <strong>$500</strong> - Sponsors a complete training scholarship for three months
                </li>
                <li>
                  <strong>$1,000</strong> - Supports a full mentorship pair for six months
                </li>
              </ul>
            </div>
            <h2>Tax Information</h2>
            <p>
              SOSF is a 501(c)(3) non-profit organization. All donations are tax-deductible to the
              fullest extent allowed by law.
            </p>
            <div className="bg-brand-sand/10 rounded-xl p-6 my-6">
              <h3 className="font-display text-xl mb-3">📄 Official Donation Acknowledgment</h3>
              <p className="text-neutral-700">
                After completing your donation, you will be able to generate an <strong>IRS-compliant 
                donation acknowledgment letter</strong> for your tax records. This official receipt will 
                include our EIN (33-4019131), 501(c)(3) status, and all required IRS documentation 
                for claiming your tax deduction.
              </p>
              <p className="text-neutral-700 mt-3">
                PayPal will also send you a payment confirmation email with transaction details.
              </p>
            </div>
          </MDXPageWrapper>
        )
      case '/volunteers':
        return (
          <MDXPageWrapper>
            <h1>Get Involved</h1>
            <p>
              There are many ways to get involved with SOSF, whether you have an hour a month or
              want to make a deeper commitment.
            </p>
            <h2>Volunteer Opportunities</h2>
            <h3>Mentors</h3>
            <p>Our most impactful role. Mentors commit to:</p>
            <ul>
              <li>Weekly meetings with their mentee (1-2 hours)</li>
              <li>Attendance at training sessions when possible</li>
              <li>Regular communication with SOSF staff</li>
              <li>12-month minimum commitment</li>
            </ul>
            <h3>Program Support</h3>
            <p>Help behind the scenes with:</p>
            <ul>
              <li>Event planning and coordination</li>
              <li>Social media and marketing</li>
              <li>Fundraising support</li>
              <li>Administrative tasks</li>
            </ul>
          </MDXPageWrapper>
        )
      case '/contact':
        return (
          <MDXPageWrapper>
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you! Whether you have questions, want to get involved, or need
              support, we're here to help.
            </p>
            <h2>Get in Touch</h2>
            <p>
              <strong>Email:</strong> info@sosf.org
              <br />
              <strong>Phone:</strong> (555) 555-5555
              <br />
              <strong>Address:</strong> Victorville, CA
            </p>
            <h2>Office Hours</h2>
            <p>
              Monday - Friday: 9:00 AM - 5:00 PM PST
              <br />
              Saturday: By appointment
              <br />
              Sunday: Closed
            </p>
          </MDXPageWrapper>
        )
      case '/success-stories':
        return (
          <MDXPageWrapper>
            <h1>Success Stories</h1>
            <p>Real stories from real people whose lives have been transformed through SOSF.</p>
            <h2>Marcus's Journey</h2>
            <p>
              <em>From struggling student to state champion</em>
            </p>
            <p>
              Marcus came to SOSF at age 14, failing classes and facing suspension. Through our
              boxing program and mentorship, he found discipline and purpose. Two years later, he's
              on the honor roll and just won the state Golden Gloves championship.
            </p>
            <blockquote>
              "SOSF gave me something to work for. My mentor believed in me when I didn't believe
              in myself." - Marcus, 16
            </blockquote>
          </MDXPageWrapper>
        )
      case '/safeguards':
        return (
          <MDXPageWrapper>
            <h1>Safety & Safeguards</h1>
            <p>The safety and wellbeing of every youth in our programs is our highest priority.</p>
            <h2>Background Checks</h2>
            <p>All volunteers, mentors, coaches, and staff undergo:</p>
            <ul>
              <li>Comprehensive criminal background checks</li>
              <li>Sex offender registry checks</li>
              <li>Reference verification</li>
              <li>Ongoing monitoring</li>
            </ul>
          </MDXPageWrapper>
        )
      case '/resources':
        return (
          <MDXPageWrapper>
            <h1>Resources</h1>
            <p>Helpful resources for youth, families, volunteers, and partners.</p>
            <h2>For Youth & Families</h2>
            <h3>Getting Started</h3>
            <ul>
              <li>Application Form - Apply for a training scholarship</li>
              <li>Program Overview - Learn about our programs</li>
              <li>FAQ - Frequently asked questions</li>
            </ul>
          </MDXPageWrapper>
        )
      case '/find-a-gym':
        return (
          <MDXPageWrapper>
            <h1>Find a Partner Gym</h1>
            <p>
              SOSF partners with quality gyms throughout the region to provide accessible, safe
              training for youth.
            </p>
            <h2>Partner Gym Directory</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold text-brand-sand mb-2">Victor Valley Boxing</h3>
                <p>
                  <strong>Location:</strong> 123 Main St, Victorville, CA 92395
                  <br />
                  <strong>Specialties:</strong> Boxing, Youth Programs
                  <br />
                  <strong>Contact:</strong> (555) 555-1001
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-brand-sand mb-2">High Desert MMA</h3>
                <p>
                  <strong>Location:</strong> 456 Desert Rd, Hesperia, CA 92345
                  <br />
                  <strong>Specialties:</strong> MMA, Kickboxing, BJJ
                  <br />
                  <strong>Contact:</strong> (555) 555-1002
                </p>
              </div>
            </div>
          </MDXPageWrapper>
        )
      case '/thank-you':
        return <ThankYou />
      case '/donation-cancelled':
        return <DonationCancelled />
      default:
        return <NotFound />
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  )
}

export default App

