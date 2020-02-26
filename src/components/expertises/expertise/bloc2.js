import { StaticQuery, graphql } from "gatsby";
import React from "react";

const Bloc_2 = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 21 }) {
          acf {
            tite_bloc_2
            title_small_2
            content_2
            image_block_2_1 {
              alt_text
              source_url
            }
            image_block_2_2 {
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
                    <div className="col-12 aos-init " >
                      <h2 className="se_exp_title text-left">
                                        {data.wordpressAcfPages.acf.tite_bloc_2}
                      </h2>
                    </div>
                    <div className="col-12 col-md-6 se-df " >
                      <div className="card-exp">
                        <h3 className="se-title-exp">                    {data.wordpressAcfPages.acf.title_small_2}</h3>
                        <div className="se_excerpt">
                          <p>
                                              {data.wordpressAcfPages.acf.content_2}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-5  " >
                      <div className="se-imgV">
                         <img src={data.wordpressAcfPages.acf.image_block_2_1.source_url} alt={data.wordpressAcfPages.acf.image_block_2_1.alt_text} />
                            <br/>
                        <img src={data.wordpressAcfPages.acf.image_block_2_2.source_url} alt={data.wordpressAcfPages.acf.image_block_2_2.alt_text} />
                      </div>
                    </div>

                  </div>
        </div>
    )}
  />
);
export default Bloc_2;
