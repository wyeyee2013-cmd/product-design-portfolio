import { useEffect } from 'react'
import CaseStudyLayout from '../../components/CaseStudyLayout'
import styles from './Pantas.module.css'

const META = {
  client: 'Environmental Services',
  title: 'Pantas Organisation Revamp',
  subtitle: 'Making organisation setup fast and efficient.',
  tags: ['Product Design', 'Interaction Design', 'Visual Design', 'AI'],
  accent: '#5cc8ff',
  accentDim: 'rgba(92,200,255,0.08)',
  heroBg: 'linear-gradient(135deg, #0c1a28 0%, #0f2035 50%, #081522 100%)',
  metaItems: [
    {
      label: 'My Role',
      value: 'Product Designer — Product Development, Interaction Design, Visual Design, Requirement Gathering',
    },
    {
      label: 'Team',
      value: ['Shanny Yu — Product Designer', 'Stan Tan — Senior Product Designer', 'Yi Zhe Koh — Product Manager'],
    },
    { label: 'Timeline', value: 'November 2024 – February 2025 · 4 months' },
  ],
  sections: [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution Proposal' },
    { id: 'design', label: 'Design' },
    { id: 'results', label: 'Results' },
  ],
  heroVisual: <PantasHero />,
  next: { slug: 'hireti', title: 'Hireti Recruitment System', sub: 'AI-powered talent acquisition for Hilti' },
}

