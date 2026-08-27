import { useState } from 'react'
import { SUGGESTIONS } from '../data/knowledge.js'
import { useWindows } from './windowContext.js'
import styles from './AskBox.module.css'

/**
 * Figma node 15:1452. Submitting opens the answer in a macOS window rather
 * than expanding inline, so the hero composition never shifts. The suggested
 * questions sit absolutely below the box for the same reason.
 */
export default function AskBox() {
  const [value, setValue] = useState('')
  const { openAsk } = useWindows()

  function ask(question) {
    const q = (question ?? value).trim()
    if (!q) return
    openAsk(q)
    setValue('')
  }

  return (
    <div className={styles.zone}>
      <form
        className={styles.ask}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault()
          ask()
        }}
      >
        <label className="srOnly" htmlFor="askInput">
          Ask a question about Cheryl
        </label>
        <textarea
          id="askInput"
          className={styles.input}
          rows={1}
          maxLength={300}
          placeholder="Ask Cheryl stuff... "
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              ask()
            }
          }}
        />
        <div className={styles.side}>
          <button className={styles.send} type="submit" disabled={!value.trim()}>
            Send
          </button>
        </div>
      </form>

      <div className={styles.suggests}>
        {SUGGESTIONS.map((s) => (
          <button key={s} type="button" onClick={() => ask(s)}>
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
