import { StaticQuery, graphql } from "gatsby";
import React from "react";

const ImageParallax = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 43 }) {
          acf {
            image_histoire {
              alt_text
              source_url
            }
          }
        }
      }
    `}
    render={data => (
      <div
        className="se-cover-images se-parallax"
        style={{
          backgroundImage: `url(${data.wordpressAcfPages.acf.image_histoire.source_url})`
        }}
      />
    )}
  />
);
export default ImageParallax;
