import { StaticQuery, graphql } from "gatsby";
import React from "react";

const SocialmediaHead = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfOptions {
          options {
            social_media {
              icon {
                alt_text
                source_url
                slug
                localFile {
                  childImageSharp {
                    id
                    sizes(maxWidth: 1000) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
              url_media
            }
          }
        }
      }
    `}
    render={data => (

          <ul>
            {data.wordpressAcfOptions.options.social_media.map(item => (
            <li  key={item.icon.slug}> <a href={item.url_media} className="smt">   <img src={item.icon.localFile.childImageSharp.sizes.src} alt={item.icon.alt_text} />
                <span className="hide-text">
                {item.icon.slug}
                </span>
            
            </a></li>
            ))}
          </ul>

    )}
  />
);
export default SocialmediaHead;
