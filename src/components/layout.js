import * as React from "react"

import Sidebar from "./sidebar"
import useTheme from "../hooks/useTheme"
import { IconMoon, IconSun } from "./icons"
import "./layout.css"

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className="wrap">
      <Sidebar />
      <main>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? <IconSun /> : <IconMoon />}
        </button>
        {children}
      </main>
      <footer>&copy; {new Date().getFullYear()} Roy Kim</footer>
    </div>
  )
}

export default Layout
