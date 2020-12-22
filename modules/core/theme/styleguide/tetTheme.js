import baseTheme from './theme'

const theme = {
  ...baseTheme,
  aboutMarginTop: '-111px',
  titleBgColor: 'rgba(44, 25, 0, 0.2)',
  colors: {
    ...baseTheme.colors,
    colorLight: '#ecf0f1',
    colorDarken: '#bdc3c7',
    colorDark: '#2c3e50',
    colorAccent: '#FFA500',
    bgColor: '#fff'
  },
  images: {
    background: '/images/tet/bg-tet.jpg',
    backgroundMobile: '/images/bg-mobile.webp',
    bgPattern: '/images/tet/bg-pattern.jpg',
    bgPatternOpacity: '0.1',
    overlayBgColor: '',
    overlay: ''
  }
}

export default theme
