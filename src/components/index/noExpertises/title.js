import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const TitleExp = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
          acf {
            title_expertises
            paragraphe_expertises
          }
        }
      }
    `}
    render={data => (
      <div className="col-sm-12 p0 col-lg-10">
        <div className="se-exp_header">
          <Fade bottom>
            <h2 className="se_exp_title">
              {data.wordpressAcfPages.acf.title_expertises}
            </h2>
          </Fade>
          <Fade bottom>
            <div className="se_exp_excerpt">
              <p>{data.wordpressAcfPages.acf.paragraphe_expertises}</p>
            </div>
          </Fade>
        </div>
      </div>
    )}
  />
);

export default TitleExp;
