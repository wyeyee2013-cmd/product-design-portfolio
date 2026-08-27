import { useEffect, useState } from 'react'
import { useMediaQuery } from '../hooks/useLayout.js'
import styles from './RotatingWord.module.css'

const HOLD = 2200 /* ms a finished word rests before it is erased */
const ERASE = 52 /* ms per character removed */
const TYPE = 88 /* ms per character typed */
const TURN = 300 /* beat between the last backspace and the first keystroke */

/**
 * The closing word of the hero headline, retyped on a loop: it backspaces to
 * nothing, then types the next word in `words`.
 *
 * words[0] is the word the design ships with, so it is what screen readers get
 * and what a reduced-motion visitor sees — the headline still reads exactly as
 * Figma authored it. Every word has to fit beside "Intuitive" on the last line
 * (roughly 390px at the 1580px artboard width) or the headline gains a fourth
 * line and runs into the ask box.
 */
export default function RotatingWord({ words, startDelay = 1600 }) {
  const still = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [index, setIndex] = useState(0)
  const [len, setLen] = useState(words[0].length)
  const [phase, setPhase] = useState('start')

  useEffect(() => {
    if (still) return

    let wait = HOLD
    let step = () => setPhase('erase')

    if (phase === 'erase') {
      if (len > 0) {
        wait = ERASE
        step = () => setLen(len - 1)
      } else {
        wait = TURN
        step = () => {
          setIndex((i) => (i + 1) % words.length)
          setPhase('type')
        }
      }
    } else if (phase === 'type') {
      if (len < words[index].length) {
        wait = TYPE
        step = () => setLen(len + 1)
      } else {
        step = () => setPhase('hold')
      }
    } else if (phase === 'start') {
      wait = startDelay
    }

    const timer = setTimeout(step, wait)
    return () => clearTimeout(timer)
  }, [phase, len, index, words, startDelay, still])

  if (still) return words[0]

  /* the caret holds steady while keys are landing and blinks once the word settles */
  const settled = phase === 'start' || phase === 'hold'

  return (
    <>
      <span className="srOnly">{words[0]}</span>
      <span aria-hidden="true">
        {words[index].slice(0, len)}
        <i className={`${styles.caret} ${settled ? styles.blink : ''}`} />
      </span>
    </>
  )
}
