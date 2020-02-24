import React from "react"
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/index/banner"
import QuiSommeNous from "../components/index/quiSommeNous"
import NosExpertises from "../components/index/nosExpertises"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <Banner />
      <QuiSommeNous />
      <NosExpertises />
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
