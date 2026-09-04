import { useEffect, useState } from "react"

/**
 * Tiny light/dark theme hook.
 *
 * - Defaults to the visitor's OS preference (prefers-color-scheme).
 * - Applies the choice as a `data-theme` attribute on <html>, which
 *   src/components/layout.css reads to swap CSS variables.
 * - Only runs in the browser: Gatsby renders pages to static HTML first
 *   (there's no `window` at build time), so we start with `null` and let
 *   an effect pick the real value once the page is running in a browser.
 */
const useTheme = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches

    setTheme(prefersDark ? "dark" : "light")
  }, [])

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(current => (current === "dark" ? "light" : "dark"))
  }

  return [theme, toggleTheme]
}

export default useTheme
