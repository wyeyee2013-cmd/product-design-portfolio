/**
 * "Hall of the Wannabe Overachiever" stat cards — Figma node 15:1792.
 * `x` / `y` place the unrotated 339x203 card inside the 1335x301 stats artboard
 * (derived from Figma's rotated bounding boxes),
 * `rotate` its tilt, `pin` the pushpin asset. `value` counts up from 0 on scroll.
 */
export const STATS = [
  {
    value: 4,
    suffix: '+',
    label: 'Years of Experience',
    lines: ['Designing websites, apps, and digital', 'products with a clear focus on usability.'],
    x: 5,
    y: 71,
    rotate: -3,
    pin: '/assets/pin-1.svg',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Projects Designed',
    lines: ['From landing pages to mobile apps, and', 'complete 0 to 1 product experience.'],
    x: 336,
    y: 87,
    rotate: 5,
    pin: '/assets/pin-2.svg',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Industries explored',
    lines: ['Worked across SaaS, fintech, AI, agencies,', 'finance, and service businesses.'],
    x: 673,
    y: 27,
    rotate: -8,
    pin: '/assets/pin-3.svg',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Talks and Workshops Given',
    lines: ['I love sharing and yapping about design,', 'but in the meantime I am stage-shy.'],
    x: 993,
    y: 87,
    rotate: -2,
    pin: '/assets/pin-4.svg',
  },
]
