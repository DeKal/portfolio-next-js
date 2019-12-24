import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/macro'
import { isChristmasDay, isNewYearComing } from '~/utils/helpers'
import theme from '~/theme/theme'
import christMasTheme from '~/theme/christMasTheme'
import newYearTheme from '~/theme/newYearTheme'

const ThemeProviderSelector = ({ children }) => (
  <ThemeProvider theme={useTheme()}> {children} </ThemeProvider>
)

ThemeProviderSelector.propTypes = {
  children: PropTypes.any,
  useTheme: PropTypes.func
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
