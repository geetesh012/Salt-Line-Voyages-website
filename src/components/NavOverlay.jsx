import { Link } from 'react-router-dom'
import { IMAGES } from '../data/images.js'

export default function NavOverlay({ onClose }) {
  return (
    <nav className="nav-overlay" id="navOverlay">
      <Link
        to="/tours"
        className="nav-thumb"
        style={{ backgroundImage: `url('${IMAGES.kayakSunsetNav}')` }}
        onClick={onClose}
      >
        <div className="nav-thumb-label">
          <p className="eyebrow">On the water</p>
          <h3>Kayak &amp; Snorkel</h3>
          <p>Cedar-strip kayaks and clear kelp forests, guided at dawn.</p>
        </div>
      </Link>

      <Link
        to="/tours"
        className="nav-thumb"
        style={{ backgroundImage: `url('${IMAGES.sailSunsetNav}')` }}
        onClick={onClose}
      >
        <div className="nav-thumb-label">
          <p className="eyebrow">Under sail</p>
          <h3>Sail &amp; Charter</h3>
          <p>A restored classic sloop, chartered privately, at any hour.</p>
        </div>
      </Link>

      <div className="nav-list-col">
        <ul className="nav-list">
          <li><Link to="/" onClick={onClose}>Home</Link></li>
          <li><Link to="/about" onClick={onClose}>About</Link></li>
          <li><Link to="/tours" onClick={onClose}>Tours</Link></li>
          <li><Link to="/tours#gallery" onClick={onClose}>Gallery</Link></li>
          <li><Link to="/#reviews" onClick={onClose}>Reviews</Link></li>
          <li><Link to="/contact" onClick={onClose}>Contact</Link></li>
        </ul>
        <div className="nav-contact">
          <p className="eyebrow">For personalized assistance</p>
          <a href="tel:+13605550142">+1 (360) 555-0142</a>
          <a href="mailto:voyages@saltlinevoyages.com">voyages@saltlinevoyages.com</a>
        </div>
      </div>
    </nav>
  )
}
