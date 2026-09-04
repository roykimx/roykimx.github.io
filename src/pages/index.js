import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/sections.module.css"

const IndexPage = () => (
  <Layout>
    <section id="about" className={styles.section}>
      <h2>About Me</h2>
      <hr />
      <p>
        I&rsquo;m a backend software engineer based in Montreal. I currently
        work on Compute and Storage Engineering at Morgan Stanley, where I build
        tooling and distributed systems that support trading infrastructure
        across 1,400+ servers &mdash; from real-time dashboards to
        authentication and artifact-distribution pipelines.
      </p>
      <p>
        Before that, I spent three years at the Canada Revenue Agency in Ottawa,
        working on security access management infrastructure. I studied Computer
        Science at Western University.
      </p>
    </section>

    <section id="skills" className={styles.section}>
      <h2>Skills</h2>
      <hr />
      <p className={styles.skillsRow}>
        <strong>Languages:</strong> Python, Java, Go, SQL, JavaScript, C, Bash,
        Perl, HTML/CSS
      </p>
      <p className={styles.skillsRow}>
        <strong>Technologies:</strong> Flask, FastAPI, React, NumPy, Pandas,
        PostgreSQL, MySQL, Kafka, Git, Linux, Jenkins, Docker
      </p>
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Roy Kim" />

export default IndexPage
