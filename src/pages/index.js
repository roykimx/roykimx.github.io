import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/sections.module.css"

const projects = [
  {
    name: "Mechmarket Inventory",
    stack: "Python · MySQL · FastAPI · Requests",
    description:
      "A bot using the Reddit API to parse over 700,000 posts from r/mechmarket, feeding a dashboard that tracks fluctuating prices of artisan keyboard products.",
  },
  {
    name: "Classroom Attendance",
    stack: "C++ · Linux · libbluetooth · MySQL",
    description:
      "A C++ tool that uses a Raspberry Pi's Bluetooth stack (BlueZ / libbluetooth-dev) to scan student devices and compile attendance into a MySQL database for individual reports.",
  },
]

const IndexPage = () => (
  <Layout>
    <section id="about" className={styles.section}>
      <h2>About</h2>
      <hr />
      <p>
        I&rsquo;m a backend software developer based in Montreal. I currently
        work on Compute and Storage Engineering at Morgan Stanley, where I
        build tooling and distributed systems that support trading
        infrastructure across 1,400+ servers &mdash; from real-time
        dashboards to authentication and artifact-distribution pipelines.
      </p>
      <p>
        Before that, I spent three years at the Canada Revenue Agency in
        Ottawa, working on security access management infrastructure. I
        studied Computer Science at Western University.
      </p>
    </section>

    <section id="projects" className={styles.section}>
      <h2>Projects</h2>
      <hr />
      {projects.map(project => (
        <div className={styles.project} key={project.name}>
          <span className={styles.projectName}>{project.name}</span>{" "}
          <span className={styles.projectStack}>{project.stack}</span>
          <p>{project.description}</p>
        </div>
      ))}
    </section>

    <section id="skills" className={styles.section}>
      <h2>Skills</h2>
      <hr />
      <p className={styles.skillsRow}>
        <strong>Languages:</strong> Python, Java, Go, SQL, JavaScript, C,
        Bash, Perl, HTML/CSS
      </p>
      <p className={styles.skillsRow}>
        <strong>Technologies:</strong> Flask, FastAPI, React, NumPy, Pandas,
        PostgreSQL, MySQL, Kafka, Git, Linux, Jenkins, Docker
      </p>
    </section>

    <section id="contact" className={styles.section}>
      <h2>Contact</h2>
      <hr />
      <p>
        Feel free to reach out by{" "}
        <a href="mailto:roykim903@gmail.com">email</a> or connect on{" "}
        <a
          href="https://linkedin.com/in/roykim2"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
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
