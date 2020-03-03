import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const Bloc3 = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 21 }) {
          acf {
            tite_bloc_3
            image_block_3 {
              source_url
              alt_text
            }
            content_3
          }
        }
      }
    `}
    render={data => (
      <div className="col-12 col-lg-8">
        <div className="row se-bgEx justify-content-between">
          <div className="col-12 ">
            <Fade bottom>
              <h2 className="se_exp_title text-left">
                {data.wordpressAcfPages.acf.tite_bloc_3}
              </h2>
            </Fade>
          </div>
          <div className="col-12 col-md-5 hide-col l ">
            <Fade bottom>
              <div className="se-imgV">
                <img
                  src={data.wordpressAcfPages.acf.image_block_3.source_url}
                  alt={data.wordpressAcfPages.acf.image_block_3.alt_text}
                />
              </div>
            </Fade>
          </div>
          <div className="col-12 col-md-6 se-df ">
            <div className="card-exp">
              <Fade bottom>
                <div className="se_excerpt">
                  <p>{data.wordpressAcfPages.acf.content_3}</p>
                </div>
              </Fade>
            </div>
          </div>
          <div className="col-12 col-md-5 hide-col m ">
            <Fade bottom>
              <div className="se-imgV">
                <img
                  src={data.wordpressAcfPages.acf.image_block_3.source_url}
                  alt={data.wordpressAcfPages.acf.image_block_3.alt_text}
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    )}
  />
);
export default Bloc3;
