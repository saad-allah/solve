import { StaticQuery, graphql } from "gatsby";
import React from "react";

const TitleContact = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 25 }) {
          acf {
            title_contactPage
            sub_titlet_contactPage
          }
        }
      }
    `}
    render={data => (
      <div className="se-shy_header">
        <h2 className="se_shy_title">
          {data.wordpressAcfPages.acf.title_contactPage}
        </h2>
        <div className="se_shy_excerpt">
          <p>{data.wordpressAcfPages.acf.sub_titlet_contactPage}</p>
        </div>
      </div>
    )}
  />
);
export default TitleContact;
