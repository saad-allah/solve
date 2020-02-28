import React from "react"
import Contact from "../components/contact/contact"
import Banner from "../components/contact/banner"
import Layout from "../components/layout"
import SEO from "../components/seo"




export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title={data.wordpressPage.yoast_title}  />
      <Banner />
      <Contact />
  </Layout>
  );
}
export const pageQuery = graphql`
  query {
    wordpressPage(wordpress_id: {eq: 25}) {
      yoast_title
    }
  }
`;
