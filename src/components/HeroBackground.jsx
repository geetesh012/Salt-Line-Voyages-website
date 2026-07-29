const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Renders every slide as a stacked, absolutely-positioned layer and
 * crossfades opacity based on which one is active. Slides with a `video`
 * field render a looping, muted background video instead of a static
 * image (falling back to the image if the person prefers reduced motion).
 */
export default function HeroBackground({ slides, activeIndex }) {
  return (
    <div className="hero-media" aria-hidden="true">
      {slides.map((slide, i) => {
        const isActive = i === activeIndex
        const useVideo = Boolean(slide.video) && !prefersReducedMotion
        return (
          <div key={i} className={`hero-media-layer${isActive ? ' is-active' : ''}`}>
            {useVideo ? (
              <video
                src={slide.video}
                poster={slide.image}
                autoPlay
                loop
                muted
                playsInline
                preload={isActive ? 'auto' : 'none'}
              />
            ) : (
              <img src={slide.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
            )}
          </div>
        )
      })}
      <div className="hero-media-overlay" />
    </div>
  )
}
