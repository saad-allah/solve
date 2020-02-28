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
            <li  key={item.icon.slug}> <a href={item.url_media} className="smt" aria-label="Follow us">   <img src={item.icon.source_url} alt={item.icon.alt_text} /></a></li>
            ))}
          </ul>

    )}
  />
);
export default SocialmediaHead;
