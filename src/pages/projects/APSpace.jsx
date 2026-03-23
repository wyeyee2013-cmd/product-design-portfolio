import { useEffect } from 'react'
import CaseStudyLayout from '../../components/CaseStudyLayout'
import styles from './APSpace.module.css'

const META = {
  client: 'Asia Pacific University',
  title: 'APSpace Admin',
  subtitle: 'Administer university records efficiently',
  tags: ['Education', 'UX/UI Design', 'Product Development', 'Branding'],
  accent: '#62e8a0',
  accentDim: 'rgba(98,232,160,0.08)',
  heroBg: 'linear-gradient(135deg, #0d1f16 0%, #112818 50%, #091510 100%)',
  metaItems: [
    { label: 'My Role', value: 'UX/UI Design Lead — Product Development, Branding, Interaction Design, Visual Design, Prototyping' },
    { label: 'Team', value: 'Tahmid Rahman' },
    { label: 'Timeline', value: 'September 2022 – November 2023 · 1 year 3 months' },
  ],
  heroImage: '/APSpace.png',
  sections: [
    { id: 'overview',     label: 'Overview' },
    { id: 'problem',      label: 'Problem' },
    { id: 'research',     label: 'Research' },
    { id: 'process',      label: 'Design Process' },
    { id: 'designsystem', label: 'Design System' },
    { id: 'design',       label: 'Final Design' },
    { id: 'results',      label: 'Results' },
    { id: 'takeaways',    label: 'Key Takeaways' },
  ],
  next: { slug: 'feedme', title: 'FeedMe POS', sub: 'Restaurant point-of-sale system redesigned for speed' },
}

