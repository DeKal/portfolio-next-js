import * as React from 'react'
import { shallowWithBaseTheme } from '~/modules/core/utils/withThemeProviders'
import Header from '~/modules/blogs/components/post/Header'
import theme from '~/modules/core/theme/styleguide/blogTheme'

describe('Blog Header', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithBaseTheme(<Header />, theme)
    expect(wrap).toMatchSnapshot()
  })
})
