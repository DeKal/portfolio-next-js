import baseTheme from './baseTheme'

const theme = {
  ...baseTheme,
  postMarginTop: '0',
  postSurroundingsPadding: '0px 35px',
  postMaxWidth: '768px',
  marginFromContent: '32px',
  colors: {
    light: 'rgb(255, 255, 255)',
    dark: 'rgba(0, 0, 0, 0.84)',
    lightDark: 'rgba(0, 0, 0, 0.54)'
  },
  content: {
    marginTop: '2em',
    lineHeight: '40px',
    letterSpacing: '-0.004em'
  },
  header: {
    fontSize: '36px',
    fontSizeOnPhone: '28px'
  }
}

export default theme
