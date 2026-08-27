import { STATS } from '../data/stats.js'
import { useCountUp, useFitContent, useInView, useMediaQuery } from '../hooks/useLayout.js'
import styles from './About.module.css'

/** Tallies 0 -> value whenever the section scrolls into view. */
function StatValue({ to, suffix, active, index }) {
  const n = useCountUp(to, active, { duration: 1400, delay: 200 + index * 90 })
  return (
    <div className={styles.value}>
      {/* the live region would announce every tick, so expose only the total */}
      <span aria-hidden="true">
        {n}
        {suffix}
      </span>
      <span className="srOnly">
        {to}
        {suffix}
      </span>
    </div>
  )
}

/** Figma node 15:1792 — "Hall of the Wannabe Overachiever". */
export default function About() {
  const isNarrow = useMediaQuery('(max-width: 900px)')
  const [fitRef, stageRef, scale] = useFitContent({ padding: 24, enabled: !isNarrow })
  const [viewRef, inView] = useInView({ threshold: 0.3 })

  return (
    <section className={styles.section} id="about" ref={viewRef}>
      <div className={styles.fit} ref={fitRef}>
        <div
          ref={stageRef}
          className={`${styles.stage} ${inView ? styles.in : ''}`}
          style={{ '--scale': scale }}
        >
          <div className={styles.heading}>
            <div className={styles.chip}>
              <div className={styles.chipInner}>
                <div className={styles.chipBody}>
                  <span className={styles.chipLabel}>Achievements</span>
                  <img className={styles.chipFlip} src="/assets/ab-chip-flip.svg" alt="" />
                </div>
                <div className={styles.chipIcon}>
                  <img src="/assets/ab-chip-icon.svg" alt="" />
                </div>
                <div className={styles.chipClip}>
                  <img className={styles.chipClipShadow} src="/assets/ab-clip-shadow.svg" alt="" />
                  <img src="/assets/ab-clip.svg" alt="" />
                </div>
              </div>
            </div>

            <h2 className={styles.title}>
              <span>Hall of the</span>
              <span>Wannabe Overachiever</span>
            </h2>
          </div>

          <div className={styles.stats}>
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={styles.slot}
                style={{
                  '--x': `${s.x}px`,
                  '--y': `${s.y}px`,
                  '--rot': `${s.rotate}deg`,
                  '--i': i,
                }}
              >
                <article className={styles.card}>
                  <img className={styles.corner} src="/assets/stat-corner.svg" alt="" />
                  <img className={styles.pin} src={s.pin} alt="" />
                  <div className={styles.cardBody}>
                    <StatValue to={s.value} suffix={s.suffix} active={inView} index={i} />
                    <div className={styles.text}>
                      <div className={styles.label}>{s.label}</div>
                      <p className={styles.desc}>
                        {s.lines.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
