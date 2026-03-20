import { useEffect } from 'react'
import CaseStudyLayout from '../../components/CaseStudyLayout'
import cs from './CaseStudy.module.css'

const META = {
  title: 'WolfPlanet',
  subtitle: 'Designing a Web3 platform where domain experts earn crypto rewards for sharing verified knowledge.',
  tags: ['Web3', 'Platform Design', 'Blockchain', 'DeFi', 'Token UX'],
  accent: '#ff7eb3',
  accentDim: 'rgba(255,126,179,0.08)',
  heroBg: 'linear-gradient(135deg, #1e1020 0%, #2a1035 50%, #1a0d2a 100%)',
  metaItems: [
    { label: 'Role', value: 'Product Designer' },
    { label: 'Timeline', value: '20 Weeks' },
    { label: 'Year', value: '2023' },
    { label: 'Platform', value: 'Web (dApp)' },
  ],
  heroVisual: <WolfHero />,
  next: { slug: 'apspace', title: 'APSpace Admin', sub: 'University records administration system' },
}

function WolfHero() {
  return (
    <svg viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '86%', position: 'relative', zIndex: 1 }}>
      {/* Central token graph */}
      <circle cx="450" cy="200" r="140" fill="rgba(255,126,179,0.03)" stroke="rgba(255,126,179,0.08)" strokeWidth="1" strokeDasharray="4 6"/>
      <circle cx="450" cy="200" r="90" fill="rgba(255,126,179,0.05)" stroke="rgba(255,126,179,0.12)" strokeWidth="1"/>
      <circle cx="450" cy="200" r="44" fill="rgba(255,126,179,0.12)" stroke="rgba(255,126,179,0.3)" strokeWidth="1.5"/>
      {/* Center icon */}
      <circle cx="450" cy="200" r="32" fill="rgba(255,126,179,0.2)"/>
      <path d="M438 200L450 186L462 200L450 214Z" fill="#ff7eb3" fillOpacity="0.9"/>
      <circle cx="450" cy="200" r="6" fill="#ff7eb3"/>

      {/* Knowledge nodes */}
      {[
        { cx: 450, cy: 60, label: 'Finance' },
        { cx: 590, cy: 130, label: 'Science' },
        { cx: 590, cy: 270, label: 'Tech' },
        { cx: 450, cy: 340, label: 'Design' },
        { cx: 310, cy: 270, label: 'Health' },
        { cx: 310, cy: 130, label: 'Law' },
      ].map(({ cx, cy, label }, i) => (
        <g key={label}>
          <line x1={cx} y1={cy} x2={450} y2={200} stroke="rgba(255,126,179,0.15)" strokeWidth="1"/>
          <circle cx={cx} cy={cy} r={26} fill="rgba(255,255,255,0.04)" stroke="rgba(255,126,179,0.2)" strokeWidth="1"/>
          <circle cx={cx} cy={cy} r={14} fill="rgba(255,126,179,0.1)"/>
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.7)" fontWeight="700">{label}</text>
        </g>
      ))}

      {/* Wallet panel */}
      <rect x="60" y="60" width="200" height="270" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <rect x="60" y="60" width="200" height="40" rx="14" fill="rgba(255,255,255,0.04)"/>
      <rect x="76" y="74" width="80" height="12" rx="4" fill="rgba(255,255,255,0.1)"/>
      <rect x="76" y="116" width="168" height="60" rx="10" fill="rgba(255,126,179,0.07)" stroke="rgba(255,126,179,0.15)" strokeWidth="0.8"/>
      <rect x="88" y="128" width="60" height="8" rx="4" fill="rgba(255,126,179,0.6)"/>
      <rect x="88" y="141" width="100" height="24" rx="4" fill="transparent"/>
      <text x="88" y="158" fontSize="22" fontWeight="800" fill="#ff7eb3" fillOpacity="0.9">472 WLF</text>
      <rect x="76" y="188" width="80" height="7" rx="3" fill="rgba(255,255,255,0.1)"/>
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="76" y={206 + i*32} width="168" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
          <circle cx="90" cy={218 + i*32} r="5" fill="rgba(255,126,179,0.3)"/>
          <rect x="102" y={213 + i*32} width="60" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
          <rect x="200" y={213 + i*32} width="36" height="6" rx="3" fill="rgba(255,126,179,0.4)"/>
        </g>
      ))}

      {/* Feed panel */}
      <rect x="640" y="60" width="200" height="270" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <rect x="640" y="60" width="200" height="40" rx="14" fill="rgba(255,255,255,0.04)"/>
      <rect x="656" y="74" width="100" height="12" rx="4" fill="rgba(255,255,255,0.1)"/>
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="648" y={112 + i*52} width="184" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
          <circle cx="662" cy={130 + i*52} r="8" fill={`hsl(${280 + i*30},60%,60%)`} fillOpacity="0.5"/>
          <rect x="676" y={122 + i*52} width={[70,90,60,80][i]} height="7" rx="3" fill="rgba(255,255,255,0.12)"/>
          <rect x="676" y={133 + i*52} width={[100,80,110,90][i]} height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
          <rect x="648" y={146 + i*52} width="184" height="1" fill="rgba(255,255,255,0.03)"/>
          <rect x="656" y={150 + i*52} width="32" height="6" rx="3" fill="rgba(255,126,179,0.2)"/>
          <rect x="695" y={150 + i*52} width="40" height="6" rx="3" fill="rgba(255,255,255,0.05)"/>
        </g>
      ))}
    </svg>
  )
}

