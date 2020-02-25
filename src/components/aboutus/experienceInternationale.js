
import { StaticQuery, graphql } from "gatsby";
import React from "react";
import TitleExpIn from "./experienceInternationale/title";
import MapExp from "./experienceInternationale/map";
const ExperienceInternationale = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 43 }) {
          acf {
            paragraphe_qsn
            title_qsn
          }
        }
      }
    `}
    render={data => (
      <section className="no-expertises">
        <div className="container">
          <div className="row justify-content-center">
          
            <div className=" col-sm-12 p0 col-lg-10">
              <TitleExpIn />
            </div>
            <MapExp />
          </div>
        </div>
      </section>
    )}
  />
);
export default ExperienceInternationale;
