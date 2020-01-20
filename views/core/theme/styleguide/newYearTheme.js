import baseTheme from './theme'

const theme = {
  ...baseTheme,
  aboutMarginTop: '-115px',
  titleBgColor: 'rgba(44, 25, 0, 0.6)',
  colors: {
    // Color variables
    colorLight: '#ecf0f1',
    colorDarken: '#bdc3c7',
    colorDark: '#2c3e50',
    colorAccent: '#F0B14A',
    bgColor: '#fff'
  },
  images: {
    background: '/images/newyear/bg-newyear.jpg',
    bgPattern: '/images/newyear/bg-pattern.jpg',
    bgPatternOpacity: '0.3',
    overlayBgColor: 'rgba(44, 62, 80, 0.3)',
    overlay: ''
  }
}

export default theme
