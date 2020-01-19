import * as React from 'react'
import { shallowWithBaseTheme } from '~/views/core/utils/withThemeProviders'
import PostInfo from '~/views/blogs/components/post/PostInfo'
import theme from '~/theme/blogTheme'

describe('Blog PostInfo', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithBaseTheme(<PostInfo />, theme)
    expect(wrap).toMatchSnapshot()
  })
})
