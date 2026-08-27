import { REVIEWS } from '../data/reviews.js'
import { useFitContent, useInView, useMediaQuery } from '../hooks/useLayout.js'
import styles from './Reviews.module.css'

/** Figma node 15:1947 — "What do people actually say?". */
export default function Reviews() {
  const isNarrow = useMediaQuery('(max-width: 900px)')
  const [fitRef, stageRef, scale] = useFitContent({ padding: 24, enabled: !isNarrow })
  const [viewRef, inView] = useInView({ threshold: 0.25 })

  return (
    <section className={styles.section} id="reviews" ref={viewRef}>
      <img className={styles.bg} src="/assets/reviews-bg.png" alt="" aria-hidden="true" />

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
                  <span className={styles.chipLabel}>Reviews</span>
                  <img className={styles.chipFlip} src="/assets/rv-chip-flip.svg" alt="" />
                </div>
                <div className={styles.chipIcon}>
                  <img src="/assets/rv-chip-icon.svg" alt="" />
                </div>
                <div className={styles.chipClip}>
                  <img className={styles.chipClipShadow} src="/assets/rv-clip-shadow.svg" alt="" />
                  <img src="/assets/rv-clip.svg" alt="" />
                </div>
              </div>
            </div>

            <h2 className={styles.title}>
              <span>What do people</span>
              <span>Actually say?</span>
            </h2>
          </div>

          <div className={styles.board}>
            {REVIEWS.map((r, i) => (
              <div
                key={r.name}
                className={styles.slot}
                style={{ '--x': `${r.x}px`, '--y': `${r.y}px`, '--rot': `${r.rotate}deg`, '--i': i }}
              >
                <figure className={styles.card}>
                  <img className={styles.pin} src={r.pin} alt="" aria-hidden="true" />

                  <figcaption className={styles.who}>
                    <span className={styles.name}>{r.name}</span>
                    <span className={styles.role}>{r.role}</span>
                  </figcaption>

                  <blockquote className={styles.quote}>{r.quote}</blockquote>
                  <p className={styles.body}>{r.body}</p>

                  <img className={styles.flip} src={r.flip} alt="" aria-hidden="true" />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
