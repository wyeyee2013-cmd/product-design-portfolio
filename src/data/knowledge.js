/**
 * Knowledge base for the hero's "Ask Cheryl stuff..." box.
 * Add an entry as { k: [keywords], a: 'answer (inline <b>/<i> allowed)' }.
 * Multi-word keys only match as an exact phrase; single-word keys match on stem.
 *
 * Everything here is drawn from Cheryl's own material — the About document in
 * about.js (her LinkedIn history, talks, hackathons and community roles), the
 * case studies in caseStudies.js, and cheryllimm.framer.website/about. Keep it
 * that way: this box answers in her voice, so an invented detail is a lie told
 * on her behalf.
 */
export const KB = [
  /* ---------- who she is ---------- */
  {
    k: ['who is', 'who are', 'yourself', 'introduce', 'intro', 'bio', 'about you', 'about her', 'about cheryl'],
    a: "I'm <b>Cheryl Lim</b>, a product designer who loves turning messy problems into products that actually make sense. With a background in data analytics, I sit somewhere between design, technology, data, and product. Honestly, I quite like it there.",
  },
  {
    k: ['role', 'job', 'title', 'position', 'work as', 'what do you do', 'what does she do'],
    a: '<b>Senior Product Designer / Product Manager</b> at FeedMe. Both hats on the same problems. I scope the thing, design it, then carry it through the lifecycle with the PMs and developers.',
  },
  {
    k: ['experience', 'experienced', 'years', 'how long', 'career', 'seniority', 'how many years'],
    a: '<b>4+ years</b> in UX/UI and product design, across B2B and SaaS. FeedMe now, Pantas before that, and earlier V Systems, Maxis, Asia Pacific University and Hiredly. Roughly 20+ projects across 10+ industries.',
  },
  {
    k: ['background', 'data analytics', 'analytics', 'pivot', 'switch', 'how did you start', 'get into design', 'journey'],
    a: 'I started in <b>data analytics</b>. My last analytics role was at Maxis, building data layers, BigQuery pipelines and Looker dashboards. Design pulled me in because I wanted to shape the thing people actually touch, not just measure it afterwards. The data habit stayed.',
  },
  {
    k: ['passionate', 'care about', 'mission', 'purpose', 'believe', 'value', 'motivat'],
    a: 'Bridging humans and technology. Plenty of people are locked out of good software simply because it assumes fluency they were never given, so I design for intuitive, accessible, scalable products, and keep asking <i>“but why?”</i> until the answer holds up.',
  },

  /* ---------- where she works ---------- */
  {
    k: ['feedme', 'feed me', 'at feedme', 'company', 'employer', 'current job', 'where do you work', 'where does she work', 'work now', 'currently work', 'who do you work for'],
    a: '<b>FeedMe</b> is a restaurant operating system. I lead the POS v7 → v8 revamp on tablet and mobile, design 0 → 1 work across five products (POS, KDS, Menu, FM OS, HRM Premium), and act as product manager for the onboarding portfolio.',
  },
  {
    k: ['pantas', 'at pantas', 'esg', 'sustainability', 'emission', 'carbon'],
    a: 'I was <b>AI Product Designer at Pantas</b> for a year, on three B2B ESG products: Enterprise, Financed Emissions, and Connect. I also led the move off Django-Bootstrap onto a React + shadcn framework, which finally gave the modules one design system.',
  },
  {
    k: ['previous', 'past', 'before', 'other companies', 'worked at', 'employment', 'history'],
    a: 'Pantas (AI Product Designer), V Systems (a Web3 community platform for finance), Maxis (digital analytics), Asia Pacific University (revamping the APSpace admin system), and Hiredly (UX/UI intern, my first taste of real user research).',
  },
  {
    k: ['maxis', 'at maxis', 'bigquery', 'looker', 'tag manager', 'dashboard'],
    a: 'At <b>Maxis</b> I was a digital analytics intern: data layers and event tracking through Google Tag Manager, dataset work in BigQuery, and Looker Studio dashboards I presented to stakeholders. Good grounding in what the numbers can and cannot tell you.',
  },
  {
    k: ['apu', 'at apu', 'university', 'apspace', 'student', 'academic'],
    a: 'At <b>Asia Pacific University</b> I was an R&D assistant on the design side. I led the APSpace admin system revamp, built responsive interfaces in Angular Material, and designed a Thesis Bank system on OutSystems.',
  },

  /* ---------- the work ---------- */
  {
    k: ['project', 'portfolio', 'case study', 'built', 'shipped', 'work on', 'works on', 'working on', 'her work', 'your work', 'selected work', 'what have you'],
    a: 'Five pieces on this page: HRM Premium, FeedMe OS Onboarding, FeedMe POS, Pantas Organisation, and Hireti Talent. All five have full write-ups; hover the stack at the bottom right to fan them out, or scroll to the projects board.',
  },
  {
    k: ['pos', 'point of sale', 'terminal', 'cashier', 'till'],
    a: 'The POS is the hardest surface I design for: used one-handed, at speed, by staff trained once. I am leading the <b>v7 → v8 revamp</b> on tablet and mobile, sharpening the brand identity while laying the foundation of the design system.',
  },
  {
    k: ['kds', 'kitchen', 'display', 'cook', 'chef'],
    a: 'The <b>Kitchen Display</b> is one of the five FeedMe products I design for. It gets read from across a hot, busy room by someone whose hands are full, which rules out most of what works on a desktop screen.',
  },
  {
    k: ['menu', 'pricing', 'price', 'catalog'],
    a: 'Menu is deceptively deep: base prices, price groups, schedulers, catalog deltas and variants can all touch the same item. Most of the work is making precedence visible <i>before</i> a manager hits publish.',
  },
  {
    k: ['onboarding', 'first run', 'activation'],
    a: '<b>FeedMe OS Onboarding</b> is about getting an outlet from signed-up to actually selling. I run this one as product manager as well as designer, so the design brief and the revenue goal are the same conversation. The write-up covers the menu onboarding step, where I used AI as a translation layer: merchants upload the menu they already have, AI structures it into FeedMe’s format, and the merchant reviews, edits and publishes. Setup that took the onboarding team around 2 days is designed to take a merchant about 5 minutes.',
  },
  {
    k: ['hrm', 'hr', 'employee', 'staff', 'roster', 'payroll', 'scheduling', 'schedule', 'shift', 'shifts'],
    a: '<b>HRM Premium</b> covers the people side: shifts, skills and permissions for businesses where the roster changes weekly and half the team is part-time. Scheduling was a 0 to 1 build. We ran discovery, event storming and an AI-assisted prototype, then tested with three merchants, who came back at about 3/5 confidence. That sent us back to simplify the language and loosen the model rather than polish the flow, because there is no single way restaurants schedule.',
  },
  {
    k: ['hireti', 'hilti', 'recruitment', 'hiring platform', 'talent', 'candidate'],
    a: '<b>Hireti</b> is a recruitment system that matches candidates to roles without burying either side in forms, including a chatbot consultant for headcount budgeting. Team Sweetzerland from APU built it, and it won <b>Grand Champion of the Hilti IT Competition 2024</b>.',
  },
  {
    k: ['result', 'impact', 'outcome', 'metric', 'measurable', 'success'],
    a: 'Pantas is the clearest: AI-driven extraction cut onboarding by <b>6–7 hours</b> per client and removed over <b>60%</b> of the team’s manual data processing. The POS revamp gave merchants <b>10% faster task completion</b> and engineering <b>30% faster handoff</b>, off the back of the token library. FeedMe OS menu onboarding targets about <b>5 minutes</b> for something that took the onboarding team around 2 days. And one that is not a win: HRM scheduling tested at <b>3/5 confidence</b>, which is the number that told us to change the model rather than polish it.',
  },
  {
    k: ['zero to one', '0 to 1', 'greenfield', 'new product', 'from scratch'],
    a: 'A lot of my work is <b>0 → 1</b>: shaping product experiences, design systems and strategy from nothing, alongside product managers and developers. Five products at FeedMe, three at Pantas.',
  },

  /* ---------- craft ---------- */
  {
    k: ['skill', 'strength', 'good at', 'expertise', 'specialis', 'specializ', 'capab'],
    a: 'Systems-first product design, design systems and tokens, complex flow modelling, requirement gathering, and coded prototypes. The through-line is reducing a messy rule set into something a tired person can operate correctly.',
  },
  {
    k: ['process', 'how do you work', 'approach', 'method', 'workflow', 'philosophy'],
    a: 'Map the rules first, then the screens. I write the edge cases down before drawing anything, prototype the risky flow in code, put it in front of real users, and only then systemise it into components.',
  },
  {
    k: ['tool', 'stack', 'software', 'figma', 'design tool', 'what do you use'],
    a: 'Figma and Figma variables for design, React and plain CSS for prototypes, Cursor and Figma Make when a working screen beats a static one. On the systems side, token pipelines from Foundation to Semantic to Component.',
  },
  {
    k: ['ai', 'artificial intelligence', 'llm', 'claude', 'automation', 'copilot'],
    a: 'This is the part I am most excited about. At FeedMe I am driving adoption of <b>AI-powered design workflows</b>, using Claude orchestrators and custom skills, to build an AI ecosystem for the design team. At Pantas I pushed AI-first principles into the products themselves.',
  },
  {
    k: ['design system', 'token', 'component', 'library', 'consistency'],
    a: 'I build token layers in three tiers (Foundation, Semantic, Component) so a colour decided once propagates everywhere without anyone re-picking a hex. I set up the foundation at FeedMe and unified Pantas’ modules onto React + shadcn.',
  },
  {
    k: ['prototype', 'code', 'react', 'engineer', 'developer', 'front end', 'frontend'],
    a: 'I prototype in React and plain CSS; this whole page is one. It keeps the handoff conversation grounded in what actually renders instead of what a static frame implies.',
  },
  {
    k: ['accessib', 'accessible', 'accessibility', 'inclusive', 'a11y', 'disabilit'],
    a: 'It is the reason I design at all. Low digital proficiency locks people out of services they need, so the target is interfaces that work for diverse demographics, and a journey that is genuinely enjoyable, not merely compliant.',
  },
  {
    k: ['research', 'user research', 'interview', 'usability', 'testing', 'user test'],
    a: 'Interviews, empathy maps and affinity diagrams from my Hiredly days onward, then behaviour data to check what people actually did against what they told me. More recently: a manual click-through audit of the POS paired with the engineers who built it, usability testing with 5 merchants after that rollout, event storming to map the scheduling domain with the team, testing the scheduling prototype with 3 merchants, and shadowing live onboarding sessions to see where merchants got stuck. I watch what people do in the session rather than take their word for how it felt afterwards.',
  },

  /* ---------- proof ---------- */
  {
    k: ['hackathon', 'competition', 'award', 'won', 'win', 'prize', 'achievement'],
    a: 'Twelve of them, and I have placed in most. Highlights: <b>Grand Champion</b> of the Hilti IT Competition 2024, 1st Runner Up at Malaysia Techlympics and the ASEAN MakeITSafe Hackathon, Silver at the Fusion HCI-UX design competition, and Top 10 at the AWS Great AI Hackathon.',
  },
  {
    k: ['talk', 'workshop', 'speak', 'speaker', 'teach', 'taught', 'mentor', 'conference'],
    a: '<b>10+ talks and workshops</b> on design, technology and community: design thinking and prototyping at UTP CodeFest, Build.Design.Launch with APU Hackthletes, Figma Make workshops, and a deep dive into UI/UX at Imaginehack. Apparently I enjoy sharing almost as much as designing.',
  },
  {
    k: ['community', 'communities', 'figma kl', 'friends of figma', 'notion', 'meetup', 'organiser', 'organizer', 'committee'],
    a: 'I am on the <b>core committee of Friends of Figma Kuala Lumpur</b> and of <b>Notion Community Kuala Lumpur</b>. Both are about giving makers a reason to show up and learn something. I like being around people who build things.',
  },
  {
    k: ['volunteer', 'charity', 'giving back', 'fundrais', 'social', 'rural'],
    a: 'I have taught English reading to children and parents in rural areas, and fundraised for several communities; one Figma Make workshop doubled as a fundraiser for an animal shelter. The best part is meeting people whose lives look nothing like mine.',
  },
  {
    k: ['testimonial', 'reference', 'people say', 'say about', 'said about', 'colleague', 'recommend', 'review', 'feedback about'],
    a: 'Scroll to the reviews section. Teammates from Pantas and elsewhere describe me as resilient and reliable under tight timelines, fast without losing quality, and generally fun to work with. Their words, not mine.',
  },

  /* ---------- personal ---------- */
  {
    k: ['hobby', 'fun', 'outside work', 'free time', 'personal', 'interest', 'gamer', 'game', 'cafe', 'coffee'],
    a: 'Design addict, casual gamer, and always down for cafe hopping. Otherwise I build small interactive things for the sake of it; the dock at the bottom of this page started as one of those.',
  },
  {
    k: ['language', 'speak', 'english', 'mandarin', 'chinese', 'malay', 'bahasa'],
    a: 'Hello, Hai, and 你好. I work in English day to day and get by in Malay and Mandarin besides.',
  },
  {
    k: ['not just visuals', 'tagline', 'alive', 'digital things', 'headline'],
    a: 'It means the visual layer is the last 10%. Most of the value sits underneath: what the states are, what happens when someone does the wrong thing, and whether the system says so in time.',
  },
  {
    k: ['why you', 'why should', 'why hire'],
    a: "Because I close the gap between the spec and the screen. I'll model the rules, prototype the risk, and hand engineering something that already survived its own edge cases, and I can hold the product manager’s end of the conversation too.",
  },

  {
    k: ['engineer', 'developer', 'handoff', 'hand off', 'collaborate', 'collaboration', 'work with', 'cross functional', 'team'],
    a: 'Closely, and early. On the POS audit I sat with frontend and backend engineers and clicked through the whole product with them, which is how we found the 10+ undocumented flows nobody had written down. On HRM I used event storming so engineering, product and design were mapping the same domain in one room. My handoff is a token library and named states rather than a redline, and my prototypes are meant to answer the questions engineering would otherwise have to ask.',
  },
  {
    k: ['product manager', 'product management', 'pm', 'wear both hats', 'both hats', 'strategy'],
    a: 'I hold the product manager’s end for the FeedMe onboarding portfolio, so the design brief and the revenue goal are the same conversation. It changes what I argue for: on menu onboarding the win was not a nicer screen, it was removing the support dependency that made setup take two days. Elsewhere I work with a PM rather than as one, and on HRM the PM turned the direction we set in discovery into the requirements.',
  },
  {
    k: ['fail', 'failed', 'failure', 'setback', 'wrong', 'mistake', 'learn', 'lesson', 'hardest', 'difficult', 'challenge', 'go wrong', 'didn t work'],
    a: 'HRM scheduling. We had a flow that worked and merchants who could get through it, and testing still came back at 3/5 confidence, because our terminology was ours rather than theirs and we had assumed every restaurant schedules the same way. Functional is not intuitive. We went back and simplified the language and loosened the model instead of refining a prototype that was technically fine. On the POS I made a different call: we shipped at about 80% visual polish to hold the launch window, and scheduled the rest as fast-follows.',
  },
  {
    k: ['ai product', 'ai feature', 'ai ux', 'human in the loop', 'ai design', 'designing ai', 'llm product'],
    a: 'The rule I keep is: AI prepares, the person decides. On FeedMe OS, AI reads a merchant’s existing menu and structures it into our format, then the merchant reviews, corrects, picks the outlets and publishes. Nothing goes live without them. On HRM we identified an AI scheduling layer and deliberately did not build it in phase one, because the underlying workflow had not been validated yet. Automate the tedious work and keep the meaningful decisions with the user.',
  },
  {
    k: ['platform', 'mobile', 'tablet', 'web app', 'responsive', 'device'],
    a: 'Tablet and mobile for the POS, which is the hardest surface I design for: one hand, at speed, by staff trained once. Mobile for FeedMe OS. Web for HRM Premium, Pantas and Hireti. The POS also needed a proper dark mode, since it runs in bright cafes and dim bars, so I built the component library on semantic tokens and inverted the theme through variables rather than recolouring screens.',
  },
  {
    k: ['stakeholder', 'leadership', 'executive', 'buy in', 'present', 'influence'],
    a: 'The POS revamp had to be argued as a market position, not a refresh: the old interface was generic enough to clone, so the visual work was a defensive moat. Leadership signed off on that framing and the rollout was phased so merchants were never disrupted mid-service. I find the commercial reason a design decision exists and lead with it.',
  },
  {
    k: ['ambiguity', 'ambiguous', 'unclear', 'no brief', 'undefined', 'messy problem', 'where do you start'],
    a: 'I start by finding out what is actually true. On the POS that meant clicking through a system with no documentation until the real journeys appeared. On HRM there was no existing scheduling experience at all, so it was pain point discovery, validating those pain points with merchants, and event storming before a single screen. On FeedMe OS the insight came from sitting in on onboarding calls. The brief usually arrives once you have looked.',
  },
  {
    k: ['figma', 'design file', 'variables', 'token', 'component library', 'documentation'],
    a: 'Figma, with variables in three tiers: Foundation, Semantic, Component. A colour decided once propagates everywhere and nobody re-picks a hex. I set that foundation up at FeedMe and unified Pantas’ modules onto React and shadcn. Lately I use a Claude orchestrator to turn exploratory UI into system-compliant components, which takes the repetitive part of the work without touching the decisions.',
  },
  {
    k: ['what are you looking for', 'next role', 'ideal', 'want in a role', 'kind of team', 'culture'],
    a: 'Product design or a design-engineering hybrid, on products with real operational complexity: the more rules underneath, the more interesting it is to make simple. I want to stay close to engineering and to the commercial side, and I would rather be somewhere that ships and learns than somewhere that polishes. Contract or full-time. cheryl.wylim@outlook.com.',
  },
  {
    k: ['walkthrough', 'interactive', 'click through', 'demo', 'try it', 'see the screens', 'screens'],
    a: 'The FeedMe OS write-up has the real screens in a phone frame you can step through, ten of them, from the onboarding checklist to publishing the menu to the right outlets. The HRM write-up has a recording of a week being scheduled. Both are on this page rather than behind a Figma link.',
  },
  /* ---------- logistics ---------- */
  {
    k: ['available', 'hire', 'hiring', 'freelance', 'open to', 'opportunit', 'recruit', 'looking for'],
    a: 'Yes, currently <b>available for work</b>. Product design or a design-engineering hybrid, contract or full-time. Best route is <b>cheryl.wylim@outlook.com</b>.',
  },
  {
    k: ['contact', 'email', 'reach', 'get in touch', 'talk to', 'call', 'connect', 'message'],
    a: 'Email is best: <b>cheryl.wylim@outlook.com</b>. The mail icon in the dock at the bottom opens it directly, and LinkedIn is right beside it.',
  },
  {
    k: ['linkedin', 'social', 'profile', 'follow'],
    a: 'LinkedIn is the one I keep current: <b>linkedin.com/in/cheryllimwyeyee</b>. It is also in the dock at the bottom of this page.',
  },
  {
    k: ['resume', 'cv', 'download'],
    a: 'There is a résumé link at the top of the About document. Open <b>About</b> from the dock and it is in the top right.',
  },
  {
    k: ['location', 'based', 'where are you', 'city', 'country', 'remote', 'remotely', 'open to remote', 'work remote', 'timezone', 'relocat'],
    a: 'Based in <b>Kuala Lumpur, Malaysia</b>, working hybrid there and comfortable fully remote across Southeast Asia and beyond.',
  },
]

