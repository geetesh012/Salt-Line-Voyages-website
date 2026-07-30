const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function HeroBackground({ slides, activeIndex }) {
  return (
    <div className="hero-media" aria-hidden="true">
      {slides.map((slide, i) => {
        const isActive = i === activeIndex
        const useVideo = isActive && Boolean(slide.video) && !prefersReducedMotion
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
                preload="auto"
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
