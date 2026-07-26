import { useEffect } from 'react'
import CaseStudyLayout from '../../components/CaseStudyLayout'
import styles from './FeedMe.module.css'

const META = {
  client: 'F&B Industry',
  title: 'FeedMe POS',
  subtitle: 'Rebuilding a restaurant point-of-sale for a distinctive identity, corporate appeal, and speed on the floor.',
  tags: ['Product Design', 'Interaction Design', 'F&B Tech', 'POS System'],
  accent: '#ff8c42',
  accentDim: 'rgba(255,140,66,0.08)',
  heroBg: 'linear-gradient(135deg, #201208 0%, #2a1a08 50%, #1c0e04 100%)',
  metaItems: [
    { label: 'My Role', value: 'Product Designer — UX Research, Interaction Design, Visual Design' },
    { label: 'Team', value: ['Shu Yi — Product Manager', 'King — CTO', 'Victor — Lead Developer'] },
    { label: 'Timeline', value: '6 months' },
  ],
  sections: [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution Proposal' },
    { id: 'design', label: 'Design' },
    { id: 'results', label: 'Results' },
  ],
  heroImage: '/POS Tables.png',
  next: { slug: 'pantas', title: 'Pantas Organisation Revamp', sub: 'Efficiency-driven setup tool for modern teams' },
}


