import { StaticQuery, graphql } from "gatsby";
import React from "react";
import Fade from "react-reveal/Fade";
const InoContact = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 25 }) {
          acf {
            title_contact
            sub_title
            address_contact
            icon_address {
              source_url
              alt_text
            }
            email_contact
            icon_email {
              alt_text
              source_url
            }
            phone_number
            phone_number_format
            icon_phone {
              alt_text
              source_url
            }
          }
        }
      }
    `}
    render={data => (
      <div className="col-12 col-lg-12 hasBgWhite mt-50">
        <div className="card ">
        <Fade bottom>
          <h2 className="se_contact_title">
            {data.wordpressAcfPages.acf.title_contact}
          </h2>
          </Fade>
          <Fade bottom>
          <div className="has_excerpt ">
            <p>{data.wordpressAcfPages.acf.sub_title}</p>
          </div>
          </Fade>
          <div className="info-contact ">
            <ul class="contact-page">
              <li className="ui-map">
              <Fade bottom>
                <img
                  src={data.wordpressAcfPages.acf.icon_address.source_url}
                  alt={data.wordpressAcfPages.acf.icon_address.alt_text}
                />
                <span className="bold">
                  {data.wordpressAcfPages.acf.address_contact}
                </span>
                </Fade>
              </li>
              <li className="ui-phone">
              <Fade bottom>
                <img
                  src={data.wordpressAcfPages.acf.icon_phone.source_url}
                  alt={data.wordpressAcfPages.acf.icon_phone.alt_text}
                />
                <a herf={data.wordpressAcfPages.acf.phone_number}>
                  {data.wordpressAcfPages.acf.phone_number_format}
                </a>
                </Fade>
              </li>
              <li className="ui-mail">
              <Fade bottom>
                <img
                  src={data.wordpressAcfPages.acf.icon_email.source_url}
                  alt={data.wordpressAcfPages.acf.icon_email.alt_text}
                />
                <a herf={data.wordpressAcfPages.acf.email_contact}>
                  {data.wordpressAcfPages.acf.email_contact}{" "}
                </a>
                </Fade>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )}
  />
);
export default InoContact;
