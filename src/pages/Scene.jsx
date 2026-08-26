import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Scene.module.css'

const STORE_KEY = 'scene-offsets-v3'

const FEATURED = [
  { slug: 'feedme',  label: 'FeedMe POS',   image: '/POS Tables.png',      iconImg: '/feedme-icon.png',  tags: ['Product Design', 'Figma', '2024'], pos: { top: '40%', left: '15%' }, rot: -4, delay: 0   },
  { slug: 'apspace', label: 'APSpace Admin', image: '/APSpace.png',         iconImg: '/apspace-logo.png', tags: ['UX/UI Design',   'Figma', '2022'], pos: { top: '16%', left: '72%' }, rot: 3,  delay: 90  },
  { slug: 'hireti',  label: 'Hireti',        image: '/Match Candidate.png', iconImg: '/hilti.png',        tags: ['Product Design', 'Figma', '2024'], pos: { top: '62%', left: '76%' }, rot: -2, delay: 180 },
  { slug: 'pantas',  label: 'Pantas',        image: '/Companies.png',       iconImg: '/pantas.png',       tags: ['UX/UI Design',   'Figma', '2024'], pos: { top: '65%', left: '20%' }, rot: 3,  delay: 270 },
]

const DOCK = [
  { id: 'about',    label: 'About',    to:   '/about',                          glyph: 'about'    },
  { id: 'resume',   label: 'Résumé',   to:   '/notes',                          glyph: 'notes'    },
  { sep: true },
  { id: 'mail',     label: 'Email',    href: 'mailto:cheryl.wylim@outlook.com', glyph: 'mail'     },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com',            glyph: 'linkedin' },
]

const TALKS_FOLDER = { id: 'talks', label: 'Talks', pos: { top: '40%', left: '48%' }, delay: 360 }

const TALKS = [
  { id: 1, title: 'Add your talk title', event: 'Conference / Event name', date: '2024', link: null },
]

function PaperclipIcon() {
  return (
    <svg className={styles.paperclip} viewBox="0 0 28 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 68 L14 22 C14 10 24 10 24 22 L24 56 C24 66 4 66 4 54 L4 24"
        stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round" fill="none"
      />
    </svg>
  )
}

function TalksFolderIcon({ styles: s, uid = 'tff' }) {
  const b = `${uid}b`
  const f = `${uid}f`
  return (
    <span className={s.macFolderTile}>
      <svg viewBox="0 0 100 84" fill="none" xmlns="http://www.w3.org/2000/svg"
           style={{ width: '94%', height: 'auto', display: 'block' }}>
        <defs>
          <linearGradient id={b} x1="50" y1="0" x2="50" y2="84" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#42B2EB" />
            <stop offset="100%" stopColor="#2494D4" />
          </linearGradient>
          <linearGradient id={f} x1="50" y1="22" x2="50" y2="84" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#90D8FC" />
            <stop offset="100%" stopColor="#62C3F5" />
          </linearGradient>
        </defs>
        <path d="M 2 80 Q 2 84 6 84 L 94 84 Q 98 84 98 80 L 98 26 Q 98 22 94 22 L 44 22 C 40 22 32 6 34 6 L 6 6 Q 2 6 2 10 L 2 80 Z" fill={`url(#${b})`} />
        <path d="M 2 22 L 98 22 L 98 79 Q 98 84 92 84 L 8 84 Q 2 84 2 79 Z" fill={`url(#${f})`} />
        <rect x="2" y="22" width="96" height="8" fill="rgba(255,255,255,0.18)" />
      </svg>
    </span>
  )
}

