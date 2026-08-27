import { useWindows } from './windowContext.js'
import styles from './ProjectsSection.module.css'

/**
 * One tilted browser-window card. Figma node 15:1572 (D-1) and siblings —
 * 398.7px wide, paper texture behind, traffic-light title bar, and a
 * paperclip hooked over the top edge.
 */
export default function ProjectCard({ project, index = 0 }) {
  const { title, tags, thumb, clip, rotate, fit } = project
  const { openProject } = useWindows()

  return (
    <div className={styles.tilt} style={{ '--rot': `${rotate}deg`, '--i': index }}>
      <article
        className={styles.card}
        role="button"
        tabIndex={0}
        aria-label={`Open case study: ${title}`}
        onClick={() => openProject(project)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            openProject(project)
          }
        }}
      >
        <img className={styles.paper} src="/assets/card-paper.png" alt="" aria-hidden="true" />

        <div className={styles.chrome}>
          <div className={styles.titlebar}>
            <span className={styles.lights}>
              <i style={{ '--c': '#fd5d5c' }} />
              <i style={{ '--c': '#fac900' }} />
              <i style={{ '--c': '#34c75a' }} />
            </span>
          </div>

          <div className={styles.collection}>
            <div className={styles.shot}>
              <img
                src={thumb}
                alt={`${title} — project thumbnail`}
                style={{
                  height: fit.height,
                  width: fit.width,
                  top: fit.top,
                  left: fit.left,
                }}
              />
            </div>

            <div className={styles.bottom}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <div className={styles.tags}>
                {tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <img className={styles.clip} src={clip} alt="" aria-hidden="true" />
        </div>
      </article>
    </div>
  )
}
