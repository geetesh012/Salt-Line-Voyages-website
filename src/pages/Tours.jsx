import { Link } from 'react-router-dom'
import { IMAGES } from '../data/images.js'
import Reveal from '../components/Reveal.jsx'

export default function Tours() {
  return (
    <>
      <section
        className="hero hero-sub"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(9,14,12,0.35) 0%, rgba(9,14,12,0.85) 100%), url('${IMAGES.sailSunset}')`
        }}
      >
        <Reveal className="hero-inner">
          <span className="eyebrow">Voyages</span>
          <h1>Choose your voyage.</h1>
        </Reveal>
      </section>

      {/* TOURS */}
      <section className="tours-section" id="tours">
        <div className="wrap">
          <Reveal className="section-head" as="div">
            <span className="eyebrow">The Fleet &amp; The Schedule</span>
            <h2>Three ways to meet the coast.</h2>
            <p>
              Each departure is capped at six guests and includes premium equipment, a
              private guide, and all the coffee you can drink before dawn.
            </p>
          </Reveal>

          <Reveal className="tour-list" as="div">
            <div className="tour-card">
              <div><span className="kicker">Half-day · 4 hours</span></div>
              <div>
                <h3>Dawn Kayak &amp; Kelp Forest Snorkel</h3>
                <p>
                  Depart before sunrise into water so still it mirrors the cedar line,
                  then ease into a wetsuit for a guided snorkel through kelp forests
                  alive with sea stars and harbor seals.
                </p>
              </div>
              <div className="price">
                <span className="amount">$195</span>
                <span className="unit">per person</span>
                <Link to="/contact">Reserve →</Link>
              </div>
            </div>

            <div className="tour-card">
              <div><span className="kicker">Evening · 3 hours</span></div>
              <div>
                <h3>Sunset Sail Along the Salt Line</h3>
                <p>
                  Board our restored 1962 sloop as the light turns gold — local
                  charcuterie, a curated wine list, and nothing on the agenda but the
                  horizon.
                </p>
              </div>
              <div className="price">
                <span className="amount">$240</span>
                <span className="unit">per person</span>
                <Link to="/contact">Reserve →</Link>
              </div>
            </div>

            <div className="tour-card">
              <div><span className="kicker">Multi-day · 3 days / 2 nights</span></div>
              <div>
                <h3>Three-Day Island Passage</h3>
                <p>
                  Kayak between uninhabited islands by day, snorkel remote kelp forests
                  few visitors ever reach, and sleep in canvas-wall tents above the tide
                  line.
                </p>
              </div>
              <div className="price">
                <span className="amount">$1,450</span>
                <span className="unit">all-inclusive</span>
                <Link to="/contact">Reserve →</Link>
              </div>
            </div>
          </Reveal>

          <Reveal className="charter-banner">
            <div>
              <h4>Something More Bespoke</h4>
              <p>
                Full-boat buyouts, custom itineraries, and private events — from
                proposals on the water to multi-family island retreats.
              </p>
            </div>
            <Link to="/contact" className="btn">Inquire About a Private Charter</Link>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section" id="gallery">
        <div className="wrap">
          <Reveal className="gallery-head">
            <div>
              <span className="eyebrow">Gallery</span>
              <h2>Images from the water, to the salt line.</h2>
            </div>
            <p>Misted forests, glassy channels, and kelp forests lit from above — the coast as our guests see it.</p>
          </Reveal>
          <Reveal className="gallery-grid">
            <a className="g1" href="#gallery">
              <img loading="lazy" src={IMAGES.heroCoastMd} alt="Aerial view of the rocky Pacific Northwest coastline" />
            </a>
            <a className="g2" href="#gallery">
              <img loading="lazy" src={IMAGES.mistyForest} alt="Misty evergreen forest along the coast" />
            </a>
            <a className="g4" href="#gallery">
              <img loading="lazy" src={IMAGES.kayakSunsetSm} alt="Silhouette of a kayaker at sunset" />
            </a>
            <a className="g5" href="#gallery">
              <img loading="lazy" src={IMAGES.sailSunsetMd} alt="Sailboat on the water at sunset" />
            </a>
            <a className="g3" href="#gallery">
              <img loading="lazy" src={IMAGES.kelpForestMd} alt="Sunlight through a kelp forest underwater" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
