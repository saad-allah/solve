import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

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
      }
    `}
    render={data => (
      <header style={{ background: `rebeccapurple` }} >
        <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, display: `flex`, justifyContent: `space-between`, alignItems: `center`, }} >
          <h1 style={{ margin: 0 }}>
            <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
              {data.wordpressSiteMetadata.name}
            </Link>
          </h1>
          <ul style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
            <li key='Accueil' style={{ margin: `0 10px` }}>
              <Link to='/' style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} >
                Accueil
              </Link>
            </li>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug} style={{ margin: `0 10px` }}>
                <Link to={`/${item.object_slug}`} style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} >
                  {item.title}
                </Link>
              </li>
            ))}
            <li key='blog' style={{ margin: `0 10px` }}>
            <Link to='/blog' style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} >
              Blog
            </Link>
            </li>
          </ul>
        </div>
      </header>
    )}
  />
)
export default Header
