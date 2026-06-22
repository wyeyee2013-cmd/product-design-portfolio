import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Scene.module.css'

const RESUME_URL = 'https://drive.google.com/file/d/1rRuA10-6bYInlw7D9xMJvCbD2oimB1Op/view'
const STORE_KEY = 'scene-offsets-v2'

const FEATURED = [
  { slug: 'feedme',  label: 'FeedMe POS',   image: '/feedme-icon.png',     pos: { top: '29%', left: '19%' }, size: 96,  delay: 0   },
  { slug: 'pantas',  label: 'Pantas',        image: '/pantas.png',          pos: { top: '19%', left: '76%' }, size: 90,  delay: 90  },
  { slug: 'apspace', label: 'APSpace Admin', image: '/apspace-logo.png',    pos: { top: '53%', left: '83%' }, size: 96,  delay: 180 },
  { slug: 'hireti',  label: 'Hilti',          image: '/hilti.png',           pos: { top: '67%', left: '19%' }, size: 92,  delay: 270 },
]


const DOCK = [
  { id: 'about',    label: 'About',    to:   '/about',                          glyph: 'about',    from: '#ffffff', to2: '#f2f2f2', ink: '#333' },
  { id: 'resume',   label: 'Résumé',   to:   '/notes',                          glyph: 'notes',    from: '#ffffff', to2: '#f5f2e8', ink: '#666' },
  { sep: true },
  { id: 'mail',     label: 'Email',    href: 'mailto:cheryl.wylim@outlook.com', glyph: 'mail',     from: '#62C3FB', to2: '#1A72EB', ink: '#fff' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com',            glyph: 'linkedin', from: '#0A66C2', to2: '#0A66C2', ink: '#fff' },
]

function DockGlyph({ name }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'about':
      return <svg viewBox="0 0 24 24" width="52%" height="52%"><circle cx="12" cy="8.5" r="3.4" {...p} /><path d="M5.5 19c0-3.4 3-5.6 6.5-5.6s6.5 2.2 6.5 5.6" {...p} /></svg>
    case 'mail':
      return <svg viewBox="0 0 24 24" width="54%" height="54%"><rect x="3.5" y="5.5" width="17" height="13" rx="3" {...p} /><path d="M4.5 7.5 12 13l7.5-5.5" {...p} /></svg>
    case 'linkedin':
      return <svg viewBox="0 0 24 24" width="52%" height="52%"><path d="M7 9.5v8M7 6.4v.05M11 17.5v-4.3a2.6 2.6 0 0 1 5.2 0v4.3M11 9.5v8" {...p} /></svg>
    case 'resume':
      return <svg viewBox="0 0 24 24" width="52%" height="52%"><rect x="5" y="3" width="14" height="18" rx="2.5" {...p} /><path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5" {...p} /></svg>
    default:
      return null
  }
}

function MailIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" className={styles.dockNotesIcon} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mailBg" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#62C3FB" />
          <stop offset="100%" stopColor="#1A72EB" />
        </linearGradient>
      </defs>
      <rect width="50" height="50" fill="url(#mailBg)" />
      {/* Envelope body */}
      <rect x="7" y="15" width="36" height="24" rx="2.5" fill="white" opacity="0.96" />
      {/* Envelope flap (V shape) */}
      <path d="M7 15 L25 28 L43 15Z" fill="white" opacity="0.90" />
      {/* Subtle crease line highlight */}
      <path d="M7 15 L25 28 L43 15" fill="none" stroke="rgba(100,160,240,0.3)" strokeWidth="0.6" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" className={styles.dockNotesIcon} xmlns="http://www.w3.org/2000/svg">
      <rect width="50" height="50" fill="#0A66C2" />
      {/* i — dot */}
      <circle cx="15.5" cy="14.5" r="3.2" fill="#fff" />
      {/* i — stem */}
      <rect x="12.4" y="20.5" width="6.2" height="17" rx="0.5" fill="#fff" />
      {/* n */}
      <path d="M23.5 20.5h5.8v2.4c1.2-1.8 3.2-2.9 5.4-2.9 4.2 0 6.3 2.8 6.3 7.2v10.3h-6.1V28.8c0-2.1-0.7-3.4-2.5-3.4-1.9 0-2.9 1.2-2.9 3.6v8.5h-6V20.5z" fill="#fff" />
    </svg>
  )
}

function NotesIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" className={styles.dockNotesIcon} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="50" height="50" fill="#f9f9f7" />
      <rect x="0" y="0" width="50" height="13.5" fill="#FBBF24" />
      {Array.from({ length: 18 }, (_, i) => (
        <circle key={i} cx={3 + i * 2.6} cy="13.5" r="0.85" fill="rgba(0,0,0,0.18)" />
      ))}
      <rect x="9" y="23" width="32" height="2.4" rx="1.2" fill="rgba(0,0,0,0.13)" />
      <rect x="9" y="32" width="24" height="2.4" rx="1.2" fill="rgba(0,0,0,0.10)" />
    </svg>
  )
}

function useClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 10000)
    return () => clearInterval(id)
  }, [])
  return now
}

