import { useEffect, useLayoutEffect, useRef, useState } from 'react'

/** True while the media query matches. SSR-safe-ish; updates on change. */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = () => setMatches(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])

  return matches
}

/**
 * Width-only zoom for the full-bleed hero: the artboard is authored at
 * `designW` and shrinks below that so it keeps filling the viewport rather
 * than reflowing. Returns [containerRef, scale].
 */
export function useFitScale({ designW, min = 0.3 }) {
  const ref = useRef(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const measure = () => {
      const width = el.clientWidth
      if (!width) return
      setScale(Math.max(min, +Math.min(1, width / designW).toFixed(4)))
    }

    /* observe() delivers an initial callback, so there is no need to measure
       synchronously here — which would mean setState inside the effect body */
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [designW, min])

  return [ref, scale]
}

/**
 * Scales a block down until it fits its container on both axes.
 *
 * The content's natural size is read from offsetWidth/offsetHeight, which are
 * layout values and so unaffected by the transform we apply — meaning the hook
 * measures the real artboard rather than a hardcoded guess that can drift as
 * the content changes. Returns [containerRef, contentRef, scale].
 */
export function useFitContent({ min = 0.2, padding = 0, enabled = true } = {}) {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const box = containerRef.current
    const content = contentRef.current
    if (!box || !content) return undefined

    if (!enabled) return undefined

    const measure = () => {
      const availW = Math.max(1, box.clientWidth - padding * 2)
      const availH = Math.max(1, box.clientHeight - padding * 2)
      const cw = content.offsetWidth
      const ch = content.offsetHeight
      if (!cw || !ch) return
      const next = Math.min(1, availW / cw, availH / ch)
      setScale(Math.max(min, +next.toFixed(4)))
    }

    const ro = new ResizeObserver(measure)
    ro.observe(box)
    ro.observe(content)
    /* fonts land after first paint and change the content's natural size */
    document.fonts?.ready?.then(measure).catch(() => {})
    return () => ro.disconnect()
  }, [min, padding, enabled])

  return [containerRef, contentRef, enabled ? scale : 1]
}

/**
 * Counts from 0 up to `to` while `active` is true, and resets to 0 when it
 * goes false — so the tally replays each time you scroll back to the section.
 * Eases out so the last few numbers land slowly rather than snapping.
 */
export function useCountUp(to, active, { duration = 1400, delay = 0 } = {}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) {
      const id = requestAnimationFrame(() => setValue(0))
      return () => cancelAnimationFrame(id)
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const id = requestAnimationFrame(() => setValue(to))
      return () => cancelAnimationFrame(id)
    }

    let raf = 0
    let start = null
    const easeOut = (t) => 1 - Math.pow(1 - t, 3)

    const step = (now) => {
      if (start === null) start = now
      const elapsed = now - start - delay
      if (elapsed < 0) {
        raf = requestAnimationFrame(step)
        return
      }
      const t = Math.min(1, elapsed / duration)
      setValue(Math.round(easeOut(t) * to))
      if (t < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to, active, duration, delay])

  return value
}

/**
 * Flags an element as "in view" once it crosses `threshold`, and clears the
 * flag when it leaves — so a section replays its entrance each time you
 * scroll back to it. Returns [ref, inView].
 */
export function useInView({ threshold = 0.35, once = false } = {}) {
  const ref = useRef(null)
  /* with no IntersectionObserver, everything counts as visible from the start */
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    if (typeof IntersectionObserver === 'undefined') return undefined

    let fired = false
    const io = new IntersectionObserver(
      ([entry]) => {
        fired = true
        if (entry.isIntersecting) setInView(true)
        else if (!once) setInView(false)
      },
      { threshold }
    )
    io.observe(el)

    /* Safety net: the entrance animation starts from opacity 0, so if no
       callback ever arrives (a backgrounded tab suspends delivery, for
       instance) the content would stay invisible. Reveal it instead. */
    const fallback = setTimeout(() => {
      if (!fired) setInView(true)
    }, 1200)

    return () => {
      clearTimeout(fallback)
      io.disconnect()
    }
  }, [threshold, once])

  return [ref, inView]
}
