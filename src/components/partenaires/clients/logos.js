import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const LogosClients = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 23 }) {
          acf {
            clients_logos {
              logo {
                alt_text
                source_url
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="col-12">
        <div className="se_clients_excerpt row justify-content-center">
          {data.wordpressAcfPages.acf.clients_logos.map(item => (
            <Fade bottom>
              <div className="col-6 col-lg-3 " key={item.logo.slug}>
                <div className="se-clients">
                  <img
                    src={item.logo.source_url}
                    alt={item.logo.alt_text}
                    className="se-img-clients"
                  />
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    )}
  />
);
export default LogosClients;
