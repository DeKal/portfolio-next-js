const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

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
      assetPrefix: '.'
    }
  ],
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        runtimeCaching
      }
    }
  ]
])
