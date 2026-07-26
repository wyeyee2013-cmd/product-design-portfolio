import { useEffect, useState } from 'react'
import styles from './StatusBar.module.css'

function useClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 10000)
    return () => clearInterval(id)
  }, [])
  return now
}

export default function StatusBar({ tone = 'light', label }) {
  const now = useClock()
  const time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  const day = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <div className={`${styles.bar} ${tone === 'dark' ? styles.dark : ''}`}>
      <div className={styles.left}>
        <span className={styles.time}>{time}</span>
        <span className={styles.dot} />
        <span className={styles.date}>{label || day}</span>
      </div>

      <div className={styles.right}>
        {/* signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" aria-hidden="true">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0.5" width="3" height="11.5" rx="1" />
        </svg>
        {/* wifi */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor" aria-hidden="true">
          <path d="M8.5 2.2c2.7 0 5.2 1 7 2.8l-1.4 1.5A7.8 7.8 0 0 0 8.5 4.3 7.8 7.8 0 0 0 2.9 6.5L1.5 5A9.9 9.9 0 0 1 8.5 2.2Z" />
          <path d="M8.5 5.9c1.6 0 3.1.6 4.2 1.7l-1.5 1.5A4 4 0 0 0 8.5 8a4 4 0 0 0-2.7 1.1L4.3 7.6A6 6 0 0 1 8.5 5.9Z" />
          <circle cx="8.5" cy="10.4" r="1.5" />
        </svg>
        {/* battery */}
        <span className={styles.battery}>
          <span className={styles.batteryFill} />
        </span>
      </div>
    </div>
  )
}
