const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withSass({
  /* config options here */
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]'
  }
})

module.exports = withImages(withSass({}))
