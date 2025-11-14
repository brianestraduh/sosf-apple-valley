import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { Stat } from '../components/Stat'
import { Button } from '../components/Button'
import homeData from '../../content/home.json'

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={homeData.hero.title}
        subtitle={homeData.hero.subtitle}
        ctaLabel={homeData.hero.ctaLabel}
        ctaHref={homeData.hero.ctaHref}
        imageSrc={homeData.hero.imageSrc}
        imageAlt={homeData.hero.imageAlt}
      />

      {/* Video Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="h2 mb-4">See Our Impact</h2>
            <p className="lead">Watch how SOSF is transforming lives through combat sports</p>
          </div>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
              src="https://www.youtube.com/embed/S2zwERJUgQk"
              title="SOSF Impact Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-black/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {homeData.stats.map((stat, index) => (
            <Stat key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Section>

      {/* Content Sections */}
      {homeData.sections.map((section, index) => (
        <Section key={index} className={index % 2 === 1 ? 'bg-black/10' : ''}>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {index % 2 === 0 ? (
              <>
                <div>
                  <h2 className="h2 mb-4">{section.title}</h2>
                  <p className="lead mb-6">{section.body}</p>
                  {section.title === 'Donate' && (
                    <Button variant="primary" href="#/donate">
                      Make a Donation
                    </Button>
                  )}
                  {section.title === 'Get Involved' && (
                    <Button variant="outline" href="#/volunteers">
                      Learn More
                    </Button>
                  )}
                  {section.title === 'Our Mission' && (
                    <Button variant="outline" href="#/about">
                      Read More
                    </Button>
                  )}
                </div>
                <div>
                  <img
                    src={`${import.meta.env.BASE_URL}${section.imageSrc.replace(/^\//, '')}`}
                    alt={section.title}
                    className="rounded-2xl w-full h-auto shadow-2xl"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="order-2 md:order-1">
                  <img
                    src={`${import.meta.env.BASE_URL}${section.imageSrc.replace(/^\//, '')}`}
                    alt={section.title}
                    className="rounded-2xl w-full h-auto shadow-2xl"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="h2 mb-4">{section.title}</h2>
                  <p className="lead mb-6">{section.body}</p>
                  {section.title === 'Donate' && (
                    <Button variant="primary" href="#/donate">
                      Make a Donation
                    </Button>
                  )}
                  {section.title === 'Get Involved' && (
                    <Button variant="outline" href="#/volunteers">
                      Learn More
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        </Section>
      ))}

      {/* Call to Action */}
      <Section className="bg-brand-red/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="h2 mb-4">Ready to Make a Difference?</h2>
          <p className="lead mb-8">
            Join us in empowering the next generation through combat sports. Every contribution
            counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="#/donate">
              Donate Now
            </Button>
            <Button variant="outline" href="#/volunteers">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

