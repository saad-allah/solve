import { StaticQuery, graphql } from "gatsby";
import React from "react";

const Bloc_2 = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 18 }) {
          acf {
            title_valeurs_2
            sub_title_valeurs_2
            image_valeurs_2 {
              alt_text
              source_url
            }
            image_valeurs_2_1 {
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
                {data.wordpressAcfPages.acf.title_valeurs_2}
              </h2>
           
       
              <div className="se_excerpt">
                <p>{data.wordpressAcfPages.acf.sub_title_valeurs_2}</p>
              </div>
           
          </div>
        </div>
        <div className="col-12 col-lg-6 ">
          <div className="row">
            <div className="col-6 ">
         
                <div className="se-imgV">
                  <img
                    src={data.wordpressAcfPages.acf.image_valeurs_2.source_url}
                    alt={data.wordpressAcfPages.acf.image_valeurs_2.alt_text}
                  />
                </div>
             
            </div>
            <div className="col-6 ">
         
                <div className="se-imgV">
                  <img
                    src={
                      data.wordpressAcfPages.acf.image_valeurs_2_1.source_url
                    }
                    alt={data.wordpressAcfPages.acf.image_valeurs_2_1.alt_text}
                  />
                </div>
             
            </div>
          </div>
        </div>
      </div>
    )}
  />
);
export default Bloc_2;
