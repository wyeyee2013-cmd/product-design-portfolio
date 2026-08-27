import { PROFILE } from '../data/about.js'
import { useFitScale, useMediaQuery } from '../hooks/useLayout.js'
import AskBox from './AskBox.jsx'
import ProjectDeck from './ProjectDeck.jsx'
import styles from './Hero.module.css'

const HEADLINE = 'Turning Complex Systems into Intuitive Products'

/** Figma node 15:1410 — the hero, authored at 1920px and zoomed as one artboard. */
export default function Hero() {
  /* the artboard is 1580px wide at scale 1; below that it zooms down smoothly */
  const [fitRef, scale] = useFitScale({ designW: 1580, min: 0.55 })
  const isNarrow = useMediaQuery('(max-width: 900px)')

  return (
    <section className={styles.hero} id="top" ref={fitRef}>
      <div className={styles.bg}>
        <img src="/assets/hero-bg.png" alt="" aria-hidden="true" />
      </div>

      {/* wordmark — part of the hero composition, not the navigation */}
      <div className={styles.wordmark}>
        <a href="#top">Cheryl Lim&reg;</a>
      </div>

      <div className={styles.stage} style={{ zoom: isNarrow ? 1 : scale }}>
        {/* availability pill */}
        <div className={styles.status}>
          <div className={styles.statusRow}>
            <div className={styles.avatar}>
              {/* same photo as the About page, so changing it once updates both */}
              <img src={PROFILE.photo} alt="Portrait of Cheryl Lim" />
            </div>
            <div className={styles.statusMeta}>
              <div className={styles.live}>
                <i className={styles.dot} />
                <span>Available for work</span>
              </div>
              <div className={styles.role}>Senior Product Designer</div>
            </div>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.headlineWrap}>
            <h1 className={styles.headline}>
              {HEADLINE.split(' ').map((word, i) => (
                <span
                  key={`${word}-${i}`}
                  className={styles.word}
                  style={{ animationDelay: `${80 + i * 55}ms` }}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>

            <div className={`${styles.tag} ${styles.tagDesign}`}>
              <div className={styles.tagBody}>
                <span className={styles.tagLabel}>Product Design</span>
                <img className={styles.tagCorner} src="/assets/chip-star-1.png" alt="" />
              </div>
              <div className={styles.tagBadge}>
                <img src="/assets/icon-design.svg" alt="" />
              </div>
            </div>

            <div className={`${styles.tag} ${styles.tagPm}`}>
              <div className={styles.tagBody}>
                <span className={styles.tagLabel}>Product Management</span>
                <img className={styles.tagCorner} src="/assets/chip-star-2.png" alt="" />
              </div>
              <div className={styles.tagBadge}>
                <img src="/assets/icon-pm.svg" alt="" />
              </div>
            </div>
          </div>

          <AskBox />
        </div>

        <div className={styles.footer}>
          <div className={styles.tagline}>
            <div className={styles.taglineTop}>
              <i className={styles.rule} />
              <p>Not just visuals.</p>
            </div>
            <div className={styles.taglineBody}>
              <p>i make digital things look alive</p>
            </div>
          </div>

          {/* the hover-to-fan deck is pointer-driven, so it is dropped on mobile */}
          {!isNarrow && <ProjectDeck />}
        </div>
      </div>
    </section>
  )
}
