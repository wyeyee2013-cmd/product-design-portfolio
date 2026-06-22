import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './Home.module.css'

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.12, rootMargin: '0px 0px -12% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${shown ? styles.revealShown : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const FEATURED = [
  {
    slug: 'feedme',
    title: 'FeedMe POS',
    subtitle: 'Restaurant point-of-sale system redesigned for speed',
    tags: ['F&B Tech', 'Product Design', 'POS System'],
    year: '2026',
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
    year: '2025',
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
    number: '03',
    image: '/Match Candidate.png',
    imageFull: true,
  },
  {
    slug: 'apspace',
    title: 'APSpace Admin',
    subtitle: 'University records administration system',
    tags: ['EdTech', 'Admin Dashboard', 'Data-heavy'],
    year: '2023',
    number: '04',
    image: '/APSpace.png',
    imageFull: true,
  },
]

const OTHER = [
  { title: 'Wolfplanet', category: 'Entertainment · Platform', year: '2024', slug: 'wolfplanet' },
  { title: 'Tomo.zone', category: 'Retail · E-commerce', year: '2023', slug: 'tomo' },
]

const CLIENTS = [
  { name: 'Client 1', src: 'https://framerusercontent.com/images/WUTol1uuj6HYqzJfqxUpjYkHdI.png' },
  { name: 'Client 2', src: 'https://framerusercontent.com/images/MFYtSBUIkZlYefSHjiTQCShc.png' },
  { name: 'Client 3', src: 'https://framerusercontent.com/images/XNq9IL6UIYyL9biQeZZy4rGMTw.png' },
  { name: 'Client 4', src: 'https://framerusercontent.com/images/pAkfe2GyMJat6AGLca2P54TfA2s.png?scale-down-to=512' },
  { name: 'Client 5', src: 'https://framerusercontent.com/images/I2SUfckZQ5fptbOXTnCujZaY8iw.png' },
]

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.panel}>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <a
            href="mailto:cheryl.wylim@outlook.com"
            className={`${styles.announce} animate-fadeUp delay-1`}
          >
            <span className={styles.announceDot} />
            Open to Product Designer roles
            <span className={styles.announceArrow}>→</span>
          </a>

          <h1 className={`${styles.heroTitle} animate-fadeUp delay-2`}>
            Turning <em>creativity</em>
            <br />into reality
          </h1>

          <p className={`${styles.heroSub} animate-fadeUp delay-3`}>
            Product designer with ~4 years of experience crafting
            user-centered digital experiences that drive conversion and delight.
          </p>

          <div className={`${styles.heroCtas} animate-fadeUp delay-4`}>
            <a href="mailto:cheryl.wylim@outlook.com" className={styles.btnSolid}>
              Get in touch
            </a>
            <a href="#work" className={styles.btnGlass}>
              View work
            </a>
          </div>

          <a href="#work" className={`${styles.scrollHint} animate-fadeUp delay-5`} aria-label="Scroll to work">
            <span>scroll</span>
            <span className={styles.scrollLine} />
          </a>
        </section>

        {/* ── Featured Work ── */}
        <section className={styles.section} id="work">
          <div className="container">
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>Selected work</span>
              <h2 className={styles.sectionTitle}>
                Case studies, <em>crafted with care</em>
              </h2>
            </div>

            <div className={styles.featuredList}>
              {FEATURED.map((p, i) => {
                const CardEl = p.comingSoon ? 'div' : Link
                const cardCls = [
                  styles.featCard,
                  i % 2 === 1 ? styles.featCardAlt : '',
                  p.comingSoon ? styles.featCardDimmed : '',
                ].join(' ')
                const cardProps = p.comingSoon
                  ? { className: cardCls }
                  : { to: `/projects/${p.slug}`, className: cardCls }
                return (
                  <Reveal key={p.slug}>
                  <CardEl {...cardProps}>
                    <div className={styles.featVisual}>
                      <img
                        src={p.image}
                        alt={p.title}
                        className={styles.featImg}
                        style={{ objectPosition: p.imagePosition || 'center' }}
                        loading="lazy"
                      />
                      <span className={styles.featNum}>{p.number}</span>
                    </div>

                    <div className={styles.featContent}>
                      <div className={styles.featTags}>
                        {p.tags.map((t) => (
                          <span key={t} className={styles.featTag}>{t}</span>
                        ))}
                      </div>
                      <h3 className={styles.featTitle}>{p.title}</h3>
                      <p className={styles.featSub}>{p.subtitle}</p>
                      <div className={styles.featFooter}>
                        <span className={styles.featYear}>{p.year}</span>
                        {p.comingSoon
                          ? <span className={styles.featBadge}>Coming soon</span>
                          : <span className={styles.featArrow}>View case study →</span>}
                      </div>
                    </div>
                  </CardEl>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Other Works ── */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>More</span>
              <h2 className={styles.sectionTitle}>Other projects</h2>
            </div>

            <div className={styles.otherList}>
              {OTHER.map((p, i) => {
                const inner = (
                  <>
                    <span className={styles.otherNum}>0{i + 5}</span>
                    <div className={styles.otherMeta}>
                      <h4 className={styles.otherTitle}>{p.title}</h4>
                      <p className={styles.otherCat}>{p.category}</p>
                    </div>
                    <span className={styles.otherYear}>{p.year}</span>
                    <span className={styles.otherArrow}>→</span>
                  </>
                )
                return p.slug
                  ? <Link key={p.title} to={`/projects/${p.slug}`} className={styles.otherRow}>{inner}</Link>
                  : <div key={p.title} className={styles.otherRow}>{inner}</div>
              })}
            </div>
          </div>
        </section>

        {/* ── Clients ── */}
        <section className={styles.clientsSection}>
          <div className="container">
            <p className={styles.clientsLabel}>Trusted by teams at</p>
            <div className={styles.clientsMarquee}>
              <div className={styles.clientsTrack}>
                {[...CLIENTS, ...CLIENTS].map((c, i) => (
                  <img key={i} src={c.src} alt={c.name} className={styles.clientLogo} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA band ── */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <span className={styles.ctaGlow} aria-hidden="true" />
              <span className={styles.ctaEyebrow}>Let's connect</span>
              <h2 className={styles.ctaTitle}>
                Have a project <em>in mind?</em>
              </h2>
              <p className={styles.ctaSub}>
                I'm always open to discussing new projects, creative ideas,
                or opportunities to be part of something great.
              </p>
              <div className={styles.ctaActions}>
                <a href="mailto:cheryl.wylim@outlook.com" className={styles.ctaBtn}>
                  Start a conversation
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.ctaGhost}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
