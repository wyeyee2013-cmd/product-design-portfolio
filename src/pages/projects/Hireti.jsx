import { useEffect } from 'react'
import CaseStudyLayout from '../../components/CaseStudyLayout'
import styles from './Hireti.module.css'

const META = {
  client: 'Hilti IT Competition 2024',
  title: 'Hireti Recruitment System',
  subtitle: 'Elevating talent acquisition processes with AI-powered candidate management.',
  tags: ['UX/UI Design', 'Product Development', 'Branding', 'Interaction Design'],
  accent: '#ff7eb3',
  accentDim: 'rgba(255,126,179,0.08)',
  heroBg: 'linear-gradient(135deg, #1e1020 0%, #2a1035 50%, #1a0d2a 100%)',
  metaItems: [
    {
      label: 'My Role',
      value: 'UX/UI Design Lead — Product Development, Branding, Interaction Design, Visual Design',
    },
    {
      label: 'Team',
      value: [
        'Zachary Ang — Project Manager',
        'Kok Hon Kit — Machine Learning',
        'Lee Ren Jie — Full-stack Developer',
        'Vandyck Lai — Technical Lead',
      ],
    },
    { label: 'Timeline', value: 'December 2023 – August 2024 · 9 months' },
  ],
  sections: [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'personas', label: 'User Personalities' },
    { id: 'process', label: 'Current Process' },
    { id: 'solution', label: 'Solution Proposal' },
    { id: 'designsystem', label: 'Design System' },
    { id: 'design', label: 'Final Design' },
    { id: 'results', label: 'Results' },
  ],
  heroImage: '/Match Candidate.png',
  next: { slug: 'apspace', title: 'APSpace Admin', sub: 'University records administration system' },
}


