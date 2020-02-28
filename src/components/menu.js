import { StaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"

import React from "react";

const MenuList = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressWpApiMenusMenusItems(name: { eq: "Menu 1" }) {
          items {
            title
            object_slug
          }
        }
        wordpressAcfOptions {
          options {
            image_lang {
              alt_text
              source_url
            }
            lang
          }
        }
      }
    `}
    render={data => (
      <ul className="navbar-nav ml-auto mt-0">
        <li key="accueil" className="nav-item">
          <AniLink to="/"   cover direction="up" duration={1.5} bg="#c0181f"  className="nav-link">
            Accueil
          </AniLink>
        </li>
        {data.wordpressWpApiMenusMenusItems.items.map(item => (
          <li key={item.object_slug} className="nav-item ">
            <AniLink cover direction="up" duration={1.5} bg="#c0181f"  to={`/${item.object_slug}`} className="nav-link">
              {item.title}
            </AniLink>
          </li>
        ))}
         <li key="lang" className="nav-item">
          <AniLink   cover direction="up" duration={1.5} bg="#c0181f" to="/" className="nav-link nav-img">
          <img
          src={data.wordpressAcfOptions.options.image_lang.source_url}
          alt={data.wordpressAcfOptions.options.image_lang.alt_text}
          />
          </AniLink>
        </li>
      </ul>
    )}
  />
);

export default MenuList;
