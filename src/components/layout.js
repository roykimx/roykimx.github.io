import * as React from "react"

import Header from "./header"
import useTheme from "../hooks/useTheme"
import "./layout.css"

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className="wrap">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <hr className="hero-divider" />
      <main>{children}</main>
      <footer>&copy; {new Date().getFullYear()} Roy Kim</footer>
    </div>
  )
}

export default Layout
