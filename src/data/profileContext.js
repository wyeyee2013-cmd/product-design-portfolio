/**
 * Composes the briefing document the Ask Cheryl endpoint hands to Claude.
 *
 * It is built from the same modules the site renders, so the assistant can
 * never drift from what a visitor can read for themselves — edit about.js or
 * caseStudies.js and the answers follow. Nothing is hand-duplicated here.
 *
 * Deterministic on purpose: no dates, no ordering surprises. The output is the
 * cached prefix of every request, and any byte that changes between calls
 * throws that cache away.
 */
import {
  COMMUNITY,
  EXPERIENCE,
  HACKATHONS,
  HIGHLIGHTS,
  INTRO,
  LEDE,
  PERSONAL,
  PROFILE,
  STORY,
  TALKS,
} from './about.js'
import { CASE_STUDIES } from './caseStudies.js'
import { PROJECTS } from './projects.js'
import { REVIEWS } from './reviews.js'
import { STATS } from './stats.js'

/** Flattens one case-study item tree into plain sentences. */
function itemText(item) {
  switch (item.type) {
    case 'subhead':
    case 'text':
      return item.text
    case 'bullets':
      return item.items.map((b) => `- ${b}`).join('\n')
    case 'callout':
      return [item.title, item.subtitle, item.text, ...(item.bullets || [])]
        .filter(Boolean)
        .join(' — ')
    case 'feature':
      return `${item.title} — ${item.text}`
    case 'resultCards':
      return item.items.map((r) => `- ${r}`).join('\n')
    default:
      /* figures carry no prose worth briefing on */
      return ''
  }
}

function caseStudyBrief(id) {
  const study = CASE_STUDIES[id]
  if (!study) return ''
  const sections = study.sections
    .map((s) => {
      const body = s.items.map(itemText).filter(Boolean).join('\n')
      return body ? `${s.label}${s.lead ? ` (${s.lead})` : ''}:\n${body}` : ''
    })
    .filter(Boolean)
    .join('\n\n')
  return `${study.title} — ${study.tagline}\nSector: ${study.sector}\n${study.credits
    .map((c) => `${c.label}: ${c.values.join('; ')}`)
    .join('\n')}\n\n${sections}`
}

export function buildProfileContext() {
  const parts = []

  parts.push(
    `# Cheryl Lim\n${PROFILE.position} · ${PROFILE.based}\nEmail: ${PROFILE.mail}\nLinkedIn: https://www.linkedin.com/in/cheryllimwyeyee/\nCurrently available for work.\nTagline: "${LEDE}"`
  )

  parts.push(`## In her words\n${INTRO}\n\n${HIGHLIGHTS.map((h) => `- ${h.text}`).join('\n')}`)

  parts.push(`## ${STORY.heading}\n${STORY.paragraphs.join('\n\n')}`)

  parts.push(
    `## Experience\n${EXPERIENCE.map(
      (e) =>
        `### ${e.role} — ${e.company} (${e.type})\n${e.period} · ${e.location}\n${e.points
          .map((p) => `- ${p}`)
          .join('\n')}`
    ).join('\n\n')}`
  )

  parts.push(
    `## Projects on the site\n${PROJECTS.map(
      (p) =>
        `- ${p.title} (${p.client}, ${p.year}, ${p.type}${p.comingSoon ? ', marked coming soon' : ''}): ${p.summary}`
    ).join('\n')}`
  )

  const studies = PROJECTS.map((p) => caseStudyBrief(p.id)).filter(Boolean)
  if (studies.length) parts.push(`## Full case studies\n\n${studies.join('\n\n---\n\n')}`)

  parts.push(
    `## Talks and workshops (10+ given)\n${TALKS.map(
      (t) => `- ${t.title} — ${t.kind} at ${t.event}. ${t.blurb}`
    ).join('\n')}`
  )

  parts.push(
    `## Hackathons and competitions\n${HACKATHONS.map(
      (h) => `- ${h.name} — ${h.place} (${h.date})`
    ).join('\n')}`
  )

  parts.push(
    `## Community\n${COMMUNITY.intro}\n${COMMUNITY.roles
      .map((r) => `- ${r.role}, ${r.org}`)
      .join('\n')}`
  )

  parts.push(`## Personal\n${PERSONAL.greeting}\n${PERSONAL.notes.map((n) => `- ${n}`).join('\n')}`)

  parts.push(`## By the numbers\n${STATS.map((s) => `- ${s.value}${s.suffix} ${s.label}`).join('\n')}`)

  parts.push(
    `## What colleagues say\n${REVIEWS.map(
      (r) => `- ${r.name}, ${r.role}: ${r.quote} ${r.body}`
    ).join('\n')}`
  )

  parts.push(
    `## Navigating this site\n- The dock at the bottom has Work, About, LinkedIn and Email.\n- The projects board and the hero card stack both open the case studies.\n- The About window holds the full experience timeline, talks, hackathons, community photos and a résumé link.`
  )

  return parts.join('\n\n')
}
