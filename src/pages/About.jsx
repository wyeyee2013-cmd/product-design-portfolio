import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './About.module.css'

const SKILLS = [
  { cat: 'Design', items: ['Product Design', 'UX Research', 'Interaction Design', 'Design Systems', 'Prototyping', 'Wireframing'] },
  { cat: 'Tools', items: ['Figma', 'Protopie', 'Framer', 'Miro', 'Notion', 'Jira'] },
  { cat: 'Methods', items: ['User Interviews', 'A/B Testing', 'Usability Testing', 'Card Sorting', 'Journey Mapping', 'Design Sprints'] },
]

const EXPERIENCE = [
  {
    role: 'Senior Product Designer',
    company: 'TechScale Ventures',
    period: '2023 — Present',
    desc: 'Leading end-to-end design for B2B SaaS products. Collaborated with cross-functional teams to ship 5+ major product features, improving user retention by 34%.',
  },
  {
    role: 'Product Designer',
    company: 'DigitalCraft Studio',
    period: '2022 — 2023',
    desc: 'Designed and delivered mobile & web experiences for clients across fintech, edtech, and healthcare. Built and maintained a multi-brand design system.',
  },
  {
    role: 'UI/UX Designer',
    company: 'Nexus Digital Agency',
    period: '2021 — 2022',
    desc: 'Crafted user interfaces for e-commerce, recruitment, and wellness platforms. Conducted user research and usability testing sessions.',
  },
]

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
            <h2 className={styles.bioTitle}>A little about me</h2>
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
              kopi in KL.
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

          <div className={styles.bioCard}>
            <div className={styles.bioAvatar}>
              <div className={styles.bioAvatarInner}>
                <AvatarIllustration />
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
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={styles.skills}>
        <div className="container">
          <p className="section-label">What I Bring</p>
          <h2 className={styles.skillsTitle}>Skills & Expertise</h2>
          <div className={styles.skillsGrid}>
            {SKILLS.map(s => (
              <div key={s.cat} className={styles.skillCard}>
                <h4 className={styles.skillCat}>{s.cat}</h4>
                <div className={styles.skillItems}>
                  {s.items.map(item => (
                    <span key={item} className={styles.skillItem}>{item}</span>
                  ))}
                </div>
              </div>
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

function AvatarIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1030"/>
          <stop offset="100%" stopColor="#130a24"/>
        </linearGradient>
        <linearGradient id="logoStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c4a0ff"/>
          <stop offset="100%" stopColor="#6b28cc"/>
        </linearGradient>
        <linearGradient id="logoDot" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5cc8ff"/>
          <stop offset="100%" stopColor="#a36bff"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Background circle */}
      <circle cx="100" cy="100" r="100" fill="url(#logoBg)"/>

      {/* Subtle ring */}
      <circle cx="100" cy="100" r="82" stroke="rgba(163,107,255,0.12)" strokeWidth="1"/>
      <circle cx="100" cy="100" r="64" stroke="rgba(163,107,255,0.07)" strokeWidth="1"/>

      {/* Wordmark: stylised "CL" ligature */}
      {/* C - outer arc */}
      <path
        d="M112 66 A38 38 0 1 0 112 134"
        stroke="url(#logoStroke)"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
      />
      {/* L - vertical stem */}
      <line x1="116" y1="66" x2="116" y2="134" stroke="url(#logoStroke)" strokeWidth="9" strokeLinecap="round"/>
      {/* L - horizontal foot */}
      <line x1="116" y1="134" x2="140" y2="134" stroke="url(#logoStroke)" strokeWidth="9" strokeLinecap="round"/>

      {/* Accent dot — design touch */}
      <circle cx="140" cy="66" r="7" fill="url(#logoDot)" filter="url(#glow)"/>

      {/* Corner sparkles */}
      <circle cx="34" cy="38" r="2.5" fill="#a36bff" fillOpacity="0.5"/>
      <circle cx="166" cy="160" r="2" fill="#5cc8ff" fillOpacity="0.45"/>
      <circle cx="160" cy="44" r="1.5" fill="#c4a0ff" fillOpacity="0.4"/>
      <circle cx="40" cy="158" r="1.5" fill="#a36bff" fillOpacity="0.35"/>
    </svg>
  )
}
