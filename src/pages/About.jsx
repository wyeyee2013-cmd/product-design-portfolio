import { useEffect, useRef, useCallback } from 'react'
import avatar from '../assets/avatar.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './About.module.css'

const SKILLS = [
  { cat: 'Design', items: ['Product Design', 'UX Research', 'Interaction Design', 'Design Systems', 'Prototyping', 'HUman-AI Interaction'] },
  { cat: 'Tools', items: ['Figma', 'Framer', 'Miro', 'Notion', 'Jira', 'Cursor', 'Claude Code', 'Visual Studio Code'] },
  { cat: 'Methods', items: ['User Interviews', 'A/B Testing', 'Usability Testing', 'Card Sorting', 'Journey Mapping', 'Design Sprints', 'Prompt Engineering'] },
]

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
    period: '2024 - 2025',
    desc: 'Redesigned 4 core product areas — organisation management, biodiversity tracking, financed emissions, and a design system, cutting client onboarding time by 6–7 hours and boosting team productivity by 40%.',
  },
  {
    role: 'Product Designer',
    company: 'Asia Pacific University',
    period: '2022 — 2023',
    desc: 'Led end-to-end design across 3 projects — an admin system revamp, a Thesis Management System, and an e-orientation website, driving a 40% increase in user satisfaction and a 4/5 overall rating.',
  },
  {
    role: 'UI/UX Intern',
    company: 'Hiredly',
    period: '2022',
    desc: 'Revamped job seeker and employer dashboards through research-led design — including personas, user flows, and wireframes, resulting in a 30% increase in user satisfaction.',
  },
]

