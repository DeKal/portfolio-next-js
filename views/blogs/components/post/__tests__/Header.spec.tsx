import * as React from 'react'
import { shallowWithBaseTheme } from '~/views/core/utils/withThemeProviders'
import Header from '~/views/blogs/components/post/Header'
import theme from '~/theme/blogTheme'

describe('Blog Header', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithBaseTheme(<Header />, theme)
    expect(wrap).toMatchSnapshot()
  })
})
