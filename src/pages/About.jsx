import MacWindow from '../components/MacWindow'
import styles from './About.module.css'

const RESUME_URL = 'https://drive.google.com/file/d/1rRuA10-6bYInlw7D9xMJvCbD2oimB1Op/view'

const EXPERIENCE = [
  {
    role: 'Product Designer',
    company: 'FeedMe',
    period: '2025 — Present',
    desc: 'Leading the revamp of the core POS product.',
  },
  {
    role: 'AI Product Designer',
    company: 'Pantas',
    period: '2024 — 2025',
    desc: 'Redesigned 4 core product areas — organisation management, biodiversity tracking, financed emissions, and a design system, cutting client onboarding time by 6–7 hours and boosting team productivity by 40%.',
  },
  {
    role: 'Product Designer',
    company: 'Asia Pacific University',
    period: '2022 — 2023',
    desc: 'Led end-to-end design across 3 projects — an admin system revamp, a Thesis Management System, and an e-orientation website, driving a 40% increase in user satisfaction.',
  },
  {
    role: 'UI/UX Intern',
    company: 'Hiredly',
    period: '2022',
    desc: 'Revamped job seeker and employer dashboards through research-led design, resulting in a 30% increase in user satisfaction.',
  },
]

const SKILLS = [
  { cat: 'Design', items: ['Product Design', 'UX Research', 'Interaction Design', 'Design Systems', 'Prototyping', 'Human-AI Interaction'] },
  { cat: 'Tools', items: ['Figma', 'Framer', 'Miro', 'Notion', 'Jira', 'Cursor', 'Claude Code'] },
  { cat: 'Methods', items: ['User Interviews', 'A/B Testing', 'Usability Testing', 'Journey Mapping', 'Design Sprints', 'Prompt Engineering'] },
]

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

        {/* ── Experience ── */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.expList}>
            {EXPERIENCE.map((e, i) => (
              <div key={i} className={styles.expItem}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>{e.period}</span>
                </div>
                <div className={styles.expContent}>
                  <p className={styles.expRole}>{e.role}</p>
                  <p className={styles.expCompany}>{e.company}</p>
                  <p className={styles.expDesc}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Skills ── */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsGrid}>
            {SKILLS.map(s => (
              <div key={s.cat} className={styles.skillCard}>
                <p className={styles.skillCat}>{s.cat}</p>
                <div className={styles.skillItems}>
                  {s.items.map(item => (
                    <span key={item} className={styles.skillItem}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </MacWindow>
  )
}
