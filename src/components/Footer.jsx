import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo">
              SALT LINE VOYAGES
              <span>PACIFIC NORTHWEST</span>
            </Link>
            <p style={{ color: 'var(--paper-dim)', fontSize: '0.85rem', marginTop: '1rem', maxWidth: '32ch' }}>
              Small groups. Big coastline.
            </p>
          </div>
          <div>
            <h5>Navigation</h5>
            <Link to="/about">About</Link>
            <Link to="/tours">Tours</Link>
            <Link to="/tours#gallery">Gallery</Link>
            <Link to="/#reviews">Reviews</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h5>Contact</h5>
            <a href="tel:+13605550142">+1 (111) 999-8888</a>
            <a href="mailto:voyages@saltlinevoyages.com">voyages@saltlinevoyages.com</a>
            <Link to="/contact">Harbor Marina, PNW Coast</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Salt Line Voyages. All rights reserved.</span>
          <span>Geetesh Kankonkar</span>
        </div>
      </div>
    </footer>
  )
}
