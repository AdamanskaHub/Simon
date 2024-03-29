import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



class BlogPage extends React.Component {
  render(props) {
    const { data } = this.props
    const x = data.allFile.edges.node.childMarkdownRemark.frontmatter
    console.log(x)
    // const data = this.props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
    // const posts = data.allMarkdownRemark.edges
    // const data = props
    // const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges

    return(
      <>
        <SEO title="Blog" />
        <h1>Hi from the blog page</h1>
        <Link to="/">Go back to the homepage</Link>
        {/* {posts.map(({ node }) => {
          return(
<>
          <p>{node.frontmatter.date}</p>
          <p>{node.frontmatter.body}</p>
          <p>{node.frontmatter.description}</p>
          <p>{node.frontmatter.title}</p>
          </>
          )
          
        }
        )} */}

      </>
    )
  
  }
}

export default BlogPage

export const blogQuery = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "blog"}}) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              title
              description
              date
            }
          }
        }
      }
    }
  }`