/**
 * Long-form case-study content, transcribed verbatim from the write-ups on
 * cheryllimm.framer.website. Keyed by the project `id` in projects.js — a
 * project without an entry here just shows its summary and meta block.
 *
 * Each section is an ordered list of items so the page reads in the same
 * sequence as the source, with figures sitting where they actually sit:
 *   { type: 'subhead',     text }
 *   { type: 'text',        text }
 *   { type: 'bullets',     items: [] | [{ icon, text }] }  text allows <b>
 *   { type: 'callout',     title, subtitle?, bullets?, text, variant? }
 *                          variant: 'statement' centred, 'quote' on a rule,
 *                          'deferred' outlined for what was not built
 *   { type: 'questions',   items: [] }                          the framing, unboxed
 *   { type: 'timeline',    items: [{ label, text }] }           a run of work, down a rail
 *   { type: 'stepFlow',    items: [{ label, text | body: [] }] } a process, read across
 *   { type: 'personas',    items: [{ icon, title, text }] }
 *   { type: 'journey',     title, intro, items: [{ label, mood, bullets, note }] }
 *   { type: 'iaDiagram',   caption }
 *   { type: 'figure',      src, caption }
 *   { type: 'figureGroup', srcs: [], caption }
 *   { type: 'feature',     title, text, figure: { src | srcs, caption, dark? } }
 *   { type: 'featureGrid', items: [feature] }                    the same, two across
 *   { type: 'resultCards', items: [] }
 *   { type: 'gauge',       title?, statement?, value, of, label, note? }
 *
 * `feature` keeps a design decision and the screen that shows it in one card,
 * rather than letting the copy and the UI drift apart down the page.
 */

