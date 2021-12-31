import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogItems from "../components/blogItems"

const TagTemplate = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { tag } = pageContext;
  const { nodes, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={tag}
      />
      <h1>{tagHeader}</h1>
      <Link to="/tags">All categories</Link>
      {totalCount > 0 && (
        <BlogItems posts={nodes} />
      )}
    </Layout>
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tags: { in: [$tag] } } }
      ) {
        totalCount
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
    }
  }
`;
