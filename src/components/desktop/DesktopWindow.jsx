import { useRef } from 'react'
import { WindowContext } from './windowContext'
import styles from './DesktopWindow.module.css'

export default function DesktopWindow({ win, active, onFocus, onClose, onCollapse, onMaximize, onMove, children }) {
  const dragState = useRef(null)

  const onPointerDown = (e) => {
    if (e.target.closest(`.${styles.lights}`)) return
    onFocus(win.id)
    if (win.maximized) return
    dragState.current = { startX: e.clientX, startY: e.clientY, ox: win.x, oy: win.y }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e) => {
    const d = dragState.current
    if (!d) return
    onMove(win.id, d.ox + (e.clientX - d.startX), d.oy + (e.clientY - d.startY))
  }
  const onPointerUp = (e) => {
    dragState.current = null
    try { e.currentTarget.releasePointerCapture(e.pointerId) } catch { /* noop */ }
  }

  const style = win.maximized
    ? { inset: '46px 12px 96px 12px', width: 'auto', height: 'auto', zIndex: win.z }
    : { left: win.x, top: win.y, width: win.w, height: win.collapsed ? 'auto' : win.h, zIndex: win.z }

  return (
    <div
      className={`${styles.window} ${active ? styles.active : ''}`}
      style={style}
      onPointerDown={() => onFocus(win.id)}
    >
      <div
        className={styles.titlebar}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onDoubleClick={() => onMaximize(win.id)}
        style={{ '--accent': win.accent }}
      >
        <div className={styles.lights}>
          <button className={`${styles.light} ${styles.close}`} onClick={() => onClose(win.id)} aria-label="Close" />
          <button className={`${styles.light} ${styles.min}`} onClick={() => onCollapse(win.id)} aria-label="Minimize" />
          <button className={`${styles.light} ${styles.max}`} onClick={() => onMaximize(win.id)} aria-label="Maximize" />
        </div>
        <span className={styles.title}>{win.title}</span>
        <span className={styles.titleSpacer} />
      </div>

      {!win.collapsed && (
        <div className={styles.body}>
          <WindowContext.Provider value={true}>
            {children}
          </WindowContext.Provider>
        </div>
      )}
    </div>
  )
}
