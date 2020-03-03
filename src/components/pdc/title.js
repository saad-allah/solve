import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const TitlePdc = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressPage(wordpress_id: { eq: 199 }) {
          title
          slug
        }
      }
    `}
    render={data => (
      <section className="no-Privacy">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 p0 col-lg-10">
              <div className="se-Privacy_header">
                <Fade bottom>
                  <h1 className="se_Privacy_title">
                    {data.wordpressPage.title}
                  </h1>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);
export default TitlePdc;
