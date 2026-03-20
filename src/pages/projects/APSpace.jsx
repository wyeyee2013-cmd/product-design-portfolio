import { useEffect } from 'react'
import CaseStudyLayout from '../../components/CaseStudyLayout'
import cs from './CaseStudy.module.css'

const META = {
  title: 'APSpace Admin',
  subtitle: 'Modernising a legacy university records system used by 15,000+ students and 400+ staff daily.',
  tags: ['EdTech', 'Admin Dashboard', 'Data-Heavy UI', 'Enterprise'],
  accent: '#62e8a0',
  accentDim: 'rgba(98,232,160,0.08)',
  heroBg: 'linear-gradient(135deg, #0d1f16 0%, #112818 50%, #091510 100%)',
  metaItems: [
    { label: 'Role', value: 'Product Designer' },
    { label: 'Timeline', value: '24 Weeks' },
    { label: 'Year', value: '2022' },
    { label: 'Platform', value: 'Web (Admin Portal)' },
  ],
  heroVisual: <APSpaceHero />,
  next: { slug: 'feedme', title: 'FeedMe POS', sub: 'Restaurant point-of-sale system redesigned for speed' },
}

function APSpaceHero() {
  return (
    <svg viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '87%', position: 'relative', zIndex: 1 }}>
      {/* Sidebar */}
      <rect x="60" y="30" width="160" height="340" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <rect x="76" y="50" width="60" height="20" rx="6" fill="rgba(98,232,160,0.2)"/>
      <rect x="76" y="50" width="60" height="20" rx="6" fill="transparent"/>
      <rect x="82" y="56" width="48" height="8" rx="4" fill="rgba(98,232,160,0.7)"/>
      <rect x="76" y="82" width="128" height="1" fill="rgba(255,255,255,0.05)"/>
      {['Dashboard','Students','Courses','Timetable','Grades','Reports'].map((label, i) => (
        <g key={label}>
          <rect x="72" y={92 + i*38} width="136" height="30" rx="8"
            fill={i === 0 ? 'rgba(98,232,160,0.1)' : 'transparent'}
            stroke={i === 0 ? 'rgba(98,232,160,0.2)' : 'transparent'} strokeWidth="0.8"/>
          <rect x="84" y={103 + i*38} width={[72,60,56,68,44,52][i]} height="8" rx="4"
            fill={i === 0 ? 'rgba(98,232,160,0.7)' : 'rgba(255,255,255,0.1)'}/>
        </g>
      ))}

      {/* Main dashboard */}
      <rect x="236" y="30" width="624" height="340" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      {/* Topbar */}
      <rect x="236" y="30" width="624" height="40" rx="12" fill="rgba(255,255,255,0.04)"/>
      <rect x="252" y="42" width="160" height="16" rx="5" fill="rgba(255,255,255,0.08)"/>
      <rect x="760" y="37" width="80" height="26" rx="8" fill="rgba(98,232,160,0.12)" stroke="rgba(98,232,160,0.25)" strokeWidth="0.8"/>
      <rect x="772" y="47" width="56" height="6" rx="3" fill="rgba(98,232,160,0.7)"/>

      {/* Stat cards */}
      {[
        { label: '15,284', sub: 'Total Students', col: '#62e8a0' },
        { label: '247', sub: 'Active Courses', col: '#5cc8ff' },
        { label: '94.2%', sub: 'Attendance Rate', col: '#a36bff' },
        { label: '3.67', sub: 'Avg. GPA', col: '#ffb347' },
      ].map(({ label, sub, col }, i) => (
        <g key={i}>
          <rect x={252 + i * 148} y={84} width="136" height="68" rx="10"
            fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
          <rect x={268 + i * 148} y={96} width="24" height="24" rx="6" fill={col} fillOpacity="0.15"/>
          <rect x={272 + i * 148} y={100} width="16" height="16" rx="4" fill={col} fillOpacity="0.4"/>
          <text x={268 + i * 148} y={134} fontSize="14" fontWeight="800" fill={col} fillOpacity="0.9">{label}</text>
          <rect x={268 + i * 148} y={142} width={[64,52,60,36][i]} height="5" rx="2.5" fill="rgba(255,255,255,0.08)"/>
        </g>
      ))}

      {/* Table */}
      <rect x="252" y="166" width="388" height="188" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>
      <rect x="252" y="166" width="388" height="32" rx="10" fill="rgba(255,255,255,0.04)"/>
      {['Student','Program','Year','Status'].map((h, i) => (
        <rect key={h} x={264 + i*90} y={179} width={[70,60,30,44][i]} height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
      ))}
      {[0,1,2,3,4].map(row => (
        <g key={row}>
          <rect x="252" y={198 + row*30} width="388" height="1" fill="rgba(255,255,255,0.04)"/>
          <circle cx="272" cy={213 + row*30} r="8" fill={`hsl(${row*50},50%,55%)`} fillOpacity="0.4"/>
          <rect x="286" y={208 + row*30} width="52" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
          <rect x="354" y={208 + row*30} width="44" height="6" rx="3" fill="rgba(255,255,255,0.07)"/>
          <rect x="444" y={208 + row*30} width="20" height="6" rx="3" fill="rgba(255,255,255,0.07)"/>
          <rect x={[490,490,490,490,490][row]} y={206 + row*30} width="36" height="10" rx="5"
            fill={row % 3 === 0 ? 'rgba(98,232,160,0.2)' : row % 3 === 1 ? 'rgba(255,179,71,0.2)' : 'rgba(92,200,255,0.2)'}
            stroke={row % 3 === 0 ? 'rgba(98,232,160,0.4)' : row % 3 === 1 ? 'rgba(255,179,71,0.4)' : 'rgba(92,200,255,0.4)'}
            strokeWidth="0.6"/>
        </g>
      ))}

      {/* Chart */}
      <rect x="652" y="166" width="196" height="188" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>
      <rect x="668" y="180" width="100" height="10" rx="4" fill="rgba(255,255,255,0.1)"/>
      {[0.6,0.8,0.95,0.7,0.85,0.9,0.75].map((h, i) => (
        <g key={i}>
          <rect x={668 + i*24} y={230 - h*80} width="16" height={h*80} rx="4"
            fill="rgba(98,232,160,0.3)" stroke="rgba(98,232,160,0.5)" strokeWidth="0.8"/>
        </g>
      ))}
      <rect x="668" y="234" width="160" height="1" fill="rgba(255,255,255,0.06)"/>
    </svg>
  )
}

