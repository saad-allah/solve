import { StaticQuery, graphql } from "gatsby";
import React from "react";

const TitleNosvaleur = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 18 }) {
          acf {
            video_valeurs {
              source_url
            }
            title_valeurs
            content_valeurs
          }
        }
      }
    `}
    render={data => (
      <section className="se-valeurs">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-sm-12 p0 col-lg-10">
              <div className="se-card se_header no-bg se-v">
                <h2 className="se_title">
                  {data.wordpressAcfPages.acf.title_valeurs}
                </h2>
                <div className="se-video">
                  <video autoPlay muted>
                    <source
                      src={data.wordpressAcfPages.acf.video_valeurs.source_url}
                      type="video/mp4"
                    />
                    Your browser does not support HTML5 video.
                  </video>
                </div>
                <div
                  className="se_excerpt"
                  dangerouslySetInnerHTML={{
                    __html: data.wordpressAcfPages.acf.content_valeurs
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
export default TitleNosvaleur;
