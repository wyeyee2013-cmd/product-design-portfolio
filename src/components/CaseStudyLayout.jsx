import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import MacWindow from './MacWindow'
import styles from './CaseStudyLayout.module.css'

export default function CaseStudyLayout({ meta, children }) {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('')
  const [navVisible, setNavVisible] = useState(false)
  const bodyRef = useRef(null)
  const headerRef = useRef(null)
  const tabsRef = useRef(null)

  // Show/hide mobile sticky nav once header scrolls off screen
  useEffect(() => {
    if (window.innerWidth > 1024) return
    const el = headerRef.current
    if (!el) return
    const onScroll = () => setNavVisible(el.getBoundingClientRect().bottom < 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracking
  useEffect(() => {
    if (!meta.sections) return
    const ids = meta.sections.map(s => s.id)
    const el = bodyRef.current
    if (!el) return

    const isMobile = window.innerWidth <= 1024

    const updateActive = () => {
      if (isMobile) {
        const atBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - 60
        if (atBottom) { setActiveSection(ids[ids.length - 1]); return }
        let current = ids[0]
        for (const id of ids) {
          const sec = document.getElementById(id)
          if (sec && sec.getBoundingClientRect().top <= 60) current = id
        }
        setActiveSection(current)
      } else {
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 60
        if (atBottom) { setActiveSection(ids[ids.length - 1]); return }
        const threshold = el.getBoundingClientRect().top + 100
        let current = ids[0]
        for (const id of ids) {
          const sec = document.getElementById(id)
          if (sec && sec.getBoundingClientRect().top <= threshold) current = id
        }
        setActiveSection(current)
      }
    }

    const target = isMobile ? window : el
    target.addEventListener('scroll', updateActive, { passive: true })
    return () => target.removeEventListener('scroll', updateActive)
  }, [meta.sections])

  // Auto-scroll the tabs pill to keep active button centred
  useEffect(() => {
    if (!activeSection || !tabsRef.current) return
    const container = tabsRef.current
    const btn = container.querySelector(`[data-section="${activeSection}"]`)
    if (!btn) return
    const targetLeft = Math.max(0, btn.offsetLeft - (container.offsetWidth - btn.offsetWidth) / 2)
    container.scrollTo({ left: targetLeft, behavior: 'smooth' })
  }, [activeSection])

  const scrollTo = (id) => {
    const sec = document.getElementById(id)
    if (!sec) return
    const el = bodyRef.current
    if (window.innerWidth <= 1024) {
      const navH = 48
      window.scrollTo({ top: sec.getBoundingClientRect().top + window.scrollY - navH - 8, behavior: 'smooth' })
    } else if (el) {
      const top = sec.getBoundingClientRect().top - el.getBoundingClientRect().top + el.scrollTop
      el.scrollTo({ top: top - 24, behavior: 'smooth' })
    }
  }

  return (
    <MacWindow title={meta.client || meta.title} bodyRef={bodyRef}>
      <div className={styles.inner} style={{ '--accent': meta.accent }}>

        {/* ── Top spacer (mobile only) ── */}
        <div className={styles.topSpacer} />

        {/* ── Header ── */}
        <div className={styles.header} ref={headerRef}>
          <h1 className={styles.title}>{meta.title}</h1>
          {meta.subtitle && <p className={styles.subtitle}>{meta.subtitle}</p>}

          {meta.metaItems?.length > 0 && (
            <div className={styles.metaGrid}>
              {meta.metaItems.map(item => (
                <div key={item.label} className={styles.metaCell}>
                  <span className={styles.metaLabel}>{item.label}</span>
                  {Array.isArray(item.value)
                    ? <span className={styles.metaValue}>{item.value.join(', ')}</span>
                    : <span className={styles.metaValue}>{item.value}</span>
                  }
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Hero image ── */}
        {meta.heroImage && (
          <div className={styles.hero}>
            <img src={meta.heroImage} alt={meta.title} className={styles.heroImg} />
          </div>
        )}

        {/* ── In-page section nav (desktop: sticky inline; mobile: fixed slide-in) ── */}
        {meta.sections?.length > 0 && (
          <div className={`${styles.sectionNav} ${navVisible ? styles.sectionNavVisible : ''}`}>
            <div className={styles.sectionNavTabs} ref={tabsRef}>
              {meta.sections.map(s => (
                <button
                  key={s.id}
                  data-section={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`${styles.sectionNavBtn} ${activeSection === s.id ? styles.sectionNavBtnActive : ''}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <button
              className={styles.sectionNavClose}
              onClick={() => navigate('/')}
              aria-label="Close"
            >×</button>
          </div>
        )}

        {/* ── Case study sections ── */}
        <div className={styles.content}>
          {children}
        </div>

        {/* ── Next project ── */}
        {meta.next && (
          <div className={styles.next}>
            <span className={styles.nextLabel}>Up next</span>
            <Link to={`/projects/${meta.next.slug}`} className={styles.nextCard}>
              <div>
                <p className={styles.nextTitle}>{meta.next.title}</p>
                <p className={styles.nextSub}>{meta.next.sub}</p>
              </div>
              <span className={styles.nextArrow}>→</span>
            </Link>
          </div>
        )}
      </div>
    </MacWindow>
  )
}
