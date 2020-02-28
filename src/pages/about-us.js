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
      <SEO title={data.wordpressPage.yoast_title} description={data.wordpressPage.yoast_json_ld[0].wordpress__graph[1].description}/>
      <Banner />
      <QuiSommeNous />
      <NotreHistoire />
      <ExperienceInternationale />
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 2 }) {
      yoast_title
      yoast_json_ld {
        wordpress__graph {
          description
          name
        }
      }
    }
  }
`;

