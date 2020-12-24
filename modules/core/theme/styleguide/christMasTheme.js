import baseTheme from './theme'

const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    colorDarken: '#bdc3c7',
    colorDark: '#2c3e50',
    colorAccent: '#ff8484',
    bgColor: '#fff'
  },
  images: {
    background: '/images/christmas/bg-christmas.jpg',
    backgroundMobile: '/images/bg-mobile.webp',
    bgPattern: '/images/christmas/bg-pattern-snow.png',
    bgPatternOpacity: '0.25',
    overlayBgColor: 'rgba(44, 62, 80, 0.3)',
    overlay:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAAZSURBVHjaYmCAAGM0GjfHGEMGAAAA//8DACm0ATMe8beGAAAAAElFTkSuQmCC'
  }
}

export default theme
