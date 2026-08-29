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
    a: "I'm <b>Cheryl Lim</b> — a product designer who loves turning messy problems into products that actually make sense. With a background in data analytics, I sit somewhere between design, technology, data, and product. Honestly, I quite like it there.",
  },
  {
    k: ['role', 'job', 'title', 'position', 'work as', 'what do you do', 'what does she do'],
    a: '<b>Senior Product Designer / Product Manager</b> at FeedMe. Both hats on the same problems — I scope the thing, design it, then carry it through the lifecycle with the PMs and developers.',
  },
  {
    k: ['experience', 'experienced', 'years', 'how long', 'career', 'seniority', 'how many years'],
    a: '<b>4+ years</b> in UX/UI and product design, across B2B and SaaS. FeedMe now, Pantas before that, and earlier V Systems, Maxis, Asia Pacific University and Hiredly. Roughly 20+ projects across 10+ industries.',
  },
  {
    k: ['background', 'data analytics', 'analytics', 'pivot', 'switch', 'how did you start', 'get into design', 'journey'],
    a: 'I started in <b>data analytics</b> — my last analytics role was at Maxis, building data layers, BigQuery pipelines and Looker dashboards. Design pulled me in because I wanted to shape the thing people actually touch, not just measure it afterwards. The data habit stayed.',
  },
  {
    k: ['passionate', 'care about', 'mission', 'purpose', 'believe', 'value', 'motivat'],
    a: 'Bridging humans and technology. Plenty of people are locked out of good software simply because it assumes fluency they were never given — so I design for intuitive, accessible, scalable products, and keep asking <i>“but why?”</i> until the answer holds up.',
  },

  /* ---------- where she works ---------- */
  {
    k: ['feedme', 'feed me', 'at feedme', 'company', 'employer', 'current job', 'where do you work', 'where does she work', 'work now', 'currently work', 'who do you work for'],
    a: '<b>FeedMe</b> — a restaurant operating system. I lead the POS v7 → v8 revamp on tablet and mobile, design 0 → 1 work across five products (POS, KDS, Menu, FM OS, HRM Premium), and act as product manager for the onboarding portfolio.',
  },
  {
    k: ['pantas', 'at pantas', 'esg', 'sustainability', 'emission', 'carbon'],
    a: 'I was <b>AI Product Designer at Pantas</b> for a year, on three B2B ESG products — Enterprise, Financed Emissions, and Connect. I also led the move off Django-Bootstrap onto a React + shadcn framework, which finally gave the modules one design system.',
  },
  {
    k: ['previous', 'past', 'before', 'other companies', 'worked at', 'employment', 'history'],
    a: 'Pantas (AI Product Designer), V Systems (a Web3 community platform for finance), Maxis (digital analytics), Asia Pacific University (revamping the APSpace admin system), and Hiredly (UX/UI intern, my first taste of real user research).',
  },
  {
    k: ['maxis', 'at maxis', 'bigquery', 'looker', 'tag manager', 'dashboard'],
    a: 'At <b>Maxis</b> I was a digital analytics intern — data layers and event tracking through Google Tag Manager, dataset work in BigQuery, and Looker Studio dashboards I presented to stakeholders. Good grounding in what the numbers can and cannot tell you.',
  },
  {
    k: ['apu', 'at apu', 'university', 'apspace', 'student', 'academic'],
    a: 'At <b>Asia Pacific University</b> I was an R&D assistant on the design side — I led the APSpace admin system revamp, built responsive interfaces in Angular Material, and designed a Thesis Bank system on OutSystems.',
  },

  /* ---------- the work ---------- */
  {
    k: ['project', 'portfolio', 'case study', 'built', 'shipped', 'work on', 'works on', 'working on', 'her work', 'your work', 'selected work', 'what have you'],
    a: 'Five pieces on this page — FeedMe OS Onboarding, FeedMe POS, HRM Premium, Pantas Organisation, and Hireti Talent. The Pantas and Hireti write-ups are full case studies; hover the stack at the bottom right to fan them out, or scroll to the projects board.',
  },
  {
    k: ['pos', 'point of sale', 'terminal', 'cashier', 'till'],
    a: 'The POS is the hardest surface I design for: used one-handed, at speed, by staff trained once. I am leading the <b>v7 → v8 revamp</b> on tablet and mobile — sharpening the brand identity while laying the foundation of the design system.',
  },
  {
    k: ['kds', 'kitchen', 'display', 'cook', 'chef'],
    a: 'The <b>Kitchen Display</b> is one of the five FeedMe products I design for. It gets read from across a hot, busy room by someone whose hands are full, which rules out most of what works on a desktop screen.',
  },
  {
    k: ['menu', 'pricing', 'price', 'catalog'],
    a: 'Menu is deceptively deep — base prices, price groups, schedulers, catalog deltas and variants can all touch the same item. Most of the work is making precedence visible <i>before</i> a manager hits publish.',
  },
  {
    k: ['onboarding', 'first run', 'activation'],
    a: '<b>FeedMe OS Onboarding</b> is about getting an outlet from signed-up to actually selling. I run this one as product manager as well as designer, so the design brief and the revenue goal are the same conversation.',
  },
  {
    k: ['hrm', 'hr', 'employee', 'staff', 'roster', 'payroll'],
    a: '<b>HRM Premium</b> covers the people side — shifts, skills and permissions — for businesses where the roster changes weekly and half the team is part-time.',
  },
  {
    k: ['hireti', 'hilti', 'recruitment', 'hiring platform', 'talent', 'candidate'],
    a: '<b>Hireti</b> is a recruitment system that matches candidates to roles without burying either side in forms — including a chatbot consultant for headcount budgeting. Team Sweetzerland from APU built it, and it won <b>Grand Champion of the Hilti IT Competition 2024</b>.',
  },
  {
    k: ['result', 'impact', 'outcome', 'metric', 'measurable', 'success'],
    a: 'The Pantas organisation revamp is the clearest one: AI-driven extraction cut onboarding by <b>6–7 hours</b> per client and removed over <b>60%</b> of the onboarding team’s manual data processing, with high satisfaction from both staff and clients.',
  },
  {
    k: ['zero to one', '0 to 1', 'greenfield', 'new product', 'from scratch'],
    a: 'A lot of my work is <b>0 → 1</b> — shaping product experiences, design systems and strategy from nothing, alongside product managers and developers. Five products at FeedMe, three at Pantas.',
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
    a: 'This is the part I am most excited about. At FeedMe I am driving adoption of <b>AI-powered design workflows</b> — Claude orchestrators and custom skills — to build an AI ecosystem for the design team. At Pantas I pushed AI-first principles into the products themselves.',
  },
  {
    k: ['design system', 'token', 'component', 'library', 'consistency'],
    a: 'I build token layers in three tiers — Foundation, Semantic, Component — so a colour decided once propagates everywhere without anyone re-picking a hex. I set up the foundation at FeedMe and unified Pantas’ modules onto React + shadcn.',
  },
  {
    k: ['prototype', 'code', 'react', 'engineer', 'developer', 'front end', 'frontend'],
    a: 'I prototype in React and plain CSS — this whole page is one. It keeps the handoff conversation grounded in what actually renders instead of what a static frame implies.',
  },
  {
    k: ['accessib', 'accessible', 'accessibility', 'inclusive', 'a11y', 'disabilit'],
    a: 'It is the reason I design at all. Low digital proficiency locks people out of services they need, so the target is interfaces that work for diverse demographics — and a journey that is genuinely enjoyable, not merely compliant.',
  },
  {
    k: ['research', 'user research', 'interview', 'usability', 'testing', 'user test'],
    a: 'Interviews, empathy maps and affinity diagrams from my Hiredly days onward, then behaviour data to check what people actually did against what they told me. Design decisions should survive both.',
  },

  /* ---------- proof ---------- */
  {
    k: ['hackathon', 'competition', 'award', 'won', 'win', 'prize', 'achievement'],
    a: 'Twelve of them, and I have placed in most. Highlights: <b>Grand Champion</b> of the Hilti IT Competition 2024, 1st Runner Up at Malaysia Techlympics and the ASEAN MakeITSafe Hackathon, Silver at the Fusion HCI-UX design competition, and Top 10 at the AWS Great AI Hackathon.',
  },
  {
    k: ['talk', 'workshop', 'speak', 'speaker', 'teach', 'taught', 'mentor', 'conference'],
    a: '<b>10+ talks and workshops</b> on design, technology and community — design thinking and prototyping at UTP CodeFest, Build.Design.Launch with APU Hackthletes, Figma Make workshops, and a deep dive into UI/UX at Imaginehack. Apparently I enjoy sharing almost as much as designing.',
  },
  {
    k: ['community', 'communities', 'figma kl', 'friends of figma', 'notion', 'meetup', 'organiser', 'organizer', 'committee'],
    a: 'I am on the <b>core committee of Friends of Figma Kuala Lumpur</b> and of <b>Notion Community Kuala Lumpur</b>. Both are about giving makers a reason to show up and learn something — I like being around people who build things.',
  },
  {
    k: ['volunteer', 'charity', 'giving back', 'fundrais', 'social', 'rural'],
    a: 'I have taught English reading to children and parents in rural areas, and fundraised for several communities — one Figma Make workshop doubled as a fundraiser for an animal shelter. The best part is meeting people whose lives look nothing like mine.',
  },
  {
    k: ['testimonial', 'reference', 'people say', 'say about', 'said about', 'colleague', 'recommend', 'review', 'feedback about'],
    a: 'Scroll to the reviews section — teammates from Pantas and elsewhere describe me as resilient and reliable under tight timelines, fast without losing quality, and generally fun to work with. Their words, not mine.',
  },

  /* ---------- personal ---------- */
  {
    k: ['hobby', 'fun', 'outside work', 'free time', 'personal', 'interest', 'gamer', 'game', 'cafe', 'coffee'],
    a: 'Design addict, casual gamer, and always down for cafe hopping. Otherwise I build small interactive things for the sake of it — the dock at the bottom of this page started as one of those.',
  },
  {
    k: ['language', 'speak', 'english', 'mandarin', 'chinese', 'malay', 'bahasa'],
    a: 'Hello, Hai, and 你好 — I work in English day to day and get by in Malay and Mandarin besides.',
  },
  {
    k: ['not just visuals', 'tagline', 'alive', 'digital things', 'headline'],
    a: 'It means the visual layer is the last 10%. Most of the value sits underneath: what the states are, what happens when someone does the wrong thing, and whether the system says so in time.',
  },
  {
    k: ['why you', 'why should', 'why hire'],
    a: "Because I close the gap between the spec and the screen. I'll model the rules, prototype the risk, and hand engineering something that already survived its own edge cases — and I can hold the product manager’s end of the conversation too.",
  },

  /* ---------- logistics ---------- */
  {
    k: ['available', 'hire', 'hiring', 'freelance', 'open to', 'opportunit', 'recruit', 'looking for'],
    a: 'Yes — currently <b>available for work</b>. Product design or a design-engineering hybrid, contract or full-time. Best route is <b>cheryl.wylim@outlook.com</b>.',
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
    a: 'There is a résumé link at the top of the About document — open <b>About</b> from the dock and it is in the top right.',
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
