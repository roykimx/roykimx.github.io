import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/sections.module.css"

const posts = []

const PostsPage = () => (
  <Layout>
    <section id="posts" className={styles.section}>
      <h2>Posts</h2>
      <hr />
      {posts.length === 0 ? (
        <p className={styles.empty}>
          Nothing published yet &mdash; check back soon.
        </p>
      ) : (
        posts.map(post => (
          <div className={styles.project} key={post.title}>
            <span className={styles.projectName}>{post.title}</span>
            <p>{post.description}</p>
          </div>
        ))
      )}
    </section>
  </Layout>
)

export const Head = () => <Seo title="Posts" />

export default PostsPage
