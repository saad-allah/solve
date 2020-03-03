import { StaticQuery, graphql, Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";
import Fade from "react-reveal/Fade";
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
          <Fade bottom>
            <h4 className="se-title-exp">
              {data.wordpressAcfPages.acf.title_contact_exp}
            </h4>
          </Fade>
          <div className="se_excerpt">
            <Fade bottom>
              <p>{data.wordpressAcfPages.acf.content_exp_contact}</p>
            </Fade>
          </div>
          <Fade bottom>
            <Link to="/nous-contacter" className="se-Ncontact">
              {data.wordpressAcfPages.acf.button_text}
            </Link>
          </Fade>
        </div>
      </div>
    )}
  />
);
export default OffreExpertises;
