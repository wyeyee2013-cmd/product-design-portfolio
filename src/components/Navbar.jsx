import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

function LogoMark() {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <defs>
        <linearGradient id="nlg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c4a0ff"/>
          <stop offset="100%" stopColor="#6b28cc"/>
        </linearGradient>
        <linearGradient id="nld" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5cc8ff"/>
          <stop offset="100%" stopColor="#a36bff"/>
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="9" fill="#1a0e30"/>
      {/* Crescent moon via overlapping circles */}
      <path
        d="M22 10 A9 9 0 1 0 22 26 A6 6 0 1 1 22 10 Z"
        fill="url(#nlg)"
      />
      {/* Accent dot */}
      <circle cx="26" cy="11" r="2" fill="url(#nld)"/>
    </svg>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>
            <LogoMark />
          </span>
          <span className={styles.logoText}>Cheryl.</span>
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Work</Link>
          <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>About</Link>
          <a href="mailto:cheryl.wylim@outlook.com" className={styles.contactBtn}>
            <span>Get in touch</span>
          </a>
        </div>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.burgerOpen : ''}></span>
          <span className={menuOpen ? styles.burgerOpen : ''}></span>
        </button>
      </div>
    </nav>
  )
}
