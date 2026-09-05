/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react")

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: `en` })

  // Set data-theme before React hydrates so there's no flash of the wrong
  // theme, whether that's a theme the visitor already picked (saved in
  // localStorage) or their OS preference for a first-time visitor.
  // src/hooks/useTheme.js does the same check on mount for the interactive
  // toggle, and on every page navigation since Layout remounts per page.
  setPreBodyComponents([
    React.createElement("script", {
      key: "theme-init",
      dangerouslySetInnerHTML: {
        __html: `(function(){try{var s=window.localStorage.getItem("theme");var d=s==="dark"||s==="light"?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme", d ? "dark" : "light");}catch(e){}})();`,
      },
    }),
  ])
}
