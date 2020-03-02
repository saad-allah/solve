import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import MediaTop from "../SocialmediaHead";
const Banner = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 43 }) {
          acf {
            title_banner_page
            image_banner_page {
              alt_text
              source_url
              localFile {
                childImageSharp {
                  id
                  sizes(maxWidth: 1000) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section className="se-main-top se-partenaires">
        <div className="social-slider">
          <MediaTop />
        </div>
        <div
          className="se-banner-single" >
           <Img src={data.wordpressAcfPages.acf.image_banner_page.localFile.childImageSharp.sizes.src}
                sizes={data.wordpressAcfPages.acf.image_banner_page.localFile.childImageSharp.sizes} />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-6 ">
              <div className="text-banner-single">
                <h1
                  className="title-banner-single"
                  dangerouslySetInnerHTML={{
                    __html: data.wordpressAcfPages.acf.title_banner_page
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
