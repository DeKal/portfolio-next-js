const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')

module.exports = withPlugins([
  [
    withCSS,
    {
      /* config options here */
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]'
      },
      exportTrailingSlash: true
    }
  ]
])
