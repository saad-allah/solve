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
      <div class="se-exp_header aos-init aos-animate">
        <h2 class="se_map_title">
        { data.wordpressAcfPages.acf.title_ei}
        </h2>
        <div class="se_map_excerpt">
        { data.wordpressAcfPages.acf.paragraphe_ai}
        </div>
      </div>
    )}
  />
);
export default TitleExpInt;
