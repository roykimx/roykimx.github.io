import { useEffect, useState } from "react"

const STORAGE_KEY = "theme"

/**
 * Tiny light/dark theme hook.
 *
 * - Prefers a theme the visitor already picked (saved in localStorage),
 *   falling back to their OS preference (prefers-color-scheme) the first
 *   time they visit.
 * - Applies the choice as a `data-theme` attribute on <html>, which
 *   src/components/layout.css reads to swap CSS variables.
 * - Only runs in the browser: Gatsby renders pages to static HTML first
 *   (there's no `window` at build time), so we start with `null` and let
 *   an effect pick the real value once the page is running in a browser.
 * - Layout (and this hook) remount on every page navigation, so reading
 *   localStorage here is what keeps the toggle from resetting to the OS
 *   preference when the visitor moves between pages.
 */
const useTheme = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    let saved = null
    try {
      saved = window.localStorage.getItem(STORAGE_KEY)
    } catch (e) {
      // localStorage can throw in private-browsing/blocked-storage modes.
    }

    if (saved === "dark" || saved === "light") {
      setTheme(saved)
      return
    }

    const prefersDark =
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
    setTheme(current => {
      const next = current === "dark" ? "light" : "dark"
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch (e) {
        // Ignore write failures; the toggle still works for this session.
      }
      return next
    })
  }

  return [theme, toggleTheme]
}

export default useTheme
