import baseTheme from './baseTheme'

const theme = {
  ...baseTheme,
  navHeaderHeight: '40px',
  navContentMinHeight: '80px',
  footerHeight: '50px',
  navHeightWhenScrollingOnMobile: '45px',
  navPosWhenHiding: '-220px',
  aboutMarginTop: '-200px',
  colors: {
    // Color variables
    ghostWhite: '#f8f8ff ',
    colorLight: '#ecf0f1',
    colorDarken: '#bdc3c7',
    colorDark: '#2c3e50',
    colorAccent: '#FFA726',
    colorBlack: '#000000',
    bgColor: '#fff',
    grey: '#696969'
  },
  images: {
    background: '/images/bg.webp',
    backgroundMobile: '/images/bg-mobile.webp',
    bgPattern: '/images/bg-pattern.jpg',
    bgPatternOpacity: '1',
    overlayBgColor: 'rgba(44, 62, 80, 0.4)',
    overlayBgColorMobile: 'rgba(44, 62, 80, 0.3)',
    overlay:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAAZSURBVHjaYmCAAGM0GjfHGEMGAAAA//8DACm0ATMe8beGAAAAAElFTkSuQmCC'
  },
  productImageRatio: '143%',
  headerPadding: '200px 10px 250px'
}

const themeExtra = {
  ...theme,
  extra: {
    boxShadow: `0 1px 2px -1px ${theme.colors.colorDark}`
  }
}

export default themeExtra