function TiltCard({ className, children }) {
  const ref = useRef(null)
  const frameRef = useRef(null)

  const onMouseMove = useCallback((e) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    frameRef.current = requestAnimationFrame(() => {
      const el = ref.current
      if (!el) return
      const { left, top, width, height } = el.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      el.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.02,1.02,1.02)`
    })
  }, [])

  const onMouseLeave = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    const el = ref.current
    if (el) el.style.transform = ''
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: 'transform 0.15s ease', willChange: 'transform' }}
    >
      {children}
    </div>
  )
}

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.page}>
      <Navbar />

      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerBg}>
          <div className={styles.headerOrb} />
        </div>
        <div className={`container ${styles.headerInner}`}>
          <div className={`animate-fadeUp delay-1`}>
            <p className="section-label">About Me</p>
          </div>
          <h1 className={`${styles.headerTitle} animate-fadeUp delay-2`}>
            Designer with a passion for
            <span className={styles.accent}> meaningful</span> experiences
          </h1>
          <p className={`${styles.headerSub} animate-fadeUp delay-3`}>
            Hi, I'm Cheryl — a product designer based in Kuala Lumpur, Malaysia.
            I bridge the gap between user needs and business goals through
            thoughtful, research-backed design.
          </p>
        </div>
      </section>

      {/* Bio + Photo */}
      <section className={styles.bio}>
        <div className={`container ${styles.bioInner}`}>
          <div className={styles.bioText}>
            <h2 className={styles.bioTitle}>Designing with empathy, building with intent</h2>
            <p className={styles.bioPara}>
              With close to 4 years in product design, I've had the privilege of
              working across industries — from fintech and HR tech to blockchain
              and education. My approach is always rooted in empathy: I believe
              the best products are built when we deeply understand the humans
              who use them.
            </p>
            <p className={styles.bioPara}>
              I specialize in turning complex workflows into intuitive digital
              experiences. Whether it's a 0-to-1 product or a legacy system
              revamp, I bring structure, clarity, and a strong visual sensibility
              to every project.
            </p>
            <p className={styles.bioPara}>
              Outside of work, you'll find me exploring local art galleries,
              experimenting with generative design tools, or hunting for the best
              cafe spots in KL.
            </p>
            <div className={styles.bioActions}>
              <a href="mailto:cheryl.wylim@outlook.com" className="btn-primary">
                <span>Say hello</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-ghost">
                LinkedIn ↗
              </a>
            </div>
          </div>

          <TiltCard className={styles.bioCard}>
            <div className={styles.bioAvatar}>
              <div className={styles.bioAvatarInner}>
                <img src={avatar} alt="Cheryl Lim" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', borderRadius: 'inherit' }} />
              </div>
              <div className={styles.bioAvatarGlow} />
            </div>
            <div className={styles.bioInfo}>
              <div className={styles.bioInfoRow}>
                <span className={styles.bioInfoLabel}>Based in</span>
                <span className={styles.bioInfoValue}>Kuala Lumpur, MY</span>
              </div>
              <div className={styles.bioInfoRow}>
                <span className={styles.bioInfoLabel}>Experience</span>
                <span className={styles.bioInfoValue}>~4 Years</span>
              </div>
              <div className={styles.bioInfoRow}>
                <span className={styles.bioInfoLabel}>Speciality</span>
                <span className={styles.bioInfoValue}>Product & UX</span>
              </div>
              <div className={styles.bioInfoRow}>
                <span className={styles.bioInfoLabel}>Email</span>
                <a href="mailto:cheryl.wylim@outlook.com" className={styles.bioInfoLink}>
                  cheryl.wylim@outlook.com
                </a>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Skills */}
      <section className={styles.skills}>
        <div className="container">
          <p className="section-label">What I Bring</p>
          <h2 className={styles.skillsTitle}>Skills & Expertise</h2>
          <div className={styles.skillsGrid}>
            {SKILLS.map(s => (
              <TiltCard key={s.cat} className={styles.skillCard}>
                <h4 className={styles.skillCat}>{s.cat}</h4>
                <div className={styles.skillItems}>
                  {s.items.map(item => (
                    <span key={item} className={styles.skillItem}>{item}</span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className={styles.experience}>
        <div className="container">
          <p className="section-label">Career Path</p>
          <h2 className={styles.expTitle}>Work Experience</h2>
          <div className={styles.expList}>
            {EXPERIENCE.map((e, i) => (
              <div key={i} className={styles.expItem}>
                <div className={styles.expLeft}>
                  <div className={styles.expDot} />
                  {i < EXPERIENCE.length - 1 && <div className={styles.expLine} />}
                </div>
                <div className={styles.expContent}>
                  <div className={styles.expHeader}>
                    <div>
                      <h3 className={styles.expRole}>{e.role}</h3>
                      <p className={styles.expCompany}>{e.company}</p>
                    </div>
                    <span className={styles.expPeriod}>{e.period}</span>
                  </div>
                  <p className={styles.expDesc}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume */}
      <section className={styles.resume}>
        <div className="container">
          <div className={styles.resumeBox}>
            <div className={styles.resumeLeft}>
              <div className={styles.resumeIcon}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="4" y="2" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 7h8M7 11h8M7 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className={styles.resumeTitle}>Download my resume</h3>
                <p className={styles.resumeSub}>Feel free to download my resume and have a look!</p>
              </div>
            </div>
            <div className={styles.resumeActions}>
              <a href="https://drive.google.com/file/d/1rRuA10-6bYInlw7D9xMJvCbD2oimB1Op/view" target="_blank" rel="noreferrer" className="btn-primary">
                <span>View Resume</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaBgOrb1} />
            <div className={styles.ctaBgOrb2} />
            <div className={styles.ctaBgGrid} />
            <span className={styles.ctaDeco} aria-hidden="true">✦</span>

            <div className={styles.ctaInner}>
              <div className={styles.ctaLeft}>
                <p className={`section-label ${styles.ctaLabel}`}>Let's Connect</p>
                <h2 className={styles.ctaTitle}>
                  Ready to<br />
                  <span className={styles.ctaTitleAccent}>collaborate?</span>
                </h2>
                <p className={styles.ctaSub}>
                  I'm currently open to new opportunities and exciting product challenges.
                </p>
              </div>

              <div className={styles.ctaRight}>
                <a href="mailto:cheryl.wylim@outlook.com" className={styles.ctaEmailLink}>
                  <span className={styles.ctaEmailIcon}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M2 7l7 4 7-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className={styles.ctaEmailText}>cheryl.wylim@outlook.com</span>
                </a>

                <div className={styles.ctaDivider} />

                <div className={styles.ctaActions}>
                  <a href="mailto:cheryl.wylim@outlook.com" className="btn-primary">
                    <span>Start a conversation</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.ctaLinkedIn}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M4 6.5v5M4 4.5v.01M7 11.5V9a2 2 0 014 0v2.5M7 6.5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

