/**
 * One record per project, used by all three surfaces:
 *   - the glass deck in the hero (desktop only)
 *   - the tilted browser cards on the projects board
 *   - the macOS case-study window
 *
 * `tint` fills the deck thumbnail; `accent` is the readable shade of the same
 * hue used for small brand-coloured marks in the case study.
 *
 * Board placement — `row` picks which row the card sits in, `rotate` its tilt,
 * `fit` the thumbnail crop, all taken from Figma node 15:1515.
 */
const ALL_PROJECTS = [
  {
    id: 'hrm-premium',
    title: 'HRM Premium',
    deckTitle: 'HRM Premium',
    client: 'FeedMe',
    year: '2026',
    type: 'Web Application',
    tool: 'Figma, Claude',
    tags: ['Web App', 'FeedMe', '2026'],
    summary:
      'The people side: shifts, skills, and permissions for businesses where the roster changes weekly and half the team is part-time.',
    thumb: '/assets/hrm-cover.png',
    gallery: [],
    /* the tint is dark enough to double as the accent: 4.9:1 on white */
    tint: '#2f7d6b',
    row: 0,
    rotate: 7.65,
    clip: '/assets/clip-1.svg',
    fit: { height: '100%', top: '0', width: '100%', left: '0' },
  },
  {
    id: 'feedme-os',
    title: 'FeedMe OS Onboarding',
    deckTitle: 'Feedme OS',
    client: 'FeedMe',
    year: '2026',
    type: 'Mobile App',
    tool: 'Figma',
    tags: ['Mobile App', 'FeedMe', '2026'],
    summary:
      'Getting an outlet from signed-up to actually selling. The design problem is sequencing: what has to be true before the first order can be rung up.',
    thumb: '/assets/feedme-os-cover.png',
    gallery: [],
    comingSoon: true,
    tint: '#8168fd',
    row: 0,
    rotate: -3.12,
    clip: '/assets/clip-2.svg',
    fit: { height: '100%', top: '0', width: '100%', left: '0' },
  },
  {
    id: 'feedme-pos',
    title: 'FeedMe POS',
    deckTitle: 'FeedMe POS',
    client: 'FeedMe',
    year: '2026',
    type: 'Tablet / Mobile App',
    tool: 'Figma',
    tags: ['Tablet/Mobile App', 'FeedMe', '2026'],
    summary:
      'The hardest surface I design for: used one-handed, at speed, by staff trained once. Every extra tap costs real seconds during a rush.',
    thumb: '/assets/pos-cover.png',
    gallery: [],
    tint: '#f0803c',
    accent: '#b35110',
    row: 0,
    rotate: -7,
    clip: '/assets/clip-3.svg',
    fit: { height: '100%', top: '0', width: '100%', left: '0' },
  },
  {
    id: 'pantas',
    title: 'Pantas Organisation',
    deckTitle: 'Pantas Organisation',
    client: 'Pantas',
    year: '2025',
    type: 'B2B Platform',
    tool: 'Figma',
    tags: ['B2B', 'Pantas', '2025'],
    summary:
      'An organisation model that keeps roles, permissions, and reporting lines legible as a company grows past the point one person can hold it in their head.',
    thumb: '/assets/pantas-cover.png',
    gallery: [],
    tint: '#2b79fd',
    accent: '#0153e4',
    row: 1,
    rotate: 7.65,
    clip: '/assets/clip-4.svg',
    fit: { height: '100%', top: '0', width: '100%', left: '0' },
  },
  {
    id: 'hireti',
    title: 'Hireti Talent',
    deckTitle: 'Hireti Talent',
    client: 'Hilti',
    year: '2024',
    type: 'B2B Platform',
    tool: 'Figma',
    tags: ['B2B', 'Hilti', '2024'],
    summary:
      'Matching people to roles without burying either side in forms. Most of the work went into what the system should decide and what it should ask.',
    thumb: '/assets/hireti-cover.png',
    gallery: [],
    tint: '#d2051e',
    accent: '#d2051e',
    row: 1,
    rotate: -7,
    clip: '/assets/clip-5.svg',
    fit: { height: '100%', top: '0', width: '100%', left: '0' },
  },
]

/** Everything not flagged `hidden`. The hero deck, the board rows and the
    brief the ask box sends all derive from this, so one flag takes a
    project off the page everywhere. */
export const PROJECTS = ALL_PROJECTS.filter((p) => !p.hidden)

export const PROJECT_ROWS = [
  PROJECTS.filter((p) => p.row === 0),
  PROJECTS.filter((p) => p.row === 1),
]

export const DECK_PROJECTS = PROJECTS