export default function WolfPlanet() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <CaseStudyLayout meta={META}>
      <div className={cs.overview}>
        <div className={cs.overviewText}>
          <h2>The Challenge</h2>
          <p>
            WolfPlanet is a blockchain-based knowledge marketplace where verified domain experts
            (doctors, lawyers, engineers, researchers) contribute answers, guides, and deep-dives
            in exchange for WLF tokens — the platform's native currency.
          </p>
          <p>
            The challenge was unique: design a Web3 product that feels trustworthy and accessible
            to <em>non-crypto</em> users (the knowledge consumers) while providing the rich token
            mechanics that crypto-native contributors expected. Two very different mental models,
            one product.
          </p>
          <p>
            I joined the project 3 weeks before their first token presale, with an MVP that felt
            like a developer prototype — raw, technical, and deeply confusing to non-Web3 users.
          </p>
        </div>
        <div className={cs.overviewStats}>
          <div className={cs.stat}>
            <div className={cs.statNum}>2×</div>
            <div className={cs.statLabel}>User groups with conflicting mental models to design for</div>
          </div>
          <div className={cs.stat}>
            <div className={cs.statNum}>12%</div>
            <div className={cs.statLabel}>MVP onboarding completion for non-crypto users</div>
          </div>
          <div className={cs.stat}>
            <div className={cs.statNum}>4,200+</div>
            <div className={cs.statLabel}>Beta signups in 30 days post-redesign</div>
          </div>
        </div>
      </div>

      <div className={cs.section}>
        <p className="section-label">The Problem Space</p>
        <h2>Designing for two worlds at once</h2>
        <p>
          My first week was spent understanding the users — not just who they were, but what
          conceptual frameworks they brought to the product. I recruited 8 "knowledge consumers"
          (non-crypto) and 6 "knowledge contributors" (crypto-native) for in-depth interviews.
        </p>
        <div className={cs.insightGrid}>
          <div className={cs.insightCard}>
            <div className={cs.insightIcon}>🌐</div>
            <div className={cs.insightTitle}>Non-crypto users: trust is everything</div>
            <div className={cs.insightDesc}>They didn't care about tokens. They cared about credentials, answer quality, and whether the information was reliable. "Is this like StackOverflow but worse?"</div>
          </div>
          <div className={cs.insightCard}>
            <div className={cs.insightIcon}>💎</div>
            <div className={cs.insightTitle}>Crypto users: reward visibility</div>
            <div className={cs.insightDesc}>Contributors wanted real-time token earn tracking, staking options, and leaderboards. They evaluated platforms by earning potential first.</div>
          </div>
          <div className={cs.insightCard}>
            <div className={cs.insightIcon}>🔐</div>
            <div className={cs.insightTitle}>Wallet friction was a showstopper</div>
            <div className={cs.insightDesc}>The MVP required MetaMask setup before accessing anything. 88% of non-crypto users dropped off at this step.</div>
          </div>
          <div className={cs.insightCard}>
            <div className={cs.insightIcon}>✅</div>
            <div className={cs.insightTitle}>Verification was the value</div>
            <div className={cs.insightDesc}>Both groups agreed: the platform's core value was <em>verified expertise</em>. Neither wanted unverified random answers.</div>
          </div>
        </div>
      </div>

      <div className={cs.section}>
        <div className={cs.callout}>
          <p>"I'm a cardiologist. I can give great answers. But I had to Google what MetaMask was before I could even create a profile. I gave up." — Beta contributor, cardiology</p>
        </div>
      </div>

      <div className={cs.section}>
        <p className="section-label">Key Design Decisions</p>
        <h2>Progressive Web3 disclosure</h2>
        <div className={cs.processGrid}>
          <div className={cs.processStep}>
            <div className={cs.processNum}>01</div>
            <div className={cs.processTitle}>Custodial-first Onboarding</div>
            <div className={cs.processDesc}>New users start with email/password. Wallet connection is optional — introduced after first meaningful interaction.</div>
          </div>
          <div className={cs.processStep}>
            <div className={cs.processNum}>02</div>
            <div className={cs.processTitle}>Token Abstraction</div>
            <div className={cs.processDesc}>For non-crypto users, WLF tokens are shown as "credits" with a familiar points metaphor. Crypto layer surfaces only if opted in.</div>
          </div>
          <div className={cs.processStep}>
            <div className={cs.processNum}>03</div>
            <div className={cs.processTitle}>Expert Verification UX</div>
            <div className={cs.processDesc}>Designed a credential badge system with clear visual hierarchy — verified answers are instantly distinguishable.</div>
          </div>
          <div className={cs.processStep}>
            <div className={cs.processNum}>04</div>
            <div className={cs.processTitle}>Contributor Dashboard</div>
            <div className={cs.processDesc}>Built a full earnings & reputation dashboard for contributors — real-time token tracking, question queue, streak rewards.</div>
          </div>
        </div>
        <p>
          The biggest conceptual breakthrough was reframing the product for non-crypto users entirely.
          Instead of "blockchain knowledge exchange," it became "expert-verified answers from
          credentialed professionals." The Web3 infrastructure was invisible until users
          chose to engage with it.
        </p>
        <h3>The verification badge system</h3>
        <p>
          I designed a tiered credentialing system with 4 levels: Verified (email), Credentialed
          (professional license), Expert (peer-reviewed publication or 500+ answer upvotes), and
          Legend (top 1% by domain). Each tier had a distinct visual badge and elevated answer
          prominence in the feed. This single change drove the most positive qualitative
          feedback in beta testing.
        </p>
      </div>

      <div className={cs.section}>
        <p className="section-label">Results</p>
        <h2>Beta launch impact</h2>
        <div className={cs.outcomeGrid}>
          <div className={cs.outcomeCard}>
            <div className={cs.outcomeNum}>74%</div>
            <div className={cs.outcomeLabel}>Onboarding completion (up from 12%)</div>
          </div>
          <div className={cs.outcomeCard}>
            <div className={cs.outcomeNum}>4,200+</div>
            <div className={cs.outcomeLabel}>Beta signups in first 30 days</div>
          </div>
          <div className={cs.outcomeCard}>
            <div className={cs.outcomeNum}>68%</div>
            <div className={cs.outcomeLabel}>Non-crypto users who connected wallet within 7 days</div>
          </div>
        </div>
        <p>
          The progressive disclosure model proved itself: by removing the upfront wallet requirement,
          we tripled onboarding completion. More surprisingly, 68% of users who initially skipped
          wallet connection returned to connect it after experiencing the platform value — proving
          that trust must come before the ask.
        </p>
      </div>
    </CaseStudyLayout>
  )
}