export const FALLBACK =
  "I don't have that one on file. Try asking about <b>her work</b>, <b>experience</b>, <b>process</b>, <b>AI</b>, <b>talks</b>, <b>hackathons</b>, <b>community</b>, <b>availability</b>, or <b>how to get in touch</b>."

export const SUGGESTIONS = [
  'What does she work on?',
  "What's her process?",
  'Is she available?',
  'How do I reach her?',
]

const STOP = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'do', 'does', 'did', 'of', 'to', 'in', 'on',
  'for', 'and', 'or', 'with', 'she', 'her', 'hers', 'he', 'his', 'you', 'your', 'i', 'me',
  'my', 'it', 'that', 'this', 'what', 'who', 'how', 'why', 'when', 'where', 'can', 'could',
  'would', 'should', 'tell', 'about', 'please', 'hey', 'hi', 'hello', 'cheryl', 'us', 'show',
  'give', 'some', 'any', 's', 't',
])

const stem = (w) => {
  if (w.length > 4 && w.endsWith('ies')) return w.slice(0, -3) + 'y'
  return w.length > 3 && w.endsWith('s') && !w.endsWith('ss') ? w.slice(0, -1) : w
}

/** Score every KB entry against the question and return the best answer. */
export function findAnswer(question) {
  const norm = question.toLowerCase().replace(/[^\w\s']/g, ' ').replace(/\s+/g, ' ').trim()
  const words = norm.split(' ').filter((w) => w && !STOP.has(w))
  const stems = words.map(stem)

  let best = null
  let bestScore = 0

  for (const entry of KB) {
    let score = 0
    for (const key of entry.k) {
      const parts = key.split(' ')

      if (parts.length > 1) {
        // multi-word key: only an exact phrase hit counts, weighted by specificity
        if (norm.includes(key)) score += 3 + parts.length
        continue
      }
      const ks = stem(key)
      if (stems.includes(ks)) score += 5
      else if (words.some((w) => w.length > 3 && (w.startsWith(key) || key.startsWith(w)))) score += 2.5
      else if (key.length > 5 && norm.includes(key)) score += 3
    }
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }
  return bestScore >= 3 ? best.a : FALLBACK
}
