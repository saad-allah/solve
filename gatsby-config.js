module.exports = {
  siteMetadata: {
    title: ` Spécialiste du Revêtement de Sol Industriel En Epoxy & Polyurethane au Maroc`,
    description: `Spécialiste du Revêtement de Sol Industriel En Epoxy & Polyurethane, Caoutchoutage, Ebonitage & Briquetage au Maroc et à l'international.`,
    author: `@theastroco`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159342285-1",
        head: true,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `solev maroc`,
        short_name: `solev maroc`,
        start_url: `/`,
        background_color: `#c0181f`,
        theme_color: `#c0181f`,
        display: `minimal-ui`,
        icon: `src/images/solve-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: `https://gatsby.astro-projects.com/graphql`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        excludedRoutes: ['/wp/v2/users/**', '/wp/v2/settings*', "**/themes",],
        baseUrl: `gatsby.astro-projects.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/*/*/menus", // <== Menu api endpoint
          "**/*/*/menu-locations", // <== Menu api endpoint
        ],
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}