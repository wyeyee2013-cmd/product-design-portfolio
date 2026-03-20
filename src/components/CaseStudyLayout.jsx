import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './CaseStudyLayout.module.css'

export default function CaseStudyLayout({ meta, children }) {
  const [activeSection, setActiveSection] = useState('')
  const [navStuck, setNavStuck] = useState(false)
  const stickyRef = useRef(null)

  // Highlight active section on scroll
  useEffect(() => {
    if (!meta.sections) return
    const ids = meta.sections.map(s => s.id)

    const onScroll = () => {
      const scrollY = window.scrollY + 120

      // Sticky detection
      if (stickyRef.current) {
        setNavStuck(stickyRef.current.getBoundingClientRect().top <= 64)
      }

      // Active section
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) current = id
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [meta.sections])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={styles.page}>
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero} style={{ '--accent': meta.accent }}>
        <div className={styles.heroBg} style={{ background: meta.heroBg }} />
        <div className={styles.heroGlow} style={{ background: `radial-gradient(circle, ${meta.accent}22 0%, transparent 65%)` }} />

        <div className={`container ${styles.heroInner}`}>
          <div className="animate-fadeUp delay-1">
            <Link to="/" className={styles.backLink}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              All work
            </Link>
          </div>

          {/* Client label */}
          {meta.client && (
            <p className={`${styles.heroClient} animate-fadeUp delay-2`}>{meta.client}</p>
          )}

          <h1 className={`${styles.heroTitle} animate-fadeUp delay-3`}>{meta.title}</h1>
          <p className={`${styles.heroSub} animate-fadeUp delay-4`}>{meta.subtitle}</p>

          {/* Meta row */}
          <div className={`${styles.heroMeta} animate-fadeUp delay-5`}>
            {meta.metaItems.map(item => (
              <div key={item.label} className={styles.heroMetaItem}>
                <span className={styles.heroMetaLabel}>{item.label}</span>
                {Array.isArray(item.value)
                  ? <div className={styles.heroMetaList}>{item.value.map(v => <span key={v}>{v}</span>)}</div>
                  : <span className={styles.heroMetaValue}>{item.value}</span>
                }
              </div>
            ))}
          </div>
        </div>

        {/* Cover visual */}
        <div className={`container ${styles.heroVisual} animate-fadeUp delay-6`}>
          <div className={styles.heroVisualBox} style={{ background: meta.heroBg }}>
            <div className={styles.heroVisualGlow} style={{ background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${meta.accent}28, transparent)` }} />
            {meta.heroVisual}
          </div>
        </div>
      </section>

      {/* ── Sticky in-page nav ── */}
      {meta.sections && (
        <div className={`${styles.stickyNav} ${navStuck ? styles.stickyNavStuck : ''}`} ref={stickyRef}>
          <div className={`container ${styles.stickyNavInner}`}>
            {meta.sections.map(s => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`${styles.stickyNavLink} ${activeSection === s.id ? styles.stickyNavLinkActive : ''}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Page content ── */}
      <div className={styles.content}>
        {children}
      </div>

      {/* ── Next project ── */}
      {meta.next && (
        <section className={styles.nextProject}>
          <div className="container">
            <p className="section-label">Up Next</p>
            <Link to={`/projects/${meta.next.slug}`} className={styles.nextCard}>
              <div className={styles.nextLeft}>
                <h3 className={styles.nextTitle}>{meta.next.title}</h3>
                <p className={styles.nextSub}>{meta.next.sub}</p>
              </div>
              <span className={styles.nextArrow}>View case study →</span>
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
