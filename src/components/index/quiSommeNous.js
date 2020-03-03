import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const QuiSommeNous = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
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
            <Fade bottom>
              <div className="col-sm-12 p0 col-lg-10">
                <div className="se-card se_header ">
                  <Fade bottom>
                    <h3 className="se_span ">
                      {data.wordpressAcfPages.acf.sub_title_qsn}
                    </h3>
                  </Fade>
                  <Fade bottom>
                    <h2 className="se_title">
                      {data.wordpressAcfPages.acf.title_qsn}
                    </h2>
                  </Fade>
                  <Fade bottom>
                    <div className="se_excerpt">
                      {data.wordpressAcfPages.acf.paragraphe_qsn}
                    </div>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    )}
  />
);
export default QuiSommeNous;
