/**
 * One record per project, used by all three surfaces:
 *   - the glass deck in the hero (desktop only)
 *   - the tilted browser cards on the projects board
 *   - the macOS case-study window
 *
 * Board placement — `row` picks which row the card sits in, `rotate` its tilt,
 * `fit` the thumbnail crop, all taken from Figma node 15:1515.
 */
export const PROJECTS = [
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
      'Getting an outlet from signed-up to actually selling. The design problem is sequencing — what has to be true before the first order can be rung up.',
    thumb: '/assets/proj-1.png',
    gallery: ['/assets/proj-1.png'],
    tint: '#8168fd',
    row: 0,
    rotate: 7.65,
    clip: '/assets/clip-1.svg',
    fit: { height: '102.35%', top: '-1.18%', width: '100%', left: '0' },
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
    thumb: '/assets/proj-2.png',
    gallery: ['/assets/proj-2.png'],
    tint: '#f0803c',
    row: 0,
    rotate: -3.12,
    clip: '/assets/clip-2.svg',
    fit: { height: '105.93%', top: '-2.97%', width: '100%', left: '0' },
  },
  {
    id: 'hrm-premium',
    title: 'HRM Premium',
    deckTitle: 'HRM Premium',
    client: 'FeedMe',
    year: '2026',
    type: 'B2B2C Platform',
    tool: 'Figma',
    tags: ['B2B2C', 'FeedMe', '2026'],
    summary:
      'The people side — shifts, skills, and permissions — for businesses where the roster changes weekly and half the team is part-time.',
    thumb: '/assets/proj-3.png',
    gallery: ['/assets/proj-3.png'],
    tint: '#2f7d6b',
    row: 0,
    rotate: -7,
    clip: '/assets/clip-3.svg',
    fit: { height: '100%', top: '0', width: '100.6%', left: '-0.3%' },
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
    thumb: '/assets/proj-4.png',
    gallery: ['/assets/proj-4.png'],
    tint: '#c2453f',
    row: 1,
    rotate: 7.65,
    clip: '/assets/clip-4.svg',
    fit: { height: '108.68%', top: '-4.34%', width: '100%', left: '0' },
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
    thumb: '/assets/proj-5.png',
    gallery: ['/assets/proj-5.png'],
    tint: '#3a6ea5',
    row: 1,
    rotate: -7,
    clip: '/assets/clip-5.svg',
    fit: { height: '120.37%', top: '-10.19%', width: '100%', left: '0' },
  },
]

export const PROJECT_ROWS = [
  PROJECTS.filter((p) => p.row === 0),
  PROJECTS.filter((p) => p.row === 1),
]

export const DECK_PROJECTS = PROJECTS
