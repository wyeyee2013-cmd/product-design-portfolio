import { useEffect } from 'react'
import CaseStudyLayout from '../../components/CaseStudyLayout'
import styles from './FeedMe.module.css'

const META = {
  client: 'F&B Industry',
  title: 'FeedMe POS',
  subtitle: 'Restaurant point-of-sale system redesigned for speed and simplicity.',
  tags: ['Product Design', 'Interaction Design', 'F&B Tech', 'POS System'],
  accent: '#ff8c42',
  accentDim: 'rgba(255,140,66,0.08)',
  heroBg: 'linear-gradient(135deg, #201208 0%, #2a1a08 50%, #1c0e04 100%)',
  metaItems: [
    { label: 'My Role', value: 'Product Designer — UX Research, Interaction Design, Visual Design' },
    { label: 'Team', value: ['Team member — Role', 'Team member — Role'] },
    { label: 'Timeline', value: 'Timeline · Duration' },
  ],
  sections: [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution Proposal' },
    { id: 'design', label: 'Design' },
    { id: 'results', label: 'Results' },
  ],
  heroImage: '/Order.png',
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
              <h2 className={styles.sectionTitle}>Overview content coming soon</h2>
              <p className={styles.body}>
                This section will be updated with the full overview of the FeedMe POS case study,
                including the project background, goals, and scope.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <span className={styles.statNum}>—</span>
                <span className={styles.statLabel}>Stat placeholder</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>—</span>
                <span className={styles.statLabel}>Stat placeholder</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>—</span>
                <span className={styles.statLabel}>Stat placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section id="problem" className={styles.section}>
        <div className="container">
          <p className="section-label">Problem</p>
          <h2 className={styles.sectionTitle}>Problem content coming soon</h2>
          <p className={styles.bodyWide}>
            This section will outline the key challenges and pain points that the FeedMe POS
            redesign was built to solve.
          </p>
          <div className={styles.problemGrid}>
            {[1,2,3].map(n => (
              <div key={n} className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 6v5M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className={styles.problemTitle}>Problem {n}</h4>
                <p className={styles.problemDesc}>Problem description placeholder — content to be updated.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution Proposal ── */}
      <section id="solution" className={styles.section}>
        <div className="container">
          <p className="section-label">Solution Proposal</p>
          <h2 className={styles.sectionTitle}>Solution content coming soon</h2>
          <p className={styles.bodyWide}>
            This section will describe the design solutions proposed to address the identified problems.
          </p>
          <div className={styles.solutionGrid}>
            {[1,2].map(n => (
              <div key={n} className={styles.solutionCard}>
                <div className={styles.solutionAccent} style={{ background: 'linear-gradient(135deg, rgba(255,140,66,0.2), rgba(255,140,66,0.05))' }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="5" y="5" width="18" height="18" rx="3" stroke="#ff8c42" strokeWidth="1.5"/>
                    <path d="M10 14h8M14 10v8" stroke="#ff8c42" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className={styles.solutionTitle}>Solution {n}</h3>
                <p className={styles.body}>Solution description placeholder — content to be updated.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design ── */}
      <section id="design" className={styles.section}>
        <div className="container">
          <p className="section-label">Design</p>
          <h2 className={styles.sectionTitle}>Design content coming soon</h2>
          {[
            { num: '01', title: 'Design feature 1', desc: 'Design feature description placeholder — content to be updated.' },
            { num: '02', title: 'Design feature 2', desc: 'Design feature description placeholder — content to be updated.' },
            { num: '03', title: 'Design feature 3', desc: 'Design feature description placeholder — content to be updated.' },
          ].map(item => (
            <div key={item.num} className={styles.designFeature}>
              <div className={styles.designFeatureText}>
                <span className={styles.designCardNum}>{item.num}</span>
                <h4 className={styles.designCardTitle}>{item.title}</h4>
                <p className={styles.designCardDesc}>{item.desc}</p>
              </div>
              <div className={styles.designFeatureImg}>
                <div className={styles.designImgPlaceholder}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="3" y="5" width="26" height="22" rx="3" stroke="rgba(255,140,66,0.4)" strokeWidth="1.5"/>
                    <circle cx="10" cy="12" r="2.5" stroke="rgba(255,140,66,0.4)" strokeWidth="1.5"/>
                    <path d="M3 21l7-5 5 4 4-3 10 7" stroke="rgba(255,140,66,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className={styles.designImgLabel}>Image placeholder</span>
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
          <h2 className={styles.sectionTitle}>Results content coming soon</h2>
          <div className={styles.resultsGrid}>
            {['—','—','—'].map((n, i) => (
              <div key={i} className={styles.resultCard}>
                <span className={styles.resultNum}>{n}</span>
                <span className={styles.resultLabel}>Result placeholder — content to be updated.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </CaseStudyLayout>
  )
}
