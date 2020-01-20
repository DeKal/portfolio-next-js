import * as React from 'react'
import { shallowWithBaseTheme } from '~/modules/core/utils/withThemeProviders'
import Content from '~/modules/blogs/components/post/Content'
import theme from '~/modules/core/theme/styleguide/blogTheme'

describe('Blog Content', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithBaseTheme(<Content />, theme)
    expect(wrap).toMatchSnapshot()
  })
})
