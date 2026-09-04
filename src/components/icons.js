/**
 * Small inline SVG icons used around the site.
 *
 * Kept as plain functional components (no external icon library) so the
 * whole site stays a single dependency-light Gatsby project.
 */

import * as React from "react"

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

export const IconUser = props => (
  <svg {...base} {...props}>
    <path d="M20 21v-1.6a4.4 4.4 0 0 0-4.4-4.4H8.4A4.4 4.4 0 0 0 4 19.4V21" />
    <circle cx="12" cy="7.2" r="4" />
  </svg>
)

export const IconMail = props => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </svg>
)

export const IconLinkedIn = props => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10.5v6M8 7.8v.01M12 16.5v-3.6c0-1.2.9-2.1 2-2.1s2 .9 2 2.1v3.6" />
  </svg>
)

export const IconDownload = props => (
  <svg {...base} {...props}>
    <path d="M12 3v12m0 0-4-4m4 4 4-4" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
)

export const IconMoon = props => (
  <svg {...base} {...props}>
    <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z" />
  </svg>
)

export const IconSun = props => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
  </svg>
)
