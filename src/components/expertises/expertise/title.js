import { StaticQuery, graphql } from "gatsby";
import React from "react";

const TitleExpertises = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 21 }) {
          acf {
            title_expertises_page
            sub_title_expertises_page
          }
        }
      }
    `}
    render={data => (
      <section className="se-valeurs">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-sm-12 p0 col-lg-10">
              <div className="se-card se_header no-bg se-v ">
                <h2 className="se_title">
                  {data.wordpressAcfPages.acf.title_expertises_page}
                </h2>
                <div
                  className="se_excerpt"
                  dangerouslySetInnerHTML={{
                    __html: data.wordpressAcfPages.acf.sub_title_expertises_page
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
export default TitleExpertises;
