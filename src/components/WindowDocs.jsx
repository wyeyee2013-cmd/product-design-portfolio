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

    case 'callout':
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
    case 'feature':
      return (
        <div className={styles.feature}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <figure
            className={`${styles.featureFigure} ${item.figure.dark ? styles.figureOnDark : ''}`}
          >
            {item.figure.srcs ? (
              <div className={styles.figureGrid}>
                {item.figure.srcs.map((src) => (
                  <img src={src} alt="" loading="lazy" key={src} />
                ))}
              </div>
            ) : (
              <img src={item.figure.src} alt={item.figure.caption} loading="lazy" />
            )}
            <figcaption>{item.figure.caption}</figcaption>
          </figure>
        </div>
      )

    case 'resultCards':
      return (
        <div className={styles.resultCards}>
          {item.items.map((r) => (
            <div className={styles.resultCard} key={r.slice(0, 28)}>
              <p>{r}</p>
            </div>
          ))}
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
          <h2 className={styles.chapterHeading}>{s.label}</h2>
          {s.lead && <p className={styles.chapterLead}>{s.lead}</p>}
          {s.items.map((it, i) => (
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
