import { StaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react";

const OffreExpertises = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfPages(wordpress_id: { eq: 21 }) {
          acf {
            button_text
            button_url
            content_exp_contact
            title_contact_exp
          }
        }
      }
    `}
    render={data => (
      <div className="col-12 col-lg-3 p0 hide-col l">
        <div className="se-cardSide">
          <h4 className="se-title-exp">
            {data.wordpressAcfPages.acf.title_contact_exp}
          </h4>
          <div className="se_excerpt">
            <p>{data.wordpressAcfPages.acf.content_exp_contact}</p>
          </div>
          <AniLink  cover direction="up" duration={1.5} bg="#c0181f" to="/nous-contacter" className="se-Ncontact">
            {data.wordpressAcfPages.acf.button_text}
          </AniLink>
        </div>
      </div>
    )}
  />
);
export default OffreExpertises;
