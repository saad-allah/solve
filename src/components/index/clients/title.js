import { StaticQuery, graphql } from "gatsby";
import React from "react";

const TitleClients = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
          acf {
            title_clients
          }
        }
      }
    `}
    render={data => (
      <div className="col-12">
      
          <h2
            className="se_clients_title"
           
          >
            {data.wordpressAcfPages.acf.title_clients}
          </h2>
        
      </div>
    )}
  />
);
export default TitleClients;
