import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NosValeurs = () => (
  <Layout>
    <SEO title="Page NosValeurs" />
    <h1>Hi from the Nos Valeurs page</h1>
    <p>Welcome to page Nos Valeurs</p>
    <Link to="/">Go back to the home page</Link>
  </Layout>
)

export default NosValeurs
