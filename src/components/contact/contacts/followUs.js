import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const FollowUs = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfOptions {
          options {
            title_socialMedia
            sub_title
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
      <div className="col-12 col-lg-12">
        <div className="followus">
          <Fade bottom>
            <h2 className="se_contact_title">
              {data.wordpressAcfOptions.options.title_socialMedia}
            </h2>
          </Fade>
          <div className="has_excerpt">
            <Fade bottom>
              <p>{data.wordpressAcfOptions.options.sub_title}</p>
            </Fade>
          </div>
          <div className="info-social has-color">
            <ul>
              {data.wordpressAcfOptions.options.social_media.map(item => (
                <li key={item.icon.slug}>
                  <Fade bottom>
                    <a
                      href={item.url_media}
                      className="smt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.icon.source_url}
                        alt={item.icon.alt_text}
                      />
                    </a>
                  </Fade>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )}
  />
);
export default FollowUs;
