import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const TitleExpInt = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 43 }) {
          acf {
            title_ei
            paragraphe_ai
          }
        }
      }
    `}
    render={data => (
      <div className="se-exp_header ">
        <Fade bottom>
          <h2 className="se_map_title">
            {data.wordpressAcfPages.acf.title_ei}
          </h2>
        </Fade>
        <div className="se_map_excerpt">
          <Fade bottom>
            <p>{data.wordpressAcfPages.acf.paragraphe_ai}</p>
          </Fade>
        </div>
      </div>
    )}
  />
);
export default TitleExpInt;
