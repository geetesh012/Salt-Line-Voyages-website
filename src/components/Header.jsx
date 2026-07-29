import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BrandMark from './BrandMark.jsx'

export default function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="siteHeader" className={scrolled ? 'scrolled' : ''}>
      <div className="header-zone header-zone--left">
        <button
          className="pill-btn menu-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bars"><i></i><i></i><i></i></span>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <button className="pill-btn lang-btn" aria-label="Language: English" type="button">
          EN <span className="chev">⌄</span>
        </button>
      </div>

      <Link to="/" className="header-zone header-zone--center" onClick={() => setMenuOpen(false)}>
        <BrandMark size="md" />
      </Link>

      <div className="header-zone header-zone--right">
        <Link to="/contact" className="inquiry-btn">
          <span>Reserve</span>
          <span className="inquiry-arrow" aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  )
}
