import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfOptions {
          options {

            logo_footer {
              source_url
              alt_text
            }
            link_page
        Link_Text
        copyright
          }
        }

      }
    `}
    render={data => (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-12  col-md-4">
              <div className="logofooter">
                <AniLink to="/" cover direction="up" duration={1.5} bg="#c0181f" className="se-logo">
                <img className="se__img " src={ data.wordpressAcfOptions.options.logo_footer.source_url} alt={ data.wordpressAcfOptions.options.logo_footer.alt_text} />

                </AniLink>
              </div>
            </div>
            <div className="col-12  col-md-4">
              <div className="cpy">
                <p>
                <AniLink cover direction="up" duration={1.5} bg="#c0181f" to="/politique-de-confidentialite" className="nav-link ">
                { data.wordpressAcfOptions.options.Link_Text}
                </AniLink>
                </p>
              </div>
            </div>
            <div className="col-12  col-md-4">


             <div className="left-text" dangerouslySetInnerHTML={{ __html: data.wordpressAcfOptions.options.copyright}}/>

            </div>
          </div>
        </div>
      </footer>
    )}
  />
)
export default Footer
