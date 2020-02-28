import React from "react"

import Layout from "../components/layout"
import Title from "../components/pdc/title"
import Content from "../components/pdc/content"
import SEO from "../components/seo"


export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title={data.wordpressPage.yoast_title}  />
    <Title />
    <Content />
  </Layout>
  );
}
export const pageQuery = graphql`
  query {
    wordpressPage(wordpress_id: {eq: 199}) {
      yoast_title
    }
  }
`;
