module.exports = {
  siteMetadata: {
    title: 'Hoi3 Division Designer',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor'
  ],
}
