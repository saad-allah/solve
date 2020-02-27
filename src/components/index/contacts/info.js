import { StaticQuery, graphql } from "gatsby";
import MediaTop from "../../SocialmediaHead";
import React from "react";

const InoContact = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 2 }) {
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
      <div className="col-12 col-lg-6">
        <div className="card right-auto ">
          <h2 className="se_contact_title">
            {data.wordpressAcfPages.acf.title_contact}
          </h2>
          <div className="has_excerpt ">
            <p>{data.wordpressAcfPages.acf.sub_title}</p>
          </div>
          <div className="info-contact ">
            <ul>
              <li className="ui-map">
                <img
                  src={data.wordpressAcfPages.acf.icon_address.source_url}
                  alt={data.wordpressAcfPages.acf.icon_address.alt_text}
                />
                <span className="bold">
                  {data.wordpressAcfPages.acf.address_contact}
                </span>
              </li>
              <li className="ui-phone">
                <img
                  src={data.wordpressAcfPages.acf.icon_phone.source_url}
                  alt={data.wordpressAcfPages.acf.icon_phone.alt_text}
                />
                <a herf={data.wordpressAcfPages.acf.phone_number}>
                  {data.wordpressAcfPages.acf.phone_number_format}
                </a>
              </li>
              <li className="ui-mail">
                <img
                  src={data.wordpressAcfPages.acf.icon_email.source_url}
                  alt={data.wordpressAcfPages.acf.icon_email.alt_text}
                />
                <a herf={data.wordpressAcfPages.acf.email_contact}>
                  {data.wordpressAcfPages.acf.email_contact}
                </a>
              </li>
            </ul>
          </div>
          <div className="info-social">
            <MediaTop />
          </div>
        </div>
      </div>
    )}
  />
);
export default InoContact;
