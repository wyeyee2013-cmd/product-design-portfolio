import { PROJECT_ROWS } from '../data/projects.js'
import { useFitContent, useInView, useMediaQuery } from '../hooks/useLayout.js'
import ProjectCard from './ProjectCard.jsx'
import styles from './ProjectsSection.module.css'

/** Figma node 15:1515 — "Telling Stories Through Projects". */
export default function ProjectsSection() {
  const isNarrow = useMediaQuery('(max-width: 900px)')
  const [fitRef, stageRef, scale] = useFitContent({ padding: 24, enabled: !isNarrow })
  const [viewRef, inView] = useInView({ threshold: 0.25 })

  let cardIndex = 0

  return (
    <section className={styles.section} id="work" ref={viewRef}>
      <img className={styles.bg} src="/assets/projects-bg.png" alt="" aria-hidden="true" />

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
                  <span className={styles.chipLabel}>Projects</span>
                  <img className={styles.chipFlip} src="/assets/chip-flip.svg" alt="" />
                </div>
                <div className={styles.chipIcon}>
                  <img src="/assets/chip-icon-blue.svg" alt="" />
                </div>
                <div className={styles.chipClip}>
                  <img className={styles.chipClipShadow} src="/assets/clip-shadow.svg" alt="" />
                  <img src="/assets/clip-chip.svg" alt="" />
                </div>
              </div>
            </div>

            <h2 className={styles.title}>
              <span>Telling Stories </span>
              <span>Through Projects</span>
            </h2>

            <p className={styles.sub}>
              I design clean websites, apps, and brand systems
              <br />
              {' '}that help ideas look sharper, and intentional.
            </p>

            <div className={styles.buttonStack}>
              <a className={styles.cta} href="mailto:cheryl.wylim@outlook.com">
                Start a project
              </a>
              <img className={styles.ctaArrow} src="/assets/arrow.svg" alt="" aria-hidden="true" />
            </div>
          </div>

          {PROJECT_ROWS.map((row, i) => (
            <div key={`row-${i}`} className={`${styles.row} ${i === 1 ? styles.rowWide : ''}`}>
              {row.map((project) => (
                <ProjectCard key={project.title} project={project} index={cardIndex++} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
