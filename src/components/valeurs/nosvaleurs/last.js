import { StaticQuery, graphql } from "gatsby";
import React from "react";

const Bloc_4 = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 18 }) {
          acf {
            content_valeurs_4
          }
        }
      }
    `}
    render={data => (
      <div className="row justify-content-center ">
        <div className="col-12 col-lg-10 text-last">
 
            <div className="se_excerpt">
              <p>{data.wordpressAcfPages.acf.content_valeurs_4}</p>
            </div>
          
        </div>
      </div>
    )}
  />
);
export default Bloc_4;
