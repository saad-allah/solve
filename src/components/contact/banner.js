import { StaticQuery, graphql } from "gatsby"
import React from "react"
import MediaTop from "../SocialmediaHead"
const Banner = () => (

  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: {eq: 25}) {
    acf {
      title_banner_page
      image_banner_page {
        alt_text
        source_url
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
      <div className="se-banner-single" style={{ backgroundImage: `url(${data.wordpressAcfPages.acf.image_banner_page.source_url})` }}></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-7 " >
            <div className="text-banner-single">
              <h1   className="title-banner-single" dangerouslySetInnerHTML={{ __html: data.wordpressAcfPages.acf.title_banner_page }} />
            </div>
          </div>
        </div>
      </div>
    </section>
    )}
  />
)
export default Banner
