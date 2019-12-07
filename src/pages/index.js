import React from "react"
import { Link, graphql } from "gatsby"
import "../sass/main.scss"

// import Layout from "../components/layout"
import img from "../images/gatsby-astronaut.png"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return(
<div className="container">
    <SEO title="Home" />

    <div className="menu">
      <h3>
      <Link to="/">Home</Link>
      </h3>
      <h3>
      <Link to="/blog/">Blog</Link>
      </h3>
    </div>
    
    <section className="intro">
      <div className="blob"></div>
      <h1>
      {data.megatitle}
      </h1>
      <h1>
      {data.megatitlex}
      </h1>
      <p>{data.subtitle}</p>
    </section>
    {/* <Link to="/page-2/">Go to page 2</Link> */}

    <section className="section sectiontwo">
      <div className="portrait">
        <img src={data.image} alt="Simon" />
      </div>
      <div>
      <h2><span className="fancy">{data.titleone}</span></h2>
      <p>{data.paraone}</p>
      <h2><span className="fancy">{data.titletwo}</span></h2>
      <p>{data.paratwo}</p>
      </div>
    </section>

    <section className="section section__three">
      <h2>{data.titlethree}</h2>
      <p>{data.parathree}</p>

    </section>s
  </div>
  )
  
}



export default IndexPage

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              megatitle
              megatitlex
              paraone
              parathree
              paratwo
              subtitle
              title
              titleone
              titlethree
              titletwo
              image
            }
          }
      }
    }
  }
}`