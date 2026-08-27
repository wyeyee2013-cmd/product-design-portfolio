import { useEffect, useRef } from 'react'
import { useMediaQuery } from '../hooks/useLayout.js'
import styles from './EyeCursor.module.css'

const LOOK = 0.5 /* how far a pixel of pointer travel swings the pupils */
const LOOK_MAX = 3.6 /* px — any further and the beads leave the whites */
const EASE = 0.2 /* how much of the remaining swing a frame covers */
const DECAY = 0.87 /* how quickly the eyes recentre once you stop moving */
const BLINK = 110 /* ms the lids stay shut */

const KEEN = 'a, button, [role="button"], summary, label'
const TEXT = 'input, textarea, [contenteditable="true"]'

/**
 * A pair of googly eyes standing in for the pointer. The whites track the
 * pointer exactly — no lag, so clicks still land where you aim — and the
 * pupils swing towards wherever you are heading, then drift back to centre.
 *
 * Everything runs on refs and direct DOM writes: a cursor updates every frame,
 * which is no place for React state. Pointer devices only, and the eyes step
 * aside over text fields so the caret is never obscured.
 */
export default function EyeCursor() {
  const fine = useMediaQuery('(hover: hover) and (pointer: fine)')
  const still = useMediaQuery('(prefers-reduced-motion: reduce)')
  const root = useRef(null)
  const pupils = useRef(null)

  useEffect(() => {
    if (!fine) return undefined
    const el = root.current
    const beads = pupils.current
    if (!el || !beads) return undefined

    let lastX = 0
    let lastY = 0
    let wantX = 0
    let wantY = 0
    let atX = 0
    let atY = 0
    let woken = false
    let frame = 0
    let blinkAt = 0
    let lidsAt = 0

    const clamp = (v) => Math.max(-LOOK_MAX, Math.min(LOOK_MAX, v))

    function onMove(e) {
      const { clientX: x, clientY: y } = e
      if (!woken) {
        woken = true
        lastX = x
        lastY = y
        el.classList.remove(styles.gone)
      }
      if (!still) {
        wantX = clamp((x - lastX) * LOOK)
        wantY = clamp((y - lastY) * LOOK)
      }
      lastX = x
      lastY = y
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    /* mouseover fires on every element the pointer crosses, so the two states
       are simply recomputed from whatever is under it */
    function onOver(e) {
      const node = e.target
      if (typeof node?.closest !== 'function') return
      const overText = !!node.closest(TEXT)
      el.classList.toggle(styles.hidden, overText)
      el.classList.toggle(styles.keen, !overText && !!node.closest(KEEN))
    }

    const press = () => el.classList.add(styles.press)
    const release = () => el.classList.remove(styles.press)
    const leave = () => el.classList.add(styles.gone)
    const enter = () => woken && el.classList.remove(styles.gone)

    function tick() {
      wantX *= DECAY
      wantY *= DECAY
      atX += (wantX - atX) * EASE
      atY += (wantY - atY) * EASE
      beads.setAttribute('transform', `translate(${atX.toFixed(2)} ${atY.toFixed(2)})`)
      frame = requestAnimationFrame(tick)
    }

    function blink() {
      el.classList.add(styles.blink)
      lidsAt = setTimeout(() => el.classList.remove(styles.blink), BLINK)
      blinkAt = setTimeout(blink, 3000 + Math.random() * 4000)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mousedown', press, { passive: true })
    document.addEventListener('mouseup', release, { passive: true })
    document.documentElement.addEventListener('mouseleave', leave)
    document.documentElement.addEventListener('mouseenter', enter)

    if (!still) {
      frame = requestAnimationFrame(tick)
      blinkAt = setTimeout(blink, 2600)
    }

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mousedown', press)
      document.removeEventListener('mouseup', release)
      document.documentElement.removeEventListener('mouseleave', leave)
      document.documentElement.removeEventListener('mouseenter', enter)
      cancelAnimationFrame(frame)
      clearTimeout(blinkAt)
      clearTimeout(lidsAt)
    }
  }, [fine, still])

  /* touch and coarse pointers keep their own cursor, so nothing is rendered */
  if (!fine) return null

  return (
    <div className={`${styles.cursor} ${styles.gone}`} ref={root} aria-hidden="true">
      <span className={styles.lids}>
        <svg className={styles.art} viewBox="0 0 40 27" width="40" height="27">
          {/* the outline is what keeps the whites readable on the cream sections */}
          <ellipse className={styles.white} cx="10.4" cy="13.5" rx="9.6" ry="12.4" />
          <ellipse className={styles.white} cx="29.6" cy="13.5" rx="9.6" ry="12.4" />
          <g ref={pupils}>
            <circle className={styles.pupil} cx="10.4" cy="13.5" r="4.3" />
            <circle className={styles.pupil} cx="29.6" cy="13.5" r="4.3" />
          </g>
        </svg>
      </span>
    </div>
  )
}
