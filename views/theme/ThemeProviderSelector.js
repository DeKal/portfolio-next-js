import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/macro'
import { isChristmasDay, isNewYearComing } from '~/utils/helpers'
import theme from '~/theme/theme'
import christMasTheme from '~/theme/christMasTheme'
import newYearTheme from '~/theme/newYearTheme'
import GlobalStyleCss from '~/views/theme/GlobalStyleCss'

const ThemeProviderSelector = ({ children }) => {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyleCss theme={theme} />
    </ThemeProvider>
  )
}

ThemeProviderSelector.propTypes = {
  children: PropTypes.any
}

export default ThemeProviderSelector

const useTheme = () => {
  if (isChristmasDay()) {
    return christMasTheme
  }

  if (isNewYearComing()) {
    return newYearTheme
  }
  return theme
}
