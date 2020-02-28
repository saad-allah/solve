import React from "react"
import Banner from "../components/aboutus/banner"
import QuiSommeNous from "../components/aboutus/quiSommeNous"
import NotreHistoire from "../components/aboutus/notreHistoire"
import ExperienceInternationale from "../components/aboutus/experienceInternationale"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title={data.wordpressPage.yoast_title}  />
      <Banner />
      <QuiSommeNous />
      <NotreHistoire />
      <ExperienceInternationale />
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    wordpressPage(wordpress_id: {eq: 43}) {
      yoast_title
    }
  }
`;
