import styles from './Footer.module.css'

function LogoMark() {
  return (
    <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
      <defs>
        <linearGradient id="flg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c4a0ff"/>
          <stop offset="100%" stopColor="#6b28cc"/>
        </linearGradient>
        <linearGradient id="fld" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5cc8ff"/>
          <stop offset="100%" stopColor="#a36bff"/>
        </linearGradient>
      </defs>
      <rect width="38" height="38" rx="10" fill="#1a0e30"/>
      <path d="M22 11 A10 10 0 1 0 22 27" stroke="url(#flg)" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
      <line x1="23" y1="11" x2="23" y2="27" stroke="url(#flg)" strokeWidth="2.8" strokeLinecap="round"/>
      <line x1="23" y1="27" x2="30" y2="27" stroke="url(#flg)" strokeWidth="2.8" strokeLinecap="round"/>
      <circle cx="30" cy="11" r="2.2" fill="url(#fld)"/>
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.logoMark}><LogoMark /></div>
          <div>
            <p className={styles.name}>Cheryl Lim</p>
            <p className={styles.role}>Product Designer</p>
          </div>
        </div>
        <div className={styles.links}>
          <a href="mailto:cheryl.wylim@outlook.com">Email</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://read.cv" target="_blank" rel="noreferrer">Read.cv</a>
        </div>
        <p className={styles.copy}>© {year} Cheryl Lim. All rights reserved.</p>
      </div>
    </footer>
  )
}
