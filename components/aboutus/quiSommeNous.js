import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";

const QuiSommeNous = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 43 }) {
          acf {
            paragraphe_qsn
            title_qsn
          }
        }
      }
    `}
    render={data => (
      <section className="se-about">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-sm-12 p0 col-lg-10">
              <div className="se-card se_header no-bg aos-init aos-animate">
                  <h2 className="se_title">
                    {data.wordpressAcfPages.acf.title_qsn}
                  </h2>
                <div className="se_excerpt has-center">
                    <p>{data.wordpressAcfPages.acf.paragraphe_qsn}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);
export default QuiSommeNous;
