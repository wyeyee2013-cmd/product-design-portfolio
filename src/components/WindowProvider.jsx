import { useCallback, useMemo, useState } from 'react'
import MacWindow from './MacWindow.jsx'
import { AboutDoc, AskDoc, ProjectDoc } from './WindowDocs.jsx'
import { WindowContext } from './windowContext.js'

export default function WindowProvider({ children }) {
  const [doc, setDoc] = useState(null)

  const close = useCallback(() => setDoc(null), [])

  const api = useMemo(
    () => ({
      openProject: (project) => setDoc({ kind: 'project', project }),
      openAbout: () => setDoc({ kind: 'about' }),
      openAsk: (question) => setDoc({ kind: 'ask', question }),
      close,
    }),
    [close]
  )

  let url = ''
  let content = null
  if (doc?.kind === 'project') {
    url = `Portfolio / ${doc.project.title}`
    content = <ProjectDoc project={doc.project} />
  } else if (doc?.kind === 'about') {
    url = 'Portfolio / About'
    content = <AboutDoc />
  } else if (doc?.kind === 'ask') {
    url = 'Portfolio / Ask Cheryl'
    content = <AskDoc firstQuestion={doc.question} />
  }

  return (
    <WindowContext.Provider value={api}>
      {children}
      <MacWindow
        open={Boolean(doc)}
        onClose={close}
        url={url}
        /* remount per document so scroll and thread state reset */
        key={doc ? `${doc.kind}-${doc.project?.id ?? doc.question ?? ''}` : 'none'}
      >
        {content}
      </MacWindow>
    </WindowContext.Provider>
  )
}
