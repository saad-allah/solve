import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
//import Img from "gatsby-image";
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
      }
    `}
    
    render={data => (
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
   
    )}
  />
  
);

export default MenuList;



