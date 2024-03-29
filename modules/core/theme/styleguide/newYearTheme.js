import baseTheme from './theme'

const theme = {
  ...baseTheme,
  aboutMarginTop: '-115px',
  titleBgColor: 'rgba(44, 25, 0, 0.6)',
  colors: {
    ...baseTheme.colors,
    colorDarken: '#bdc3c7',
    colorDark: '#2c3e50',
    colorAccent: '#F0B14A',
    bgColor: '#fff'
  },
  images: {
    background: '/images/newyear/bg-newyear.webp',
    backgroundMobile: '/images/bg-mobile.webp',
    bgPattern: '/images/newyear/bg-pattern.webp',
    bgSize: '400px 265px',
    bgPatternOpacity: '0.3',
    overlayBgColor: 'rgba(44, 62, 80, 0.3)',
    overlay: ''
  }
}

export default theme
