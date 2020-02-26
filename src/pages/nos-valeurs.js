import React from "react"
import Banner from "../components/valeurs/banner"
import NosvaleurContent from "../components/valeurs/nosvaleur"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NosValeurs = () => (
  <Layout>
    <SEO title="Page NosValeurs" />
    <Banner />
    <NosvaleurContent />
  </Layout>
)

export default NosValeurs
