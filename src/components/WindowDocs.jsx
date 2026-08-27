import { useEffect, useRef, useState } from 'react'
import { findAnswer, SUGGESTIONS } from '../data/knowledge.js'
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
export function ProjectDoc({ project }) {
  const { title, summary, client, year, type, tool, thumb, gallery = [] } = project
  const extras = gallery.filter((src) => src !== thumb)

  return (
    <article className={styles.doc}>
      <div className={styles.hero}>
        <img src={thumb} alt={`${title} cover`} />
      </div>

      <header className={styles.head}>
        <h1 className={styles.title}>{title}</h1>
        <a
          className={styles.preview}
          href="#work"
          onClick={(e) => e.preventDefault()}
          aria-disabled="true"
        >
          Preview Link
          <ExternalIcon />
        </a>
      </header>

      <p className={styles.summary}>{summary}</p>

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
export function AboutDoc() {
  return (
    <article className={styles.doc}>
      <div className={styles.hero}>
        <img src="/assets/hero-bg.png" alt="" />
      </div>

      <header className={styles.head}>
        <h1 className={styles.title}>Cheryl Lim</h1>
        <a className={styles.preview} href="mailto:wyeyee@feedme.cc">
          Get in touch
          <ExternalIcon />
        </a>
      </header>

      <p className={styles.summary}>
        Senior product designer. I design the unglamorous parts of software &mdash; menus,
        pricing rules, stock counts, cash drawers &mdash; and try to make them feel obvious.
      </p>

      <dl className={styles.meta}>
        <div>
          <dt>Role :</dt>
          <dd>Senior Product Designer</dd>
        </div>
        <div>
          <dt>Based :</dt>
          <dd>Malaysia &middot; Remote</dd>
        </div>
        <div>
          <dt>Focus :</dt>
          <dd>Product design &amp; management</dd>
        </div>
        <div>
          <dt>Tools :</dt>
          <dd>Figma, React, CSS</dd>
        </div>
      </dl>

      <div className={styles.prose}>
        <p>
          Most of my work lives inside FeedMe, a restaurant operating system. That means POS
          terminals used at 11pm on a Friday rush, kitchen displays read from three metres away,
          and back-office modules where one wrong toggle changes the price a customer actually
          pays. The constraint is always the same: the interface has to survive a real shift, not
          a design review.
        </p>
        <p>
          I prototype in code before I commit to a spec. It is faster to argue with a working
          screen than with a static one, and it keeps design and engineering honest about what is
          actually being shipped.
        </p>
      </div>

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
    </article>
  )
}

/* ============================================================
   Ask Cheryl — the conversation lives here now
   ============================================================ */
export function AskDoc({ firstQuestion }) {
  const [turns, setTurns] = useState(() =>
    firstQuestion ? [{ q: firstQuestion, a: findAnswer(firstQuestion), id: 'seed' }] : []
  )
  const [value, setValue] = useState('')
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'nearest' })
  }, [turns])

  function ask(raw) {
    const q = (raw || '').trim()
    if (!q) return
    setTurns((t) => [...t, { q, a: findAnswer(q), id: `${t.length}-${q.slice(0, 12)}` }])
    setValue('')
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
            <p className={styles.a} dangerouslySetInnerHTML={{ __html: t.a }} />
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className={styles.chips}>
        {SUGGESTIONS.map((s) => (
          <button key={s} type="button" onClick={() => ask(s)}>
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
        <button type="submit" disabled={!value.trim()}>
          Send
        </button>
      </form>
    </article>
  )
}
