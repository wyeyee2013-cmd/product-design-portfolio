import MacWindow from '../components/MacWindow'
import styles from './About.module.css'

const RESUME_URL = 'https://drive.google.com/file/d/1rRuA10-6bYInlw7D9xMJvCbD2oimB1Op/view'

export default function About() {
  return (
    <MacWindow title="About me">
      <div className={styles.inner}>

        {/* ── Profile ── */}
        <div className={styles.header}>
          <h1 className={styles.title}>About me</h1>

          <div className={styles.profileRow}>
            <img src="/profile.png" alt="Cheryl Lim" className={styles.avatar} />
            <div className={styles.infoTable}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>NAME</span>
                <span className={styles.infoValue}>Cheryl Lim</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>POSITION</span>
                <span className={styles.infoValue}>Product Designer</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>BASED IN</span>
                <span className={styles.infoValue}>Kuala Lumpur, MY</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>MAIL</span>
                <a href="mailto:cheryl.wylim@outlook.com" className={styles.infoLink}>cheryl.wylim@outlook.com</a>
              </div>
            </div>
          </div>

          <div className={styles.bio}>
            <p>With close to 4 years in product design, I've had the privilege of working across industries — from fintech and HR tech to blockchain and education. My approach is always rooted in empathy: I believe the best products are built when we deeply understand the humans who use them.</p>
            <p>I specialize in turning complex workflows into intuitive digital experiences. Whether it's a 0-to-1 product or a legacy system revamp, I bring structure, clarity, and a strong visual sensibility to every project.</p>
            <p>Outside of work, you'll find me exploring local art galleries, experimenting with generative design tools, or hunting for the best cafe spots in KL.</p>
          </div>

          <div className={styles.actions}>
            <a href="mailto:cheryl.wylim@outlook.com" className={styles.btnPrimary}>Say hello</a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className={styles.btnGhost}>View résumé ↗</a>
          </div>
        </div>

      </div>
    </MacWindow>
  )
}
