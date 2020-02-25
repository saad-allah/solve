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
      
      <div className="col-sm-12 p0 col-lg-10">
      <div className="se-exp_header" >
        <h2 className="se_exp_title">
        { data.wordpressAcfPages.acf.title_expertises}
        </h2>
        <div className="se_exp_excerpt" >
        <p>
        { data.wordpressAcfPages.acf.paragraphe_expertises}
        </p>
        </div>
      </div>
    </div>
    )}
  />
)
export default TitleExp