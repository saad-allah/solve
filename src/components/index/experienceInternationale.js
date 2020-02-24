
import { StaticQuery, graphql } from "gatsby";
import React from "react";
import TitleExpIn from "./experienceInternationale/title";
import SliderExpIn from "./experienceInternationale/slider";
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
      <section className="no-expertises">
        <div className="container">
          <div className="row justify-content-center">
            <TitleExpIn />
            <SliderExpIn />
          </div>
        </div>
      </section>
    )}
  />
);
export default ExperienceInternationale;