export default function Hireti() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <CaseStudyLayout meta={META}>

      {/* ── Overview ── */}
      <section id="overview" className={styles.section}>
        <div className="container">
          <p className="section-label">Overview</p>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              <h2 className={styles.sectionTitle}>A unified talent acquisition system built to win</h2>
              <p className={styles.body}>
                Hireti is a talent acquisition system constructed for Hilti in conjunction with
                the Hilti IT Competition 2024. The product focuses on reducing the effort of talent
                acquisition teams in sourcing quality candidates through robust features such as
                candidate management, job management, and analytics dashboards.
              </p>
              <p className={styles.body}>
                The system earned the Grand Champion Award, the highest recognition at the competition
                — for its end-to-end approach to solving a real enterprise recruitment challenge with
                AI-assisted matching and a fully integrated workflow.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <span className={styles.statNum}>🏆 Grand</span>
                <span className={styles.statLabel}>Champion Award — Hilti IT Competition 2024</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>9 mos</span>
                <span className={styles.statLabel}>End-to-end product development cycle</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>5-person</span>
                <span className={styles.statLabel}>Cross-functional team: design, ML, and full-stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section id="problem" className={styles.section}>
        <div className="container">
          <p className="section-label">Problem</p>
          <h2 className={styles.sectionTitle}>Finding good candidates through a fragmented system</h2>
          <p className={styles.bodyWide}>
            Although thousands of applications are sent in everyday, the company tends to have issues in searching for candidates that fulfill their requirement criteria. The current structure of the system is not unified as it requires interactions from different types of recruitment management platforms.
          </p>
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className={styles.problemTitle}>Insufficient initial filtering</h4>
              <p className={styles.problemDesc}>
                Delays were encountered due to insufficient initial filtering, making it difficult
                to assess candidates' levels of experience.
              </p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18 10c0 4.418-3.582 8-8 8S2 14.418 2 10 5.582 2 10 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M14 2v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className={styles.problemTitle}>Inadequate feedback loops</h4>
              <p className={styles.problemDesc}>
                Inadequate feedback mechanisms hindered effective communication throughout the
                recruitment process.
              </p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9 3H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M13 3h4v4M17 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className={styles.problemTitle}>Lack of automation and transparency</h4>
              <p className={styles.problemDesc}>
                Delays in job position approvals and a lack of automation compromised transparency
                in the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── User Personalities ── */}
      <section id="personas" className={styles.section}>
        <div className="container">
          <p className="section-label">User Personalities</p>
          <h2 className={styles.sectionTitle}>Looking into our main user personalities</h2>
          <p className={styles.bodyWide}>
            Several interviews were conducted with a diverse pool of individuals in order to
            understand their personality and attitude towards the recruitment process, while
            focusing on talent acquisition specialists.
          </p>
          <div className={styles.personasGrid}>
            {[
              {
                num: '01',
                name: 'The Indecisive',
                desc: 'Recruiters are not able to decide the best candidate due to biasness and the lack of additional reference/opinions.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 3v4M11 15v4M3 11h4M15 11h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.6"/>
                  </svg>
                ),
              },
              {
                num: '02',
                name: 'The Skill-centric',
                desc: 'Does not focus on the interview perspective of the process, but rather the candidate\'s technical capabilities in handling tasks.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 16l4-4 3 3 7-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6"/>
                  </svg>
                ),
              },
              {
                num: '03',
                name: 'The Communication Centric',
                desc: 'Would place more focus on candidate\'s communication skills, as hard-skills can be learnt with suitable training methods.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 6h14M4 10h10M4 14h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    <circle cx="17" cy="15" r="3" stroke="currentColor" strokeWidth="1.6"/>
                  </svg>
                ),
              },
            ].map(p => (
              <div key={p.num} className={styles.personaCard}>
                <div className={styles.personaNum}>{p.num}</div>
                <h4 className={styles.personaName}>{p.name}</h4>
                <p className={styles.personaDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Current Process ── */}
      <section id="process" className={styles.section}>
        <div className="container">
          <p className="section-label">Current Process</p>
          <h2 className={styles.sectionTitle}>Mapping the existing recruitment flow</h2>
          <p className={styles.bodyWide}>
            Before redesigning, we mapped out how recruitment currently worked — from job requisition
            to offer — to identify where time was lost, where handoffs broke down, and where the system
            failed to support the people using it.
          </p>
          <div className={styles.processGrid}>
            {[
              {
                num: '01', label: 'Acquisition',
                steps: ['Determine positions to hire', 'Write and post job descriptions'],
                pain: 'Users might not be able to prioritize suitable job postings, and to create a comprehensive job description',
              },
              {
                num: '02', label: 'Screening',
                steps: ['Screen through candidate resume one-by-one', 'Perform pre-screening calls', 'Provide assessments if the role is technical-based', 'Make decisions to shortlist or reject candidates'],
                pain: 'Users might be overwhelmed with the huge number of applications received',
              },
              {
                num: '03', label: 'Interview',
                steps: ['Conduct video/physical interviews', 'Evaluate candidate performance based on questions asked', 'Make decisions to advance candidates to next stages'],
                pain: 'Users might not remember the context discussed during the interview process',
              },
              {
                num: '04', label: 'Offer',
                steps: ['Select the most suitable candidate', 'Confirm with the select candidate on their keenness to the position', 'Prepare and send offer letter according to agreed arrangements'],
                pain: 'Users might need to take extra time to prepare an error-free offer letter',
              },
            ].map(stage => (
              <div key={stage.num} className={styles.processStageCard}>
                <div className={styles.processStageHeader}>
                  <span className={styles.processNum}>{stage.num}</span>
                  <span className={styles.processLabel}>{stage.label}</span>
                </div>
                <ul className={styles.processStepList}>
                  {stage.steps.map((s, i) => (
                    <li key={i} className={styles.processStepItem}>{s}</li>
                  ))}
                </ul>
                <div className={styles.processPainDivider} />
                <div className={styles.processPain}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                    <circle cx="7" cy="7" r="5.5" stroke="rgba(255,126,179,0.6)" strokeWidth="1.1"/>
                    <path d="M7 6v3M7 4.5h.01" stroke="rgba(255,126,179,0.8)" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  <p>{stage.pain}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.processCallout}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
              <circle cx="9" cy="9" r="7.5" stroke="rgba(255,126,179,0.6)" strokeWidth="1.2"/>
              <path d="M9 8v4M9 6h.01" stroke="rgba(255,126,179,0.8)" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <p>Every stage relied on a different tool or manual step — there was no single system connecting requisition, pipeline, and decision-making. This is the gap Hireti was built to close.</p>
          </div>
        </div>
      </section>

      {/* ── Solution Proposal ── */}
      <section id="solution" className={styles.section}>
        <div className="container">
          <p className="section-label">Solution Proposal</p>
          <h2 className={styles.sectionTitle}>Minimal interactions, maximum results</h2>
          <p className={styles.bodyWide}>
            The core design challenge was ensuring that recruiters are able to complete recruitment
            processes with the minimal number of interactions and effort, while achieving maximum
            results in recruiting good candidates. The solution centred on two capabilities: intelligent
            AI-powered matching and a fully unified workflow from job posting to offer.
          </p>
          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <div className={styles.solutionAccent} style={{ background: 'linear-gradient(135deg, rgba(255,126,179,0.2), rgba(255,126,179,0.05))' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="#ff7eb3" strokeWidth="1.5"/>
                  <path d="M16 16l5 5" stroke="#ff7eb3" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="11" cy="11" r="3" fill="rgba(255,126,179,0.3)"/>
                  <path d="M20 6l2-2M22 10h2M20 14l2 2" stroke="#ff7eb3" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className={styles.solutionTitle}>AI-Powered Candidate Matching</h3>
              <p className={styles.body}>
                Machine learning models automatically match job postings to the most suitable
                candidates based on skills, experience, and role requirements — surfacing the
                right people without requiring recruiters to manually sift through every application.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionAccent} style={{ background: 'linear-gradient(135deg, rgba(163,107,255,0.2), rgba(163,107,255,0.05))' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="4" width="9" height="9" rx="2" stroke="#a36bff" strokeWidth="1.5"/>
                  <rect x="15" y="4" width="9" height="9" rx="2" stroke="#a36bff" strokeWidth="1.5"/>
                  <rect x="4" y="15" width="9" height="9" rx="2" stroke="#a36bff" strokeWidth="1.5"/>
                  <rect x="15" y="15" width="9" height="9" rx="2" fill="rgba(163,107,255,0.25)" stroke="#a36bff" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className={styles.solutionTitle}>Unified Recruitment System</h3>
              <p className={styles.body}>
                A single platform consolidating job management, candidate pipelines, interview
                scheduling, feedback collection, and analytics — eliminating the need to switch
                between multiple tools and giving every stakeholder a real-time view of progress.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ── Design System ── */}
      <section id="designsystem" className={styles.section}>
        <div className="container">
          <p className="section-label">Design System</p>
          <h2 className={styles.sectionTitle}>A cohesive visual language for Hireti</h2>
          <p className={styles.bodyWide}>
            A comprehensive design system was established to ensure consistency across all screens
            and to enable faster design iteration. It covers colour tokens, typography, spacing, and
            a reusable component library built specifically for the recruitment context.
          </p>
          <div className={styles.dsGrid}>
            <div className={styles.dsCard}>
              <div className={styles.dsCardHeader}>
                <span className={styles.dsCardNum}>01</span>
                <span className={styles.dsCardTitle}>Colour Tokens</span>
              </div>
              <div className={styles.colorTokens}>
                <div className={styles.colorSwatches}>
                  {[
                    { hex: '#D1051E', name: 'Red' },
                    { hex: '#534F53', name: 'Charcoal' },
                    { hex: '#2E2C2E', name: 'Dark' },
                    { hex: '#D7CEBE', name: 'Warm Beige' },
                    { hex: '#FFFFFF', name: 'White', border: true },
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
            <div className={styles.dsCard}>
              <div className={styles.dsCardHeader}>
                <span className={styles.dsCardNum}>02</span>
                <span className={styles.dsCardTitle}>Components</span>
              </div>
              <div className={styles.componentShowcase}>
                {/* Buttons row */}
                <div className={styles.hiretiCompGroup}>
                  <span className={styles.hiretiCompLabel}>Buttons</span>
                  <div className={styles.hiretiButtonRow}>
                    <button className={styles.hirBtnFilled}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M10 14L21 3M21 9v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                      View Request
                    </button>
                    <button className={styles.hirBtnOutline}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M10 14L21 3M21 9v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                      View Request
                    </button>
                    <button className={styles.hirBtnGhost}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M10 14L21 3M21 9v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                      View Request
                    </button>
                  </div>
                </div>
                {/* Secondary buttons */}
                <div className={styles.hiretiCompGroup}>
                  <span className={styles.hiretiCompLabel}>Secondary Buttons</span>
                  <div className={styles.hiretiButtonRow}>
                    <button className={styles.hirBtnCancel}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
                      Cancel
                    </button>
                    <button className={styles.hirBtnStarred}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      Starred Candidates
                    </button>
                  </div>
                </div>
                {/* Toggle */}
                <div className={styles.hiretiCompGroup}>
                  <span className={styles.hiretiCompLabel}>Toggle</span>
                  <div className={styles.hiretiToggleRow}>
                    <span className={styles.hiretiToggleText}>Inactive</span>
                    <div className={styles.hiretiSwitchTrack}>
                      <div className={styles.hiretiSwitchThumb} />
                    </div>
                    <span className={styles.hiretiToggleTextActive}>Active</span>
                  </div>
                </div>
                {/* Form button */}
                <div className={styles.hiretiCompGroup}>
                  <span className={styles.hiretiCompLabel}>Form Button</span>
                  <button className={styles.hirBtnFormAdd}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>
                    Add Question
                  </button>
                </div>
                {/* Upload */}
                <div className={styles.hiretiCompGroup}>
                  <span className={styles.hiretiCompLabel}>Upload Document</span>
                  <div className={styles.hiretiUploadCard}>
                    <div className={styles.hiretiUploadIcon}>
                      <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
                        <rect x="1" y="1" width="20" height="26" rx="3" fill="rgba(255,255,255,0.9)" stroke="#ddd" strokeWidth="1"/>
                        <rect x="4" y="6" width="4" height="4" rx="1" fill="#D1051E" opacity="0.8"/>
                        <rect x="4" y="13" width="10" height="1.5" rx="1" fill="#ccc"/>
                        <rect x="4" y="17" width="8" height="1.5" rx="1" fill="#ccc"/>
                        <circle cx="20" cy="26" r="5" fill="#D1051E"/>
                        <path d="M18 26h4M20 24v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className={styles.hiretiUploadTitle}>Upload a cover photo</div>
                      <div className={styles.hiretiUploadSub}>Drag and drop or <span className={styles.hiretiUploadLink}>Select File</span></div>
                    </div>
                  </div>
                </div>
                {/* Candidate card */}
                <div className={styles.hiretiCompGroup}>
                  <span className={styles.hiretiCompLabel}>Candidate Card</span>
                  <div className={styles.hirCandidateCard}>
                    <div className={styles.hirCandidateTop}>
                      <div className={styles.hirCandidateAvatar}>JL</div>
                      <div className={styles.hirCandidateInfo}>
                        <div className={styles.hirCandidateName}>Jamie Lee</div>
                        <div className={styles.hirCandidateRole}>Senior UX Designer · 5 yrs exp</div>
                      </div>
                      <span className={styles.hirCandidateBadge}>Shortlisted</span>
                    </div>
                    <div className={styles.hirCandidateDivider} />
                    <div className={styles.hirCandidateFooter}>
                      <span className={styles.hirCandidateTag}>Figma</span>
                      <span className={styles.hirCandidateTag}>Research</span>
                      <span className={styles.hirCandidateTag}>Prototyping</span>
                      <span className={styles.hirCandidateMatch}>92% match</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final Design ── */}
      <section id="design" className={styles.section}>
        <div className="container">
          <p className="section-label">Design</p>
          <h2 className={styles.sectionTitle}>From screening to offer, reimagined end to end</h2>

          {[
            {
              num: '01',
              title: 'Candidate matching with AI-ranked shortlists',
              desc: 'Instead of presenting recruiters with a raw list of applicants, the system surfaces AI-ranked shortlists based on job criteria. Recruiters see a match score and key qualification signals for each candidate at a glance, dramatically reducing time spent screening.',
              image: '/Match Candidate (Unviewed).png',
            },
            {
              num: '02',
              title: 'Talent pool integrated with external platforms',
              desc: 'The talent pool syncs directly with LinkedIn and JobStreet, giving recruiters a broader reach without leaving the platform. Candidate profiles are automatically imported and enriched, ensuring hiring teams always have access to the widest possible pool of qualified applicants.',
              image: '/Talent Pool.png',
            },
            {
              num: '03',
              title: 'Chatbot consultant powered by dashboard insights',
              desc: 'An AI chatbot analyses hiring performance data from the dashboard in real time, surfacing actionable recommendations and advice. Whether it\'s flagging a bottleneck in the pipeline or suggesting sourcing strategies, the consultant keeps talent teams one step ahead.',
              image: '/Headcount Budgeting Dashboard.png',
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
                      <div className={styles.designFrameBar}><span /><span /><span /></div>
                      <img src={item.image} alt={item.title} className={styles.designImg} />
                    </div>
                  : <div className={styles.designImgPlaceholder}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect x="3" y="5" width="26" height="22" rx="3" stroke="rgba(255,126,179,0.4)" strokeWidth="1.5"/>
                        <circle cx="10" cy="12" r="2.5" stroke="rgba(255,126,179,0.4)" strokeWidth="1.5"/>
                        <path d="M3 21l7-5 5 4 4-3 10 7" stroke="rgba(255,126,179,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
          <h2 className={styles.sectionTitle}>Grand Champion — and a product that works</h2>
          <div className={styles.resultsGrid}>
            <div className={styles.resultCard}>
              <span className={styles.resultNum}>🏆 #1</span>
              <span className={styles.resultLabel}>Grand Champion Award at the Hilti IT Competition 2024</span>
            </div>
            <div className={styles.resultCard}>
              <span className={styles.resultNum}>AI ✦</span>
              <span className={styles.resultLabel}>ML-powered matching integrated end-to-end into the hiring workflow</span>
            </div>
            <div className={styles.resultCard}>
              <span className={styles.resultNum}>Full</span>
              <span className={styles.resultLabel}>End-to-end product — from brand identity to shipped design system</span>
            </div>
          </div>
          <p className={styles.bodyWide} style={{ marginTop: 32 }}>
            The product was awarded Grand Champion — the highest title at the Hilti IT Competition
            2024 — recognised for its holistic approach to solving talent acquisition at scale.
            The team delivered a complete product: ML-powered matching, a full design system,
            end-to-end visual design, and a live recruitment management platform built in 9 months.
          </p>
        </div>
      </section>

    </CaseStudyLayout>
  )
}
