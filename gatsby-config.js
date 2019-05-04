module.exports = {
  siteMetadata: {
    title: 'Joyful Deer',
    description: 'Pick a name!'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jouful-deer`,
        short_name: `jd`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Josefin Sans',
            subsets: ['latin-ext'],
            variants: ['400']
          },
          {
            family: 'Open Sans',
            subsets: ['latin-ext'],
            variants: ['400', '400i', '700']
          },
        ],
      },
    }
  ],
}
