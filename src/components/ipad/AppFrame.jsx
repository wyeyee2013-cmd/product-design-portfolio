import { Link } from 'react-router-dom'
import StatusBar from './StatusBar'
import { useInWindow } from '../desktop/windowContext'
import styles from './AppFrame.module.css'

export default function AppFrame({ children, title }) {
  const inWindow = useInWindow()
  // Inside a desktop window the window chrome replaces the iPad chrome.
  if (inWindow) return children

  return (
    <div className={styles.app}>
      <div className={styles.bar}>
        <StatusBar tone="dark" label={title} />
      </div>

      <Link to="/" className={styles.home} aria-label="Back to Home Screen">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="6.5" height="6.5" rx="1.6" />
          <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6" />
          <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6" />
          <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6" />
        </svg>
      </Link>

      <div className={styles.window}>
        {children}
      </div>

      <Link to="/" className={styles.indicator} aria-label="Home">
        <span />
      </Link>
    </div>
  )
}
