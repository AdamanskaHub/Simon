import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    // const post = this.props.data.markdownRemark
    // const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext
    const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

    return (
      <Layout title={data.title}>
        <SEO
          title={data.title}
          description={data.description}
        />
        <article>
          <header>
            <h1
            >
              {data.title}
            </h1>
            <p
            >
              {data.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
          />
        </article>

        <nav>
          {/* <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul> */}
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const blogQuery = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "blog"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              description

            }
          }
      }
    }
  }
}`
