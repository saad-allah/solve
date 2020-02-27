import { StaticQuery, graphql } from "gatsby";
import React from "react";

const TitleClients = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 23 }) {
          acf {
            title_clients
            sub_title_partenaires
          }
        }
      }
    `}
    render={data => (
      <div className="co-sm-12 p0 col-lg-10">
        <div className="se-Partenaires_header">
          <h2 className="se_Partenaires_title">
            {data.wordpressAcfPages.acf.title_clients}
          </h2>
          <div className="se_Partenaires_excerpt">
            <p>{data.wordpressAcfPages.acf.sub_title_partenaires}</p>
          </div>
        </div>
      </div>
    )}
  />
);
export default TitleClients;
