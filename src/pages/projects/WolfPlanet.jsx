import { useEffect } from 'react'
import CaseStudyLayout from '../../components/CaseStudyLayout'
import styles from './WolfPlanet.module.css'

const META = {
  client: 'WolfPlanet',
  title: 'WolfPlanet',
  subtitle: 'Exchange knowledge with blockchain',
  tags: ['Blockchain', 'Product Design', 'Interaction Design', 'Visual Design'],
  accent: '#fbbf24',
  accentDim: 'rgba(251,191,36,0.08)',
  heroBg: 'linear-gradient(135deg, #1a1400 0%, #2a2000 50%, #1a1400 100%)',
  metaItems: [
    { label: 'My Role', value: 'UX/UI Designer — Product Design, Interaction Design, Visual Design' },
    { label: 'Team', value: ['Celine Wong', 'Peggy Or'] },
    { label: 'Timeline', value: 'May 2024 – August 2024' },
  ],
  sections: [
    { id: 'overview',  label: 'Overview' },
    { id: 'problem',   label: 'Problem' },
    { id: 'design',    label: 'Final Design' },
    { id: 'takeaways', label: 'Key Takeaways' },
  ],
  heroImage: '/eypIYnx349XdhiCKZS3HCTRySw.avif',
  heroNoFrame: true,
  next: { slug: 'apspace', title: 'APSpace Admin', sub: 'University records administration system' },
}

export default function WolfPlanet() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <CaseStudyLayout meta={META}>

      {/* ── Overview ── */}
      <section id="overview" className={styles.section}>
        <div className="container">
          <p className="section-label">Overview</p>
          <div className={styles.overviewGrid}>
            <div>
              <h2 className={styles.sectionTitle}>Learning finance at your fingertips</h2>
              <p className={styles.body}>
                WolfPlanet is an application meant for users to exchange financial related knowledge
                in terms of stock, gold and currencies by participating in tribes. Users can purchase
                courses and NFTs with their dedicated coin.
              </p>
              <p className={styles.body}>
                I was tasked to redesign the flow and UI for the manage tribe feature, along with
                creating new design system components.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <span className={styles.statNum}>Tribes</span>
                <span className={styles.statLabel}>Community-based learning groups centred around financial topics</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>NFT + Coin</span>
                <span className={styles.statLabel}>Dedicated in-app currency for purchasing courses and digital assets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section id="problem" className={styles.section}>
        <div className="container">
          <p className="section-label">The Problem</p>
          <h2 className={styles.sectionTitle}>To foster an organised environment for tribes to share knowledge</h2>
          <p className={styles.bodyWide}>
            While social apps can connect the world together, the security factor might be a concern
            as users might abuse their power in the community, or share inappropriate content —
            which presses the need for proper regulation processes.
          </p>
          <div className={styles.problemGrid}>
            {[
              {
                title: 'Community Safety',
                desc: 'Users may abuse their power within tribes or share inappropriate content, requiring robust moderation tools.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3l6 3v4c0 3.5-2.5 6.5-6 7.5C4.5 16.5 2 13.5 2 10V6l8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
              },
              {
                title: 'High Cognitive Load',
                desc: 'Managing tribe content, members and permissions across multiple flows was complex and overwhelming for tribe owners.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
            ].map(item => (
              <div key={item.title} className={styles.problemCard}>
                <div className={styles.problemIcon}>{item.icon}</div>
                <div className={styles.problemTitle}>{item.title}</div>
                <div className={styles.problemDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div className={styles.callout}>
            <p>The Goal — to create and manage tribe content with intuitive interfaces without high cognitive load, while taking into account security factors.</p>
          </div>
        </div>
      </section>

      {/* ── Final Design ── */}
      <section id="design" className={styles.section}>
        <div className="container">
          <p className="section-label">Final Design</p>
          <h2 className={styles.sectionTitle}>Designed for explorers, built for community</h2>

          {[
            {
              num: '01',
              title: 'Embark your journey to the seven planets',
              desc: 'The homepage is aimed to provide an interesting yet intuitive space experience for users to navigate through the different planets, which revolves around different topics to be explored.',
              image: '/BBYpu0XwTVEYIroL84hNoK1to.webp',
            },
            {
              num: '02',
              title: 'Learning in WolfPlanet',
              desc: 'Users contain the freedom to create new content to be sold and bought within the community, where it is conveyed in per chapter format.',
              image: '/Pu70W1bVJPeD5tly3GP6QrEHscw.webp',
            },
            {
              num: '03',
              title: 'Connecting individuals with tribes',
              desc: 'Tribe leaders hold a special authority to handle their respective tribes, where they can moderate and manage the purpose of the tribe to ensure a safe environment.',
              image: '/sroYNGw5NaeYDVhmIVh3DuP5Pc.webp',
            },
            {
              num: '04',
              title: 'Manage your community effectively',
              desc: 'Tribe leaders can maintain the authority hierarchy of the tribe through inviting users in innovative ways such as providing a QR code card or sending notifications for the receiving user to accept their invitation.',
              image: '/YlLsfchv4qGnoK0McW87NXpp930 (1).webp',
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
                        <rect x="3" y="3" width="22" height="22" rx="3" stroke="rgba(251,191,36,0.35)" strokeWidth="1.2"/>
                        <circle cx="9.5" cy="9.5" r="2" stroke="rgba(251,191,36,0.35)" strokeWidth="1"/>
                        <path d="M3 18l6-5 5 5 4-4 7 6" stroke="rgba(251,191,36,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={styles.designImgLabel}>Image coming soon</span>
                    </div>
                }
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Key Takeaways ── */}
      <section id="takeaways" className={styles.section}>
        <div className="container">
          <p className="section-label">Key Takeaways</p>
          <h2 className={styles.sectionTitle}>What this project taught me</h2>
          <div className={styles.takeawaysGrid}>
            {[
              {
                title: 'Security shapes UX',
                desc: 'Designing for community safety isn\'t just a feature — it influences the entire information architecture and the trust users place in the platform.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3l6 3v4c0 3.5-2.5 6.5-6 7.5C4.5 16.5 2 13.5 2 10V6l8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
              },
              {
                title: 'Simplicity in complexity',
                desc: 'Financial and blockchain products carry inherent complexity. The design challenge is to surface only what the user needs at each moment, nothing more.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
              {
                title: 'Design systems scale trust',
                desc: 'Building new design system components for WolfPlanet reinforced that consistency isn\'t just aesthetic — it builds familiarity and confidence in users.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="14" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="6" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>,
              },
            ].map(t => (
              <div key={t.title} className={styles.takeawayCard}>
                <div className={styles.takeawayIcon}>{t.icon}</div>
                <div className={styles.takeawayTitle}>{t.title}</div>
                <div className={styles.takeawayDesc}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </CaseStudyLayout>
  )
}
