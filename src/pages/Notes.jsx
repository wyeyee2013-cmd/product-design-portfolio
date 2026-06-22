import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Notes.module.css'

const NOTES = [
  {
    id: 'experience',
    title: 'Experience',
    preview: 'Product Designer · FeedMe...',
    date: 'Jun 2025',
    content: (
      <>
        <div className={styles.entry}>
          <p className={styles.entryHeader}>Product Designer · FeedMe, Kuala Lumpur · 2025 — Present</p>
          <ul>
            <li>Leading the end-to-end revamp of the core POS product</li>
            <li>Defining design system foundations and component library</li>
            <li>Collaborating closely with engineering and product on feature releases</li>
          </ul>
        </div>
        <div className={styles.entry}>
          <p className={styles.entryHeader}>AI Product Designer · Pantas, Kuala Lumpur · 2024 — 2025</p>
          <ul>
            <li>Redesigned 4 core product areas — organisation management, biodiversity tracking, financed emissions, and a design system</li>
            <li>Cut client onboarding time by 6–7 hours and boosted team productivity by 40%</li>
            <li>Pioneered AI-assisted design workflows using prompt engineering</li>
          </ul>
        </div>
        <div className={styles.entry}>
          <p className={styles.entryHeader}>Product Designer · Asia Pacific University · 2022 — 2023</p>
          <ul>
            <li>Led end-to-end design across 3 projects — admin system revamp, Thesis Management System, and e-orientation website</li>
            <li>Drove a 40% increase in user satisfaction and a 4/5 overall rating</li>
            <li>Conducted user research, usability testing, and stakeholder workshops</li>
          </ul>
        </div>
        <div className={styles.entry}>
          <p className={styles.entryHeader}>UI/UX Intern · Hiredly · 2022</p>
          <ul>
            <li>Revamped job seeker and employer dashboards through research-led design</li>
            <li>Delivered personas, user flows, and wireframes</li>
            <li>Resulted in a 30% increase in user satisfaction</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'skills',
    title: 'Skills',
    preview: 'Product Design · UX Research...',
    date: 'Jun 2025',
    content: (
      <>
        <div className={styles.entry}>
          <p className={styles.entryHeader}>Design</p>
          <ul>
            <li>Product Design</li>
            <li>UX Research</li>
            <li>Interaction Design</li>
            <li>Design Systems</li>
            <li>Prototyping</li>
            <li>Human-AI Interaction</li>
          </ul>
        </div>
        <div className={styles.entry}>
          <p className={styles.entryHeader}>Tools</p>
          <ul>
            <li>Figma</li>
            <li>Framer</li>
            <li>Miro</li>
            <li>Notion</li>
            <li>Jira</li>
            <li>Cursor · Claude Code · Visual Studio Code</li>
          </ul>
        </div>
        <div className={styles.entry}>
          <p className={styles.entryHeader}>Methods</p>
          <ul>
            <li>User Interviews</li>
            <li>A/B Testing</li>
            <li>Usability Testing</li>
            <li>Card Sorting</li>
            <li>Journey Mapping</li>
            <li>Design Sprints</li>
            <li>Prompt Engineering</li>
          </ul>
        </div>
      </>
    ),
  },
]

export default function Notes() {
  const navigate = useNavigate()
  const [active, setActive] = useState('experience')
  const current = NOTES.find(n => n.id === active)

  return (
    <div className={styles.stage}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.nebula} aria-hidden="true" />

      <div className={styles.window}>
        {/* Title bar */}
        <div className={styles.titleBar}>
          <div className={styles.lights}>
            <button className={`${styles.light} ${styles.red}`} onClick={() => navigate('/')} aria-label="Close" />
            <span className={`${styles.light} ${styles.yellow}`} />
            <span className={`${styles.light} ${styles.green}`} />
          </div>
          <span className={styles.titleText}>Notes</span>
        </div>

        {/* Two-panel body */}
        <div className={styles.body}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {NOTES.map(n => (
              <button
                key={n.id}
                className={`${styles.noteItem} ${active === n.id ? styles.noteItemActive : ''}`}
                onClick={() => setActive(n.id)}
              >
                <span className={styles.noteTitle}>{n.title}</span>
                <span className={styles.noteMeta}>{n.date} &nbsp; {n.preview}</span>
              </button>
            ))}
          </aside>

          {/* Content */}
          <div className={styles.content}>
            <p className={styles.timestamp}>Cheryl Lim · Portfolio</p>
            <h1 className={styles.contentTitle}>{current.title}</h1>
            <div className={styles.contentBody}>{current.content}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
