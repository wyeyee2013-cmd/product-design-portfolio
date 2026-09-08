import { useEffect, useRef, useState } from 'react'
import { CASE_STUDIES } from '../data/caseStudies.js'
import { SUGGESTIONS } from '../data/knowledge.js'
import { askCheryl, safeRich } from '../lib/ask.js'
import {
  COMMUNITY,
  COMMUNITY_PHOTOS,
  EXPERIENCE,
  HACKATHONS,
  HIGHLIGHTS,
  INTRO,
  LEDE,
  PROFILE,
  STORY,
  TALKS,
} from '../data/about.js'
import { STATS } from '../data/stats.js'
import styles from './WindowDocs.module.css'

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M6.2 3.2H3.4A1.2 1.2 0 0 0 2.2 4.4v8.2a1.2 1.2 0 0 0 1.2 1.2h8.2a1.2 1.2 0 0 0 1.2-1.2V9.8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M9.4 2.4h4.2v4.2M13.6 2.4 7.4 8.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ============================================================
   Case study
   ============================================================ */

/**
 * A feature card's screen. Drops itself if the file is not there yet, so a
 * study can declare its figures before the exports land rather than shipping
 * broken images — put the file in place and it appears on the next load.
 */
function FeatureFigure({ figure, bare = false }) {
  const [missing, setMissing] = useState(false)
  if (missing) return null

  return (
    <figure
      className={`${styles.featureFigure} ${figure.dark ? styles.figureOnDark : ''} ${
        bare ? styles.figureFills : ''
      }`}
    >
      {figure.srcs ? (
        <div className={styles.figureGrid}>
          {figure.srcs.map((src) => (
            <img src={src} alt="" loading="lazy" key={src} />
          ))}
        </div>
      ) : (
        <img
          src={figure.src}
          alt={figure.caption}
          loading="lazy"
          onError={() => setMissing(true)}
        />
      )}
      {/* the caption moves up beside the copy when the screen fills the card */}
      {!bare && <figcaption>{figure.caption}</figcaption>}
    </figure>
  )
}

/**
 * Two screens under a draggable divider — the light and dark themes, and the
 * legacy build against the revamp. A side-by-side would halve the width and
 * leave the reader doing the comparing.
 *
 * `labels` names the two sides and `aspect` frames them; where the pair are
 * different sizes, set it to whichever screen should stay uncropped, since the
 * other is covered to fit.
 */
