import { useEffect, useRef } from 'react'
import styles from './MacWindow.module.css'

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="6.2" cy="6.2" r="4.4" stroke="currentColor" strokeWidth="1.4" />
    <path d="M9.6 9.6 12.4 12.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const RefreshIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path
      d="M12.5 7.5a5 5 0 1 1-1.6-3.7"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path d="M12.6 1.8v3.1H9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * A macOS-style browser window used as a modal: traffic lights, a URL pill,
 * and a scrolling body. Goes full-screen below 900px.
 */
export default function MacWindow({ open, onClose, url, children }) {
  const bodyRef = useRef(null)
  const windowRef = useRef(null)
  const restoreFocus = useRef(null)

  /* lock the page behind, close on Escape, and park focus in the window */
  useEffect(() => {
    if (!open) return undefined

    restoreFocus.current = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKey)
    windowRef.current?.focus()

    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      restoreFocus.current?.focus?.()
    }
  }, [open, onClose])

  /* a new document always opens scrolled to the top */
  useEffect(() => {
    if (open && bodyRef.current) bodyRef.current.scrollTop = 0
  }, [open, url])

  if (!open) return null

  return (
    <div
      className={styles.overlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.()
      }}
    >
      <div
        className={styles.window}
        role="dialog"
        aria-modal="true"
        aria-label={url}
        tabIndex={-1}
        ref={windowRef}
      >
        <div className={styles.chrome}>
          <div className={styles.lights}>
            <button
              type="button"
              className={`${styles.light} ${styles.close}`}
              onClick={onClose}
              aria-label="Close"
            />
            <span className={`${styles.light} ${styles.min}`} aria-hidden="true" />
            <span className={`${styles.light} ${styles.max}`} aria-hidden="true" />
          </div>

          <div className={styles.urlbar}>
            <span className={styles.searchIcon}>
              <SearchIcon />
            </span>
            <span className={styles.url}>{url}</span>
            <span className={styles.refresh} aria-hidden="true">
              <RefreshIcon />
            </span>
          </div>

          <img className={styles.favicon} src="/assets/dock-finder.png" alt="" aria-hidden="true" />
        </div>

        <div className={styles.body} ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  )
}
