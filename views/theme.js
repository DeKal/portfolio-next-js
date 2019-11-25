const theme = {
  font:
    '-apple-system, blinkmacsystemfont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  navHeaderHeight: '40px',
  navContentMinHeight: '80px',
  colors: {
    // Color variables
    colorLight: '#ecf0f1',
    colorDarken: '#bdc3c7',
    colorDark: '#2c3e50',
    colorAccent: '#FFA726',
    // primary colors
    lightPrimary: '#fff',
    darkPrimary: '#000',

    // additional colors
    lightSecondary: '#f4f4f4',
    darkSecondary: '#909090',
    medium: '#dfdfdf',
    darkTertiary: '#6d6e6e',

    // feedback/highlight colors
    positiveDark: '#00b09f',
    positiveLight: '#d4ece7',
    neutral: '#9dabae',
    negativeDark: '#ba4242',
    negativeLight: '#ff8484',

    facebook: '#3a5795',
    facebookHover: '#2B4273',

    darkDisabled: '#6d6e6e',
    lightDisabled: '#cdece9',

    placeholder: '#f1f1f1',
    outlet: '#ab0030',

    // Colors from new styleguide
    grey100: '#262626',
    grey80: '#474747',
    grey60: '#737373',
    grey20: '#dedede',
    grey10: '#f4f4f4',

    green10: '#d9f7d2',
    green60: '#2e8618',
    green80: '#1a6307',
    green90: '#1b510e',

    red10: '#fde4e4',
    red60: '#b81818',
    red80: '#9e0d0d',
    red90: '#840f0f',

    yellow10: '#fef7e2',
    yellow60: '#fbc622',
    yellow80: '#fab005',
    yellow90: '#f08c00',

    teal10: '#d6e6e7',
    teal60: '#297e84',
    teal80: '#31696d',
    teal90: '#305558'
  },
  spaces: {
    xxxsmall: 7,
    xxsmall: 10,
    xsmall: 13,
    small: 16,
    medium: 25,
    large: 35,
    xlarge: 45,

    /**
     * After discussing with Ameen,
     * We haven't defined this value globally.
     * This creates inconsistent paddings between pages,
     * or even with elements in a page.
     *
     * spaces.small is the most popular one, then it is choosen.
     */
    gutter: 16
  },
  fonts: {
    fontSans: '"Open Sans", Tahoma, Verdana, Arial, sans-serif',
    fontSerif: 'Georgia, Times, "Times New Roman", serif',
    fontCondensed: '"Open Sans Condensed", Tahoma, Verdana, Arial, sans-serif'
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
  productImageRatio: '143%',
  defaultLineHeight: 1.57
}

const themeExtra = {
  ...theme,
  extra: {
    boxShadow: `0 1px 2px -1px ${theme.colors.colorDark}`
  }
}

export default themeExtra
