import { StaticQuery, graphql } from "gatsby";
import React from "react";
import TitleExp from "./noExpertises/title";
import SliderExp from "./noExpertises/slider";
const NosExpertises = () => (
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
      <section className="no-expertises">
        <div className="container">
          <div className="row justify-content-center">
            <TitleExp />
            <SliderExp />
          
          </div>
        </div>
      </section>
    )}
  />
);
export default NosExpertises;
