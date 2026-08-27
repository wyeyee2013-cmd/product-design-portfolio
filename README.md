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
