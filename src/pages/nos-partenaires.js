import React from "react";
import Layout from "../components/layout";
import Banner from "../components/partenaires/banner";
import Clients from "../components/partenaires/client";
import Certification from "../components/partenaires/certification";
import SEO from "../components/seo";

const NosPartenaires = () => (
  <Layout>
    <SEO title="Page Nos Contacter" />
    <Banner />
    <Clients />
    <Certification />
  </Layout>
);

export default NosPartenaires;