function PantasHero() {
  return (
    <svg viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '85%', position: 'relative', zIndex: 1 }}>
      {/* Upload panel */}
      <rect x="60" y="50" width="248" height="300" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <rect x="60" y="50" width="248" height="42" rx="14" fill="rgba(255,255,255,0.05)"/>
      <rect x="78" y="64" width="88" height="10" rx="4" fill="rgba(255,255,255,0.12)"/>
      {/* Upload zone */}
      <rect x="78" y="108" width="212" height="72" rx="10" fill="rgba(92,200,255,0.06)" stroke="rgba(92,200,255,0.28)" strokeWidth="1" strokeDasharray="5 4"/>
      <rect x="140" y="124" width="88" height="16" rx="6" fill="rgba(92,200,255,0.18)"/>
      <rect x="154" y="129" width="60" height="6" rx="3" fill="rgba(92,200,255,0.65)"/>
      <rect x="118" y="146" width="132" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
      {/* File list */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="78" y={196+i*38} width="212" height="28" rx="7"
            fill={i===1?'rgba(92,200,255,0.08)':'rgba(255,255,255,0.03)'}
            stroke={i===1?'rgba(92,200,255,0.22)':'rgba(255,255,255,0.06)'} strokeWidth="0.8"/>
          <rect x="88" y={204+i*38} width="14" height="12" rx="3" fill={i===1?'rgba(92,200,255,0.28)':'rgba(255,255,255,0.07)'}/>
          <rect x="108" y={206+i*38} width={[76,92,68][i]} height="6" rx="3" fill="rgba(255,255,255,0.11)"/>
          <rect x={244} y={207+i*38} width="36" height="5" rx="2.5" fill={i===1?'rgba(92,200,255,0.45)':'rgba(255,255,255,0.05)'}/>
        </g>
      ))}
      {/* Arrow connector */}
      <path d="M322 200 L358 200" stroke="rgba(92,200,255,0.45)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M350 193 L358 200 L350 207" stroke="rgba(92,200,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Review panel */}
      <rect x="370" y="50" width="470" height="300" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <rect x="370" y="50" width="470" height="42" rx="14" fill="rgba(255,255,255,0.04)"/>
      <rect x="388" y="64" width="96" height="10" rx="4" fill="rgba(255,255,255,0.09)"/>
      <rect x="756" y="58" width="64" height="22" rx="11" fill="rgba(98,232,160,0.14)" stroke="rgba(98,232,160,0.28)" strokeWidth="0.8"/>
      <rect x="766" y="66" width="44" height="5" rx="2.5" fill="rgba(98,232,160,0.65)"/>
      {/* Org tree root */}
      <rect x="518" y="108" width="132" height="28" rx="8" fill="rgba(92,200,255,0.14)" stroke="rgba(92,200,255,0.32)" strokeWidth="1"/>
      <rect x="532" y="118" width="64" height="8" rx="4" fill="rgba(92,200,255,0.75)"/>
      <rect x="600" y="118" width="36" height="8" rx="4" fill="rgba(92,200,255,0.28)"/>
      {/* Tree connectors */}
      <line x1="584" y1="136" x2="584" y2="154" stroke="rgba(92,200,255,0.2)" strokeWidth="1"/>
      <line x1="446" y1="154" x2="722" y2="154" stroke="rgba(92,200,255,0.15)" strokeWidth="1"/>
      {[446, 584, 722].map(x => (
        <line key={x} x1={x} y1="154" x2={x} y2="170" stroke="rgba(92,200,255,0.15)" strokeWidth="1"/>
      ))}
      {/* Level 2 */}
      {[382, 520, 658].map((x,i) => (
        <g key={i}>
          <rect x={x} y={170} width={116} height={26} rx="7"
            fill={i===1?'rgba(92,200,255,0.07)':'rgba(255,255,255,0.035)'}
            stroke={i===1?'rgba(92,200,255,0.18)':'rgba(255,255,255,0.055)'} strokeWidth="0.8"/>
          <rect x={x+10} y={179} width={[52,68,56][i]} height="6" rx="3" fill="rgba(255,255,255,0.09)"/>
        </g>
      ))}
      {/* Level 2 → 3 */}
      {[382,520,658].map((x,i) => (
        <g key={i}>
          <line x1={x+58} y1="196" x2={x+58} y2="210" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          <line x1={x+18} y1="210" x2={x+98} y2="210" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          {[x+18, x+98].map((lx,j) => (
            <g key={j}>
              <line x1={lx} y1="210" x2={lx} y2="222" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
              <rect x={lx-26} y={222} width={56} height={20} rx="5"
                fill="rgba(255,255,255,0.022)" stroke="rgba(255,255,255,0.045)" strokeWidth="0.8"/>
              <rect x={lx-16} y={229} width={[32,40,28,38,26,36][i*2+j]} height="5" rx="2.5" fill="rgba(255,255,255,0.07)"/>
            </g>
          ))}
        </g>
      ))}
      {/* Error flag */}
      <rect x="388" y="256" width="172" height="40" rx="8" fill="rgba(255,90,90,0.06)" stroke="rgba(255,90,90,0.18)" strokeWidth="0.8"/>
      <rect x="398" y="265" width="8" height="8" rx="2" fill="rgba(255,90,90,0.45)"/>
      <rect x="412" y="266" width="72" height="5" rx="2.5" fill="rgba(255,255,255,0.09)"/>
      <rect x="412" y="275" width="110" height="4" rx="2" fill="rgba(255,255,255,0.045)"/>
      <rect x="398" y="284" width="56" height="5" rx="2.5" fill="rgba(255,90,90,0.35)"/>
      {/* Action bar */}
      <rect x="576" y="256" width="240" height="40" rx="8" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.055)" strokeWidth="0.8"/>
      <rect x="590" y="268" width="100" height="16" rx="8" fill="rgba(92,200,255,0.22)" stroke="rgba(92,200,255,0.38)" strokeWidth="0.8"/>
      <rect x="597" y="273" width="86" height="5" rx="2.5" fill="rgba(92,200,255,0.75)"/>
      <rect x="702" y="268" width="100" height="16" rx="8" fill="rgba(255,255,255,0.04)"/>
      <rect x="710" y="273" width="84" height="5" rx="2.5" fill="rgba(255,255,255,0.09)"/>
    </svg>
  )
}

