import React from "react"
import { Link } from "gatsby"
import "../sass/main.scss"

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (

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
      <h1>At the tip of a thought</h1>
      <p>Some text</p>
    </section>
    
    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}

    <section className="goal">
      <h2>My goal</h2>
      <p>my goals p</p>
    </section>
  </div>
)

export default IndexPage
