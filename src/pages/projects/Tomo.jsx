import { useEffect } from 'react'
import CaseStudyLayout from '../../components/CaseStudyLayout'
import styles from './Tomo.module.css'

const META = {
  client: 'Tomo.zone',
  title: 'Tomo.zone',
  subtitle: 'The next-gen merchandising solution',
  tags: ['Retail', 'Blockchain', 'Branding', 'Web Design'],
  accent: '#a36bff',
  accentDim: 'rgba(163,107,255,0.08)',
  heroBg: 'linear-gradient(135deg, #0d0618 0%, #150d2a 50%, #0d0618 100%)',
  metaItems: [
    { label: 'My Role', value: 'Web and Branding Designer — Branding, Web Design and Development, Copywriting' },
    { label: 'Collaborators', value: 'Josh Wang' },
    { label: 'Timeline', value: '7 days' },
  ],
  sections: [
    { id: 'overview',      label: 'Overview' },
    { id: 'branding',      label: 'Branding' },
    { id: 'designsystem',  label: 'Design System' },
    { id: 'design',        label: 'Final Design' },
  ],
  heroImage: '/M18aavA3BTfJjgEtPG4qnxOEpeE.webp',
  next: { slug: 'wolfplanet', title: 'WolfPlanet', sub: 'Exchange knowledge with blockchain' },
}

