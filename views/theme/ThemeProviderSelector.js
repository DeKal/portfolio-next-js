import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/macro'
import { isChristmasDay, isNewYearComing } from '~/utils/helpers'
import theme from '~/theme/theme'
import christMasTheme from '~/theme/christMasTheme'
import newYearTheme from '~/theme/newYearTheme'

const ThemeProviderSelector = ({ children }) => {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      {children}
      <style jsx global>{`
        body:after {
          content: '';
          position: fixed;
          top: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          opacity: ${theme.images.bgPatternOpacity};
          z-index: -1;
          background: ${theme.colors.bgColor} url(${theme.images.bgPattern});
        }
      `}</style>
    </ThemeProvider>
  )
}

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
