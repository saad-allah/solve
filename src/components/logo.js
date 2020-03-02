import { StaticQuery, graphql, Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
//import Img from "gatsby-image";
const Logo = () => (
  
  <StaticQuery
    query={graphql`
      query {

        wordpressAcfOptions {
          options {
            logo_header {
                source_url
                alt_text
              }
          }
        }
      }
    `}
    
    render={data => (
      <Link to="/" className="logo navbar-brand">
        <img
          src={data.wordpressAcfOptions.options.logo_header.source_url}
          alt={data.wordpressAcfOptions.options.logo_header.alt_text}
        />
      </Link>
   
    )}
  />
  
);

export default Logo;



