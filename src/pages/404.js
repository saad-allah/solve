import React from "react";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import SEO from "../components/seo";
import "../style/layout.css";
const NotFoundPage = () => (
  <div className="_404">
    <SEO title="404 Not found" />
    <h2>404</h2>
    <h1>Nous ne trouvons pas ce que vous cherchez au juste</h1>
    <p>
      N’ayez pas peur, vous pouvez revenir à la page d’accueil ou faire une
      nouvelle recherche.
    </p>
    <Link
      cover
      direction="up"
      duration={1.5}
      bg="#c0181f"
      to="/"
      className="nav-link"
    >
      Revenir à l’accueil
    </Link>
  </div>
);

export default NotFoundPage;
