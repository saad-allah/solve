import { StaticQuery, graphql } from "gatsby";
import React from "react";

const ContentAbout = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 43 }) {
          acf {
            paragraphe__histoire {
              content__histoire
            }
            title__histoire
          }
        }
      }
    `}
    render={data => (
      <div className="container text-center">
        <div className="row">
          <h2 className="se_map_title has-center ">
            {data.wordpressAcfPages.acf.title__histoire}
          </h2>
          {data.wordpressAcfPages.acf.paragraphe__histoire.map(item => (
            <div className="col-12 " key={item.content__histoire}>
              <div className="text-about hasleft text-center">
                <p className="se_excerpt has-center">
                  {item.content__histoire}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  />
);
export default ContentAbout;
