/**
 * Long-form case-study content, transcribed verbatim from the write-ups on
 * cheryllimm.framer.website. Keyed by the project `id` in projects.js — a
 * project without an entry here just shows its summary and meta block.
 *
 * Each section is an ordered list of items so the page reads in the same
 * sequence as the source, with figures sitting where they actually sit:
 *   { type: 'subhead',     text }
 *   { type: 'text',        text }
 *   { type: 'bullets',     items: [] }
 *   { type: 'callout',     title, subtitle?, bullets?, text }
 *   { type: 'phases',      items: [{ label, title, scope, outcome }] }
 *   { type: 'figure',      src, caption }
 *   { type: 'figureGroup', srcs: [], caption }
 *   { type: 'feature',     title, text, figure: { src | srcs, caption, dark? } }
 *   { type: 'resultCards', items: [] }
 *
 * `feature` keeps a design decision and the screen that shows it in one card,
 * rather than letting the copy and the UI drift apart down the page.
 */

export const CASE_STUDIES = {
  'feedme-pos': {
    sector: 'Food & Beverage Technology',
    title: 'Revamping the FeedMe POS',
    tagline: 'From legacy chaos to a scalable, defensible ecosystem',
    credits: [
      {
        label: 'My Role',
        values: ['Product Designer - UX Audit, UI Design, Design Systems, Usability Testing'],
      },
      {
        label: 'Team',
        values: ['Yong Tee Lee (Lead Product Designer)', 'Amy Low (Senior Product Designer)'],
      },
      { label: 'Platform', values: ['POS (Tablet & Mobile iOS/Android)'] },
      { label: 'Timeline', values: ['November 2025 - August 2026, 10 months'] },
    ],
    sections: [
      {
        label: 'The Overview',
        items: [
          {
            type: 'text',
            text: 'The legacy FeedMe POS system (tablet and mobile) was suffering from technical debt, brand misalignment, and an interface that was becoming too easy for competitors to clone. Collaborating alongside the Lead and Senior Product Designer, I spearheaded the UX audit and UI redesign. We established the foundational design system for the FeedMe brand, overhauled the architecture, and delivered a phased rollout that increased task efficiency by 10% while significantly accelerating engineering handoff.',
          },
        ],
      },
      {
        label: 'The Audit',
        lead: 'UX archaeology & uncovering hidden flows',
        items: [
          {
            type: 'text',
            text: 'The legacy system lacked documentation and was riddled with usability dead-ends. We could not simply build a new UI on top of broken logic.',
          },
          { type: 'subhead', text: 'The Click-Through Audit' },
          {
            type: 'text',
            text: 'I initiated a massive, manual click-through audit of the existing product, pairing directly with frontend and backend engineers to map out the actual (not assumed) user journeys.',
          },
          { type: 'subhead', text: 'Taming the Chaos' },
          {
            type: 'text',
            text: 'I discovered over 10 undocumented, hidden flows buried behind non-descriptive, generic icons. The cognitive load for merchants was massive. We consolidated these fragmented paths into a streamlined, intuitive information architecture, replacing cryptic iconography with clear, predictable navigation patterns.',
          },
        ],
      },
      {
        label: 'The Defensive Moat',
        lead: 'Brand alignment & visual strategy',
        items: [
          {
            type: 'text',
            text: 'The previous iteration of the POS was a generic blue interface that completely missed FeedMe’s vibrant orange brand identity. Worse, its generic nature made it an easy target for copycats. We needed a UI that was aggressively “FeedMe.”',
          },
          { type: 'subhead', text: 'Brand Translation' },
          {
            type: 'text',
            text: 'I led the transition to our new visual identity, introducing bespoke typography and highly customized data visualizations that elevated the product from a basic utility to a premium merchant experience.',
          },
          { type: 'subhead', text: 'Operationalizing Craft' },
          {
            type: 'text',
            text: 'To create a defensible visual moat, we needed rich, proprietary illustrations and icons. Recognizing the bandwidth constraints on our graphic designers, I engineered an AI-assisted generation workflow. This empowered the product design team to independently generate and maintain on-brand icons and illustrations, scaling our visual quality without bottlenecking the graphics team.',
          },
          {
            type: 'compare',
            light: '/assets/pos-07-legacy-order.png',
            dark: '/assets/pos-02-ordering.png',
            labels: ['Legacy', 'Revamped'],
            /* framed on the revamp so it stays uncropped; the legacy screen is
               4:3 and loses a sliver top and bottom */
            aspect: '1194 / 834',
            caption: '02 The generic blue build against the FeedMe revamp — drag to compare',
          },
        ],
      },
      {
        label: 'Execution',
        lead: 'Architecting the base & phased rollout',
        items: [
          {
            type: 'text',
            text: 'Building a design system while simultaneously redesigning the core product is akin to changing a tire on a moving car. To manage risk, we approached this systematically.',
          },
          { type: 'subhead', text: 'Establishing the FeedMe Foundation' },
          {
            type: 'text',
            text: 'In close collaboration with the Lead and Senior PD, I helped architect the core design system that now powers the entire FeedMe ecosystem. We established base design tokens and a robust component library, moving the engineering team away from hard-coded legacy styles.',
          },
          { type: 'subhead', text: 'Strategic Phased Delivery' },
          {
            type: 'text',
            text: 'To ensure we didn’t disrupt our merchants’ daily operations, I advocated for a phased rollout strategy:',
          },
          /* a real sequence, not two alternatives — rendered on a progress
             track rather than as cards. Columns map to the source table:
             Phase / Scope / Outcome. */
          {
            type: 'phases',
            items: [
              {
                label: 'Phase 1',
                title: 'Core Operations',
                scope: 'Ordering, Payments, Transactions, and Reporting.',
                outcome:
                  'Beta-tested with a cohort of live merchants to validate the new architecture.',
              },
              {
                label: 'Phase 2',
                title: 'Secondary Features',
                scope: 'Inventory Management, Membership, and Settings.',
                outcome: 'Safely deployed once the core foundation was proven stable.',
              },
            ],
          },
        ],
      },
      {
        label: 'The Final Interface',
        lead: 'A unified ecosystem',
        items: [
          {
            type: 'text',
            text: 'The culmination of the UX audit and structural overhaul resulted in a highly functional, brand-aligned interface designed for speed and low cognitive load.',
          },
          {
            type: 'feature',
            title: 'Spatial Table Management',
            text: 'Visualized a clear, scannable floor plan using standardized, color-coded tokens (Available, Reserved, Occupied) to replace cryptic legacy icons, allowing staff to read the room at a glance.',
            figure: { src: '/assets/pos-01-tables.png', caption: '01 Spatial Table Management' },
          },
          {
            type: 'feature',
            title: 'Streamlined POS & Ordering',
            text: 'Redesigned the menu architecture with rich item imagery and a persistent, clear billing summary. We prioritized tap-targets and categorized navigation to ensure cashiers could process orders without friction.',
            figure: { src: '/assets/pos-02-ordering.png', caption: '02 Streamlined POS and Ordering' },
          },
          {
            type: 'feature',
            title: 'Frictionless Payment Processing',
            text: 'Introduced a split-pane layout for checkout, separating the itemized bill from distinct, oversized payment method cards tailored for high-speed, high-stress environments.',
            figure: { src: '/assets/pos-03-payment.png', caption: '03 Frictionless Payment Processing' },
          },
          {
            type: 'feature',
            title: 'Actionable Reporting Dashboards',
            text: 'Replaced generic charts with customized data visualizations utilizing the FeedMe palette, giving store managers immediate, readable insights into daily sales and top products.',
            figure: { src: '/assets/pos-04-reporting.png', caption: '04 Actionable Reporting Dashboards' },
          },
          {
            type: 'feature',
            title: 'Defensible Settings & Onboarding',
            text: 'Integrated the proprietary, AI-generated illustrations directly into complex workflows (like configuring Operation Modes), turning a traditionally dry settings page into a premium, highly defensible brand experience.',
            figure: { src: '/assets/pos-05-settings.png', caption: '05 Defensible Settings and Onboarding' },
          },
        ],
      },
      {
        label: 'Architecting the Dark Mode Experience',
        items: [
          {
            type: 'text',
            text: 'Because the POS system is utilized in brightly lit cafes as well as dimly lit bars, a robust Dark Mode was a strict operational requirement, not just an aesthetic add-on.',
          },
          { type: 'subhead', text: 'Token-Driven Inversion' },
          {
            type: 'text',
            text: 'Instead of manually recoloring hundreds of screens, I built the foundational component library using semantic color tokens. This allowed us to map global variables that seamlessly inverted the UI for low-light environments without breaking the visual hierarchy.',
          },
          { type: 'subhead', text: 'Preserving Brand Identity' },
          {
            type: 'text',
            text: 'Designed the dark theme to retain FeedMe’s vibrant orange accent colors, ensuring the brand identity remained recognizable even when the primary backgrounds shifted to deep charcoal and black.',
          },
          {
            type: 'compare',
            light: '/assets/pos-02-ordering.png',
            dark: '/assets/pos-06-ordering-dark.png',
            labels: ['Light', 'Dark'],
            caption: '06 One screen, both themes — drag to compare',
          },
        ],
      },
      {
        label: 'Measurable Impact',
        items: [
          {
            type: 'text',
            text: 'The true measure of a redesign is its impact on both the end-user and the internal product team. Following the rollout, I conducted usability testing with 5 distinct merchants to validate our assumptions.',
          },
          { type: 'subhead', text: 'The Results' },
          {
            type: 'resultCards',
            items: [
              {
                icon: '🚀',
                value: '10%',
                label: 'Faster Task Completion',
                note: 'Merchants navigated the new, decluttered UI significantly faster, proving our structural overhaul worked.',
              },
              {
                icon: '⚡',
                value: '30%',
                label: 'Faster Engineering Handoff',
                note: 'By establishing the foundational component library and tokens, front-end implementation velocity skyrocketed.',
              },
              {
                icon: '🤝',
                label: 'Executive Alignment',
                note: 'Received overwhelmingly positive feedback from leadership for successfully aligning the product with the new market strategy and fending off copycats.',
              },
            ],
          },
          { type: 'subhead', text: 'The Retrospective: The 80% Compromise' },
          {
            type: 'text',
            text: 'Perfection is the enemy of shipping. As the launch date approached, I had to make a calculated decision regarding visual polish. We shipped the UI at about 80% visual perfection. Had we pushed for that final 20% of pixel-perfect polish, we would have missed our strategic launch window. By prioritizing functional stability and the core token architecture over minor visual tweaks, we delivered immediate value to the merchants on time, scheduling the remaining polish as fast-follows in subsequent sprints.',
          },
        ],
      },
    ],
  },
  pantas: {
    sector: 'Environmental Services',
    title: 'Pantas Organisation Revamp',
    tagline: 'Making organisation setup fast and efficient',
    credits: [
      {
        label: 'My Role',
        values: [
          'Product Designer - Product Development, Interaction Design, Visual Design, Requirement Gathering',
        ],
      },
      {
        label: 'Team',
        values: [
          'Shanny Yu (Product Designer)',
          'Stan Tan (Senior Product Designer)',
          'Yi Zhe Koh (Product Manager)',
        ],
      },
      { label: 'Timeline', values: ['November 2024 - February 2025, 4 months'] },
    ],
    sections: [
      {
        label: 'Overview',
        items: [
          {
            type: 'text',
            text: "Setting up organisation-related information is deemed crucial in the onboarding process of Pantas' clients. Hence, Pantas would require an intelligent onboarding automation system to replace manual processes, enabling seamless data ingestion, validation, and structuring for scalable operations. This solution enhances efficiency, reduces manual effort, and improves client experience through AI-driven workflows.",
          },
        ],
      },
      {
        label: 'Highlights',
        lead: 'AI-Powered Onboarding Automation for Scalable and Efficient Workflows',
        items: [
          {
            type: 'figure',
            src: '/assets/pantas-01-companies.png',
            caption: '01 Manage Companies',
          },
          {
            type: 'figure',
            src: '/assets/pantas-02-extraction.png',
            caption: '02 Running AI Extraction',
          },
        ],
      },
      {
        label: 'The Problem',
        lead: 'To streamline client onboarding processes without excessive manual processes',
        items: [
          { type: 'subhead', text: 'Challenge of streamlining client onboarding' },
          {
            type: 'text',
            text: 'The current process is highly inefficient due to heavy reliance on template-based Excel files. Both internal teams (Business Development and onboarding personnel) and external clients face friction, as they must manually fill out complex, hierarchical data structures while also validating and processing this data manually.',
          },
          {
            type: 'bullets',
            items: [
              'Manual template-based Excel files that are prone to human errors, inconsistencies, and redundant work, leading to data inaccuracies',
              'Onboarding is time consuming as it takes 2-3 days or more due to complex data structures and manual validation.',
              'Internal teams and clients experience friction, reducing overall satisfaction and efficiency.',
            ],
          },
          {
            type: 'callout',
            title: 'The Challenge',
            text: 'Ensuring that both internal teams and clients can complete the onboarding process with minimal manual work, reduced errors, and improved efficiency, leading to a seamless and accurate data collection experience.',
          },
        ],
      },
      {
        label: 'Solution Proposal',
        lead: 'Automating client onboarding with AI extraction',
        items: [
          {
            type: 'text',
            text: 'By leveraging automation, real-time feedback, and seamless integration, this approach minimizes human errors, reduces onboarding time, and enhances user satisfaction for both internal teams and clients.',
          },
          {
            type: 'callout',
            title: 'Solution #1',
            subtitle: 'AI-Powered Data Extraction and Structuring',
            text: "Automatically extract, structure, and validate client and organizational data from client's default file template for seamless processing.",
          },
          {
            type: 'callout',
            title: 'Solution #2',
            subtitle: 'Interactive Data Review & Editing',
            text: 'Present extracted data in a compact but informative interface, allowing inline review, editing, and real-time error correction.',
          },
        ],
      },
      {
        label: 'Designs',
        lead: 'Intuitive, convenient and interactive',
        items: [
          {
            type: 'feature',
            title: 'Seamless hierarchical company navigation - say goodbye to confusions',
            text: 'Based on previous designs, it is confusing to navigate through companies of different hierarchies as it was displayed as nested information within a company.',
            figure: {
              src: '/assets/pantas-01-companies.png',
              caption: '03 Manage Companies Hierarchy',
            },
          },
          {
            type: 'feature',
            title:
              'Extract and transform information of various formats - no fixed template format needed',
            text: "Our AI auto-maps information present within client's current templates to match our template requirements, omitting manual entry efforts to our fixed templates.",
            figure: { src: '/assets/pantas-03-upload.png', caption: '04 File upload' },
          },
          {
            type: 'feature',
            title: 'Review and edit extracted data - ensuring accurate information',
            text: "Not satisfied with the generated data? Feel free to edit the data if needed, inaccurate information will also be flagged to raise user's attention.",
            figure: { src: '/assets/pantas-04-preview.png', caption: '05 File preview' },
          },
        ],
      },
      {
        label: 'Results',
        lead: 'Effortless Onboarding, Satisfied Clients',
        items: [
          { type: 'subhead', text: 'Revolutionizing the Onboarding Experience' },
          {
            type: 'text',
            text: 'Through an AI-powered, automated onboarding system, businesses can significantly enhance efficiency, accuracy, and user satisfaction.',
          },
          {
            type: 'resultCards',
            items: [
              'Onboarding completion time cut by 6 - 7 hours',
              'Reducing manual data processing tasks by >60% for the onboarding team',
              'Achieved high satisfaction rate from internal employees and clients',
            ],
          },
        ],
      },
    ],
  },

  hireti: {
    sector: 'Recruitment',
    title: 'Hireti Recruitment System',
    tagline: 'Elevating talent acquisition processes',
    credits: [
      {
        label: 'My Role',
        values: [
          'UX/UI and Design Lead - Product Development, Branding, Interaction Design, Visual Design',
        ],
      },
      {
        label: 'Team',
        values: [
          'Zachary Ang (Project Manager)',
          'Kok Hon Kit (Machine Learning Specialist)',
          'Lee Ren Jie (Full-stack Developer)',
          'Vandyck Lai (Technical Lead)',
        ],
      },
      { label: 'Timeline', values: ['December 2023 - August 2024, 9 months'] },
    ],
    sections: [
      {
        label: 'Overview',
        items: [
          {
            type: 'text',
            text: 'Hireti is a talent acquisition system constructed for Hilti in conjunction to the Hilti IT Competition 2024, the product has received vast recognition by being awarded the Grand Champion title. The product focuses in reducing the effort of talent acquisition teams in sourcing for quality candidates through robust features such as candidate management, job management and analytic dashboards.',
          },
        ],
      },
      {
        label: 'Highlights',
        lead: 'Providing a unified recruitment system with AI features',
        items: [
          {
            type: 'figure',
            src: '/assets/hireti-01-matching.png',
            caption: '01 Candidate Matching',
          },
          {
            type: 'figure',
            src: '/assets/hireti-02-design-system.png',
            caption: '02 Design System',
          },
        ],
      },
      {
        label: 'The Problem',
        lead: 'To find suitable candidates through a unified system',
        items: [
          { type: 'subhead', text: 'Challenge of finding good candidates' },
          {
            type: 'text',
            text: 'Although thousands of applications are sent in everyday, the company tends to have issues in searching for candidates that fulfill their requirement criteria. The current structure of the system is not unified as it requires interactions from different types of recruitment management platforms.',
          },
          {
            type: 'bullets',
            items: [
              "Encountering delays due to insufficient initial filtering, difficulty assessing candidates' levels of experience",
              'Inadequate feedback mechanisms, hindering effective communication throughout the recruitment process',
              'Delays in job position approvals and a lack of automation, compromising transparency in the process',
            ],
          },
          {
            type: 'callout',
            title: 'The Challenge',
            text: 'Ensuring that recruiters are able to complete recruitment processes with minimal number of interactions and efforts, with maximum results in recruiting good candidates',
          },
        ],
      },
      {
        label: 'Research',
        lead: 'Looking into our main user personalities',
        items: [
          {
            type: 'text',
            text: 'Several interviews were conducted with a diverse pool of individuals in order to understand their personality and attitude towards the recruitment process, while focusing on talent acquisition specialists.',
          },
          {
            type: 'callout',
            title: 'The Indecisive',
            text: 'Recruiters are not able to decide the best candidate due to biasness and the lack of additional reference/opinions',
          },
          {
            type: 'callout',
            title: 'The Skill-centric',
            text: "Does not focus on the interview perspective of the process, but rather the candidate's technical capabilities in handling tasks",
          },
          {
            type: 'callout',
            title: 'The Communication Centric',
            text: "Would place more focus on candidate's communication skills, as hard-skills can be learnt with suitable training methods",
          },
          { type: 'subhead', text: 'The current process' },
          {
            type: 'text',
            text: 'Based on the information collected, the current user journey in recruitment comprises of main stages such as acquiring, screening, interviewing and offering candidates.',
          },
          {
            type: 'callout',
            title: 'Acquisition',
            bullets: ['Determine positions to hire', 'Write and post job descriptions'],
            text: 'Users might not be able to prioritize suitable job postings, and to create a comprehensive job description',
          },
          {
            type: 'callout',
            title: 'Screening',
            bullets: [
              'Screen through candidate resume one-by-one',
              'Perform pre-screening calls',
              'Provide assessments if the role is technical-based',
              'Make decisions to shortlist or reject candidates',
            ],
            text: 'Users might be overwhelmed with the huge number of applications received',
          },
          {
            type: 'callout',
            title: 'Interview',
            bullets: [
              'Conduct video/physical interviews',
              'Evaluate candidate performance based on questions asked',
              'Make decisions to advance candidates to next stages',
            ],
            text: 'Users might not remember the context discussed during the interview process',
          },
          {
            type: 'callout',
            title: 'Offer',
            bullets: [
              'Select the most suitable candidate',
              'Confirm with the select candidate on their keenness to the position',
              'Prepare and send offer letter according to agreed arrangements',
            ],
            text: 'Users might need to take extra time to prepare an error-free offer letter',
          },
        ],
      },
      {
        label: 'Wireframes',
        lead: 'Compact, consistent and scannable',
        items: [
          {
            type: 'feature',
            title: 'Candidate matching made easy - all information in one page',
            text: 'Since the current recruitment system requires users to use separate systems to administer the whole process, the functionalities of the systems are all compressed to be interactable in one interface.',
            figure: {
              src: '/assets/hireti-03-matching-concept.png',
              caption: '03 Candidate Matching Layout Concept',
              /* transparent PNG with white annotations — needs a dark backdrop */
              dark: true,
            },
          },
          {
            type: 'feature',
            title: 'Solving your decisions in budgeting - introducing our chatbot consultant',
            text: 'Our consultant chatbot is here to save your struggles in budgeting, and to help in creating new job postings',
            figure: {
              src: '/assets/hireti-04-chatbot-concept.png',
              caption: '04 Budgeting Chatbot Layout Concept',
              dark: true,
            },
          },
        ],
      },
      {
        label: 'Design System',
        lead: 'Giving a touch of simplicity and modernity',
        items: [
          {
            type: 'feature',
            title: 'The colors of Hilti',
            text: "The main color palette of Hilti is implemented to maintain the system's brand identity",
            figure: {
              src: '/assets/hireti-05-colors.png',
              caption: '05 Hilti Color Palette',
            },
          },
          {
            type: 'feature',
            title: 'The small components to craft a big system',
            text: 'The UI components is constructed based on Next.js components to ease development processes',
            figure: {
              srcs: [
                '/assets/hireti-06-components-a.png',
                '/assets/hireti-06-components-b.png',
                '/assets/hireti-06-components-c.png',
                '/assets/hireti-06-components-d.png',
                '/assets/hireti-06-components-e.png',
              ],
              caption: '06 UI Components',
            },
          },
        ],
      },
      {
        label: 'Final Design',
        lead: 'Elevating talent acquisition processes with Hireti',
        items: [
          {
            type: 'figure',
            src: '/assets/hireti-01-matching.png',
            caption: '07 Candidate Matching',
          },
          {
            type: 'figure',
            src: '/assets/hireti-07-job-request.png',
            caption: '08 Job Request',
          },
          {
            type: 'figure',
            src: '/assets/hireti-08-chatbot.png',
            caption: '09 Budgeting Chatbot',
          },
        ],
      },
      {
        label: 'Results',
        lead: 'Fast recruitment, happy applicants',
        items: [
          { type: 'subhead', text: 'Supercharging candidate screening and recruiting' },
          {
            type: 'text',
            text: 'Through a system unified for recruiters to perform all processes, significant positive results are shown. Due to non-disclosure agreements, the results will be displayed in a general format',
          },
          {
            type: 'resultCards',
            items: [
              'Significant time savings by reducing time and effort in manual processes',
              'Increased diversity in hiring by dispelling human biases',
              'Achieved high satisfaction rate from employees',
            ],
          },
        ],
      },
      {
        label: 'Key Takeaways',
        lead: 'Teamwork makes the dream work',
        items: [
          {
            type: 'text',
            text: 'The success of the product is contributed by the efforts of each team member based on their specialisations and strengths',
          },
          {
            type: 'callout',
            title: 'A team with balanced skill sets contributes to success',
            text: 'Teammates with different expertise can help by exchanging knowledge with each other',
          },
          {
            type: 'callout',
            title: 'Adapting to different requirements and situations',
            text: 'There were a lot of unexpected turn of events during the process, but it can be overcame by expressing your thoughts towards team members during a brainstorming session',
          },
        ],
      },
      {
        label: 'Our Achievement',
        lead: 'Grand champion of Hilti IT Competition 2024',
        items: [
          {
            type: 'figure',
            src: '/assets/hireti-09-team.png',
            caption: '10 Team Sweetzerland from Asia Pacific University',
          },
          {
            type: 'text',
            text: 'I would like to give a shoutout to my incredible teammates, consisting of Zach (Project Manager), Hon Kit (ML Engineer), Ren Jie (Full Stack Developer) and Vandyck (Tech Lead), for their ongoing dedication and effort towards the development of this project. We wouldn’t have made it without any of us inside this team.',
          },
        ],
      },
    ],
  },
}
