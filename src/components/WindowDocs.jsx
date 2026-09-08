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
 * Two versions of one screen under a draggable divider — used for the light
 * and dark themes, where a side-by-side wastes half the width and makes the
 * reader do the comparing. The range input is the real control: dragging the
 * image moves it, and it keeps arrow keys and a screen-reader label for free.
 */
function CompareFigure({ item }) {
  const [pos, setPos] = useState(50)

  return (
    <figure className={styles.compare}>
      <div className={styles.compareStage} style={{ '--pos': `${pos}%` }}>
        <img src={item.light} alt={`${item.caption} — light`} loading="lazy" />
        <div className={styles.compareDark}>
          <img src={item.dark} alt={`${item.caption} — dark`} loading="lazy" />
        </div>
        <span className={`${styles.compareTag} ${styles.compareTagLight}`}>Light</span>
        <span className={`${styles.compareTag} ${styles.compareTagDark}`}>Dark</span>
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
          aria-label="Drag to compare light and dark mode"
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
      while (i + 1 < items.length && ['text', 'bullets'].includes(items[i + 1].type)) {
        body.push(items[i + 1])
        i += 1
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
    const grid = PAIRS[item.type]
    const last = packed[packed.length - 1]
    if (grid) {
      if (last?.type === grid) last.items.push(item)
      else packed.push({ type: grid, items: [item] })
      continue
    }
    packed.push(item)
  }

  /* a card earns its box by sitting beside a sibling. A lone point is just a
     passage of prose — boxing and numbering it only adds furniture. */
  return packed.map((item) =>
    item.type === 'pointGrid' && item.items.length === 1
      ? { ...item.items[0], type: 'plainPoint' }
      : item
  )
}

function Callout({ item }) {
  return (
    <div className={styles.callout}>
      <h4>{item.title}</h4>
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
          {item.items.map((b) => (
            <li key={b.slice(0, 28)}>{b}</li>
          ))}
        </ul>
      )

    /* subheads and their copy, contained and side by side — see groupItems */
    case 'pointGrid':
      return (
        <div className={styles.pointGrid}>
          {item.items.map((point, n) => (
            <div className={styles.point} key={point.title}>
              <span className={styles.pointNum}>{String(n + 1).padStart(2, '0')}</span>
              <h3>{point.title}</h3>
              {point.body.map((b, i) =>
                b.type === 'bullets' ? (
                  <ul key={`b-${i}`}>
                    {b.items.map((li) => (
                      <li key={li.slice(0, 28)}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={`p-${i}`}>{b.text}</p>
                )
              )}
            </div>
          ))}
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

    /* a sequence on a progress track — deliberately not a card, so it does not
       read as two independent options the way the callout pairs do */
    case 'phases':
      return (
        <ol className={styles.phases}>
          {item.items.map((p) => (
            <li className={styles.phase} key={p.label}>
              <span className={styles.phaseLabel}>{p.label}</span>
              <h4>{p.title}</h4>
              <p className={styles.phaseScope}>{p.scope}</p>
              <p className={styles.phaseOutcome}>{p.outcome}</p>
            </li>
          ))}
        </ol>
      )

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
            {cap.rest && cap.rest !== item.title && (
              <span className={styles.featureCaption}>{cap.rest}</span>
            )}
          </div>
          {item.figure && <FeatureFigure figure={item.figure} bare />}
        </div>
      )
    }

    case 'compare':
      return <CompareFigure item={item} />

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
    <article className={styles.doc}>
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
