const theme = {
  font:
    '-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  navHeaderHeight: '40px',
  navContentMinHeight: '80px',
  footerHeight: '50px',
  navHeightWhenScrollingOnMobile: '45px',
  navPosWhenHiding: '-220px',
  aboutMarginTop: '-200px',
  colors: {
    // Color variables
    colorLight: '#ecf0f1',
    colorDarken: '#bdc3c7',
    colorDark: '#2c3e50',
    colorAccent: '#FFA726',
    bgColor: '#fff'
  },
  spaces: {
    xxxsmall: 7,
    xxsmall: 10,
    xsmall: 13,
    small: 16,
    medium: 25,
    large: 35,
    xlarge: 45,
    gutter: 16
  },
  fonts: {
    fontSans: '"Open Sans", Tahoma, Verdana, Arial, sans-serif',
    fontSerif: 'Georgia, Times, "Times New Roman", serif',
    fontCondensed: '"Open Sans Condensed", Tahoma, Verdana, Arial, sans-serif',
    fontIp: '"ip", sans-serif',
    fontTrebuchet: 'Trebuchet MS, sans-serif',
    fontCert: 'Times, serif'
  },
  fontSizes: {
    base: '14px',
    XS: '10px',
    S: '12px',
    M: '14px',
    L: '16px',
    XL: '18px',
    XXL: '22px',
    XXXL: '24px'
  },
  images: {
    background: '/images/bg.jpg',
    bgPattern: '/images/bg-pattern.jpg',
    bgPatternOpacity: '1',
    overlayBgColor: 'rgba(44, 62, 80, 0.3)',
    overlay:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAAZSURBVHjaYmCAAGM0GjfHGEMGAAAA//8DACm0ATMe8beGAAAAAElFTkSuQmCC'
  },
  productImageRatio: '143%',
  defaultLineHeight: 1.57,
  icons: {
    goTop: '\\e817',
    location: '\\e806',
    mail: '\\e800',
    phone: '\\e81a',
    fb: '\\e811',
    linkedin: '\\e815',
    workexp: '\\e804',
    link: '\\e819',
    c: 'C',
    p: 'P'
  },
  headerPadding: '200px 10px 400px'
}

const themeExtra = {
  ...theme,
  extra: {
    boxShadow: `0 1px 2px -1px ${theme.colors.colorDark}`
  }
}

export default themeExtra
