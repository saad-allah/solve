import { StaticQuery, graphql } from "gatsby";
import React from "react";

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
          <h2 className="se_cert_title">
            {data.wordpressAcfPages.acf.title_certifications}
          </h2>
          <div className="se_cert_excerpt">
            <p>{data.wordpressAcfPages.acf.sub_title_certifications}</p>
          </div>
        </div>
      </div>
    )}
  />
);
export default TitleCertifications;