export default function FeedMe() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <CaseStudyLayout meta={META}>

      {/* ── Overview ── */}
      <section id="overview" className={styles.section}>
        <div className="container">
          <p className="section-label">Overview</p>
          <div className={styles.overviewGrid}>
            <div>
              <h2 className={styles.sectionTitle}>A most-copied POS, rebuilt for identity and speed</h2>
              <p className={styles.body}>
                FeedMe POS is the point-of-sale F&amp;B teams operate through every shift — seating tables,
                taking orders, and closing bills. Over successive releases, the v7 interface became the
                industry's most-copied POS, eroding brand identity and its appeal to corporate buyers.
              </p>
              <p className={styles.body}>
                This UX/UI revamp rebuilt the three core service flows — Tables, Ordering, and Payments —
                around clarity, speed, and an ownable visual language, removing the hidden complexity that
                slowed restaurants during service.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLabel}>Core service flows rebuilt — Tables, Ordering, Payments</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>1</span>
                <span className={styles.statLabel}>Unified, ownable visual language across the product</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>v7 → v8</span>
                <span className={styles.statLabel}>Generation leap toward a corporate-ready POS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section id="problem" className={styles.section}>
        <div className="container">
          <p className="section-label">Problem</p>
          <h2 className={styles.sectionTitle}>Too easy to copy, too hard to operate</h2>
          <div className={styles.problemGrid}>

            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h4 className={styles.problemTitle}>Eroded brand identity</h4>
              <p className={styles.problemDesc}>
                The v7 interface was widely cloned across the POS industry, diluting FeedMe's
                distinctiveness and letting its visual equity transfer to competitors.
              </p>
            </div>

            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2l2.4 5.6L18 8.2 14 12l1.2 6L10 15l-5.2 3L6 12 2 8.2l5.6-.6L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className={styles.problemTitle}>Weak corporate appeal</h4>
              <p className={styles.problemDesc}>
                The dense, dated interface didn't convey the polish and reliability corporate F&amp;B chains
                expect, weakening FeedMe's position against modern alternatives.
              </p>
            </div>

            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className={styles.problemTitle}>Complexity that slowed service</h4>
              <p className={styles.problemDesc}>
                Core actions sat behind undescriptive buttons and cards, forcing staff to navigate nested
                menus mid-service and adding friction to time-critical operations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Solution Proposal ── */}
      <section id="solution" className={styles.section}>
        <div className="container">
          <p className="section-label">Solution Proposal</p>
          <h2 className={styles.sectionTitle}>An ownable identity, built around real service</h2>
          <p className={styles.bodyWide}>
            Rather than iterate on a look competitors had already copied, we established a fresh visual
            language that is unmistakably FeedMe, then rebuilt the core flows so every key action is named,
            visible, and reachable at the moment it's needed — not buried behind a card.
          </p>
          <div className={styles.solutionGrid}>

            <div className={styles.solutionCard}>
              <div className={styles.solutionAccent} style={{ background: 'linear-gradient(135deg, rgba(255,140,66,0.2), rgba(255,140,66,0.05))' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 4l2.8 6.6L24 11.2 18.6 16l1.6 7.6L14 20l-6.2 3.6L9.4 16 4 11.2l7.2-.6L14 4z" stroke="#ff8c42" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.solutionTitle}>A distinctive, ownable visual identity</h3>
              <p className={styles.body}>
                A clean, confident interface with a signature orange accent and generous spacing that
                reads as premium to corporate buyers and re-establishes a look that is distinctly FeedMe.
              </p>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionAccent} style={{ background: 'linear-gradient(135deg, rgba(255,140,66,0.2), rgba(255,140,66,0.05))' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="5" width="20" height="18" rx="3" stroke="#ff8c42" strokeWidth="1.5"/>
                  <path d="M8 11h12M8 15h9M8 19h6" stroke="#ff8c42" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className={styles.solutionTitle}>Descriptive, operation-first flows</h3>
              <p className={styles.body}>
                Plain-language labels, clear order states, and surfaced primary actions replace the
                guesswork of the old UI, letting staff move through Tables, Ordering, and Payments without
                searching for what they need.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Design ── */}
      <section id="design" className={styles.section}>
        <div className="container">
          <p className="section-label">Design</p>
          <h2 className={styles.sectionTitle}>Three core flows, redesigned for clarity and speed</h2>

          {[
            {
              num: '01',
              title: 'Tables — a live floor at a glance',
              desc: 'A visual floor plan replaces dense lists. Colour-coded states (Available, Reserved, Draft, Fired, Served) and timers let staff read the whole room instantly, while Join Tables, Edit Layout, and the open-orders panel put common actions one tap away instead of behind a menu.',
              image: '/POS Tables.png',
            },
            {
              num: '02',
              title: 'Ordering — a menu that describes itself',
              desc: 'Categories, item photos, codes, and prices are laid out plainly, with the running bill always visible on the right. Modifiers, notes, and the Fire Order action are named and in reach — cutting the taps and guesswork that slowed order entry in v7.',
              image: '/POS Ordering.png',
            },
            {
              num: '03',
              title: 'Payments — a checkout with nothing hidden',
              desc: 'The bill breakdown and the amount due sit side by side, with every payment method — Cash, QR, Card, Terminal, Member — surfaced as a clearly labelled tile. Split Payment and discounts are explicit, so closing a bill is fast and unambiguous.',
              image: '/POS Payments.png',
            },
          ].map(item => (
            <div key={item.num} className={styles.designFeature}>
              <div className={styles.designFeatureText}>
                <span className={styles.designCardNum}>{item.num}</span>
                <h4 className={styles.designCardTitle}>{item.title}</h4>
                <p className={styles.designCardDesc}>{item.desc}</p>
              </div>
              <div className={styles.designFeatureImg}>
                <div className={styles.designFrame}>
                  <div className={styles.designFrameBar}>
                    <span /><span /><span />
                  </div>
                  <img src={item.image} alt={item.title} className={styles.designImg} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Results ── */}
      <section id="results" className={styles.section}>
        <div className="container">
          <p className="section-label">Results</p>
          <h2 className={styles.sectionTitle}>A distinct identity and a faster floor</h2>
          <div className={styles.resultsGrid}>
            <div className={styles.resultCard}>
              <span className={styles.resultNum}>Distinct</span>
              <span className={styles.resultLabel}>A refreshed identity that stands apart from copycat POS systems</span>
            </div>
            <div className={styles.resultCard}>
              <span className={styles.resultNum}>Fewer taps</span>
              <span className={styles.resultLabel}>Everyday actions surfaced instead of hidden behind cards and menus</span>
            </div>
            <div className={styles.resultCard}>
              <span className={styles.resultNum}>Corporate-ready</span>
              <span className={styles.resultLabel}>A polished look built to win over enterprise F&amp;B customers</span>
            </div>
          </div>
          <p className={styles.bodyWide} style={{ marginTop: 32 }}>
            The revamp re-establishes a visual identity that is difficult to imitate and removes the hidden
            complexity that slowed the floor. Tables, Ordering, and Payments now read clearly and move
            quickly, positioning FeedMe as a POS built for corporate F&amp;B operations.
          </p>
        </div>
      </section>

    </CaseStudyLayout>
  )
}
