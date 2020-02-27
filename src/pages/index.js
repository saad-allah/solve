import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/index/banner";
import QuiSommeNous from "../components/index/quiSommeNous";
import NosExpertises from "../components/index/nosExpertises";
import ExperienceInternationale from "../components/index/experienceInternationale";
import LogoClients from "../components/index/client";
import Contact from "../components/index/contact";
import SEO from "../components/seo";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="" />
      <Banner />
      <QuiSommeNous />
      <NosExpertises />
      <ExperienceInternationale />
      <LogoClients />
      <Contact />
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`;
