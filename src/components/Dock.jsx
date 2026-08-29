import { useCallback, useEffect, useRef, useState } from 'react'
import { useWindows } from './windowContext.js'
import styles from './Dock.module.css'

/**
 * macOS-style dock, fixed to the bottom of the viewport.
 * Geometry (322x88, 70px icons, 8px gap, 9px padding, r20) comes from Figma
 * node 15:1504; the magnification is the macOS behaviour on top of it.
 */

const ITEMS = [
  { id: 'work', label: 'Work', icon: '/assets/dock-finder.png', href: '#work' },
  { id: 'about', label: 'About', icon: '/assets/dock-notes.png', action: 'about' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: '/assets/dock-linkedin.png',
    href: 'https://www.linkedin.com/in/cheryllimwyeyee/',
    external: true,
  },
  { id: 'mail', label: 'Email', icon: '/assets/dock-mail.png', href: 'mailto:cheryl.wylim@outlook.com' },
]

/* a restrained lift — just enough to show which icon is under the cursor */
const MAX_SCALE = 1.12
const FALLOFF = 82

export default function Dock() {
  const dockRef = useRef(null)
  const itemRefs = useRef([])
  const [scales, setScales] = useState(() => ITEMS.map(() => 1))
  const [hovered, setHovered] = useState(null)
  const [magnify, setMagnify] = useState(true)
  const { openAbout } = useWindows()

  /* respect reduced-motion: no magnification, just a plain dock */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setMagnify(!mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const reset = useCallback(() => {
    setScales(ITEMS.map(() => 1))
    setHovered(null)
  }, [])

  const handleMove = useCallback(
    (e) => {
      if (!magnify) return
      const next = itemRefs.current.map((el) => {
        if (!el) return 1
        const rect = el.getBoundingClientRect()
        const centre = rect.left + rect.width / 2
        const distance = Math.abs(e.clientX - centre)
        if (distance > FALLOFF) return 1
        /* cosine falloff — smooth at both ends, unlike a linear ramp */
        const t = 1 - distance / FALLOFF
        return 1 + (MAX_SCALE - 1) * (0.5 - Math.cos(Math.PI * t) / 2)
      })
      setScales(next)
    },
    [magnify]
  )

  return (
    <nav
      className={styles.wrap}
      aria-label="Primary"
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div className={styles.dock} ref={dockRef}>
        {ITEMS.map((item, i) => {
          const scale = scales[i]
          const isHovered = hovered === i
          return (
            <a
              key={item.id}
              className={styles.item}
              href={item.href ?? '#about'}
              ref={(el) => (itemRefs.current[i] = el)}
              style={{ '--scale': scale }}
              onMouseEnter={() => setHovered(i)}
              onFocus={() => setHovered(i)}
              onBlur={reset}
              aria-label={item.label}
              onClick={(e) => {
                if (item.action === 'about') {
                  e.preventDefault()
                  openAbout()
                }
              }}
              {...(item.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            >
              <span className={`${styles.tip} ${isHovered ? styles.tipOn : ''}`} aria-hidden="true">
                {item.label}
              </span>
              <img className={styles.icon} src={item.icon} alt="" draggable="false" />
              <span className={styles.dot} aria-hidden="true" />
            </a>
          )
        })}
      </div>
    </nav>
  )
}
