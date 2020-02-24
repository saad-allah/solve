import { StaticQuery, graphql } from "gatsby"
import React from "react"

const TitleExp = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: {eq: 2}) {
            acf {
                title_expertises
      paragraphe_expertises
    }
  }
      }
    `}

    render={data => (
      
      <div class="col-sm-12 p0 col-lg-10">
      <div class="se-exp_header" >
        <h2 class="se_exp_title">
        { data.wordpressAcfPages.acf.title_expertises}
        </h2>
        <div class="se_exp_excerpt" >
        { data.wordpressAcfPages.acf.paragraphe_expertises}
        </div>
      </div>
    </div>
    )}
  />
)
export default TitleExp