function DockGlyph({ name }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'about':   return <svg viewBox="0 0 24 24" width="52%" height="52%"><circle cx="12" cy="8.5" r="3.4" {...p} /><path d="M5.5 19c0-3.4 3-5.6 6.5-5.6s6.5 2.2 6.5 5.6" {...p} /></svg>
    case 'mail':    return <svg viewBox="0 0 24 24" width="54%" height="54%"><rect x="3.5" y="5.5" width="17" height="13" rx="3" {...p} /><path d="M4.5 7.5 12 13l7.5-5.5" {...p} /></svg>
    case 'linkedin':return <svg viewBox="0 0 24 24" width="52%" height="52%"><path d="M7 9.5v8M7 6.4v.05M11 17.5v-4.3a2.6 2.6 0 0 1 5.2 0v4.3M11 9.5v8" {...p} /></svg>
    case 'resume':  return <svg viewBox="0 0 24 24" width="52%" height="52%"><rect x="5" y="3" width="14" height="18" rx="2.5" {...p} /><path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5" {...p} /></svg>
    default: return null
  }
}

function MailIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" className={styles.dockNotesIcon} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mailBg2" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#62C3FB" />
          <stop offset="100%" stopColor="#1A72EB" />
        </linearGradient>
      </defs>
      <rect width="50" height="50" fill="url(#mailBg2)" />
      <rect x="7" y="15" width="36" height="24" rx="2.5" fill="white" opacity="0.96" />
      <path d="M7 15 L25 28 L43 15Z" fill="white" opacity="0.90" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" className={styles.dockNotesIcon} xmlns="http://www.w3.org/2000/svg">
      <rect width="50" height="50" fill="#0A66C2" />
      <circle cx="15.5" cy="14.5" r="3.2" fill="#fff" />
      <rect x="12.4" y="20.5" width="6.2" height="17" rx="0.5" fill="#fff" />
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
  const [folderOpen, setFolderOpen] = useState(false)

  // Custom cursor
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [cursorHover, setCursorHover] = useState(false)

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

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

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
      '--delay': `${item.delay}ms`,
      '--dx': `${off.dx}px`,
      '--dy': `${off.dy}px`,
      '--rot': `${item.rot || 0}deg`,
    }
  }

  const time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })

  const launch = (item, e) => {
    if (item.href) { e.preventDefault(); window.open(item.href, item.href.startsWith('http') ? '_blank' : '_self') }
  }

  return (
    <div className={styles.stage}>
      {/* Sky-to-grass background */}
      <div className={styles.bg} aria-hidden="true" />

      {/* Custom cursor */}
      <div
        className={`${styles.cursor} ${cursorHover ? styles.cursorHover : ''}`}
        style={{ '--cx': `${cursor.x}px`, '--cy': `${cursor.y}px` }}
        aria-hidden="true"
      />

      {/* Top bar */}
      <header className={styles.top}>
        <span className={styles.wordmark}>Cheryl Lim®</span>
        <span className={styles.clock}>Kuala Lumpur · {time}</span>
      </header>

      {/* Scattered draggable polaroid cards */}
      <div className={styles.scatter}>
        {FEATURED.map((p) => (
          <div
            key={p.slug}
            className={`${styles.thumb} ${mounted ? styles.thumbIn : ''} ${dragId === p.slug ? styles.dragging : ''}`}
            style={tileStyle(p)}
            aria-label={`View ${p.label} case study`}
            onMouseEnter={() => setCursorHover(true)}
            onMouseLeave={() => setCursorHover(false)}
            {...dragProps(p.slug, () => navigate(`/projects/${p.slug}`))}
          >
            <div className={styles.card}>
              <PaperclipIcon />
              {/* macOS window chrome */}
              <div className={styles.cardChrome}>
                <div className={styles.cardLights}>
                  <span className={`${styles.cardLight} ${styles.lightRed}`} />
                  <span className={`${styles.cardLight} ${styles.lightYellow}`} />
                  <span className={`${styles.cardLight} ${styles.lightGreen}`} />
                </div>
              </div>
              {/* Screenshot */}
              <div className={styles.cardImg}>
                <img src={p.image} alt="" draggable={false} />
              </div>
              {/* Footer */}
              <div className={styles.cardInfo}>
                <span className={styles.cardName}>{p.label}</span>
                <div className={styles.cardTags}>
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Talks folder */}
        <div
          className={`${styles.thumb} ${styles.thumbFolder} ${mounted ? styles.thumbIn : ''} ${dragId === 'talks' ? styles.dragging : ''}`}
          style={tileStyle(TALKS_FOLDER)}
          aria-label="View talks"
          onMouseEnter={() => setCursorHover(true)}
          onMouseLeave={() => setCursorHover(false)}
          {...dragProps('talks', () => setFolderOpen(true))}
        >
          <TalksFolderIcon styles={styles} uid="tff0" />
          <span className={styles.thumbLabel}>Talks</span>
        </div>
      </div>

      {/* Centered headline */}
      <div className={`${styles.fold} ${mounted ? styles.foldIn : ''}`}>
        <span className={styles.eyebrow}>
          <span className={styles.dot} /> Open for product design roles
        </span>
        <h1 className={styles.headline}>
          <span className={styles.headlineLight}>Turning complex</span><br />
          <span className={styles.headlineBold}>systems into</span><br />
          <span className={styles.headlineItalic}>intuitive products.</span>
        </h1>
        <p className={styles.sub}>
          ~4 years crafting user-centered digital experiences<br />
          that drive conversion and delight.
        </p>
      </div>

      {/* Icon grid — tablet + mobile */}
      <div className={styles.iconGrid}>
        {FEATURED.map((p) => (
          <div
            key={p.slug}
            className={styles.gridItem}
            onClick={() => navigate(`/projects/${p.slug}`)}
            role="button"
            tabIndex={0}
            aria-label={`View ${p.label} case study`}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/projects/${p.slug}`) }}
          >
            <span className={styles.thumbTile}>
              <img src={p.iconImg} alt="" className={styles.thumbImg} loading="lazy" draggable={false} />
            </span>
            <span className={styles.thumbLabel}>{p.label}</span>
          </div>
        ))}
        <div
          className={styles.gridItem}
          onClick={() => setFolderOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="View talks"
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setFolderOpen(true) }}
        >
          <TalksFolderIcon styles={styles} uid="tff1" />
          <span className={styles.thumbLabel}>Talks</span>
        </div>
      </div>

      {/* Talks panel */}
      {folderOpen && (
        <div className={styles.folderOverlay} onClick={() => setFolderOpen(false)}>
          <div className={styles.talksPanel} onClick={e => e.stopPropagation()}>
            <div className={styles.folderPanelHead}>
              <h2>Talks</h2>
              <button className={styles.folderClose} onClick={() => setFolderOpen(false)} aria-label="Close">×</button>
            </div>
            <div className={styles.talksEmpty}>
              <svg viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 48, height: 40 }}>
                <path d="M 1 36 Q 1 39 4 39 L 44 39 Q 47 39 47 36 L 47 14 Q 47 11 44 11 L 22 11 C 21 11 20 9 19.5 7 L 18 4 Q 17.5 2 16 2 L 4 2 Q 1 2 1 5 Z" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
                <path d="M 1 13 L 47 13" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              </svg>
              <span className={styles.talksEmptyTitle}>Work in progress</span>
              <span className={styles.talksEmptyDesc}>Talks will appear here soon</span>
            </div>
          </div>
        </div>
      )}

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
            const el = item.to
              ? <Link key={item.id} to={item.to} className={styles.dockItem} aria-label={item.label}>{tile}</Link>
              : <a key={item.id} href={item.href} onClick={(e) => launch(item, e)} className={styles.dockItem} aria-label={item.label}>{tile}</a>
            return (
              <div key={item.id} className={styles.dockItemWrap}
                   onMouseEnter={() => setCursorHover(true)}
                   onMouseLeave={() => setCursorHover(false)}>
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