export default function Tomo() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <CaseStudyLayout meta={META}>

      {/* ── Overview ── */}
      <section id="overview" className={styles.section}>
        <div className="container">
          <p className="section-label">Overview</p>
          <div className={styles.overviewGrid}>
            <div>
              <h2 className={styles.sectionTitle}>Build a loyal brand community with Tomo.zone</h2>
              <p className={styles.body}>
                The website serves as the main company website for Tomo.zone — a merch agency which
                transforms design and production into a battle pass.
              </p>
              <p className={styles.body}>
                I was tasked with handling the full end-to-end scope: branding, web design and
                development, and copywriting — all delivered within 7 days.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <span className={styles.statNum}>7 days</span>
                <span className={styles.statLabel}>Full end-to-end delivery — branding, design, development, and copy</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>Battle Pass</span>
                <span className={styles.statLabel}>Unique merch model transforming design and production into a collectible experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Branding ── */}
      <section id="branding" className={styles.section}>
        <div className="container">
          <p className="section-label">Branding</p>
          <h2 className={styles.sectionTitle}>The future of gaming merch</h2>
          <p className={styles.bodyWide}>
            To incorporate the image of gaming merch production, a more cyberpunk style colour
            palette is derived, with purple as the main colour.
          </p>
          <div className={styles.dsGrid}>
            <div className={styles.dsCard} style={{ gridColumn: '1 / -1' }}>
              <div className={styles.dsCardHeader}>
                <span className={styles.dsCardNum}>01</span>
                <span className={styles.dsCardTitle}>Tomo.zone Colour Palette</span>
              </div>
              <div className={styles.colorTokens}>
                <div className={styles.colorSwatches}>
                  {[
                    { hex: '#4B5CF9', name: 'Primary' },
                    { hex: '#3540AE', name: 'Primary Shade' },
                    { hex: '#939DFB', name: 'Primary Tint' },
                    { hex: '#A24BF9', name: 'Secondary' },
                    { hex: '#7135AE', name: 'Secondary Shade' },
                    { hex: '#C793FB', name: 'Secondary Tint' },
                    { hex: '#3FFF52', name: 'Success' },
                    { hex: '#CC3232', name: 'Danger' },
                    { hex: '#FFEC3F', name: 'Warning' },
                    { hex: '#1E1E1E', name: 'Text' },
                    { hex: '#F8F8F8', name: 'Background', border: true },
                  ].map(s => (
                    <div key={s.hex} className={styles.colorSwatch}>
                      <div
                        className={styles.colorSwatchBox}
                        style={{ background: s.hex, border: s.border ? '1px solid rgba(255,255,255,0.15)' : undefined }}
                      />
                      <span className={styles.colorSwatchName}>{s.name}</span>
                      <span className={styles.colorSwatchName} style={{ opacity: 0.6 }}>{s.hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design System ── */}
      <section id="designsystem" className={styles.section}>
        <div className="container">
          <p className="section-label">Design System</p>
          <h2 className={styles.sectionTitle}>Consistent, convert</h2>
          <p className={styles.bodyWide}>
            A simple design system is made so that the website contains consistent components that
            can be reused for future improvements or content additions.
          </p>
          <div className={styles.dsCard} style={{ marginTop: 48 }}>
            <div className={styles.dsCardHeader}>
              <span className={styles.dsCardNum}>02</span>
              <span className={styles.dsCardTitle}>Components</span>
            </div>
            <div className={styles.compShowcase}>

              {/* Navbar */}
              <div className={styles.compGroup}>
                <span className={styles.compLabel}>Navigation Bar</span>
                <div className={styles.tomoNav}>
                  <span className={styles.tomoNavLogo}>Tomo.zone</span>
                  <div className={styles.tomoNavLinks}>
                    <span>What's our secret sauce?</span>
                    <span>About us</span>
                  </div>
                  <button className={styles.tomoBtnPrimary}>Make your merch ↗</button>
                </div>
              </div>

              {/* Buttons + Chips */}
              <div className={styles.compRow}>
                <div className={styles.compGroup}>
                  <span className={styles.compLabel}>Primary Button</span>
                  <button className={styles.tomoBtnPrimary}>Wait, how? ↗</button>
                </div>
                <div className={styles.compGroup}>
                  <span className={styles.compLabel}>Secondary Button</span>
                  <button className={styles.tomoBtnSecondary}>Make your merch ↗</button>
                </div>
                <div className={styles.compGroup}>
                  <span className={styles.compLabel}>Chips</span>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span className={styles.tomoChipOutline}>Design &amp; technical specs</span>
                    <span className={styles.tomoChipFilled}>Our Story</span>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className={styles.compGroup}>
                <span className={styles.compLabel}>Cards</span>
                <div className={styles.tomoCardGrid}>
                  {[
                    { icon: '🚀', title: 'From design to delivery', desc: 'Your One-Stop Merchandising Solution' },
                    { icon: '🎮', title: 'Every purchase is a battle pass', desc: 'A purchase becomes more attractive to buy and is worth more with exclusive rewards' },
                    { icon: '✏️', title: 'Autograph-able digital twin', desc: 'Provide personalised autographs to your community' },
                  ].map(c => (
                    <div key={c.title} className={styles.tomoCard}>
                      <span style={{ fontSize: 20 }}>{c.icon}</span>
                      <div className={styles.tomoCardTitle}>{c.title}</div>
                      <div className={styles.tomoCardDesc}>{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accordion */}
              <div className={styles.compGroup}>
                <span className={styles.compLabel}>Accordion</span>
                <div className={styles.tomoAccordion}>
                  <span>How we engage you?</span>
                  <span style={{ opacity: 0.5 }}>+</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Final Design ── */}
      <section id="design" className={styles.section}>
        <div className="container">
          <p className="section-label">Final Design</p>
          <h2 className={styles.sectionTitle}>Build a loyal brand community with Tomo.zone</h2>

          {[
            {
              num: '01',
              title: 'Homepage',
              desc: 'The homepage introduces Tomo.zone\'s battle pass merch model with a bold cyberpunk aesthetic — immediately communicating the brand\'s gaming-forward identity.',
              image: '/z8lkVml8z3I8ZQKavV6TnFbnc.webp',
            },
            {
              num: '02',
              title: 'About us',
              desc: 'A dedicated section that tells the Tomo.zone story — who they are, what they stand for, and how their unique merch model benefits brand communities.',
              image: '/K52hPMiPey4GmTOja7uCfwqt4.webp',
            },
            {
              num: '03',
              title: 'What is our secret sauce',
              desc: 'An engaging breakdown of Tomo.zone\'s proprietary process — how they turn designs into a collectible battle pass experience for brand communities.',
              image: '/cH1prLAD0SmISNlKHACK1w4j9jE.webp',
            },
          ].map(item => (
            <div key={item.num} className={styles.designFeature}>
              <div className={styles.designFeatureText}>
                <span className={styles.designCardNum}>{item.num}</span>
                <div className={styles.designCardTitle}>{item.title}</div>
                <div className={styles.designCardDesc}>{item.desc}</div>
              </div>
              <div className={styles.designFeatureImg}>
                {item.image
                  ? <div className={styles.designFrame}>
                      <div className={styles.designFrameBar}><span /><span /><span /></div>
                      <div className={styles.designImgWrap}>
                        <img src={item.image} alt={item.title} className={styles.designImg} />
                      </div>
                    </div>
                  : <div className={styles.designImgPlaceholder}>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <rect x="3" y="3" width="22" height="22" rx="3" stroke="rgba(163,107,255,0.35)" strokeWidth="1.2"/>
                        <circle cx="9.5" cy="9.5" r="2" stroke="rgba(163,107,255,0.35)" strokeWidth="1"/>
                        <path d="M3 18l6-5 5 5 4-4 7 6" stroke="rgba(163,107,255,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={styles.designImgLabel}>Image coming soon</span>
                    </div>
                }
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── View Website ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Preview</p>
          <h2 className={styles.sectionTitle}>Get a feel on how the solution is implemented</h2>
          <p className={styles.bodyWide}>
            Visit the official Tomo.zone website to experience the full design in action.
          </p>
          <a
            href="https://tomo.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewWebsiteBtn}
          >
            View Website ↗
          </a>
        </div>
      </section>

    </CaseStudyLayout>
  )
}
