/**
 * Knowledge base for the hero's "Ask Cheryl stuff..." box.
 * Add an entry as { k: [keywords], a: 'answer (inline <b>/<i> allowed)' }.
 * Multi-word keys only match as an exact phrase; single-word keys match on stem.
 */
export const KB = [
  {
    k: ['who is', 'who are', 'yourself', 'introduce', 'intro', 'bio', 'about you', 'about her', 'about cheryl'],
    a: "I'm <b>Cheryl Lim</b> — a senior product designer working on FeedMe, a restaurant operating system. I spend my days on the parts of software nobody screenshots: menu rules, stock counts, cash drawers, kitchen tickets.",
  },
  {
    k: ['role', 'job', 'work as', 'title', 'position', 'what do you do', 'what does she do'],
    a: 'Product design and product management, usually on the same problems. Scope the thing, design it, prototype it in real code, then argue about the edge cases until the spec is honest.',
  },
  {
    k: ['feedme', 'feed me', 'company', 'employer', 'where do you work', 'current job'],
    a: '<b>FeedMe</b> — a restaurant OS covering POS, kitchen display, inventory, and a back-office portal. Multi-outlet F&amp;B businesses run their whole day on it, which is a good forcing function for clear design.',
  },
  {
    k: ['experience', 'years', 'how long', 'senior', 'career', 'background'],
    a: 'Senior-level, currently owning end-to-end product design across several FeedMe modules — menu, POS, KDS, deposits, and inventory.',
  },
  {
    k: ['skill', 'strength', 'good at', 'expertise', 'specialis', 'specializ', 'capab'],
    a: 'Systems-first product design, design systems and tokens, complex flow modelling, and coded prototypes. The through-line is reducing a messy rule set into something a tired person can operate correctly.',
  },
  {
    k: ['tool', 'stack', 'software', 'figma', 'design tool', 'what do you use'],
    a: "Figma for design and variables, React and plain CSS for prototypes — I'd rather test a working screen than a static one. On the systems side: token pipelines from Foundation to Semantic to Component.",
  },
  {
    k: ['project', 'portfolio', 'case study', 'built', 'made', 'shipped', 'work on', 'works on', 'working on', 'her work', 'your work', 'selected work', 'what have you'],
    a: 'Five live pieces — FeedMe OS Onboarding, FeedMe POS, HRM Premium, Pantas Organisation, and Hireti Talent. Hover the stack at the bottom right to fan them out, or scroll down to the projects board.',
  },
  {
    k: ['pos', 'point of sale', 'terminal', 'cashier', 'till'],
    a: 'The POS is the hardest surface I design for: used one-handed, at speed, by staff trained once. Every extra tap costs real seconds during a rush, so the bar for adding anything is high.',
  },
  {
    k: ['kds', 'kitchen', 'display', 'cook', 'chef'],
    a: 'The <b>Kitchen Display</b> work was about time. Cooks read it from a distance while moving, so it leans on duration colour-coding and typographic weight instead of icons and labels.',
  },
  {
    k: ['menu', 'pricing', 'price', 'scheduler', 'catalog', 'markup', 'variant'],
    a: 'Menu is deceptively deep — base price, price groups, schedulers, catalog deltas, auto markup, and variants can all touch the same item. Most of that project was making precedence visible <i>before</i> a manager hits publish.',
  },
  {
    k: ['onboarding', 'first run', 'setup', 'activation'],
    a: '<b>FeedMe OS Onboarding</b> is about getting an outlet from signed-up to actually selling. The design problem is sequencing: what must be true before the first order can be rung up.',
  },
  {
    k: ['hrm', 'hr', 'people', 'employee', 'staff', 'roster', 'payroll'],
    a: '<b>HRM Premium</b> covers the people side — shifts, skills, and permissions — for businesses where the roster changes weekly and half the team is part-time.',
  },
  {
    k: ['inventory', 'stock', 'restock', 'supply', 'purchasing'],
    a: 'Stock work turns consumption history into a restock suggestion an outlet manager can sanity-check in seconds. The real problem is trust: show the reasoning, not just the number.',
  },
  {
    k: ['process', 'how do you work', 'approach', 'method', 'workflow', 'philosophy'],
    a: 'Map the rules first, then the screens. I write the edge cases down before drawing anything, prototype the risky flow in code, put it in front of ops staff, and only then systemise it into components.',
  },
  {
    k: ['available', 'hire', 'hiring', 'freelance', 'open to', 'opportunit', 'recruit', 'looking for'],
    a: 'Yes — currently <b>available for work</b>. Product design or design-engineering hybrid roles, contract or full-time. Best route is <b>cheryl.wylim@outlook.com</b>.',
  },
  {
    k: ['contact', 'email', 'reach', 'get in touch', 'talk', 'call', 'connect'],
    a: "Email is best: <b>cheryl.wylim@outlook.com</b>. The mail icon in the dock at the bottom opens it directly.",
  },
  {
    k: ['location', 'based', 'where are you', 'city', 'country', 'remote', 'timezone'],
    a: 'Based in Malaysia, working across Southeast Asia and comfortable fully remote.',
  },
  {
    k: ['design system', 'token', 'component', 'library', 'consistency'],
    a: 'I build token layers in three tiers — Foundation, Semantic, Component — so a colour decision made once propagates to POS, portal, and mobile without anyone re-picking a hex.',
  },
  {
    k: ['not just visuals', 'tagline', 'alive', 'digital things', 'headline'],
    a: 'It means the visual layer is the last 10%. Most of the value sits underneath: what the states are, what happens when someone does the wrong thing, and whether the system says so in time.',
  },
  {
    k: ['prototype', 'code', 'react', 'engineer', 'developer', 'front end', 'frontend', 'build'],
    a: 'I prototype in React and plain CSS — this whole page is one. It keeps the handoff conversation grounded in what actually renders.',
  },
  {
    k: ['hobby', 'fun', 'outside work', 'free time', 'personal', 'interest'],
    a: 'Mostly building small interactive things for the sake of it — the dock at the bottom of this page started as one of those.',
  },
  {
    k: ['why you', 'why should', 'why hire'],
    a: "Because I close the gap between the spec and the screen. I'll model the rules, prototype the risk, and hand engineering something that already survived its own edge cases.",
  },
]

export const FALLBACK =
  "I don't have that one on file. Try asking about <b>her work</b>, <b>process</b>, <b>tools</b>, <b>FeedMe</b>, <b>availability</b>, or <b>how to get in touch</b>."

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

const stem = (w) =>
  w.length > 3 && w.endsWith('s') && !w.endsWith('ss') ? w.slice(0, -1) : w

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
