import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GridCanvas from '../components/GridCanvas'
import styles from './Home.module.css'

const FEATURED = [
  {
    slug: 'feedme',
    title: 'FeedMe POS',
    subtitle: 'Restaurant point-of-sale system redesigned for speed',
    tags: ['F&B Tech', 'Product Design', 'POS System'],
    year: '2024',
    accent: '#ff8c42',
    bg: 'linear-gradient(135deg, #201208 0%, #2a1508 100%)',
    number: '01',
    image: '/Order.png',
    imageFull: true,
    comingSoon: true,
  },
  {
    slug: 'pantas',
    title: 'Pantas Configuration and Organisation Setup',
    subtitle: 'Efficiency-driven setup tool for modern teams',
    tags: ['B2B SaaS', 'UX Design', 'Design System'],
    year: '2024',
    accent: '#5cc8ff',
    bg: 'linear-gradient(135deg, #0c1a28 0%, #0f2035 100%)',
    number: '02',
    image: '/Companies.png',
    imagePosition: 'top',
  },
  {
    slug: 'hireti',
    title: 'Hireti Talent Management',
    subtitle: 'End-to-end talent acquisition reimagined',
    tags: ['HR Tech', 'Product Design', 'Research'],
    year: '2024',
    accent: '#ff7eb3',
    bg: 'linear-gradient(135deg, #1e1020 0%, #2a1035 100%)',
    number: '03',
    image: '/Match Candidate.png',
    imageFull: true,
  },
  {
    slug: 'apspace',
    title: 'APSpace Admin',
    subtitle: 'University records administration system',
    tags: ['EdTech', 'Admin Dashboard', 'Data-heavy'],
    year: '2022',
    accent: '#62e8a0',
    bg: 'linear-gradient(135deg, #0f1e18 0%, #122818 100%)',
    number: '04',
    image: '/APSpace.png',
    imageFull: true,
  },
]

const OTHER = [
  { title: 'La-La Zen', category: 'Wellness · Mobile App', year: '2024' },
  { title: 'Tomo.zone', category: 'Retail · E-commerce', year: '2023' },
  { title: 'WeGroup', category: 'Recruitment · Platform', year: '2023' },
  { title: 'aikoi.ai', category: 'Entertainment · AI Product', year: '2024' },
]

const CLIENTS = [
  { name: 'Client 1', src: 'https://framerusercontent.com/images/WUTol1uuj6HYqzJfqxUpjYkHdI.png' },
  { name: 'Client 2', src: 'https://framerusercontent.com/images/MFYtSBUIkZlYefSHjiTQCShc.png' },
  { name: 'Client 3', src: 'https://framerusercontent.com/images/XNq9IL6UIYyL9biQeZZy4rGMTw.png' },
  { name: 'Client 4', src: 'https://framerusercontent.com/images/pAkfe2GyMJat6AGLca2P54TfA2s.png?scale-down-to=512' },
  { name: 'Client 5', src: 'https://framerusercontent.com/images/I2SUfckZQ5fptbOXTnCujZaY8iw.png' },
]

function useCountUp(target, duration = 3000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(ease * target))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])
  return { ref, count }
}