export default function Scene() {
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)
  const [offsets, setOffsets] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {} } catch { return {} }
  })
  const [dragId, setDragId] = useState(null)
  const drag = useRef(null)
  const now = useClock()

  useEffect(() => {
    window.scrollTo(0, 0)
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setFolderOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  useEffect(() => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(offsets)) } catch { /* ignore */ }
  }, [offsets])

  const dragProps = useCallback((id, activate) => ({
    role: 'button',
    tabIndex: 0,
    onPointerDown: (e) => {
      if (e.button && e.button !== 0) return
      const cur = offsets[id] || { dx: 0, dy: 0 }
      drag.current = { id, sx: e.clientX, sy: e.clientY, bdx: cur.dx, bdy: cur.dy, moved: false }
      setDragId(id)
      try { e.currentTarget.setPointerCapture(e.pointerId) } catch { /* noop */ }
    },
    onPointerMove: (e) => {
      const d = drag.current
      if (!d || d.id !== id) return
      const ddx = e.clientX - d.sx, ddy = e.clientY - d.sy
      if (Math.abs(ddx) > 4 || Math.abs(ddy) > 4) d.moved = true
      setOffsets((o) => ({ ...o, [id]: { dx: d.bdx + ddx, dy: d.bdy + ddy } }))
    },
    onPointerUp: (e) => {
      const d = drag.current
      drag.current = null
      setDragId(null)
      try { e.currentTarget.releasePointerCapture(e.pointerId) } catch { /* noop */ }
      if (d && !d.moved) activate()
    },
    onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate() } },
  }), [offsets])

  const tileStyle = (item) => {
    const off = offsets[item.slug || item.id] || { dx: 0, dy: 0 }
    return {
      top: item.pos.top,
      left: item.pos.left,
      '--w': `${item.size}px`,
      '--delay': `${item.delay}ms`,
      '--dx': `${off.dx}px`,
      '--dy': `${off.dy}px`,
    }
  }

  const time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  const launch = (item, e) => {
    if (item.href) { e.preventDefault(); window.open(item.href, item.href.startsWith('http') ? '_blank' : '_self') }
  }

  return (
    <div className={styles.stage}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.nebula} aria-hidden="true" />

      {/* Top bar */}
      <header className={styles.top}>
        <span className={styles.wordmark}>Cheryl Lim</span>
        <span className={styles.clock}>Kuala Lumpur · {time}</span>
      </header>

      {/* Scattered, draggable thumbnails */}
      <div className={styles.scatter}>
        {FEATURED.map((p) => (
          <div
            key={p.slug}
            className={`${styles.thumb} ${mounted ? styles.thumbIn : ''} ${dragId === p.slug ? styles.dragging : ''}`}
            style={tileStyle(p)}
            aria-label={`View ${p.label} case study`}
            {...dragProps(p.slug, () => navigate(`/projects/${p.slug}`))}
          >
            <span className={styles.thumbTile}>
              <img src={p.image} alt="" className={styles.thumbImg} loading="lazy" draggable={false} />
            </span>
            <span className={styles.thumbLabel}>{p.label}</span>
          </div>
        ))}

      </div>

      {/* Centered headline */}
      <div className={`${styles.fold} ${mounted ? styles.foldIn : ''}`}>
        <span className={styles.eyebrow}>
          <span className={styles.dot} /> Open for product design roles
        </span>
        <h1 className={styles.headline}>
          Turning<br />
          creativity<br />
          into reality.
        </h1>
        <p className={styles.sub}>
          ~4 years crafting user-centered digital experiences<br />
          that drive conversion and delight.
        </p>
      </div>

      {/* Mobile list */}
      <nav className={styles.mobileList} aria-label="Projects">
        {FEATURED.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className={styles.mobileItem}>
            <img src={p.image} alt="" className={styles.mobileThumb} loading="lazy" />
            <span>{p.label}</span>
            <span className={styles.mobileArrow}>→</span>
          </Link>
        ))}
      </nav>


      {/* Dock */}
      <div className={styles.dockWrap}>
        <nav className={styles.dock} aria-label="Links">
          {DOCK.map((item, i) => {
            if (item.sep) return <span key={`sep${i}`} className={styles.dockSep} />
            const tile = (
              <span className={styles.dockTile}>
                {item.glyph === 'about'
                  ? <img src="/avatar.avif" alt="About" className={styles.dockAvatar} />
                  : item.glyph === 'notes'
                    ? <NotesIcon />
                    : item.glyph === 'linkedin'
                      ? <LinkedInIcon />
                      : item.glyph === 'mail'
                        ? <MailIcon />
                        : <DockGlyph name={item.glyph} />}
              </span>
            )
            const s = { '--from': item.from, '--to2': item.to2, '--ink': item.ink }
            const el = item.to
              ? <Link key={item.id} to={item.to} className={styles.dockItem} aria-label={item.label} style={s}>{tile}</Link>
              : <a key={item.id} href={item.href} onClick={(e) => launch(item, e)} className={styles.dockItem} aria-label={item.label} style={s}>{tile}</a>
            return (
              <div key={item.id} className={styles.dockItemWrap}>
                {el}
                <span className={styles.dockTip}>{item.label}</span>
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
