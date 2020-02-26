import React from "react"
import Contact from "../components/contact/contact"
import Banner from "../components/contact/banner"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ConatcPage = () => (
  <Layout>
    <SEO title="Page Contact" />
      <Banner />
      <Contact />
  </Layout>
)

export default ConatcPage
