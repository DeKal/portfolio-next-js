import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components/macro'
import {
  isChristmasDay,
  isNewYearComing,
  isTet,
  isBlogs
} from '~/modules/core/utils/helpers'
import theme from '~/modules/core/theme/styleguide/theme'
import christMasTheme from '~/modules/core/theme/styleguide/christMasTheme'
import newYearTheme from '~/modules/core/theme/styleguide/newYearTheme'
import tetTheme from '~/modules/core/theme/styleguide/tetTheme'
import blogTheme from '~/modules/core/theme/styleguide/blogTheme'
import GlobalStyleCss from '~/modules/core/theme/GlobalStyleCss'
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
