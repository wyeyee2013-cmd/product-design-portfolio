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
/**
 * What stands in for a screen that has not been exported yet. It holds the
 * space at the ratio the real export will have, so the page reads the way it
 * will read once the file lands instead of collapsing around a gap, and it
 * says which screen belongs there.
 */
/**
 * Whether a figure's file is actually there.
 *
 * A figure marked `pending` shows its placeholder straight away rather than
 * waiting to fail: a missing asset is not reliably an error, since the dev
 * server answers 200 with the app shell and a lazy image is not decoded until
 * it is nearly on screen. It still probes for the file in the background, so
 * dropping the export into /public/assets swaps the real screen in on the next
 * load with no edit here. An unflagged figure trusts the file and falls back
 * to the placeholder only if the browser tells us it is broken.
 */
function useAsset(src, pending, kind = 'image') {
  const [found, setFound] = useState(!pending)

  useEffect(() => {
    if (!pending || !src) return
    let live = true

    if (kind === 'video') {
      /* nothing decodes a video cheaply, so ask the server. The content type
         matters as much as the status: a miss here answers 200 with the app
         shell, which is a perfectly good HTML document and not a film. */
      fetch(src, { method: 'HEAD' })
        .then((r) => {
          const type = r.headers.get('content-type') ?? ''
          if (live && r.ok && type.startsWith('video/')) setFound(true)
        })
        .catch(() => {})
      return () => {
        live = false
      }
    }

    const probe = new Image()
    probe.onload = () => {
      if (live && probe.naturalWidth) setFound(true)
    }
    probe.src = src
    return () => {
      live = false
      probe.onload = null
    }
  }, [src, pending, kind])

  return found
}

/**
 * A screen recording in place of a still. Silent product footage plays itself
 * and loops, since there is nothing to hear and nothing to decide; a visitor
 * who has asked their system for less motion gets controls and a poster frame
 * instead, and starts it themselves.
 */
function FigureVideo({ figure }) {
  const [still, setStill] = useState(false)

  useEffect(() => {
    const q = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setStill(q.matches)
    sync()
    q.addEventListener('change', sync)
    return () => q.removeEventListener('change', sync)
  }, [])

  return (
    <video
      src={figure.video}
      poster={figure.poster}
      autoPlay={!still}
      loop={!still}
      controls={still || figure.controls}
      muted
      playsInline
      preload="metadata"
      aria-label={figure.caption}
    />
  )
}

function FigurePlaceholder({ caption, ratio = '16 / 10', named = true, kind = 'Screen' }) {
  return (
    <div className={styles.placeholder} style={{ aspectRatio: ratio }}>
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <rect
          x="2.6"
          y="4.4"
          width="18.8"
          height="15.2"
          rx="2.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M2.6 15.6 8 10.9l3.7 3.2 3.4-2.8 4.3 3.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="15.4" cy="8.6" r="1.4" fill="currentColor" />
      </svg>
      {/* a figure prints its caption underneath already; a feature card's
          screen does not, so only that one needs naming here */}
      <span>{named ? caption : `${kind} to come`}</span>
    </div>
  )
}

