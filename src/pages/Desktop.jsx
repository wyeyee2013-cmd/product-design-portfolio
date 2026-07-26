import { useEffect, useRef, useState, useCallback } from 'react'
import About from './About'
import FeedMe from './projects/FeedMe'
import Pantas from './projects/Pantas'
import Hireti from './projects/Hireti'
import APSpace from './projects/APSpace'
import WolfPlanet from './projects/WolfPlanet'
import Tomo from './projects/Tomo'
import DesktopWindow from '../components/desktop/DesktopWindow'
import styles from './Desktop.module.css'

const RESUME_URL = 'https://drive.google.com/file/d/1rRuA10-6bYInlw7D9xMJvCbD2oimB1Op/view'

const APPS = {
  about:      { title: 'About — Cheryl Lim', accent: '#6d28d9', mono: '@', render: () => <About /> },
  feedme:     { title: 'FeedMe POS',  accent: '#ff5e3a', mono: 'F', render: () => <FeedMe /> },
  pantas:     { title: 'Pantas',      accent: '#2b8fe0', mono: 'P', render: () => <Pantas /> },
  hireti:     { title: 'Hireti',      accent: '#ff5e93', mono: 'H', render: () => <Hireti /> },
  apspace:    { title: 'APSpace',     accent: '#16a34a', mono: 'A', render: () => <APSpace /> },
  wolfplanet: { title: 'Wolfplanet',  accent: '#d99412', mono: 'W', render: () => <WolfPlanet /> },
  tomo:       { title: 'Tomo',        accent: '#6d28d9', mono: 'T', render: () => <Tomo /> },
}

const DOCK = [
  { id: 'about', label: 'About', from: '#9a8cff', to: '#5b3fd6' },
  { id: 'feedme', label: 'FeedMe', from: '#ffb066', to: '#ff5e3a' },
  { id: 'pantas', label: 'Pantas', from: '#7ad3ff', to: '#2b8fe0' },
  { id: 'hireti', label: 'Hireti', from: '#ff9ec7', to: '#ff5e93' },
  { id: 'apspace', label: 'APSpace', from: '#7af0b0', to: '#16a34a' },
  { id: 'wolfplanet', label: 'Wolfplanet', from: '#fbd24b', to: '#d99412' },
  { id: 'tomo', label: 'Tomo', from: '#c4a0ff', to: '#6d28d9' },
  { sep: true },
  { id: 'mail', label: 'Mail', href: 'mailto:cheryl.wylim@outlook.com', from: '#5ec8ff', to: '#1d74e8', glyph: 'mail' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com', from: '#4aa3e8', to: '#0a66c2', glyph: 'linkedin' },
  { id: 'resume', label: 'Résumé', href: RESUME_URL, from: '#9aa0ab', to: '#4b5160', glyph: 'resume' },
]

function DockGlyph({ name }) {
  const p = { fill: 'none', stroke: '#fff', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (name === 'mail') return <svg viewBox="0 0 24 24" width="52%" height="52%"><rect x="3.5" y="5.5" width="17" height="13" rx="3" {...p} /><path d="M4.5 7.5 12 13l7.5-5.5" {...p} /></svg>
  if (name === 'linkedin') return <svg viewBox="0 0 24 24" width="50%" height="50%"><path d="M7 9.5v8M7 6.4v.05M11 17.5v-4.3a2.6 2.6 0 0 1 5.2 0v4.3M11 9.5v8" {...p} /></svg>
  if (name === 'resume') return <svg viewBox="0 0 24 24" width="50%" height="50%"><rect x="5" y="3" width="14" height="18" rx="2.5" {...p} /><path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5" {...p} /></svg>
  return null
}

function useClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 10000)
    return () => clearInterval(id)
  }, [])
  return now
}

function LockScreen({ onUnlock }) {
  const now = useClock()
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const date = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })
  return (
    <div className={styles.lock} onClick={onUnlock} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onUnlock() }}>
      <div className={styles.lockClock}>
        <span className={styles.lockDate}>{date}</span>
        <span className={styles.lockTime}>{time}</span>
      </div>
      <div className={styles.lockFoot}>
        <div className={styles.lockAvatar}>CL</div>
        <span className={styles.lockName}>Cheryl Lim</span>
        <span className={styles.lockHint}>Click to enter</span>
      </div>
    </div>
  )
}

