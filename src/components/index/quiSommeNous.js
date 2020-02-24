import { StaticQuery, graphql } from "gatsby"
import React from "react"

const QuiSommeNous = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: {eq: 2}) {
            acf {
      paragraphe_qsn
      title_qsn
      sub_title_qsn
    }
  }
      }
    `}

    render={data => (
        <section className="se-qui-somme">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-sm-12 p0 col-lg-10">
              <div className="se-card se_header ">
                <h3 className="se_span">
                {data.wordpressAcfPages.acf.sub_title_qsn}
                </h3>
                <h2 className="se_title">
                {data.wordpressAcfPages.acf.title_qsn}
                 
                </h2>
                <div className="se_excerpt">
               { data.wordpressAcfPages.acf.paragraphe_qsn}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
)
export default QuiSommeNous