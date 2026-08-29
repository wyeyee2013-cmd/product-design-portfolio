# Cheryl Lim® — Portfolio

React + Vite. No CSS framework — plain CSS Modules, one per component.

```bash
npm install
npm run dev      # http://localhost:5183
npm run build    # -> dist/
```

## Structure

```
src/
  App.jsx                     page shell + snap scroll container
  styles.css                  global tokens, reset, section snapping
  hooks/useLayout.js          useMediaQuery / useFitScale / useFitContent
                              useInView / useCountUp
  components/
    Dock.jsx                  macOS-style bottom dock (Figma 15:1504)
    Hero.jsx                  hero (Figma 15:1410)
    AskBox.jsx                "Ask Cheryl stuff..." input
    ProjectDeck.jsx           glass card stack, fans up on hover (desktop only)
    ProjectsSection.jsx       projects board (Figma 15:1515)
    ProjectCard.jsx           one tilted browser card
    About.jsx                 achievements board (Figma 15:1792), counting stats
    Reviews.jsx               testimonials board (Figma 15:1947)
    Footer.jsx                closing panel (Figma 15:2100)
    WindowProvider.jsx        owns which document is open
    MacWindow.jsx             the macOS window chrome
    WindowDocs.jsx            case study / about / ask documents
  data/
    projects.js               one record per project — cards and case study
    stats.js                  achievement cards
    reviews.js                testimonials
    knowledge.js              Q&A knowledge base + matcher
public/assets/                images exported from Figma
```

## The macOS window

A single window component backs three documents. Anything can open one:

```jsx
const { openProject, openAbout, openAsk } = useWindows()
```

It opens from four places — a card in the hero deck, a card on the projects
board, the dock's About icon, and submitting the ask box (the answer opens as a
document rather than expanding inline, so the hero never shifts). Escape,
clicking the backdrop, or the red traffic light closes it. Below 900px it goes
full-screen instead of floating.

## Editing

- **Projects** — `src/data/projects.js`. One record per project drives the hero
  deck, the board card, and the case-study window. `row` / `rotate` / `fit`
  control board placement; `client`, `year`, `type`, `tool`, `summary` and
  `gallery` fill the case study.
- **Achievements** — `src/data/stats.js`. `x` / `y` place each card inside the
  1335x301 stats artboard; `rotate` is its tilt. `value` is a plain number that
  counts up from 0 each time the section scrolls into view, with `suffix`
  appended once it lands.
- **Testimonials** — `src/data/reviews.js`, positioned the same way inside a
  1112x670 artboard.
- **Q&A answers** — `src/data/knowledge.js`. Add `{ k: [keywords], a: 'answer' }`.
  Multi-word keys match as an exact phrase; single-word keys match on stem.
- **Dock items** — the `ITEMS` array at the top of `src/components/Dock.jsx`.
  `MAX_SCALE` and `FALLOFF` just above it control how much the icons magnify.

## Notes

**Sections.** Each section is exactly one viewport tall and snaps into place as
you scroll — see `.snap` in `styles.css`. Content animates in via `useInView`
whenever a section enters view and resets when it leaves, so the entrance
replays on the way back.

**Scaling.** The hero is authored at 1580px wide and zooms to keep filling the
viewport (`useFitScale`). The projects, achievements and reviews boards are
authored at their Figma sizes and shrink to fit one viewport (`useFitContent`) —
that hook measures the real content box rather than a hardcoded size, so the fit
stays correct if you add a card or change the copy.

**Below 900px** the layout switches over: sections size to their content and
scroll normally with no snapping, the boards stack into one column, card tilts
and hover effects are dropped, the hero's hover-to-fan project deck is not
rendered at all, and windows open full-screen.

## Ask Cheryl

The hero input answers questions about Cheryl. It has two brains and always
uses whichever is available:

1. **Claude** — `api/ask.js`, a serverless function. It builds a briefing
   document from the site's own content (`src/data/profileContext.js` pulls
   from `about.js`, `caseStudies.js`, `projects.js`, `reviews.js`, `stats.js`)
   and sends it to the Messages API as a cached system prompt. Edit the site
   content and the answers follow — nothing is duplicated by hand.
2. **The knowledge base** — `src/data/knowledge.js`, 41 hand-written answers
   matched by keyword. Used whenever Claude is unavailable: no key set, rate
   limited, API down, or a purely static deploy with no `/api` route at all.

So the box never dead-ends. Without a key it behaves exactly as it did before.

### Turning Claude on

The API key is read from the environment on the server. It is never bundled
into the client and must never be committed — `.env` is gitignored.

1. Deploy to a host that runs serverless functions. Vercel needs no config:
   it detects Vite, serves `dist/`, and turns `api/ask.js` into a function.
   Netlify and Cloudflare Pages work too — both expect the handler in a
   different folder (`netlify/functions/`, `functions/`), so move or re-export
   the file there.
2. In the host's dashboard, add an environment variable:
   `ANTHROPIC_API_KEY` = a key from console.anthropic.com. Set it in the
   dashboard, not in a file.
3. Redeploy.

Optional: `ASK_MODEL` overrides the model. Defaults to `claude-opus-5`; set
`claude-sonnet-5` or `claude-haiku-4-5` to trade some quality for lower cost.

### Local testing

`vite dev` normally serves no functions, which would make the ask box quietly
fall back and look like it works. `vite.config.js` runs the handler as dev
middleware instead, so `/api/ask` behaves the same locally. Copy `.env.example`
to `.env` and fill in the key to exercise the real path.

### Cost and abuse

Roughly a cent or two per question on `claude-opus-5`, most of it the ~5,900
token brief — which is why the system prompt is marked `cache_control:
ephemeral` and kept byte-stable, so repeat questions read it from cache at a
tenth of the price. Guards: questions capped at 400 characters, history at 6
turns, `max_tokens` at 2000, and a per-IP throttle of 10 questions a minute.
The throttle is per instance rather than global, so set a spend limit in the
Anthropic console as the real ceiling.

### Safety notes

- Answers render through `safeRich()` in `src/lib/ask.js`, which escapes
  everything and then re-permits only `<b>`, `<i>`, `<em>` and `<strong>`.
  Model output is not trusted markup.
- The system prompt tells the model to treat the visitor's message as data,
  answer only from the brief, refuse to invent facts, and never to guess at
  anything the brief does not cover (her education, for one).
