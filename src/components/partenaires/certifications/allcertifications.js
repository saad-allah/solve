import { StaticQuery, graphql } from "gatsby";
import React from "react";

const CertificationsContent = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 23 }) {
          acf {
            certifications {
              certifications_content
              certifications_image {
                alt_text
                slug
                source_url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="col-12">
        {data.wordpressAcfPages.acf.certifications.map(item => (
          <div
            className="row se-bg-white "
            key={item.certifications_image.slug}
          >
            <div className="col-12 col-sm-8 col-lg-2">
              <div className="img_part">
                <img
                  src={item.certifications_image.source_url}
                  alt={item.certifications_image.alt_text}
                />
              </div>
            </div>
            <div className="col-12 col-sm-8 col-lg-10">
              <div className="se_logo_excerpt">
                <p>{item.certifications_content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  />
);
export default CertificationsContent;
