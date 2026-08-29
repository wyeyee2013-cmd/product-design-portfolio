import { findAnswer } from '../data/knowledge.js'

/**
 * Escapes an answer, then re-permits only <b>, <i>, <em> and <strong>.
 *
 * Answers reach the page through dangerouslySetInnerHTML, and one of the two
 * sources is a language model responding to whatever a visitor typed. Even
 * with the system prompt's guardrails, model output is not trusted markup —
 * escaping first and allowing four tags back means no attribute, no <script>
 * and no event handler can survive, whatever the model was talked into.
 */
export function safeRich(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&lt;(\/?)(b|i|em|strong)&gt;/g, '<$1$2>')
}

/**
 * Asks the serverless endpoint, falling back to the local knowledge base.
 *
 * The fallback is not just for outages: `vite dev` serves no functions, and a
 * purely static deploy has no /api at all. In both cases this quietly returns
 * the hand-written answer instead of failing.
 */
export async function askCheryl(question, history = []) {
  try {
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, history }),
    })
    if (!res.ok) throw new Error(`status ${res.status}`)
    const data = await res.json()
    if (typeof data.answer === 'string' && data.answer.trim()) {
      return { answer: data.answer, source: data.source || 'claude' }
    }
    throw new Error('empty answer')
  } catch {
    return { answer: findAnswer(question), source: 'kb' }
  }
}
