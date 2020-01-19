import * as React from 'react'
import { shallowWithBaseTheme } from '~/views/core/utils/withThemeProviders'
import Content from '~/views/blogs/components/post/Content'
import theme from '~/theme/blogTheme'

describe('Blog Content', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithBaseTheme(<Content />, theme)
    expect(wrap).toMatchSnapshot()
  })
})