function FeatureFigure({ figure, bare = false }) {
  const [broken, setBroken] = useState(false)
  const found = useAsset(figure.src, figure.pending)

  if (!figure.video && (broken || !found)) {
    return (
      <figure className={`${styles.featureFigure} ${bare ? styles.figureFills : ''}`}>
        <FigurePlaceholder caption={figure.caption} ratio={figure.ratio} />
        {!bare && <figcaption>{figure.caption}</figcaption>}
      </figure>
    )
  }

  return (
    <figure
      className={`${styles.featureFigure} ${figure.dark ? styles.figureOnDark : ''} ${
        bare ? styles.figureFills : ''
      }`}
    >
      {figure.video ? (
        <FigureVideo figure={figure} />
      ) : figure.srcs ? (
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
          onError={() => setBroken(true)}
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
        <img src={item.light} alt={`${item.caption}, ${before}`} loading="lazy" />
        <div className={styles.compareDark}>
          <img src={item.dark} alt={`${item.caption}, ${after}`} loading="lazy" />
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
         cards stacked beside the prose than as bullets buried under it. Only
         the icon-bearing form earns that though: a run of four-word directives
         in the same boxes is a column of mostly empty cards beside a heading
         with nothing under it. A plain list is part of what the heading is
         saying, so it goes in the card with it rather than being stranded
         under the set, with its own opening line left behind inside. */
      const list = items[i + 1]
      if (list?.type === 'bullets') {
        i += 1
        if (list.items.some((c) => typeof c !== 'string')) {
          out.push({ type: 'splitPoint', title: item.text, body, cards: list.items })
          continue
        }
        body.push(list)
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
    /* a statement is the section's conclusion, a deferred card the one thing
       that was not built — both take the full width alone */
    if (item.type === 'callout' && item.variant) {
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

  /* A card earns its box by having a sibling to sit beside. Alone it takes one
     column of a two-column grid and leaves the other empty, and its number
     counts against nothing — so a lone point is just a heading and its prose,
     however many cards the section holds elsewhere. */
  return packed.map((item) =>
    item.type === 'pointGrid' && item.items.length === 1
      ? { ...item.items[0], type: 'plainPoint' }
      : item
  )
}

/**
 * A standalone evidence figure. Like the feature screens, it holds its place
 * when the export is not there yet, so a study can declare where its research
 * artefacts go and have them appear the moment the files land.
 */
function DocFigure({ item }) {
  const [broken, setBroken] = useState(false)
  const found = useAsset(item.video ?? item.src, item.pending, item.video ? 'video' : 'image')

  return (
    <figure className={`${styles.figure} ${item.inset ? styles.inset : ''}`}>
      {item.video && found ? (
        <FigureVideo figure={item} />
      ) : broken || !found ? (
        <FigurePlaceholder
          caption={item.caption}
          ratio={item.ratio}
          named={false}
          kind={item.video ? 'Video' : 'Screen'}
        />
      ) : (
        <img
          src={item.src}
          alt={item.caption}
          loading="lazy"
          onError={() => setBroken(true)}
          /* a photograph rather than an export: `crop` frames the part that
             carries the evidence, since the whole frame at document width
             would be taller than the window it sits in */
          style={
            item.crop
              ? {
                  aspectRatio: item.crop,
                  objectFit: 'cover',
                  objectPosition: item.focus ?? 'center',
                }
              : undefined
          }
        />
      )}
      <figcaption>{item.caption}</figcaption>
    </figure>
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

/* Persona marks and the mood a journey stage carries. Outlined to match the
   reference; they inherit --study-tint. */
const PERSONA_ICONS = {
  question:
    'M12 2.8a9.2 9.2 0 1 0 0 18.4 9.2 9.2 0 0 0 0-18.4M12 14.6v-.5c0-1 .6-1.5 1.4-2.1.8-.6 1.3-1.2 1.3-2.2a2.7 2.7 0 0 0-5.4 0M12 17.4h.02',
  wrench:
    'M17.4 5.2a3.6 3.6 0 0 0-5 4.4L5.6 16.4a1.6 1.6 0 0 0 2.2 2.2l6.8-6.8a3.6 3.6 0 0 0 4.4-5l-2.3 2.3-2.1-.5-.5-2.1z',
  headset:
    'M5.4 15.2v-3.4a6.6 6.6 0 0 1 13.2 0v3.4M5.4 13.4H7a1 1 0 0 1 1 1v2.6a1 1 0 0 1-1 1H5.4zM18.6 13.4H17a1 1 0 0 0-1 1v2.6a1 1 0 0 0 1 1h1.6z',
}

const MOODS = {
  good: 'M8.2 13.8a4.2 4.2 0 0 0 7.6 0',
  ok: 'M8.6 14.2a3.9 3.9 0 0 0 6.8 0',
  neutral: 'M8.4 14.6h7.2',
  bad: 'M8.2 15.8a4.2 4.2 0 0 1 7.6 0',
}

function StrokeIcon({ d, size = 26, viewBox = '0 0 24 24' }) {
  return (
    <svg viewBox={viewBox} width={size} height={size} aria-hidden="true">
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MoodFace({ mood }) {
  return (
    <span className={styles.mood} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="30" height="30">
        <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="12" cy="12" r="9.2" />
          {mood === 'bad' ? (
            <>
              <path d="M8.4 9.6l1.8 1.4M15.6 9.6l-1.8 1.4" />
            </>
          ) : (
            <>
              <path d="M9.3 10.2v.02M14.7 10.2v.02" />
            </>
          )}
          <path d={MOODS[mood] ?? MOODS.neutral} />
        </g>
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

/**
 * A process read across rather than down: the steps sit on one tinted rail, so
 * a section that is genuinely sequential looks sequential. The vertical `Flow`
 * still covers a narrative run of work; this covers a journey the reader is
 * meant to follow end to end. Below the breakpoint the rail turns vertical so
 * the order survives on a phone.
 */
function StepFlow({ items }) {
  return (
    <ol className={styles.stepFlow}>
      {items.map((step, i) => (
        <li className={styles.stepFlowItem} key={step.label}>
          <span className={styles.flowNum}>{String(i + 1).padStart(2, '0')}</span>
          <h4>{step.label}</h4>
          {(step.body ?? [step.text]).map((p, n) => (
            <p key={`${i}-${n}`}>{p}</p>
          ))}
        </li>
      ))}
    </ol>
  )
}

/**
 * What a section decided, as a row of parallel commitments. Deliberately
 * unnumbered and undotted: these are things held at once, not steps taken in
 * order, so they get a rule each rather than the flow's rail.
 */
function Priorities({ item }) {
  const { items, title } = item
  /* four or fewer get a column each; more than that would be slivers, so they
     wrap in threes instead */
  const cols = items.length <= 4 ? items.length : 3

  return (
    <div className={styles.prioritiesBlock}>
      {title && <p className={styles.prioritiesLabel}>{title}</p>}
      <ul className={styles.priorities} style={{ '--cols': cols }}>
        {items.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

/**
 * The questions a phase had to answer. Deliberately not cards: a numeral, a
 * hairline, and the question at display size, so the framing of a study reads
 * as framing rather than as another set of boxes.
 */
function Questions({ items }) {
  return (
    <ol className={styles.questions}>
      {items.map((q, i) => (
        <li key={q}>
          <span className={styles.questionNum}>{String(i + 1).padStart(2, '0')}</span>
          <p>{q}</p>
        </li>
      ))}
    </ol>
  )
}

/**
 * A finding and the score behind it, as one object: the sentence the testing
 * produced, and beside it the rating drawn as what it is, filled marks against
 * empty ones. The metrics band suits a percentage; three out of five reads
 * better as three of five, and the claim is worth nothing without it.
 */
function Gauge({ item }) {
  const total = item.of ?? 5
  return (
    <div className={styles.gauge}>
      {item.title && <p className={styles.gaugeEyebrow}>{item.title}</p>}
      <div className={styles.gaugeBody}>
        {item.statement && <p className={styles.gaugeStatement}>{item.statement}</p>}
        <div className={styles.gaugeScore}>
          <div
            className={styles.gaugeMarks}
            role="img"
            aria-label={`${item.value} out of ${total}`}
          >
            {Array.from({ length: total }, (_, i) => (
              <span key={i} className={i < item.value ? styles.gaugeOn : styles.gaugeOff} />
            ))}
          </div>
          <p className={styles.gaugeValue}>
            {item.value}
            <span>/ {total}</span>
          </p>
          <p className={styles.gaugeLabel}>{item.label}</p>
        </div>
      </div>
      {item.note && <p className={styles.gaugeNote}>{item.note}</p>}
    </div>
  )
}

/* the showcase, two across: the stages that are not the entry point do not
   each need the full width of the document */
function FeatureGrid({ items }) {
  return (
    <div className={styles.featureGrid2}>
      {items.map((f) => {
        const cap = splitCaption(f.figure?.caption)
        const n = f.n ?? cap.n
        return (
          <div className={styles.feature} key={f.title}>
            <div className={styles.featureCopy}>
              {n && <span className={styles.pointNum}>{n}</span>}
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
            {f.figure && <FeatureFigure figure={f.figure} bare />}
          </div>
        )
      })}
    </div>
  )
}

function Callout({ item }) {
  /* a statement stands on its own, centred, with the body at display size —
     used where the callout is the section's conclusion rather than an aside */
  /* three weights of aside: a statement is the section's own conclusion and is
     centred on the page, a quote is a line worth pulling out of the prose but
     not worth stopping the page for, and a deferred card is something named in
     the plan and deliberately not built. */
  const variant = { statement: styles.statement, quote: styles.quote, deferred: styles.deferred }[
    item.variant
  ]

  return (
    <div className={`${styles.callout} ${variant ?? ''}`}>
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

    /* through safeRich so copy can carry <b>, like the bullets and cards do */
    case 'text':
      return (
        <p
          className={styles.chapterBody}
          dangerouslySetInnerHTML={{ __html: safeRich(item.text) }}
        />
      )

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

    /* the same run of work, laid across instead of down */
    case 'stepFlow':
      return <StepFlow items={item.items} />

    case 'questions':
      return <Questions items={item.items} />

    case 'priorities':
      return <Priorities item={item} />

    case 'gauge':
      return <Gauge item={item} />

    case 'featureGrid':
      return <FeatureGrid items={item.items} />

    /* the personalities the interviews surfaced, three across */
    case 'personas':
      return (
        <div className={styles.personas}>
          {item.items.map((p) => (
            <div className={styles.persona} key={p.title}>
              <span className={styles.personaIcon}>
                <StrokeIcon d={PERSONA_ICONS[p.icon]} />
              </span>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      )

    /* the stages of the journey as it stood, and the mood each carried */
    case 'journey':
      return (
        <div className={styles.journeyBlock}>
          {item.title && <h3 className={styles.journeyTitle}>{item.title}</h3>}
          {item.intro && <p className={styles.journeyIntro}>{item.intro}</p>}
          <div className={styles.journey}>
            {item.items.map((stage) => (
              <div className={styles.stage} key={stage.label}>
                <span className={styles.stagePill}>{stage.label}</span>
                <MoodFace mood={stage.mood} />
                <ul>
                  {stage.bullets.map((b) => (
                    <li key={b.slice(0, 28)}>{b}</li>
                  ))}
                </ul>
                <p className={styles.stageNote}>{stage.note}</p>
              </div>
            ))}
          </div>
        </div>
      )

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
      return <DocFigure item={item} />

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
      /* the number belongs to the stage, not to the screen that captions it,
         so it survives a section whose visuals moved to one video */
      const n = item.n ?? cap.n
      return (
        <div className={styles.feature}>
          <div className={styles.featureCopy}>
            {n && <span className={styles.pointNum}>{n}</span>}
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
              /* A band reads as a band when every cell opens at the same size.
                 Where an outcome has no number, its claim is the headline
                 rather than a small glyph standing in for one. */
              <div className={styles.metric} key={r.label}>
                <strong
                  className={`${styles.metricValue} ${r.value ? '' : styles.metricWords}`}
                >
                  {r.value ?? r.label}
                </strong>
                {r.value && <span className={styles.metricLabel}>{r.label}</span>}
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
    /* the readable shade of the project's colour, so brand-coloured marks pick
       it up per study — the raw tint is too light for 11px type on white */
    <article className={styles.doc} style={{ '--study-tint': project.accent ?? project.tint }}>
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
          The full case study for this project is being written up. Check back soon.
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
