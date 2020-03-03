import { StaticQuery, graphql } from "gatsby";
import React from "react";

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
       
                  <h1 className="se_Privacy_title">
                    {data.wordpressPage.title}
                  </h1>
          
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);
export default TitlePdc;