export default function APSpace() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <CaseStudyLayout meta={META}>

      {/* ── Overview ── */}
      <section id="overview" className={styles.section}>
        <div className="container">
          <p className="section-label">Overview</p>
          <div className={styles.overviewGrid}>
            <div>
              <h2 className={styles.sectionTitle}>Enhancing the current administrative experience</h2>
              <p className={styles.body}>
                I was the Lead Designer for the APSpace Admin system, working to enhance the productivity
                and satisfaction of the university admins, while encouraging them to adapt to newer
                technologies. I was tasked to construct a whole new administrative system to replace the
                legacy system hosted on SQL server itself.
              </p>
              <p className={styles.body}>
                Currently, the adoption rate of the admins towards the new system is as high as 85%.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statCard}>
                <span className={styles.statNum}>85%</span>
                <span className={styles.statLabel}>Admin adoption rate towards the new system</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>10+</span>
                <span className={styles.statLabel}>Design iterations across all phases</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>1yr+</span>
                <span className={styles.statLabel}>End-to-end product delivery timeline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section id="problem" className={styles.section}>
        <div className="container">
          <p className="section-label">The Problem</p>
          <h2 className={styles.sectionTitle}>To enhance the productivity of employees by replacing the legacy system</h2>
          <p className={styles.bodyWide}>
            The legacy system uses old-fashioned UI with cluttered information. Hence, the university
            management has decided to revamp the legacy system by developing a replacement with a more
            modern and user-friendly interface.
          </p>
          <div className={styles.problemGrid}>
            {[
              {
                title: 'No Brand Image',
                desc: 'Lesser trust is developed among the employees while using the system.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
              {
                title: 'Information Overload',
                desc: 'Users are required to enter and process unnecessary information.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6 8h8M6 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
              {
                title: 'Unproductive to Use',
                desc: 'Users are not motivated to use the system due to its complex user flow.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3v4M10 13v4M3 10h4M13 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>,
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
            <p>The Goal — to provide a whole new experience to users by simplifying the user flow and beautifying the user interface through reducing the amount of information present.</p>
          </div>
        </div>
      </section>

      {/* ── Research ── */}
      <section id="research" className={styles.section}>
        <div className="container">
          <p className="section-label">Research</p>
          <h2 className={styles.sectionTitle}>Specially crafted for our users</h2>
          <p className={styles.bodyWide}>
            Before diving deeper into the design process, the team identified our target users — most of
            them being the admins of the university, who came to have several types of personalities and
            motivations. They are broken down into three types:
          </p>
          <div className={styles.personasGrid}>
            {[
              {
                name: 'The Non-Tech Savvy',
                desc: 'Does not take many initiatives to explore technology. Prefers to stick to traditional methods.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
              {
                name: 'The Lazy Learners',
                desc: 'Only willing to learn new products or functions if it brings direct benefits to their work.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3v3M10 14v3M3 10h3M14 10h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>,
              },
              {
                name: 'The Busy Bunch',
                desc: 'Does not like to go through many layers to obtain information. Prefers a straightforward working style.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
            ].map(p => (
              <div key={p.name} className={styles.personaCard}>
                <div className={styles.personaIcon}>{p.icon}</div>
                <div className={styles.personaName}>{p.name}</div>
                <div className={styles.personaDesc}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design Process ── */}
      <section id="process" className={styles.section}>
        <div className="container">
          <p className="section-label">Design Process</p>
          <h2 className={styles.sectionTitle}>New design processes. Fresh look.</h2>
          <div className={styles.processSteps}>
            {[
              {
                num: '01',
                title: 'Introducing design sprints',
                desc: 'Design sprints were conducted between the product managers and UX/UI Designers to ensure alignment towards a common goal — to discuss roadblocks, requirements, and specifications across the processes of discover, define, develop, and deliver.',
              },
              {
                num: '02',
                title: 'Enhancing the information architecture and user flow',
                desc: 'The design team and the requirement team sat together to discuss potential user flows that could maximise productivity and satisfaction. We aimed to create a system that requires lesser effort in scrolling as it is less overwhelming to manage.',
              },
              {
                num: '03',
                title: 'Sketching the layouts through wireframing',
                desc: 'Multiple layouts were sketched and arranged to ensure good user flow while fulfilling the requirements of the targeted audiences — to keep the interface compact but less complicated to screen through.',
              },
              {
                num: '04',
                title: 'Iterate, iterate and iterate',
                desc: 'More than 10 iterations were made on the designs due to the change of business requirements, change of priorities in the product roadmap, or to perform further enhancements of the user experience.',
              },
            ].map(step => (
              <div key={step.num} className={styles.processStep}>
                <span className={styles.processNum}>{step.num}</span>
                <div>
                  <div className={styles.processTitle}>{step.title}</div>
                  <div className={styles.processDesc}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design System ── */}
      <section id="designsystem" className={styles.section}>
        <div className="container">
          <p className="section-label">Design System</p>
          <h2 className={styles.sectionTitle}>Morphing the university's branding into the system</h2>
          <p className={styles.bodyWide}>
            The university decided to improve their identity by introducing unique branding guidelines that
            represent their values and the image they portray. Blue is chosen as the main colour as it
            represents the professionalism and trust catered towards students, clients and third-party
            collaborators.
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
                    { hex: '#1565C0', name: 'Primary Blue' },
                    { hex: '#1976D2', name: 'Blue 700' },
                    { hex: '#42A5F5', name: 'Blue 400' },
                    { hex: '#E3F2FD', name: 'Blue 50' },
                    { hex: '#FFFFFF', name: 'White', border: true },
                  ].map(s => (
                    <div key={s.hex} className={styles.colorSwatch}>
                      <div
                        className={styles.colorSwatchBox}
                        style={{ background: s.hex, border: s.border ? '1px solid rgba(0,0,0,0.1)' : undefined }}
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
              <div style={{ padding: '20px 24px 24px', color: 'var(--text-muted)', fontSize: 14 }}>
                Built with Angular Material — buttons, tables, dialogs, form fields, and navigation components
                adapted to APSpace's brand identity.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final Design ── */}
      <section id="design" className={styles.section}>
        <div className="container">
          <p className="section-label">Final Design</p>
          <h2 className={styles.sectionTitle}>Introducing a whole new experience in APSpace Admin</h2>

          {[
            {
              num: '01',
              title: 'Welcoming you with a refreshing homepage',
              desc: 'A homepage serves as a prominent entry point for users entering the system — compared to the previous system where there was no homepage providing a brief description of functionalities and navigations.',
              image: '/BbykbvD8RcUIwS5bh7Q5EOxZK0.webp',
            },
            {
              num: '02',
              title: 'Better search systems',
              desc: 'The search function was made more prominent and easier to use, allowing users to search students across multiple fields rather than requiring an exact ID number match.',
              image: '/9XLrZx5JvrP51bjLLZSajZ9I0.webp',
            },
            {
              num: '03',
              title: 'Manage students in an effective way',
              desc: 'We designed a series of navigation options so users can easily navigate to the information they need about a student, without being overwhelmed by thousands of records.',
              image: '/oeL6ksI3fj6eToKuWViI0Ef6U.webp',
            },
            {
              num: '04',
              title: 'Don\'t be confused. Just write some remarks.',
              desc: 'The remarks section ensures all departments remain on the same page via timely records and comments, resolving miscommunication between departments.',
              image: '/44mlBwRbevUhdfCALmRpXnd9k.webp',
            },
            {
              num: '05',
              title: 'Access through your fingertips',
              desc: 'APSpace Admin can also be accessed through mobile phones and tablets, presenting a familiar experience consistent with desktops and laptops.',
              image: '/HFzepbluzcWjbKet0p4iY0Zdgeg.webp',
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
                        <rect x="3" y="3" width="22" height="22" rx="3" stroke="rgba(98,232,160,0.35)" strokeWidth="1.2"/>
                        <circle cx="9.5" cy="9.5" r="2" stroke="rgba(98,232,160,0.35)" strokeWidth="1"/>
                        <path d="M3 18l6-5 5 5 4-4 7 6" stroke="rgba(98,232,160,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={styles.designImgLabel}>Image coming soon</span>
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
          <h2 className={styles.sectionTitle}>Achieving bigger milestones by adapting to changes</h2>
          <p className={styles.bodyWide}>
            As the project functionalities are released based on phases, the actual value of the impacts
            are hard to obtain, and due to confidentiality reasons, estimated values will be given.
          </p>
          <div className={styles.resultsGrid}>
            <div className={styles.resultCard}>
              <div className={styles.resultNum}>85%</div>
              <div className={styles.resultLabel}>Admin adoption rate towards the new system</div>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultNum}>4/5</div>
              <div className={styles.resultLabel}>Satisfaction rating from admins post-launch</div>
            </div>
            <div className={styles.resultCard}>
              <div className={styles.resultNum}>10+</div>
              <div className={styles.resultLabel}>Design iterations across all phases</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Takeaways ── */}
      <section id="takeaways" className={styles.section}>
        <div className="container">
          <p className="section-label">Key Takeaways</p>
          <h2 className={styles.sectionTitle}>Continuing the process of learning something new</h2>
          <p className={styles.bodyWide}>
            In every phase, every design that we have done, new things are unfolded unexpectedly, which
            brings a big realisation towards the project.
          </p>
          <div className={styles.takeawaysGrid}>
            {[
              {
                title: 'There are no perfect designs',
                desc: 'The process of designing for users should be constantly evolving. If you think your designs are 100% perfect, your users might not feel the same way.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3l1.8 5.5H17l-4.6 3.3 1.8 5.5L10 14l-4.2 3.3 1.8-5.5L3 8.5h5.2L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
              },
              {
                title: 'Take feasibility into account',
                desc: 'A design could be attractive and interactive. However, placing too many idealistic thoughts might disrupt implementation if developers lack the skillsets to achieve the level of interactions you desire.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 10h6M7 7h4M7 13h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
              {
                title: 'Collaboration is everything',
                desc: 'Constructing a system should include everyone from different areas of expertise. As a designer, actively collaborate with other teams to ensure everyone is on the same page.',
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="13" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M2 17c0-3 2-5 5-5h6c3 0 5 2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
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
