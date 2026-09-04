import * as React from "react"
import { Link } from "gatsby"

import * as styles from "./sidebar.module.css"
import { IconUser, IconMail, IconLinkedIn, IconDownload } from "./icons"

const navLinks = [
  { to: "/", label: "About" },
  { to: "/projects/", label: "Projects" },
  { to: "/posts/", label: "Posts" },
]

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <div className={styles.avatar} aria-hidden="true">
      <IconUser className={styles.avatarIcon} />
    </div>

    <h1 className={styles.name}>Roy Kim</h1>
    <p className={styles.subtitleLine}>Software Engineer</p>
    <p className={styles.subtitleLine}>Western University &rsquo;22</p>
    <p className={styles.subtitleLine}>Montreal, QC</p>

    <nav className={styles.nav} aria-label="Sections">
      {navLinks.map(link => (
        <Link key={link.to} to={link.to} activeClassName={styles.navActive}>
          {link.label}
        </Link>
      ))}
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
  </aside>
)

export default Sidebar
