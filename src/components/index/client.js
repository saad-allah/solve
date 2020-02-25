
import { StaticQuery, graphql } from "gatsby";
import React from "react";
import TitleClients from "./clients/title";
import LogoClients from "./clients/logos";
const ExperienceInternationale = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
          acf {
            paragraphe_qsn
            title_qsn
            sub_title_qsn
          }
        }
      }
    `}
    render={data => (
      <section className="no-clients">
        <div className="container">
          <div className="row justify-content-center">
            <TitleClients />
            <LogoClients />
          </div>
        </div>
      </section>
    )}
  />
);
export default ExperienceInternationale;
