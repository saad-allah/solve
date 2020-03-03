import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
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
              localFile {
                childImageSharp {
                  id
                  sizes(maxWidth: 1000) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
            man_image {
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
      console.log(data),
      (
        <section className="se-main-top">
          <div className="social-slider">
            <MediaTop />
          </div>
          <div className="se-banner">
            <Img
              src={
                data.wordpressAcfPages.acf.image_banner.localFile
                  .childImageSharp.sizes.src
              }
              sizes={
                data.wordpressAcfPages.acf.image_banner.localFile
                  .childImageSharp.sizes
              }
            />
          </div>
          <div
            className="se-imgs"
            style={{
              backgroundImage: `url(${data.wordpressAcfPages.acf.man_image.localFile.childImageSharp.sizes.src})`
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
      )
    )}
  />
);

export default Banner;
