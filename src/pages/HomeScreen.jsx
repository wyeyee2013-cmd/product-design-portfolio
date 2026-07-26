import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.jpg'
import StatusBar from '../components/ipad/StatusBar'
import styles from './HomeScreen.module.css'

const RESUME_URL = 'https://drive.google.com/file/d/1rRuA10-6bYInlw7D9xMJvCbD2oimB1Op/view'

const PROJECTS = [
  { slug: 'feedme',     label: 'FeedMe',     mono: 'F', from: '#ffb066', to: '#ff5e3a' },
  { slug: 'pantas',     label: 'Pantas',     mono: 'P', from: '#7ad3ff', to: '#2b8fe0' },
  { slug: 'hireti',     label: 'Hireti',     mono: 'H', from: '#ff9ec7', to: '#ff5e93' },
  { slug: 'apspace',    label: 'APSpace',    mono: 'A', from: '#7af0b0', to: '#16a34a' },
  { slug: 'wolfplanet', label: 'Wolfplanet', mono: 'W', from: '#fbd24b', to: '#d99412' },
  { slug: 'tomo',       label: 'Tomo',       mono: 'T', from: '#c4a0ff', to: '#6d28d9' },
]

function Glyph({ name }) {
  const p = { fill: 'none', stroke: '#fff', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'about':
      return <svg viewBox="0 0 24 24" width="48%" height="48%"><circle cx="12" cy="8.5" r="3.6" {...p} /><path d="M5 19.5c0-3.6 3.1-6 7-6s7 2.4 7 6" {...p} /></svg>
    case 'resume':
      return <svg viewBox="0 0 24 24" width="46%" height="46%"><rect x="5" y="3" width="14" height="18" rx="2.5" {...p} /><path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5" {...p} /></svg>
    case 'mail':
      return <svg viewBox="0 0 24 24" width="48%" height="48%"><rect x="3.5" y="5.5" width="17" height="13" rx="3" {...p} /><path d="M4.5 7.5 12 13l7.5-5.5" {...p} /></svg>
    case 'linkedin':
      return <svg viewBox="0 0 24 24" width="46%" height="46%"><path d="M7 9.5v8M7 6.4v.05M11 17.5v-4.3a2.6 2.6 0 0 1 5.2 0v4.3M11 9.5v8" {...p} /></svg>
    case 'work':
      return <svg viewBox="0 0 24 24" width="46%" height="46%"><rect x="4" y="4" width="6.5" height="6.5" rx="1.6" {...p} /><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6" {...p} /><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6" {...p} /><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6" {...p} /></svg>
    default:
      return null
  }
}

function AppIcon({ to, href, from, to: gradTo, mono, glyph, label, badge }) {
  const tile = (
    <span className={styles.tile} style={{ '--from': from, '--to': gradTo }}>
      <span className={styles.tileShine} aria-hidden="true" />
      {mono ? <span className={styles.mono}>{mono}</span> : <Glyph name={glyph} />}
      {badge ? <span className={styles.badge}>{badge}</span> : null}
    </span>
  )
  const content = (
    <>
      {tile}
      <span className={styles.appLabel}>{label}</span>
    </>
  )
  if (to) return <Link to={to} className={styles.app}>{content}</Link>
  return <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={styles.app}>{content}</a>
}

export default function HomeScreen() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    window.scrollTo(0, 0)
    const id = setInterval(() => setNow(new Date()), 10000)
    return () => clearInterval(id)
  }, [])
  const bigTime = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  const bigDate = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <div className={styles.screen}>
      <div className={styles.wallpaper} aria-hidden="true" />
      <StatusBar tone="light" />

      <div className={styles.content}>
        <div className={styles.inner}>
          {/* Widgets */}
          <div className={styles.widgets}>
            <div className={`${styles.widget} ${styles.profile}`}>
              <img src={avatar} alt="Cheryl Lim" className={styles.avatar} />
              <div className={styles.profileMeta}>
                <span className={styles.avail}><span className={styles.availDot} /> Open to roles</span>
                <h1 className={styles.name}>Cheryl Lim</h1>
                <p className={styles.role}>Product Designer · Kuala Lumpur</p>
                <p className={styles.bio}>~4 years crafting user-centered digital experiences that drive conversion and delight.</p>
                <a href="mailto:cheryl.wylim@outlook.com" className={styles.cta}>Get in touch</a>
              </div>
            </div>

            <div className={`${styles.widget} ${styles.clockWidget}`}>
              <span className={styles.clockLabel}>Kuala Lumpur</span>
              <span className={styles.clockTime}>{bigTime}</span>
              <span className={styles.clockDate}>{bigDate}</span>
            </div>

            <Link to="/projects/feedme" className={`${styles.widget} ${styles.featured}`}>
              <img src="/Order.png" alt="FeedMe POS" className={styles.featuredImg} />
              <div className={styles.featuredOverlay}>
                <span className={styles.featuredKicker}>Latest</span>
                <span className={styles.featuredTitle}>FeedMe POS</span>
              </div>
            </Link>
          </div>

          {/* App grid */}
          <div className={styles.apps}>
            {PROJECTS.map(p => (
              <AppIcon key={p.slug} to={`/projects/${p.slug}`} from={p.from} to={p.to} mono={p.mono} label={p.label} />
            ))}
            <AppIcon to="/about" from="#9a8cff" to="#5b3fd6" glyph="about" label="About" />
            <AppIcon href={RESUME_URL} from="#9aa0ab" to="#4b5160" glyph="resume" label="Résumé" />
            <AppIcon href="mailto:cheryl.wylim@outlook.com" from="#5ec8ff" to="#1d74e8" glyph="mail" label="Mail" />
            <AppIcon href="https://linkedin.com" from="#4aa3e8" to="#0a66c2" glyph="linkedin" label="LinkedIn" />
          </div>
        </div>
      </div>

      {/* Dock */}
      <div className={styles.dockWrap}>
        <div className={styles.dock}>
          <AppIcon to="/about" from="#9a8cff" to="#5b3fd6" glyph="about" label="" />
          <AppIcon href="mailto:cheryl.wylim@outlook.com" from="#5ec8ff" to="#1d74e8" glyph="mail" label="" />
          <AppIcon href="https://linkedin.com" from="#4aa3e8" to="#0a66c2" glyph="linkedin" label="" />
          <AppIcon href={RESUME_URL} from="#9aa0ab" to="#4b5160" glyph="resume" label="" />
        </div>
      </div>
    </div>
  )
}
