import React from "react";
import Banner from "../components/expertises/banner";
import Expertise from "../components/expertises/expertise";
import Layout from "../components/layout";
import SEO from "../components/seo";


export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title={data.wordpressPage.yoast_title}  />
    <Banner />
    <Expertise />
  </Layout>
  );
}


export const pageQuery = graphql`
  query {
    wordpressPage(wordpress_id: {eq: 21}) {
      yoast_title
    }
  }
`;
