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

                <div className="se-shy_header aos-init aos-animate" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                  <h2 className="se_shy_title">
                  { data.wordpressAcfPages.acf.title_contactPage}
                  </h2>
                  <div className="se_shy_excerpt aos-init aos-animate" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <p>
                    { data.wordpressAcfPages.acf.sub_titlet_contactPage}
                  </p></div>
                </div>

    )}
  />
);
export default TitleContact;
