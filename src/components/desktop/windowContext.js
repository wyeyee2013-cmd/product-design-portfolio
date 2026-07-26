import { createContext, useContext } from 'react'

// True when page content is being rendered inside a desktop window
// (so AppFrame / page chrome should render bare).
export const WindowContext = createContext(false)
export const useInWindow = () => useContext(WindowContext)
