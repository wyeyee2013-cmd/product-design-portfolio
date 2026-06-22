import { useNavigate } from 'react-router-dom'
import styles from './MacWindow.module.css'

export default function MacWindow({ title, children, bodyRef }) {
  const navigate = useNavigate()

  return (
    <div className={styles.stage}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.nebula} aria-hidden="true" />

      <div className={styles.window} role="dialog" aria-label={title}>
        {/* Title bar (desktop) */}
        <div className={styles.titleBar}>
          <div className={styles.lights}>
            <button
              className={`${styles.light} ${styles.red}`}
              onClick={() => navigate('/')}
              aria-label="Close and go back"
            />
            <span className={`${styles.light} ${styles.yellow}`} />
            <span className={`${styles.light} ${styles.green}`} />
          </div>
          <span className={styles.titleText}>{title}</span>
        </div>

        {/* Close button (mobile only — replaces title bar) */}
        <button className={styles.closeBtn} onClick={() => navigate('/')} aria-label="Close">×</button>

        {/* Scrollable content */}
        <div className={styles.body} ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  )
}
