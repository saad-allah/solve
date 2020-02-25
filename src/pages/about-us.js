import React from "react"
import Banner from "../components/aboutus/banner"
import QuiSommeNous from "../components/aboutus/quiSommeNous"
import NotreHistoire from "../components/aboutus/notreHistoire"
import ExperienceInternationale from "../components/aboutus/experienceInternationale"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUus = () => (
  <Layout>
    <SEO title="about us" />
    <Banner />
    <QuiSommeNous />
    <NotreHistoire />
    <ExperienceInternationale />
  </Layout>
)

export default AboutUus
