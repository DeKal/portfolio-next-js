import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/macro'
import {
  isChristmasDay,
  isNewYearComing,
  isTet,
  isBlogs
} from '~/views/core/utils/helpers'
import theme from '~/views/core/theme/styleguide/theme'
import christMasTheme from '~/views/core/theme/styleguide/christMasTheme'
import newYearTheme from '~/views/core/theme/styleguide/newYearTheme'
import tetTheme from '~/views/core/theme/styleguide/tetTheme'
import blogTheme from '~/views/core/theme/styleguide/blogTheme'
import GlobalStyleCss from '~/views/core/theme/GlobalStyleCss'
import { useRouter } from 'next/router'

const ThemeProviderSelector = ({ children }) => {
  const router = useRouter()
  const theme = useTheme(router)
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

const useTheme = router => {
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
