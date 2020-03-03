import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const Bloc_3 = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 18 }) {
          acf {
            title_valeurs_3
            sub_title_valeurs_3
            image_valeurs_3 {
              alt_text
              source_url
            }
            image_valeurs_3_1 {
              alt_text
              source_url
            }
          }
        }
      }
    `}
    render={data => (
      <div className="row">
        <div className="col-12 col-lg-6 ">
          <div className="card-valeurs">
            <Fade bottom>
              <h2 className="se_valeurs_title">
                {data.wordpressAcfPages.acf.title_valeurs_3}
              </h2>
            </Fade>
            <Fade bottom>
              <div className="se_excerpt">
                <p>{data.wordpressAcfPages.acf.sub_title_valeurs_3}</p>
              </div>
            </Fade>
          </div>
        </div>
        <div className="col-12 col-lg-6 ">
          <div className="row">
            <div className="col-6 ">
              <Fade bottom>
                <div className="se-imgV">
                  <img
                    src={data.wordpressAcfPages.acf.image_valeurs_3.source_url}
                    alt={data.wordpressAcfPages.acf.image_valeurs_3.alt_text}
                  />
                </div>
              </Fade>
            </div>
            <div className="col-6 ">
              <Fade bottom>
                <div className="se-imgV">
                  <img
                    src={
                      data.wordpressAcfPages.acf.image_valeurs_3_1.source_url
                    }
                    alt={data.wordpressAcfPages.acf.image_valeurs_3_1.alt_text}
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    )}
  />
);
export default Bloc_3;
