import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import MacWindow from './MacWindow'
import styles from './CaseStudyLayout.module.css'

export default function CaseStudyLayout({ meta, children }) {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('')
  const bodyRef = useRef(null)

  useEffect(() => {
    if (!meta.sections) return
    const ids = meta.sections.map(s => s.id)
    const el = bodyRef.current
    if (!el) return

    const onScroll = () => {
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 60
      if (atBottom) { setActiveSection(ids[ids.length - 1]); return }
      const elTop = el.getBoundingClientRect().top
      const threshold = elTop + 100
      let current = ids[0]
      for (const id of ids) {
        const sec = document.getElementById(id)
        if (sec && sec.getBoundingClientRect().top <= threshold) current = id
      }
      setActiveSection(current)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [meta.sections])

  const scrollTo = (id) => {
    const sec = document.getElementById(id)
    const el = bodyRef.current
    if (sec && el) {
      const top = sec.getBoundingClientRect().top - el.getBoundingClientRect().top + el.scrollTop
      el.scrollTo({ top: top - 24, behavior: 'smooth' })
    }
  }

  return (
    <MacWindow title={meta.client || meta.title} bodyRef={bodyRef}>
      <div className={styles.inner} style={{ '--accent': meta.accent }}>

        {/* ── Back button (tablet/mobile only) ── */}
        <div className={styles.backRow}>
          <button className={styles.backBtn} onClick={() => navigate('/')} aria-label="Back">‹</button>
        </div>

        {/* ── Header ── */}
        <div className={styles.header}>
          <h1 className={styles.title}>{meta.title}</h1>
          {meta.subtitle && <p className={styles.subtitle}>{meta.subtitle}</p>}

          {/* Metadata grid */}
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

        {/* ── In-page section nav ── */}
        {meta.sections?.length > 0 && (
          <div className={styles.sectionNav}>
            {meta.sections.map(s => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`${styles.sectionNavBtn} ${activeSection === s.id ? styles.sectionNavBtnActive : ''}`}
              >
                {s.label}
              </button>
            ))}
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