function CompareFigure({ item }) {
  const [pos, setPos] = useState(50)
  const [before, after] = item.labels ?? ['Light', 'Dark']

  return (
    <figure className={styles.compare}>
      <div
        className={styles.compareStage}
        style={{ '--pos': `${pos}%`, aspectRatio: item.aspect ?? '1194 / 834' }}
      >
        <img src={item.light} alt={`${item.caption} — ${before}`} loading="lazy" />
        <div className={styles.compareDark}>
          <img src={item.dark} alt={`${item.caption} — ${after}`} loading="lazy" />
        </div>
        <span className={`${styles.compareTag} ${styles.compareTagLight}`}>{before}</span>
        <span className={`${styles.compareTag} ${styles.compareTagDark}`}>{after}</span>
        <span className={styles.compareBar} aria-hidden="true">
          <i />
        </span>
        <input
          className={styles.compareRange}
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Drag to compare ${before} and ${after}`}
        />
      </div>
      <figcaption>{item.caption}</figcaption>
    </figure>
  )
}

/**
 * Folds each `subhead` together with the copy that follows it into one `point`
 * card, so a section reads as a set of discrete ideas rather than an
 * undifferentiated run of headings and paragraphs.
 *
 * A subhead only starts a card when prose actually follows it — one standing
 * ahead of a figure or a metrics band (`The Results`) stays a plain heading for
 * what comes next. Source order is otherwise untouched.
 */
function groupItems(items) {
  const out = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const next = items[i + 1]

    if (item.type === 'subhead' && next && (next.type === 'text' || next.type === 'bullets')) {
      const body = []
      while (i + 1 < items.length && items[i + 1].type === 'text') {
        body.push(items[i + 1])
        i += 1
      }
      /* a list following the diagnosis is its symptoms — those read better as
         cards stacked beside the prose than as bullets buried under it */
      if (items[i + 1]?.type === 'bullets') {
        const cards = items[i + 1].items
        i += 1
        out.push({ type: 'splitPoint', title: item.text, body, cards })
        continue
      }
      out.push({ type: 'point', title: item.text, body })
      continue
    }
    out.push(item)
  }

  /* runs of sibling cards pair up rather than stacking down the left, which
     leaves a section reading as one rhythm instead of three */
  const PAIRS = { point: 'pointGrid', callout: 'calloutGrid' }
  const packed = []
  for (const item of out) {
    /* a statement is the section's conclusion — it takes the full width alone */
    if (item.type === 'callout' && item.variant === 'statement') {
      packed.push(item)
      continue
    }
    const grid = PAIRS[item.type]
    const last = packed[packed.length - 1]
    if (grid) {
      if (last?.type === grid) last.items.push(item)
      else packed.push({ type: grid, items: [item] })
      continue
    }
    packed.push(item)
  }

  /* A card earns its box by having company. A point alone in a section of
     plain prose is just prose — but one sitting alongside other cards keeps
     its box, or it reads as a gap in the set. */
  const CARDED = new Set(['calloutGrid', 'feature'])
  const hasCompany = packed.some(
    (i) => CARDED.has(i.type) || (i.type === 'pointGrid' && i.items.length > 1)
  )
  return packed.map((item) =>
    item.type === 'pointGrid' && item.items.length === 1 && !hasCompany
      ? { ...item.items[0], type: 'plainPoint' }
      : item
  )
}

/* Line icons for the symptom cards. Drawn here rather than exported, so they
   inherit --study-tint and stay crisp; keyed by name from the case-study data. */
const SYMPTOM_ICONS = {
  file: 'M6 2.6h6.4L17 7.2v10.2H6zM12.2 2.8v4.6h4.6',
  clock: 'M11.5 4.4a7.1 7.1 0 1 0 0 14.2 7.1 7.1 0 0 0 0-14.2zM11.5 8v3.9l2.9 1.8',
  people: 'M8.4 11.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3.6 18.2c0-2.6 2.1-4.3 4.8-4.3s4.8 1.7 4.8 4.3M15 6.2a2.7 2.7 0 0 1 0 5.3M16.6 13.6c1.9.4 3.2 1.7 3.2 3.6',
  filter: 'M4 5.4h15L13 12v6l-4-2v-4z',
  message: 'M4.2 6.2h14.6v9.2h-8L6 18.4v-3H4.2z',
}

function SymptomIcon({ name }) {
  const d = SYMPTOM_ICONS[name]
  if (!d) return null
  return (
    <span className={styles.symptomIcon} aria-hidden="true">
      <svg viewBox="0 0 23 23" width="22" height="22">
        <path
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

/** The paragraphs and lists that hang off a point. */
function PointBody({ body }) {
  return body.map((b, i) =>
    b.type === 'bullets' ? (
      <ul key={`b-${i}`}>
        {b.items.map((li) => (
          <li key={li.slice(0, 28)}>{li}</li>
        ))}
      </ul>
    ) : (
      <p key={`p-${i}`}>{b.text}</p>
    )
  )
}

/** A run of work in order, on a rail: numbered node per step. */
function Flow({ items }) {
  return (
    <ol className={styles.flow}>
      {items.map((step, i) => (
        <li className={styles.flowStep} key={step.label}>
          <span className={styles.flowNum}>{String(i + 1).padStart(2, '0')}</span>
          <h4>{step.label}</h4>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  )
}

function Callout({ item }) {
  /* a statement stands on its own, centred, with the body at display size —
     used where the callout is the section's conclusion rather than an aside */
  const statement = item.variant === 'statement'

  return (
    <div className={`${styles.callout} ${statement ? styles.statement : ''}`}>
      <div className={styles.calloutHead}>
        {/* a target, tinted per study from --study-tint */}
        <span className={styles.calloutIcon} aria-hidden="true">
          <svg viewBox="0 0 20 20" width="20" height="20">
            <circle cx="10" cy="10" r="7.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="10" cy="10" r="2.6" fill="currentColor" />
          </svg>
        </span>
        <h4>{item.title}</h4>
      </div>
      {item.subtitle && <p className={styles.calloutSub}>{item.subtitle}</p>}
      {item.bullets && (
        <ul>
          {item.bullets.map((b) => (
            <li key={b.slice(0, 24)}>{b}</li>
          ))}
        </ul>
      )}
      {item.text && <p>{item.text}</p>}
    </div>
  )
}

/** '03 Candidate Matching Layout' -> { n: '03', rest: 'Candidate Matching Layout' } */
function splitCaption(caption = '') {
  const m = caption.match(/^\s*(\d{1,2})\s+(.*)$/)
  return m ? { n: m[1], rest: m[2] } : { n: null, rest: caption }
}

/* ---- Spaghetti vs Scalable ------------------------------------------------
   A schematic, not a map of the real screens: the left side shows the shape
   of the problem the audit found (many entry points, tangled paths, generic
   icons that name nothing), the right the shape of what replaced it. The area
   labels are the ones visible in the shipped navigation. Replace the whole
   item with a `figure` if a proper diagram gets exported from Figma. */
const TANGLE = [
  [62, 96], [152, 68], [250, 100], [350, 72], [412, 136],
  [72, 176], [162, 152], [272, 184], [382, 206],
  [112, 256], [232, 266], [342, 296], [152, 336], [272, 344],
]
const TANGLE_EDGES = [
  [0, 2], [0, 6], [1, 7], [1, 10], [2, 8], [2, 5], [3, 7], [3, 12],
  [4, 10], [5, 11], [6, 13], [7, 12], [8, 9], [9, 13], [10, 3], [11, 1], [12, 4],
]
const AREAS = ['Tables', 'Ordering', 'Payment', 'Report', 'Settings']

/** A crossing arc between two nodes, bowed alternately so paths overlap. */
function arc([x1, y1], [x2, y2], i) {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const bow = (i % 2 ? 1 : -1) * (26 + (i % 3) * 16)
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy) || 1
  return `M${x1} ${y1} Q${mx - (dy / len) * bow} ${my + (dx / len) * bow} ${x2} ${y2}`
}

function IaDiagram({ item }) {
  return (
    <figure className={styles.diagram}>
      {/* the labels live in the viewBox, so on a narrow screen they would
          scale down to a few pixels — the diagram scrolls in its own track */}
      <div className={styles.diagramScroll}>
      <svg viewBox="0 0 1000 400" className={styles.diagramSvg} role="img" aria-label={item.caption}>
        {/* the halves butt together, divided by one rule down the middle */}
        <path className={styles.diagramDivide} d="M500 24 V376" />

        {/* ---- legacy ---- */}
        <text className={styles.diagramTagBad} x="0" y="42">
          LEGACY
        </text>
        <text className={styles.diagramNote} x="0" y="372">
          10+ undocumented flows behind generic icons
        </text>
        <g className={styles.tangleEdge}>
          {TANGLE_EDGES.map(([a, b], i) => (
            <path d={arc(TANGLE[a], TANGLE[b], i)} key={`e-${a}-${b}`} />
          ))}
        </g>
        {/* deliberately featureless — the point is that they named nothing */}
        {TANGLE.map(([x, y]) => (
          <rect
            className={styles.tangleNode}
            x={x - 9}
            y={y - 9}
            width="18"
            height="18"
            rx="4"
            key={`n-${x}-${y}`}
          />
        ))}

        {/* ---- revamped ---- */}
        <text className={styles.diagramTagGood} x="528" y="42">
          REVAMPED
        </text>
        <text className={styles.diagramNote} x="528" y="372">
          One predictable path to every area
        </text>
        <g className={styles.cleanEdge}>
          <path d="M761 134 V166" />
          <path d="M600 166 H922" />
          {[600, 681, 761, 842, 922].map((x) => (
            <path d={`M${x} 166 V196`} key={`d-${x}`} />
          ))}
          {/* ticks down to the child rows, so those read as nested rather
              than as loose marks floating under the tree */}
          {[600, 681, 761, 842, 922].map((x) => (
            <path d={`M${x} 230 V254`} key={`l-${x}`} />
          ))}
        </g>
        <rect className={styles.cleanRoot} x="706" y="100" width="110" height="34" rx="9" />
        <text className={styles.cleanRootLabel} x="761" y="122">
          POS
        </text>
        {AREAS.map((label, i) => {
          const x = [600, 681, 761, 842, 922][i]
          return (
            <g key={label}>
              <rect className={styles.cleanNode} x={x - 38} y="196" width="76" height="34" rx="9" />
              <text className={styles.cleanLabel} x={x} y="218">
                {label}
              </text>
              {[0, 1].map((k) => (
                <rect
                  className={styles.cleanLeaf}
                  x={x - 26 + k * 28}
                  y="256"
                  width="24"
                  height="8"
                  rx="4"
                  key={k}
                />
              ))}
            </g>
          )
        })}
      </svg>
      </div>
      <figcaption>{item.caption}</figcaption>
    </figure>
  )
}

/** Loose enough that '&' and 'and' count as the same word. */
const sameWords = (a = '', b = '') => {
  const norm = (t) =>
    t
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim()
  return norm(a) === norm(b)
}

/** One item in a case-study section, rendered in source order. */
function StudyItem({ item }) {
  switch (item.type) {
    case 'subhead':
      return <h3 className={styles.chapterSubhead}>{item.text}</h3>

    case 'text':
      return <p className={styles.chapterBody}>{item.text}</p>

    case 'bullets':
      return (
        <ul className={styles.chapterList}>
          {item.items.map((b) => {
            const text = typeof b === 'string' ? b : b.text
            return <li key={text.slice(0, 28)} dangerouslySetInnerHTML={{ __html: safeRich(text) }} />
          })}
        </ul>
      )

    /* subheads and their copy, contained and side by side — see groupItems */
    case 'pointGrid':
      return (
        <div className={styles.pointGrid}>
          {item.items.map((point, n) => (
            <div className={styles.point} key={point.title}>
              {/* a number only means something when there is a sibling to count against */}
              {item.items.length > 1 && (
                <span className={styles.pointNum}>{String(n + 1).padStart(2, '0')}</span>
              )}
              <h3>{point.title}</h3>
              <PointBody body={point.body} />
            </div>
          ))}
        </div>
      )

    /* the heading holds the left column; the diagnosis and the symptoms it
       produced run down the right, as in the Pantas reference */
    case 'splitPoint':
      return (
        <div className={styles.splitPoint}>
          <h3 className={styles.splitHeading}>{item.title}</h3>
          <div className={styles.splitBody}>
            <div className={styles.splitProse}>
              <PointBody body={item.body} />
            </div>
            <div className={styles.splitCards}>
              {item.cards.map((c) => {
                const text = typeof c === 'string' ? c : c.text
                return (
                  <div className={styles.splitCard} key={text.slice(0, 28)}>
                    {typeof c !== 'string' && <SymptomIcon name={c.icon} />}
                    <p dangerouslySetInnerHTML={{ __html: safeRich(text) }} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )

    /* a lone point: subhead and prose, no box, no number */
    case 'plainPoint':
      return (
        <>
          <h3 className={styles.chapterSubhead}>{item.title}</h3>
          {item.body.map((b, i) =>
            b.type === 'bullets' ? (
              <ul className={styles.chapterList} key={`b-${i}`}>
                {b.items.map((li) => (
                  <li key={li.slice(0, 28)}>{li}</li>
                ))}
              </ul>
            ) : (
              <p className={styles.chapterBody} key={`p-${i}`}>
                {b.text}
              </p>
            )
          )}
        </>
      )

    /* the run of work in order, on a rail */
    case 'timeline':
      return <Flow items={item.items} />

    /* a statement callout, left unpaired by groupItems */
    case 'callout':
      return <Callout item={item} />

    case 'calloutGrid':
      return (
        <div className={styles.calloutGrid}>
          {item.items.map((c) => (
            <Callout item={c} key={c.title} />
          ))}
        </div>
      )

    case 'figure':
      return (
        <figure className={styles.figure}>
          <img src={item.src} alt={item.caption} loading="lazy" />
          <figcaption>{item.caption}</figcaption>
        </figure>
      )

    case 'figureGroup':
      return (
        <figure className={styles.figure}>
          <div className={styles.figureGrid}>
            {item.srcs.map((src) => (
              <img src={src} alt="" loading="lazy" key={src} />
            ))}
          </div>
          <figcaption>{item.caption}</figcaption>
        </figure>
      )

    /* a design decision and the screen that proves it, in one card */
    /* copy on top, then the screen filling the rest of the card */
    case 'feature': {
      const cap = splitCaption(item.figure?.caption)
      return (
        <div className={styles.feature}>
          <div className={styles.featureCopy}>
            {cap.n && <span className={styles.pointNum}>{cap.n}</span>}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {/* only worth showing when it says something the title does not */}
            {cap.rest && !sameWords(cap.rest, item.title) && (
              <span className={styles.featureCaption}>{cap.rest}</span>
            )}
          </div>
          {item.figure && <FeatureFigure figure={item.figure} bare />}
        </div>
      )
    }

    case 'compare':
      return <CompareFigure item={item} />

    case 'iaDiagram':
      return <IaDiagram item={item} />

    /* items are either a plain sentence or { icon, value, label, note } — the
       object form gets the display-number treatment, the string form the
       original card, so earlier studies are untouched */
    case 'resultCards':
      return (
        <div className={styles.resultCards}>
          {item.items.map((r) =>
            typeof r === 'string' ? (
              <div className={styles.resultCard} key={r.slice(0, 28)}>
                <p>{r}</p>
              </div>
            ) : (
              <div className={styles.metric} key={r.label}>
                {r.value ? (
                  <strong className={styles.metricValue}>{r.value}</strong>
                ) : (
                  r.icon && <span className={styles.metricIcon}>{r.icon}</span>
                )}
                <span className={styles.metricLabel}>{r.label}</span>
                <p className={styles.metricNote}>{r.note}</p>
              </div>
            )
          )}
        </div>
      )

    default:
      return null
  }
}

export function ProjectDoc({ project }) {
  const { id, title, summary, client, year, type, tool, thumb, comingSoon, gallery = [] } = project
  const extras = gallery.filter((src) => src !== thumb)
  const study = CASE_STUDIES[id]

  return (
    /* the project's own tint, so brand-coloured marks pick it up per study */
    <article className={styles.doc} style={{ '--study-tint': project.tint }}>
      <div className={styles.hero}>
        <img src={thumb} alt={`${title} cover`} />
      </div>

      {study?.sector && <p className={styles.sector}>{study.sector}</p>}
      {comingSoon && <p className={styles.soonTag}>Coming soon</p>}

      <header className={styles.head}>
        <h1 className={styles.title}>{study?.title || title}</h1>
      </header>

      <p className={styles.summary}>{study?.tagline || summary}</p>

      <dl className={styles.meta}>
        <div>
          <dt>Client :</dt>
          <dd>{client}</dd>
        </div>
        <div>
          <dt>Years :</dt>
          <dd>{year}</dd>
        </div>
        <div>
          <dt>Project Type :</dt>
          <dd>{type}</dd>
        </div>
        <div>
          <dt>Tool Used :</dt>
          <dd>{tool}</dd>
        </div>
      </dl>

      {/* credits (role / team / timeline) from the long-form write-up */}
      {study?.credits && (
        <dl className={styles.credits}>
          {study.credits.map((c) => (
            <div key={c.label}>
              <dt>{c.label}</dt>
              {c.values.map((v) => (
                <dd key={v}>{v}</dd>
              ))}
            </div>
          ))}
        </dl>
      )}

      {comingSoon && !study && (
        <p className={styles.soonNote}>
          The full case study for this project is being written up — check back soon.
        </p>
      )}

      {study?.sections?.map((s) => (
        <section className={styles.chapter} key={s.label}>
          {/* a section with a lead shows a small label above it; one without
              carries the display weight on the label itself, so it does not
              read as a lesser section than its neighbours */}
          {s.lead ? (
            <>
              <h2 className={styles.chapterHeading}>{s.label}</h2>
              <p className={styles.chapterLead}>{s.lead}</p>
            </>
          ) : (
            <h2 className={styles.chapterTitle}>{s.label}</h2>
          )}
          {groupItems(s.items).map((it, i) => (
            <StudyItem item={it} key={`${it.type}-${i}`} />
          ))}
        </section>
      ))}

      {extras.map((src) => (
        <div className={styles.shot} key={src}>
          <img src={src} alt="" />
        </div>
      ))}
    </article>
  )
}

/* ============================================================
   About
   ============================================================ */
/** How many hackathon rows show before "Show more". */
const HACKS_VISIBLE = 5

export function AboutDoc() {
  const [allHacks, setAllHacks] = useState(false)
  /* photos that failed to load fall back to the empty slot */
  const [missingPhotos, setMissingPhotos] = useState({})
  const hacks = allHacks ? HACKATHONS : HACKATHONS.slice(0, HACKS_VISIBLE)
  const hidden = HACKATHONS.length - HACKS_VISIBLE

  return (
    <article className={styles.doc}>
      <header className={styles.head}>
        <h1 className={styles.title}>About me</h1>
        <a
          className={styles.preview}
          href={PROFILE.resume}
          target="_blank"
          rel="noreferrer noopener"
        >
          Download résumé
          <ExternalIcon />
        </a>
      </header>

      <p className={styles.lede}>{LEDE}</p>

      {/* ---- profile card ---- */}
      <div className={styles.profile}>
        <img className={styles.avatar} src={PROFILE.photo} alt="Cheryl Lim" />
        <dl className={styles.facts}>
          <div>
            <dt>Name</dt>
            <dd>{PROFILE.name}</dd>
          </div>
          <div>
            <dt>Position</dt>
            <dd>{PROFILE.position}</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>{PROFILE.based}</dd>
          </div>
          <div>
            <dt>Mail</dt>
            <dd>
              <a className={styles.mailLink} href={`mailto:${PROFILE.mail}`}>
                {PROFILE.mail}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      {/* ---- intro ---- */}
      <p className={styles.intro}>{INTRO}</p>

      <ul className={styles.highlights}>
        {HIGHLIGHTS.map((h) => (
          <li key={h.emoji}>
            <span className={styles.emoji} aria-hidden="true">
              {h.emoji}
            </span>
            <span>{h.text}</span>
          </li>
        ))}
      </ul>

      {/* ---- bridging the gap ---- */}
      <section className={styles.block}>
        <h2 className={styles.blockHeading}>{STORY.heading}</h2>
        <div className={styles.prose}>
          {STORY.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      {/* ---- experience ---- */}
      <section className={styles.block}>
        <h2 className={styles.blockHeading}>Experience</h2>
        <ol className={styles.timeline}>
          {EXPERIENCE.map((job) => (
            <li className={styles.job} key={`${job.company}-${job.period}`}>
              <div className={styles.jobMark}>
                {job.logo ? (
                  <img src={job.logo} alt="" />
                ) : (
                  <span aria-hidden="true">{job.company.charAt(0)}</span>
                )}
              </div>

              <div className={styles.jobBody}>
                <div className={styles.jobTop}>
                  <h3>{job.role}</h3>
                  <span className={styles.period}>{job.period}</span>
                </div>
                <p className={styles.jobMeta}>
                  {job.company} <span className={styles.dot}>·</span> {job.type}
                </p>
                <p className={styles.jobPlace}>{job.location}</p>
                <ul className={styles.points}>
                  {job.points.map((pt) => (
                    <li key={pt.slice(0, 32)}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---- talks ---- */}
      <section className={styles.block}>
        <h2 className={styles.blockHeading}>Talks &amp; workshops</h2>
        <p className={styles.blockNote}>
          I enjoy sharing and yapping about design almost as much as I enjoy designing.
        </p>
        <ul className={styles.talks}>
          {TALKS.map((t) => (
            <li className={styles.talk} key={t.title}>
              <div className={styles.talkTop}>
                <span className={styles.kind}>{t.kind}</span>
                {t.year && <span className={styles.talkYear}>{t.year}</span>}
              </div>
              <h3 className={styles.talkTitle}>{t.title}</h3>
              <p className={styles.talkEvent}>{t.event}</p>
              <p className={styles.talkBlurb}>{t.blurb}</p>
            </li>
          ))}
        </ul>
        <p className={styles.andMore}>and more.</p>
      </section>

      {/* ---- hackathons ---- */}
      <section className={styles.block}>
        <h2 className={styles.blockHeading}>Hackathons &amp; competitions</h2>
        <p className={styles.blockNote}>
          The fastest way I know to pressure-test an idea, work with people I have never met, and
          ship something end to end before the weekend is over.
        </p>
        <ul className={styles.hacks}>
          {hacks.map((h) => (
            <li className={styles.hack} key={h.name + h.place}>
              <span className={styles.hackName}>{h.name}</span>
              <span className={styles.place}>{h.place}</span>
              <span className={styles.hackDate}>{h.date}</span>
            </li>
          ))}
        </ul>

        {hidden > 0 && (
          <button
            className={styles.showMore}
            type="button"
            aria-expanded={allHacks}
            onClick={() => setAllHacks((v) => !v)}
          >
            {allHacks ? 'Show less' : `Show ${hidden} more`}
            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" aria-hidden="true">
              <path
                d="M1 1.2 5.5 5.6 10 1.2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </section>

      {/* ---- community ---- */}
      <section className={styles.block}>
        <h2 className={styles.blockHeading}>{COMMUNITY.heading}</h2>
        <div className={styles.prose}>
          <p>{COMMUNITY.intro}</p>
        </div>

        <ul className={styles.roles}>
          {COMMUNITY.roles.map((r) => (
            <li className={styles.role} key={r.org}>
              <span className={styles.roleTag}>{r.role}</span>
              <span className={styles.roleOrg}>{r.org}</span>
            </li>
          ))}
        </ul>

        <div className={styles.gallery}>
          {COMMUNITY_PHOTOS.map((photo, i) => (
            <figure
              className={`${styles.frame} ${photo.wide ? styles.frameWide : ''} ${
                photo.tall ? styles.frameTall : ''
              } ${photo.src && !missingPhotos[photo.src] ? '' : styles.frameEmpty}`}
              key={photo.caption || i}
            >
              {photo.src && !missingPhotos[photo.src] ? (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  onError={() =>
                    setMissingPhotos((m) => ({ ...m, [photo.src]: true }))
                  }
                />
              ) : (
                <span className={styles.slot} aria-hidden="true">
                  Add photo
                </span>
              )}
              {photo.caption && <figcaption>{photo.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </section>

      {/* ---- stats + contact ---- */}
      <div className={styles.stats}>
        {STATS.map((s) => (
          <div className={styles.stat} key={s.label}>
            <strong>
              {s.value}
              {s.suffix}
            </strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.aboutCta}>
        <p>Want to know more, or think we could work together?</p>
        <div className={styles.ctaRow}>
          <a className={styles.ctaPrimary} href={`mailto:${PROFILE.mail}`}>
            Say hello
          </a>
          <a
            className={styles.ctaGhost}
            href={PROFILE.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            View résumé
            <ExternalIcon />
          </a>
        </div>
      </div>
    </article>
  )
}

/* ============================================================
   Ask Cheryl — the conversation lives here now
   ============================================================ */
export function AskDoc({ firstQuestion }) {
  const [turns, setTurns] = useState([])
  const [pending, setPending] = useState(null)
  const [value, setValue] = useState('')
  const endRef = useRef(null)
  const seeded = useRef(false)
  /* mirrors `turns` so ask() reads the live thread rather than its closure */
  const turnsRef = useRef([])

  useEffect(() => {
    turnsRef.current = turns
    endRef.current?.scrollIntoView({ block: 'nearest' })
  }, [turns, pending])

  /* the question typed in the hero opens this window, so it asks itself */
  useEffect(() => {
    if (seeded.current || !firstQuestion) return
    seeded.current = true
    ask(firstQuestion)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstQuestion])

  async function ask(raw) {
    const q = (raw || '').trim()
    if (!q || pending) return
    setValue('')
    setPending(q)
    /* the model sees the thread so follow-ups like "and before that?" work */
    const { answer } = await askCheryl(
      q,
      turnsRef.current.map((t) => ({ q: t.q, a: t.a }))
    )
    setPending(null)
    setTurns((t) => [...t, { q, a: answer, id: `${t.length}-${q.slice(0, 12)}` }])
  }

  return (
    <article className={styles.doc}>
      <header className={styles.head}>
        <h1 className={styles.title}>Ask Cheryl</h1>
      </header>

      <div className={styles.thread}>
        {turns.map((t) => (
          <div className={styles.turn} key={t.id}>
            <p className={styles.q}>{t.q}</p>
            <p className={styles.a} dangerouslySetInnerHTML={{ __html: safeRich(t.a) }} />
          </div>
        ))}
        {pending && (
          <div className={styles.turn}>
            <p className={styles.q}>{pending}</p>
            <p className={styles.thinking} aria-live="polite">
              <i />
              <i />
              <i />
              <span className="srOnly">Thinking</span>
            </p>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className={styles.chips}>
        {SUGGESTIONS.map((s) => (
          <button key={s} type="button" onClick={() => ask(s)} disabled={Boolean(pending)}>
            {s}
          </button>
        ))}
      </div>

      <form
        className={styles.followup}
        onSubmit={(e) => {
          e.preventDefault()
          ask(value)
        }}
      >
        <label className="srOnly" htmlFor="followupInput">
          Ask another question
        </label>
        <input
          id="followupInput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask something else..."
          maxLength={300}
          autoComplete="off"
        />
        <button type="submit" disabled={!value.trim() || Boolean(pending)}>
          Send
        </button>
      </form>
    </article>
  )
}
