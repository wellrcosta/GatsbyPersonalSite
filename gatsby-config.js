module.exports = {
  siteMetadata: {
    title: 'Wellington Reis',
    author: 'Wellington Reis',
    description: 'A full stack developer actually in love with Adonis.JS',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'wellington-reis',
        short_name: 'devReis',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
