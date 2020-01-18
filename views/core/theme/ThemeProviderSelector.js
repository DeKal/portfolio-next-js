import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/macro'
import {
  isChristmasDay,
  isNewYearComing,
  isTet,
  isBlogs
} from '~/utils/helpers'
import theme from '~/theme/theme'
import christMasTheme from '~/theme/christMasTheme'
import newYearTheme from '~/theme/newYearTheme'
import tetTheme from '~/theme/tetTheme'
import blogTheme from '~/theme/blogTheme'
import GlobalStyleCss from '~/views/core/theme/GlobalStyleCss'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  console.log(isBlogs(router.pathname))
  if (isBlogs(router.pathname)) {
    return blogTheme
  }

  if (isChristmasDay()) {
    return christMasTheme
  }

  if (isNewYearComing()) {
    return newYearTheme
  }

  if (isTet()) {
    return tetTheme
  }

  return theme
}
