import React from "react"
import Banner from "../components/valeurs/banner"
import NosvaleurContent from "../components/valeurs/nosvaleur"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title={data.wordpressPage.yoast_title}  />
    <Banner />
    <NosvaleurContent />
  </Layout>
  );
}
export const pageQuery = graphql`
  query {
    wordpressPage(wordpress_id: {eq: 18}) {
      yoast_title
    }
  }
`;
