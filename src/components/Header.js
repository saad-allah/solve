import { StaticQuery, graphql, Link } from "gatsby";
import React from "react";
//import Img from "gatsby-image";

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
        wordpressWpApiMenusMenusItems(name: { eq: "Menu 1" }) {
          items {
            title
            object_slug
          }
        }
        wordpressAcfOptions {
          options {
            lang
            image_lang {
              alt_text
              source_url
            }
            logo_header {
              source_url
              alt_text
            }
          }
        }
      }
    `}
    render={data => (
      <header className="nav">
        <div className="nav__holder nav--sticky">
          <nav className="navbar navbar-expand-lg" id="se-navbar">
            <div className="container">
              <Link to="/" className="logo navbar-brand">
              <img src={ data.wordpressAcfOptions.options.logo_header.source_url} alt={ data.wordpressAcfOptions.options.logo_header.alt_text} />     
              </Link>
              <button
                className="nav-icon-toggle navbar-toggler"
                data-toggle="collapse"
                data-target="#se-nav"
                aria-controls="se-nav"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="nav-icon-toggle__box">
                  <span className="nav-icon-toggle__inner"></span>
                </span>
              </button>

              <div className="navbar-collapse collapse show" id="se-nav">
                <ul className="navbar-nav ml-auto mt-0">
                  <li key="accueil" className="nav-item">
                    <Link to="/" className="nav-link">
                      Accueil
                    </Link>
                  </li>
                  {data.wordpressWpApiMenusMenusItems.items.map(item => (
                    <li key={item.object_slug} className="nav-item ">
                      <Link to={`/${item.object_slug}`} className="nav-link">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )}
  />
);
export default Header;
