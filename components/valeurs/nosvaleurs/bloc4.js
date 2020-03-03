import { StaticQuery, graphql } from "gatsby";
import React from "react";

const Bloc_4 = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 18 }) {
          acf {
            title_valeurs_4
            sub_title_valeurs_4
            image_valeurs_4 {
              alt_text
              source_url
            }
            image_valeurs_4_1 {
              alt_text
              source_url
            }
          }
        }
      }
    `}
    render={data => (
      <div className="row">
        <div className="col-12 col-lg-6 first-col ">
          <div className="card-valeurs">
          
              <h2 className="se_valeurs_title">
                {data.wordpressAcfPages.acf.title_valeurs_4}
              </h2>
            
          
              <div className="se_excerpt">
                <p>{data.wordpressAcfPages.acf.sub_title_valeurs_4}</p>
              </div>
            
          </div>
        </div>
        <div className="col-12 col-lg-6 ">
          <div className="row">
            <div className="col-6 ">
            
                <div className="se-imgV">
                  <img
                    src={data.wordpressAcfPages.acf.image_valeurs_4.source_url}
                    alt={data.wordpressAcfPages.acf.image_valeurs_4.alt_text}
                  />
                </div>
              
            </div>
            <div className="col-6 ">
            
                <div className="se-imgV">
                  <img
                    src={
                      data.wordpressAcfPages.acf.image_valeurs_4_1.source_url
                    }
                    alt={data.wordpressAcfPages.acf.image_valeurs_4_1.alt_text}
                  />
                </div>
              
            </div>
          </div>
        </div>
      </div>
    )}
  />
);
export default Bloc_4;
