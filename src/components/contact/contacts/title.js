import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
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
         <Fade bottom>
        <h2 className="se_shy_title">
          {data.wordpressAcfPages.acf.title_contactPage}
        </h2>
        </Fade>
        <Fade bottom>
        <div className="se_shy_excerpt">
          <p>{data.wordpressAcfPages.acf.sub_titlet_contactPage}</p>
        </div>
        </Fade>
      </div>
    )}
  />
);
export default TitleContact;
