import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import BrandMark from '../components/BrandMark.jsx'
import HeroCarousel from '../components/HeroCarousel.jsx'
import HeroBackground from '../components/HeroBackground.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import useDocumentHead from '../hooks/useDocumentHead.js'
import { IMAGES, THUMBS } from '../data/images.js'

const SLIDES = [
  {
    image: IMAGES.heroCoast,
    thumb: THUMBS.heroCoast,
    video: 'https://assets.mixkit.co/videos/51502/51502-720.mp4',
    caption: 'Your private gateway to the wild Pacific coast.',
  },
  {
    image: IMAGES.kayakSunset,
    thumb: THUMBS.kayakSunset,
    video: 'https://assets.mixkit.co/videos/1903/1903-720.mp4',
    caption: 'Cedar-strip kayaks at first light.',
  },
  {
    image: IMAGES.sailSunset,
    thumb: THUMBS.sailSunset,
    video: 'https://assets.mixkit.co/videos/4477/4477-720.mp4',
    caption: 'A restored 1962 sloop, under sail.',
  },
  {
    image: IMAGES.kelpForest,
    thumb: THUMBS.kelpForest,
    video: 'https://assets.mixkit.co/b97ynluhm8sgs184dgwbhd28w05p',
    caption: 'Kelp forests, lit from above.',
  },
]

const REVIEWS = [
  {
    quote: "We've chartered boats from Sydney to the Amalfi Coast. This was the first time the water felt like the whole point.",
    initial: 'A',
    name: 'A. Whitfield',
    role: 'Private Charter Guest',
  },
  {
    quote: "Our guide knew the tide charts the way most people know their own street. The kelp forest snorkel alone was worth the trip north.",
    initial: 'R',
    name: 'R. Delgado',
    role: 'Dawn Kayak & Snorkel',
  },
  {
    quote: "Three days, six islands, and not another boat in sight. The camp meals were better than most restaurants we've been to.",
    initial: 'M',
    name: 'M. Okafor',
    role: 'Three-Day Island Passage',
  },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  useDocumentHead({
    title: 'Kayak, Snorkel & Sail — Pacific Northwest',
    description: 'Guided kayak, snorkel, and sailing voyages along the wild Pacific Northwest coast. Small groups, local captains, vessels worth the view.',
    path: '/',
  })

  return (
    <>
      {/* HERO */}
      <section className="hero" id="hero">
        <HeroBackground slides={SLIDES} activeIndex={activeSlide} />

        <Reveal className="hero-inner">
          <span className="eyebrow">Salt Line Voyages · Pacific Northwest Coast</span>
          <h1>
            The luxury of drifting into the wild, <em>where the tide sets the hour</em> and
            the coast sets the mood.
          </h1>
          <div className="hero-ctas hero-ctas--pills">
            <Link to="/tours" className="pill-cta">
              <span>Kayak Area</span>
              <span className="pill-cta-arrow">›</span>
            </Link>
            <Link to="/tours" className="pill-cta">
              <span>Sail Area</span>
              <span className="pill-cta-arrow">›</span>
            </Link>
          </div>
        </Reveal>

        <div className="hero-right-stack">
          <div className="hero-secondary-mark">
            <BrandMark size="sm" />
          </div>
          <HeroCarousel slides={SLIDES} activeIndex={activeSlide} onSelect={setActiveSlide} duration={6000} />
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <Reveal className="wrap" as="div">
          <span className="eyebrow">Where the Salt Line Meets the Sky</span>
          <h2>The coast, at the pace it was meant to be seen.</h2>
          <p>
            The tide has its own schedule, and out here, so do we. Salt Line Voyages was
            built for travelers who want the coast on its own terms — quiet coves,
            cedar-lined channels, and water so still at dawn it holds the sky. We keep our
            parties small, our guides local, and our vessels immaculate, so every voyage
            feels less like a tour and more like an invitation.
          </p>

          <div className="pillars">
            <div className="pillar">
              <h4>Curated, Not Crowded</h4>
              <p>No more than six guests per voyage. This is the coast as it was meant to be seen — unhurried, and mostly yours.</p>
            </div>
            <div className="pillar">
              <h4>Guided by Locals</h4>
              <p>Every captain and guide was raised on these waters. What you'll hear isn't a script — it's a lifetime of tide charts.</p>
            </div>
            <div className="pillar">
              <h4>Vessels Worth the View</h4>
              <p>Handcrafted wooden kayaks, a restored classic sloop, and snorkel gear fit for water this clear. Nothing rushed.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FEATURE: KAYAK */}
      <div className="feature">
        <Reveal as="div" className="feature-media" style={{ backgroundImage: `url('${IMAGES.kelpForest}')` }} />
        <Reveal as="div" className="feature-text">
          <span className="eyebrow">Kayak &amp; Snorkel</span>
          <h2>Paddle into water clear enough to read by.</h2>
          <p>
            Cedar-strip kayaks built by regional artisans carry you through protected
            coves before you ease into a wetsuit for a guided snorkel through kelp
            forests alive with sea stars and, in season, curious harbor seals.
          </p>
          <Link to="/tours" className="btn">View Kayak Voyages</Link>
        </Reveal>
      </div>

      {/* FEATURE: SAIL */}
      <div className="feature reverse">
        <Reveal as="div" className="feature-media" style={{ backgroundImage: `url('${IMAGES.sailSunset}')` }} />
        <Reveal as="div" className="feature-text">
          <span className="eyebrow">Sail &amp; Charter</span>
          <h2>Let the horizon set the itinerary.</h2>
          <p>
            Board our restored 1962 sloop as the light turns gold. Local charcuterie, a
            curated wine list, and nothing on the agenda but the wind — private charters
            available for any occasion, any hour the tide allows.
          </p>
          <Link to="/tours" className="btn">View Sailing Voyages</Link>
        </Reveal>
      </div>

      {/* REVIEWS */}
      <section className="reviews-section" id="reviews">
        <div className="wrap">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">Reviews</span>
            <h2>
              Experiences from those who've sailed
              <br />
              <em>with Salt Line Voyages.</em>
            </h2>
          </Reveal>
          <Reveal as="div">
            <TestimonialCarousel reviews={REVIEWS} />
          </Reveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="cta-banner"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(9,14,12,0.6), rgba(9,14,12,0.85)), url('${IMAGES.kayakSunset}')`
        }}
      >
        <Reveal className="wrap">
          <span className="eyebrow">The Coast Rewards Patience</span>
          <h2>Reservations are limited by design.</h2>
          <p>
            Never more than a handful of departures each week, and never more guests
            than a conversation can hold. If the tide and the calendar align, we'd love
            to have you aboard.
          </p>
          <Link to="/contact" className="btn solid">Check Availability</Link>
        </Reveal>
      </section>
    </>
  )
}
