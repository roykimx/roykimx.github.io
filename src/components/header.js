import * as React from "react"

import * as styles from "./header.module.css"
import {
  IconUser,
  IconMail,
  IconLinkedIn,
  IconDownload,
  IconMoon,
  IconSun,
} from "./icons"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

const Header = ({ theme, toggleTheme }) => (
  <header className={styles.hero}>
    <div className={styles.avatar} aria-hidden="true">
      <IconUser className={styles.avatarIcon} />
    </div>

    <h1 className={styles.name}>Roy Kim</h1>
    <p className={styles.subtitleLine}>Backend Software Developer</p>
    <p className={styles.subtitleLine}>Western University &rsquo;22</p>
    <p className={styles.subtitleLine}>Montreal, QC</p>

    <nav className={styles.nav} aria-label="Sections">
      {navLinks.map(link => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
      <button
        type="button"
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? (
          <IconSun className={styles.icon} />
        ) : (
          <IconMoon className={styles.icon} />
        )}
      </button>
    </nav>

    <div className={styles.socialRow}>
      <a href="mailto:roykim903@gmail.com" aria-label="Email Roy" title="Email">
        <IconMail className={styles.icon} />
      </a>
      <a
        href="https://linkedin.com/in/roykim2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Roy on LinkedIn"
        title="LinkedIn"
      >
        <IconLinkedIn className={styles.icon} />
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download resume"
        title="Resume"
      >
        <IconDownload className={styles.icon} />
      </a>
    </div>
  </header>
)

export default Header
