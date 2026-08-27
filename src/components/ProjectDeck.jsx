import { useCallback, useEffect, useRef, useState } from 'react'
import { DECK_PROJECTS } from '../data/projects.js'
import { useWindows } from './windowContext.js'
import styles from './ProjectDeck.module.css'

const Arrow = () => (
  <svg width="12" height="11" viewBox="0 0 12 11" fill="none" aria-hidden="true">
    <path
      d="M2 5.5h7M6 2.5l3 3-3 3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * The glass card stack in the hero's bottom-right corner.
 * Collapsed it shows three cards (only the front one carries content);
 * on hover / focus the whole set fans upward.
 */
export default function ProjectDeck() {
  const [open, setOpen] = useState(false)
  const { openProject } = useWindows()
  const deckRef = useRef(null)

  const close = useCallback(() => setOpen(false), [])

  /* tapping outside closes the fan on touch devices */
  useEffect(() => {
    if (!open) return undefined
    const onDocClick = (e) => {
      if (deckRef.current && !deckRef.current.contains(e.target)) close()
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [open, close])

  /* touch: first tap fans the deck out, second tap opens the case study */
  function onCardClick(e, project) {
    e.preventDefault()
    if (!window.matchMedia('(hover: hover)').matches && !open) {
      setOpen(true)
      return
    }
    openProject(project)
  }

  return (
    <div
      className={`${styles.deck} ${open ? styles.open : ''}`}
      ref={deckRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!deckRef.current?.contains(e.relatedTarget)) close()
      }}
    >
      {DECK_PROJECTS.map((p, i) => (
        <a
          key={p.title}
          className={styles.card}
          href="#work"
          data-i={i}
          style={{ '--i': i, '--delay': `${i * 45}ms` }}
          aria-label={`${p.title} — ${p.client}, ${p.year}`}
          onClick={(e) => onCardClick(e, p)}
        >
          <div className={styles.inner}>
            <div className={styles.thumb} style={{ background: p.tint }}>
              <img src={p.thumb} alt="" />
            </div>
            <div className={styles.body}>
              <div>
                <div className={styles.meta}>
                  <span>{p.client}</span>
                  <span>{p.year}</span>
                </div>
                <div className={styles.title}>{p.deckTitle ?? p.title}</div>
              </div>
              <div className={styles.cta}>
                View Case Study
                <Arrow />
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
