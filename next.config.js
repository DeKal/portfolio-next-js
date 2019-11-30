const withSass = require('@zeit/next-sass')

module.exports = withSass({
  /* config options here */
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]'
  }
})
