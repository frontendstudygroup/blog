import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Tags = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title },
        },
    },
    location
  }) => {
  
  return (
    <Layout location={location} title={title}>
      <Seo title="All tags" />
      <h1>All Tags</h1>
      <ul>
        {group.map(tag => (
            <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>
                {tag.fieldValue} ({tag.totalCount})
            </Link>
            </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
            fieldValue
            totalCount
        }
    }
  }
`
