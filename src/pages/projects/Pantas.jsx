import { useEffect } from 'react'
import { Building2, Users, FileSpreadsheet, Upload, Bell, Settings, Search, ChevronDown, LayoutDashboard, ShieldCheck, BarChart3, CircleAlert } from 'lucide-react'
import CaseStudyLayout from '../../components/CaseStudyLayout'
import styles from './Pantas.module.css'

const META = {
  client: 'Environmental Services',
  title: 'Pantas Configuration and Organisation Setup',
  subtitle: 'Making organisation setup and rule configuration fast and efficient.',
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
    { id: 'designsystem', label: 'Design System' },
    { id: 'design', label: 'Design' },
    { id: 'results', label: 'Results' },
  ],
  heroImage: '/Companies.png',
  next: { slug: 'hireti', title: 'Hireti Recruitment System', sub: 'AI-powered talent acquisition for Hilti' },
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
          <h2 className={styles.sectionTitle}>To streamline client onboarding processes without excessive manual processes</h2>
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
                inconsistencies, and redundant work.
              </p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className={styles.problemTitle}>Long onboarding</h4>
              <p className={styles.problemDesc}>
                Onboarding a single client took 2–3 or more days due to complex
                hierarchical data structures that required manual validation.
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
                Internal staff were stuck doing repetitive data entry, clients
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
          <h2 className={styles.sectionTitle}>Automating client onboarding with AI extraction</h2>
          <p className={styles.bodyWide}>
            Rather than asking clients to conform to a rigid template, we flipped the model.
            The solution centred on automating the hardest part, data extraction and structuring
          , and then giving operators a clean interface to review and correct what the AI produced.
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
                from their existing file templates. The AI maps varied inputs to Pantas's data schema without
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
                error flagging, letting operators review and fix issues inline before
                finalising.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design System ── */}
      <section id="designsystem" className={styles.section}>
        <div className="container">
          <p className="section-label">Design System</p>
          <h2 className={styles.sectionTitle}>Built to scale for the future, not only to ship</h2>
          <p className={styles.bodyWide}>
            A core part of this revamp was establishing a design system that could position Pantas
            as a top-tier carbon management platform. The existing Django Bootstrap stack imposed
            rigid constraints with limited customisation — components looked generic and couldn't
            flex to meet the product's complexity. The new system is built on shadcn UI, giving the
            team a scalable, accessible, and fully customisable component foundation that can grow
            with the product without accumulating design debt.
          </p>
          <div className={styles.dsGrid}>
            {[
              {
                num: '01',
                title: 'Colour Tokens',
                content: (
                  <div className={styles.colorTokens}>
                    {[
                      {
                        group: 'Blue',
                        swatches: [
                          { name: '50',  color: '#eff6ff' },
                          { name: '100', color: '#dbeafe' },
                          { name: '200', color: '#bfdbfe' },
                          { name: '300', color: '#93c5fd' },
                          { name: '400', color: '#60a5fa' },
                          { name: '500', color: '#3b82f6' },
                          { name: '600', color: '#2563eb' },
                          { name: '700', color: '#1d4ed8' },
                          { name: '800', color: '#1e40af' },
                          { name: '900', color: '#1e3a8a' },
                          { name: '950', color: '#172554' },
                        ],
                      },
                      {
                        group: 'Slate',
                        swatches: [
                          { name: '50',  color: '#f8fafc' },
                          { name: '100', color: '#f1f5f9' },
                          { name: '200', color: '#e2e8f0' },
                          { name: '300', color: '#cbd5e1' },
                          { name: '400', color: '#94a3b8' },
                          { name: '500', color: '#64748b' },
                          { name: '600', color: '#475569' },
                          { name: '700', color: '#334155' },
                          { name: '800', color: '#1e293b' },
                          { name: '900', color: '#0f172a' },
                          { name: '950', color: '#020617' },
                        ],
                      },
                      {
                        group: 'Accent',
                        swatches: [
                          { name: 'Teal',   color: '#0d9488' },
                          { name: 'Cyan',   color: '#06b6d4' },
                          { name: 'Indigo', color: '#4f46e5' },
                          { name: 'Violet', color: '#7c3aed' },
                        ],
                      },
                      {
                        group: 'Neutrals',
                        swatches: [
                          { name: 'White', color: '#ffffff' },
                          { name: 'Black', color: '#09090b' },
                        ],
                      },
                    ].map(({ group, swatches }) => (
                      <div key={group} className={styles.colorGroup}>
                        <span className={styles.colorGroupLabel}>{group}</span>
                        <div className={styles.colorSwatches}>
                          {swatches.map(({ name, color }) => (
                            <div key={name} className={styles.colorSwatch}>
                              <div className={styles.colorSwatchBox} style={{ background: color }} />
                              <span className={styles.colorSwatchName}>{name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                num: '02',
                title: 'Typography',
                content: (
                  <div className={styles.typographyTokens}>
                    {[
                      {
                        group: 'Heading',
                        rows: [
                          { token: 'text-heading-2xl', size: 32, weight: 700, label: 'Bold' },
                          { token: 'text-heading-xl',  size: 24, weight: 600, label: 'Semi Bold' },
                          { token: 'text-heading-lg',  size: 20, weight: 600, label: 'Semi Bold' },
                          { token: 'text-heading-md',  size: 16, weight: 500, label: 'Medium' },
                        ],
                      },
                      {
                        group: 'Body',
                        rows: [
                          { token: 'text-body-lg', size: 20, weight: 400, label: 'Regular' },
                          { token: 'text-body-md', size: 16, weight: 400, label: 'Regular' },
                          { token: 'text-body-sm', size: 14, weight: 400, label: 'Regular' },
                        ],
                      },
                      {
                        group: 'Labels',
                        rows: [
                          { token: 'text-label-lg', size: 16, weight: 500, label: 'Medium' },
                          { token: 'text-label-sm', size: 14, weight: 500, label: 'Medium' },
                          { token: 'text-label-xs', size: 12, weight: 500, label: 'Medium' },
                        ],
                      },
                    ].map(({ group, rows }) => (
                      <div key={group} className={styles.typeGroup}>
                        <span className={styles.typeGroupPill}>{group}</span>
                        <div className={styles.typeRows}>
                          {rows.map(({ token, size, weight, label }) => (
                            <div key={token} className={styles.typeRow}>
                              <span
                                className={styles.typeSpecimen}
                                style={{ fontSize: size, fontWeight: weight }}
                              >
                                {token}
                              </span>
                              <span className={styles.typeSpec}>{size}px · {label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                num: '03',
                title: 'Components',
                content: (
                  <div className={styles.componentShowcase}>
                    <div className={styles.componentGrid}>

                      <div className={styles.componentItem}>
                        <span className={styles.componentLabel}>Button</span>
                        <button className={styles.demoButton}>Continue</button>
                      </div>

                      <div className={styles.componentItem}>
                        <span className={styles.componentLabel}>Badge</span>
                        <span className={styles.demoBadge}>Badge</span>
                      </div>

                      <div className={styles.componentItem}>
                        <span className={styles.componentLabel}>Tabs</span>
                        <div className={styles.demoTabs}>
                          <span className={styles.demoTabActive}>Selected</span>
                          <span className={styles.demoTab}>Unselected</span>
                        </div>
                      </div>

                      <div className={styles.componentItem}>
                        <span className={styles.componentLabel}>Avatar</span>
                        <div className={styles.demoAvatar}>CN</div>
                      </div>

                      <div className={styles.componentItem}>
                        <span className={styles.componentLabel}>Input</span>
                        <div className={styles.demoInput}>Placeholder (If any)</div>
                      </div>

                      <div className={styles.componentItem}>
                        <span className={styles.componentLabel}>Switch</span>
                        <div className={styles.demoSwitch}>
                          <div className={styles.demoSwitchTrack}>
                            <div className={styles.demoSwitchThumb} />
                          </div>
                          <span className={styles.demoSwitchLabel}>Mode</span>
                        </div>
                      </div>

                      <div className={styles.componentItem}>
                        <span className={styles.componentLabel}>Checkbox</span>
                        <div className={styles.demoCheckbox}>
                          <div className={styles.demoCheckboxBox}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className={styles.demoCheckboxLabel}>Accept terms</span>
                        </div>
                      </div>

                      <div className={styles.componentItem}>
                        <span className={styles.componentLabel}>Select</span>
                        <div className={styles.demoSelect}>
                          <span>Select an option</span>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>

                    </div>
                  </div>
                ),
              },
              {
                num: '04',
                title: 'Iconography',
                content: (
                  <div className={styles.iconShowcase}>
                    {[
                      { icon: Building2,      label: 'Building2' },
                      { icon: Users,          label: 'Users' },
                      { icon: FileSpreadsheet,label: 'FileSpreadsheet' },
                      { icon: Upload,         label: 'Upload' },
                      { icon: Bell,           label: 'Bell' },
                      { icon: Settings,       label: 'Settings' },
                      { icon: Search,         label: 'Search' },
                      { icon: ChevronDown,    label: 'ChevronDown' },
                      { icon: LayoutDashboard,label: 'LayoutDashboard' },
                      { icon: ShieldCheck,    label: 'ShieldCheck' },
                      { icon: BarChart3,      label: 'BarChart3' },
                      { icon: CircleAlert,    label: 'CircleAlert' },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className={styles.iconItem}>
                        <Icon size={20} strokeWidth={1.5} />
                        <span className={styles.iconLabel}>{label}</span>
                      </div>
                    ))}
                  </div>
                ),
              },
            ].map(item => (
              <div key={item.num} className={styles.dsCard}>
                <div className={styles.dsCardHeader}>
                  <span className={styles.dsCardNum}>{item.num}</span>
                  <span className={styles.dsCardTitle}>{item.title}</span>
                </div>
                {item.content ?? (
                  <div className={styles.dsImgPlaceholder}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <span className={styles.dsImgLabel}>Image placeholder</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design ── */}
      <section id="design" className={styles.section}>
        <div className="container">
          <p className="section-label">Design</p>
          <h2 className={styles.sectionTitle}>Intuitive, convenient and interactive</h2>

          {[
            {
              num: '01',
              title: 'Seamless hierarchical company navigation',
              desc: 'Nested org structures are represented as an interactive tree. Operators can expand, collapse, and edit nodes without losing the parent–child context that flat tables obscure. Deeply nested companies are navigable in a single screen.',
              image: '/Companies.png',
            },
            {
              num: '02',
              title: 'AI extraction for various file formats',
              desc: 'The AI auto-mapping layer accepts various file formats without requiring fixed templates. It handles different column names, formatting styles, and nesting approaches — meaning clients can upload what they already have.',
              image: '/AI extraction.png',
            },
            {
              num: '03',
              title: 'Data review and editing with accuracy validation',
              desc: 'Errors are flagged immediately as operators review extracted data — not in a separate validation step. Inline editing with live accuracy checks means issues are resolved in context, not after the fact.',
              image: '/Bulk Assign.png',
            },
            {
              num: '04',
              title: 'LLM-driven configuration setup',
              desc: 'Operators can converse with the AI assistant to configure organisational rules — instead of declaring them manually through forms. The AI interprets intent, suggests configurations, and applies changes on behalf of the user.',
              image: '/LLM.png',
            },
          ].map(item => (
            <div key={item.num} className={styles.designFeature}>
              <div className={styles.designFeatureText}>
                <span className={styles.designCardNum}>{item.num}</span>
                <h4 className={styles.designCardTitle}>{item.title}</h4>
                <p className={styles.designCardDesc}>{item.desc}</p>
              </div>
              <div className={styles.designFeatureImg}>
                {item.image
                  ? <div className={styles.designFrame}>
                      <div className={styles.designFrameBar}>
                        <span /><span /><span />
                      </div>
                      <img src={item.image} alt={item.title} className={styles.designImg} />
                    </div>
                  : <div className={styles.designImgPlaceholder}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect x="3" y="5" width="26" height="22" rx="3" stroke="rgba(92,200,255,0.4)" strokeWidth="1.5"/>
                        <circle cx="10" cy="12" r="2.5" stroke="rgba(92,200,255,0.4)" strokeWidth="1.5"/>
                        <path d="M3 21l7-5 5 4 4-3 10 7" stroke="rgba(92,200,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={styles.designImgLabel}>Image placeholder</span>
                    </div>
                }
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
              <span className={styles.resultNum}>4.5/5</span>
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