export default function APSpace() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <CaseStudyLayout meta={META}>
      <div className={cs.overview}>
        <div className={cs.overviewText}>
          <h2>The Challenge</h2>
          <p>
            APSpace is the student and staff portal for Asia Pacific University (APU), one of Malaysia's
            largest private universities. The admin-facing side of the platform — used by registrars,
            faculty, and department heads — had not been meaningfully redesigned in 7 years.
          </p>
          <p>
            Staff described their daily workflow as "fighting the system." Critical tasks like grade
            submission, timetable management, and student status updates required navigating 5-8
            separate screens with no clear information architecture. The system was built for
            desktop, but 40% of staff accessed it from tablets and laptops in classrooms.
          </p>
        </div>
        <div className={cs.overviewStats}>
          <div className={cs.stat}>
            <div className={cs.statNum}>15K+</div>
            <div className={cs.statLabel}>Students whose records flow through the system daily</div>
          </div>
          <div className={cs.stat}>
            <div className={cs.statNum}>−52%</div>
            <div className={cs.statLabel}>Reduction in task completion time for key admin flows</div>
          </div>
          <div className={cs.stat}>
            <div className={cs.statNum}>400+</div>
            <div className={cs.statLabel}>Staff members using the redesigned system</div>
          </div>
        </div>
      </div>

      <div className={cs.section}>
        <p className="section-label">Research</p>
        <h2>Going deep into a legacy system</h2>
        <p>
          The most important thing I did in week one was sit with three admin staff members and
          watch them work. Not interviews — observation. I watched a registrar process student
          withdrawals, a faculty member submit grades, and a department head generate an
          attendance report.
        </p>
        <p>What I saw was a masterclass in workarounds:</p>
        <ul>
          <li>The registrar had a handwritten cheat sheet of screen navigation shortcuts taped to her monitor</li>
          <li>The faculty member kept a spreadsheet of student IDs because the search function was "too slow"</li>
          <li>The department head exported data to Excel to run reports the system should have generated natively</li>
        </ul>
        <div className={cs.insightGrid}>
          <div className={cs.insightCard}>
            <div className={cs.insightIcon}>🗺️</div>
            <div className={cs.insightTitle}>Navigation was the root cause</div>
            <div className={cs.insightDesc}>The IA had grown organically over 7 years. Related functions were scattered across 6 top-level menu sections with no logical grouping.</div>
          </div>
          <div className={cs.insightCard}>
            <div className={cs.insightIcon}>📊</div>
            <div className={cs.insightTitle}>Data density without hierarchy</div>
            <div className={cs.insightDesc}>Tables had 20+ columns with no priority ordering. Staff scanned every column to find 2-3 fields they actually needed.</div>
          </div>
          <div className={cs.insightCard}>
            <div className={cs.insightIcon}>🔎</div>
            <div className={cs.insightTitle}>Search was broken</div>
            <div className={cs.insightDesc}>Student search only matched exact ID numbers, not names. Staff avoided it entirely and used departmental lists instead.</div>
          </div>
          <div className={cs.insightCard}>
            <div className={cs.insightIcon}>📱</div>
            <div className={cs.insightTitle}>Responsive was non-existent</div>
            <div className={cs.insightDesc}>The system broke on any viewport below 1280px. Faculty submitting grades from classroom laptops had to scroll horizontally.</div>
          </div>
        </div>
      </div>

      <div className={cs.section}>
        <div className={cs.callout}>
          <p>"I've memorised exactly which 7 clicks to press to get to grade entry. If anything changes, I'm lost. That's not how software should work." — Senior Lecturer, Faculty of Computing</p>
        </div>
      </div>

      <div className={cs.section}>
        <p className="section-label">Design Approach</p>
        <h2>Modernising without disrupting</h2>
        <p>
          A key constraint: 400+ staff had years of muscle memory built around the existing system.
          A complete redesign risked alienating the most experienced users — the ones the university
          most depended on. My challenge was to dramatically improve the experience while
          minimising the relearning curve.
        </p>
        <div className={cs.processGrid}>
          <div className={cs.processStep}>
            <div className={cs.processNum}>01</div>
            <div className={cs.processTitle}>IA Restructure</div>
            <div className={cs.processDesc}>Condensed 6 menu sections into 4 task-oriented groups based on workflow patterns, not feature silos.</div>
          </div>
          <div className={cs.processStep}>
            <div className={cs.processNum}>02</div>
            <div className={cs.processTitle}>Smart Tables</div>
            <div className={cs.processDesc}>Implemented configurable column visibility, sticky headers, inline editing, and column-level sorting with state persistence.</div>
          </div>
          <div className={cs.processStep}>
            <div className={cs.processNum}>03</div>
            <div className={cs.processTitle}>Universal Search</div>
            <div className={cs.processDesc}>Rebuilt search with fuzzy matching, recent lookups, and cross-entity results (students, courses, staff) in a single command palette.</div>
          </div>
          <div className={cs.processStep}>
            <div className={cs.processNum}>04</div>
            <div className={cs.processTitle}>Responsive Grid</div>
            <div className={cs.processDesc}>Built a fluid layout system that degrades gracefully from 1440px to 768px with priority content reflow.</div>
          </div>
        </div>
        <h3>The onboarding transition</h3>
        <p>
          To minimise disruption, I worked with the dev team to implement a "classic mode" toggle for
          the first 3 months post-launch. This gave hesitant staff a safety net, and usage analytics
          showed 94% had abandoned classic mode by month 2 — proving the new system was better,
          not just different.
        </p>
      </div>

      <div className={cs.section}>
        <p className="section-label">Results</p>
        <h2>Adoption and efficiency gains</h2>
        <div className={cs.outcomeGrid}>
          <div className={cs.outcomeCard}>
            <div className={cs.outcomeNum}>−52%</div>
            <div className={cs.outcomeLabel}>Time to complete grade submission (6 min → 2.9 min)</div>
          </div>
          <div className={cs.outcomeCard}>
            <div className={cs.outcomeNum}>94%</div>
            <div className={cs.outcomeLabel}>Staff abandoned "classic mode" within 8 weeks</div>
          </div>
          <div className={cs.outcomeCard}>
            <div className={cs.outcomeNum}>4.4★</div>
            <div className={cs.outcomeLabel}>Post-launch satisfaction score (up from 2.1★)</div>
          </div>
        </div>
        <p>
          The universal search feature alone reduced navigation clicks by an average of 4.2 per
          session. The column configurability was cited by every focus group participant as the
          feature they'd most miss if removed. Sometimes small UX improvements have outsized impact.
        </p>
        <h3>What I'd do differently</h3>
        <p>
          The 24-week timeline meant some features — particularly bulk action workflows and an
          API for third-party grade imports — were deprioritised. In hindsight, I'd have
          advocated harder for an additional 4-week sprint to ship those. They became the top
          feature requests within a month of launch.
        </p>
      </div>
    </CaseStudyLayout>
  )
}
