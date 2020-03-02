import { StaticQuery, graphql } from "gatsby";
import React from "react";

const LogosClients = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
          acf {
            clients_logos {
              logo {
                alt_text
                source_url
                slug
                localFile {
                  childImageSharp {
                    id
                    sizes(maxWidth: 900) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="se_clients_excerpt row justify-content-center">
        {data.wordpressAcfPages.acf.clients_logos.map(item => (
          <div className="col-6 col-lg-3 " key={item.logo.slug}>
            <div className="se-clients">
              <img
                src={item.logo.localFile.childImageSharp.sizes.src}
                alt={item.logo.alt_text}
                className="se-img-clients"
              />
            </div>
          </div>
        ))}
      </div>
    )}
  />
);
export default LogosClients;
