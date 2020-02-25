import { StaticQuery, graphql } from "gatsby"
import React from "react"

const Banner = () => (
  
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: {eq: 43}) {
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
      <section class="se-main-top se-partenaires">
      <div class="se-banner-single" style={{ backgroundImage: `url(${data.wordpressAcfPages.acf.image_banner_page.source_url})` }}></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-12 col-lg-6 " >
            <div class="text-banner-single">
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