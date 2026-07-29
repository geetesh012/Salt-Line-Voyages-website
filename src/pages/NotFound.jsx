import { Link } from 'react-router-dom'
import { IMAGES } from '../data/images.js'

export default function NotFound() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(9,14,12,0.4) 0%, rgba(9,14,12,0.9) 100%), url('${IMAGES.mistyForest}')`
      }}
    >
      <div className="hero-inner">
        <span className="eyebrow">404</span>
        <h1>Looks like you've drifted off course.</h1>
        <div className="hero-ctas">
          <Link to="/" className="btn solid">Return Home</Link>
        </div>
      </div>
    </section>
  )
}
