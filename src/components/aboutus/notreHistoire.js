
import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Parallax from "./histoire/parallax";
import Content from "./histoire/content";
const Notrehistoire = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 43 }) {
          acf {
            title__histoire
          }
        }
      }
    `}
    render={data => (
      <section >
        <Parallax />
        <Content />
      </section>
    )}
  />
);
export default Notrehistoire;
