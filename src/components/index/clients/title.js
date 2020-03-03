import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
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
        <Fade bottom>
          <h2
            className="se_clients_title"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease-out-back"
          >
            {data.wordpressAcfPages.acf.title_clients}
          </h2>
        </Fade>
      </div>
    )}
  />
);
export default TitleClients;