export default function Pantas() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <CaseStudyLayout meta={META}>

      {/* ── Overview ── */}
      <section id="overview" className={styles.section}>
        <div className="container">
          <p className="section-label">Overview</p>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              <h2 className={styles.sectionTitle}>An intelligent onboarding automation system</h2>
              <p className={styles.body}>
                Pantas required an intelligent onboarding automation system to replace manual
                processes, enabling seamless data ingestion, validation, and structuring for
                scalable operations. The goal was to eliminate the reliance on error-prone
                Excel templates and give both internal teams and clients a faster, more
                reliable path to activation.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <span className={styles.statNum}>2–3+</span>
                <span className={styles.statLabel}>Days per onboarding before redesign</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>−60%</span>
                <span className={styles.statLabel}>Reduction in manual processing tasks</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>6–7 hrs</span>
                <span className={styles.statLabel}>Saved per onboarding completion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section id="problem" className={styles.section}>
        <div className="container">
          <p className="section-label">Problem</p>
          <h2 className={styles.sectionTitle}>A manual process that couldn't scale</h2>
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12.4 7.6L18 8.2L14 12L15.2 18L10 15L4.8 18L6 12L2 8.2L7.6 7.6L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className={styles.problemTitle}>Error-prone templates</h4>
              <p className={styles.problemDesc}>
                Manual, template-based Excel files were prone to human errors,
                inconsistencies, and redundant work — leading to data inaccuracies
                that required multiple rounds of correction.
              </p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className={styles.problemTitle}>2–3+ day onboarding</h4>
              <p className={styles.problemDesc}>
                Onboarding a single client took 2–3 or more days due to complex
                hierarchical data structures that required manual validation at
                every level of the organisation tree.
              </p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9 3H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M13 3h4v4M17 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className={styles.problemTitle}>Internal and external friction</h4>
              <p className={styles.problemDesc}>
                Both internal teams and external clients experienced the pain.
                Internal staff were stuck doing repetitive data entry; clients
                faced delayed activation and constant back-and-forth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution Proposal ── */}
      <section id="solution" className={styles.section}>
        <div className="container">
          <p className="section-label">Solution Proposal</p>
          <h2 className={styles.sectionTitle}>Two capabilities that change the workflow entirely</h2>
          <p className={styles.bodyWide}>
            Rather than asking clients to conform to a rigid template, we flipped the model.
            The solution centred on automating the hardest part — data extraction and structuring
            — and then giving operators a clean interface to review and correct what the AI produced.
          </p>
          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <div className={styles.solutionAccent} style={{ background: 'linear-gradient(135deg, rgba(92,200,255,0.2), rgba(92,200,255,0.05))' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="6" width="20" height="16" rx="3" stroke="#5cc8ff" strokeWidth="1.5"/>
                  <path d="M9 11h10M9 14h7M9 17h5" stroke="#5cc8ff" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="22" cy="22" r="5" fill="#0f0f11" stroke="#5cc8ff" strokeWidth="1.2"/>
                  <path d="M20 22l1.5 1.5L24 20" stroke="#5cc8ff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.solutionTitle}>AI-Powered Data Extraction and Structuring</h3>
              <p className={styles.body}>
                Automatically extract, structure, and validate client organisational data
                from their existing file templates — regardless of format, column naming, or
                nesting conventions. The AI maps varied inputs to Pantas's data schema without
                requiring clients to use a fixed template.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionAccent} style={{ background: 'linear-gradient(135deg, rgba(92,200,255,0.2), rgba(92,200,255,0.05))' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="4" width="20" height="20" rx="3" stroke="#5cc8ff" strokeWidth="1.5"/>
                  <path d="M8 10h12M8 14h8M8 18h5" stroke="#5cc8ff" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="20" cy="18" r="1.5" fill="#5cc8ff"/>
                </svg>
              </div>
              <h3 className={styles.solutionTitle}>Interactive Data Review &amp; Editing</h3>
              <p className={styles.body}>
                Present the extracted data in a compact, editable format with real-time
                error flagging — letting operators review and fix issues inline before
                finalising. Every field is editable without returning to the source file.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design ── */}
      <section id="design" className={styles.section}>
        <div className="container">
          <p className="section-label">Design</p>
          <h2 className={styles.sectionTitle}>Three design features that make it work</h2>

          {[
            {
              num: '01',
              title: 'Seamless hierarchical company navigation',
              desc: 'Nested org structures are represented as an interactive tree. Operators can expand, collapse, and edit nodes without losing the parent–child context that flat tables obscure. Deeply nested companies are navigable in a single screen.',
            },
            {
              num: '02',
              title: 'AI extraction for various file formats',
              desc: 'The AI auto-mapping layer accepts various file formats without requiring fixed templates. It handles different column names, formatting styles, and nesting approaches — meaning clients can upload what they already have.',
            },
            {
              num: '03',
              title: 'Data review and editing with accuracy validation',
              desc: 'Errors are flagged immediately as operators review extracted data — not in a separate validation step. Inline editing with live accuracy checks means issues are resolved in context, not after the fact.',
            },
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
                    <rect x="3" y="5" width="26" height="22" rx="3" stroke="rgba(92,200,255,0.4)" strokeWidth="1.5"/>
                    <circle cx="10" cy="12" r="2.5" stroke="rgba(92,200,255,0.4)" strokeWidth="1.5"/>
                    <path d="M3 21l7-5 5 4 4-3 10 7" stroke="rgba(92,200,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
          <h2 className={styles.sectionTitle}>Faster onboarding, less manual work, happier teams</h2>
          <div className={styles.resultsGrid}>
            <div className={styles.resultCard}>
              <span className={styles.resultNum}>6–7 hrs</span>
              <span className={styles.resultLabel}>Onboarding completion time reduced per client</span>
            </div>
            <div className={styles.resultCard}>
              <span className={styles.resultNum}>&gt;60%</span>
              <span className={styles.resultLabel}>Reduction in manual data processing tasks</span>
            </div>
            <div className={styles.resultCard}>
              <span className={styles.resultNum}>High ✦</span>
              <span className={styles.resultLabel}>Satisfaction ratings from employees and clients</span>
            </div>
          </div>
          <p className={styles.bodyWide} style={{ marginTop: 32 }}>
            The redesign eliminated the most time-consuming part of client onboarding.
            Internal teams reported significantly less back-and-forth, and onboarding that
            previously spanned multiple days was completed within a single session.
          </p>
        </div>
      </section>

    </CaseStudyLayout>
  )
}

/* ── Inline mockup SVGs ── */
function ManageCompaniesMockup() {
  return (
    <svg viewBox="0 0 520 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '88%', position: 'relative', zIndex: 1 }}>
      {/* Sidebar */}
      <rect x="12" y="12" width="140" height="276" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
      <rect x="24" y="26" width="64" height="8" rx="4" fill="rgba(255,255,255,0.12)"/>
      <rect x="24" y="44" width="116" height="0.8" fill="rgba(255,255,255,0.06)"/>
      {['Alpha Corp','Beta Ltd','Gamma Inc','Delta Co','Epsilon'].map((_, i) => (
        <g key={i}>
          <rect x="20" y={52+i*38} width="124" height="28" rx="7"
            fill={i===0?'rgba(92,200,255,0.1)':'transparent'}
            stroke={i===0?'rgba(92,200,255,0.2)':'transparent'} strokeWidth="0.8"/>
          <circle cx="34" cy={66+i*38} r="7" fill={`hsl(${260+i*18},50%,55%)`} fillOpacity="0.45"/>
          <rect x="46" y={62+i*38} width={[52,42,48,38,44][i]} height="6" rx="3"
            fill={i===0?'rgba(92,200,255,0.6)':'rgba(255,255,255,0.1)'}/>
        </g>
      ))}
      {/* Main panel */}
      <rect x="164" y="12" width="344" height="276" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.055)" strokeWidth="0.8"/>
      <rect x="164" y="12" width="344" height="36" rx="10" fill="rgba(255,255,255,0.04)"/>
      <rect x="178" y="22" width="80" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>
      <rect x="440" y="19" width="56" height="18" rx="9" fill="rgba(92,200,255,0.18)" stroke="rgba(92,200,255,0.35)" strokeWidth="0.8"/>
      <rect x="450" y="25" width="36" height="5" rx="2.5" fill="rgba(92,200,255,0.75)"/>
      {/* Tree */}
      <rect x="236" y="60" width="100" height="24" rx="7" fill="rgba(92,200,255,0.14)" stroke="rgba(92,200,255,0.3)" strokeWidth="0.8"/>
      <rect x="248" y="68" width="48" height="7" rx="3" fill="rgba(92,200,255,0.8)"/>
      <rect x="300" y="68" width="24" height="7" rx="3" fill="rgba(92,200,255,0.3)"/>
      <line x1="286" y1="84" x2="286" y2="100" stroke="rgba(92,200,255,0.2)" strokeWidth="0.8"/>
      <line x1="200" y1="100" x2="372" y2="100" stroke="rgba(92,200,255,0.15)" strokeWidth="0.8"/>
      {[200,286,372].map(x=>(
        <line key={x} x1={x} y1="100" x2={x} y2="114" stroke="rgba(92,200,255,0.15)" strokeWidth="0.8"/>
      ))}
      {[172,244,316].map((x,i)=>(
        <g key={i}>
          <rect x={x} y={114} width={88} height={22} rx="6"
            fill={i===1?'rgba(92,200,255,0.07)':'rgba(255,255,255,0.03)'}
            stroke={i===1?'rgba(92,200,255,0.18)':'rgba(255,255,255,0.055)'} strokeWidth="0.8"/>
          <rect x={x+10} y={121} width={[44,56,48][i]} height="6" rx="3" fill="rgba(255,255,255,0.09)"/>
        </g>
      ))}
      {/* Level 3 */}
      {[172,244,316].map((x,i)=>(
        <g key={i}>
          <line x1={x+44} y1="136" x2={x+44} y2="148" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>
          <line x1={x+12} y1="148" x2={x+76} y2="148" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>
          {[x+12, x+76].map((lx,j)=>(
            <g key={j}>
              <line x1={lx} y1="148" x2={lx} y2="158" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8"/>
              <rect x={lx-20} y={158} width={44} height={18} rx="5"
                fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8"/>
              <rect x={lx-12} y={164} width={[26,32,22,28,20,30][i*2+j]} height="5" rx="2.5" fill="rgba(255,255,255,0.07)"/>
            </g>
          ))}
        </g>
      ))}
      {/* Info panel */}
      <rect x="178" y="194" width="328" height="78" rx="8" fill="rgba(92,200,255,0.05)" stroke="rgba(92,200,255,0.12)" strokeWidth="0.8"/>
      <rect x="192" y="206" width="80" height="7" rx="3" fill="rgba(92,200,255,0.5)"/>
      <rect x="192" y="218" width="200" height="5" rx="2.5" fill="rgba(255,255,255,0.07)"/>
      <rect x="192" y="227" width="160" height="5" rx="2.5" fill="rgba(255,255,255,0.05)"/>
      <rect x="192" y="250" width="64" height="14" rx="7" fill="rgba(92,200,255,0.2)" stroke="rgba(92,200,255,0.35)" strokeWidth="0.8"/>
      <rect x="200" y="255" width="48" height="4" rx="2" fill="rgba(92,200,255,0.7)"/>
      <rect x="264" y="250" width="64" height="14" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
      <rect x="272" y="255" width="48" height="4" rx="2" fill="rgba(255,255,255,0.09)"/>
    </svg>
  )
}

function AIExtractionMockup() {
  return (
    <svg viewBox="0 0 520 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '88%', position: 'relative', zIndex: 1 }}>
      {/* Main card */}
      <rect x="12" y="12" width="496" height="276" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
      <rect x="12" y="12" width="496" height="38" rx="12" fill="rgba(255,255,255,0.04)"/>
      <rect x="28" y="24" width="88" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>
      {/* Step bar */}
      <rect x="28" y="66" width="464" height="4" rx="2" fill="rgba(255,255,255,0.05)"/>
      <rect x="28" y="66" width="210" height="4" rx="2" fill="url(#ep)"/>
      <defs>
        <linearGradient id="ep" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5cc8ff"/>
          <stop offset="100%" stopColor="#6b28cc"/>
        </linearGradient>
      </defs>
      {['Upload', 'Extract', 'Review', 'Activate'].map((label,i)=>(
        <g key={i}>
          <circle cx={28+i*154} cy={68} r={8}
            fill={i<2?'#5cc8ff':'rgba(255,255,255,0.05)'}
            stroke={i===2?'rgba(92,200,255,0.3)':'transparent'} strokeWidth="1.2"/>
          {i<2 && <path d={`M${22+i*154} 68l4 4 6-6`} stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>}
          <rect x={16+i*154-20} y={80} width={48} height={5} rx={2.5} fill="rgba(255,255,255,0.07)"/>
        </g>
      ))}
      {/* Processing animation mockup */}
      <rect x="28" y="100" width="464" height="52" rx="8" fill="rgba(92,200,255,0.06)" stroke="rgba(92,200,255,0.14)" strokeWidth="0.8"/>
      <circle cx="50" cy="126" r="10" fill="rgba(92,200,255,0.15)" stroke="rgba(92,200,255,0.3)" strokeWidth="1"/>
      <path d="M46 126l3 3 6-6" stroke="#5cc8ff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="68" y="120" width="120" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
      <rect x="68" y="130" width="80" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
      <rect x="330" y="118" width="150" height="8" rx="4" fill="rgba(92,200,255,0.12)"/>
      <rect x="330" y="130" width="90" height="4" rx="2" fill="rgba(92,200,255,0.07)"/>
      {/* Extracted rows */}
      <rect x="28" y="164" width="464" height="24" rx="6" fill="rgba(255,255,255,0.04)"/>
      {['Company Name','Division','Department','Cost Centre','Manager'].map((col,i)=>(
        <rect key={i} x={36+i*90} y={170} width={[72,52,64,58,50][i]} height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
      ))}
      {[0,1,2,3].map(row=>(
        <g key={row}>
          <rect x="28" y={192+row*20} width="464" height="1" fill="rgba(255,255,255,0.04)"/>
          {[0,1,2,3,4].map(col=>(
            <rect key={col} x={36+col*90} y={198+row*20} width={[64,44,56,50,42][col]} height="5" rx="2.5"
              fill={row===0&&col===0?'rgba(255,90,90,0.3)':'rgba(255,255,255,0.07)'}/>
          ))}
        </g>
      ))}
      {/* Error badge */}
      <rect x="28" y="276" width="220" height="0"/>
      <rect x="338" y="270" width="154" height="6" rx="0"/>
    </svg>
  )
}
