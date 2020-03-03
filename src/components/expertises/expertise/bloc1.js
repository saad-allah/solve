import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";

const Bloc1 = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 21 }) {
          acf {
            tite_bloc_1
            title_small_1
            title_small_1_2
            image_block_1 {
              alt_text
              source_url
            }
            content_1
            content_1_2
            image_block_1_2 {
              alt_text
              source_url
            }
          }
        }
      }
    `}
    render={data => (
      <div className="col-12 col-lg-8">
        <div className="row se-bgEx justify-content-between">
          <div className="col-12 ">
            <Fade bottom cascade>
              <h2 className="se_exp_title text-left">
                {data.wordpressAcfPages.acf.tite_bloc_1}
              </h2>
            </Fade>
          </div>
          <div className="col-12 col-md-6 se-df ">
            <div className="card-exp">
              <Fade bottom cascade>
                <h3 className="se-title-exp">
                  {data.wordpressAcfPages.acf.title_small_1}
                </h3>
              </Fade>
              <div className="se_excerpt">
                <Fade bottom cascade>
                  <p>{data.wordpressAcfPages.acf.content_1}</p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 ">
            <Fade bottom cascade>
              <div className="se-imgV">
                <img
                  src={data.wordpressAcfPages.acf.image_block_1.source_url}
                  alt={data.wordpressAcfPages.acf.image_block_1.alt_text}
                />
              </div>
            </Fade>
          </div>
          <div className="col-12">
            <div className="row justify-content-between">
              <div className="col-12 col-md-5 hide-col l ">
                <Fade bottom cascade>
                  <div className="se-imgV">
                    <img
                      src={
                        data.wordpressAcfPages.acf.image_block_1_2.source_url
                      }
                      alt={data.wordpressAcfPages.acf.image_block_1_2.alt_text}
                    />
                  </div>
                </Fade>
              </div>
              <div className="col-12 col-md-6 se-df ">
                <div className="card-exp">
                  <Fade bottom cascade>
                    <h3 className="se-title-exp">
                      {data.wordpressAcfPages.acf.title_small_1_2}
                    </h3>
                  </Fade>
                  <div className="se_excerpt">
                    <Fade bottom cascade>
                      <p>{data.wordpressAcfPages.acf.content_1_2}</p>
                    </Fade>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 hide-col m ">
                <Fade bottom cascade>
                  <div className="se-imgV">
                    <img
                      src={
                        data.wordpressAcfPages.acf.image_block_1_2.source_url
                      }
                      alt={data.wordpressAcfPages.acf.image_block_1_2.alt_text}
                    />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  />
);
export default Bloc1;
