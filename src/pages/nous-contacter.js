import React from "react";
import { graphql } from "gatsby";
import Contact from "../components/contact/contact";
import Banner from "../components/contact/banner";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO
        title={data.wordpressPage.yoast_title}
        description={
          data.wordpressPage.yoast_json_ld[0].wordpress__graph[1].description
        }
      />
      <Banner />
      <Contact />
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 25 }) {
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
