import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const ContentPdc = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressPage(wordpress_id: { eq: 199 }) {
          slug
          content
        }
      }
    `}
    render={data => (
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 p0 col-lg-10">
              <Fade bottom>
                <div
                  className="card-Privacy"
                  dangerouslySetInnerHTML={{
                    __html: data.wordpressPage.content
                  }}
                />
              </Fade>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);
export default ContentPdc;
