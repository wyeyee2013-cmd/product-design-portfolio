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
import { KB } from './knowledge.js'
import { PROJECTS } from './projects.js'
import { REVIEWS } from './reviews.js'
import { STATS } from './stats.js'

/** Copy may carry <b> and <i> for the page; the brief wants the words only. */
const plain = (s) => String(s ?? '').replace(/<[^>]+>/g, '')

/** A bullet is either a sentence or { icon, text }. */
const bulletText = (b) => plain(typeof b === 'string' ? b : b.text)

/**
 * Flattens one case-study item into plain sentences.
 *
 * Every type in the vocabulary has to be handled here. A type that falls
 * through is not a rendering bug — the page looks right — it is silently
 * missing from what the assistant knows, which is far harder to notice.
 */
function itemText(item) {
  switch (item.type) {
    case 'subhead':
    case 'text':
      return plain(item.text)

    /* all of these are a list of short statements, whatever they render as */
    case 'bullets':
    case 'questions':
    case 'priorities':
    case 'loop':
      return item.items.map((b) => `- ${bulletText(b)}`).join('\n')

    case 'callout':
      return [item.title, item.subtitle, item.text, ...(item.bullets ?? [])]
        .filter(Boolean)
        .map(plain)
        .join(' · ')

    case 'balance':
      return [item.title, item.parts.join(' / ')].filter(Boolean).map(plain).join(': ')

    case 'contrast':
      return item.items.map((c) => `${plain(c.label)}: ${plain(c.text)}`).join('\n')

    /* a run of steps, down a rail or across one */
    case 'timeline':
    case 'stepFlow':
      return item.items
        .map((s) => {
          const body = []
            .concat(s.body ?? s.text ?? [])
            .map(plain)
            .join(' ')
          return `- ${plain(s.label)}${body ? `: ${body}` : ''}${s.note ? ` [${plain(s.note)}]` : ''}`
        })
        .join('\n')

    case 'personas':
      return item.items.map((p) => `- ${plain(p.title)}: ${plain(p.text)}`).join('\n')

    case 'journey':
      return [
        plain(item.title),
        plain(item.intro),
        ...item.items.map(
          (s) =>
            `- ${plain(s.label)}: ${(s.bullets ?? []).map(plain).join('; ')}` +
            `${s.note ? ` — ${plain(s.note)}` : ''}`
        ),
      ]
        .filter(Boolean)
        .join('\n')

    case 'gauge':
      return [
        plain(item.title),
        plain(item.statement),
        `${item.value}/${item.of} ${plain(item.label)}`,
        ...[].concat(item.note ?? []).map(plain),
      ]
        .filter(Boolean)
        .join(' · ')

    case 'feature':
      return `${plain(item.title)}: ${plain(item.text)}`

    case 'featureGrid':
      return item.items.map((f) => `- ${plain(f.title)}: ${plain(f.text)}`).join('\n')

    case 'resultCards':
      return item.items
        .map((r) =>
          typeof r === 'string'
            ? `- ${plain(r)}`
            : `- ${[r.value, plain(r.label)].filter(Boolean).join(' ')}: ${plain(r.note)}`
        )
        .join('\n')

    /* the screens of a prototype, each captioned with what it shows */
    case 'prototype':
      return item.screens.map((s) => `- ${plain(s.step)}: ${plain(s.caption)}`).join('\n')

    /* an image's caption is the only prose it carries, and it is worth having */
    case 'figure':
    case 'figureGroup':
    case 'compare':
    case 'iaDiagram':
      return item.caption ? `(Shown: ${plain(item.caption)})` : ''

    default:
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
  return `${study.title}: ${study.tagline}\nSector: ${study.sector}\n${study.credits
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
        `### ${e.role} · ${e.company} (${e.type})\n${e.period} · ${e.location}\n${e.points
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
      (t) => `- ${t.title}: ${t.kind} at ${t.event}. ${t.blurb}`
    ).join('\n')}`
  )

  parts.push(
    `## Hackathons and competitions\n${HACKATHONS.map(
      (h) => `- ${h.name}: ${h.place} (${h.date})`
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

  /**
   * Her own answers to the questions people actually ask. These were written
   * for the offline fallback, which meant the model never saw them: the site
   * copy says what she did, and these say how she puts it. They carry framing
   * and opinion that no case study states outright, so the assistant reads
   * them as her position rather than as facts to recite.
   */
  parts.push(
    `## How she answers common questions\nThese are her own words. Match their framing and their opinions; do not quote them verbatim unless the wording is the point.\n\n${KB.map(
      (e) => `Q (${e.k.slice(0, 4).join(', ')})\nA: ${plain(e.a)}`
    ).join('\n\n')}`
  )

  parts.push(
    `## Navigating this site\n- The dock at the bottom has Work, About, LinkedIn and Email.\n- The projects board and the hero card stack both open the case studies.\n- The About window holds the full experience timeline, talks, hackathons, community photos and a résumé link.`
  )

  return parts.join('\n\n')
}
