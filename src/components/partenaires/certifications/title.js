import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const TitleCertifications = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 23 }) {
          acf {
            title_certifications
            sub_title_certifications
          }
        }
      }
    `}
    render={data => (
      <div className="co-sm-12 p0 col-lg-10">
        <div className="se-cert_header">
          <Fade bottom>
            <h2 className="se_cert_title">
              {data.wordpressAcfPages.acf.title_certifications}
            </h2>
          </Fade>
          <Fade bottom>
            <div className="se_cert_excerpt">
              <p>{data.wordpressAcfPages.acf.sub_title_certifications}</p>
            </div>
          </Fade>
        </div>
      </div>
    )}
  />
);
export default TitleCertifications;
