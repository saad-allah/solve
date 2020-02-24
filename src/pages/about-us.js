import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUus = () => (
  <Layout>
    <SEO title="about us" />
    <h1>Hi from the about us page</h1>
    <p>Welcome to page about us</p>
    <Link to="/">Go back to the home page</Link>
  </Layout>
)

export default AboutUus
