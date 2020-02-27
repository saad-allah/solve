import { StaticQuery, graphql } from "gatsby";
import React from "react";

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
        <h2 className="se_map_title">{data.wordpressAcfPages.acf.title_ei}</h2>
        <div className="se_map_excerpt">
          <p>{data.wordpressAcfPages.acf.paragraphe_ai}</p>
        </div>
      </div>
    )}
  />
);
export default TitleExpInt;
