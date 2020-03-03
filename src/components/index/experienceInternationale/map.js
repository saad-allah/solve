import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const MapExp = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
          acf {
            map
          }
        }
      }
    `}
    render={data => (
      <Fade bottom>
        <div
          className="col-sm-12 p0"
          dangerouslySetInnerHTML={{ __html: data.wordpressAcfPages.acf.map }}
        />
      </Fade>
    )}
  />
);
export default MapExp;
