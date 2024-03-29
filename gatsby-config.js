module.exports = {
  siteMetadata: {
    title: `Thomas Pruschwitz`,
    subtitle: `Gatsby`,
    description: `Geschichte für alle`,
    keywords: `code, programming, gatsby, tutorial, starter, library`,
    cats: `SS, Wehrmacht, Digitalisierung`,
    siteUrl: `https://gatsby-starter-fine.netlify.com`
  },
  plugins: [
    `gatsby-plugin-jss`,
    `gatsby-plugin-flow`,
    `gatsby-disable-404`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        hoist: false,
        sourceMap: false,
        autoLabel: false,
        labelFormat: "[local]",
        extractStatic: false,
        outputDir: "",
        importedNames: {
          styled: "styled",
          css: "css",
          keyframes: "keyframes",
          injectGlobal: "injectGlobal",
          merge: "merge"
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 100,
              maxWidth: 860,
              linkImagesToOriginal: false,
              sizeByPixelDensity: true
            }
          },
          "gatsby-remark-embed-soundcloud",
	        "gatsby-remark-copy-linked-files"
        ]
      }
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        linkImagesToOriginal: false,
        sizeByPixelDensity: true,
        quality: 100,
        maxWidth: 860
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-53854676-10",
        head: false,
        anonymize: true,
        respectDNT: true,
        cookieDomain: "thomas-pruschwitz.de",
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ["/category/*"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`
      }
    }
  ]
};
