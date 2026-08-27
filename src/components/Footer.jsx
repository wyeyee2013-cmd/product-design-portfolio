import { useInView } from '../hooks/useLayout.js'
import { useWindows } from './windowContext.js'
import styles from './Footer.module.css'

const SOCIALS = [
  { label: 'Instagram', icon: '/assets/ic-instagram.svg', href: 'https://instagram.com/' },
  { label: 'X', icon: '/assets/ic-x.svg', href: 'https://x.com/' },
  { label: 'Phone', icon: '/assets/ic-phone.svg', href: 'tel:' },
  { label: 'Email', icon: '/assets/ic-email.svg', href: 'mailto:cheryl.wylim@outlook.com' },
]

/** Figma node 15:2100 — closing panel. */
export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.25 })
  const { openAbout } = useWindows()

  return (
    <section className={styles.section} id="contact" ref={ref}>
      <img className={styles.tile} src="/assets/footer-bg.png" alt="" aria-hidden="true" />

      <div className={styles.top}>
        <div className={`${styles.panel} ${inView ? styles.in : ''}`}>
          <img className={styles.photo} src="/assets/footer-photo.png" alt="" aria-hidden="true" />

          <div className={styles.socials}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                className={styles.social}
                href={s.href}
                aria-label={s.label}
                {...(s.href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer noopener' }
                  : {})}
              >
                <img src={s.icon} alt="" />
              </a>
            ))}
          </div>

          <div className={styles.idea}>
            <div className={styles.ideaTop}>
              <i className={styles.rule} />
              <p>Have an idea?</p>
            </div>
            <p className={styles.ideaBody}>Let&rsquo;s turn it into a sharp digital experience.</p>
          </div>

          <h2 className={styles.heading}>
            <span>Let&rsquo;s Work on</span>
            <span>something</span>
            <span>Exciting!</span>
          </h2>

          <a className={styles.chat} href="mailto:cheryl.wylim@outlook.com">
            Let&rsquo;s chat
          </a>
        </div>
      </div>

      <nav className={styles.nav} aria-label="Footer">
        <span className={styles.mark}>Cheryl Lim&reg;</span>
        <div className={styles.links}>
          <a href="#work">Projects</a>
          <button type="button" onClick={openAbout}>
            About
          </button>
          <a href="mailto:cheryl.wylim@outlook.com">Contact</a>
        </div>
      </nav>
    </section>
  )
}
