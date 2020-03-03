import React from "react";
import { graphql } from "gatsby";
import Banner from "../components/expertises/banner";
import Expertise from "../components/expertises/expertise";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.wordpressPage.yoast_title}
        description={
          data.wordpressPage.yoast_json_ld[0].wordpress__graph[1].description
        }
      />
      <Banner />
      <Expertise />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 21 }) {
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
