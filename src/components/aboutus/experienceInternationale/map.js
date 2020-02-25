import { StaticQuery, graphql } from "gatsby";
import React from "react";

const MapExp = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 43 }) {
          acf {
            map
            }
        }
      }
    `}
    render={data => (

     <div   className="col-sm-12 p0" dangerouslySetInnerHTML={{ __html: data.wordpressAcfPages.acf.map }} />
    
    )}
  />
);
export default MapExp;