export const CASE_STUDIES = {
  'hrm-premium': {
    sector: 'Restaurant Workforce Management',
    title: 'Building HRM Premium Scheduling from 0 to 1',
    tagline: 'From an ambiguous operational problem to a validated scheduling foundation',
    credits: [
      {
        label: 'My Role',
        values: [
          'Product Designer: Product Discovery, UX Strategy, Prototyping, Usability Testing, Design Systems',
        ],
      },
      { label: 'Team', values: ['Product Manager', 'Product Design', 'Engineering'] },
      { label: 'Platform', values: ['HRM Premium, Web'] },
      { label: 'Timeline', values: ['2026'] },
    ],
    sections: [
      {
        label: 'The Overview',
        lead: 'Building a scheduling product where no established workflow existed',
        items: [
          {
            type: 'text',
            text: 'HRM Premium Scheduling was a 0 to 1 product initiative designed to help restaurant operators create and manage employee schedules.',
          },
          {
            type: 'text',
            text: 'Unlike an iteration project, we did not have an existing scheduling experience to optimize. We first needed to understand how restaurants actually schedule their teams, determine which problems were worth solving, and establish a product model that could support different types of merchants.',
          },
          {
            type: 'text',
            text: 'I worked across problem discovery, pain point validation, event storming, rapid prototyping and usability testing to shape the initial product direction.',
          },
          {
            type: 'text',
            text: 'One of the most important findings was that there was no single scheduling behavior across merchants. Rather than forcing users into our initial mental model, we used the research to simplify the experience and establish a more flexible foundation for future iterations.',
          },
        ],
      },
      {
        label: 'The Problem',
        lead: 'Scheduling is operationally complex, and every restaurant does it differently',
        items: [
          {
            type: 'text',
            text: 'Restaurant scheduling can vary significantly depending on the size of the restaurant, number of outlets, staffing structure and operating patterns.',
          },
          {
            type: 'text',
            text: 'A small restaurant may manage a relatively small team manually, while larger operators need to coordinate many employees, positions and time periods across multiple outlets.',
          },
          {
            type: 'text',
            text: 'Before designing the product, we needed to answer three fundamental questions:',
          },
          {
            type: 'questions',
            items: [
              'What are the biggest pain points in the existing scheduling process?',
              'What does a useful scheduling workflow actually look like?',
              'Can we create a common product model without forcing every restaurant to work the same way?',
            ],
          },
          {
            type: 'text',
            text: 'Rather than jumping directly into screens, we started with problem discovery.',
          },
        ],
      },
      {
        label: 'The Discovery',
        lead: 'Understanding the problem before defining the solution',
        items: [
          {
            type: 'stepFlow',
            items: [
              {
                label: 'Pain Point Discovery',
                body: [
                  'We began by identifying the friction merchants experience when planning their workforce.',
                  'We gathered examples of how merchants currently approached scheduling, looking across different operational contexts rather than assuming that one restaurant’s workflow represented the entire market.',
                  'This gave us an initial set of pain points and assumptions to investigate.',
                ],
              },
              {
                label: 'Validating the Pain Points',
                body: [
                  'We then validated whether these pain points were actually meaningful to merchants.',
                  'This helped us separate genuine operational problems from assumptions that might simply make sense from an internal product perspective.',
                ],
              },
              {
                label: 'Event Storming',
                body: [
                  'With the problem space clearer, we used event storming to map the scheduling process and understand the different events, actions and dependencies involved.',
                  'This gave the team a shared view of the scheduling journey and helped us identify where the product needed to intervene.',
                ],
              },
              {
                label: 'Defining the Product Goal',
                body: [
                  'From the discovery work, we established the initial problem statement and product goal.',
                  'The challenge was no longer simply: “How do we build a scheduling tool?” It became the question below.',
                ],
              },
            ],
          },
          {
            type: 'figure',
            src: '/assets/hrm-01-event-storming.png',
            /* 1656x547, a wide crop of the board */
            ratio: '1656 / 547',
            caption: '01 The event storming board, and the scheduling flow that came out of it',
          },
          {
            type: 'callout',
            variant: 'statement',
            title: 'The Product Goal',
            text: 'How might we help restaurant operators create and manage weekly schedules with less manual effort, while keeping the experience simple enough to accommodate different ways of working?',
          },
          {
            type: 'text',
            text: 'The Product Manager then translated this direction into the initial product requirements.',
          },
        ],
      },
      {
        label: 'Designing Under Constraints',
        lead: 'Testing the entire experience before investing in the final UI',
        items: [
          {
            type: 'text',
            text: 'With limited time available, we needed a way to validate the whole scheduling journey before investing heavily in production ready UI.',
          },
          {
            type: 'text',
            text: 'Instead of designing every screen individually, I created an AI assisted prototype as a structural representation of the end to end flow.',
          },
          {
            type: 'text',
            text: 'The purpose of the prototype was not to present AI as the solution.',
          },
          {
            type: 'text',
            text: 'It was to create a fast, tangible representation of our hypothesis that we could put in front of real users.',
          },
          {
            type: 'text',
            text: 'We wanted to validate the workflow before we polished the interface.',
          },
          {
            type: 'figure',
            src: '/assets/hrm-02-prototype.webp',
            caption:
              '02 Requirements, AI prototype, a testable end to end flow we could put in front of merchants',
          },
          /* the model the prototype embodied, in the same section: the
             constraint and what it produced are one move, not two */
          { type: 'subhead', text: 'Turning operational requirements into a repeatable workflow' },
          {
            type: 'text',
            text: 'Based on our discovery, we structured the initial scheduling experience around five core stages.',
          },
          {
            type: 'stepFlow',
            items: [
              {
                label: 'First Week Onboarding',
                text: 'Guide operators through setting up their first scheduling week instead of dropping them into an empty scheduling interface.',
              },
              {
                label: 'Define Demand',
                text: 'Operators define staffing requirements based on time ranges and positions. This establishes how many people are required and where before assigning individual employees.',
              },
              {
                label: 'Auto Scheduling',
                text: 'Use the defined demand and available employee information to generate a proposed schedule. The intention was to reduce the amount of repetitive manual scheduling work.',
              },
              {
                label: 'Review and Publish',
                text: 'Give operators a clear point to review the generated schedule before publishing it to their employees.',
              },
              {
                label: 'Copy to Next Week',
                text: 'Allow operators to reuse an existing schedule rather than rebuilding the same structure every week. This was particularly important because scheduling is a recurring operational task.',
              },
            ],
          },
          {
            type: 'figure',
            src: '/assets/hrm-03-scheduling-flow.png',
            pending: true,
            caption: '03 The five stages as one end to end scheduling journey',
          },
        ],
      },
      {
        label: 'Validating the Solution',
        lead: 'Three merchants challenged our assumptions',
        items: [
          {
            type: 'text',
            text: 'We collected scheduling examples from merchants with different operational scales, from smaller restaurants to larger operators with multiple outlets.',
          },
          {
            type: 'text',
            text: 'We then conducted usability testing with 3 merchants using the proposed scheduling flow.',
          },
          {
            type: 'text',
            text: 'The objective wasn’t simply to ask “Do you like this?” Instead, we wanted to understand:',
          },
          {
            type: 'questions',
            items: [
              'Can merchants understand the terminology?',
              'Can they navigate the scheduling model without explanation?',
              'Does the workflow match how they currently think about scheduling?',
              'Do they feel confident enough to use it independently?',
            ],
          },
          {
            type: 'figure',
            src: '/assets/hrm-04-merchant-samples.png',
            pending: true,
            caption:
              '04 The scheduling samples we collected, from a small restaurant to a multi outlet operator',
          },
          {
            type: 'text',
            text: 'The prototype allowed merchants to move through the scheduling process.',
          },
          { type: 'text', text: 'But testing revealed a more important problem.' },
          /* the hinge of the study: the finding and the score that produced
             it, as one object rather than a claim followed by its evidence */
          {
            type: 'gauge',
            title: 'The Reality Check',
            statement: 'The flow worked. The mental model did not work well enough.',
            value: 3,
            of: 5,
            label: 'Average confidence',
            note: 'Merchants reported an average confidence of approximately 3/5 when using the proposed experience.',
          },
          { type: 'text', text: 'The issue wasn’t simply usability in the traditional sense.' },
          {
            type: 'text',
            text: 'The deeper problem was confidence in the product’s mental model.',
          },
        ],
      },
      {
        label: 'What We Learned',
        lead: 'Restaurant scheduling isn’t standardized',
        items: [
          { type: 'text', text: 'Testing surfaced two major insights.' },
          { type: 'subhead', text: 'Our terminology was too product centric' },
          {
            type: 'text',
            text: 'Some of the terminology made sense from a system perspective, but wasn’t necessarily familiar to restaurant operators.',
          },
          {
            type: 'text',
            text: 'Users preferred a more simplified and intuitive way of expressing the same concepts.',
          },
          {
            type: 'text',
            text: 'This showed us that we couldn’t simply expose the underlying scheduling logic through the interface. We needed to translate the system into the language of the operator.',
          },
          { type: 'subhead', text: 'Every merchant schedules differently' },
          {
            type: 'text',
            text: 'The scheduling samples we collected also showed significant variation between merchants.',
          },
          /* the comparison sits here so the two insights stay a matched pair of
             numbered cards: a list straight after a subhead's prose would fold
             the second one into a split card and leave the first one bare */
          {
            type: 'figure',
            src: '/assets/hrm-05-merchant-comparison.png',
            pending: true,
            caption: '05 The three merchants side by side, and where their approaches diverge',
          },
          { type: 'text', text: 'Different restaurants had different:' },
          {
            type: 'bullets',
            items: [
              'Staffing structures',
              'Positions',
              'Scheduling habits',
              'Operational patterns',
              'Approaches to planning shifts',
            ],
          },
          { type: 'text', text: 'This challenged one of our initial assumptions:' },
          {
            type: 'callout',
            variant: 'quote',
            title: 'What Testing Challenged',
            text: 'There isn’t one “correct” way to schedule a restaurant. The product therefore needed to provide structure without becoming unnecessarily rigid.',
          },
          /* the pivot: what testing changed, in the same section as what it
             taught us, so the insight and the response are read together */
          { type: 'subhead', text: 'From designing the perfect workflow to designing a flexible foundation' },
          {
            type: 'text',
            text: 'The usability testing changed how we approached the first version.',
          },
          {
            type: 'text',
            text: 'Instead of trying to make our initial scheduling model comprehensive, we focused on making the core workflow understandable and adaptable.',
          },
          { type: 'text', text: 'Our priorities became:' },
          {
            type: 'bullets',
            items: [
              'Simplify the language.',
              'Reduce unnecessary complexity.',
              'Guide users through the first scheduling experience.',
              'Provide structure without forcing one operational model.',
            ],
          },
          {
            type: 'text',
            text: 'This became the foundation for the first phase of HRM Premium Scheduling.',
          },
          {
            type: 'timeline',
            items: [
              { label: 'Initial assumption', text: 'One standardized scheduling model.' },
              {
                label: 'What we learned',
                text: 'Merchants have different scheduling practices, and low confidence in our terminology.',
              },
              {
                label: 'Design response',
                text: 'Simpler language, guided setup, and a more flexible structure.',
              },
            ],
          },
        ],
      },
      {
        label: 'From Prototype to System',
        lead: 'Turning an exploratory concept into a scalable product',
        items: [
          {
            type: 'text',
            text: 'Once the core flow had been determined, we moved from exploratory UI into our established design system.',
          },
          {
            type: 'text',
            text: 'This was also where I introduced an AI assisted implementation workflow that I had been developing using a Claude orchestrator.',
          },
          {
            type: 'text',
            text: 'The orchestrator helped convert the validated interface into components aligned with our existing design system.',
          },
          { type: 'subhead', text: 'Establish the Product Foundation' },
          {
            type: 'text',
            text: 'I mapped the scheduling experience against our existing design language and identified the components, patterns and states required by the new product.',
          },
          { type: 'subhead', text: 'Orchestrate the Components' },
          {
            type: 'text',
            text: 'Using the Claude based orchestrator, I accelerated the process of translating the exploratory UI into system compliant components. This reduced repetitive design work while maintaining consistency with the broader FeedMe ecosystem.',
          },
          { type: 'subhead', text: 'Preserve Product Thinking' },
          {
            type: 'text',
            text: 'The AI workflow was intentionally introduced after the problem and flow had been validated. AI was used to accelerate execution, not to decide what the product should be.',
          },
          {
            type: 'text',
            text: 'This distinction became an important part of my approach to AI assisted product design:',
          },
          {
            type: 'callout',
            variant: 'quote',
            title: 'My Approach to AI',
            text: 'Use AI to accelerate the design process, not outsource the product thinking.',
          },
          {
            type: 'figure',
            src: '/assets/hrm-06-orchestrator.png',
            pending: true,
            caption: '06 Exploratory component, Claude orchestrator, final Figma component',
          },
        ],
      },
      {
        label: 'The Final Product Direction',
        lead: 'A foundation for repeatable restaurant scheduling',
        items: [
          {
            type: 'text',
            text: 'The first phase of HRM Premium Scheduling established a complete scheduling workflow built around:',
          },
          {
            type: 'feature',
            title: 'First Week Setup',
            text: 'A guided onboarding experience to help operators establish their first schedule.',
            figure: { src: '/assets/hrm-07-first-week.png', pending: true, caption: '01 First Week Setup' },
          },
          /* the entry point takes the full width; the four stages that follow
             it do not each need one, and six identical bars read as a list
             rather than as a product */
          {
            type: 'featureGrid',
            items: [
              {
                title: 'Demand Planning',
                text: 'Define staffing requirements by time range and position.',
                figure: { src: '/assets/hrm-08-demand.png', pending: true, caption: '02 Demand Planning' },
              },
              {
                title: 'Auto Scheduling',
                text: 'Generate a proposed schedule based on the defined requirements.',
                figure: { src: '/assets/hrm-09-auto-scheduling.png', pending: true, caption: '03 Auto Scheduling' },
              },
              {
                title: 'Review and Publish',
                text: 'Allow operators to validate the schedule before making it available to their team.',
                figure: {
                  src: '/assets/hrm-10-review-publish.png',
                  pending: true,
                  caption: '04 Review and Publish',
                },
              },
              {
                title: 'Schedule Reuse',
                text: 'Copy existing schedules into subsequent weeks to reduce repetitive work.',
                figure: { src: '/assets/hrm-11-copy-week.png', pending: true, caption: '05 Schedule Reuse' },
              },
            ],
          },
          {
            type: 'callout',
            variant: 'deferred',
            title: '06 AI Assisted Scheduling',
            text: 'A future capability built around historical scheduling data, intentionally deferred until the foundational workflow is mature.',
          },
        ],
      },
      {
        label: 'The Retrospective',
        lead: 'The biggest lesson wasn’t about scheduling. It was about knowing when the solution isn’t ready.',
        items: [
          {
            type: 'text',
            text: 'The most valuable moment in the project was discovering that our first solution wasn’t solid enough.',
          },
          {
            type: 'text',
            text: 'We could have continued refining the prototype because the flow was technically functional. Instead, merchant testing showed us that functional does not mean intuitive.',
          },
          {
            type: 'text',
            text: 'A 3/5 confidence score forced us to step back and question the assumptions behind our solution, particularly our terminology and the idea that restaurants could fit into a single scheduling model.',
          },
          {
            type: 'text',
            text: 'For me, this reinforced an important principle in 0 to 1 product design:',
          },
          {
            type: 'callout',
            variant: 'statement',
            title: 'The Principle',
            text: 'When you’re building something new, validation isn’t about proving that your solution is right. It’s about finding out where you’re wrong early enough to change it.',
          },
          { type: 'subhead', text: 'What I would validate next' },
          {
            type: 'text',
            text: 'As the product moves beyond its initial phase, I would continue validating:',
          },
          {
            type: 'bullets',
            items: [
              'Schedule creation time',
              'Completion rate',
              'Merchant adoption',
              'Accuracy and usefulness of auto scheduling',
              'Effectiveness of schedule reuse',
              'AI recommendations based on historical scheduling data',
            ],
          },
        ],
      },
    ],
  },
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
        values: [
          'Yong Tee Lee (Lead Product Designer)',
          'Amy Low (Senior Product Designer)',
          'Victor Chai (Software Engineer Lead)',
          'Guo Quan Zhang (Senior Software Engineer)',
          'King (CTO)',
        ],
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
        label: 'The Problem',
        lead: 'Technical debt, brand misalignment, and a design too easy to clone',
        items: [
          {
            type: 'text',
            text: 'The legacy system lacked documentation and was riddled with usability dead-ends. We could not simply build a new UI on top of broken logic.',
          },
          {
            type: 'bullets',
            items: [
              'Technical debt',
              'Brand misalignment',
              'An interface that was becoming too easy for competitors to clone',
            ],
          },
        ],
      },
      {
        label: 'The Audit',
        lead: 'UX archaeology & uncovering hidden flows',
        items: [
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
          {
            type: 'iaDiagram',
            caption: '01 Spaghetti vs scalable: the tangle the audit mapped, and the architecture that replaced it',
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
            /* framed 4:3 so the legacy screen stays whole; the revamp is
               1194x834 and gives up a sliver left and right instead */
            aspect: '4 / 3',
            caption: '02 The generic blue build against the FeedMe revamp. Drag to compare',
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
          {
            type: 'text',
            text: 'To ensure we didn’t disrupt our merchants’ daily operations, I advocated for a phased rollout strategy:',
          },
          {
            type: 'timeline',
            items: [
              {
                label: 'Establish the foundation',
                text: 'In close collaboration with the Lead and Senior PD, I helped architect the core design system that now powers the entire FeedMe ecosystem. We established base design tokens and a robust component library, moving the engineering team away from hard-coded legacy styles.',
              },
              {
                label: 'Deliver Phase 1',
                text: 'Core operations: Ordering, Payments, Transactions, and Reporting.',
              },
              {
                label: 'Test Phase 1',
                text: 'Beta-tested with a cohort of live merchants to validate the new architecture.',
              },
              {
                label: 'Ship Phase 2',
                text: 'Inventory Management, Membership, and Settings, carrying the changes that came out of the Phase 1 feedback. Safely deployed once the core foundation was proven stable.',
              },
              {
                label: 'Test with merchants',
                text: 'Usability testing with five merchants, to check the rollout against how the product is actually operated.',
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
            caption: '06 One screen, both themes. Drag to compare',
          },
        ],
      },
      {
        label: 'Validating with Merchants',
        lead: 'Five merchants, a set of actions, and watching what they did',
        items: [
          {
            type: 'text',
            text: 'Following the rollout, I conducted usability testing with 5 distinct merchants to validate our assumptions.',
          },
          {
            type: 'text',
            text: 'Each session was an interview built around a set of actions for the merchant to carry out on the new interface. My job was to observe those actions (where they hesitated, what they reached for first, which steps they skipped) rather than to take their word for how the product felt.',
          },
        ],
      },
      {
        label: 'Measurable Impact',
        items: [
          {
            type: 'text',
            text: 'The true measure of a redesign is its impact on both the end-user and the internal product team.',
          },
          { type: 'subhead', text: 'The Results' },
          {
            type: 'resultCards',
            items: [
              {
                value: '10%',
                label: 'Faster Task Completion',
                note: 'Merchants navigated the new, decluttered UI significantly faster, proving our structural overhaul worked.',
              },
              {
                value: '30%',
                label: 'Faster Engineering Handoff',
                note: 'By establishing the foundational component library and tokens, front-end implementation velocity skyrocketed.',
              },
              {
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
              {
                icon: 'file',
                text: '<b>Manual template-based Excel files</b> that are prone to human errors, inconsistencies, and redundant work, leading to data inaccuracies',
              },
              {
                icon: 'clock',
                text: 'Onboarding is time consuming as it <b>takes 2-3 days</b> or more due to complex data structures and manual validation.',
              },
              {
                icon: 'people',
                text: 'Internal teams and clients <b>experience friction</b>, reducing overall satisfaction and efficiency.',
              },
            ],
          },
          {
            type: 'callout',
            variant: 'statement',
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
              {
                value: '6-7 hrs',
                label: 'Saved per onboarding',
                note: 'Onboarding completion time cut by 6 - 7 hours.',
              },
              {
                value: '>60%',
                label: 'Less manual processing',
                note: 'Reducing manual data processing tasks for the onboarding team.',
              },
              {
                label: 'High satisfaction rate',
                note: 'Achieved from internal employees and clients.',
              },
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
              {
                icon: 'filter',
                text: "Encountering <b>delays due to insufficient initial filtering</b>, difficulty assessing candidates' levels of experience",
              },
              {
                icon: 'message',
                text: '<b>Inadequate feedback mechanisms</b>, hindering effective communication throughout the recruitment process',
              },
              {
                icon: 'clock',
                text: '<b>Delays in job position approvals</b> and a lack of automation, compromising transparency in the process',
              },
            ],
          },
          {
            type: 'callout',
            variant: 'statement',
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
            text: 'Several interviews were conducted with a diverse pool of individuals in order to understand their personality and attitude towards the recruitment process, while focusing on <b>talent acquisition specialists</b>.',
          },
          /* three personalities side by side, as on the original page */
          {
            type: 'personas',
            items: [
              {
                icon: 'question',
                title: 'The Indecisive',
                text: 'Recruiters are not able to decide the best candidate due to biasness and the lack of additional reference/opinions',
              },
              {
                icon: 'wrench',
                title: 'The Skill-centric',
                text: "Does not focus on the interview perspective of the process, but rather the candidate's technical capabilities in handling tasks",
              },
              {
                icon: 'headset',
                title: 'The Communication Centric',
                text: "Would place more focus on candidate's communication skills, as hard-skills can be learnt with suitable training methods",
              },
            ],
          },
          /* the four journey stages, each with the mood it carries */
          {
            type: 'journey',
            title: 'The current process',
            intro:
              'Based on the information collected, the current user journey in recruitment comprises of main stages such as acquiring, screening, interviewing and offering candidates.',
            items: [
              {
                label: 'Acquisition',
                mood: 'ok',
                bullets: ['Determine positions to hire', 'Write and post job descriptions'],
                note: 'Users might not be able to prioritize suitable job postings, and to create a comprehensive job description',
              },
              {
                label: 'Screening',
                mood: 'bad',
                bullets: [
                  'Screen through candidate resume one-by-one',
                  'Perform pre-screening calls',
                  'Provide assessments if the role is technical-based',
                  'Make decisions to shortlist or reject candidates',
                ],
                note: 'Users might be overwhelmed with the huge number of applications received',
              },
              {
                label: 'Interview',
                mood: 'neutral',
                bullets: [
                  'Conduct video/physical interviews',
                  'Evaluate candidate performance based on questions asked',
                  'Make decisions to advance candidates to next stages',
                ],
                note: 'Users might not remember the context discussed during the interview process',
              },
              {
                label: 'Offer',
                mood: 'good',
                bullets: [
                  'Select the most suitable candidate',
                  'Confirm with the select candidate on their keenness to the position',
                  'Prepare and send offer letter according to agreed arrangements',
                ],
                note: 'Users might need to take extra time to prepare an error-free offer letter',
              },
            ],
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
              {
                label: 'Significant time savings',
                note: 'By reducing time and effort in manual processes.',
              },
              {
                label: 'Increased diversity in hiring',
                note: 'By dispelling human biases.',
              },
              {
                label: 'High satisfaction rate',
                note: 'Achieved from employees.',
              },
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