export default function Home() {
  const heroRef = useRef(null)
  const years = useCountUp(4)
  const projects = useCountUp(20)
  const clients = useCountUp(12)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroBg}>
          <GridCanvas />
          <div className={styles.heroBgOrb1} />
          <div className={styles.heroBgOrb2} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={`${styles.heroAvail} animate-fadeUp delay-1`}>
            <span className={styles.availDot} />
            Open to Product Designer Roles
          </div>

          <h1 className={`${styles.heroTitle} animate-fadeUp delay-2`}>
            Turning <span className={styles.heroAccent}>creativity</span>
            <br />into reality
          </h1>

          <p className={`${styles.heroSub} animate-fadeUp delay-3`}>
            Product designer with ~4 years of experience crafting user-centered
            digital experiences that drive conversion and delight.
          </p>

          <div className={`${styles.heroCtas} animate-fadeUp delay-4`}>
            <a href="mailto:cheryl.wylim@outlook.com" className="btn-primary">
              <span>Get in touch</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className={`${styles.heroStats} animate-fadeUp delay-5`}>
            <div className={styles.stat} ref={years.ref}>
              <span className={styles.statNum}>~{years.count}</span>
              <span className={styles.statLabel}>Years of Experience</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat} ref={projects.ref}>
              <span className={styles.statNum}>{projects.count}+</span>
              <span className={styles.statLabel}>Projects Shipped</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat} ref={clients.ref}>
              <span className={styles.statNum}>{clients.count}+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
          </div>
        </div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span>scroll</span>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="section-label">Featured Work</p>
            <h2 className={styles.sectionTitle}>Selected case studies</h2>
          </div>

          <div className={styles.featuredGrid}>
            {FEATURED.map((p) => {
              const CardEl = p.comingSoon ? 'div' : Link
              const cardProps = p.comingSoon
                ? { key: p.slug, className: `${styles.featCard} ${styles.featCardDimmed}` }
                : { to: `/projects/${p.slug}`, key: p.slug, className: styles.featCard }
              return (
              <CardEl {...cardProps}>
                <div
                  className={styles.featCardVisual}
                  style={{ background: p.bg }}
                >
                  <div
                    className={styles.featCardGlow}
                    style={{ background: p.accent }}
                  />
                  {p.image
                    ? p.imageMode === 'fill'
                      ? <img
                          src={p.image}
                          alt={p.title}
                          className={styles.featCardImgFill}
                          style={{ objectPosition: p.imagePosition || 'center' }}
                        />
                      : <div className={styles.featCardFrame} style={{ '--card-accent': p.accent }}>
                          <div className={styles.featCardFrameBar}>
                            <span /><span /><span />
                          </div>
                          <img src={p.image} alt={p.title} className={p.imageFull ? styles.featCardImgFull : styles.featCardImg} style={{ objectPosition: p.imagePosition || 'center' }} />
                        </div>
                    : <div className={styles.featCardPlaceholder}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21 15 16 10 5 21"/>
                        </svg>
                        <span>Project preview</span>
                      </div>
                  }
                  <span
                    className={styles.featCardNum}
                    style={{ color: p.accent }}
                  >
                    {p.number}
                  </span>
                </div>

                <div className={styles.featCardContent}>
                  <div className={styles.featCardTags}>
                    {p.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <h3 className={styles.featCardTitle}>{p.title}</h3>
                  <p className={styles.featCardSub}>{p.subtitle}</p>
                  <div className={styles.featCardFooter}>
                    <span className={styles.featCardYear}>{p.year}</span>
                    {p.comingSoon
                      ? <span className={styles.comingSoonBadge}>Coming Soon</span>
                      : <span className={styles.featCardArrow} style={{ color: p.accent }}>View case study →</span>
                    }
                  </div>
                </div>
              </CardEl>
              )})}
          </div>
        </div>
      </section>

      {/* Other Works */}
      <section className={styles.otherSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="section-label">More Work</p>
            <h2 className={styles.sectionTitle}>Other projects</h2>
          </div>

          <div className={styles.otherGrid}>
            {OTHER.map((p, i) => (
              <div key={p.title} className={styles.otherCard}>
                <div className={styles.otherCardLeft}>
                  <span className={styles.otherNum}>0{i + 5}</span>
                  <div>
                    <h4 className={styles.otherTitle}>{p.title}</h4>
                    <p className={styles.otherCat}>{p.category}</p>
                  </div>
                </div>
                <span className={styles.otherYear}>{p.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className={styles.clientsSection}>
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Trusted By</p>
          <div className={styles.clientsMarquee}>
            <div className={styles.clientsTrack}>
              {[...CLIENTS, ...CLIENTS].map((c, i) => (
                <img key={i} src={c.src} alt={c.name} className={styles.clientLogo} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            {/* layered bg */}
            <div className={styles.ctaBgOrb1} />
            <div className={styles.ctaBgOrb2} />
            <div className={styles.ctaBgGrid} />

            {/* large decorative asterisk */}
            <span className={styles.ctaDeco} aria-hidden="true">✦</span>

            <div className={styles.ctaInner}>
              <div className={styles.ctaLeft}>
                <p className={`section-label ${styles.ctaLabel}`}>Let's Connect</p>
                <h2 className={styles.ctaTitle}>
                  Have a project<br />
                  <span className={styles.ctaTitleAccent}>in mind?</span>
                </h2>
                <p className={styles.ctaSub}>
                  I'm always open to discussing new projects, creative ideas,
                  or opportunities to be part of something great.
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

