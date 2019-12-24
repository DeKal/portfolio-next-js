import baseTheme from '~/theme/theme'

const theme = {
  ...baseTheme,
  colors: {
    // Color variables
    colorLight: '#ecf0f1',
    colorDarken: '#bdc3c7',
    colorDark: '#2c3e50',
    colorAccent: '#FFA726',
    bgColor: '#fff'
  },
  images: {
    background: '/images/bg.jpg',
    bgPattern: '/images/bg-pattern.jpg',
    bgPatternOpacity: '1',
    overlay:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAAZSURBVHjaYmCAAGM0GjfHGEMGAAAA//8DACm0ATMe8beGAAAAAElFTkSuQmCC'
  }
}

export default theme