export default function Desktop() {
  const [locked, setLocked] = useState(true)
  const [wins, setWins] = useState([])
  const zRef = useRef(20)
  const now = useClock()

  const focus = useCallback((id) => {
    zRef.current += 1
    const z = zRef.current
    setWins((ws) => ws.map((w) => (w.id === id ? { ...w, z } : w)))
  }, [])

  const openApp = useCallback((id) => {
    const app = APPS[id]
    if (!app) return
    setWins((ws) => {
      if (ws.some((w) => w.id === id)) {
        zRef.current += 1
        const z = zRef.current
        return ws.map((w) => (w.id === id ? { ...w, z, collapsed: false } : w))
      }
      const vw = window.innerWidth, vh = window.innerHeight
      const w = Math.min(1000, Math.round(vw * 0.78))
      const h = Math.min(700, Math.round(vh * 0.78))
      const n = ws.length
      zRef.current += 1
      return [...ws, {
        id, title: app.title, accent: app.accent,
        x: Math.round(vw / 2 - w / 2) + (n % 5) * 30 - 30,
        y: 64 + (n % 5) * 26,
        w, h, z: zRef.current, collapsed: false, maximized: false,
      }]
    })
  }, [])

  const closeApp = useCallback((id) => setWins((ws) => ws.filter((w) => w.id !== id)), [])
  const collapse = useCallback((id) => setWins((ws) => ws.map((w) => w.id === id ? { ...w, collapsed: !w.collapsed } : w)), [])
  const maximize = useCallback((id) => setWins((ws) => ws.map((w) => w.id === id ? { ...w, maximized: !w.maximized, collapsed: false } : w)), [])
  const move = useCallback((id, x, y) => setWins((ws) => ws.map((w) => w.id === id ? { ...w, x, y: Math.max(46, y) } : w)), [])

  const activeId = wins.reduce((top, w) => (!top || w.z > top.z ? w : top), null)?.id

  const launch = (item) => {
    if (item.href) { window.open(item.href, item.href.startsWith('http') ? '_blank' : '_self'); return }
    openApp(item.id)
  }

  const time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  const date = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <div className={styles.desktop}>
      <div className={styles.wallpaper} aria-hidden="true" />

      {locked && <LockScreen onUnlock={() => setLocked(false)} />}

      {/* Menu bar */}
      <div className={styles.menubar}>
        <div className={styles.menuLeft}>
          <span className={styles.brandMark}>✦</span>
          <button className={styles.brand} onClick={() => openApp('about')}>Cheryl Lim</button>
          <button className={styles.menuItem} onClick={() => openApp('about')}>About</button>
          <button className={styles.menuItem} onClick={() => openApp('feedme')}>Work</button>
          <a className={styles.menuItem} href="mailto:cheryl.wylim@outlook.com">Contact</a>
        </div>
        <div className={styles.menuRight}>
          <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor"><path d="M8.5 2.2c2.7 0 5.2 1 7 2.8l-1.4 1.5A7.8 7.8 0 0 0 8.5 4.3 7.8 7.8 0 0 0 2.9 6.5L1.5 5A9.9 9.9 0 0 1 8.5 2.2Z" /><path d="M8.5 5.9c1.6 0 3.1.6 4.2 1.7l-1.5 1.5A4 4 0 0 0 8.5 8a4 4 0 0 0-2.7 1.1L4.3 7.6A6 6 0 0 1 8.5 5.9Z" /><circle cx="8.5" cy="10.4" r="1.5" /></svg>
          <span className={styles.menuClock}>{date}</span>
          <span className={styles.menuClock}>{time}</span>
        </div>
      </div>

      {/* Windows */}
      {wins.map((w) => (
        <DesktopWindow
          key={w.id}
          win={w}
          active={w.id === activeId}
          onFocus={focus}
          onClose={closeApp}
          onCollapse={collapse}
          onMaximize={maximize}
          onMove={move}
        >
          {APPS[w.id].render()}
        </DesktopWindow>
      ))}

      {/* Dock */}
      <div className={styles.dockWrap}>
        <div className={styles.dock}>
          {DOCK.map((item, i) => item.sep
            ? <span key={`sep${i}`} className={styles.dockSep} />
            : (
              <button
                key={item.id}
                className={styles.dockItem}
                onClick={() => launch(item)}
                aria-label={item.label}
              >
                <span className={styles.dockTile} style={{ '--from': item.from, '--to': item.to }}>
                  <span className={styles.dockShine} aria-hidden="true" />
                  {item.glyph ? <DockGlyph name={item.glyph} /> : <span className={styles.dockMono}>{APPS[item.id]?.mono || item.label[0]}</span>}
                </span>
                <span className={styles.dockTip}>{item.label}</span>
                {wins.some((w) => w.id === item.id) && <span className={styles.dockDot} />}
              </button>
            ))}
        </div>
      </div>
    </div>
  )
}
