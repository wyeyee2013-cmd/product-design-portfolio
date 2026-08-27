import { createContext, useContext } from 'react'

/**
 * Kept apart from WindowProvider so that file only exports a component —
 * mixing hooks and components in one module breaks Fast Refresh.
 */
export const WindowContext = createContext(null)

/** `const { openProject, openAbout, openAsk, close } = useWindows()` */
export function useWindows() {
  const ctx = useContext(WindowContext)
  if (!ctx) throw new Error('useWindows must be used inside <WindowProvider>')
  return ctx
}
