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
  // theme for visitors whose OS is set to dark mode. src/hooks/useTheme.js
  // does the same check on mount for the interactive toggle.
  setPreBodyComponents([
    React.createElement("script", {
      key: "theme-init",
      dangerouslySetInnerHTML: {
        __html: `(function(){try{var d=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme", d ? "dark" : "light");}catch(e){}})();`,
      },
    }),
  ])
}
