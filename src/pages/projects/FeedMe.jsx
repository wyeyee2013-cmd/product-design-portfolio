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
  heroVisual: <FeedMeHero />,
  next: { slug: 'pantas', title: 'Pantas Organisation Revamp', sub: 'Efficiency-driven setup tool for modern teams' },
}

function FeedMeHero() {
  return (
    <svg viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '86%', position: 'relative', zIndex: 1 }}>

      {/* Left panel — order summary */}
      <rect x="60" y="40" width="280" height="320" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <rect x="60" y="40" width="280" height="44" rx="14" fill="rgba(255,255,255,0.05)"/>
      <rect x="80" y="54" width="96" height="10" rx="4" fill="rgba(255,255,255,0.12)"/>
      <rect x="298" y="50" width="28" height="18" rx="9" fill="rgba(255,140,66,0.25)" stroke="rgba(255,140,66,0.4)" strokeWidth="0.8"/>
      <rect x="303" y="55" width="18" height="6" rx="3" fill="rgba(255,140,66,0.8)"/>

      {/* Order items */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="76" y={100+i*54} width="248" height="42" rx="9"
            fill={i===0?'rgba(255,140,66,0.07)':'rgba(255,255,255,0.025)'}
            stroke={i===0?'rgba(255,140,66,0.2)':'rgba(255,255,255,0.055)'} strokeWidth="0.8"/>
          <rect x="88" y={112+i*54} width={[80,68,88,72][i]} height="8" rx="4" fill="rgba(255,255,255,0.12)"/>
          <rect x="88" y={124+i*54} width={[48,56,40,52][i]} height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
          <rect x="286" y={113+i*54} width="26" height="8" rx="4"
            fill={i===0?'rgba(255,140,66,0.5)':'rgba(255,255,255,0.08)'}/>
        </g>
      ))}

      {/* Total bar */}
      <rect x="76" y="322" width="248" height="28" rx="8" fill="rgba(255,140,66,0.15)" stroke="rgba(255,140,66,0.3)" strokeWidth="0.8"/>
      <rect x="88" y="330" width="52" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
      <rect x="286" y="330" width="30" height="8" rx="4" fill="rgba(255,140,66,0.8)"/>

      {/* Middle divider / connector */}
      <line x1="360" y1="200" x2="380" y2="200" stroke="rgba(255,140,66,0.25)" strokeWidth="1.5" strokeDasharray="3 3"/>

      {/* Right panel — menu grid */}
      <rect x="390" y="40" width="450" height="320" rx="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.055)" strokeWidth="1"/>
      <rect x="390" y="40" width="450" height="44" rx="14" fill="rgba(255,255,255,0.04)"/>

      {/* Category tabs */}
      {['All', 'Mains', 'Sides', 'Drinks'].map((tab, ti) => (
        <g key={tab}>
          <rect x={406+ti*68} y={52} width={60} height={20} rx="10"
            fill={ti===0?'rgba(255,140,66,0.25)':'rgba(255,255,255,0.04)'}
            stroke={ti===0?'rgba(255,140,66,0.45)':'rgba(255,255,255,0.06)'} strokeWidth="0.8"/>
          <rect x={416+ti*68} y={58} width={[20,28,22,32][ti]} height="6" rx="3"
            fill={ti===0?'rgba(255,140,66,0.9)':'rgba(255,255,255,0.1)'}/>
        </g>
      ))}

      {/* Menu item cards — 3×2 grid */}
      {[0,1,2,3,4,5].map(i => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const x = 406 + col * 140
        const y = 98 + row * 118
        return (
          <g key={i}>
            <rect x={x} y={y} width={128} height={106} rx="10"
              fill={i===2?'rgba(255,140,66,0.07)':'rgba(255,255,255,0.03)'}
              stroke={i===2?'rgba(255,140,66,0.22)':'rgba(255,255,255,0.055)'} strokeWidth="0.8"/>
            {/* Image area */}
            <rect x={x+8} y={y+8} width={112} height={56} rx="7"
              fill={i===2?'rgba(255,140,66,0.12)':'rgba(255,255,255,0.04)'}/>
            {/* Food icon placeholder */}
            <circle cx={x+64} cy={y+36} r={14}
              fill={i===2?'rgba(255,140,66,0.2)':'rgba(255,255,255,0.06)'}/>
            <rect x={x+10} y={y+72} width={[62,56,70,58,64,52][i]} height="7" rx="3.5" fill="rgba(255,255,255,0.12)"/>
            <rect x={x+10} y={y+83} width={[30,36,28,32,26,34][i]} height="5" rx="2.5"
              fill={i===2?'rgba(255,140,66,0.5)':'rgba(255,255,255,0.06)'}/>
            {/* Add button */}
            <circle cx={x+112} cy={y+96} r={8}
              fill={i===2?'rgba(255,140,66,0.3)':'rgba(255,255,255,0.06)'}/>
            <path d={`M${x+108} ${y+96}h8M${x+112} ${y+92}v8`}
              stroke={i===2?'#ff8c42':'rgba(255,255,255,0.2)'} strokeWidth="1.2" strokeLinecap="round"/>
          </g>
        )
      })}

      {/* Charge button */}
      <rect x="406" y="330" width="418" height="20" rx="10" fill="rgba(255,140,66,0.18)" stroke="rgba(255,140,66,0.35)" strokeWidth="0.8"/>
      <rect x="556" y="336" width="80" height="7" rx="3.5" fill="rgba(255,140,66,0.75)"/>
    </svg>
  )
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
