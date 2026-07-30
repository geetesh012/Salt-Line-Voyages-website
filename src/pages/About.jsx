import { IMAGES } from '../data/images.js'
import Reveal from '../components/Reveal.jsx'
import useDocumentHead from '../hooks/useDocumentHead.js'

const CAPTAINS = [
  {
    initial: 'E',
    name: 'Elena Marsh',
    role: 'Founder & Head Captain',
    statValue: '20+',
    statLabel: 'Years on this coast',
    bio: 'Raised on these channels, Elena has spent over twenty years navigating this coast, from marine research expeditions to founding Salt Line Voyages in the shape it takes today.',
    tags: ['Licensed Captain', 'Marine Research', 'Founder'],
  },
  {
    initial: 'T',
    name: 'Tobias Renn',
    role: 'Lead Guide, Kayak & Snorkel',
    statValue: '8',
    statLabel: 'Seasons guiding',
    bio: 'A former marine biology field assistant, Tobias can name every resident species in the kelp forest — and usually does, mid-paddle.',
    tags: ['Marine Biology', 'Kelp Ecology', 'Lead Guide'],
  },
]

export default function About() {
  useDocumentHead({
    title: 'About Us',
    description: 'A small, intentionally limited outfitter on the Pacific Northwest coast — local guides, hand-chosen vessels, and a standing commitment to low-impact travel.',
    path: '/about',
  })

  return (
    <>
      <section
        className="hero hero-sub"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(9,14,12,0.35) 0%, rgba(9,14,12,0.85) 100%), url('${IMAGES.mistyForest}')`
        }}
      >
        <Reveal className="hero-inner">
          <span className="eyebrow">About Salt Line Voyages</span>
          <h1>A small company, built on a long coastline.</h1>
        </Reveal>
      </section>

      <section className="about-section" id="about">
        <div className="wrap">
          <Reveal className="about-grid">
            <div>
              <p>
                Salt Line Voyages began the way most good ideas do on this coast — with a
                boat, a low tide, and no particular place to be. Our founder grew up
                navigating these channels by kelp bed and current rather than chart,
                learning the water the way it's meant to be learned: slowly, and from
                someone who came before.
              </p>
              <p>
                What started as informal trips for visiting friends became something more
                deliberate: a small outfitter dedicated to showing this coastline properly
                — its hidden coves, its resident orca pods, its cold, astonishingly clear
                water — without the crowds, the noise, or the rush that so often come
                with it.
              </p>
            </div>
            <div>
              <p>
                We remain intentionally small. Every guide is local, every route
                hand-scouted, every departure limited to a handful of guests. It's a
                slower way to run a company, and the only way we'd want to.
              </p>
              <p>
                Every vessel is chosen, not just acquired — cedar-strip kayaks built by
                regional artisans, a restored 1962 sloop, and dive gear serviced before
                every voyage. We operate under strict low-impact protocols, honoring
                marine sanctuary guidelines on every departure.
              </p>
            </div>
          </Reveal>

          <Reveal className="values">
            <div className="value">
              <h4>Stewardship</h4>
              <p>No-wake zones, marine sanctuary guidelines, and a standing rule: leave every cove as untouched as we found it.</p>
            </div>
            <div className="value">
              <h4>Craft</h4>
              <p>Cedar-strip kayaks, a restored 1962 sloop, and dive gear serviced before every voyage — chosen, not just acquired.</p>
            </div>
            <div className="value">
              <h4>Access</h4>
              <p>The best of this coast is often the hardest to reach. Our guides hold the local knowledge — and the permits — to get you there.</p>
            </div>
          </Reveal>

          <Reveal className="captain-list" as="div">
            {CAPTAINS.map((captain) => (
              <div className="captain-row" key={captain.name}>
                <div className="captain-media">
                  <span className="captain-badge">{captain.role}</span>
                  <span className="captain-media-mark">{captain.initial}</span>
                </div>
                <div className="captain-content">
                  <h3>{captain.name}</h3>
                  <p>{captain.bio}</p>
                  <div className="captain-tags">
                    {captain.tags.map((tag) => (
                      <span className="captain-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="captain-stat">
                  <span className="amount">{captain.statValue}</span>
                  <span className="unit">{captain.statLabel}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
