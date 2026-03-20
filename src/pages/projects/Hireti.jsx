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
    { id: 'wireframes', label: 'Wireframes' },
    { id: 'designsystem', label: 'Design System' },
    { id: 'design', label: 'Final Design' },
    { id: 'results', label: 'Results' },
  ],
  heroVisual: <HiretiHero />,
  next: { slug: 'apspace', title: 'APSpace Admin', sub: 'University records administration system' },
}

function HiretiHero() {
  const cols = ['Sourced', 'Screening', 'Interview', 'Offer']
  const counts = [8, 5, 3, 1]
  return (
    <svg viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '88%', position: 'relative', zIndex: 1 }}>
      {/* Header bar */}
      <rect x="60" y="30" width="780" height="44" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <rect x="76" y="44" width="140" height="16" rx="6" fill="rgba(255,255,255,0.08)"/>
      <rect x="692" y="40" width="128" height="24" rx="12" fill="rgba(255,126,179,0.2)" stroke="rgba(255,126,179,0.4)" strokeWidth="1"/>
      <rect x="712" y="49" width="88" height="6" rx="3" fill="rgba(255,126,179,0.8)"/>

      {/* Kanban columns */}
      {cols.map((col, ci) => (
        <g key={col}>
          <rect x={60 + ci * 198} y={92} width={184} height={292} rx="10"
            fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.055)" strokeWidth="1"/>
          {/* Column header */}
          <rect x={60 + ci * 198} y={92} width={184} height={36} rx="10" fill="rgba(255,255,255,0.04)"/>
          <rect x={76 + ci * 198} y={103} width={80} height={14} rx="5" fill="rgba(255,255,255,0.12)"/>
          <circle cx={220 + ci * 198} cy={110} r={10}
            fill={
              ci === 0 ? 'rgba(255,126,179,0.2)'
              : ci === 1 ? 'rgba(163,107,255,0.2)'
              : ci === 2 ? 'rgba(255,200,92,0.2)'
              : 'rgba(98,232,160,0.2)'
            }
          />
          <text x={220 + ci * 198} y={115} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)" fontWeight="700">{counts[ci]}</text>

          {/* Cards */}
          {Array.from({ length: Math.min(counts[ci], 3) }).map((_, ri) => (
            <g key={ri}>
              <rect x={68 + ci * 198} y={138 + ri * 72} width={168} height={60} rx="8"
                fill={ci === 0 && ri === 0 ? 'rgba(255,126,179,0.07)' : 'rgba(255,255,255,0.035)'}
                stroke={ci === 0 && ri === 0 ? 'rgba(255,126,179,0.25)' : 'rgba(255,255,255,0.065)'}
                strokeWidth="1"
              />
              {/* Avatar */}
              <circle cx={84 + ci * 198} cy={158 + ri * 72} r={10}
                fill={`hsl(${(ci * 55 + ri * 35)}, 55%, 52%)`} fillOpacity="0.45"/>
              {/* Name + role */}
              <rect x={100 + ci * 198} y={151 + ri * 72} width={86} height="7" rx="3.5" fill="rgba(255,255,255,0.15)"/>
              <rect x={100 + ci * 198} y={163 + ri * 72} width={58} height="5" rx="2.5" fill="rgba(255,255,255,0.07)"/>
              {/* Divider */}
              <rect x={68 + ci * 198} y={180 + ri * 72} width={168} height={1} fill="rgba(255,255,255,0.04)"/>
              {/* Tags */}
              <rect x={76 + ci * 198} y={184 + ri * 72} width={38} height="7" rx="3.5"
                fill={ri === 0 ? 'rgba(255,126,179,0.2)' : 'rgba(255,255,255,0.05)'}/>
              <rect x={120 + ci * 198} y={184 + ri * 72} width={52} height="7" rx="3.5" fill="rgba(255,255,255,0.05)"/>
            </g>
          ))}
        </g>
      ))}

      {/* AI match badge */}
      <rect x="66" y="344" width="172" height="28" rx="14" fill="rgba(255,126,179,0.12)" stroke="rgba(255,126,179,0.3)" strokeWidth="0.8"/>
      <circle cx="84" cy="358" r="7" fill="rgba(255,126,179,0.25)"/>
      <rect x="95" y="354" width="52" height="5" rx="2.5" fill="rgba(255,126,179,0.7)"/>
      <rect x="95" y="362" width="36" height="4" rx="2" fill="rgba(255,126,179,0.35)"/>
      <rect x="208" y="350" width="22" height="16" rx="8" fill="rgba(98,232,160,0.2)" stroke="rgba(98,232,160,0.35)" strokeWidth="0.8"/>
      <rect x="213" y="355" width="12" height="4" rx="2" fill="rgba(98,232,160,0.7)"/>
    </svg>
  )
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
                The system earned the Grand Champion Award — the highest recognition at the competition
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
            Although thousands of applications are sent in every day, the company tends to have issues
            in searching for candidates that fulfil their requirement criteria. The current structure
            of the recruitment system is not unified — it requires interactions from different types
            of recruitment management platforms, creating friction and delays at every step.
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
                to assess candidates' levels of experience and match them to role requirements
                without manual review of every application.
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
                recruitment process — leaving recruiters, hiring managers, and candidates without
                a clear view of where decisions stood.
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
                in the process — teams had no single source of truth for where a requisition or
                candidate stood at any given time.
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
                <div className={styles.personaIcon}>{p.icon}</div>
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
          <div className={styles.processFlow}>
            {[
              { num: '01', label: 'Job Requisition', desc: 'Hiring manager submits a role request via email or paper form. Approval routing is manual and opaque.' },
              { num: '02', label: 'Job Posting', desc: 'HR manually posts to multiple platforms. No centralised tracking of where listings are published.' },
              { num: '03', label: 'Application Review', desc: 'CVs collected via email or portals. Recruiters manually review and shortlist without scoring tools.' },
              { num: '04', label: 'Candidate Screening', desc: 'Phone screens logged in spreadsheets. Notes are siloed — not visible to hiring managers.' },
              { num: '05', label: 'Interview Coordination', desc: 'Interview scheduling handled manually over email. Calendar conflicts cause significant delays.' },
              { num: '06', label: 'Decision & Offer', desc: 'Hiring decisions communicated informally. Offer letters generated outside the system.' },
            ].map((step, i, arr) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.processStepInner}>
                  <div className={styles.processNum}>{step.num}</div>
                  <div className={styles.processLabel}>{step.label}</div>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
                {i < arr.length - 1 && <div className={styles.processArrow}>→</div>}
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

      {/* ── Wireframes ── */}
      <section id="wireframes" className={styles.section}>
        <div className="container">
          <p className="section-label">Wireframes</p>
          <h2 className={styles.sectionTitle}>From rough concepts to structured flows</h2>
          <p className={styles.bodyWide}>
            Wireframes were used to explore layout structures, navigation patterns, and core
            interaction flows before committing to visual design. Each screen was iterated
            on with the team to validate that the information architecture matched how recruiters
            and hiring managers think about their work.
          </p>
          <div className={styles.wireframesGrid}>
            {['Dashboard Overview', 'Candidate Pipeline', 'Candidate Profile', 'Job Management', 'Analytics', 'Approval Flow'].map(label => (
              <div key={label} className={styles.wireframeCard}>
                <div className={styles.wireframePlaceholder}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="2" y="4" width="24" height="20" rx="2.5" stroke="rgba(255,126,179,0.35)" strokeWidth="1.2"/>
                    <rect x="5" y="7" width="8" height="6" rx="1.5" fill="rgba(255,126,179,0.12)" stroke="rgba(255,126,179,0.25)" strokeWidth="1"/>
                    <rect x="15" y="7" width="9" height="2.5" rx="1" fill="rgba(255,126,179,0.2)"/>
                    <rect x="15" y="11" width="6" height="2.5" rx="1" fill="rgba(255,126,179,0.12)"/>
                    <rect x="5" y="16" width="19" height="2" rx="1" fill="rgba(255,126,179,0.1)"/>
                    <rect x="5" y="20" width="13" height="2" rx="1" fill="rgba(255,126,179,0.07)"/>
                  </svg>
                </div>
                <span className={styles.wireframeLabel}>{label}</span>
              </div>
            ))}
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
              <div className={styles.dsImgPlaceholder}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="9" cy="9" r="5" fill="rgba(255,126,179,0.3)" stroke="rgba(255,126,179,0.5)" strokeWidth="1"/>
                  <circle cx="19" cy="9" r="5" fill="rgba(163,107,255,0.3)" stroke="rgba(163,107,255,0.5)" strokeWidth="1"/>
                  <circle cx="14" cy="19" r="5" fill="rgba(98,232,160,0.3)" stroke="rgba(98,232,160,0.5)" strokeWidth="1"/>
                </svg>
                <span className={styles.dsImgLabel}>Colour palette placeholder</span>
              </div>
            </div>
            <div className={styles.dsCard}>
              <div className={styles.dsCardHeader}>
                <span className={styles.dsCardNum}>02</span>
                <span className={styles.dsCardTitle}>Typography</span>
              </div>
              <div className={styles.dsImgPlaceholder}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M4 7h20M4 13h14M4 19h10" stroke="rgba(255,126,179,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className={styles.dsImgLabel}>Typography scale placeholder</span>
              </div>
            </div>
            <div className={styles.dsCard}>
              <div className={styles.dsCardHeader}>
                <span className={styles.dsCardNum}>03</span>
                <span className={styles.dsCardTitle}>Components</span>
              </div>
              <div className={styles.dsImgPlaceholder}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="3" y="8" width="10" height="6" rx="2" fill="rgba(255,126,179,0.2)" stroke="rgba(255,126,179,0.4)" strokeWidth="1"/>
                  <rect x="15" y="8" width="10" height="6" rx="2" stroke="rgba(255,126,179,0.3)" strokeWidth="1"/>
                  <rect x="3" y="17" width="22" height="5" rx="2" stroke="rgba(255,126,179,0.25)" strokeWidth="1"/>
                </svg>
                <span className={styles.dsImgLabel}>Component library placeholder</span>
              </div>
            </div>
            <div className={styles.dsCard}>
              <div className={styles.dsCardHeader}>
                <span className={styles.dsCardNum}>04</span>
                <span className={styles.dsCardTitle}>Iconography</span>
              </div>
              <div className={styles.dsImgPlaceholder}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="8" cy="8" r="4" stroke="rgba(255,126,179,0.35)" strokeWidth="1"/>
                  <rect x="16" y="4" width="8" height="8" rx="1.5" stroke="rgba(255,126,179,0.35)" strokeWidth="1"/>
                  <path d="M4 20l4-4 4 4 4-4 4 4" stroke="rgba(255,126,179,0.35)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={styles.dsImgLabel}>Icon set placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final Design ── */}
      <section id="design" className={styles.section}>
        <div className="container">
          <p className="section-label">Design</p>
          <h2 className={styles.sectionTitle}>Three design features that make it work</h2>

          {[
            {
              num: '01',
              title: 'Candidate matching with AI-ranked shortlists',
              desc: 'Instead of presenting recruiters with a raw list of applicants, the system surfaces AI-ranked shortlists based on job criteria. Recruiters see a match score and key qualification signals for each candidate at a glance, dramatically reducing time spent screening.',
            },
            {
              num: '02',
              title: 'Visual pipeline management across all roles',
              desc: 'A kanban-style pipeline view gives hiring teams a live overview of every candidate across all active job postings. Stage transitions, feedback, and interview scheduling are all accessible from the same view — no context switching required.',
            },
            {
              num: '03',
              title: 'Analytics dashboard for hiring performance',
              desc: 'Real-time dashboards surface key metrics — time-to-fill, pipeline health, stage conversion rates, and team activity — giving talent acquisition leads the data they need to identify bottlenecks and make informed decisions.',
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
                    <rect x="3" y="5" width="26" height="22" rx="3" stroke="rgba(255,126,179,0.4)" strokeWidth="1.5"/>
                    <circle cx="10" cy="12" r="2.5" stroke="rgba(255,126,179,0.4)" strokeWidth="1.5"/>
                    <path d="M3 21l7-5 5 4 4-3 10 7" stroke="rgba(255,126,179,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
