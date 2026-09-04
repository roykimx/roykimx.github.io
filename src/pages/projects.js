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

const ProjectsPage = () => (
  <Layout>
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
  </Layout>
)

export const Head = () => <Seo title="Projects" />

export default ProjectsPage
