import { StaticQuery, graphql } from "gatsby";
import React from "react";
import MediaTop from "../SocialmediaHead";

const Banner = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
          acf {
            title_banner
            image_banner {
              alt_text
              source_url
            }
            man_image {
              alt_text
              source_url
            }
          }
        }
      }
    `}
    render={data => (
      <section className="se-main-top">
        <div className="social-slider">
          <MediaTop />
        </div>
        <div
          className="se-banner"
          style={{
            backgroundImage: `url(${data.wordpressAcfPages.acf.image_banner.source_url})`
          }}
        ></div>
        <div
          className="se-imgs"
          style={{
            backgroundImage: `url(${data.wordpressAcfPages.acf.man_image.source_url})`
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-8 ">
              <div className="text-banner">
                <h1
                  className="title-banner"
                  dangerouslySetInnerHTML={{
                    __html: data.wordpressAcfPages.acf.title_banner
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);

export default Banner;
