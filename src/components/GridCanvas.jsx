import { useEffect, useRef } from 'react'

export default function GridCanvas() {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const CELL = 72          // slightly denser
    const DOT_RADIUS = 1.4
    const LINE_ALPHA = 0.048 // more visible lines
    const DOT_ALPHA = 0.16   // brighter dots

    let width = 0
    let height = 0
    let t = 0

    // Spotlight — faster drift, wider reach
    const spotlight = { x: 0.5, y: 0.25, vx: 0.00018, vy: 0.00024 }

    // Single gentle wave at a time
    const waves = []
    const spawnWave = () => {
      const cols = Math.ceil(width / CELL)
      const rows = Math.ceil(height / CELL)
      waves.push({
        cx: Math.floor(Math.random() * cols) * CELL,
        cy: Math.floor(Math.random() * rows) * CELL,
        t,
        speed: 60,
        maxR: Math.max(width, height) * 0.7,
      })
      if (waves.length > 2) waves.shift()
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      t += 1

      // Drift spotlight
      spotlight.x += spotlight.vx
      spotlight.y += spotlight.vy
      if (spotlight.x < 0.15 || spotlight.x > 0.85) spotlight.vx *= -1
      if (spotlight.y < 0.05 || spotlight.y > 0.65) spotlight.vy *= -1

      const spX = spotlight.x * width
      const spY = spotlight.y * height

      const cols = Math.ceil(width / CELL) + 1
      const rows = Math.ceil(height / CELL) + 1

      // Vertical lines — very faint, slight glow near spotlight
      for (let c = 0; c < cols; c++) {
        const x = c * CELL
        const dist = Math.abs(x - spX) / width
        const glow = Math.max(0, 1 - dist * 2.6) * 0.06
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.strokeStyle = `rgba(163,107,255,${LINE_ALPHA + glow})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Horizontal lines
      for (let r = 0; r < rows; r++) {
        const y = r * CELL
        const dist = Math.abs(y - spY) / height
        const glow = Math.max(0, 1 - dist * 2.6) * 0.05
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.strokeStyle = `rgba(163,107,255,${LINE_ALPHA + glow})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Intersection dots — only near spotlight for subtlety
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const ix = c * CELL
          const iy = r * CELL
          const dx = ix - spX
          const dy = iy - spY
          const dist = Math.sqrt(dx * dx + dy * dy)
          const glow = Math.max(0, 1 - dist / (CELL * 5.5))
          if (glow < 0.03) continue

          ctx.beginPath()
          ctx.arc(ix, iy, DOT_RADIUS + glow * 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(163,107,255,${DOT_ALPHA * glow * 2.4})`
          ctx.fill()
        }
      }

      // Wave — soft ripple, very low alpha
      waves.forEach(w => {
        const radius = (t - w.t) * (w.speed / 60)
        if (radius > w.maxR) return
        const progress = radius / w.maxR
        const alpha = (1 - progress) * 0.14

        for (let c = 0; c < cols; c++) {
          for (let r = 0; r < rows; r++) {
            const ix = c * CELL
            const iy = r * CELL
            const d = Math.sqrt((ix - w.cx) ** 2 + (iy - w.cy) ** 2)
            const diff = Math.abs(d - radius)
            if (diff > CELL) continue
            const dot = Math.max(0, 1 - diff / CELL)
            ctx.beginPath()
            ctx.arc(ix, iy, DOT_RADIUS * (1 + dot), 0, Math.PI * 2)
            ctx.fillStyle = `rgba(163,107,255,${dot * alpha * 4})`
            ctx.fill()
          }
        }
      })

      // Spawn wave every ~4s
      if (t % 240 === 60) spawnWave()

      rafRef.current = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    setTimeout(spawnWave, 400)

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.85,
      }}
    />
  )
}
