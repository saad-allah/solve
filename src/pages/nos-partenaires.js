import React from "react";
import Layout from "../components/layout";
import Banner from "../components/partenaires/banner";
import Clients from "../components/partenaires/client";
import Certification from "../components/partenaires/certification";
import SEO from "../components/seo";



export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title={data.wordpressPage.yoast_title}  />
    <Banner />
    <Clients />
    <Certification />
  </Layout>
  );
}
export const pageQuery = graphql`
  query {
    wordpressPage(wordpress_id: {eq: 23}) {
      yoast_title
    }
  }
`;
