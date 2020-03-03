import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const TitleExpInt = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
          acf {
            title_ei
            paragraphe_ai
          }
        }
      }
    `}
    render={data => (
      <div className="se-exp_header">
        <Fade bottom>
          <h2 className="se_map_title">
            {data.wordpressAcfPages.acf.title_ei}
          </h2>
        </Fade>
        <Fade bottom>
          <div className="se_map_excerpt">
            <p>{data.wordpressAcfPages.acf.paragraphe_ai}</p>
          </div>
        </Fade>
      </div>
    )}
  />
);
export default TitleExpInt;
