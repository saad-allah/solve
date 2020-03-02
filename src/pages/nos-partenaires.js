import React from "react";
import {  graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/partenaires/banner";
import Clients from "../components/partenaires/client";
import Certification from "../components/partenaires/certification";
import SEO from "../components/seo";



export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
       <SEO title={data.wordpressPage.yoast_title} description={data.wordpressPage.yoast_json_ld[0].wordpress__graph[1].description}/>
    <Banner />
    <Clients />
    <Certification />
  </Layout>
  );
}
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