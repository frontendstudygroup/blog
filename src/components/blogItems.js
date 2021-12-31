import * as React from "react"
import { Link } from "gatsby"

import Label from "../components/label"

const BlogItems = ({ posts }) => {
  return (
    <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          
          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                  {
                    post.frontmatter.tags?.map(tag => <Label text={tag} />)
                  }
                </section>
              </article>
            </li>
          )
        })}
      </ol>
  )
}

export default BlogItems
